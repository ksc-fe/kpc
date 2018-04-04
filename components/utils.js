import Intact from 'intact';

const utils = Intact.utils;
const {get, isNullOrUndefined, isObject} = utils;

export function addStyle(style, extra) {
    if (!style) return extra;
    if (!extra) return style;
    if (typeof style === 'string') {
        extra = Object.keys(extra).map(key => `${kebabCase(key)}: ${extra[key]}`).join(';');
        style = `${style}${!style || /;\s*$/.test(style) ? '' : ';'}${extra}`;
    } else {
        style = {...style, ...extra};
    }

    return style;
}

const _cache = {};
const uppercasePattern = /[A-Z]/g;
export function kebabCase(word) {
    if (!_cache[word]) {
        _cache[word] = word.replace(uppercasePattern, (item) => {
            return `-${item.toLowerCase()}`;
        });
    }
    return _cache[word];
}

export function proxyEvent(component, name) {
    return (e) => component.trigger(name, e);
}

export function isStringOrNumber(o) {
    const type = typeof o;
    return type === 'string' || type === 'number';
}

export function isTextVNode(o) {
    return isStringOrNumber(o) || o.type === 1;
}

export function isStringOrNumberNotEmpty(o) {
    const type = typeof o;
    return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}

export function getTextByChildren(children) {
    let ret = '';
    if (Array.isArray(children)) {
        children.forEach(vNode => {
            if (isTextVNode(vNode)) {
                ret += vNode.children;
            }
        });
    } else if (isStringOrNumber(children)) {
        ret += children;
    }

    return ret;
}


export function findParentComponent(Component, instance, isUntil) {
    let ret;
    let parent = instance.parentVNode;
    while (parent) {
        if (parent.tag === Component) {
            ret = parent.children;        
            if (isUntil) break;
        }
        parent = parent.parentVNode;
    }
    return ret;
}

export function strPad(str, length, pad) {
    str = str.toString();
    pad = pad === undefined ? '0' : pad;
    var l = str.length;
    if (l < length) {
        str = new Array(length - l + 1).join(pad) + str;
    }
    return str;
}

export function range(start, end) {
    return Array.apply(null, {length: end - start + 1})
        .map((v, i) => i + start);
}

export function selectInput(input) {
    if (input.select) {
        input.select();
    } else if (input.setSelectionRange) {
        // mobile safari
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }
}

let i18n = {};
const valueRegexp = /\{([^\}\s]+)\}/g;
export function _$(key, data) {
    let value = get(i18n, key);
    if (isNullOrUndefined(value)) {
        value = key;
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
}
export function localize(data) {
    if (!isObject(data)) {
        throw new Error(`expect a object but got ${data}`);
    }
    i18n = data;
}
