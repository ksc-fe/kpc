import Intact from 'intact';
import template from './_formItem.vdt';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }
}
