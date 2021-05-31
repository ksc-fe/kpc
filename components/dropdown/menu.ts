import {Component, TypeDefs, inject, createRef, findDomFromVNode} from 'intact';
import template from './menu.vdt';
import {bind} from '../utils';
import {Dropdown} from './dropdown';
import {position} from '../position';
import {useMenuKeyboard} from './useKeyboard';

export interface DropdownMenuProps {

}

export class DropdownMenu<T extends DropdownMenuProps = DropdownMenuProps> extends Component<T> {
    static template = template;

    private dropdown: Dropdown | null = null;
    private elementRef = createRef<HTMLDivElement>();

    init() {
        this.dropdown = inject('Dropdown')!;
        this.dropdown.on('show', this.position);

        useMenuKeyboard(
            add => this.dropdown!.on('show', add),
            remove => this.dropdown!.on('hide', remove),
        );
    }

    @bind
    position() {
        position(this.elementRef.value!, {
            my: 'left top',
            at: 'left bottom',
            of: findDomFromVNode(this.dropdown!.$vNode!, true) as HTMLElement,
        });
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
