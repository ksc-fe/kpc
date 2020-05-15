import Intact from 'intact';
import template from './menu.vdt';
import position from '../moveWrapper/position';
import {findParentComponent, getTransition} from '../utils';
import Dropdown from './dropdown';
import initMouseOutsidable from './mouseOutsidable';

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

            // indicate that it is use in Dropdown or alone for lookup dropdown instance in _mount
            _useInDropdown: false,
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
                // update parent we must specify async to true, #408
                this.dropdown.set('_isShow', v, {async: true});
            }
        });

        this.on('$changed:value', (c, value) => {
            if (value) {
                this.trigger('show', this);
            } else {
                this.trigger('hide', this);
            }
        });
        this.on('$changed:of', () => {
            if (this.get('value')) {
                this.position();
            }
        });

        initMouseOutsidable(this);
    }

    _mount() {
        // maybe it is used as contextmenu
        if (!this.get('_useInDropdown')) return;

        const parent = this._getParent();
        if (parent) parent.subDropdowns.push(this);

        // the previous sibling is Dropdown
        let triggerElement = this.element.previousSibling;
        // in react, it may be a comment which value is ' react-mount-point-unstable '
        // and it is may be a leaving animation element
        // so we must look up it until the header
        let dropdown;
        while (triggerElement) {
            if (dropdown = triggerElement._dropdown) {
                this.dropdown = dropdown;
                dropdown.menu = this;
                break;
            }
            triggerElement = triggerElement.previousSibling;
        }

        // when mount, the child animate element mount first
        // if we use appearStart to show this menu
        // the parent component can not be get correctly
        // unless we find parent component in `position` method again
        // so we do this at here instead of appearStart callback
        //
        // find parent component in `position` method instead of
        // if (this.get('value')) {
            // this._onShow();
        // }
    }

    _getParent() {
        if (this.parent === undefined) {
            this.parent = this._findParentDropdownMenu() || null;
        }
        return this.parent;
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
        if (!this.get('value')) return;
        if (!immediately) {
            this.timer = setTimeout(() => {
                this._hide();
            }, 200);
        } else {
            this._hide();
        }
    }

    _hide() {
        this.set('value', false);
        // hide sub dropdown
        for (let i = 0; i < this.subDropdowns.length; i++) {
            this.subDropdowns[i].hide(true);
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
        };

        let _of = this.get('of');
        if (_of === 'parent') {
            const parent = this._getParent();
            if (parent) {
                _of = parent.refs.menu.element;
                if (parent.positioned) {
                    p(_of);
                } else {
                    return new Promise(resolve => {
                        parent.one('positioned', (transition) => {
                            p(_of, transition || parent.get('transition'));
                            resolve();
                        });
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
        this._enterEnd = false;
        this.unFocusLastItem();
        this._addDocumentEvents();
        return this.position();
    }

    _addDocumentEvents() {
        const parent = this.parent;
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

            // we use mousedown event instead of click event,
            // so that we can press down mouse and move it to outside
            // and don't hide the dropdown
            // emm... we can't use this way, because it can't hide menu when click trigger element
            // use mousedown -> mouseup and _mousedown flag instead
            document.addEventListener('click', this._onDocumentClick, true);
            document.addEventListener('click', this._documentClickHandler);
        } else {
            parent.locked = true;
        }

        document.addEventListener('keydown', this._onKeydown);
    }

    _removeDocumentEvents() {
        this.positioned = false;
        const parent = this.parent;
        if (!parent) {
            document.removeEventListener('click', this._onDocumentClick, true);
            document.removeEventListener('click', this._documentClickHandler);
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

        // if we mousedown on the menu, ignore this click
        if (this._mousedown) return;

        // is a dropdown menu
        if (menu === target || menu.contains(target)) return;
        // is click on sub menu
        if (this._isClickSubMenu(target, this.subDropdowns)) return;
        // custom flag to indicate that the event does not lead to close menu
        if (e._dropdown === true || e._dropdown === this) return;

        // to indicate this click event will hide layer
        // and don't show it again when the target is the trigger element
        e._hide = this.dropdown;


        // because we bind document click handler to hide menu in capture phase
        // and we get cancelBubble is true even if we stopPropagation
        // some action like clear in datepicker will prevent this menu hiding
        // we call this handler as soon as the event bubble to docuemnt
        //
        // use Array, #331
        if (!e._handler) e._handler = [];
        e._handler.push(() => this.hide(true));
        // const handler = () => {
            // if (!e._cancelBubble) {
                // this.hide(true);
            // }
        // };
        // this.documentTimer = setTimeout(handler);
    }

    _documentClickHandler(e) {
        e._handler && e._handler.forEach(fn => fn());
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
        const parent = this.parent;
        if (!parent && this.focusIndex < 0) return;

        e.preventDefault();
        if (parent && this.focusIndex < 0) {
            this.focusItemByIndex(0);
        } else if (this.focusIndex > -1) {
            // maybe the items has been filtered, #50
            this.items[this.focusIndex] && this.items[this.focusIndex].showMenuAndFocus(e);
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
            const subDropdownMenu = subMenus[i];
            const subMenu = subDropdownMenu.refs.menu;
            if (subMenu) {
                if (
                    target === subMenu.element ||
                    subMenu.element.contains(target) ||
                    subDropdownMenu._mousedown
                ) {
                    ret = true;
                    break;
                } else {
                    ret = this._isClickSubMenu(target, subDropdownMenu.subDropdowns);
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

        // clearTimeout(this.documentTimer);
        this._removeDocumentEvents();
    }
}
