import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
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
        // declare for camelizing in Vue dom template
        trueValue: undefined,
    }

    isChecked() {
        return this.get('value') === this.get('trueValue');
    }

    _destroy() {
        // we should not change data in _destroy
        // if (this.isChecked()) {
            // this.set('value', undefined);
        // }
    }

    _onKeypress(e) {
        if (e.keyCode === 13) {
            this.refs.input.click();
        }
    }

    _onClick(e) {
        const {value, trueValue, disabled} = this.get();
        if (!disabled && value !== trueValue) {
            this.set('value', trueValue);
            this.trigger('click', e);
            this.trigger('change', trueValue, e);
        } else {
            this.trigger('click', e);
        }
    }

    _fixClick(e) {
        // ignore the click event from label, otherwise it will trigger click event twice
        if (e.target !== this.refs.input) {
            e.stopPropagation();
        }
    }
}

export {Radio};
