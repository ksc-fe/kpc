import Intact from 'intact';
import template from './menu.vdt';
import position from '../moveWrapper/position';

export default class DropdownMenu extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            show: false,
            trigger: 'hover',
            position: {},
        };
    }

    _init() {
        this.subDropdowns = [];

        this.on('$changed:show', (c, value) => {
            if (value) {
                this._addDocumentClick();
                this.position();
            } else {
                this._removeDocumentClick();
            }
        });

        this._onDocumentClick = this._onDocumentClick.bind(this);
    }

    _mount() {
        const parent = this._findParentDropdown();
        if (parent) parent.subDropdowns.push(this);

        if (this.get('show')) {
            this._addDocumentClick();
        }
    }

    _findParentDropdown() {
        let parentVNode = this.parentVNode;
        while (parentVNode) {
            if (parentVNode.tag === DropdownMenu) {
                return parentVNode.children;
            }
            parentVNode = parentVNode.parentVNode;
        }
    }

    show() {
        clearTimeout(this.timer);
        this.set('show', true);
        const parent = this._findParentDropdown();
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
            ...this.get('position')
        });
    }

    _addDocumentClick() {
        if (this.get('trigger') === 'click') {
            document.addEventListener('click', this._onDocumentClick);
        }
    }

    _removeDocumentClick() {
        if (this.get('trigger') === 'click') {
            document.removeEventListener('click', this._onDocumentClick);
        }
    }

    _onDocumentClick(e) {
        const target = e.target;
        const menu = this.refs.menu.element;

        // is a dropdown menu
        if (menu === target || menu.contains(target)) return;
        // is click on sub menu
        if (this._isClickSubMenu(target, this.subDropdowns)) return;

        this.hide(true);
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
        const parent = this._findParentDropdown();
        if (parent) {
            const subDropdowns = parent.subDropdowns;
            subDropdowns.splice(subDropdowns.indexOf(this), 1);
        } 
        clearTimeout(this.timer);
        this._removeDocumentClick();
    }
}
