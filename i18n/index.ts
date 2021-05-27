import {isObject, get, isNullOrUndefined} from 'intact-shared';

const valueRegexp = /\{([^\}\s]+)\}/g;
export function createLocalize() {
    let i18n: Record<string, string> = {};
    return {
        _$(key: string | number | null | undefined, data?: Record<string, string>) {
            if (isNullOrUndefined(key)) return;
            let value = get(i18n, key as string);
            if (isNullOrUndefined(value)) {
                value = key as string;
            }

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
        },
        localize(data: Record<string, string>) {
            if (!isObject(data)) {
                throw new Error(`expect a object but got ${data}`);
            }
            i18n = data;
        }
    };
}
const {_$, localize} = createLocalize();
export {_$, localize}
