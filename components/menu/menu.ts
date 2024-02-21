import {Component, TypeDefs, provide, inject, Key} from 'intact';
import template from './menu.vdt';
import {useHighlight} from './useHighlight';
import { useConfigContext } from '../config';
import {bind} from '../utils';

export interface MenuProps<K extends Key = Key> {
    expandedKeys?: K[]
    selectedKey?: K 
    theme?: 'light' | 'dark' | 'white'
    collapse?: boolean
    showCollapseArrow?: boolean
    type?: 'vertical' | 'horizontal'
    size?: 'large' | 'default' | 'small' 
    accordion?: boolean
    dot?: boolean

    _paddingLeft?: string 
}

export interface MenuEvents { }

export interface MenuBlocks {
    header: null
}

const typeDefs: Required<TypeDefs<MenuProps>> = {
    expandedKeys: Array,
    selectedKey: [String, Number],
    theme: ['light', 'dark', 'white'],
    collapse: Boolean,
    showCollapseArrow: Boolean,
    type: ['vertical', 'horizontal'],
    size: ['large', 'default', 'small'],
    accordion: Boolean,
    dot: Boolean,

    _paddingLeft: String,
};

const defaults = (): Partial<MenuProps> => ({
    expandedKeys: [],
    theme: 'dark',
    type: 'vertical',
    size: 'default',
});

export const MENU = 'Menu';
export const ROOT_MENU = 'RootMenu';

export class Menu<K extends Key = Key> extends Component<MenuProps<K>, MenuEvents, MenuBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public rootMenu = inject<Menu | null>(ROOT_MENU, null);
    public parentMenu = inject<Menu | null>(MENU, null);
    public subExpandedKeys?: Set<K>;
    public highlight?: ReturnType<typeof useHighlight>;
    private config = useConfigContext();

    init() {
        provide(MENU, this);

        // is root menu or not
        if (!this.rootMenu) {
            provide(ROOT_MENU, this);
            this.highlight = useHighlight();
        }
    }

    @bind
    public onClick(e: MouseEvent) {
        const {collapse} = this.get();
        this.set({collapse: !collapse});
    }
    
}
