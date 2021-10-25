import {Component, TypeDefs, createRef, watch, nextTick, onMounted, RefObject} from 'intact';
import {Sizes} from '../types';
import template from './index.vdt';
import {bind} from '../utils';
import {isNullOrUndefined, EMPTY_OBJ} from 'intact-shared';
import {useAutoWidth} from './useAutoWidth';
import {useFrozen} from './useFrozen';
export * from './search';

export interface InputProps {
    type?: string
    value?: string | number
    defaultValue?: string | number
    placeholder?: string
    readonly?: boolean
    clearable?: boolean
    disabled?: boolean
    size?: Sizes
    rows?: string | number
    autoWidth?: boolean
    fluid?: boolean
    width?: number | string
    stackClearIcon?: boolean
    frozenOnInput?: boolean

    _width?: number
    _inputing?: boolean
    _originalValue?: string | number
}

const typeDefs: Required<TypeDefs<InputProps>> = {
    type: String,
    value: [String, Number],
    defaultValue: [String, Number],
    placeholder: String,
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: ['large', 'default', 'small', 'mini'],
    rows: [String, Number],
    autoWidth: Boolean,
    fluid: Boolean,
    width: [Number, String],
    stackClearIcon: Boolean,
    frozenOnInput: Boolean,
}

const defaults = (): Partial<InputProps> => ({
    type: 'text', // text | textarea
    readonly: false,
    clearable: false,
    disabled: false,
    size: 'default',
    rows: 2,
    autoWidth: false,
    fluid: false,
    stackClearIcon: false,
    frozenOnInput: false,
});

export class Input<T extends InputProps = InputProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private inputRef = createRef<HTMLInputElement>();
    private autoWidth = useAutoWidth();
    private frozen = useFrozen();

    focus() {
        this.inputRef.value!.focus();
    }

    blur() {
        this.inputRef.value!.blur();
    }

    select() {
        const input = this.inputRef.value!;
        if (input.select) {
            input.select();
        } else if (input.setSelectionRange) {
            // mobile safari
            input.focus();
            input.setSelectionRange(0, input.value.length);
        }
    }

    @bind
    private clear(e: MouseEvent) {
        this.set('value', '');
        this.focus();
        this.trigger('clear', e);
    }
}
