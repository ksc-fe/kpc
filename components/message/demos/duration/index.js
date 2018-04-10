export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showMessage1() {
        Message.info('close after 10s', 10000);
    }

    showMessage2() {
        Message.info('stick message', 0);
    }
}