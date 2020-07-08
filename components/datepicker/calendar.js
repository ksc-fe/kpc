import Intact from 'intact'; import template from './calendar.vdt';
import {strPad, range, toggleArray} from '../utils';
import {
    getNowDate, getDateString, getTimeString,
    isEqual, createDate, isGT, isLT
} from './utils';
import dayjs from 'dayjs';

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
        range: Boolean,
    };

    defaults() {
        return {
            value: undefined,
            maxDate: undefined,
            minDate: undefined,
            disabledDate: undefined,
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
            range: false,

            _showDate: undefined,
            _now: getNowDate(),
            _isShowYearPicker: false,
            _isSelectTime: false,
            _focusDate: undefined,
            _index: undefined,
        }
    }

    _init() {
        this.initIndex();

        this.on('$receive:type', this.initPickerType);

        this.on('$receive:value', this.initIndex);
        this.on('$receive:multiple', this.initIndex);

        this.on('$receive:value', (c, v) => {
            if (!v && this.get('_showDate')) return;
            this.initShowDate(true);
        });

        this.on('$change:_showDate', (c, v) => {
            // if is select year or month, set the _showDate to value
            if (this._isYearOrMonth()) {
                this.set('value', v);
            }
        });
    }

    initState() {
        this.initIndex();
        this.initPickerType();
        this.initShowDate(false);
        this.set('_isSelectTime', false);
    }

    initIndex() {
        const {value, multiple, _index} = this.get();
        if (_index === undefined) {
            this._index = multiple && value && value.length - 1 || 0;
        } else {
            this._index = _index;
        }
    }

    initPickerType() {
        this.set('_isShowYearPicker', this._isYearOrMonth());
    }

    initShowDate(silent) {
        const {value} = this._getRealValue();
        const type = this.get('type');
        if (type === 'year' || type === 'month') {
            const showDate = value || dayjs();
            this.set('_showDate', showDate, {silent});
        }
    }

    _getRealValue() {
        const {value, multiple} = this.get();
        const values = value ? multiple ? value : [value] : [];
        return {values, value: values[this._index]};
    }

    _isYearOrMonth() {
        const type = this.get('type');
        return type === 'year' || type === 'month';
    }

    select(value, e) {
        // const value = getDateString(v, this.get('type'));
        const type = this.get('type');
        const autoChangeToTimePicker = this.get('autoChangeToTimePicker');
        const _index = this.get('_index');

        // when we set _isSelectTime to true, the dom has
        // been replaced with time selecter, so we set the
        // _dropdown to true to tell TooltipContent that
        // we click on drodown and don't hide it
        e && (e._rawEvent._dropdown = true);

        // the datetime must be greater than minDate, #406
        const minDate = this._getMinDate();
        if (type === 'datetime' && minDate && value.isBefore(minDate)) {
            value = minDate.clone();
        }

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
                if (this.get('range')) {
                    // support begin date is equal to end date for range, #390
                    values.push(value);
                } else {
                    const index = values.findIndex(v => isEqual(v, value));
                    if (~index) {
                        values.splice(index, 1);
                    } else {
                        values.push(value);
                    }
                }
            } else {
                values.push(value);
                if (autoChangeToTimePicker) {
                    this.set('_isSelectTime', true, {async: true});
                }
            }
            if (_index === undefined) {
                this._index = values.length - 1;
            }
            this.set('value', values, {async: true});
        }

        this.set('_showDate', value, {async: true});
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
        this.set('_showDate', date.add(month, 'month'));
    }

    setRelativeYear(year) {
        const date = this.getShowDate();
        this.set('_showDate', date.add(year, 'year'));
    }

    setMonth(month) {
        const date = this.getShowDate();
        this.set('_showDate', date.month(month));
    }

    setYear(year) {
        const date = this.getShowDate();
        this.set('_showDate', date.year(year));
    }

    onChangeYear(c, value) {
        this.setYear(value);
    }

    onChangeMonth(c, value) {
        this.setMonth(value);
    }

    getShowDate() {
        const {_showDate, value, _now, multiple} = this.get();
        const values = value ? multiple ? value : [value] : [];
        const showDate = _showDate || values[this._index] || _now;
        // set showDate's date to 1, because the days of month is not equal
        // it will lead to change month incorrectly, #62
        return showDate.date(1);
    }

    setShowDate(date) {
        this.set('_showDate', date);
    }

    showYearPicker() {
        this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
    }

    onChangeTime(c, v) {
        this.isSelectTime = true;

        const {value, _now, multiple} = this.get();
        const originalValue = multiple ? (value && value[this._index]) : value;

        let valueDate = originalValue || _now;
        valueDate = valueDate.hour(+v[0]).minute(+v[1]).second(+v[2]);

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

    // _format(date) {
        // return getDateString(date, this.get('type'));
    // }

    // confirm() {
        // this.refs.calendar.hide();
    // }

    // cancel(e) {
        // e._rawEvent._dropdown = true;
        // this.set('_isSelectTime', false, {async: true});
        // this.showYearPicker();
    // }

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
        // do nothing if it is time selection
        if (this._get(_isSelectTime)) return;

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
            if (!value || Array.isArray(value)) {
                isSet = false;
            } else if (!Array.isArray(value)) {
                _focusDate = value;
            }
        } else {
            if (_showDate) {
                if (!_focusDate.isSame(_showDate, 'month')) {
                    _focusDate = _showDate.date(1);
                    isSet = false;
                }
            }
        }
        if (isSet) {
            _focusDate = _focusDate.add(offset, 'day');
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
            this.select(_focusDate);
        }
    }

    _onChangeTab(c, v) {
        this.set('_isSelectTime', v === 'time', {async: true});
    }

    _getMinDate() {
        const {minDate, value, _id} = this.get();

        if (_id === '1') {
            let date;
            if (value && value[0]) {
                date = value[0];
            }
            if (date && minDate) {
                return date.isAfter(minDate) ? date : minDate;
            } else {
                return date || minDate;
            }
        } else if (minDate) {
            return minDate;
        }
    }

    _getMaxDate() {
        const {maxDate, value, _id} = this.get();

        if (_id === '0') {
            let date;
            if (value && value[1]) {
                date = value[1];
            }
            if (date && maxDate) {
                return date.isAfter(maxDate) ? maxDate : date;
            } else {
                return date || maxDate;
            }
        } else if (maxDate) {
            return maxDate;
        }
    }

    _isDisabledDate(date) {
        const {maxDate, minDate, disabledDate, type} = this.get();
        return maxDate && isGT(date, maxDate) ||
            minDate && isLT(date, minDate) ||
            disabledDate && disabledDate.call(
                this,
                getDateString(date.toDate(), type), // for compatibility
                date.clone()
            );
    }

    _isDisabledTime(date) {
        const min = this._getMinDate();
        const max = this._getMaxDate();

        return min && date.isBefore(min) || max && date.isAfter(max);
    }

    _onWheel(e) {
        this.trigger('wheel', e);
    }

    /**
     * @brief clear the state when hide
     */
    // clear() {
        // this.set({
            // '_showDate': undefined,
        // }, {silent: true});
    // }
}

