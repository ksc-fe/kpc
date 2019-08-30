export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Dialog from 'kpc/components/dialog';

export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick() {
        this.set('show', true);
    }

    _terminate() {
        Dialog.confirm({
            content: 'Are you sure you want to close the dialog?'
        }).then(() => {
            this.set('show', false);
        }, () => {});
    }
}