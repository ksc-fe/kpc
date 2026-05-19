import {onBeforeUnmount, onMounted, useInstance} from 'intact';
import {useState} from '../../hooks/useState';
import type {State} from '../../hooks/useState';
import type {Sender} from './sender';

type AddFiles = (fileList: FileList | File[]) => void;

type DragDataTransfer = DataTransfer & {
    items?: ArrayLike<DragDataTransferItem>
}

type DragDataTransferItem = DataTransferItem & {
    webkitGetAsEntry?: () => DragFileSystemEntry | null
}

type DragFileSystemEntry = {
    isFile: boolean
    isDirectory: boolean
    name: string
}

type DragFileSystemFileEntry = DragFileSystemEntry & {
    file(
        success: (file: File) => void,
        error?: (error: Error) => void,
    ): void
}

type DragFileSystemDirectoryReader = {
    readEntries(
        success: (entries: DragFileSystemEntry[]) => void,
        error?: (error: Error) => void,
    ): void
}

type DragFileSystemDirectoryEntry = DragFileSystemEntry & {
    createReader(): DragFileSystemDirectoryReader
}

type SenderDragController = {
    readonly dragOver: State<boolean>
    counter: number
    isEnabled(): boolean
    stopEvent(e: Event): void
    onDragEnter(e: DragEvent): void
    onDragLeave(): void
    onDrop(e: DragEvent): void
    reset(): void
}

const controllers: SenderDragController[] = [];

let isListening = false;

function isFileDrag(e: DragEvent) {
    const types = e.dataTransfer?.types;
    return !!types && Array.from(types).includes('Files');
}

function getActiveController() {
    for (let i = controllers.length - 1; i >= 0; i--) {
        if (controllers[i].isEnabled()) {
            return controllers[i];
        }
    }
}

function toggleGlobalListeners() {
    const hasEnabledController = !!getActiveController();
    if (hasEnabledController === isListening) return;

    if (hasEnabledController) {
        document.addEventListener('dragenter', handleDocumentDragEnter);
        document.addEventListener('dragover', handleDocumentDragOver);
        document.addEventListener('dragleave', handleDocumentDragLeave);
        document.addEventListener('drop', handleDocumentDrop);
    } else {
        document.removeEventListener('dragenter', handleDocumentDragEnter);
        document.removeEventListener('dragover', handleDocumentDragOver);
        document.removeEventListener('dragleave', handleDocumentDragLeave);
        document.removeEventListener('drop', handleDocumentDrop);
    }

    isListening = hasEnabledController;
}

function registerController(controller: SenderDragController) {
    unregisterController(controller);
    controllers.push(controller);
    toggleGlobalListeners();
}

function unregisterController(controller: SenderDragController) {
    const index = controllers.indexOf(controller);
    if (index > -1) {
        controllers.splice(index, 1);
    }
    controller.reset();
    toggleGlobalListeners();
}

function handleDocumentDragEnter(e: DragEvent) {
    const controller = getActiveController();
    if (!controller || !isFileDrag(e)) return;

    controller.stopEvent(e);
    controller.onDragEnter(e);
}

function handleDocumentDragOver(e: DragEvent) {
    const controller = getActiveController();
    if (!controller || !isFileDrag(e)) return;

    controller.stopEvent(e);
    if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'copy'; // 让浏览器允许 drop 文件
    }
}

function handleDocumentDragLeave(e: DragEvent) {
    const controller = getActiveController();
    if (!controller || !isFileDrag(e)) return;

    controller.stopEvent(e);
    controller.onDragLeave();
}

function handleDocumentDrop(e: DragEvent) {
    const controller = getActiveController();
    if (!controller || !isFileDrag(e)) return;

    controller.onDrop(e);
}

function defineRelativePath(file: File, relativePath?: string) {
    if (!relativePath) return file;

    Object.defineProperty(file, 'webkitRelativePath', {
        value: relativePath,
        configurable: true,
    });

    return file;
}

function readFileEntry(
    entry: DragFileSystemFileEntry,
    relativePath?: string,
): Promise<File | null> {
    return new Promise(resolve => {
        entry.file(
            (file) => resolve(defineRelativePath(file, relativePath)),
            () => resolve(null),
        );
    });
}

