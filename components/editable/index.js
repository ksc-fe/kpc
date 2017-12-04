import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            editing: false,
            value: undefined,
            required: true,
            validate: undefined,
            disabled: false, 
            tip: '编辑',
            trim: true,
            invalid: false,
        };
    }

    _init() {
        this.initValue = this.get('value');
    }

    _edit() {
        this.set('editing', true);
        const input = this.refs.input;
        if (input.select) {
            input.select();
        } else if (input.setSelectionRange) {
            // mobile safari
            input.focus();
            input.setSelectionRange(0, this.get('value.length', 0));
        }
    }

    _onBlur(e) {
        this._setValue(e.target.value);
    }

    _onKeydown(e) {
        switch (e.keyCode) {
            case 27: // esc 
                this.set('editing', false);
                break;
            case 13: // enter
                this._onBlur(e);
                break;
        }
    }

    _setValue(value) {
        const {validate, required, trim} = this.get();

        if (trim) value = value.trim();
        
        let valid = true;

        if (required && !value) {
            valid = false;
        } else if (validate && value) {
            if (typeof validate === 'function') {
                valid = validate.call(this, value);
            } else if (validate instanceof RegExp) {
                valid = validate.test(value);
            } else if (typeof validate === 'string') {
                valid = new RegExp(validate).test(value);
            }
        }

        if (!valid) {
            this.set('value', value, {silent: true});
            this.set('invalid', true);
            return this.trigger('error', this, value);
        }

        this.set({
            invalid: false,
            editing: false,
            value: value
        });
    }

    reset() {
        this.set('value', this.initValue);
    }
}
