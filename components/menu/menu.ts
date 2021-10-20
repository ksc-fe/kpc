import {Component, TypeDefs, provide, inject} from 'intact';
import template from './menu.vdt';
import {bind, isEqualArray} from '../utils';
import {useState} from '../../hooks/useState';

export interface MenuProps {
    expandedKeys?: string[]
    selectedKey?: string
    theme?: 'light' | 'dark'
    collapse?: boolean
    type?: 'vertical' | 'horizontal'
    size?: 'large' | 'default' | 'small' 
    accordion?: boolean
    dot?: boolean
}

const typeDefs: Required<TypeDefs<MenuProps>> = {
    expandedKeys: Array,
    selectedKey: String,
    theme: ['light', 'dark'],
    collapse: Boolean,
    type: ['vertical', 'horizontal'],
    size: ['large', 'default', 'small'],
    accordion: Boolean,
    dot: Boolean,
};

const defaults = (): Partial<MenuProps> => ({
    expandedKeys: [],
    selectedKey: '',
    theme: 'dark',
    collapse: false,
    type: 'vertical',
    size: 'default',
    accordion: false,
    dot: false,
})

export const MENU = 'Menu';
export const ROOT_MENU = 'RootMenu';

export class Menu<T extends MenuProps = MenuProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static showAsDropdown = (_root: Menu) => {
        const {collapse, type} = _root.get();
        return collapse || type === 'horizontal';
    };

    public rootMenu = inject<Menu | null>(ROOT_MENU, null);
    public parentMenu = inject<Menu | null>(MENU, null);
    public highlightedKeys = useState<string[]>([], isEqualArray);
    public _expandedKeys: Set<string> = new Set();

    init() {
        provide(MENU, this);

        // is root menu or not
        if (!this.rootMenu) {
            provide(ROOT_MENU, this);
        }
    }

    beforeUpdate() {
        this._expandedKeys = new Set();
    }

    @bind
    private isDropdownMenu() {
        return this.rootMenu && Menu.showAsDropdown(this.rootMenu);
    }

    @bind
    isExpanded(key: string): boolean {
        const {expandedKeys} = this.get();
        return !Menu.showAsDropdown(this) && (expandedKeys as string[]).indexOf(key) > -1;
    }

    @bind
    expand(key: string) {
        const expandedKeys = (this.get('expandedKeys') as string[]).slice(0);
        expandedKeys.push(key);
        this.set('expandedKeys', expandedKeys);
    }

    @bind
    shrink(key: string, silent: boolean = false) {
        const expandedKeys = (this.get('expandedKeys') as string[]).slice(0);
        const index = expandedKeys.indexOf(key);
        expandedKeys.splice(index, 1);
        this.set('expandedKeys', expandedKeys, {silent});
    }

    @bind
    toggleExpand(key: string, menu: Menu) {
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

    @bind
    select(key: string) {
        this.set('selectedKey', key);
    }

    @bind
    isSelected(key: string) {
        return this.get('selectedKey') === key;
    }
}