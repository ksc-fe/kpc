import {Component, VNode, Children, NormalizedChildren} from 'intact';
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
    return o && o.type === 1;
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

type ValidVNode = VNode | string | number;
export function mapChildren<T>(children: Children, callback: (vNode: ValidVNode, index: number) => T) {
    if (isInvalid(children)) return children;

    const results: T[] = [];
    loopChildren(children, callback, results, {value: 0});

    return results;
}

function loopChildren<T>(
    children: ValidVNode | NormalizedChildren[] | Children[],
    callback: (vNode: ValidVNode, index: number) => T,
    results: T[],
    index: {value: number},
) {
    if (Array.isArray(children)) {
        for (let i = 0; i < children.length; i++) {
            const vNode = children[i];
            if (isInvalid(vNode)) continue;
            loopChildren(vNode, callback, results, index);
        }
    } else {
        results.push(callback(children, index.value));
        index.value++;
    }
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
