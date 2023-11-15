import {Component, VNode, Children, NormalizedChildren, VNodeComponentClass, ComponentConstructor, isText} from 'intact';
import {EMPTY_OBJ, isStringOrNumber, isString, isNullOrUndefined, isInvalid} from 'intact-shared';

// @reference https://github.com/andreypopp/autobind-decorator/blob/master/src/index.js
// for loose mode
export function bind<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> {
    const method = descriptor.value!;
    // In IE11 calling Object.defineProperty has a side-effect of evaluating the
    // getter for the property which is being replaced. This causes infinite
    // recursion and an "Out of stack space" error.
    let definingProperty = false;

    return {
        configurable: true,
        get(this: T): T {
            if (
                definingProperty ||
                this === target || /* get method from prototype */
                this.hasOwnProperty('constructor') /* get method from prototype, e.g. super call */
            ) {
                return method;
            }

            const value = method.bind(this);
            definingProperty = true;
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true,
            });
            definingProperty = false;

            return value;
        },
        set(value: T) {
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true,
            });
        }
    };
}

// class A {
    // @bind
    // hello() {
        // console.log('A hello', this);
    // }

    // @bind
    // test() {
        // console.log('A test', this);
    // }
// }

// const test1 = A.prototype.hello;
// test1();
// const test2 = (new A()).hello;
// test2();

// class B extends A {
    // @bind
    // hello() {
        // super.hello();
        // console.log('B hello', this);
    // }
// }

// class C extends B {
    // @bind
    // test() {
        // super.test();
        // console.log('C test', this);
    // }
// }

// const b = new B();
// const c = new C();
// const hello = b.hello;
// const test = c.test;
// hello();
// test();

export function addStyle(style: string | Record<string, string | null> | undefined, extra: Record<string, string | null>) {
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
    const typeDefs = Ctor.typeDefs;
    const events = (Ctor as any).events;
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
                    typeDefs && key in typeDefs ||
                    events && key.substr(3) in events ||
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

const externalLinkReg = /^(https?:)?\/\//;
export function isExternalLink(to?: string | object): to is string {
    if (!isString(to)) return false;
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

export function isComponentVNode<T extends ComponentConstructor>(o: any, tag: T):
    o is VNodeComponentClass<T extends ComponentConstructor<infer P> ? P : never> 
{
    return o.tag === tag; 
}

export function range(start: number, end: number): number[] {
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

export function isEqualObject(a: Record<string, any>, b: Record<string, any>): boolean {
    if (a === b) return true;
    if (a && b) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;

        return keysA.every((key) => {
            return a[key] === b[key];
        });
    }

    return false;
}

export function last<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

export const expandAnimationCallbacks = {
    'name': 'k-expand',
    'onLeave': (el: HTMLElement) => {
        const height = el.clientHeight;
        el.style.height = `${height}px`;
        nextFrame(() => {
            el.style.height = `0px`;
        });
    },
    'onAfterLeave': (el: HTMLElement) => {
        el.style.height = '';
    },
    'onBeforeEnter': (el: HTMLElement) => {
        // we should set the enter el's height to 0
        // otherwise it will affect the movable el's position 
        el.style.height = `0px`;
    },
    'onEnter': (el: HTMLElement) => {
        el.style.height = '';
        const height = el.clientHeight;
        el.style.height = `0px`;
        nextFrame(() => {
            el.style.height = `${height}px`;
        });
    },
    'onAfterEnter': (el: HTMLElement) => {
        el.style.height = '';
    },
};

export function throttle<T>(fn: (arg: T) => void, time: number, doAlways?: (arg: T) => void) {
    let lock = false;
    let timer: number;
    return (arg: T) => {
        if (doAlways) doAlways(arg);
        if (lock) return;
        lock = true;
        timer = window.setTimeout(() => {
            fn(arg);
            lock = false;
        }, time);
    };
}

export function debounce(fn: Function, time: number, immediately: boolean = false) {
    let timer: number;
    let lock = !immediately;
    return () => {
        if (!lock) {
            lock = true;
            return fn();
        }
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            fn();
            lock = !immediately;
        }, time)
    };
}

export function nextFrame(fn: () => void) {
    requestAnimationFrame(() => {
        requestAnimationFrame(fn);
    });
}
