import {Component, TypeDefs, inject, VNodeComponentClass} from 'intact';
import template from './item.vdt';
import {bind} from '../utils';
import {useItemKeyboard, MenuKeyboardMethods} from './useKeyboard';
import {Dropdown, DROPDOWN} from './dropdown';
import {DropdownMenu, DROPDOWN_MENU} from './menu';
import {IgnoreClickEvent} from '../../hooks/useDocumentClick';

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

    init() {
        this.dropdown = inject<Dropdown>(DROPDOWN)!;
        this.parentDropdown = this.hasSubMenu();
        this.dropdownMenu = inject<DropdownMenu>(DROPDOWN_MENU)!;
        this.keyboard = useKeyboardForDropdownItem(this);
    }

    select() {
        if (this.parentDropdown) return;

        if (this.get('hideOnSelect')) {
            // hide all dropdowns
            let dropdown = this.dropdown;
            do { dropdown!.hide(true); }
            while (dropdown = dropdown!.dropdown);
        }

        this.trigger('select');
    }

    hasSubMenu() {
        // TODO: wrapped by Tooltip
        const parent = this.$parent;
        if (parent instanceof Dropdown) {
            return parent
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
