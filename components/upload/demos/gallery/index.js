export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Dialog from 'kpc/components/dialog';
import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _onError(err) {
        Message.error(err.message);
    }
}