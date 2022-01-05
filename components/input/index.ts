import {Component, TypeDefs, createRef, watch, nextTick, onMounted, RefObject} from 'intact';
import {Sizes, sizes} from '../../styles/utils';
import template from './index.vdt';
import {bind} from '../utils';
import {isNullOrUndefined, EMPTY_OBJ} from 'intact-shared';
import {useAutoWidth} from './useAutoWidth';
import {useFrozen} from './useFrozen';
import {CommonInputHTMLAttributes, Events} from '../types';
export * from './search';

interface InputHTMLAttributes extends CommonInputHTMLAttributes {
    // type input
    pattern?: string
    dirname?: string
    datalist?: string

    // type textarea
    cols?: number
    wrap?: 'hard' | 'soft'
}

export interface InputProps extends InputHTMLAttributes {
    type?: 'text' | 'textarea' 
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
    inline?: boolean
    waveDisabled?: boolean
}

export interface InputEvents {
    clear: [MouseEvent]
    focus: [FocusEvent]
    blur: [FocusEvent]
    input: [InputEvent]
}

export interface InputBlocks {
    prepend: null
    prefix: null
    suffix: null
    append: null
}

const typeDefs: Required<TypeDefs<Omit<InputProps, keyof InputHTMLAttributes>>> = {
    type: String,
    value: [String, Number],
    defaultValue: [String, Number],
    placeholder: String,
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: sizes,
    rows: [String, Number],
    autoWidth: Boolean,
    fluid: Boolean,
    width: [Number, String],
    stackClearIcon: Boolean,
    frozenOnInput: Boolean,
    inline: Boolean,
    waveDisabled: Boolean,
}

const defaults = (): Partial<InputProps> => ({
    type: 'text', // text | textarea
    size: 'default',
    rows: 2,
});

const events: Events<InputEvents> = {
    clear: true,
    focus: true,
    blur: true,
    input: true,
};

export class Input extends Component<InputProps, InputEvents, InputBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

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
