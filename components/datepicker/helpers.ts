import dayjs, {Dayjs, OpUnitType} from 'dayjs';
import {strPad, range} from '../utils';
import {_$} from '../../i18n';
import {StateValueItem} from './useValue';

export function getNowDate() {
    // only date without time
    const now = new Date();
    clearTime(now);

    return dayjs(now);
}

export function clearTime(date: Date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
}

export function isEqual(
    a: Dayjs | undefined | null,
    b: Dayjs | undefined | null,
    type: OpUnitType = 'date'
) {
    if (a && b) {
        return a.isSame(b, type);
    }
    return false;
}

export function isLT(
    a: Dayjs | undefined | null,
    b: Dayjs | undefined | null,
    type: OpUnitType = 'date'
) {
    if (a && b) {
        return a.isBefore(b, type);
    }

    return false;
}

export function isGT(
    a: Dayjs | undefined | null,
    b: Dayjs | undefined | null,
    type: OpUnitType = 'date'
) {
    return isLT(b, a, type);
}

export function createDate(date: string) {
    if (typeof date === 'string') {
        const [dateString, timeString] = date.split(' ');
        const args = dateString.split('-').map(Number) as [number, number, number];
        args[1] = args[1] - 1;
        if (timeString) {
            args.push.apply(args, timeString.split(':').map(Number));
        }
        return new Date(...args);
    }
    if (!date) return new Date();
    return new Date(date);
}

export function findValueIndex(values: StateValueItem[], value: StateValueItem) {
    return values.findIndex(item => {
        if (Array.isArray(item)) {
            // is multipe range values
            const [start, end] = value as [Dayjs, Dayjs];
            return isEqual(item[0], start) && isEqual(item[1], end);
        } else {
            return isEqual(value as Dayjs, item);
        }
    });
}

export function last<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}
