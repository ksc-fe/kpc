import {TypeDefs, Children} from 'intact';
import {
    Dropdown,
    DropdownProps,
    DropdownEvents,
    DropdownBlocks,
    defaults as dropdownDefaults,
    typeDefs as dropdownTypeDefs,
} from '../dropdown/dropdown';
import {_$} from '../../i18n';
import {Theme, themes} from './styles';

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

export const typeDefs: Required<TypeDefs<TooltipProps>> = {
    ...dropdownTypeDefs,
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

export const defaults = (): Partial<TooltipProps> => ({
    ...dropdownDefaults(),
    showArrow: true,
    theme: 'dark',
    position: {my: 'center bottom-10', at: 'center top', collision: 'flipfit'},
    hoverable: false,
    always: false,
    confirm: false,
    okText: _$('确定'),
    cancelText: _$('取消'),
    size: 'default',
});

export class Tooltip<
    T extends TooltipProps = TooltipProps,
    E extends TooltipEvents = TooltipEvents,
    B extends TooltipBlocks = TooltipBlocks
> extends Dropdown<T, E, B> {
    static typeDefs = typeDefs;
    static defaults = defaults;

    hide(immediately: boolean) {
        if (this.get('always')) return;

        if (this.get('hoverable')) {
            return super.hide(immediately);
        }
        super.hide(true);
    }
}
