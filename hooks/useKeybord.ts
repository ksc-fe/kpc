import {onUnmounted} from 'intact';

export type Handler = (e: KeyboardEvent) => void;
export type Listener = (fn: () => void) => void;
export type Options = {
    down: Handler
    up: Handler
    right?: Handler
    left?: Handler
    enter?: Handler

    onAdd: Listener
    onRemove: Listener
}

export function useKeyboard(options: Options) {
    const onKeydown = (e: KeyboardEvent) => {
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
            // case 39:
                // options.right(e);
                // break;
            // // left
            // case 37:
                // options.left(e);
                // break;
            // // enter
            // case 13:
                // options.enter(e);
                // break;
        }
    };

    const removeEventListener = () => document.removeEventListener('keydown', onKeydown);

    options.onAdd(() => document.addEventListener('keydown', onKeydown));
    options.onRemove(removeEventListener);
    onUnmounted(removeEventListener);
}
