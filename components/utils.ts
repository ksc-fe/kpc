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

export function isStringOrNumberNotEmpty(o: any): o is string | number {
    const type = typeof o;
    return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}
