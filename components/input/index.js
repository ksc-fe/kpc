import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template
    static template = template;

    static propTypes = {
        type: String,
        readonly: Boolean,
        clearable: Boolean,
        disabled: Boolean,
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
        }
    }

    clear(e) {
        this.set('value', '');
        this.focus();
        this.trigger('clear', e);
    }

    select() {
        this.refs.input.select();
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
}