function readDirectoryEntries(
    reader: DragFileSystemDirectoryReader,
): Promise<DragFileSystemEntry[]> {
    return new Promise(resolve => {
        const result: DragFileSystemEntry[] = [];

        function next() {
            reader.readEntries((entries) => {
                if (!entries.length) {
                    resolve(result);
                    return;
                }

                result.push(...entries);
                next();
            }, () => resolve(result));
        }

        next();
    });
}

async function extractEntryFiles(
    entry: DragFileSystemEntry,
    directoryEnabled: boolean,
    parentPath = '',
): Promise<File[]> {
    const relativePath = parentPath ? `${parentPath}/${entry.name}` : entry.name;

    if (entry.isFile) {
        const file = await readFileEntry(entry as DragFileSystemFileEntry, relativePath);
        return file ? [file] : [];
    }

    if (!entry.isDirectory || !directoryEnabled) return [];

    const reader = (entry as DragFileSystemDirectoryEntry).createReader();
    const entries = await readDirectoryEntries(reader);
    const groups = await Promise.all(entries.map(item => extractEntryFiles(item, directoryEnabled, relativePath)));

    return ([] as File[]).concat(...groups);
}

async function extractDroppedFiles(
    dataTransfer: DragDataTransfer | null | undefined,
    directoryEnabled: boolean,
): Promise<File[]> {
    if (!dataTransfer) return [];

    const items = dataTransfer.items ? Array.from(dataTransfer.items) : [];
    if (items.length) {
        const groups = await Promise.all(items.map(async item => {
            const entry = item.webkitGetAsEntry?.();
            if (entry) {
                return extractEntryFiles(entry, directoryEnabled);
            }

            const file = item.getAsFile?.();
            return file ? [file] : [];
        }));
        const files = ([] as File[]).concat(...groups);
        if (files.length) return files;
    }

    return dataTransfer.files?.length ? Array.from(dataTransfer.files) : [];
}

// Sender 的全屏拖拽上传只负责“页面级 drop 入口”；
// 真正的数量/类型/大小校验与上传动作仍统一复用 useSenderUpload.addFiles。
export function useSenderDrag(addFiles: AddFiles) {
    const instance = useInstance() as Sender;
    const dragOver = useState(false);

    function isEnabled() {
        return !!instance.get('dragFile') && !instance.get('disabled');
    }

    const controller: SenderDragController = {
        dragOver,
        counter: 0,
        isEnabled,
        stopEvent(e: Event) {
            e.preventDefault();
            e.stopPropagation();
        },
        onDragEnter() {
            if (instance.get('disabled')) return;

            controller.counter++;
            if (!dragOver.value) {
                dragOver.set(true);
            }
        },
        onDragLeave() {
            if (!controller.counter) return;

            controller.counter--;
            if (!controller.counter && dragOver.value) {
                dragOver.set(false);
            }
        },
        onDrop(e: DragEvent) {
            controller.stopEvent(e);
            controller.reset();
            if (instance.get('disabled')) return;

            const directoryEnabled = !!instance.get('uploadProps')?.directory;
            const directFiles = e.dataTransfer?.files;
            if (!directoryEnabled && directFiles?.length) {
                addFiles(directFiles);
                return;
            }

            void (async () => {
                // directory=true 时，目录拖拽会被递归拍平，最终仍交给同一套 addFiles 规则处理。
                const files = await extractDroppedFiles(
                    e.dataTransfer as DragDataTransfer | undefined,
                    directoryEnabled,
                );
                if (!files.length) return;

                addFiles(files);
            })();
        },
        reset() {
            controller.counter = 0;
            if (dragOver.value) {
                dragOver.set(false);
            }
        },
    };

    function syncController() {
        if (isEnabled()) {
            registerController(controller);
        } else {
            unregisterController(controller);
        }
    }

    onMounted(syncController);
    onBeforeUnmount(() => unregisterController(controller));

    instance.watch('dragFile', syncController);
    instance.watch('disabled', (disabled) => {
        if (disabled) {
            controller.reset();
        }
        syncController();
    });

    return {
        dragOver,
    };
}
