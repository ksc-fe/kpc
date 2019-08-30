export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            current1: 1, 
            current2: 1,
            limit: 20
        }
    };

    _fetch1(c, current) {
        // fetch data
        this.set('current1', current);
        Message.info(`current page: ${current}`);
    }

    _fetch2({current, limit}) {
        Message.info(`current page: ${current}, limit: ${limit}`);
    }
}