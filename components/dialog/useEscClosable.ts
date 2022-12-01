import {useInstance, onUnmounted} from 'intact';
import type {Dialog} from './index';
import {SHOW, HIDE} from './constants';

// only close the top dialog when press ESC
const dialogs: Dialog[] = [];
const escClose = (e: KeyboardEvent) => {
    const dialog = dialogs[dialogs.length - 1];
    if (e.keyCode === 27 && dialog.get('escClosable')) {
        dialog.terminate();
    }
};

export function useEscClosable() {
    const instance = useInstance() as Dialog;

    instance.on(SHOW, () => {
        if (!dialogs.length) {
            document.addEventListener('keydown', escClose);
        }
        dialogs.push(instance);
    });

    function onHide() {
        // the order is uncertain in different frameworks
        const index = dialogs.indexOf(instance);
        // const dialog = dialogs.pop();
        // const dialog = dialogs.shift();
        if (process.env.NODE_ENV !== 'production') {
            // if (dialog !== instance) {
            if (index === -1) {
                throw new Error('The dialog has handled hide callback. Maybe it is a bug of KPC');
            }
        }
        dialogs.splice(index, 1);

        if (!dialogs.length) {
            document.removeEventListener('keydown', escClose);
        }
    }

    instance.on(HIDE, onHide);

    onUnmounted(() => {
        if (instance.get('value')) {
            onHide();
        }
    });
}
