import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {bind} from '../utils';
import {sizes, Sizes} from '../../styles/utils';
import {useStep} from './useStep';
import {useFormatter} from './useFormatter';
import {useValue} from'./useValue';
import {useChange} from './useChange';
import type {Events} from '../types';

export interface SpinnerProps {
    disabled?: boolean,
    value?: number,
    max?: number,
    min?: number,
    step?: number | StepObject | StepFunction,
    size?: Sizes,
    vertical?: boolean,
    precision?: number,
    formatter?: Formatter,
    parser?: Parser,
    prefix?: string,
    suffix?: string,
    width?: string | number,
    forceStep?: boolean,
}

export interface SpinnerEvents {
    change: [number, number | undefined]
}

export type StepObject = {
    [key in number]: number
} & {
    $?: number
}
export type StepFunction = (value: number) => number
type Formatter = (value: number) => string
type Parser = (value: string) => number

const typeDefs: Required<TypeDefs<SpinnerProps>> = {
    disabled: Boolean,
    value: Number,
    max: Number,
    min: Number,
    step: [Number, Object, Function],
    size: sizes,
    vertical: Boolean,
    precision: Number,
    formatter: Function,
    parser: Function,
    prefix: String,
    suffix: String,
    width: [String, Number],
    forceStep: Boolean,
};

const defaultStep = 1;
const defaults = (): Partial<SpinnerProps> => ({
    value: 0,
    max: Number.POSITIVE_INFINITY,
    min: Number.NEGATIVE_INFINITY,
    step: defaultStep,
    size: 'default'
});

const events: Events<SpinnerEvents> =  {
    change: true,
};

export class Spinner extends Component<SpinnerProps, SpinnerEvents> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;
    static events = events;

    private step = useStep<Spinner>(defaultStep);
    private formatter = useFormatter();
    private value = useValue(this.step, this.formatter);
    private change = useChange(this.step, this.value.fixValue);

    private isDisabledDecrease(): boolean {
        const {value, min, disabled} = this.get();
        return disabled || value! <= min!;
    }

    private isDisabledIncrease(): boolean {
        const {value, max, disabled} = this.get();
        return disabled || value! >= max!;
    }

    // we need change value as long as the input is valid, #213
    @bind
    private onInput(e: InputEvent) {
        const val = (e.target as HTMLInputElement).value;
        const {value} = this.value.getFixedValue(val.trim(), this.get('value')!);
        this.value.showValue.set(val);
        this.set({value});
    }
}
