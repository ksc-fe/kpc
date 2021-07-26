import {Component, TypeDefs, inject, provide, VNode} from 'intact';
import {ROOT_MENU, MENU, Menu, MenuProps} from './menu'
import {Dropdown, DropdownMenu} from '../dropdown';
import template from './item.vdt';
import {bind, findRouter, isExternalLink} from '../utils';
import {useState} from '../../hooks/useState';
import {useHighlight} from './useHighlight';

export interface MenuItemProps {
    key?: string 
    to?: string
    dot?: boolean
    disabled?: boolean
}

const typeDefs: Required<TypeDefs<MenuItemProps>> = {
    key: {
        type: String,
        required: true,
    },
    to: String,
    dot: Boolean,
    disabled: Boolean,
};

const defaults = (): Partial<MenuItemProps> => ({
    dot: false,
    disabled: false,
})

export const MENU_ITEM = 'MenuItem';

export class MenuItem<T extends MenuItemProps = MenuItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static $router: Array<String> = [];

    public rootMenu = inject<Menu>(ROOT_MENU)!;
    public parentMenu = inject<Menu>(MENU)!;
    public parentMenuItem = inject<MenuItem | null>(MENU_ITEM, null);

    private show = useState<boolean>(false);
    private highlight = useHighlight(this.rootMenu, this.parentMenuItem);
    private isFirstFloorChildren: boolean = false;

    init() {
        provide(MENU_ITEM, this);

        this.set('dot', this.parentMenu.get('dot'));
        this.isFirstFloorChildren = this.rootMenu === this.parentMenu;
        this.highlight.updateStatus(this.rootMenu.get('selectedKey'));

        // if selected hide all dropdown menu
        // the top ancestor dropdown menu can not hide
        // so we override the method here
        this.on('select', () => {
            if (!this.isFirstFloorChildren && this.rootMenu.get('hideOnSelect')) {
                // hide all dropdowns
                let ancestor;
                let parent: Menu<MenuProps> | null = this.parentMenu;
                while (parent) {
                    const parentMenu = parent.parentMenu;
                    if (parentMenu && parentMenu === this.rootMenu) {
                        const lastInput = parent.$lastInput!;
                        if (lastInput!.tag === DropdownMenu) {
                            ancestor = (lastInput.children as Dropdown).dropdown
                        }
                        break;
                    }
                    parent = parent!.parentMenu;
                }
                ancestor && ancestor.hide(true);
            }
        });
    }

    @bind
    mounted() {
        MenuItem.$router = findRouter(this);
    }

    @bind
    public onClick(hasSubMenu: Menu, e: MouseEvent) {
        const {disabled, key, to} = this.get();
        if (disabled) return;
        
        if (hasSubMenu) {
            this.rootMenu.toggleExpand(key!, this.parentMenu);
        } else {
            this.rootMenu.select(key!);
        }

        this.trigger('click', e);

        if (!hasSubMenu) {
            this.trigger('select', this, e);
            if (to) {
                const {$router} = MenuItem;
                if ($router && !isExternalLink(to)) {
                    $router.push(to!);
                } else {
                    location.href = to!;
                }
            }
        }
    }

    @bind
    private onDropdownShowChange(v: boolean) {
        this.show.set(v);
    }
}


