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
        console.log('init menu')
        this.DropdownAnimate = DropdownAnimate;

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
        if (this.get('show')) {
            this._addDocumentClick();
        }
    }

    show() {
        clearTimeout(this.timer);
        this.set('show', true);
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

    position(dropdown) {
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
        console.log(e);
        const target = e.target;
        const element = this.refs.menu.element;

        // is a dropdown menu
        if (element === target || element.contains(target)) return;

        this.hide(true);
    }

    destroy(...args) {
        if (!this._isNested()) {
            return super.destroy(...args);
        }

    }

    _leaveEnd() {
        // if (this._isNested()) {
            // this.vdt.vNode.children.$destroy();
        // }
    }

    _isNested() {
        // if we find the dropdown's parentVNode is in DropdownAnimate
        // that is to say it is nested in a DropdownMenu component
        // in this case we don't destroy chldren immediately, 
        // but destroy it after animate end
        let parentVNode = this.dropdown.parentVNode.parentVNode;
        if (parentVNode) {
            return parentVNode.tag === DropdownAnimate;
        }
        return false;
    }

    _destroy() {
        console.log('destroy menu')
        clearTimeout(this.timer);
        this._removeDocumentClick();
    }
}

class DropdownAnimate extends Intact.Animate {  }
