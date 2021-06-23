import {Component, TypeDefs, inject} from 'intact';
import template from './item.vdt';
import {bind} from '../utils';
import {useItemKeyboard, MenuKeyboardMethods} from './useKeyboard';
import {Dropdown, DROPDOWN} from './dropdown';
import {DropdownMenu, DROPDOWN_MENU} from './menu';
import {IgnoreClickEvent} from '../../hooks/useDocumentClick';
import {ItemEvents} from './keyboard';

export interface DropdownItemProps {
    disabled: boolean
    hideOnSelect: boolean

    _isFocus: boolean
}

const typeDefs: Required<TypeDefs<DropdownItemProps>> = {
    disabled: Boolean,
    hideOnSelect: Boolean,

    _isFocus: null,
}

const defaults = (): Partial<DropdownItemProps> => ({
    disabled: false,
    hideOnSelect: true,
});

export class DropdownItem<T extends DropdownItemProps = DropdownItemProps> extends Component<T> implements ItemEvents {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private dropdown: Dropdown | null = null;
    private keyboard: ReturnType<typeof useKeyboardForDropdownItem> | null = null;
    private parentDropdown?: Dropdown;
    private dropdownMenu: DropdownMenu | null = null;

    init() {
        this.dropdown = inject<Dropdown>(DROPDOWN)!;
        this.keyboard = useKeyboardForDropdownItem(this); 
        this.parentDropdown = this.hasSubMenu();
        this.dropdownMenu = inject<DropdownMenu>(DROPDOWN_MENU)!;
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
        // and the menu will hide, because it cann't detect it contains
        // the removed item.
        // Set the ignore flag to prevent menu from hidding
        (e as IgnoreClickEvent)._ignore = true;
        this.trigger('click', e);
        this.select();
    }

    @bind
    private onMouseEnter(e: MouseEvent) {
        this.trigger('mouseenter', e);
        if (this.get('disabled')) return;

        this.keyboard!.focus(this);
    }

    @bind
    private onMouseLeave(e: MouseEvent) {
        this.trigger('mouseleave', e);
        this.keyboard!.reset();
    }

    @bind
    onFocusin() {
        this.set('_isFocus', true);
    }

    @bind
    onFocusout() {
        this.set('_isFocus', false);
    }

    @bind
    onShowMenu() {
        if (this.parentDropdown) {
            this.parentDropdown.show(true);
        } 
    }

    @bind
    onHideMenu() {
        this.dropdownMenu!.dropdown!.hide(true);
    }

    @bind
    onSelect() {
        this.onShowMenu();
        this.select();
    }
}

function useKeyboardForDropdownItem(dropdownItem: DropdownItem) {
    const dropdownMenu = inject<DropdownMenu>(DROPDOWN_MENU)!;
    const parent = dropdownItem.hasSubMenu();
    const showMenu = () => {
        if (parent) {
            parent.show(true);
        }
    }

    return useItemKeyboard({
        onShowMenu: showMenu,
        onHideMenu: () => {
            dropdownMenu.dropdown!.hide(true); 
        },
        onSelect: () => {
            showMenu();
            dropdownItem.select();
        },
    });
}
