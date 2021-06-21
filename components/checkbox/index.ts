import {Component, TypeDefs, createRef} from 'intact';
import template from './index.vdt';
import {bind} from '../utils';
import {isArray} from 'intact-shared';

export interface CheckboxProps {
    disabled?: boolean
    name?: string
    value?: any
    trueValue?: any
    falseValue?: any
    indeterminate?: boolean
}

const typeDefs: Required<TypeDefs<CheckboxProps>> = {
    disabled: Boolean, 
    name: String,
    value: null, 
    trueValue: null, 
    falseValue: null, 
    indeterminate: Boolean,
};

const defaults = (): Partial<CheckboxProps> => ({
    disabled: false,
    value: false,
    trueValue: true,
    falseValue: false,
    indeterminate: false,
})

export class Checkbox<T extends CheckboxProps = CheckboxProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

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
            value = value.slice(0);
            let index = value.indexOf(trueValue);
            if (checked) {
                if (index === -1) {
                    value.push(trueValue);
                }
            }
            else {
                if (index > -1) {
                    value.splice(index, 1);
                }
            }
        }
        else {
            value = checked ? trueValue : falseValue;
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
            this.trigger('click');
        }else {
            this.setCheckboxModel(e);
            this.trigger('click', e);
            this.trigger('change', this.get('value'), e);
        }
    }

    @bind
    private onKeypress(e: KeyboardEvent){
        if (e.keyCode === 13 || e.key === 'Enter') {
            this.inputRef.value?.click();
        }
    }
}
