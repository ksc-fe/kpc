import Intact from 'intact';

const utils = Intact.utils;
const {get, isNullOrUndefined, isObject, isFunction, noop, extend} = utils;
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
    if (isStringOrNumber(o)) return true;
    if (Array.isArray(o)) {
        return o.every(item => isTextChildren(item));
    }
    return isTextVNode(o);
}

export function isTextVNode(o) {
    return o && o.type === Types.Text;
}

// for detect if it is a text node in Angular
export function isTextBlock(o) {
    return isTextChildren(o) || o && o.tag && o.tag.$id === 'AngularBlockWrapper' && o.props.isText;
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

/**
 * @brief find the router instance
 *
 * in React, find the history of router
 * for react-router@5, we need get the history from providers
 * as it use the new context api of React
 *
 * in Vue, find the $router
 *
 * @param instance
 *
 * @return
 */
export function findRouter(instance) {
    const Component = instance.constructor;
    if (Component.$$cid === 'IntactReact') {
        // in React
        let parentVNode = instance.vNode;
        while (parentVNode) {
            let i;
            if (
                parentVNode.type === Types.ComponentClass &&
                (i = parentVNode.children.context)
            ) {
                if (i = i.router) {
                    return i.history;
                } else if (i = parentVNode.children.__providers) {
                    // for react-router@5
                    const iter = i.entries();
                    while (i = iter.next().value) {
                        if (i[0]._context.displayName === 'Router' && (i = i[1]).history) {
                            return i.history;
                        }
                    }
                }
                break;
            }
            parentVNode = parentVNode.parentVNode;
        }
    } else if (Component.cid === 'IntactVue') {
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
    'ev-a:leaveStart': (el) => {
        el._height || (el._height = el.clientHeight + 'px');
        el.style.height = el._height;
    },
    'ev-a:leave': (el) => el.style.height = 0,
    'ev-a:leaveEnd': (el, isCancel) => {
        // 保持动画的连贯性，可能在leave动画被enter动画cancel
        // 此时el._height存在，不要在start中去获取，否则会重绘
        // 导致多个动画时，动画时长不一致
        if (!isCancel) {
            el.style.height = '';
            el._height = null;
        }
    },
    'ev-a:enterStart': (el) => {
        el._height || (el._height = el.clientHeight + 'px');
        el.style.height = 0;
    },
    'ev-a:enter': (el) => el.style.height = el._height,
    'ev-a:enterEnd': (el, isCancel) => {
        if (!isCancel) {
            el.style.height = '';
            el._height = null;
        }
    },
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

export const hasWindow = typeof window !== 'undefined';

let raf;
if (hasWindow) {
    raf = window.requestAnimationFrame ?
        window.requestAnimationFrame.bind(window) : setTimeout;
}
export function nextFrame(fn) {
    raf(() => raf(fn));
}

export function debounce(fn, delay) {
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

export function throttle(fn, delay) {
    let lock = false;
    return function() {
        if (lock) return;
        lock = true;
        const args = arguments;
        const context = this;
        const timer = setTimeout(() => {
            fn.apply(context, args);
            lock = false;
        }, delay);
    }
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

export function getRestProps(instance, props = instance.get()) {
    const selfProps = instance.defaults() || {};
    const events = instance.constructor.events || {};
    const ret = {};
    for (let key in props) {
        if (
            key === 'key' ||
            key === 'ref' ||
            key === 'className' ||
            key === 'children' ||
            key === 'v-model' ||
            key[0] === '_' ||
            key in selfProps ||
            key.substring(3) in events ||
            // ev-$change / $destroy
            key.substring(0, 4) === 'ev-$'
        ) continue;
        ret[key] = props[key];
    }
    return ret;
}

export const config = {
    useWrapper: false,
    onDialogOpen: null,
    onDialogClose: null,
};
export function configure(options) {
    extend(config, options);
}
