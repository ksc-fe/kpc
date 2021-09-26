import {useInstance} from 'intact';
import type {Upload} from './';
import {useState} from '../../hooks/useState';

export function useDrag(addFiles: (fileList: FileList) => void) {
    const instance = useInstance() as Upload;
    const dragOver = useState<boolean>(false);
    let counter = 0;

    function onDragEnter(e: Event) {
        e.preventDefault();
        counter++;
        if (dragOver.value || instance.get('disabled')) return;

        dragOver.set(true);
    }

    function onDragLeave(e: Event) {
        counter--;
        if (!counter) {
            dragOver.set(false);
        }
    }

    function onDrop(e: DragEvent) {
        stopEvent(e);
        counter = 0;
        if (!instance.get('disabled')) {
            dragOver.set(false);

            addFiles(e.dataTransfer!.files);
        }
    }

    function stopEvent(e: Event) {
        e.stopPropagation();
        e.preventDefault();
    }

    return {onDragEnter, onDragLeave, onDrop, stopEvent, dragOver};
}
