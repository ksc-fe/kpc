import {useInstance, onBeforeUnmount} from 'intact';
import type {Carousel} from './';

export function useAutoplay(next: () => void) {
    const instance = useInstance() as Carousel;

    let timer: number;
    let ms: number;

    instance.on('$receive:autoplay', v => {
        if (v === true) {
            ms = 5000;
        } else {
            ms = v || 0;
        }

        stop();
        play();
    });

    function play() {
        if (ms) {
            timer = window.setTimeout(() => {
                next();
                play();
            }, ms);
        }
    }

    function stop() {
        window.clearTimeout(timer);
    }

    onBeforeUnmount(stop);

    return {stop, play};
}
