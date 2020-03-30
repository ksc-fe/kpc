exports.dedent = function dedent(scripts, number = 1) {
    if (typeof scripts === 'string') {
        scripts = scripts.split('\n');
    }
    
    const ret = [];
    for (let i = 0; i < scripts.length; i++) {
        const item = scripts[i];
        if (Array.isArray(item)) {
            ret.push.apply(ret, dedent(item, number));
        } else if (item !== undefined) {
            ret.push(item.substring(4 * number));
        }
    }

    return ret;
}

exports.indent = function indent(scripts, number = 1) {
    if (!scripts) return [];
    if (typeof scripts === 'string') {
        scripts = scripts.split('\n');
    }

    const ret = [];
    for (let i = 0; i < scripts.length; i++) {
        const item = scripts[i];
        if (Array.isArray(item)) {
            ret.push.apply(ret, indent(item, number));
        } else if (item !== undefined) {
            ret.push('    '.repeat(number) + item);
        }
    }

    return ret;
}

const defaultsRegExp = /\n\s{4}defaults\(\) \{\n\s+return ([^;]*?);?\n\s{4}\}/;
exports.getDefaults = function getDefaults(js) {
    const matches = js.match(defaultsRegExp);
    if (matches) {
        let data;
        try {
            eval(`data = ${matches[1]}`);
        } catch (e) {}
        return data; 
    }
}
