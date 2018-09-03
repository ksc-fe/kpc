import Intact from 'intact';
import Calendar from '../datepicker/calendar';
import template from './panel.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {getDateString} from '../datepicker/utils';

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

        const {value, multiple, _index} = this.get();
        if (_index === undefined) {
            // if multiple, add one value showed every time
            this._index = multiple && value && value.length || 0;
        } else {
            this._index = _index;
        }
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

    _format(date) {
        return getDateString(date, 'datetime');
    }

    changeTimeByStep(c, v) {
        this.isSelectTime = true;

        const {value, _now, multiple} = this.get();
        const originalValue = multiple ? (value && value[this._index]) : value;

        let valueDate = new Date(originalValue || _now);
        valueDate = getDateString(valueDate, 'date') + ' ' + v[0];

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

    onChangeTime(...args) {
        super.onChangeTime(...args);
        // always set this flag to true
        this.isSelectTime = true;
    }
}
