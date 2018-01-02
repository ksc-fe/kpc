import Intact from 'intact';
import template from './dropdown.vdt';

export default class Dropdown extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            trigger: 'hover'
        }
    }

    _mount() {
        this.get('menu').children.dropdown = this;
    }

    show(fn, e) {
        if (typeof fn === 'function') fn(e);

        const menu = this.get('menu').children;
        menu.show();
    }

    hide(fn, e) {
        if (typeof fn === 'function') fn(e);

        const menu = this.get('menu').children;
        menu.hide();
    }
}
