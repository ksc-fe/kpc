import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Calendar from './calendar';
import {
    getNowDate, isLT, isGT, getDateString,
    dispatchEvent, createDate, FORMATS
} from './utils';
import {getTransition} from '../utils';
import * as shortcuts from './shortcuts';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const typeMap = {0: 'begin', 1: 'end'};

export default class Datepicker extends Intact {
    @Intact.template()
    static template = template;

    static getDateString = getDateString;

    static createDate = createDate;

    static propTypes = {
        value: [String, Array, Date, Number],
        clearable: Boolean,
        disabled: Boolean,
        size: ['large', 'default', 'small', 'mini'],
        type: ['date', 'datetime', 'year', 'month'],
        range: Boolean,
        transition: String,
        shortcuts: Array,
        container: [Function, String],
        disabledHours: Boolean,
        disabledMinutes: Boolean,
        disabledSeconds: Boolean,
        multiple: Boolean,
        format: String,
        valueFormat: String,
        showFormat: String,
        minDate: [String, Date],
        maxDate: [String, Date],
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
            transition: 'c-slidedown',
            shortcuts: undefined,
            container: undefined,
            disabledHours: false,
            disabledMinutes: false,
            disabledSeconds: false,
            multiple: false,
            format: undefined,
            valueFormat: undefined,
            showFormat: undefined,

            _value: undefined, // for range
            _rangeEndDate: undefined,
            _isShow: false,
        }
    }

    _init() {
        // proxy _value to value
        this.on('$change:_value', (c, v) => {
            if (Array.isArray(v)) {
                // if only select one date for range, do not change value, #259
                if (v.length === 1 && this.get('range')) {
                    // trigger select start event for use to custom min/max date, #371
                    this.trigger('selectStart', this._dateToString(v[0]));
                    return;
                }
                v = v.map(v => this._dateToString(v));
            } else if (v) {
                v = this._dateToString(v);
            }
            this.set('value', v);
        });

        this.on('$receive:value', (c, v) => {
            // conver to dayjs instance
            let hasValue = true;
            if (Array.isArray(v)) {
                if (!v.length) hasValue = false;
                v = v.map(v => {
                    if (!v) hasValue = false;
                    return this._createDate(v)
                });
            } else if (v) {
                v = this._createDate(v);
            } else {
                hasValue = false;
            }
            // we should set to the date panel, otherwise it will change the value
            // and set datetime to now, #436
            if (!hasValue) {
                const {begin, end} = this.refs;
                begin && begin.set('_isSelectTime', false);
                end && end.set('_isSelectTime', false);
            }

            this.set('_value', v);
        });
    }

    _createDate(value) {
        return dayjs(value, typeof value === 'string' ? this._getValueFormat() : undefined);
    }

    _createDateByShowFormat(value) {
        return dayjs(value, this._getShowFormat());
    }

    _dateToString(value) {
        return value.format(this._getValueFormat());
    }

    _getValueFormat() {
        const {format, valueFormat, type} = this.get();
        return valueFormat || format || FORMATS[type];
    }

    _getShowFormat() {
        const {format, showFormat, type} = this.get();
        return showFormat || format || FORMATS[type];
    }

    onClear(e) {
        e.stopPropagation();
        // we should reset the flag to let user re-select date
        // and it also destroys Time panel and avoids it triggering change event, #419
        const {begin, end} = this.refs;
        begin.set('_isSelectTime', false);
        end && end.set('_isSelectTime', false);
        this.set('_value', undefined);
    }

    _hide() {
        if (this.get('range')) return;

        this.refs.calendar.hide();
    }

    _onShow(c) {
        const feedback = c.get('_feedback');
        this.set('transition', getTransition(feedback));
    }

    _onChangeShow(c, v) {
        if (v) {
            const {begin, end} = this.refs;
            begin && begin.initState();
            end && end.initState();
        }
        this.set('_isShow', v);
        this._hasSelectByArrowKey = false;
    }

    _onChangeShowDate(c, v) {
        const type = typeMap[c.get('_id')];
        const begin = this.refs.begin;
        const end = this.refs.end;
        if (type === 'begin') {
            const endShowDate = end.getShowDate().date(1);
            if (v >= endShowDate) {
                const endShowDate = v.add(1, 'month');
                end.setShowDate(endShowDate);
            }
        } else {
            const beginShowDate = begin.getShowDate().date(1);
            if (v <= beginShowDate) {
                const beginShowDate = v.subtract(1, 'momth');
                begin.setShowDate(beginShowDate);
            }
        }
    }

    _setBeginShowDate(c) {
        const [start] = this.get('_value') || [];
        const date = start || getNowDate();
        c.set('_showDate', date);
    }

    _setEndShowDate(c) {
        let [start, end] = this.get('_value') || [];

        let date;
        // if in the same month, show next month
        if (start && end) {
            if (start.isSame(end, 'month')) {
                end = end.add(1, 'month');
            }
            date = end;
        } else {
            date = getNowDate().add(1, 'month');
        }

        c.set('_showDate', date);
    }

    _checkDateInRange(date, isOut) {
        const [start, end] = this.get('_value') || [];
        const _rangeEndDate = this.get('_rangeEndDate');

        if (start) {
            if (end) {
                return {
                    'k-in-range': !isOut &&
                        isGT(date, start) &&
                        isLT(date, end)
                };
            } else if (_rangeEndDate) {
                return {
                    'k-in-range': !isOut &&
                        isGT(date, start >= _rangeEndDate ? _rangeEndDate : start) &&
                        isLT(date, start <= _rangeEndDate ? _rangeEndDate : start)
                };
            }
        }
    }

    _onChangeValueForRange(c, v) {
        const type = typeMap[c.get('_id')];
        let value = this.get('_value');

        if (v && value && v.length === value.length &&
            v.every((v, index) => v.isSame([value.index])) ||
            v === value
        ) return;

        const {begin, end} = this.refs;
        // if cancel all selected value of range, the length of v is 0
        if (v && v.length) {
            const length = v.length;
            if (length === 2) {
                // select the first begin/end date
                value = v.slice(0);
            } else {
                // select or re-select
                const last = v[length - 1];
                // if we select the end time firstly
                // we should set the begin time automatically
                if (c.isSelectTime && type === 'end') {
                    value = [begin.getShowDate(), last];
                } else {
                    value = [last];
                }
            }
        } else {
            this.set('value', undefined);
        }

        // when the ScrollSelect changed, the refs may not exist
        if (begin && end) {
            // if we have selected two dates, change to time picker
            if (value.length === 2) {
                if (this.get('type') === 'datetime') {
                    begin.set('_isSelectTime', true, {async: true});
                    end.set('_isSelectTime', true, {async: true});
                } else if (!c.isSelectTime) {
                    this.refs.calendar.hide();
                }
            } else if (!c.isSelectTime) {
                begin.set('_isSelectTime', false, {async: true});
                end.set('_isSelectTime', false, {async: true});
            }
        }

        if (!c.isSelectTime) {
            value.sort((a, b) => a > b ? 1 : -1);
        }

        this.set('_value', value);
    }

    _highlightRangeDays(date, isOut) {
        const [start, end] = this.get('_value') || [];
        if (start && !end) {
            this.set('_rangeEndDate', date);
        } else {
            this.set('_rangeEndDate', undefined);
        }
    }

    _clearRangeEndDate() {
        this.set('_rangeEndDate', undefined);
    }

    _onKeydown(e) {
        switch (e.keyCode) {
            case 13:
                e.preventDefault();
                if (!this._hasSelectByArrowKey) {
                    this.refs.input.element.click();
                } else {
                    this.refs.begin._selectFocusDate();
                }
                break;
            case 9:
                this.refs.calendar.hide();
                break;
            case 38:
            case 40:
            case 37:
            case 39:
                if (this.get('_isShow')) {
                    this._hasSelectByArrowKey = true;
                    this.refs.begin._onKeydown(e);
                }
                break;
        }
    }

    _focus() {
        this.refs.input.focus();
    }

    /**
     * don't trigger focusout event when datepicker layer is showing
     * trigger focusout when it hidden to make FormItem to validate it
     * #46
     */
    onInputFocusOut(e) {
        if (this.get('_isShow')) {
            e.stopPropagation();
        }
    }

    _onHide() {
        dispatchEvent(this.refs.input.refs.input, 'focusout');
    }

    _setValue(value) {
        const type = this.get('type');
        if (this.get('range')) {
            this.set('_value', value.map(value => dayjs(value)));
        } else {
            this.set('_value', dayjs(value));
        }
        this.refs.calendar.hide();
    }

    _format() {
        let {_value, range} = this.get();
        if (Array.isArray(_value)) {
            // do not show if has not selected
            if (range && _value.length !== 2) return;
            _value = _value.map(v => v.format(this._getShowFormat()));
        } else if (_value) {
            _value = _value.format(this._getShowFormat());
        }
        return Array.isArray(_value) ? range ? _value.join(' ~ ') : _value.join(', ') : _value;
    }

    _confirm() {
        this.refs.calendar.hide();
    }

    _onInput(e) {
        const value = e.target.value.trim();
        const {multiple, range} = this.get();
        if (multiple) {
            this._setValueOnInputForArray(value.split(','));
        } else if (range) {
            if (this._setValueOnInputForArray(value.split('~'))) {
                this._setBeginShowDate(this.refs.begin);
                this._setEndShowDate(this.refs.end);
            }
        } else {
            if (!value) {
                this.set('_value', '');
                return;
            }
            const date = this._createDateByShowFormat(value);
            if (!this._isInvalidDate(date)) {
                this.set('_value', date);
            }
        }
    }

    _setValueOnInputForArray(values) {
        const ret = [];
        let hasInvalid = false;
        values.find(value => {
            value = value.trim();
            if (!value) return;
            const date = this._createDateByShowFormat(value);
            if (this._isInvalidDate(date)) {
                return hasInvalid = true;
            }
            ret.push(date);
        });

        if (!hasInvalid) {
            this.set('_value', ret);
            return true;
        }

        return false;
    }

    _isInvalidDate(date) {
        return !date.isValid() ||
            this.refs.begin._isDisabledDate(date) ||
            this.refs.begin._isDisabledTime(date);
    }

    _forceUpdate() {
        this.update();
    }

    _onWheel() {
        this.refs.input.blur();
    }
}

Object.assign(Datepicker, shortcuts);

export {Datepicker};
