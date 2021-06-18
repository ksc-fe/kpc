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
        const dialog = dialogs.pop();
        if (process.env.NODE_ENV !== 'production') {
            if (dialog !== instance) {
                throw new Error('The dialog has handled hide callback. It is a bug of KPC');
            }
        }

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
