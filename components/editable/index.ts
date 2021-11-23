import {Component, TypeDefs, createRef, nextTick} from 'intact';
import template from './index.vdt';
import {_$} from '../../i18n';
import {bind} from '../utils';
import type {Input} from '../input';

export interface EditableProps {
    editing?: boolean,
    value?: string | number,
    required?: boolean,
    validate?: Function | string | RegExp,
    disabled?: boolean,
    tip?: string | number,
    trim?: boolean,
    invalid?: boolean,
}

export interface EditableEvents {
    error: [string | number]
    change: [string, string | number | undefined]
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
})

export class Editable extends Component<EditableProps, EditableEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private inputRef = createRef<Input>();

    @bind
    private edit() {
        this.set('editing', true);
        nextTick(() => {
            this.inputRef.value!.select();
        });
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
            value
        });

        if (oldValue !== value) {
            this.trigger('change', value, oldValue);
        }
    }
}
