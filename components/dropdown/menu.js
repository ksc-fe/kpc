import Intact from 'intact';
import template from './menu.vdt';
import position from '../moveWrapper/position';
import {findParentComponent, getTransition} from '../utils';

export default class DropdownMenu extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            show: false,
            trigger: 'hover',
            position: {},
            transition: 'slidedown',
        };
    }

    _init() {
        this.subDropdowns = [];
        this.items = [];
        this.focusIndex = -1;
        this.locked = false;
    }

    _mount() {
        const parent = this._findParentDropdownMenu();
        if (parent) parent.subDropdowns.push(this);

        if (this.get('show')) {
            this._addDocumentEvents();
        }
    }

    _findParentDropdownMenu() {
        return findParentComponent(DropdownMenu, this, true);
    }

    show() {
        clearTimeout(this.timer);
        this.set('show', true);
        const parent = this._findParentDropdownMenu();
        if (parent) {
            parent.show();
        }
    }

    hide(immediately) {
        if (!immediately) {
            this.timer = setTimeout(() => {
                this.set('show', false);
            }, 200);
        } else {
            this.set('show', false);
        }
    }

    toggle() {
        this.set('show', !this.get('show'));
    }

    position() {
        position(this.refs.menu.element, {
            my: 'center top+5', 
            at: 'center bottom', 
            of: this.dropdown.element,
            using: (feedback) => {
                this.set('transition', getTransition(feedback));
            },
            ...this.get('position')
        });
    }

    _onShow() {
        this.focusIndex = -1;
        this._addDocumentEvents();
        this.position();
    }

    _addDocumentEvents() {
        const parent = this._findParentDropdownMenu();
        if (!parent) {
            // if (this.get('trigger') === 'click') {
                document.addEventListener('click', this._onDocumentClick);
            // }
        } else {
            parent.locked = true;
        }

        document.addEventListener('keydown', this._onKeydown);
    }

    _removeDocumentEvents() {
        const parent = this._findParentDropdownMenu();
        if (!parent) {
            // if (this.get('trigger') === 'click') {
                document.removeEventListener('click', this._onDocumentClick);
            // }
        } else {
            parent.locked = false;
        }

        document.removeEventListener('keydown', this._onKeydown);
    }

    _onDocumentClick(e) {
        const target = e.target;
        const menu = this.refs.menu.element;

        // is a dropdown menu
        if (menu === target || menu.contains(target)) return;
        // is click on sub menu
        if (this._isClickSubMenu(target, this.subDropdowns)) return;
        // custom flag to indicate that the event does not lead to close menu
        if (e._dropdown) return;

        this.hide(true);
    }

    _onKeydown(e) {
        if (this.locked) {
            return;
        }
        switch (e.keyCode) {
            // down
            case 40:
                this._focusNextItem(e); 
                break;
            // up
            case 38:
                this._focusPrevItem(e); 
                break;
            // right
            case 39:
                this._showSubMenu(e);
                break;
            // left
            case 37:
                this._hideSubMenu(e);
                break;
            // enter
            case 13:
                this._selectItem(e);
                break;
        }
    }

    _focusNextItem(e) {
        const parent = this._findParentDropdownMenu();
        if (parent && this.focusIndex < 0) {
            return;
        }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex + 1, 'down');
    }

    _focusPrevItem(e) {
        const parent = this._findParentDropdownMenu();
        if (parent && this.focusIndex < 0) {
            return;
        }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex - 1, 'up');
    }

    focusItemByIndex(index, direction = 'down') {
        const items = this.items;
        const max = items.length - 1;
        const oldIndex = this.focusIndex;

        function fixIndex(index) {
            if (index > max) {
                index = 0;
            } else if (index < 0) {
                index = max;
            }
            return index;
        }

        index = fixIndex(index);

        let i = 0;
        while (i <= max && items[index] && items[index].get('disabled')) {
            index = fixIndex(direction === 'down' ? index + 1 : index - 1);
            i++;
        }

        // all items are disabled
        if (i > max) return;

        this.focusIndex = index;

        if (oldIndex > -1 && items[oldIndex]) {
            items[oldIndex].unFocus();
        }

        items[index].focus();
    }

    _selectItem(e) {
        this._showSubMenu(e);
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex].select();
        }
    }

    _showSubMenu(e) {
        const parent = this._findParentDropdownMenu();
        if (!parent && this.focusIndex < 0) return;

        e.preventDefault();
        if (parent && this.focusIndex < 0) {
            this.focusItemByIndex(0);
        } else if (this.focusIndex > -1) {
            this.items[this.focusIndex].showMenuAndFocus();
        }
    }

    _hideSubMenu(e) {
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex].hideMenu();

            const parent = findParentComponent(DropdownMenu, this, true);
            if (parent) {
                this.dropdown.hide(null, null, true);
            }
        }
    }

    focusItem(item) {
        const index = this.items.indexOf(item);
        this.focusItemByIndex(index);
    }

    _isClickSubMenu(target, subMenus) {
        let ret = false;
        for (let i = 0; i < subMenus.length; i++) {
            const subMenu = subMenus[i].refs.menu;
            if (subMenu) {
                if (target === subMenu.element || subMenu.element.contains(target)) {
                    ret = true;
                    break;
                } else {
                    ret = this._isClickSubMenu(target, subMenus[i].subDropdowns);
                    if (ret) break;
                }
            }
        }
        return ret;
    }

    _destroy() {
        const parent = this._findParentDropdownMenu();
        if (parent) {
            const subDropdowns = parent.subDropdowns;
            subDropdowns.splice(subDropdowns.indexOf(this), 1);
        } 
        clearTimeout(this.timer);
        this._removeDocumentEvents();
    }
}
