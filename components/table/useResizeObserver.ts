import {onMounted, onBeforeUnmount, RefObject, useInstance} from "intact";
import {debounce} from '../utils';
import ResizeObserver from 'resize-observer-polyfill';

export function useResizeObserver(elementRef: RefObject<HTMLElement>, callback: Function) {
    const instance = useInstance()!;

    let ro: ResizeObserver;
    onMounted(() => {
        // use debounce instead of throttle, because if there is
        // transition on parent container, the width is weired
        // #342
        ro = new ResizeObserver(debounce(() => {
            if (instance.$unmounted) return;
            callback();
        }, 100, true));
        ro.observe(elementRef.value!);
    });
    onBeforeUnmount(() => {
        ro.disconnect();
    });
}
