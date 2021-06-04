import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';

export interface RadioProps {
    disabled?: boolean
    value?: boolean
    trueValue?: boolean
}

const typeDefs: Required<TypeDefs<RadioProps>> = {
    disabled: Boolean,
    value: Boolean,
    trueValue: Boolean,
};

const defaults: Partial<RadioProps> = {
    disabled: false,
    value: false,
    trueValue: true,
} 

export default class Radio<T extends RadioProps = RadioProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    private elementRef = createRef<HTMLInputElement>();

    private isChecked(): boolean {
        return this.get('value') === this.get('trueValue');
    }

    @bind
    private onKeypress(e: KeyboardEvent): void {
        if (e.keyCode === 13) {
            this.refs.input.click();
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

export {Radio};
