import dayjs, {Dayjs} from '../datepicker/dayjs';
import {getNowDate} from '../datepicker/helpers';
import {BasePicker, BasePickerProps, BasePickerEvents} from '../datepicker/basepicker';
import {TypeDefs} from 'intact';

export const YEAR_FORMAT = 'YYYY-MM-DD ';
export const TIME_FORMAT = 'HH:mm:ss';
export const NOW = getNowDate();
export const PREFIX = NOW.format(YEAR_FORMAT);

export interface TimepickerProps extends BasePickerProps<string> {
    step?: string
}

export interface TimepickerEvents extends BasePickerEvents { }

export const typeDefs: Required<TypeDefs<TimepickerProps>> = {
    ...BasePicker.typeDefs,
    value: [String, Array],
    min: String,
    max: String,
    step: String,
}
