import {useInstance} from 'intact';
import type {Sender} from './sender';

type AddFiles = (fileList: FileList | File[]) => void;

function getClipboardFiles(e: ClipboardEvent) {
    const clipboardData = e.clipboardData;
    if (!clipboardData) return [];

    const items = clipboardData.items ? Array.from(clipboardData.items) : [];
    if (items.length) {
        return items
            .filter(item => item.kind === 'file')
            .map(item => item.getAsFile())
            .filter((file): file is File => !!file);
    }

    return clipboardData.files?.length ? Array.from(clipboardData.files) : [];
}

// 粘贴上传只负责把剪贴板里的文件交给统一上传入口；
// 没有文件时保留原生粘贴文本行为。
export function useSenderPaste(addFiles: AddFiles) {
    const instance = useInstance() as Sender;

    function handlePaste(e: ClipboardEvent) {
        if (
            !instance.get('pasteFile') ||
            instance.get('disabled') ||
            instance.get('inputDisabled') ||
            instance.get('readonly')
        ) return;

        const files = getClipboardFiles(e);
        if (!files.length) return;

        e.preventDefault();
        addFiles(files);
    }

    return {
        handlePaste,
    };
}
