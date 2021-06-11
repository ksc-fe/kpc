import {isObject, get, isNullOrUndefined, isNumber} from 'intact-shared';

type Data = Record<string, string | number>

const valueRegexp = /\{([^\}\s]+)\}/g;

let i18n: Data = {};

export function _$(key: null | undefined, data?: any): undefined | null
export function _$(key: string | number, data?: any): string
export function _$(key: string | number | null | undefined, data?: Record<string, any>): undefined | null | string {
    if (isNullOrUndefined(key)) return;
    let value = get(i18n, key as string);
    if (isNullOrUndefined(value)) {
        value = key;
    }
    if (isNumber(value)) value = String(value);

    if (data) {
        value = value.replace(valueRegexp, (nouse, variable) => {
            let suffix;
            const index = variable.indexOf(':');
            if (index > 0) {
                suffix = variable.substr(0, index);
                suffix = suffix.split('|');
                variable = variable.substr(index + 1);
                variable = get(data, variable);
                if (variable > 1) {
                    return suffix.length > 1 ? suffix[1] : suffix[0];
                } else {
                    return suffix.length > 1 ? suffix[0] : '';
                }
            } else {
                variable = get(data, variable);
                return isNullOrUndefined(variable) ? nouse : variable;
            }
        });
    }

    return value;
}

export function localize(data: Data) {
    if (!isObject(data)) {
        throw new Error(`expect a object but got ${data}`);
    }
    i18n = data;
}
