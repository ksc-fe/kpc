import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {bind} from '../utils';
import {isArray} from 'intact-shared';
import {CommonInputHTMLAttributes, Events} from '../types';

export interface CheckboxProps<V = boolean> extends CommonInputHTMLAttributes {
    disabled?: boolean
    value?: V
    trueValue?: any
    falseValue?: any 
    indeterminate?: boolean
}

export interface CheckboxEvents<V = boolean> {
    click: [MouseEvent]
    change: [V, MouseEvent]
}

const typeDefs: Required<TypeDefs<Omit<CheckboxProps, keyof CommonInputHTMLAttributes>>> = {
    disabled: Boolean, 
    value: null, 
    trueValue: null, 
    falseValue: null, 
    indeterminate: Boolean,
};

const defaults = (): Partial<CheckboxProps> => ({
    trueValue: true,
    falseValue: false,
});

const events: Events<CheckboxEvents> = {
    click: true,
    change: true,
}

export class Checkbox<V = boolean> extends Component<CheckboxProps<V>, CheckboxEvents<V>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private inputRef = createRef<HTMLInputElement>();

    private isChecked(){
        const {value, trueValue} = this.get();
        return isArray(value) ?
            value.indexOf(trueValue) > -1 :
            value === trueValue;
    }

    private setCheckboxModel(event: MouseEvent){
        const {trueValue, falseValue} = this.get();
        let checked = (event.target as any)?.checked;
        let value = this.get('value');
        if (isArray(value)) {
            value = value.slice(0) as V & any[];
            let index = (value as (V & any[])).indexOf(trueValue);
            if (checked) {
                if (index === -1) {
                    (value as (V & any[])).push(trueValue);
                }
            } else {
                if (index > -1) {
                    (value as (V &any[])).splice(index, 1);
                }
            }
        } else {
            value = (checked ? trueValue : falseValue);
        }
        this.set('value', value);
    }

    @bind
    private onClick(e: MouseEvent){
        // ignore the click event from label, otherwise it will trigger click event twice
        if (e.target !== this.inputRef.value) {
            e.stopPropagation();
            return;
        }

        const {disabled} = this.get();
        if (disabled) {
            this.trigger('click', e);
        } else {
            this.setCheckboxModel(e);
            this.trigger('click', e);
            this.trigger('change', this.get('value')!, e);
        }
    }

    @bind
    private onKeypress(e: KeyboardEvent){
        if (e.keyCode === 13 || e.key === 'Enter') {
            this.inputRef.value!.click();
        }
    }
}
