/**
 * don't hide the dropdown when user mouse down and move outside, #392
 * the order of events is mousedown -> mouseup -> click
 */
import {onUnmounted, createRef} from 'intact';

export function useMouseOutsidable() {
    let mousedownRef = createRef<boolean>();
    let timer: number;

    function onMouseDown() {
        mousedownRef.value = true;
        document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseUp() {
        timer = window.setTimeout(() => {
            mousedownRef.value = false;
        });
        document.removeEventListener('mouseup', onMouseUp);
    }

    onUnmounted(() => {
        clearTimeout(timer);
        mousedownRef.value = false;
        document.removeEventListener('mouseup', onMouseUp);
    });

    return [onMouseDown, mousedownRef] as const;
}
