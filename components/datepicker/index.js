import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Calendar from './calendar';
import {getNowDate, isLT, isGT, getDateString, dispatchEvent, createDate} from './utils';
import {getTransition} from '../utils';
import * as shortcuts from './shortcuts';

const {isEqual} = Intact.utils;

export default class Datepicker extends Intact {
    @Intact.template()
    static template = template;

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

            _value: undefined, // for range
            _rangeEndDate: undefined,
            _isShow: false,
        }
    }

    _init() {
        // proxy _value to value
        this.on('$change:_value', (c, v) => {
            // if only select one date for range, set with undefined
            if (v && v.length === 1) {
                v = undefined;
            }
            this.set('value', v);
        });

        this.on('$receive:value', (c, v) => {
            this.set('_value', v);
        });
    }

    onClear(e) {
        e.stopPropagation();
        if (this.get('range')) {
            this.set('_value', undefined);
        } else {
            this.set('value', undefined);
        }
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
        this.set('_isShow', v);
        this._hasSelectByArrowKey = false;
    }

    _onChangeShowDate(type, c, v) {
        const begin = this.refs.begin;
        const end = this.refs.end;
        if (type === 'begin') {
            const endShowDate = end.getShowDate();
            endShowDate.setDate(1);
            if (v >= endShowDate) {
                const endShowDate = createDate(v);
                endShowDate.setMonth(endShowDate.getMonth() + 1);
                end.setShowDate(endShowDate);
            }
        } else {
            const beginShowDate = begin.getShowDate();
            v.setDate(1);
            if (v <= beginShowDate) {
                const beginShowDate = createDate(v);
                beginShowDate.setMonth(beginShowDate.getMonth() - 1);
                begin.setShowDate(beginShowDate);
            }
        }
    }

    _setBeginShowDate(c) {
        const [start] = this.get('_value') || [];
        const date = start ? createDate(start) : getNowDate();
        c.set('_showDate', date, {silent: true})
    }

    _setEndShowDate(c) {
        let [start, end] = this.get('_value') || [];

        let date;
        // if in the same month, show next month
        if (start && end) {
            start = createDate(start);
            end = createDate(end);
            if (start.getFullYear() === end.getFullYear() &&
                start.getMonth() === end.getMonth()
            ) {
                end.setMonth(end.getMonth() + 1);
            }
            date = end;
        } else {
            date = getNowDate();
            date.setMonth(date.getMonth() + 1);
        }

        c.set('_showDate', date, {silent: true})
    }

    _checkDateInRange(date, isOut) {
        const [start, end] = this.get('_value') || [];
        const _rangeEndDate = this.get('_rangeEndDate');

        if (start) {
            const _start = createDate(start);
            if (end) {
                return {
                    'k-in-range': !isOut && 
                        isGT(date, _start) && 
                        isLT(date, createDate(end))
                };
            } else if (_rangeEndDate) {
                return {
                    'k-in-range': !isOut &&
                        isGT(date, _start >= _rangeEndDate ? _rangeEndDate : _start) &&
                        isLT(date, _start <= _rangeEndDate ? _rangeEndDate : _start)
                };
            }
        }
    }

    _onChangeValueForRange(type, c, v) {
        let value = this.get('_value');

        if (isEqual(v, value)) return;

        const {begin, end} = this.refs;
        // if cancel all selected value of range, the length of v is 0
        const length = v.length;
        if (v && length) {
            if (length === 2) {
                // select the first begin/end date
                value = v.slice(0);
            } else {
                // select or re-select
                const last = v[v.length - 1];
                value = [last];
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
            value.sort();
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
            this.set('_value', value.map(value => getDateString(value, type)));
        } else {
            this.set('value', getDateString(value, type));
        }
        this.refs.calendar.hide();
    }

    _format() {
        const {value, range} = this.get();
        return Array.isArray(value) ? range ? value.join(' ~ ') : value.join(', ') : value;
    }
}

Object.assign(Datepicker, shortcuts);

export {Datepicker};
