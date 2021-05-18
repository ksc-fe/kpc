import Intact from 'intact';
import DatepickerTime from '../datepicker/time';

export default class TimepickerTime extends DatepickerTime {
    _isDisabled(value) {
        if (!value.every((item) => item)) return true;

        const {_parent, isDisabledTime} = this.get();
        value = _parent._createDate(value[0]);

        return isDisabledTime(value);
    }
}
