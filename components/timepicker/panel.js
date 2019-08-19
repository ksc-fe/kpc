import Intact from 'intact';
import Calendar from '../datepicker/calendar';
import template from './panel.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {getDateString, createDate, getTimeString} from '../datepicker/utils';

export default class TimePanel extends Calendar {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),

            _isSelectTime: true,
            _id: undefined,
            _parent: undefined,
        };
    }

    _init() {
        this.isSelectTime = true;

        this.initIndex();

        this.on('$receive:value', this.initIndex);
        this.on('$receive:multiple', this.initIndex);
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

    changeTimeByStep(c, v) {
        // the function is only called in range step,
        // so detecting multiple is unnecessary
        this.isSelectTime = true;

        const {_parent, value} = this.get();
        const valueDate = _parent._createDate(v[0]);

        let _value;
        if (value) {
            _value = value.slice(0);
            _value[this._index] = valueDate;
        } else {
            _value = [valueDate];
        }

        this.set('value', _value);
    }

    onChangeTime(...args) {
        super.onChangeTime(...args);
        // always set this flag to true
        this.isSelectTime = true;
    }
}
