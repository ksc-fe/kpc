import Intact from 'intact';
import Datepicker from '../datepicker';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {range, strPad} from '../utils';
import {getDateString} from '../datepicker/utils';
import dayjs from 'dayjs';

const PREFIX = getDateString(new Date()) + ' ';
const YEAR_FORMAT = 'YYYY-MM-DD ';
const TIME_FORMAT = 'HH:mm:ss';

export default class Timepicker extends Datepicker {
    @Intact.template()
    static template = template;

    static propTypes = {
        ...Datepicker.propTypes,
        step: String,
    }

    defaults() {
        return {
            ...super.defaults(),
            min: undefined,
            max: undefined,
            step: undefined,

            _options: undefined,
        }
    }

    _init() {
        super._init();

        ['min', 'max'].forEach(item => {
            this.on(`$receive:${item}`, (c, v) => {
                if (v) {
                    v = this._createDate(v);
                }
                this.set(`${item}Date`, v, {silent: true});
            });
        });
        const keys = ['step', 'min', 'max'];
        this.on('$receive', (c, receivedKeys) => {
            if (keys.find(key => receivedKeys.indexOf(key) > -1)) {
                this._options();
            }
        });
    }

    _createDate(value, useDefaultFormat) {
        if (typeof value !== 'string') return value;
        return dayjs(PREFIX + value, YEAR_FORMAT + (useDefaultFormat ? TIME_FORMAT : this._getValueFormat()));
    }

    _createDateByShowFormat(value) {
        return dayjs(PREFIX + value, YEAR_FORMAT + this._getShowFormat());
    }

    _getValueFormat() {
        const {format, valueFormat} = this.get();
        return valueFormat || format || TIME_FORMAT;
    }

    _getShowFormat() {
        const {format, showFormat} = this.get();
        return showFormat || format || TIME_FORMAT;
    }

    _options() {
        const {step, minDate, maxDate} = this.get();
        const ret = [];

        if (step) {
            const maxValue = maxDate || this._createDate('23:59:59', true);
            const stepValue = this._parseTime(step);
            let value = minDate || this._createDate('00:00:00', true);

            for (; ; value = value.add(stepValue, 'second')) {
                if (value <= maxValue) {
                    ret.push({
                        value: value.format(this._getValueFormat()),
                        label: value.format(this._getShowFormat()),
                    });
                    if (+value === +maxValue) break;
                } else if (ret.length) {
                    // if the last value is less than maxValue
                    // add the maxValue as the last one
                    ret.push({
                        value: maxValue.format(this._getValueFormat()),
                        label: maxValue.format(this._getShowFormat()),
                    });
                    break;
                } else {
                    break;
                }
            }

            this.set('_options', ret);
        }
    }

    _parseTime(time) {
        const [hours, minutes, seconds] = time.split(':').map(item => {
            return parseInt(item, 10);
        });

        return (hours * 60 + (minutes || 0)) * 60 + (seconds || 0);
    }

    _onChangeValue(c, v) {
        if (!this.get('_isShow')) return;
        this.set('_value', v);
    }

    onClear(e) {
        e.stopPropagation();
        this.set('_value', undefined);
    }

    _confirm() {
        if (this.get('multiple')) {
            this.refs.begin.initState();
            const _value = this.get('_value').slice(0);
            _value.push(dayjs(this._createDate('00:00:00', true)));
            this.set('_value', _value);
        } else {
            super._confirm();
        }
    }
}

export {Timepicker};
