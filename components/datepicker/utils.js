import dayjs from 'dayjs/esm';
import {strPad, range, _$} from '../utils';

export function getNowDate() {
    // only date without time
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    
    return dayjs(now);
}
export function isEqual(a, b) {
    if (a && b) {
        return a.isSame(b, 'date');
    }
    return false;
}

export function isLT(a, b) {
    if (a && b) {
        return a.isBefore(b, 'date');
    }

    return false;
}

export function isGT(a, b) {
    return isLT(b, a);        
}

export function getDateString(date, type) {
    const year = date.getFullYear();
    if (type === 'year') {
        return year;
    }
    const month = `${year}-${strPad(date.getMonth() + 1, 2)}`;
    if (type === 'month') {
        return month;
    }
    const _date = `${month}-${strPad(date.getDate(), 2)}`;

    if (type !== 'datetime') {
        return _date;
    }

    return `${_date} ${getTimeString(date)}`;
}

export function getTimeString(date) {
    return [
        strPad(date.getHours(), 2),
        strPad(date.getMinutes(), 2),
        strPad(date.getSeconds(), 2)
    ].join(':');
}

export function dispatchEvent(target, eventName, options) {
    let event;
    if (document.createEvent) {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    } else if (document.createEventObject) {
        event = document.createEventObject();
        return target.fireEvent(`on${eventName}`, event);
    } else if (typeof CustomEvent !== 'undefined') {
        event = new CustomEvent(eventName);
    }
    Object.assign(event, options);
    target.dispatchEvent(event);
}

export function createDate(date) {
    if (typeof date === 'string') {
        const [dateString, timeString] = date.split(' ');
        const args = dateString.split('-');
        args[1] = args[1] - 1;
        if (timeString) {
            args.push.apply(args, timeString.split(':'));
        }
        return new Date(...args);
    }
    if (!date) return new Date();
    return new Date(date);
}

export const monthArray = range(0, 11).map(i => {
    return {label: _$(`${i + 1}月`), value: i};
});

export const yearArray = (value) => {
    return range(value - 5, value + 5);
};

export const FORMATS = {
    date: 'YYYY-MM-DD',
    datetime: 'YYYY-MM-DD HH:mm:ss',
    year: 'YYYY',
    month: 'YYYY-MM',
}
