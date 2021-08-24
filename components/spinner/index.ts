import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {minMaxStep, bind} from '../utils';
import {sizes, Sizes} from '../../styles/utils';

const numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

export interface SpinnerProps {
    disabled: Boolean,
    _value: [number, string],
    max: number,
    min: number,
    step: [number, Object, Function],
    size: Sizes,
    vertical: Boolean,
    precision: number,
    formatter: Function,
    parser: Function,
    prefix: string,
    suffix: string,
    width: [string, number],
    forceStep: Boolean,
}

const typeDefs: Required<TypeDefs<SpinnerProps>> = {
    disabled: Boolean,
    _value: [Number, String],
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

const defaults = (): Partial<SpinnerProps> => ({
    disabled: false,
    _value: 0,
    max: Number.POSITIVE_INFINITY,
    min: Number.NEGATIVE_INFINITY,
    step: 1,
    size: 'default',
    vertical: false,
    precision: undefined,
    formatter: undefined,
    parser: undefined,
    prefix: undefined,
    suffix: undefined,
    width: undefined,
    forceStep: false,
});

export default class Spinner <T extends SpinnerProps = SpinnerProps> extends Component<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    @bind
    mounted() {
        const {formatter, prefix, suffix, _value} = this.get();
        if (formatter || prefix || suffix) {
            this.set({'_value': this._format(_value)});
        }
    }

    @bind
    private _getStep(): Number {
        let v = this.get('_value');
        let s = this.get('step');

        if (Object.prototype.toString.call(s) === "[object Object]") {
            let keys = Object.keys(s);
            for (let i = 0; i < keys.length; i++) {
                if (v < Number(keys[i]) || keys[i] === '$') {
                    return s[keys[i]];
                }
            }
        }
        
        return Number(s);
    }

    private _parse(value: any) {
        const {parser, prefix, suffix} = this.get();
        value = String(value);

        if (!parser) {
            if (prefix) {
                value = value.replace(new RegExp(`^${prefix}`), '');
            }
            if (suffix) {
                value = value.replace(new RegExp(`${suffix}$`), '');
            }
            return value;
        }

        return parser(value);
    }

    private _format(value: any) {
        const {formatter, prefix, suffix} = this.get();

        if (!formatter) {
            return `${prefix || ''}${value}${suffix || ''}`;
        }

        return formatter(value);
    }

    @bind
    private _increase(): void {
        let v = this.get('_value');
        const {formatter, prefix, suffix} = this.get();
        if (formatter || prefix || suffix) {
            v = this._parse(v);
        }

        let s = this._getStep();
        let _v = Number(v) + Number(s);
        _v = Number.isInteger(_v) ? _v : _v.toFixed(1);
        _v = _v > this.get('max') ? this.get('max') : _v;
        this.set({'_value': this._format(_v)});
    }

    @bind
    private _decrease(): void {
        let v = this.get('_value');
        const {formatter, prefix, suffix} = this.get();
        if (formatter || prefix || suffix) {
            v = this._parse(v);
        }

        let s = this._getStep();
        let _v = Number(v) - Number(s);
        _v = Number.isInteger(_v) ? _v : _v.toFixed(1);
        _v = _v < this.get('min') ? this.get('min') : _v;
        this.set({'_value': this._format(_v)});
    }

    @bind
    private _disableDecrease(): boolean {
        let v = this.get('_value');
        return Number(v) <= this.get('min');
    }

    @bind
    private _disableIncrease(): boolean {
        let v = this.get('_value');
        return Number(v) >= this.get('max');
    }

    @bind
    private _changeValue(e: Event): void {
        let ev = e.target.value;
        if (this.get('min') <= ev && ev <= this.get('max')) {
            this.set({'_value': ev});
        }
    }
}

function _parseStep(step, defaultValue) {
}

export function parseStep(step, defaultValue) {
}

export {Spinner};
