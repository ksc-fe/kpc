import {createRef, onUnmounted} from 'intact';
import {useState} from './useState';

export type Options = {
    onStart?: (e: MouseEvent) => void,
    onMove: (e: MouseEvent) => void,
    onEnd?: (e?: MouseEvent) => void,
}

export function useDraggable(options: Options) {
    const dragging = useState(false);

    function start(e: MouseEvent) {
        // ignore if it isn't left key
        if (e.which !== 1) return;

        dragging.set(true);

        if (options.onStart) {
            options.onStart(e);
        }

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', end);
    }

    function move(e: MouseEvent) {
        e.preventDefault();

        if (dragging.value) {
            options.onMove(e);
        }
    }

    function end(e?: MouseEvent) {
        if (dragging.value) {
            dragging.set(false);
            if (options.onEnd) {
                options.onEnd(e);
            }
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', end);
        }
    }

    onUnmounted(() => end());

    return {start, dragging};
}
