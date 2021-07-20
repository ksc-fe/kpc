/**
 * don't hide the dropdown when user mouse down and move outside, #392
 * the order of events is mousedown -> mouseup -> click
 */
import {onBeforeUnmount, RefObject, onMounted} from 'intact';
import {containsOrEqual} from './useDocumentClick';

export function useMouseOutsidable(elementRef: RefObject<HTMLElement>) {
    let timer: number;

    function onMouseDown() {
        document.addEventListener('click', onDocumentClick, true);
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseUp() {
        timer = window.setTimeout(() => {
            document.removeEventListener('click', onDocumentClick, true);
        });
        document.removeEventListener('mouseup', onMouseUp);
    }

    function onDocumentClick(e: MouseEvent) {
        if (!containsOrEqual(elementRef.value!, e.target as Element)) {
            e.stopPropagation();
        }
    }

    onMounted(() => {
        elementRef.value!.addEventListener('mousedown', onMouseDown);
    });

    onBeforeUnmount(() => {
        clearTimeout(timer);
        elementRef.value!.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('click', onDocumentClick, true);
        document.removeEventListener('mouseup', onMouseUp);
    });
}
