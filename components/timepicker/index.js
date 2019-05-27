import Intact from 'intact'; import Datepicker from '../datepicker';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {range, strPad} from '../utils';
import {getTimeString, createDate} from '../datepicker/utils';
import {PREFIX} from './panel';

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
        // proxy _value to value
        this.on('$change:_value', (c, v) => {
            if (this.get('range')) {
                // if only select one date for range, do not set it, #259
                if (Array.isArray(v) && v.length === 1) {
                    return;
                }
            }
            if (Array.isArray(v)) {
                v = v.map(item => getTimeString(createDate(item)));
            } else if (v) {
                v = getTimeString(createDate(v));
            }
            this.set('value', v);
        });

        // add date to the time string, let it can be converted to Date
        this.on('$receive:value', (c, v) => {
            if (Array.isArray(v) && v.length) {
                v = v.map(item => PREFIX + item);
            } else if (v) {
                v = PREFIX + v;
            }
            this.set('_value', v);
        });

        ['step', 'min', 'max'].forEach(item => {
            this.on(`$receive:${item}`, this._options);
        });
    }

    _options() {
        const {step, min, max} = this.get();
        const ret = [];

        if (step) {
            const maxValue = this._parseTime(max || '23:59:59');
            const stepValue = this._parseTime(step);
            let value = this._parseTime(min || '00:00:00');

            for (; value <= maxValue; value += stepValue) {
                ret.push(this._stringifyTime(value));
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

    _stringifyTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - hours * 3600) / 60);
        const seconds = Math.floor(time - hours * 3600 - minutes * 60);

        return `${strPad(hours, 2)}:${strPad(minutes, 2)}:${strPad(seconds, 2)}`;
    }

    _onChangeValue(c, v) {
        if (!this.get('_isShow')) return;
        this.set('_value', v);
    }
}

export {Timepicker};
