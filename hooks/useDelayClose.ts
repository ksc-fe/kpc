import {onMounted, useInstance, onUnmounted} from 'intact';

export function useDelayClose(close: () => void, duration: number) {
    const instance = useInstance();
    let timer: number;

    function delayClose() {
        if (duration) {
            timer = window.setTimeout(close, duration);
        }
    }

    function onMouseEnter(e: MouseEvent) {
        instance!.trigger('mouseenter', e);
        clearTimeout(timer);
    }

    function onMouseLeave(e: MouseEvent) {
        instance!.trigger('mouseleave', e);

        // mouse leave event is not a delegated event,
        // and it will not unmount when the dom has unmounted,
        // so we must detect the $unmounted status here
        if (instance!.$unmounted) return;

        clearTimeout(timer);
        delayClose();
    }

    onMounted(delayClose);
    onUnmounted(() => {
        clearTimeout(timer);
    });

    return {onMouseEnter, onMouseLeave};
}
