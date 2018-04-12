import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Calendar from './calendar';

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
        const begin = this.refs.begin;
        const end = this.refs.end;
        if (type === 'begin') {
            const endShowDate = end.getShowDate();
            endShowDate.setDate(1);
            if (v >= endShowDate) {
                const endShowDate = new Date(v);
                endShowDate.setMonth(endShowDate.getMonth() + 1);
                end.setShowDate(endShowDate);
            }
        } else {
            const beginShowDate = begin.getShowDate();
            v.setDate(1);
            if (v <= beginShowDate) {
                const beginShowDate = new Date(v);
                beginShowDate.setMonth(beginShowDate.getMonth() - 1);
                begin.setShowDate(beginShowDate);
            }
        }
    }

    _setEndShowDate(c) {
        const date = Calendar.getNowDate();
		date.setMonth(date.getMonth() + 1);
        c.setShowDate(date);
    }

    _checkDateInRageForBegin(date) {
        const dateString = this.get('value.1');
        if (!dateString) return;

        const _date = new Date(dateString);
        return {
            'k-in-range': date > _date
        };
    }

    _checkDateInRageForEnd(date) {
        const dateString = this.get('value.0');
        if (!dateString) return;

        const _date = new Date(dateString);
        return {
            'k-in-range': date < _date 
        };
    }
}

export {Datepicker};
