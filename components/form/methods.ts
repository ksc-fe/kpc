import {_$} from '../../i18n';
import {isNumber, isNullOrUndefined, isString} from 'intact-shared';

export type Method = (value: any, param: any) => boolean | string
export type Message = string | ((value: any, param: any) => string)
export type ClassName = string | ((value: any, param: any) => string)

function decimalPlaces(num: number) {
    var match = ("" + num).match(/(?:\.(\d+))?$/);
    /* istanbul ignore if */
    if (!match) {
        return 0;
    }

    // Number of digits right of decimal point.
    return match[1] ? match[1].length : 0;
}

export const methods: Record<string, Method> = {
    required(value: any) {
        if (isNullOrUndefined(value)) return false;
        if (isString(value)) {
            return value.trim().length > 0;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return true;
    },

    digits(value: any) {
        return /^\d+$/.test(value);
    },

    email(value: any) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    },

    url(value: any) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    },

    date(value: any) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    },

    dateISO(value: any) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    },

    number(value: any) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },

    minLength(value: any, param: number) {
        if (isNumber(value)) value = String(value);
        return value.length >= Number(param);
    },

    maxLength(value: any, param: number) {
        if (isNumber(value)) value = String(value);
        return value.length <= Number(param);
    },

    rangeLength(value: any, param: [number, number]) {
        if (isNumber(value)) value = String(value);
        const length = value.length;
        return length >= Number(param[0]) && length <= Number(param[1]);
    },

    min(value: any, param: number | string) {
        return Number(value) >= Number(param);
    },

    max(value: any, param: number | string) {
        return Number(value) <= Number(param);
    },

    range(value: any, param: [number | string, number | string]) {
        return Number(value) >= Number(param[0]) && Number(value) <= Number(param[1]);
    },

    step(value: any, param: number) {
        const decimals = decimalPlaces(param);
        const toInt = (num: number) => Math.round(num * Math.pow(10, decimals));

        return decimalPlaces(value) <= decimals && toInt(value) % toInt(param) === 0;
    },

    equal(value: any, param: any) {
        return value === param;
    }
};

export const messages: Record<string, Message> = {
    required: () => _$('必须填写'),
    digits: () => _$('请输入数字'),
    email: () => _$('请输入正确的邮箱地址'),
    url: () => _$('请输入正确的网址'),
    date: () => _$('请输入正确的日期'),
    dateISO: () => _$('请输入正确的日期 (YYYY-MM-DD)'),
    number: () => _$('请输入正确的数'),
    maxLength(value: any, param: number) {
        if (Array.isArray(value)) {
            return _$(`最多选择 {n} 项`, {n: param});
        } else {
            return _$(`最多输入 {n} 个字符`, {n: param});
        }
    },
    minLength(value: any, param: number) {
        if (Array.isArray(value)) {
            return _$(`最少选择 {n} 项`, {n: param});
        } else {
            return _$(`最少输入 {n} 个字符`, {n: param});
        }
    },
    rangeLength(value: any, param: [number, number]) {
        if (Array.isArray(value)) {
            return _$(`请选择 {n} 到 {m} 项`, {n: param[0], m: param[1]});
        } else {
            return _$(`请输入 {n} 到 {m} 个字符`, {n: param[0], m: param[1]});
        }
    },
    max(value: any, param: number | string) {
        return _$(`请输入不大于 {n} 的数`, {n: param});
    },
    min(value: any, param: number | string) {
        return _$(`请输入不小于 {n} 的数`, {n: param});
    },
    range(value: any, param: [number | string, number | string]) {
        return _$(`请输入 {n[0]} 到 {n[1]} 之间的数`, {n: param});
    },
    step(value: any, param: number) {
        return _$(`请输入步长为 {n} 的数`, {n: param});
    },
    equal: () => _$('两次输入不一致'),
};

export const classNames: Record<string, ClassName> = {};

export const addMethod = function(name: string, method: Method, message?: Message, className?: ClassName) {
    methods[name] = method;
    messages[name] = message !== undefined ? message : messages[name];
    if (className) {
        classNames[name] = className;
    }
};
