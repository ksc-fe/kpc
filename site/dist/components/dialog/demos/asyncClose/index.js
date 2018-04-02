export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    async ok(dialog) {
        // validate the form firstly
        if (await this.refs.form.validate()) {
            // make the ok button show loading
            dialog.showLoading(); 
            // mock api
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 2000);
            }).then(() => {
                // if success, close dialog 
                dialog.hideLoading();
                dialog.close();
            }, () => {
                // if error, don't close dialog
                dialog.hideLoading();
                Message.error('error occured');
            });
        }
    }
}