import Intact from 'intact';
import Calendar from '../datepicker/calendar';
import template from './panel.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {getDateString, createDate, getTimeString} from '../datepicker/utils';

export const PREFIX = getDateString(new Date()) + ' ';

export default class TimePanel extends Calendar {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),

            _isSelectTime: true,
            _id: undefined,
            _prefix: PREFIX.trim(),
        };
    }

    _init() {
        this.isSelectTime = true;

        this.initIndex();

        this.on('$receive:value', this.initIndex);
        this.on('$receive:multiple', this.initIndex);
        this.on('$receive:min', (c, v) => {
            if (v) {
                this.set('minDate', PREFIX + v);
            }
        });
        this.on('$receive:max', (c, v) => {
            if (v) {
                this.set('maxDate', PREFIX + v);
            }
        });
    }

    initState() {
        this.initIndex();
        this.set('_isSelectTime', true);
    }

    initIndex(c) {
        const {value, multiple, _index} = this.get();
        if (_index === undefined) {
            // if multiple, add one value showed every time
            // if `c` does no exits it indicate this call is from initState
            this._index = multiple && value && value.length - (c ? 1 : 0) || 0;
        } else {
            this._index = _index;
        }
    }

    _format(date) {
        return getDateString(date, 'datetime');
    }

    changeTimeByStep(c, v) {
        // the function is only called in range step,
        // so detecting multiple is unnecessary
        this.isSelectTime = true;

        const {value, _now} = this.get();
        const originalValue = value && value[this._index];

        let valueDate = createDate(originalValue || _now);

        // does not trigger change again
        // otherwise it can not be cleared
        if (getTimeString(valueDate) === v[0]) return;

        valueDate = getDateString(valueDate, 'date') + ' ' + v[0];

        // if (!multiple) {
            // this.set('value', valueDate);
        // } else {
            let _value;
            if (value) {
                _value = value.slice(0);
                _value[this._index] = valueDate;
            } else {
                _value = [valueDate];
            }

            this.set('value', _value);
        // }

        // this.isSelectTime = false;
    }

    onChangeTime(...args) {
        super.onChangeTime(...args);
        // always set this flag to true
        this.isSelectTime = true;
    }
}
