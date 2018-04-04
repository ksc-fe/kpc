export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    onOk() {
        Message.success('You clicked ok button.');
    }

    onCancel() {
        Message.error('You clicked cancel button.');
    }
}