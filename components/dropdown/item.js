import Intact from 'intact';
import template from './item.vdt';
import Dropdown from './dropdown';
import DropdownMenu from './menu';
import {findParentComponent} from '../utils';

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

            _isFocus: false,
        };
    }

    _init() {
        // if selected hide all dropdown menu
        this.on('select', () => {
            if (this.get('hideOnSelect')) {
                const ancestor = this._findAncestorDropdownMenu();
                ancestor.hide(true);
            }
        });
    }

    _mount() {
        const parent = this.parent = this._findAncestorDropdownMenu(true);
        parent.items.push(this);
    }

    _onClick(e) {
        if (this.get('disabled')) return;

        this.trigger('click', e);

        // is not a sub dropdown trigger
        if (this.parentVNode.tag !== Dropdown) {
            this.trigger('select', this, e);
        }
    }

    _onMouseEnter(e) {
        this.trigger('mouseenter', e);

        if (this.get('disabled')) return;

        this.parent.focusItem(this);
    }

    _onMouseLeave(e) {
        this.trigger('mouseleave', e);
        // if (this.get('disabled')) return;
    }

    select() {
        // is not a sub dropdown trigger
        const dropdown = this._isSubMenu();
        if (!dropdown) {
            this.trigger('select', this);
        } else {
            dropdown.show();
        }
    }

    focus() {
        this.set('_isFocus', true);

        const elRect = this.element.getBoundingClientRect();
        const pEl = this.parent.refs.menu.element;
        const pElRect = pEl.getBoundingClientRect();
        const bottomOverflowDistance = elRect.bottom - pElRect.bottom;
        const topOverflowDistance = elRect.top - pElRect.top;
        
        if (bottomOverflowDistance > 0) {
            pEl.scrollTop += bottomOverflowDistance;
        } else if (topOverflowDistance < 0) {
            pEl.scrollTop += topOverflowDistance;
        }
    }

    unFocus() {
        this.set('_isFocus', false);

        const dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.hide(null, null, true);
        }
    }

    showMenuAndFocus() {
        const dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.show(null, null, true);
        }
    }

    hideMenu() {
        const dropdown = this._isSubMenu();
        if (dropdown) {
            dropdown.hide(null, null, true);
        }
    }

    _isSubMenu() {
        if (this.parentVNode.tag === Dropdown) {
            return this.parentVNode.children;
        }
    }

    _findAncestorDropdownMenu(isFirst) {
        return findParentComponent(DropdownMenu, this, isFirst);
    }

    _destroy() {
        const items = this.parent.items;
        items.splice(items.indexOf(this), 1);
    }
}
