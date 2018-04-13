import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Calendar from './calendar';
import {getNowDate, isLT, isGT} from './utils';

const {isEqual} = Intact.utils;

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

    _setBeginShowDate(c) {
        const date = getNowDate();
        c.set('_showDate', date, {silent: true})
    }

    _setEndShowDate(c) {
        const date = getNowDate();
		date.setMonth(date.getMonth() + 1);
        c.set('_showDate', date, {silent: true})
    }

    _checkDateInRange(date, isOut) {
        const [start, end] = this.get('value') || [];
        if (start && end) {
            return {
                'k-in-range': !isOut && 
                    isGT(date, new Date(start)) && 
                    isLT(date, new Date(end))
            };
        }
    }

    _onChangeValueForRange(c, v) {
        let value = this.get('value');
        if (isEqual(v, value)) return;

        if (!value || value && value.length === 2) {
            value = [v[v.length - 1]];
        } else {
            value = value.slice(0);
            value[1] = v[v.length - 1]; 
        }
        value.sort();
        this.set('value', value);
    }
}

export {Datepicker};
