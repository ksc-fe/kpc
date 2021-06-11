import {Component, provide, TypeDefs} from 'intact';
import template from './group.vdt';

export interface ButtonGroupProps {
    vertical?: boolean
    value?: any
    checkType?: 'none' | 'radio' | 'checkbox' 
    fluid?: boolean
}

const typeDefs: Required<TypeDefs<ButtonGroupProps>> = {
    vertical: Boolean,
    value: null,
    fluid: Boolean,
    checkType: ['none', 'radio', 'checkbox']
};

const defaults = (): Partial<ButtonGroupProps> => ({
    vertical: false,
    checkType: 'none',
    fluid: false,
});

export default class ButtonGroup<T extends ButtonGroupProps = ButtonGroupProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        provide('ButtonGroup', this); 
    }

    setValue(v: any): void {
        let {checkType, value} = this.get();
        if (checkType === 'radio') {
            this.set('value', v);
        } else if (checkType === 'checkbox') {
            if (!Array.isArray(value)) {
                value = [];
            } else {
                value = value.slice(0);
            }
            const index = value.indexOf(v);
            if (!~index) {
                value.push(v);
            } else {
                value.splice(index, 1);
            }
            this.set('value', value);
        }
    }
}

export {ButtonGroup}
