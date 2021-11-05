import {Component, TypeDefs, provide, inject, Key} from 'intact';
import template from './menu.vdt';

export interface MenuProps {
    expandedKeys?: Key[]
    selectedKey?: Key 
    theme?: 'light' | 'dark' | 'white'
    collapse?: boolean
    type?: 'vertical' | 'horizontal'
    size?: 'large' | 'default' | 'small' 
    accordion?: boolean
    dot?: boolean
}

const typeDefs: Required<TypeDefs<MenuProps>> = {
    expandedKeys: Array,
    selectedKey: [String, Number],
    theme: ['light', 'dark', 'white'],
    collapse: Boolean,
    type: ['vertical', 'horizontal'],
    size: ['large', 'default', 'small'],
    accordion: Boolean,
    dot: Boolean,
};

const defaults = (): Partial<MenuProps> => ({
    expandedKeys: [],
    theme: 'dark',
    type: 'vertical',
    size: 'default',
})

export const MENU = 'Menu';
export const ROOT_MENU = 'RootMenu';

export class Menu extends Component<MenuProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public rootMenu = inject<Menu | null>(ROOT_MENU, null);
    public parentMenu = inject<Menu | null>(MENU, null);

    init() {
        provide(MENU, this);

        // is root menu or not
        if (!this.rootMenu) {
            provide(ROOT_MENU, this);
        }
    }
}
