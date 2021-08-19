import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {_$} from '../../i18n';
import {bind} from '../utils';

export interface EditableProps {
    editing: boolean,
    value: string | number,
    required: boolean,
    validate: Function | string | RegExp,
    disabled: boolean,
    tip: string | number,
    trim: boolean,
    invalid: boolean,
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
    editing: false,
    required: true,
    disabled: false, 
    tip: _$('编辑'),
    trim: true,
    invalid: false,
})

export class Editable<T extends EditableProps = EditableProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = {
        change: true,
        error: true,
    };

    private elementRef = createRef<HTMLInputElement>();

    init(){
        this.watch('editing', v => {
            if (v) {
                // TODO: delete，以下为了修复Input组件defaultValue属性未生效
                this.elementRef.value!.focus();
                setTimeout(() => {
                    this.elementRef.value!.select();
                });
            }
        }, {presented: true});
    }

    @bind
    private onClick() {
        this.set('editing', true);
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
            return this.trigger('error', this, value);
        }

        this.set({
            invalid: false,
            editing: false,
            value
        });

        if (oldValue !== value) {
            this.trigger('change', this, value, oldValue);
        }
    }
}