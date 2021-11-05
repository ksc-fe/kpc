import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';
import {CommonInputHTMLAttributes} from '../types';

export interface RadioProps extends CommonInputHTMLAttributes {
    disabled?: boolean
    value?: any 
    trueValue?: any 
}

const typeDefs: Required<TypeDefs<Omit<RadioProps, keyof CommonInputHTMLAttributes>>> = {
    disabled: Boolean,
    value: null,
    trueValue: null,
};

const defaults = (): Partial<RadioProps> => ({
    value: false,
    trueValue: true,
});

export class Radio extends Component<RadioProps> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private elementRef = createRef<HTMLInputElement>();

    @bind
    private onKeypress(e: KeyboardEvent): void {
        if (e.keyCode === 13) {
            this.elementRef.value!.click();
        }
    }

    @bind
    private onClick(e: MouseEvent): void {
        const {value, trueValue, disabled} = this.get();
        if (!disabled && value !== trueValue) {
            this.set('value', trueValue);
            this.trigger('click', e);
            this.trigger('change', trueValue, e);
        } else {
            this.trigger('click', e);
        }
    }

    @bind
    private fixClick(e: MouseEvent): void {
        // ignore the click event from label, otherwise it will trigger click event twice
        if (e.target !== this.refs.input) {
            e.stopPropagation();
        }
    }
}
