import {VNode, VNodeComponentClass} from 'intact';
import type {Dialog, DialogProps} from './index';
import template from './alert.vdt';

export interface AlertDialogProps extends DialogProps {
    content?: string | VNode
    type?: 'success' | 'warning' | 'error' | 'confirm' 
    hideIcon?: boolean
    hideFooter?: boolean
}

export function addStaticMethods(Component: typeof Dialog) {
    class AlertDialog extends Component<AlertDialogProps> {
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
        return new Promise<void>((resolve, reject) => {
            const dialog = new AlertDialog(options, null as unknown as VNodeComponentClass<any>, false, [], null);
            dialog.show(options);
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
        (Component as any)[type] = (options: AlertDialogProps = {}) => {
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
