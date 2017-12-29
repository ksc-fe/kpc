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
