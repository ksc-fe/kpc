import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

const {isArray} = Intact.Vdt.utils;

export default class Checkbox extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
            falseValue: false,
        };
    }

    static propTypes = {
        disabled: Boolean,
    }

    // set value to falseValue when destroy
    _destroy() {
        // we should not change data in _destroy

        // we must use _context to get value, because it maybe has changed
        // const model = this.get('v-model');
        // if (!model) return;

        // let value = this.get('_context').data.get(model);
        // if (!value) return;
        // const trueValue = this.get('trueValue');
        // if (this.isChecked()) {
            // if (isArray(value)) {
                // value = value.slice(0);
                // const index = value.indexOf(trueValue);
                // value.splice(index, 1);
                // this.set('value', value);
            // } else {
                // this.set('value', this.get('falseValue'));
            // }
        // }
    }

    isChecked() {
        const value = this.get('value');
        const trueValue = this.get('trueValue');
        return isArray(value) ? 
            value.indexOf(trueValue) > -1 : 
            value === trueValue;
    }
}

export {Checkbox};
