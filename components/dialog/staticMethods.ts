import {VNode, VNodeComponentClass} from 'intact';
import type {Dialog, DialogProps} from './';
import template from './alert.vdt';

export interface AlertDialogProps extends DialogProps {
    content?: string | VNode
    type?: 'success' | 'warning' | 'error' | 'confirm' 
    hideIcon?: boolean
    hideFooter?: boolean
    ref?: (i: Dialog) => void
}

export type StaticMethod = (options?: AlertDialogProps) => Promise<void>

export function addStaticMethods(Component: typeof Dialog) {
    class AlertDialog extends Component {
        static template = template;
        static defaults = (): Partial<AlertDialogProps> =>({
            ...Component.defaults(),
            title: undefined,
            type: 'success',
            size: 'mini',
            hideClose: true,
        });
    }

    function show(options: AlertDialogProps = {}) {
        const dialog = new AlertDialog(options);
        dialog.show();

        if (options.ref) options.ref(dialog);

        return new Promise<void>((resolve, reject) => {
            dialog.on('ok', () => {
                resolve();
            });
            dialog.on('cancel', () => {
                reject();
            });
            // if press esc, treat it as cancel too
            dialog.on('terminate', () => {
                reject();
            });
        });
    }

    (['success', 'warning', 'error', 'confirm'] as const).forEach(type => {
        Component[type] = (options: AlertDialogProps = {}) => {
            const closable = type === 'confirm';
            options = {
                closable, 
                escClosable: closable, 
                ...options,
                type
            };
            return show(options);
        }
    });
}
