import Intact from 'intact';
import DatepickerTime from '../datepicker/time';

export default class TimepickerTime extends DatepickerTime {
    _isDisabled(value) {
        return false;
        if (!value.every((item) => item)) return true;

        const {min, max} = this.get();
        value = value[0];

        return min && value.isBefore(min) || max && value.isAfter(max);
    }
}
