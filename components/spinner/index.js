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
        };
    }

    static propTypes = {
        disabled: Boolean,
        max: Number,
        min: Number,
        step: Number,
        vertical: Boolean,
    }

    _init() {
        this._fixValue();
        this.on('$receive:value', this._fixValue);
        this.on('$change:_value', (c, val) => {
            const {max, min} = this.get();
            // if the _value is valid, then set it to value
            if (numberReg.test(val)) {
                val = Number(val);
                if (val <= max && val >= min) {
                    this.set('value', val, {update: false});
                }
            }
        });
    }

    _fixValue() {
        let value = this.get('value');
        if (value == null) {
            const min = this.get('min');
            if (min === Number.NEGATIVE_INFINITY) {
                value = 0;
            } else {
                value = min;
            }
        }
        this.set({
            '_value': value,
            'value': value,
        });
        this.initValue = value;
    }

    _increase(e) {
        const {_value, step} = this.get();

        this.set('_value', Number((_value + step).toFixed(10)));
    }

    _decrease(e) {
        const {_value, step} = this.get();

        this.set('_value', Number((_value - step).toFixed(10)));
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
        let val = e.target.value.trim();

        const {disabled, max, min} = this.get();

        if (!numberReg.test(val) || disabled) {
            this.set('_value', this.initValue);
        } else {
            val = Number(val);
            if (val >= max) {
                val = max;
            } else if (val < min) {
                val = min;
            }
            this.set('_value', val);
        }
    }
}

export {Spinner};
