import {onUnmounted} from 'intact';

export type Handler = (e: KeyboardEvent) => void;
export type Listener = (fn: () => void) => () => void;
export type Options = {
    down: Handler
    up: Handler
    right: Handler
    left: Handler
    enter: Handler
    default?: Handler
}

export function useKeyboard(options: Options) {
    let locked = false;
    const onKeydown = (e: KeyboardEvent) => {
        if (locked) return;

        switch (e.keyCode) {
            // down
            case 40:
                options.down(e);
                break;
            // up
            case 38:
                options.up(e);
                break;
            // right
            case 39:
                options.right(e);
                break;
            // left
            case 37:
                options.left(e);
                break;
            // enter
            case 13:
                options.enter(e);
                break;
            default:
                options.default && options.default(e);
                break;
        }
    };

    const removeEventListener = () => {
        document.removeEventListener('keydown', onKeydown);
    };
    const addEventListener = () => {
        document.addEventListener('keydown', onKeydown);
    };
    onUnmounted(removeEventListener);

    return [addEventListener, removeEventListener, (v: boolean) => locked = v] as const;
}
