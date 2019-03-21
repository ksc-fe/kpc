export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _search(keywords) {
        Message.success('Search by keywords: ' + keywords);
    }
}