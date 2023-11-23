import type {Dialog, DialogProps} from './';
import template from './alert.vdt';

export interface AlertDialogProps extends DialogProps {
    content?: string | object 
    type?: 'success' | 'warning' | 'error' | 'confirm' 
    hideIcon?: boolean
    hideFooter?: boolean
    ref?: (i: Dialog) => void
    className?: string
    iconClassName?: string
    icon?: object 
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
        const normalize = (Component as any).normalize;
        if (normalize) {
            if (options.content) {
                options = {...options, content: normalize(options.content)};
            }
            if (options.icon) {
                options = {...options, icon: normalize(options.icon)};
            }
        }

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
