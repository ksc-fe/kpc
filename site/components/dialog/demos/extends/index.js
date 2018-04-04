export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Dialog from './dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showDialog() {
        const dialog = this.dialog = new Dialog();
        dialog.show();
        dialog.on('ok', (data) => {
            Message.info(`data from dialog: ${data}`);
        });
    }

    _destroy() {
        if (this.dialog) {
            this.dialog.close();
        }
    }
}