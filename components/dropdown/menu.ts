import {Component, TypeDefs, provide, inject, createRef, onUnmounted, RefObject} from 'intact';
import template from './menu.vdt';
import {bind} from '../utils';
import {Dropdown, DROPDOWN} from './dropdown';
import {useTransition} from './useTransition';
import {useMenuKeyboard} from './useKeyboard';
import {useMouseOutsidable} from '../../hooks/useMouseOutsidable';

export interface DropdownMenuProps { }

export const DROPDOWN_MENU = 'DropdownMenu';

export class DropdownMenu<T extends DropdownMenuProps = DropdownMenuProps> extends Component<T> {
    static template = template;

    public elementRef = createRef<HTMLDivElement>();
    public dropdown: Dropdown | null = null;
    public keyboard: ReturnType<typeof useKeyboardForDropdownMenu> | null = null;

    private transition: ReturnType<typeof useTransition> | null = null;

    init() {
        provide(DROPDOWN_MENU, this);

        const dropdown = this.dropdown = inject(DROPDOWN)!;
        this.transition = useTransition(() => dropdown.position());

        this.keyboard = useKeyboardForDropdownMenu(dropdown);

        useMouseOutsidable(this.elementRef);
    }

    // no matter what the trigger is, we should show menu when enter into it.
    @bind
    protected onMouseEnter(e: MouseEvent) {
        const dropdown = this.dropdown!; 
        dropdown!.show();
        dropdown!.trigger('mouseenter', e);
    }

    @bind
    private onMouseLeave(e: MouseEvent) {
        const dropdown = this.dropdown!; 
        dropdown.hide();
        dropdown.trigger('mouseleave', e);
    }
}

function useKeyboardForDropdownMenu(dropdown: Dropdown) {
    const parentDropdownMenu = inject<DropdownMenu | null>(DROPDOWN_MENU, null);
    const [[addKeydown, removeKeydown, lock], focusByIndex, reset] = useMenuKeyboard();
    const onShow = () => {
        addKeydown();
        // lock parent dropdown menu, prevent it from operating by keyboard
        parentDropdownMenu && parentDropdownMenu.keyboard!.lock(true);
    };
    const onHide = () => {
        reset();
        removeKeydown();
        parentDropdownMenu && parentDropdownMenu.keyboard!.lock(false);
    };
    const focus = () => focusByIndex(0);

    dropdown.on('show', onShow);
    dropdown.on('hide', onHide);
    dropdown.on('shouldFocus', focus);

    onUnmounted(() => {
        dropdown.off('show', onShow);
        dropdown.off('hide', onHide);
        dropdown.off('shouldFocus', focus);
    });

    return {lock};
}
