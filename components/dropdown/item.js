import Intact from 'intact';
import template from './item.vdt';
import Dropdown from './dropdown';
import DropdownMenu from './menu';

export default class DropdownItem extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        disabled: Boolean,
        hideOnSelect: Boolean,
    };

    defaults() {
        return {
            disabled: false,
            hideOnSelect: true,
        };
    }

    _init() {
        // if selected hide all dropdown menu
        this.on('select', () => {
            if (this.get('hideOnSelect')) {
                const parent = this._findAncestorDropdown();
                parent.hide(true);
            }
        });
    }

    onClick(e) {
        if (this.get('disabled')) return;

        this.trigger('click', e);

        // is not a sub dropdown trigger
        if (this.parentVNode.tag !== Dropdown) {
            this.trigger('select', e);
        }
    }

    _findAncestorDropdown() {
        let ret;
        let parent = this.parentVNode;
        while (parent) {
            if (parent.tag === DropdownMenu) {
                ret = parent.children;        
            }
            parent = parent.parentVNode;
        }
        return ret;
    }
}
