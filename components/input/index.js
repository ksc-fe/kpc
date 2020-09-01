import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {selectInput} from '../utils';
import Search from './search';

export default class Input extends Intact {
    @Intact.template()
    static template = template;

    static blocks = ['prepend', 'append', 'prefix', 'suffix'];

    static propTypes = {
        type: String,
        name: String,
        value: [String, Number],
        defaultValue: [String, Number],
        placeholder: String,
        readonly: Boolean,
        clearable: Boolean,
        disabled: Boolean,
        size: ['large', 'default', 'small', 'mini'],
        rows: [Number, String],
        spellcheck: Boolean,
        autoWidth: Boolean,
        fluid: Boolean,
        width: [Number, String],
        tabindex: [Number, String],
        autocomplete: String,
        nativeProps: Object,
        stackClearIcon: Boolean,
        frozenOnInput: Boolean,
    };

    defaults() {
        return {
            type: 'text', // text | textarea
            name: undefined,
            value: undefined,
            defaultValue: undefined,
            placeholder: undefined,
            readonly: false,
            clearable: false,
            disabled: false,
            size: 'default',
            rows: 2,
            spellcheck: false,
            autoWidth: false,
            fluid: false,
            width: undefined,
            tabindex: undefined,
            autocomplete: undefined,
            nativeProps: undefined,
            stackClearIcon: false,
            frozenOnInput: false,

            _width: 1,
            _inputing: false,
            _originalValue: '',
        }
    }

    _init() {
        this.on('$changed:value', this._adjustWidth);
        this.on('$changed:placeholder', this._adjustWidth);
    }

    _mount() {
        this.input = this.refs.input;
        this._adjustWidth();
    }

    _adjustWidth() {
        if (this.get('autoWidth')) {
            const width = this.refs.fake.offsetWidth || 1;
            this.set('_width', width);
        }
    }

    clear(e) {
        this.set('value', '');
        this.focus();
        this.trigger('clear', e);
    }

    select() {
        selectInput(this.refs.input);
    }

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    _startInput(e) {
        this.set({_inputing: true, _originalValue: e.target.value});
        this.trigger('focus', e);
    }

    _endInput(e) {
        // ignore dispatch event, #523
        if (e._dispatch) return;
        this.set({_inputing: false});
        this.trigger('blur', e);
    }

    _onInput(e) {
        const value = e.target.value;
        this.set({value, _originalValue: value});
        this.trigger('input', e);
    }

    _proxyEvent(name, e) {
        this.trigger(name, e);
    }

    _onChange(e) {
        if (this.get('frozenOnInput')) this.update();
        this.trigger('change', e);
    }
}

export {Input, Search};
