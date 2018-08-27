import Intact from 'intact';
import template from './calendar.vdt';
import {strPad, range} from '../utils';
import {getNowDate, getDateString} from './utils';

export default class Calendar extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        multiple: Boolean, 
        disabledDate: Function,
        type: String,
        hours: Array,
        minutes: Array,
        seconds: Array,
        disabledHours: Boolean,
        disabledMinutes: Boolean,
        disabledSeconds: Boolean,
        dayClassNames: Function,
        onMouseEnterDay: Function,
        autoChangeToTimePicker: Boolean,
    };

    defaults() {
        return {
            value: undefined,
            maxDate: undefined,
            minDate: undefined,
            disabledDate(date) { return false; },
            multiple: false,
            type: 'date',
            hours: range(0, 23),
            minutes: range(0, 59),
            seconds: range(0, 59),
            disabledHours: false,
            disabledMinutes: false,
            disabledSeconds: false,
            dayClassNames: undefined,
            onMouseEnterDay: undefined,
            autoChangeToTimePicker: true,

            _showDate: undefined,
            _now: getNowDate(),
            _isShowYearPicker: false,
            _isSelectTime: false,
            _focusDate: undefined,
        }
    }

    _init() {
        const {value, multiple} = this.get();
        this._index = multiple && value && value.length - 1 || 0;
    }

    select(v, e) {
        const value = getDateString(v, this.get('type'));
        const type = this.get('type');
        const autoChangeToTimePicker = this.get('autoChangeToTimePicker');

        // when we set _isSelectTime to true, the dom has
        // been replaced with time selecter, so we set the
        // _dropdown to true to tell TooltipContent that
        // we click on drodown and don't hide it
        e && (e._rawEvent._dropdown = true);

        if (!this.get('multiple')) {
            this.set('value', value, {async: true});
            if (type !== 'datetime') {
                this.trigger('hide');
            } else if (autoChangeToTimePicker) {
                this.set('_isSelectTime', true, {async: true});
            }
        } else {
            let values = this.get('value');
            if (!Array.isArray(values)) {
                values = [];
            } else {
                values = values.slice(0);
            }
            if (type !== 'datetime') {
                const index = values.indexOf(value);
                if (~index) {
                    values.splice(index, 1);
                } else {
                    values.push(value);
                }
            } else {
                values.push(value);
                if (autoChangeToTimePicker) {
                    this.set('_isSelectTime', true, {async: true});
                }
            }
            this._index = values.length - 1;
            this.set('value', values, {async: true});
        }

        this.set('_showDate', v, {async: true});
    }

    prevMonth() {
        this.setRelativeMonth(-1);
    }

    nextMonth(e) {
        e.preventDefault();
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
        const showDate = new Date(_showDate || values[this._index] || _now);
        // set showDate's date to 1, for the days of month is not equal
        // it will lead to change month incorrectly, #62
        showDate.setDate(1)
        return showDate;
    }

    setShowDate(date) {
        this.set('_showDate', date);
    }

    showYearPicker() {
        this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
    }

    onChangeTime(type, c, v) {
        this.isSelectTime = true;

        const {value, _now, multiple} = this.get();
        const originalValue = multiple ? (value && value[this._index]) : value;

        let valueDate = new Date(originalValue || _now);
        valueDate['set' + type](v);
        valueDate = getDateString(valueDate, this.get('type'));

        if (!multiple) {
            this.set('value', valueDate);
        } else {
            let _value;
            if (value) {
                _value = value.slice(0);
                _value[this._index] = valueDate;
            } else {
                _value = [valueDate];
            }

            this.set('value', _value);
        }

        this.isSelectTime = false;
    }

    confirm() {
        this.refs.calendar.hide();
    }

    cancel(e) {
        e._rawEvent._dropdown = true;
        this.set('_isSelectTime', false, {async: true});
        this.showYearPicker();
    }

    focusAndSelect(e) {
        // this.element.focus();
        this._onKeydown(e);
    }

    _onMouseEnter(date, isOut, e) {
        const onMouseEnterDay = this.get('onMouseEnterDay');

        this.set('_focusDate', date);

        if (onMouseEnterDay) {
            onMouseEnterDay.call(this, date, isOut, e);
        }
    }

    _onMouseLeaveDays() {
        this.set('_focusDate', null);
    }

    _onKeydown(e) {
        switch (e.keyCode) {
            case 38: // up
                this._focusByOffset(e, -7);
                break;
            case 40: // down
                this._focusByOffset(e, 7);
                break;
            case 37: // left
                this._focusByOffset(e, -1);
                break;
            case 39: // right
                this._focusByOffset(e, 1);
                break;
            case 13:
                this._selectFocusDate();
                break;
        }
    }

    _focusByOffset(e, offset) {
        e.preventDefault();

        let {_focusDate, value, _showDate} = this.get();

        let isSet = true;
        if (!_focusDate) {
            _focusDate = this.getShowDate();
            if (!value) isSet = false;
        } else {
            if (_showDate) {
                const _y1 = _focusDate.getFullYear();
                const _m1 = _focusDate.getMonth();
                const _y2 = _showDate.getFullYear();
                const _m2 = _showDate.getMonth();
                if (_y1 !== _y2 || _m1 !== _m2) {
                    _focusDate = new Date(_showDate);
                    _focusDate.setDate(1);
                    isSet = false;
                }
            }
        }
        if (isSet) {
            _focusDate.setDate(_focusDate.getDate() + offset);
        }

        this.set({
            '_focusDate': _focusDate,
            '_showDate': _focusDate,
        }, {silent: true});
        this.update();
    }

    _selectFocusDate() {
        const {_focusDate, _isSelectTime} = this.get();
        if (_focusDate && !_isSelectTime) {
            this.trigger('enter:select', this);
            this.select(new Date(_focusDate));
        }
    }

    _onChangeTab(c, v) {
        this.set('_isSelectTime', v === 'time', {async: true});
    }
}

