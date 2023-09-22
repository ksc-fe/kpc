import {onMounted, onBeforeUnmount, RefObject, useInstance} from 'intact';
import {debounce} from '../components/utils';
import ResizeObserver from 'resize-observer-polyfill'; 

export function useResizeObserver(
    elementRef: RefObject<HTMLElement>,
    callback: () => void,
    useDebounce: boolean = false,
) {
    const instance = useInstance()!;

    let ro: ResizeObserver;
    onMounted(() => {
        // use debounce instead of throttle, because if there is
        // transition on parent container, the width is weired
        // #342
        const fn = () => {
            if (instance.$unmounted) return;
            callback();
        };
        ro = new ResizeObserver(useDebounce ? debounce(fn, 100, true) : fn);
        ro.observe(elementRef.value!);
    });

    onBeforeUnmount(() => {
        if (!ro) return;
        ro.disconnect();
    });
}
