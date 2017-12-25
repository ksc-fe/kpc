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
            placeholder: undefined,
            readonly: false,
            clearable: false,
            disabled: false,
            size: 'default',
            rows: 2,
            spellcheck: false,
        }
    }

    clear() {
        this.set('value', '');
        this.refs.input.focus();
    }
}
