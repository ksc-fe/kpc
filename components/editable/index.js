import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {selectInput} from '../utils';
import {_$} from '../utils';

export default class Editable extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            editing: false,
            value: undefined,
            required: true,
            validate: undefined,
            disabled: false, 
            tip: _$('编辑'),
            trim: true,
            invalid: false,
        };
    }

    static propTypes = {
        editing: Boolean,
        required: Boolean,
        validate: [Function, String, RegExp],
        disabled: Boolean,
        tip: [String, Number],
        trim: Boolean,
        invalid: Boolean,
    }

    _init() {
        this.initValue = this.get('value');
    }

    _edit() {
        this.set('editing', true);
        const input = this.refs.input;
        selectInput(input);
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
        const {validate, required, trim, value: oldValue} = this.get();

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
            // do not change the value if invalid, #51
            // this.set('value', value, {silent: true});
            this.set('invalid', true);
            return this.trigger('error', this, value);
        }

        this.set({
            invalid: false,
            editing: false,
            value: value
        });

        if (oldValue !== value) {
            this.trigger('change', this, value, oldValue);
        }
    }

    reset() {
        this.set({
            'value': this.initValue,
            'editing': false,
            'invalid': false,
        });
    }
}

export {Editable};
