import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

const numberReg = /^(-|\+)?\d+(\.(\d+)?)?$/;

export default class Spinner extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: 0,
            max: Number.POSITIVE_INFINITY,
            min: Number.NEGATIVE_INFINITY,
            step: 1,
            size: 'default',
            vertical: false,
            precision: undefined,

            _value: 0,
        };
    }

    static propTypes = {
        disabled: Boolean,
        value: [Number, String],
        max: Number,
        min: Number,
        step: Number,
        size: ['large', 'default', 'small', 'mini'],
        vertical: Boolean,
        precision: Number,
    }

    _init() {
        ['max', 'min', 'precision'].forEach(item => {
            this.on(`$receive:${item}`, () => this._fixValue());
        })
        this.on('$receive:value', (c, v) => {
            this._fixValue(v);
        });
    }

    _fixValue(value = this.get('value'), fallbackValue = 0) {
        const {precision, max, min} = this.get();
        const originValue = this.get('value');
        if (value == null || !numberReg.test(value)) {
            value = fallbackValue;
        }
        value = Number(value);
        if (value >= max) {
            value = max;
        } else if (value < min) {
            value = min;
        }

        let _value = value;
        if (precision != null) {
            _value = value.toFixed(precision);
        }

        this.set({_value, value});
    }

    _increase(e) {
        const {_value, step} = this.get();

        this._fixValue(Number((+_value + step).toFixed(10)));
    }

    _decrease(e) {
        const {_value, step} = this.get();

        this._fixValue(Number((+_value - step).toFixed(10)));
    }

    _disableDecrease() {
        const {_value, min, step, disabled} = this.get();

        return disabled || +_value <= min || Number((min + step).toFixed(10)) > _value;
    }

    _disableIncrease() {
        const {_value, max, step, disabled} = this.get();

        return disabled || +_value >= max || Number((max - step).toFixed(10)) < _value;
    }

    _changeValue(e) {
        this._fixValue(e.target.value.trim(), this.get('value'));
    }
}

export {Spinner};
