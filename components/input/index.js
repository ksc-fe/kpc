import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {selectInput} from '../utils';

export default class Input extends Intact {
    @Intact.template
    static template = template;

    static propTypes = {
        type: String,
        readonly: Boolean,
        clearable: Boolean,
        disabled: Boolean,
        fluid: Boolean,
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
            this.refs.input.style.width = `${width + 1}px`;
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

    _onInput(e) {
        this.set('value', e.target.value);
        this.trigger('input', e);
    }

    _proxyEvent(name, e) {
        this.trigger(name, e);
    }

    _destroy() {
        if (this.get('autoWidth')) {
            this.input.style.width = '';
        }
    }
}

export {Input};
