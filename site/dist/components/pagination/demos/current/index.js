export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {current: 1}
    };

    _fetch(c, current) {
        // fetch data
        this.set('current', current);
        Message.info(`current page: ${current}`);
    }
}