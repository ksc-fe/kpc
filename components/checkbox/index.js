import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

const {isArray} = Intact.Vdt.utils;

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
            falseValue: false,
        };
    }

    // set value to falseValue when destroy
    _destroy() {
        let value = this.get('value');
        const trueValue = this.get('trueValue');
        if (this.isChecked()) {
            if (isArray(value)) {
                value = value.slice(0);
                const index = value.indexOf(trueValue);
                value.splice(index, 1);
                this.set('value', value);
            } else {
                this.set('value', this.get('falseValue'));
            }
        }
    }

    isChecked() {
        const value = this.get('value');
        const trueValue = this.get('trueValue');
        return isArray(value) ? 
            value.indexOf(trueValue) > -1 : 
            value  === trueValue;
    }
}
