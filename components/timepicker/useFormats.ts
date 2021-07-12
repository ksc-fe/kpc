import {useInstance} from 'intact';
import dayjs, {Dayjs} from '../datepicker/dayjs';
import {isString} from 'intact-shared';
import type {Timepicker} from './index';
import type {Value} from '../datepicker';

const YEAR_FORMAT = 'YYYY-MM-DD ';
const TIME_FORMAT = 'HH:mm:ss';
const PREFIX = dayjs().format(YEAR_FORMAT);
console.log(PREFIX);

export function useFormats() {
    const instance = useInstance() as Timepicker;

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
