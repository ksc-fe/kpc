import Intact from 'intact';
import template from './item.vdt';
import DropdownItem from '../dropdown/item';

export default class MenuItem extends DropdownItem {
    @Intact.template()
    static template = template;

    static propTypes = {
        key: {
            type: String,
            required: true,
        },
        disabled: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            key: undefined,

            _root: undefined,
            _isFirstFloorChildren: false,
        };
    }

    _onClick(hasSubMenu, e) {
        if (this.get('disabled')) return;

        const root = this.get('_root');
        if (hasSubMenu) {
            root.toggleExpand(this.get('key'));
        } else {
            root.select(this.get('key'));
        }

        this.trigger('click', e);
    }

    focus() {
        if (this._isDropdownItem()) {
            super.focus();
        } else {
            this.set('_isFocus', true);
        }
    }

    _isDropdownItem() {
        const {_root, _isFirstFloorChildren} = this.get();
        return !_isFirstFloorChildren && _root.get('collapse');
    }
}
