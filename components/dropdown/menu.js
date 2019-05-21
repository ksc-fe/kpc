import Intact from 'intact';
import template from './menu.vdt';
import position from '../moveWrapper/position';
import {findParentComponent, getTransition} from '../utils';
import Dropdown from './dropdown';

export default class DropdownMenu extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: Boolean,
        trigger: ['hover', 'click'],
        position: Object,
        transition: String,
        // Event is undefined in NodeJs
        of: ['self', 'parent', Object/* Intact Event */, typeof Event === 'undefined' ? undefined : Event],
        container: [String, Function],
    };

    static events = {
        show: true,
        hide: true,
        positioned: true,
    };

    defaults() {
        return {
            value: false,
            trigger: 'hover',
            position: {},
            transition: 'c-slidedown',
            of: 'self', // self | parent
            container: undefined,
        };
    }

    _init() {
        this.subDropdowns = [];
        this.items = [];
        this.focusIndex = -1;
        this.locked = false;

        this.on('$change:value', (c, v) => {
            // contextmenu has not dropdown
            if (this.dropdown) {
                this.dropdown.set('_isShow', v);
            }
        });

        this.on('$changed:value', (c, value) => {
            if (value) {
                this.trigger('show', this);
            } else {
                this.trigger('hide', this);
            }
        });
        this.on('show', this._onShow);
        this.on('hide', this._removeDocumentEvents);
        this.on('$changed:of', () => {
            if (this.get('value')) {
                this.position();
            }
        });
    }

    _mount() {
        const parent = this._findParentDropdownMenu();
        if (parent) parent.subDropdowns.push(this);

        // the previous sibling is Dropdown
        let triggerElement = this.element.previousSibling;
        // maybe it is used as contextmenu
        if (!triggerElement) return;
        // in react, it may be a comment which value is ' react-mount-point-unstable ' 
        if (
            triggerElement.nodeType === 8 && 
            triggerElement.nodeValue === ' react-mount-point-unstable '
        ) {
            triggerElement = triggerElement.previousSibling;
        }
        let dropdown;
        if (dropdown = triggerElement._dropdown) {
            this.dropdown = dropdown;
            dropdown.menu = this;
        }

        if (this.get('value')) {
            this._onShow();
        }
    }

    _findParentDropdownMenu() {
        return findParentComponent(DropdownMenu, this, true);
    }

    show() {
        clearTimeout(this.timer);
        this.set('value', true);
        const parent = this._findParentDropdownMenu();
        if (parent) {
            const showedMenu = parent._showedMenu;
            if (showedMenu && showedMenu !== this) {
                showedMenu.hide(true);
            }
            parent._showedMenu = this;
            // hide last showed menu will unlock the parent
            // so we lock it here when show this menu
            parent.locked = true;

            // because parent will hide when click outside
            // we call parent show method to clear the timer of hiding
            parent.show();
        }
    }

    hide(immediately) {
        if (!immediately) {
            this.timer = setTimeout(() => {
                this.set('value', false);
            }, 200);
        } else {
            this.set('value', false);
        }
    }

    toggle() {
        this.set('value', !this.get('value'));
    }

    position() {
        // if the dropdown menu is nested, then show the parent first
        // and show the child menu later
        const p = (_of, transition) => {
            let using;
            position(this.refs.menu.element, {
                my: 'center top+8', 
                at: 'center bottom', 
                of: _of,
                using: (feedback) => {
                    using = () => {
                        // let the child menu has the same transition with parent menu
                        this.set('transition', transition || getTransition(feedback));
                        using = null;
                    } 
                    // if it is the first menu, getTransition immediately
                    if (!transition) {
                        using();
                    }
                },
                ...this.get('position')
            });
            this.positioned = true;
            this.trigger('positioned', transition);
            using && using();
        }

        let _of = this.get('of');
        if (_of  === 'parent') {
            const parent = this._findParentDropdownMenu();
            if (parent) {
                _of = parent.refs.menu.element;
                if (parent.positioned) {
                    p(_of);
                } else {
                    parent.one('positioned', (transition) => {
                        p(_of, transition || parent.get('transition'));
                    });
                }
            }
        } else if (_of === 'self') {
            _of = this.dropdown.element;
            p(_of);
        } else {
            p(_of);
        }
    }

    _onShow() {
        this.focusIndex = -1;
        this._addDocumentEvents();
        this.position();
    }

    _addDocumentEvents() {
        const parent = this._findParentDropdownMenu();
        if (!parent) {
            // no matter what the trigger is
            // we should let the layer hide when click document. #52

            // in vue the click event of trigger element
            // will propagate to document immediately
            // and this will lead close the layer. #209
            // we need to set this _dropdown to `this` to indentify
            // which component has been clicked. Otherwise the menu 
            // will not hide when click the other component. #221
            if (this.__event) this.__event._dropdown = this;

            document.addEventListener('click', this._onDocumentClick);
        } else {
            parent.locked = true;
        }

        document.addEventListener('keydown', this._onKeydown);
    }

    _removeDocumentEvents() {
        this.positioned = false;
        const parent = this._findParentDropdownMenu();
        if (!parent) {
            document.removeEventListener('click', this._onDocumentClick);
        } else {
            parent.locked = false;
        }

        document.removeEventListener('keydown', this._onKeydown);
    }

    _onDocumentClick(e) {
        // in IE, if the event has not call stopImmediatePropagation,
        // the document click will also be called after it has been removed
        const _menu = this.refs.menu;
        if (!_menu) return;

        const target = e.target;
        const menu = _menu.element;

        // is a dropdown menu
        if (menu === target || menu.contains(target)) return;
        // is click on sub menu
        if (this._isClickSubMenu(target, this.subDropdowns)) return;
        // custom flag to indicate that the event does not lead to close menu
        if (e._dropdown === true || e._dropdown === this) return;

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
        // const parent = this._findParentDropdownMenu();
        // if (parent && this.focusIndex < 0) {
            // return;
        // }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex + 1, 'down');
    }

    _focusPrevItem(e) {
        // const parent = this._findParentDropdownMenu();
        // if (parent && this.focusIndex < 0) {
            // return;
        // }
        e.preventDefault();
        this.focusItemByIndex(this.focusIndex - 1, 'up');
    }

    focusItemByIndex(index, direction = 'down') {
        const items = this.items;
        const max = items.length - 1;

        this.unFocusLastItem();

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

        items[index].focus();
    }

    unFocusLastItem() {
        const oldIndex = this.focusIndex;
        const items = this.items;

        if (oldIndex > -1 && items[oldIndex]) {
            items[oldIndex].unFocus();
            this.focusIndex = -1;
        }
    }

    _selectItem(e) {
        this._showSubMenu(e);
        if (this.focusIndex > -1) {
            e.preventDefault();
            this.items[this.focusIndex] && this.items[this.focusIndex].select(e);
        }
    }

    _showSubMenu(e) {
        const parent = this._findParentDropdownMenu();
        if (!parent && this.focusIndex < 0) return;

        e.preventDefault();
        if (parent && this.focusIndex < 0) {
            this.focusItemByIndex(0);
        } else if (this.focusIndex > -1) {
            // maybe the items has been filtered, #50
            this.items[this.focusIndex] && this.items[this.focusIndex].showMenuAndFocus();
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
