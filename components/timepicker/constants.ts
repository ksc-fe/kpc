import dayjs, {Dayjs} from '../datepicker/dayjs';
import {getNowDate} from '../datepicker/helpers';
import {
    BasePicker,
    BasePickerProps,
    BasePickerEvents,
    BasePickerBlocks,
} from '../datepicker/basepicker';
import {TypeDefs} from 'intact';

export const YEAR_FORMAT = 'YYYY-MM-DD ';
export const TIME_FORMAT = 'HH:mm:ss';
export const NOW_START = getNowDate();
export const NOW_END = getNowDate(true);
export const PREFIX = NOW_START.format(YEAR_FORMAT);

export interface TimepickerProps<
    M extends boolean = boolean,
    R extends boolean = boolean
> extends BasePickerProps<string, M, R> {
    step?: string
}

export interface TimepickerEvents extends BasePickerEvents { }

export interface TimepickerBlocks<
    R extends boolean = boolean,
> extends BasePickerBlocks<string, R> { }

export const typeDefs: Required<TypeDefs<TimepickerProps>> = {
    ...BasePicker.typeDefs,
    value: [String, Array],
    min: String,
    max: String,
    step: String,
}
