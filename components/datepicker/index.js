import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import Calendar from './calendar';
import {getNowDate, isLT, isGT} from './utils';
import {getTransition} from '../utils';

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
            transition: 'slidedown',

            _value: undefined, // for range
            _rangeEndDate: undefined,
        }
    }

    _init() {
        this.set('_value', this.get('value'));

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
        const [start] = this.get('_value') || [];
        const date = start ? new Date(start) : getNowDate();
        c.set('_showDate', date, {silent: true})
    }

    _setEndShowDate(c) {
        let [start, end] = this.get('_value') || [];

        let date;
        // if in the same month, show next month
        if (start && end) {
            start = new Date(start);
            end = new Date(end);
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
            const _start = new Date(start);
            if (end) {
                return {
                    'k-in-range': !isOut && 
                        isGT(date, _start) && 
                        isLT(date, new Date(end))
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

        if (c.isSelectTime) {
            value = value.slice(0);
            if (type === 'begin' && end.get('_isSelectTime')) {
                value[0] = v[0];
                c._index = 0;
                end._index = 1;
            } else if (type === 'end' && begin.get('_isSelectTime')) {
                value[1] = v[1];
                c._index = 1;
                begin._index = 0;
            } else {
                value[c._index] = v[c._index];
            }
            if (value.length === 2) {
                if (value[1] < value[0]) {
                    // reverse the index
                    c._index = c._index === 0 ? 1 : 0;
                }
            }
            value.sort();
            this.set('_value', value);
        } else if (!v.length) {
            // calendar cancelled the selected value
            this.set('_value', undefined);
        } else if (!value || value.length === 0 || value.length === 2) {
            value = [v[v.length - 1]];
            if (type === 'end') {
                begin.set('_isSelectTime', false);
            } else {
                end.set('_isSelectTime', false);
            }
            c._index = 0;
            this.set('_value', value);
        } else {
            value = value.slice(0);
            value[1] = v[v.length - 1]; 
            // set time
            if (this.get('type') === 'datetime') {
                const [date] = value[1].split(' ');
                const [, time] = value[0].split(' ');
                value[1] = [date, time].join(' ');
            }
            if (value[1] < value[0]) {
                c._index = 0;
            } else {
                c._index = 1;
            }
            value.sort();
            this.set('_value', value);

            if (this.get('type') !== 'datetime') {
                this.refs.calendar.hide();
            }
        }
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
}

export {Datepicker};
