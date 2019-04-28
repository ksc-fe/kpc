import Intact from 'intact';
import template from './menu.vdt';
import './index.styl';
import '../../styles/kpc.styl';
import DropdownMenu from '../dropdown/menu';

export default class Menu extends DropdownMenu {
    @Intact.template()
    static template = template;

    static showAsDropdown = (_root) => {
        return _root.get('collapse') || _root.get('type') === 'horizontal';
    };

    static propTypes = {
        ...DropdownMenu.propTypes,
        expandedKeys: Array,
        selectedKey: String,
        theme: ['light', 'dark'],
        collapse: Boolean,
        type: ['vertical', 'horizontal'],
        size: ['large', 'default', 'small'],
        accordion: Boolean,
        dot: Boolean,
    };

    defaults() {
        return {
            ...super.defaults(),
            expandedKeys: [],
            selectedKey: '',
            theme: 'dark',
            collapse: false,
            type: 'vertical',
            size: 'default',
            accordion: false,
            dot: false,

            _root: undefined,
            _isFirstFloorChildren: false,
            _highlightedKeys: [],
            _parent: undefined,
        };
    }

    _init() {
        super._init();
        this._expandedKeys = new Set(); 
    }

    _mount() {
        if (this._isDropdownMenu()) {
            super._mount();
        }
    }

    _beforeUpdate() {
        this._expandedKeys = new Set(); 
    }

    _findParentDropdownMenu() {
        if (this.get('_isFirstFloorChildren')) {
            return false;
        } else {
            return super._findParentDropdownMenu();
        }
    }

    isExpanded(key) {
        const {expandedKeys} = this.get();
        return !Menu.showAsDropdown(this) && expandedKeys.indexOf(key) > -1;
    }

    expand(key) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        expandedKeys.push(key);
        this.set('expandedKeys', expandedKeys);
    }

    shrink(key, silent) {
        const expandedKeys = this.get('expandedKeys').slice(0);
        const index = expandedKeys.indexOf(key);
        expandedKeys.splice(index, 1);
        this.set('expandedKeys', expandedKeys, {silent});
    }

    toggleExpand(key, menu) {
        if (this.isExpanded(key)) {
            this.shrink(key);
        } else if (!this.get('accordion')) {
            this.expand(key);
        } else {
            const {_expandedKeys} = menu;
            _expandedKeys.forEach(key => {
                this.shrink(key, true);
            });
            this.expand(key);
        }
    }

    select(key) {
        this.set('selectedKey', key);
    }

    isSelected(key) {
        return this.get('selectedKey') === key;
    }

    isHighlighted(key) {
        return this.get('_highlightedKeys').indexOf(key) > -1;
    }

    _isDropdownMenu() {
        const _root = this.get('_root');
        return _root && Menu.showAsDropdown(_root);
    }
}
