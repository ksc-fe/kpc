import {Component, TypeDefs, provide, inject, createRef, onUnmounted, RefObject} from 'intact';
import template from './menu.vdt';
import {bind} from '../utils';
import {Dropdown, DROPDOWN} from './dropdown';
import {useTransition} from './useTransition';
import {useMenuKeyboard} from './useMenuKeyboard';
import {useMouseOutsidable} from '../../hooks/useMouseOutsidable';
import {FeedbackCallback} from './usePosition';
import { useConfigContext } from '../config';
import { usePositionForDropdownMenu } from './usePosition';

export interface DropdownMenuProps { }
export interface DropdownMenuEvents { }
export interface DropdownMenuBlocks { }

export const DROPDOWN_MENU = 'DropdownMenu';

export class DropdownMenu<
    T extends DropdownMenuProps = DropdownMenuProps,
    E extends DropdownMenuEvents = DropdownMenuEvents,
    B extends DropdownMenuBlocks = DropdownMenuBlocks,
> extends Component<T, E, B> {
    static template = template;

    public elementRef = createRef<HTMLDivElement>();
    public dropdown: Dropdown = inject(DROPDOWN)!;
    public keyboard = useKeyboardForDropdownMenu(this.dropdown);

    private transition = useTransition((callback: FeedbackCallback) => this.dropdown.position(callback));
    private config = useConfigContext();

    init() {
        provide(DROPDOWN_MENU, this);
        useMouseOutsidable(this.elementRef);
        usePositionForDropdownMenu();
    }

    // no matter what the trigger is, we should show menu when enter into it.
    @bind
    protected onMouseEnter(e: MouseEvent) {
        const dropdown = this.dropdown!; 
        dropdown.show();
        dropdown.trigger('mouseenter', e);
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

    // In Cascader the menu may have been replaced by another menu, in this case,
    // if the dropdown has showed while we mounted the menu, add the keydown listener
    if (dropdown.get('value')) {
        onShow();
    }
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
