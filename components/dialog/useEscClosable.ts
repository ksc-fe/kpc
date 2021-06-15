import {useInstance, onUnmounted} from 'intact';
import type {Dialog} from './index';

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

    instance.on('show', () => {
        if (!dialogs.length) {
            document.addEventListener('keydown', escClose);
        }
        dialogs.push(instance);
    });

    function onHide() {
        dialogs.pop();
        if (!dialogs.length) {
            document.removeEventListener('keydown', escClose);
        }
    }

    instance.on('hide', onHide);

    onUnmounted(() => {
        if (instance.get('value')) {
            if (process.env.NODE_ENV !== 'production') {
                if (dialogs[dialogs.length - 1] !== instance) {
                    throw new Error('The dialog has handled hide callback. It is a bug of KPC');
                }
            }

            onHide();
        }
    });
}
