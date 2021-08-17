import {onMounted, onBeforeUnmount, RefObject} from 'intact';
import ResizeObserver from 'resize-observer-polyfill'; 

export function useResizeObserver(elementRef: RefObject<HTMLElement>, callback: () => void) {
    let ro: ResizeObserver;

    onMounted(() => {
        ro = new ResizeObserver(callback);
        ro.observe(elementRef.value!);
    });

    onBeforeUnmount(() => {
        if (ro) {
            ro.disconnect();
        }
    });
}
