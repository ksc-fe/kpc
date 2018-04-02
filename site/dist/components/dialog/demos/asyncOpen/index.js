export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Dialog from './dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showDialog(e) {
        // button show loading
        e.component.showLoading();

        const dialog = new Dialog();

        dialog.show();
        dialog.on('ok', (data) => {
            Message.info(`You clicked ok.`);
        });

        // button hide loading
        dialog.on('open', () => e.component.hideLoading());

        // for unit test
        this.dialog = dialog;
    }
}