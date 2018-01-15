import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import {strPad} from '../utils';

export default class Datepicker extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: undefined, 
            clearable: false,

            _showDate: undefined,
            _now: new Date(),
        }
    }

    select(date) {
        date = [
            date.getFullYear(),
            strPad(date.getMonth() + 1, 2),
            strPad(date.getDate(), 2)
        ].join('-');

        this.set('value', date);
        this.refs.calendar.hide();
    }

    isEqual(a, b) {
        if (a && b) {
            return a.getFullYear() === b.getFullYear() &&
                a.getMonth() === b.getMonth() &&
                a.getDate() === b.getDate()
        }
        return false;
    }

    onClear(e) {
        e.stopPropagation();
        this.set('value', undefined);
    }

    prevMonth() {
        this.setRelativeMonth(-1);
    }

    nextMonth() {
        this.setRelativeMonth(1);
    }

    prevYear() {
        this.setRelativeYear(-1);
    }

    nextYear() {
        this.setRelativeYear(1);
    }

    setRelativeMonth(month) {
        const {_showDate, value, _now} = this.get();
        const date = new Date(_showDate || value || _now);
        date.setMonth(date.getMonth() + month);
        this.set('_showDate', date);
    }

    setRelativeYear(year) {
        const {_showDate, value, _now} = this.get();
        const date = new Date(_showDate || value || _now);
        date.setFullYear(date.getFullYear() + year);
        this.set('_showDate', date);
    }

    onHide() {
        this.set('_showDate', undefined);
    }

    onBeforeShow() {
        this.set('_now', new Date());
    }
}
