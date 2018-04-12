import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Datepicker extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        clearable: Boolean,
        disabled: Boolean,
        range: Boolean,
    };

    defaults() {
        return {
            value: undefined, 
            clearable: false,
            placeholder: undefined,
            disabled: false,
            size: 'default',
            type: 'date', // date | datetime
            range: false,
        }
    }

    onClear(e) {
        e.stopPropagation();
        this.set('value', undefined);
    }

    _hide() {
        if (this.get('range')) return;

        this.refs.calendar.hide();
    }

    _onChangeShowDate(type, c, v) {
        console.log(arguments);
    }
}

export {Datepicker};
