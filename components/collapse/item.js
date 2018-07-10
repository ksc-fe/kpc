import Intact from 'intact';
import template from './item.vdt';

export default class CollapseItem extends Intact {
    @Intact.template()
    static template = template;

    _toggle() {
        this.get('_parent')._changeValue(this.get('value'));
    }

    _enterStart(el) {
        el.style.height = el.children[0].clientHeight + 'px'; 
    }

    _leaveStart(el) {
        el.style.height = el.children[0].clientHeight + 'px'; 
    }

    _enterEnd(el) {
        el.style.height = '';
    }
}
