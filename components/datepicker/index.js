import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import {strPad} from '../utils';

export default class Datepicker extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        clearable: Boolean,
        disabled: Boolean,
        multiple: Boolean,
    };

    defaults() {
        return {
            value: undefined, 
            clearable: false,
            maxDate: undefined,
            minDate: undefined,
            placeholder: "请选择日期",
            disabled: false,
            disabledDate(date) { return false; },
            multiple: false,
            size: 'default',
            type: 'date', // date | datetime

            _showDate: undefined,
            _now: new Date(),
            _isShowYearPicker: false,
            _isSelectTime: false,
        }
    }

    select(value, e) {
        value = this.getDateString(value);
        const type = this.get('type');
        if (!this.get('multiple')) {
            this.set('value', value);
            if (type !== 'datetime') {
                this.refs.calendar.hide();
            } else {
                e._rawEvent._dropdown = true;
                this.set('_isSelectTime', true);
            }
        } else {
            let values = this.get('value');
            if (!Array.isArray(values)) {
                values = [];
            } else {
                values = values.slice(0);
            }
            const index = values.indexOf(value);
            if (~index) {
                values.splice(index, 1);
            } else {
                values.push(value);
            }
            this.set('value', values);
        }
    }

    getDateString(date) {
        const _date = [
            date.getFullYear(),
            strPad(date.getMonth() + 1, 2),
            strPad(date.getDate(), 2)
        ].join('-');
        if (this.get('type') !== 'datetime') {
            return _date;
        }
        const _time = [
            strPad(date.getHours(), 2),
            strPad(date.getMinutes(), 2),
            strPad(date.getSeconds(), 2)
        ].join(':');
        return `${_date} ${_time}`;
    }

    isEqual(a, b) {
        if (a && b) {
            return a.getFullYear() === b.getFullYear() &&
                a.getMonth() === b.getMonth() &&
                a.getDate() === b.getDate()
        }
        return false;
    }

    isLT(a, b) {
        if (a && b) {
            const aYear = a.getFullYear();
            const bYear = b.getFullYear();
            if (aYear < bYear) {
                return true;
            } else if (aYear > bYear) {
                return false;
            }

            const aMonth = a.getMonth();
            const bMonth = b.getMonth();
            if (aMonth < bMonth) {
                return true;
            } else if (aMonth > bMonth) {
                return false;
            }

            const aDay = a.getDate();
            const bDay = b.getDate();
            if (aDay < bDay) {
                return true;
            } else if (aDay > bDay) {
                return false;
            }
        }

        return false;
    }

    isGT(a, b) {
        return this.isLT(b, a);        
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
        const date = this.getShowDate();
        date.setMonth(date.getMonth() + month);
        this.set('_showDate', date);
    }

    setRelativeYear(year) {
        const date = this.getShowDate();
        date.setFullYear(date.getFullYear() + year);
        this.set('_showDate', date);
    }

    setMonth(month) {
        const date = this.getShowDate();
        date.setMonth(month);
        this.set('_showDate', date);
    }

    setYear(year) {
        const date = this.getShowDate();
        date.setFullYear(year);
        this.set('_showDate', date);
    }

    onChangeYear(c, value) {
        this.setYear(value);
    }

    onChangeMonth(c, value) {
        this.setMonth(value);
    }

    getShowDate() {
        const {_showDate, value, _now, multiple} = this.get();
        const values = multiple ? value || [] : [value];
        return new Date(_showDate || values[values.length - 1] || _now);
    }

    onHide() {
        this.set({
            '_showDate': undefined,
            '_isShowYearPicker': false,
            '_isSelectTime': false,
        });
    }

    onBeforeShow() {
        this.set('_now', new Date());
    }

    showYearPicker() {
        this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
    }

    onChangeTime(type, c, v) {
        const {value, _now} = this.get();
        const valueDate = new Date(value || _now);
        valueDate['set' + type](v);
        this.set('value', this.getDateString(valueDate));
    }

    confirm() {
        this.refs.calendar.hide();
    }

    cancel(e) {
        e._rawEvent._dropdown = true;
        this.set('_isSelectTime', false);
    }
}
