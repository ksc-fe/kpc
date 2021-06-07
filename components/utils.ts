import {Component, VNode} from 'intact';
import {EMPTY_OBJ, isStringOrNumber} from 'intact-shared';

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

export function clamp(number: number, lower: number, upper: number) {
    return Math.min(Math.max(number, lower), upper);
}
