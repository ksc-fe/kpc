import {Component, ComponentConstructor, TypeDefs, inject, createRef} from 'intact';
import {bind} from '../utils';
import template from './index.vdt';
import type {CommonFormElementAttributes, Events} from '../types';
import { useConfigContext } from '../config';

export interface RadioProps<Value = false, True = true, False = undefined> extends CommonFormElementAttributes {
    disabled?: boolean
    value?: Value | True | False
    trueValue?: True
    falseValue?: False
    cancelable?: boolean
}

export interface RadioEvents<True = true, False = undefined> {
    click: [MouseEvent]
    change: [True | False, MouseEvent]
}

const typeDefs: Required<TypeDefs<Omit<RadioProps, keyof CommonFormElementAttributes>>> = {
    disabled: Boolean,
    value: null,
    trueValue: null,
    falseValue: null,
    cancelable: Boolean,
};

const defaults = (): Partial<RadioProps> => ({
    value: false,
    trueValue: true,
    falseValue: undefined,
});

const events: Events<RadioEvents> = {
    click: true,
    change: true,
};

export class Radio<
    Value = false,
    True = true,
    False = undefined
> extends Component<RadioProps<Value, True, False>, RadioEvents<True, False>> {
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
        const {value, trueValue, falseValue, cancelable, disabled} = this.get();
        if (disabled) {
            this.trigger('click', e);
            return;
        }

        if (value === trueValue) {
            if (cancelable) {
                this.set('value', falseValue);
                this.trigger('click', e);
                this.trigger('change', falseValue!, e);
            } else {
                this.trigger('click', e);
            }
        } else {
            this.set('value', trueValue);
            this.trigger('click', e);
            this.trigger('change', trueValue!, e);
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
