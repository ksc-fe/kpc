import {Component, VNode, Children, NormalizedChildren, VNodeComponentClass, ComponentConstructor, isText} from 'intact';
import {EMPTY_OBJ, isStringOrNumber, isNullOrUndefined, isInvalid} from 'intact-shared';

export function bind<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> {
    const method = descriptor.value!;
    return {
        configurable: true,
        get(this: T): T {
            const value = method.bind(this);
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true,
            });

            return value;
        }
    };
}

export function addStyle(style: string | Record<string, string> | undefined, extra: Record<string, string>) {
    if (!style) return extra;
    if (!extra) return style;
    if (typeof style === 'string') {
        const _extra = Object.keys(extra).map(key => `${kebabCase(key)}: ${extra[key]}`).join(';');
        style = `${style}${!style || /;\s*$/.test(style) ? '' : ';'}${_extra}`;
    } else {
        style = {...style, ...extra};
    }

    return style;
}

const _cache: Record<string, string> = {};
const uppercasePattern = /[A-Z]/g;
export function kebabCase(word: string) {
    if (!_cache[word]) {
        _cache[word] = word.replace(uppercasePattern, (item) => {
            return `-${item.toLowerCase()}`;
        });
    }
    return _cache[word];
}

export function isTextChildren(o: any): boolean {
    if (isStringOrNumber(o)) return true;
    if (Array.isArray(o)) {
        return o.every(item => isTextChildren(item));
    }
    return isTextVNode(o);
}

export function isTextVNode(o: VNode): boolean {
    return o && isText(o);
}

// for detect if it is a text node in Angular
export function isTextBlock(o: any): boolean {
    return isTextChildren(o) || o && o.tag && o.tag.$id === 'AngularBlockWrapper' && o.props.isText;
}

export function isStringOrNumberNotEmpty(o: any): o is string | number {
    const type = typeof o;
    return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}

export function getRestProps<T>(component: Component<T>, props = component.get()) {
    const Ctor = component.constructor as typeof Component;
    const typeDefs = Ctor.typeDefs || EMPTY_OBJ;
    const events = (Ctor as any).events || EMPTY_OBJ;
    const ret: Partial<T> = {};

    for (const key in props) {
        switch (key) {
            case 'key':
            case 'ref':
            case 'className':
            case 'children':
                continue;
            default:
                if (
                    key[0] === '$' ||
                    key in typeDefs ||
                    key.substr(3) in events ||
                    key.substr(0, 4) === 'ev-$'
                ) {
                    continue;
                }
                ret[key as keyof T] = props[key as keyof T];
                break;
        }
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
    } else if (Component.cid === 'IntactVueNext') {
        // for vue3.0
        while (instance) {
            const vueInstance = instance.vueInstance;
            if (vueInstance) {
                return vueInstance.$router;
            }
            let parentVNode = instance.parentVNode;
            while (true) {
                if (!parentVNode) return;
                if (parentVNode.type === Types.ComponentClass) {
                    instance = parentVNode.children;
                    break;
                }
                parentVNode = parentVNode.parentVNode;
            }
        }
    }
}

const externalLinkReg = /^(https?:)?\/\//;
export function isExternalLink(to) {
    if (typeof to !== 'string') return false;
    return externalLinkReg.test(to);
}

export function clamp(number: number, lower: number, upper: number) {
    return Math.min(Math.max(number, lower), upper);
}

export function stopPropagation(e: Event) {
    e.stopPropagation();
}

export type ValidVNode = VNode | string | number;
export type MapCallback<T> = (vNode: ValidVNode, index: number) => T;

export function findChildren(children: Children, callback: MapCallback<boolean>): ValidVNode | undefined {
    let found: ValidVNode | undefined = undefined;

    if (isInvalid(children)) return found;

    let index = -1;
    const loop = (children: ValidVNode | NormalizedChildren[] | Children[]) => {
        if (Array.isArray(children)) {
            for (let i = 0; i < children.length; i++) {
                const vNode = children[i];
                if (isInvalid(vNode)) continue;
                if (loop(vNode)) {
                    found = vNode as ValidVNode;
                    break;
                }
            }
        } else {
            return callback(children, ++index);
        }
    }

    loop(children);

    return found;
}

export function mapChildren<T>(children: Children, callback: MapCallback<T>) {
    const results: T[] = [];
    findChildren(children, (vNode, index) => {
        results.push(callback(vNode, index));
        return false;
    });
    return results;
}

export function eachChildren(children: Children, callback: MapCallback<void>) {
    findChildren(children, (vNode, index) => {
        callback(vNode, index);
        return false;
    });
}
// mapChildren(['a', null, 'b', ['c', 'd', ['e', null,  'f'], 'g'], 'h'], (a, b) => console.log(a, b));

export function toggleArray(arr: any[] | null | undefined, value: any) {
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

export function getTextByChildren(children: Children) {
    let ret = '';
    if (isInvalid(children)) return ret;

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

export function isEmptyString(o: any): boolean {
    return isNullOrUndefined(o) || o === ''; 
}

export function isEmptyChildren(o: Children): boolean {
    return isEmptyString(o) || Array.isArray(o) && o.every(item => isEmptyChildren(item));
}

export function isComponentVNode<T extends ComponentConstructor>(o: any, tag: T): o is VNodeComponentClass<any> {
    return o.tag === tag; 
}

export function range(start: number, end: number) {
    return Array.apply(null, {length: end - start + 1} as any)
        .map((v, i) => i + start);
}

export function strPad(str: number | string, length: number, pad: string = '0') {
    str = str.toString();
    const l = str.length;
    if (l < length) {
        str = new Array(length - l + 1).join(pad) + str;
    }
    return str;
}

type EqualArrayValue = any | EqualArrayValue[]
export function isEqualArray(a: EqualArrayValue, b: EqualArrayValue): boolean {
    if (a === b) return true;
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((value, index) => isEqualArray(value, b[index]));
    }
    return false;
}

