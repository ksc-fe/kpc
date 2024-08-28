import {TypeDefs, Children} from 'intact';
import {
    Dropdown,
    DropdownProps,
    DropdownEvents,
    DropdownBlocks,
} from '../dropdown/dropdown';
import {_$} from '../../i18n';
import {Theme, themes} from './styles';
import type {Events} from '../types';

export interface TooltipProps extends DropdownProps {
    showArrow?: boolean
    theme?: Theme
    hoverable?: boolean
    always?: boolean
    confirm?: boolean
    okText?: string
    cancelText?: string
    size?: 'small' | 'default'

    // for hack functional Tooltip component
    content?: Children
}

export interface TooltipEvents extends DropdownEvents {
    ok: []
    cancel: []
}

export interface TooltipBlocks extends DropdownBlocks { }

const typeDefs: Required<TypeDefs<TooltipProps>> = {
    ...Dropdown.typeDefs,
    showArrow: Boolean,
    theme: themes,
    hoverable: Boolean,
    always: Boolean,
    confirm: Boolean,
    okText: String,
    cancelText: String,
    size: ['small', 'default'],

    content: null,
};

const defaults = (): Partial<TooltipProps> => ({
    ...Dropdown.defaults(),
    showArrow: true,
    theme: 'dark',
    position: {my: 'center bottom-10', at: 'center top', collision: 'flipfit'},
    collison: 'flipfit',
    hoverable: false,
    always: false,
    confirm: false,
    okText: _$('确定'),
    cancelText: _$('取消'),
    size: 'default',
});

const events: Events<TooltipEvents> = {
    ...Dropdown.events,
    ok: true,
    cancel: true,
}

export class Tooltip<
    T extends TooltipProps = TooltipProps,
    E extends TooltipEvents = TooltipEvents,
    B extends TooltipBlocks = TooltipBlocks
> extends Dropdown<T, E, B> {
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    public $isTooltip = true;

    show(shouldFocus: boolean = false) {
        if (this.get('disabled')) return;

        clearTimeout(this.timer);
        this.set('value', true);
    }

    hide(immediately: boolean) {
        if (this.get('always')) return;

        if (this.get('hoverable')) {
            return super.hide(immediately);
        }
        // tooltip can show any number sub-tooltips, we should not close the showed tooltip
        // #885
        this.showedDropdown = null;
        super.hide(true);
    }
}
