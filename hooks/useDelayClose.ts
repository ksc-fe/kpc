import {onMounted, useInstance, onUnmounted, Component} from 'intact';

export function useDelayClose(close: () => void, duration: number) {
    const instance = useInstance() as Component<
        {}, {mouseenter: [MouseEvent], mouseleave: [MouseEvent]}
    >;
    let timer: number | null = null;

    function delayClose() {
        if (duration) {
            timer = window.setTimeout(close, duration);
        }
    }

    function onMouseEnter(e: MouseEvent) {
        instance!.trigger('mouseenter', e);
        clear();
    }

    function onMouseLeave(e: MouseEvent) {
        instance!.trigger('mouseleave', e);

        // mouse leave event is not a delegated event,
        // and it will not unmount when the dom has unmounted,
        // so we must detect the $unmounted status here
        if (instance!.$unmounted) return;

        clear();
        delayClose();
    }

    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    onMounted(delayClose);
    onUnmounted(clear);

    return {onMouseEnter, onMouseLeave};
}
