import {useInstance} from 'intact';
import dayjs, {Dayjs} from 'dayjs';
import {isString} from 'intact-shared';
import type {Datepicker} from './index';
import {Value} from './basepicker';

const FORMATS = {
    date: 'YYYY-MM-DD',
    datetime: 'YYYY-MM-DD HH:mm:ss',
    year: 'YYYY',
    month: 'YYYY-MM',
    quarter: 'YYYY-[Q]Q',
    week: 'YYYY-w[周]',
};

export function useFormats() {
    const instance = useInstance() as Datepicker;

    function getValueFormat() {
        const {format, valueFormat, type} = instance.get();
        return valueFormat || format || FORMATS[type!];
    }

    function getShowFormat() {
        const {format, showFormat, type} = instance.get();
        return showFormat || format || FORMATS[type!];
    }

    function createDateByValueFormat(value: Value) {
        const format = isString(value) ? getValueFormat() : undefined;
        // Week 类型特殊处理
        if (isString(value) && format === 'YYYY-w[周]') {
            const match = value.match(/(\d{4})-(\d+)周/);
            if (match) {
                const [, year, week] = match;
                return dayjs().year(parseInt(year)).week(parseInt(week)).startOf('week');
            }
        }
        
        // Quarter 类型特殊处理
        if (isString(value) && format === 'YYYY-[Q]Q') {
            const match = value.match(/(\d{4})-Q(\d+)/);
            if (match) {
                const [, year, quarter] = match;
                return dayjs().year(parseInt(year)).quarter(parseInt(quarter)).startOf('quarter');
            }
        }
        return dayjs(value, format);
    }

    function createDateByShowFormat(value: string) {
        return dayjs(value, getShowFormat(), true); // strict parsing 
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
