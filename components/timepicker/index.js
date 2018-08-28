import Intact from 'intact';
import Datepicker from '../datepicker';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {range} from '../utils';
import {getTimeString} from '../datepicker/utils';

export default class Timepicker extends Datepicker {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),
        }
    }

    _init() {
        // proxy _value to value
        this.on('$change:_value', (c, v) => {
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

        // give the time string a date, let it can convert to Date
        const prefix = `2018-08-28 `;
        this.on('$receive:value', (c, v) => {
            if (v && v.length) {
                v = v.map(item => prefix + item);
            } else if (v) {
                v = prefix + v;
            }
            this.set('_value', v);
        });
    }
}

export {Timepicker};
