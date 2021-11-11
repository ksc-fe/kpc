import {Component, TypeDefs, inject, provide, VNode, Key} from 'intact';
import {ROOT_MENU, MENU, Menu, MenuProps} from './menu'
import {Dropdown, DropdownMenu} from '../dropdown';
import template from './item.vdt';
import {bind, isExternalLink} from '../utils';
import {useState} from '../../hooks/useState';
import {useHighlight} from './useHighlight';
import {useExpanded} from './useExpanded';
import {useDropdown} from './useDropdown';
import {useRouter} from '../../hooks/useRouter';

export interface MenuItemProps {
    key: Key 
    to?: string
    dot?: boolean
    disabled?: boolean
}

export interface MenuItemEvents {
    click: [MouseEvent]
    select: [MenuItem, MouseEvent]
}

const typeDefs: Required<TypeDefs<MenuItemProps>> = {
    key: {
        type: [String, Number],
        required: true,
    },
    to: String,
    dot: Boolean,
    disabled: Boolean,
};

export const MENU_ITEM = 'MenuItem';

export class MenuItem extends Component<MenuItemProps, MenuItemEvents> {
    static template = template;
    static typeDefs = typeDefs;

    public rootMenu = inject<Menu>(ROOT_MENU)!;
    public parentMenu = inject<Menu>(MENU)!;
    public parentMenuItem = inject<MenuItem | null>(MENU_ITEM, null);

    private expanded = useExpanded(this.rootMenu, this.parentMenu);
    private highlight = useHighlight(this.rootMenu, this.parentMenuItem);
    private dropdown = useDropdown(this.rootMenu, this.parentMenu);
    private router = useRouter();

    init() {
        provide(MENU_ITEM, this);
    }

    @bind
    public onClick(hasSubMenu: Menu, e: MouseEvent) {
        const {disabled, to} = this.get();
        if (disabled) return;
        
        if (hasSubMenu) {
            this.expanded.toggle();
        } else {
            this.highlight.select();
        }

        this.trigger('click', e);

        if (!hasSubMenu) {
            this.trigger('select', this, e);
            if (to) {
                const router = this.router.value;
                if (router && !isExternalLink(to)) {
                    router.push(to!);
                } else {
                    location.href = to!;
                }
            }
        }
    }
}

