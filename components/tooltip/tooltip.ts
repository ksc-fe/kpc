import {TypeDefs} from 'intact';
import {
    Dropdown,
    DropdownProps,
    defaults as dropdownDefaults,
    typeDefs as dropdownTypeDefs,
} from '../dropdown';
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
}

export const typeDefs: Required<TypeDefs<TooltipProps>> = {
    ...dropdownTypeDefs,
    showArrow: Boolean,
    theme: themes,
    hoverable: Boolean,
    always: Boolean,
    confirm: Boolean,
    okText: String,
    cancelText: String,
};

export const defaults: Partial<TooltipProps> = {
    ...dropdownDefaults,
    showArrow: true,
    theme: 'dark',
    position: {my: 'center bottom-10', at: 'center top'},
    hoverable: false,
    always: false,
    confirm: false,
    get okText() { return _$('确定') },
    get cancelText() { return _$('取消') },
}

export default class Tooltip<T extends TooltipProps = TooltipProps> extends Dropdown<T> {
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
