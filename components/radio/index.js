import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
        };
    }

    isChecked() {
        return this.get('value') === this.get('trueValue');
    }

    _destroy() {
        if (this.isChecked()) {
            this.set('value', undefined);
        }
    }
}
