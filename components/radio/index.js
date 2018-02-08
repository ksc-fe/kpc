import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class Radio extends Intact {
    get template() { return template; }

    defaults() {
        return {
            disabled: false,
            value: false,
            trueValue: true,
        };
    }

    static propTypes = {
        disabled: Boolean,
    }

    isChecked() {
        return this.get('value') === this.get('trueValue');
    }

    _destroy() {
        if (this.isChecked()) {
            this.set('value', undefined);
        }
    }

    // @referenct https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
    _onClick(e) {
        e.preventDefault();
        this.trigger('click', e);
    }
}

export {Radio};
