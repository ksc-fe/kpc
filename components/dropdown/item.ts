import {Component, TypeDefs, inject} from 'intact';
import template from './item.vdt';
import {bind} from '../utils';
import {useItemKeyboard, MenuKeyboardMethods} from './useKeyboard';
import {Dropdown, DROPDOWN} from './dropdown';
import {DropdownMenu, DROPDOWN_MENU} from './menu';

export interface DropdownItemProps {
    disabled: boolean
    hideOnSelect: boolean
}

const typeDefs: Required<TypeDefs<DropdownItemProps>> = {
    disabled: Boolean,
    hideOnSelect: Boolean,
}

const defaults = (): Partial<DropdownItemProps> => ({
    disabled: false,
    hideOnSelect: true,
});

export class DropdownItem<T extends DropdownItemProps = DropdownItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private dropdown: Dropdown | null = null;
    private keyboard: ReturnType<typeof useKeyboardForDropdownItem> | null = null;

    init() {
        this.dropdown = inject<Dropdown>(DROPDOWN)!;
        this.keyboard = useKeyboardForDropdownItem(this); 
    }

    select() {
        if (this.hasSubMenu()) return;

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
