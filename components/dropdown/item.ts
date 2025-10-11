import {Component, TypeDefs, inject} from 'intact';
import template from './item.vdt';
import {bind} from '../utils';
import {useItemKeyboard} from './useItemKeyboard';
import {Dropdown, DROPDOWN} from './dropdown';
import {type DropdownMenu, DROPDOWN_MENU} from './menu';
import { useConfigContext } from '../config';
import type { Tooltip } from '../tooltip/tooltip';

export interface DropdownItemProps {
    disabled?: boolean
    hideOnSelect?: boolean

    _isFocus?: boolean
}

export interface DropdownItemEvents {
    select: []
    click: [MouseEvent]
    mouseenter: [MouseEvent]
    mouseleave: [MouseEvent]
}

const typeDefs: Required<TypeDefs<DropdownItemProps>> = {
    disabled: Boolean,
    hideOnSelect: Boolean,

    _isFocus: null,
}

const defaults = (): Partial<DropdownItemProps> => ({
    hideOnSelect: true,
});

export class DropdownItem extends Component<DropdownItemProps, DropdownItemEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public parentDropdown?: Dropdown;

    private dropdown: Dropdown | null = null;
    private keyboard: ReturnType<typeof useKeyboardForDropdownItem> | null = null;
    private dropdownMenu: DropdownMenu | null = null;
    private config = useConfigContext();

    init() {
        this.dropdown = inject<Dropdown>(DROPDOWN)!;
        this.parentDropdown = this.hasSubMenu();
        this.dropdownMenu = inject<DropdownMenu>(DROPDOWN_MENU)!;
        this.keyboard = useKeyboardForDropdownItem(this);
    }

    select() {
        if (this.parentDropdown) return;

        // trigger select event firstly for Cascader update values
        this.trigger('select');

        if (this.get('hideOnSelect')) {
            // hide all dropdowns
            let dropdown = this.dropdown;
            do {
                if (!(dropdown as Tooltip).$isTooltip) {
                    dropdown!.hide(true);
                }
                dropdown = dropdown!.dropdown;
            } while (dropdown);
        }
    }

    hasSubMenu() {
        // wrapped by Dropdown rather than DropdownMenu
        let parent = this.$senior;
        while (parent) {
            // Tooltip extends Dropdown, it's also a instance of Dropdown
            // we should exclude this case, so use constructor to detect
            // @modify: Check using hasOwnProperty to avoid inheritance issues and circle reference
            const constructor = parent.constructor as any;
            if (constructor.hasOwnProperty('__isDropdownMenu')) {
                return; 
            }
            if (constructor.hasOwnProperty('__isDropdown')) {
                return parent as Dropdown;
            }
            parent = parent.$senior;
        }
    }

    @bind
    private onClick(e: MouseEvent) {
        if (this.get('disabled')) return;

        // Some cases, the item may been removed after click immediately
        // and the menu will hide, because it can't detect it contains
        // the removed item.
        // Set the ignore flag to prevent menu from hidding
        // 
        // @Change Cascader need click item to toggle show an hide
        // (e as IgnoreClickEvent)._ignore = true;
        this.trigger('click', e);
        this.select();
    }
}

function useKeyboardForDropdownItem(instance: DropdownItem) {
    const dropdownMenu = inject<DropdownMenu>(DROPDOWN_MENU)!;
    const showMenu = () => {
        if (instance.parentDropdown) {
            instance.parentDropdown.show(true);
        }
    }

    return useItemKeyboard({
        onShowMenu: showMenu,
        onHideMenu: () => {
            dropdownMenu.dropdown!.hide(true); 
        },
        onSelect: () => {
            showMenu();
            instance.select();
        },
    });
}
