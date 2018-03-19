import Intact from 'intact';
import template from './index.vdt';
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
        };
    }

    static propTypes = {
        disabled: Boolean,
        max: Number,
        min: Number,
        step: Number
    }

    _init() {
        let value = this.get('value');
        if (value == null) {
            const min = this.get('min');
            if (min === Number.NEGATIVE_INFINITY) {
                value = 0;
            } else {
                value = min;
            }
            this.set('value', value);
        }
        this.initValue = value;
    }

    _increase(e) {
        if (this._disableIncrease()) return;

        const {value, step} = this.get();

        this.set('value', Number((value + step).toFixed(10)));
    }

    _decrease(e) {
        if (this._disableDecrease()) return;

        const {value, step} = this.get();

        this.set('value', Number((value - step).toFixed(10)));
    }

    _disableDecrease() {
        const {value, min, step, disabled} = this.get();

        return disabled || value <= min || value - min < step;
    }

    _disableIncrease() {
        const {value, max, step, disabled} = this.get();

        return disabled || value >= max || max - value < step;
    }

    _changeValue(e) {
        const {disabled, max, min} = this.get();
        let val = e.target.value.trim();

        if (!numberReg.test(val) || disabled) {
            this.set('value', this.initValue);
        } else {
            val = Number(val);
            if (val >= max) {
                val = max;
            } else if (val < min) {
                val = min;
            }
            this.set('value', val);
        }
    }
}

export {Spinner};
