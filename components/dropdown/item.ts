import {Component, TypeDefs} from 'intact';
import template from './item.vdt';
import {bind} from '../utils';
import {useItemKeyboard, MenuKeyboardMethods} from './useKeyboard';

export interface DropdownItemProps {
    disabled: boolean
    hideOnSelect: boolean

    _isFocus: boolean
}

const typeDefs: Required<TypeDefs<DropdownItemProps>> = {
    disabled: Boolean,
    hideOnSelect: Boolean,

    _isFocus: null
}

const defaults: Partial<DropdownItemProps> = {
    disabled: false,
    hideOnSelect: false,

    _isFocus: false,
}

export class DropdownItem<T extends DropdownItemProps = DropdownItemProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private reset: MenuKeyboardMethods['reset'] | null = null;
    private focus: MenuKeyboardMethods['focus'] | null = null;

    init() {
        const {reset, focus} = useItemKeyboard(
            () => this.set('_isFocus', true),
            () => this.set('_isFocus', false)
        );

        this.reset = reset;
        this.focus = focus;
    }

    @bind
    private onClick(e: MouseEvent) {
        if (this.get('disabled')) return;

        this.trigger('click', e);
    }

    @bind
    private onMouseEnter(e: MouseEvent) {
        this.trigger('mouseenter', e);
        if (this.get('disabled')) return;

        this.focus!(this);
    }

    @bind
    private onMouseLeave(e: MouseEvent) {
        this.trigger('mouseleave', e);
        this.reset!();
    }
}
