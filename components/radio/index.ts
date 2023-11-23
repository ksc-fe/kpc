import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';
import type {CommonInputHTMLAttributes, Events} from '../types';
import { useConfigContext } from '../config';

export interface RadioProps<Value = false, True = true> extends CommonInputHTMLAttributes {
    disabled?: boolean
    value?: Value | True
    trueValue?: True 
}

export interface RadioEvents<True = true> {
    click: [MouseEvent]
    change: [True, MouseEvent]
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

const events: Events<RadioEvents> = {
    click: true,
    change: true,
};

export class Radio<
    Value = false,
    True = true
> extends Component<RadioProps<Value, True>, RadioEvents<True>> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private elementRef = createRef<HTMLInputElement>();
    private config = useConfigContext();

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
            this.trigger('change', trueValue!, e);
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
