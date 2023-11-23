import {Component, TypeDefs, createRef, nextTick, Children} from 'intact';
import template from './index.vdt';
import {_$} from '../../i18n';
import {bind} from '../utils';
import type {Input} from '../input';
import type {Events} from '../types';
import { useConfigContext } from '../config';

type Value = string | number

export interface EditableProps<V extends Value = Value> {
    editing?: boolean,
    value?: V,
    required?: boolean,
    validate?: ((v: string) => boolean) | string | RegExp,
    disabled?: boolean,
    tip?: Value, 
    trim?: boolean,
    invalid?: boolean,
}

export interface EditableEvents<V extends Value = Value> {
    error: [string]
    change: [string, V | undefined]
}

const typeDefs: Required<TypeDefs<EditableProps>> = {
    editing: Boolean,
    value: [String, Number],
    required: Boolean,
    validate: [Function, String, RegExp],
    disabled: Boolean,
    tip: [String, Number],
    trim: Boolean,
    invalid: Boolean,
};

const defaults = (): Partial<EditableProps> => ({
    required: true,
    tip: _$('编辑'),
    trim: true,
});

const events: Events<EditableEvents> = {
    error: true,
    change: true,
};

export class Editable<
    V extends Value = Value
> extends Component<EditableProps<V>, EditableEvents<V>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private inputRef = createRef<Input>();
    private config = useConfigContext();

    @bind
    private edit() {
        this.set('editing', true);
        /**
         * Intact will update in nextTick, but Vue will call
         * call updated method in nextTick of this nextTick
         * so we should do it after two nextTicks
         * https://github.com/ksc-fe/kpc/issues/847
         *
         * use binding this.select to Input $mounted event instead
         */
        // nextTick(() => {
            // nextTick(() => {
                // this.inputRef.value!.select();
            // });
        // });
    }

    @bind select() {
        this.inputRef.value!.select();
    }

    @bind
    private onBlur(e: KeyboardEvent) {
        this.setValue((e.target as HTMLInputElement).value);
    }

    @bind
    private onKeydown(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 27: // esc 
                this.set('editing', false);
                break;
            case 13: // enter
                this.onBlur(e);
                break;
        }
    }

    @bind
    private setValue(value: string) {
        const {validate, required, trim, value: oldValue} = this.get();

        if (trim) value = value.trim();
        
        let valid = true;

        if (required && !value) {
            valid = false;
        } else if (validate && value) {
            if (typeof validate === 'function') {
                valid = validate.call(this, value);
            } else if (validate instanceof RegExp) {
                valid = validate.test(value);
            } else if (typeof validate === 'string') {
                valid = new RegExp(validate).test(value);
            }
        }

        if (!valid) {
            // do not change the value if invalid, #51
            // this.set('value', value, {silent: true});
            this.set('invalid', true);
            return this.trigger('error', value);
        }

        this.set({
            invalid: false,
            editing: false,
            value: value as V
        });

        if (oldValue !== value) {
            this.trigger('change', value, oldValue);
        }
    }
}
