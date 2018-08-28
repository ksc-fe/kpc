import Intact from 'intact';
import Calendar from '../datepicker/calendar';
import template from './panel.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {getDateString} from '../datepicker/utils';

export default class TimePanel extends Calendar {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            ...super.defaults(),

            _isSelectTime: true,
            _id: undefined,
        };
    }

    _init() {
        const {value, multiple, _index} = this.get();
        if (_index === undefined) {
            // if multiple, add one value showed every time
            this._index = multiple && value && value.length || 0;
        } else {
            this._index = _index;
        }
    }

    _format(date) {
        return getDateString(date, 'datetime');
    }
}
