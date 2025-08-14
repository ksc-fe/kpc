import {useInstance, Component} from 'intact';
import dayjs, {Dayjs} from '../datepicker/dayjs';
import {isString} from 'intact-shared';
import type {TimepickerProps} from './';
import type {Value} from '../datepicker/useValueBase';
import {YEAR_FORMAT, TIME_FORMAT, PREFIX} from './constants'

export function useFormats<T extends Component<TimepickerProps>>() {
    const instance = useInstance() as T;

    function getValueFormat() {
        const {format, valueFormat} = instance.get();
        return valueFormat || format || TIME_FORMAT;
    }

    function getShowFormat() {
        const {format, showFormat} = instance.get();
        return showFormat || format || TIME_FORMAT;
    }

    function createDateByValueFormat(value: Value) {
        return dayjs(PREFIX + value, YEAR_FORMAT + getValueFormat());
    }

    function createDateByShowFormat(value: Value) {
        return dayjs(PREFIX + value, YEAR_FORMAT + getShowFormat(), true); // strict parsing 
    }

    function getShowString(value: Dayjs) {
        return value.format(getShowFormat());
    }

    function getValueString(value: Dayjs) {
        return value.format(getValueFormat());
    }

    return {
        getValueFormat,
        getShowFormat,
        createDateByValueFormat,
        createDateByShowFormat,
        getShowString,
        getValueString,
    };
}
