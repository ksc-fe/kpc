import {VNode, VNodeComponentClass} from 'intact';
import type {Dialog, DialogProps} from './';
import template from './alert.vdt';

export interface AlertDialogProps extends DialogProps {
    content?: string | VNode
    type?: 'success' | 'warning' | 'error' | 'confirm' 
    hideIcon?: boolean
    hideFooter?: boolean
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

    type PromiseWithDialog = Promise<void> & { dialog: AlertDialog };

    function show(options: AlertDialogProps = {}) {
        const dialog = new AlertDialog(options);
        dialog.show();
        const p = new Promise<void>((resolve, reject) => {
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
        }) as PromiseWithDialog;

        p.dialog = dialog;

        return p;
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
