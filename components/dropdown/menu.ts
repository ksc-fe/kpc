import {Component, TypeDefs, inject, createRef, onUnmounted} from 'intact';
import template from './menu.vdt';
import {bind} from '../utils';
import {Dropdown} from './dropdown';
import {useTransition} from './useTransition';
import {useMenuKeyboard} from './useKeyboard';

export interface DropdownMenuProps { }

export class DropdownMenu<T extends DropdownMenuProps = DropdownMenuProps> extends Component<T> {
    static template = template;

    public elementRef = createRef<HTMLDivElement>();
    private dropdown: Dropdown | null = null;
    private transition: ReturnType<typeof useTransition> | null = null;

    init() {
        const dropdown = this.dropdown = inject('Dropdown')!;
        this.transition = useTransition(() => dropdown.position());
        useKeyboardForDropdownMenu(dropdown);
    }

    @bind
    // no matter what the trigger is, we should show menu when enter into it.
    private onMouseEnter(e: MouseEvent) {
        this.dropdown!.show();
        this.trigger('mouseenter', e);
    }

    @bind
    private onMouseLeave(e: MouseEvent) {
        this.dropdown!.hide();
        this.trigger('mouseleave', e);
    }
}

function useKeyboardForDropdownMenu(dropdown: Dropdown) {
    const [addKeydown, removeKeydown] = useMenuKeyboard();

    dropdown.on('show', addKeydown);
    dropdown.on('hide', removeKeydown);

    onUnmounted(() => {
        dropdown.off('show', addKeydown);
        dropdown.off('hide', removeKeydown);
    })
}
