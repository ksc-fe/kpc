export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showDialog(type) {
        Dialog[type]({
            content: type,
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }

    showDialogWithTitle(type) {
        Dialog[type]({
            title: type[0].toUpperCase() + type.substring(1),
            content: type + ' dialog',
        }).then(() => {
            console.log('clicked ok button');
        }, () => {
            console.log('clicked cancel button');
        });
    }
}