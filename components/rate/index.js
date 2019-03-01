import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Rate extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: Number,
        count: Number,
        disabled: Boolean,
        half: false,
        clearable: false,
    };

    defaults() {
        return {
            value: 0,
            count: 5,
            disabled: false,
            half: false,
            clearable: false,

            _value: 0,
        };
    }

    _init() {
        this.on('$receive:value', (c, v) => {
            if (!this.get('half')) v = Math.round(v);
            this.set({
                '_value': v,
                'value': v,
            });
        });
    }

    onClick(value) {
        if (this.get('disabled')) return;

        // clear the value when click again on the clearable component
        if (this.get('clearable') && this.get('value') === value) {
            value = 0;
        }

        this.set({
            'value': value,
            '_value': value,
        });
    }

    onMouseEnter(value) {
        if (this.get('disabled')) return;

        this.set('_value', value);
    }

    onMouseLeaveComponent() {
        if (this.get('disabled')) return;

        this.set('_value', this.get('value'));
    }
}
