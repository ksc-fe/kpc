import {Component, provide, TypeDefs} from 'intact';
import template from './group.vdt';
import {toggleArray} from '../utils';
import {BUTTON_GROUP} from './constants';

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
    checkType: 'none',
});

export class ButtonGroup<T extends ButtonGroupProps = ButtonGroupProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    init() {
        provide(BUTTON_GROUP, this); 
    }

    setValue(v: any): void {
        let {checkType, value} = this.get();
        if (checkType === 'radio') {
            this.set('value', v);
        } else if (checkType === 'checkbox') {
            value = toggleArray(value, v);
            this.set('value', value);
        }
    }
}
