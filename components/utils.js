import Intact from 'intact';
import { functionTypeAnnotation } from 'babel-types';

const utils = Intact.utils;
const {get, isNullOrUndefined, isObject, isFunction, noop} = utils;
const Types = Intact.Vdt.miss.Types;

export {get, isNullOrUndefined, isObject, isFunction, noop};

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

export function isTextChildren(o) {
    return isStringOrNumber(o) || isTextVNode(o);
}

export function isTextVNode(o) {
    return o && o.type === Types.Text;
}

export function isStringOrNumberNotEmpty(o) {
    const type = typeof o;
    return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}

export function getTextByChildren(children) {
    let ret = '';
    if (Array.isArray(children)) {
        children.forEach(vNode => {
            ret += getTextByChildren(vNode);
        });
    } else if (isStringOrNumber(children)) {
        ret += children;
    } else if (isTextVNode(children)) {
        ret += children.children;
    }

    return ret.trim();
}


export function findParentComponent(Component, instance, isUntil) {
    let ret;
    let parent = instance.parentVNode;
    while (parent) {
        const tag = parent.tag;
        if (tag && (tag === Component || tag.prototype instanceof Component)) {
            ret = parent.children;
            if (isUntil) break;
        }
        parent = parent.parentVNode;
    }
    return ret;
}

// find the router instance
// in React, find the history of history
// in Vue, find the $router
export function findRouter(instance) {
    const Component = instance.constructor;
    if (Component.$$cid === 'IntactReact') {
        // in React
        let parentVNode = instance.vNode;
        while (parentVNode) {
            let i;
            if (
                parentVNode.type === Types.ComponentClass && 
                (i = parentVNode.children.context) &&
                (i = i.router)
            ) {
                return i.history;
            }
            parentVNode = parentVNode.parentVNode;
        }
    } else if (Component.cid = 'IntactVue') {
        return instance.get('_context').data.$router;
    }
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

export function getTransition(feedback) {
    const horizontal = feedback.horizontal;
    const vertical = feedback.vertical;
    if (feedback.important=== 'horizontal') {
        if (horizontal === 'left') {
            return 'c-slideright';
        } else if (horizontal === 'right') {
            return 'c-slideleft';
        } else if (vertical === 'bottom') {
            return 'c-slideup';
        } else if (vertical === 'top') {
            return 'c-slidedown';
        }
    } else {
        if (vertical === 'bottom') {
            return 'c-slideup';
        } else if (vertical === 'top') {
            return 'c-slidedown';
        } else if (horizontal === 'left') {
            return 'c-slideright';
        } else if (horizontal === 'right') {
            return 'c-slideleft';
        }
    }
    return 'c-slidedown';
}

export function mapChildren(children, callback) {
    const vNodes = [];
    function map(children) {
        if (!children) return;
        if (!Array.isArray(children)) {
            return vNodes.push(callback(children));
        }
        children.forEach(vNode => {
            if (Array.isArray(vNode)) {
                map(vNode);
            } else if (vNode) {
                vNodes.push(callback(vNode));
            }
        });
    }

    map(children);

    return vNodes;
}

export const expandAnimationCallbacks = {
    'a:transition': 'c-expand',
    'ev-a:leaveStart': (el) => el.style.height = el.clientHeight + 'px',
    'ev-a:leave': (el) => el.style.height = 0,
    'ev-a:enterStart': (el) => {
        el._height = el.clientHeight + 'px';
        el.style.height = 0;
    },
    'ev-a:enter': (el) => el.style.height = el._height,
    'ev-a:enterEnd': (el) => el.style.height = '',
};

export function toggleArray(arr, value) {
    if (!Array.isArray(arr)) {
        return [value];
    } else {
        arr = arr.slice(0);
        const index = arr.indexOf(value);
        if (~index) {
            arr.splice(index, 1);
        } else {
            arr.push(value);
        }
        return arr;
    }
}

export function isNumber(n) {
    return typeof n === 'number';
}

let raf;
if (typeof window !== 'undefined') {
    raf = window.requestAnimationFrame ? 
        window.requestAnimationFrame.bind(window) : setTimeout;
}
export function nextFrame(fn) {
    raf(fn);
}

export function throttle(fn, delay) {
    let timer;
    return function() {
        const args = arguments;
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

export const browser = {};
if (typeof navigator !== 'undefined') {
    const ua = navigator.userAgent.toLowerCase();
    const index = ua.indexOf('msie ');
    if (~index) {
        browser.isIE = true;
        const version = parseInt(ua.substring(index + 5, ua.indexOf('.', index)), 10);
        browser.version = version;
        browser.isIE8 = version === 8;
    } else if (~ua.indexOf('trident/')) {
        browser.isIE = true;
        const rv = ua.indexOf('rv:');
        browser.version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    } else if (~ua.indexOf('edge')) {
        browser.isEdge = true;
    } else if (~ua.indexOf('safari')) {
        if (~ua.indexOf('chrome')) {
            browser.isChrome = true;
        } else {
            browser.isSafari = true;
        }
    }
}

const externalLinkReg = /^(https?:)?\/\//;
export function isExternalLink(to) {
    if (typeof to !== 'string') return false;
    return externalLinkReg.test(to);
}
