import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import {strPad} from '../utils';

export default class Datepicker extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: '', 
            clearable: false,
        }
    }

    _init() {
        const now = new Date();
        const date = now.getDate();
        const weekday = now.getDay();

        this.now = now;
        this.weekday = weekday; 
        this.startDate = new Date(date).setDate(-weekday);
        // this.endDate = this.startDate + 6 * 7; 
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
        this.set('value', '');
    }

    getYear() {
        const value = this.get('value');
        if (value) {
            return new Date(value).getFullYear();
        }
        return this.now.getFullYear();
    }

    getMonth() {
        const value = this.get('value');
        if (value) {
            return new Date(value).getMonth() + 1;
        }
        return this.now.getMonth() + 1;
    }
}
