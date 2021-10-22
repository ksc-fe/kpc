import {Component, TypeDefs, createRef, watch, nextTick, onMounted, RefObject} from 'intact';
import {Sizes} from '../types';
import template from './index.vdt';
import {bind} from '../utils';
import {isNullOrUndefined, EMPTY_OBJ} from 'intact-shared';
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

    _width: null,
    _inputing: null,
    _originalValue: null,
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

    private fakeRef = createRef<HTMLDivElement>();
    private inputRef = createRef<HTMLInputElement>();

    init() {
        const adjustWidth = () => {
            if (this.get('autoWidth')) {
                const width = this.fakeRef.value!.offsetWidth || 1;
                this.set('_width', width);
            }
        }
        this.watch('value', adjustWidth, {inited: true, presented: true});
        this.watch('placeholder', adjustWidth, {inited: true, presented: true});
        onMounted(adjustWidth);
    }

    focus() {
        this.inputRef.value!.focus();
    }

    blur() {
        this.inputRef.value!.blur();
    }

    select() {
        selectInput(this.inputRef.value!);
    }

    @bind
    private clear(e: MouseEvent) {
        this.set('value', '');
        this.focus();
        this.trigger('clear', e);
    }

    @bind
    private startInput(e: FocusEvent) {
        this.set({_inputing: true, _originalValue: (e.target as HTMLInputElement).value});
        this.trigger('focus', e);
    }

    @bind
    private endInput(e: FocusEvent & {_dispatch: boolean}) {
        // ignore dispatch event, #523
        if (e._dispatch) return;
        const propValue = (this.$vNode.props || EMPTY_OBJ).value;
        if (!isNullOrUndefined(propValue)) {
            // set the value as the value that parent passes to it
            this.set({value: propValue});
        }
        this.set({_inputing: false});
        this.trigger('blur', e);
    }

    @bind
    private onInput(e: InputEvent) {
        const value = (e.target as HTMLInputElement).value;
        this.set({value, _originalValue: value});
        this.trigger('input', e);
    }
}

function selectInput(input: HTMLInputElement) {
    if (input.select) {
        input.select();
    } else if (input.setSelectionRange) {
        // mobile safari
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }
}
