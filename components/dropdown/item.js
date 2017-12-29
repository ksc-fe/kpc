import Intact from 'intact';
import template from './item.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    onClick(e) {
        this.trigger('click', e);
        this.trigger('select', e);
    }
}
