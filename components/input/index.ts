import {Component, TypeDefs, createRef, watch, nextTick, onMounted, RefObject} from 'intact';
import {Sizes, sizes} from '../../styles/utils';
import template from './index.vdt';
import {bind, selectValue} from '../utils';
import {useAutoWidth} from './useAutoWidth';
import {useFrozen} from './useFrozen';
import {CommonInputHTMLAttributes, Events} from '../types';
import {useAutoRows} from './useAutoRows';
import { useShowPassword } from './useShowPassword';
import { useFocus } from './useFocus';
import { useConfigContext } from '../config';

export * from './search';

export type HTMLInputTypes =
    | 'textarea' // for textarea
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'maxlength'
    | (string & {});

interface InputHTMLAttributes extends CommonInputHTMLAttributes {
    // type input
    pattern?: string
    dirname?: string
    datalist?: string

    // type textarea
    cols?: number
    wrap?: 'hard' | 'soft'
}

type Value = string | number

export interface InputProps<V extends Value = Value> extends InputHTMLAttributes {
    type?: HTMLInputTypes 
    value?: V
    defaultValue?: string | number
    placeholder?: string | number
    readonly?: boolean
    clearable?: boolean
    disabled?: boolean
    size?: Sizes
    rows?: string | number | 'auto' | AutoRows
    autoWidth?: boolean
    fluid?: boolean
    width?: number | string
    stackClearIcon?: boolean
    frozenOnInput?: boolean
    inline?: boolean
    waveDisabled?: boolean
    resize?: 'none' | 'vertical' | 'horizontal' | 'both'
    showPassword?: boolean
    flat?: boolean
    showCount?: boolean
}

export type AutoRows = {
    min?: number
    max?: number
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
    placeholder: [String, Number],
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: sizes,
    rows: [String, Number, 'auto', Object],
    autoWidth: Boolean,
    fluid: Boolean,
    width: [Number, String],
    stackClearIcon: Boolean,
    frozenOnInput: Boolean,
    inline: Boolean,
    waveDisabled: Boolean,
    resize: ['none', 'vertical', 'horizontal', 'both'],
    showPassword: Boolean,
    flat: Boolean,
    showCount: Boolean,
}

const defaults = (): Partial<InputProps> => ({
    type: 'text', // text | textarea
    size: 'default',
    rows: 2,
    resize: 'vertical',
});

const events: Events<InputEvents> = {
    clear: true,
    focus: true,
    blur: true,
    input: true,
};

export class Input<V extends Value = Value> extends Component<InputProps<V>, InputEvents, InputBlocks> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private inputRef = createRef<HTMLInputElement>();
    private autoWidth = useAutoWidth();
    private frozen = useFrozen();
    private autoRows = useAutoRows(this.inputRef);
    private showPassword = useShowPassword();
    private focusHook = useFocus();
    private config = useConfigContext();

    focus() {
        this.inputRef.value!.focus();
    }

    blur() {
        this.inputRef.value!.blur();
    }

    select() {
        selectValue(this.inputRef.value!);
    }

    getStringWidth(str: string) {
        return this.autoWidth.getStringWidth(str);
    }
    
    getSelectionStart() {
        return this.inputRef.value!.selectionStart;
    }

    @bind
    private clear(e: MouseEvent) {
        this.set<string>('value', '');
        this.focus();
        this.trigger('clear', e);
    }
}
