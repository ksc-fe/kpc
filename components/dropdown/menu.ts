import {Component, TypeDefs, provide, inject, createRef, onUnmounted, RefObject} from 'intact';
import template from './menu.vdt';
import {bind} from '../utils';
import {Dropdown, DROPDOWN} from './dropdown';
import {useTransition} from './useTransition';
import {useMenuKeyboard} from './useKeyboard';
import {useMouseOutsidable} from './useMouseOutsidable';

export interface DropdownMenuProps { }

export const DROPDOWN_MENU = 'DropdownMenu';

export class DropdownMenu<T extends DropdownMenuProps = DropdownMenuProps> extends Component<T> {
    static template = template;

    public elementRef = createRef<HTMLDivElement>();
    public lock: ((v: boolean) => void) | null = null;
    public focusByIndex: ((index: number) => void) | null = null;
    public dropdown: Dropdown | null = null;
    public mouseOutsidableBegin: (() => void) | null = null;
    public mousedownRef: RefObject<boolean> | null = null;

    private transition: ReturnType<typeof useTransition> | null = null;

    init() {
        provide(DROPDOWN_MENU, this);

        const dropdown = this.dropdown = inject(DROPDOWN)!;
        this.transition = useTransition(() => dropdown.position());

        const [lock, focusByIndex] = useKeyboardForDropdownMenu(dropdown);
        this.lock = lock;
        this.focusByIndex = focusByIndex;

        const [mouseOutsidableBegin, mosuedownRef] = useMouseOutsidable();
        this.mouseOutsidableBegin = mouseOutsidableBegin;
        this.mousedownRef = mosuedownRef;
    }

    // no matter what the trigger is, we should show menu when enter into it.
    @bind
    private onMouseEnter(e: MouseEvent) {
        this.dropdown!.show();
        this.trigger('mouseenter', e);
    }

    @bind
    private onMouseLeave(e: MouseEvent) {
        this.dropdown!.hide();
        this.trigger('mouseleave', e);
    }

    @bind
    private onMouseDown(e: MouseEvent) {
        this.mouseOutsidableBegin!();
        this.trigger('mousedown', e);
    }
}

function useKeyboardForDropdownMenu(dropdown: Dropdown) {
    const parentDropdownMenu = inject<DropdownMenu | null>(DROPDOWN_MENU, null);
    const [[addKeydown, removeKeydown, lock], focusByIndex] = useMenuKeyboard();
    const onShow = () => {
        addKeydown();
        // lock parent dropdown menu, prevent it from operating by keyboard
        parentDropdownMenu && parentDropdownMenu.lock!(true);
    };
    const onHide = () => {
        removeKeydown();
        parentDropdownMenu && parentDropdownMenu.lock!(false);
    };

    dropdown.on('show', onShow);
    dropdown.on('hide', onHide);

    onUnmounted(() => {
        dropdown.off('show', onShow);
        dropdown.off('hide', onHide);
    });

    return [lock, focusByIndex] as const;
}
