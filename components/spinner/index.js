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
        // make sure the min/max/step is valid
        const defaults = this.defaults();
        ['min', 'max', 'step'].forEach(item => {
            this.on(`$receive:${item}`, (c, v) => {
                if (typeof v !== 'number') {
                    this.set(item, defaults[item], {async: true});
                }
            });
        });

        this.on('$receive', (c, keys) => {
            if (['max', 'min', 'precision', 'value'].find(key => ~keys.indexOf(key))) {
                this._fixValue();
            }
        });
    }

    _fixValue(value = this.get('value'), fallbackValue = 0) {
        this.set(this._getFixedValue(value, fallbackValue));
    }

    _getFixedValue(value = this.get('value'), fallbackValue = 0) {
        const {precision, max, min} = this.get();

        if (min > max) {
            Intact.utils.error(new Error(`[Spinner] min must less than or equal to max, but got min: ${min} max: ${max}`));
            return {_value: 0, value: 0};
        }

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

        return {_value, value};
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

    // we need change value as long as the input is valid, #213
    _onInput(e) {
        const val = e.target.value.trim();
        const {_value, value} = this._getFixedValue(val, this.get('value'));
        const data = {_value: val};
        if (Number(_value) === value) {
            data.value = value;
        }
        this.set(data);
    }
}

export {Spinner};
