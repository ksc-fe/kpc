import {Component, provide, TypeDefs} from 'intact';
import template from './group.vdt';
import {toggleArray} from '../utils';
import {BUTTON_GROUP} from './constants';
import { useConfigContext } from '../config';

export interface ButtonGroupProps {
    vertical?: boolean
    value?: any
    checkType?: 'none' | 'radio' | 'checkbox' 
    fluid?: boolean
    seperate?: boolean
    separate?: boolean
    btnWidth?: number | string
}

const typeDefs: Required<TypeDefs<ButtonGroupProps>> = {
    vertical: Boolean,
    value: null,
    fluid: Boolean,
    checkType: ['none', 'radio', 'checkbox'],
    seperate: Boolean,
    separate: Boolean,
    btnWidth: [Number, String],
};

const defaults = (): Partial<ButtonGroupProps> => ({
    checkType: 'none',
});

export class ButtonGroup extends Component<ButtonGroupProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private config = useConfigContext();

    init() {
        provide(BUTTON_GROUP, this); 
        if (typeof this.get().seperate === 'boolean') {
            console.warn("`seperate` is a typo which will be removed in next version, please using `separate` instead");
        }
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
