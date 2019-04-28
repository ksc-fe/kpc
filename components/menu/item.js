import Intact from 'intact';
import template from './item.vdt';
import DropdownItem from '../dropdown/item';
import Dropdown from '../dropdown/dropdown';
import Menu from './menu';
import {findRouter, isExternalLink} from '../utils';

export default class MenuItem extends DropdownItem {
    @Intact.template()
    static template = template;

    static propTypes = {
        ...DropdownItem.propTypes,
        key: {
            type: String,
            required: true,
        },
        to: String,
        dot: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            key: undefined,
            to: undefined,
            dot: false,

            _root: undefined,
            _isFirstFloorChildren: false,
            _show: false,
            _parentItem: undefined,
            _parentMenu: undefined,
        };
    }

    _init() {
        // if selected hide all dropdown menu
        // the top ancestor dropdown menu can not hide
        // so we override the method here
        this.on('select', () => {
            if (!this.get('_isFirstFloorChildren') && this.get('hideOnSelect')) {
                let ancestor;
                let parent = this.parentVNode;
                while (parent) {
                    const tag = parent.tag;
                    if (tag === Menu && parent.props._isFirstFloorChildren) {
                        ancestor = parent.children;        
                        break;
                    }
                    parent = parent.parentVNode;
                }

                ancestor.hide(true);
            }
        });
        const _root = this.get('_root');
        this._updateStatus(_root, _root.get('selectedKey'));
        _root.on('$change:selectedKey', this._updateStatus);
    }

    _mount() {
        super._mount();
        this.$router = findRouter(this);
    }

    _updateStatus(c, v) {
        if (v === this.get('key')) {
            const items = [];
            let parentItem = this.get('_parentItem');
            while (parentItem) {
                items.push(parentItem);
                parentItem = parentItem.get('_parentItem');
            }
            const expandedKeys = new Set(c.get('expandedKeys'));
            const _highlightedKeys = items.map(item => {
                const key = item.get('key');
                expandedKeys.add(key);
                return key;
            });
            c.set({
                _highlightedKeys,
                expandedKeys: Array.from(expandedKeys)
            });
        }
    }

    _onClick(hasSubMenu, e) {
        if (this.get('disabled')) return;

        const root = this.get('_root');
        const menu = this.get('_parentMenu');
        if (hasSubMenu) {
            root.toggleExpand(this.get('key'), menu);
        } else {
            root.select(this.get('key'));
        }

        this.trigger('click', e);

        if (!hasSubMenu) {
            this.trigger('select', this, e);
            const to = this.get('to');
            if (to) {
                if (this.$router && !isExternalLink(to)) {
                    this.$router.push(to);
                } else {
                    location.href = to;
                }
            }
        }
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
        return !_isFirstFloorChildren && Menu.showAsDropdown(_root);
    }

    _onDropdownShowChange(c, v) {
        this.set('_show', v);
    }

    _destroy() {
        this.get('_root').off('$change:selectedKey', this._updateStatus);
        super._destroy();
    }
}
