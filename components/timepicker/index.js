import Intact from 'intact'; import Datepicker from '../datepicker';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {range, strPad} from '../utils';
import {getTimeString} from '../datepicker/utils';

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
            if (this.get('_isShow')) return;

            if (this.get('range')) {
                // if only select one date for range, set with undefined
                if (v && v.length === 1) {
                    v = undefined;
                }
            }
            if (Array.isArray(v)) {
                v = v.map(item => getTimeString(new Date(item)));
            } else if (v) {
                v = getTimeString(new Date(v));
            }
            this.set('value', v);
        });

        // give the time string a date, let it can be converted to Date
        const prefix = `2018-08-28 `;
        this.on('$receive:value', (c, v) => {
            if (v && v.length) {
                v = v.map(item => prefix + item);
            } else if (v) {
                v = prefix + v;
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
}

export {Timepicker};
