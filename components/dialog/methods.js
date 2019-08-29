import Intact, {normalize} from 'intact';
import template from './alert.vdt';

export default function addStaticMethods(Dialog) {
    class AlertDialog extends Dialog {
        @Intact.template()
        static template = template;

        defaults() {
            return {
                ...super.defaults(),
                title: undefined,
                content: undefined,
                type: 'success',
                size: 'mini',
                hideIcon: false,
                hideFooter: false,
                showClose: false,

                _title: undefined,
            };
        }
    }

    function show(options = {}) {
        return new Promise((resolve, reject) => {
            const dialog = new AlertDialog(options);
            dialog.show();
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

    ['success', 'warning', 'error', 'confirm'].forEach(type => {
        Dialog[type] = (options = {}) => {
            options = {...options, type};
            if (options.title) {
                options._title = options.title;
                delete options.title;
            }
            options.escClosable = type === 'confirm'
            return show(options);
        }
    });
}
