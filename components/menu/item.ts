import {Component, TypeDefs, inject, provide, VNode, Key} from 'intact';
import {ROOT_MENU, MENU, Menu, MenuProps} from './menu'
import {Dropdown, DropdownMenu} from '../dropdown';
import template from './item.vdt';
import {bind} from '../utils';
import {useState} from '../../hooks/useState';
import {useExpanded} from './useExpanded';
import {useDropdown} from './useDropdown';
import {useRouter, navigate} from '../../hooks/useRouter';
import {useRecordItem} from '../../hooks/useRecordComponent';
import {MENU_RECORD_KEY} from './useHighlight';

export interface MenuItemProps {
    key: Key 
    to?: string | object
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
    to: [String, Object],
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
    private dropdown = useDropdown(this.rootMenu, this.parentMenu);
    private router = useRouter();

    init() {
        provide(MENU_ITEM, this);
        useRecordItem(MENU_RECORD_KEY);
    }

    @bind
    public onClick(hasSubMenu: Menu, e: MouseEvent) {
        const {disabled, to, key} = this.get();
        if (disabled) return;
        
        if (hasSubMenu) {
            this.expanded.toggle();
        } else {
            this.rootMenu.highlight!.select(key);
        }

        this.trigger('click', e);

        if (!hasSubMenu) {
            this.trigger('select', this, e);
            navigate(this.router.value, to);
        }
    }
}

