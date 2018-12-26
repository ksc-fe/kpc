const Intact = require('intact');
const Vdt = Intact.Vdt;

module.exports = function(vdt, js, vueScript, vueTemplate, vueMethods, vueData) {
    // console.log(vdt, js, vueScript);
    const obj = parse(vdt, js, vueScript, vueTemplate, vueMethods, vueData);
    const result = [
        `<template>`,
        obj.template,
        `</template>`,
        `<script>`,
        obj.head,
        `export default {`,
        obj.js,
        `}`,
        `</script>`,
    ];

    return result.join('\n');
}

const importRegExp = /import \{?(.*?)\}? from .*/g
function parse(vdt, js, vueScript, vueTemplate, vueMethods, vueData) {
    const components = [];
    let properties = {};
    let methods = {};
    let head = '';
    let template = vdt.replace(importRegExp, (match, name) => {
        name = name.split(', ').map(item => item === 'Switch' ? 'KSwitch' : item);
        components.push(...name);
        head += match.replace('Switch', 'Switch as KSwitch') + '\n';
        return '';
    }).replace(/<Switch/g, '<KSwitch');
    if (vueTemplate) {
        template = vueTemplate;
    } else {
        template = parseProperty(template, properties, methods);
        template = parseVModel(template, properties);
        template = parseInterpolation(template, properties, methods);
        template = parseBlock(template);
    }

    let scripts = indent([
        `components: {`,
        `    ${components.join(', ')}`,
        `},`,
    ]);

    let methodsObj = {};
    if (js) {
        const {defaults, methods} = parseJS(js);
        if (defaults) {
            properties = {...properties, ...defaults};
        }
        methodsObj = methods;
        js.replace(importRegExp, (match, name) => {
            if (components.indexOf(name) > -1) return;
            head += match + '\n'
        });
    }
    if (vueMethods) {
        const methods = getMethods(vueMethods);
        Object.assign(methodsObj, methods);
    }
    methods = [...Object.values(methods), ...Object.values(methodsObj)];
    if (Object.keys(properties).length && !vueData) {
        scripts = [
            ...scripts,
            ...indent([
                `data() {`,
                ...indent(`return ${JSON.stringify(properties, null, 4)}`),
                `},`
            ]),
        ];
    }
    if (vueData) {
        scripts = [
            ...scripts,
            ...indent(vueData),
        ];
    }
    if (methods.length) {
        scripts = [
            ...scripts,
            ...indent([
                `methods: {`,
                    ...indent(methods.join('\n')),
                `},`
            ])
        ]; 
    }

    if (vueScript) {
        scripts = [
            ...scripts,
            ...indent(vueScript),
        ];
    }

    return {
        head, 
        template: template.trim().split('\n').map(item => `    ${item}`).join('\n'),
        js: scripts.join('\n'),
    };
}

function parseJS(js) {
    return {
        defaults: getDefaults(js),
        methods: getMethods(js),
    }; 
}

const delimitersRegExp = /\b([^\s]*?)=\{\{\s+([\s\S]*?)\s+}}/g;
const getRegExp = /self\.get\(['"](.*?)['"]\)/g;
function parseProperty(template, properties, methods) {
    return template.replace(delimitersRegExp, (match, name, value) => {
        console.log(value);
        value = value.replace(getRegExp, (nouse, name) => {
            properties[name] = null;
            return name;
        });
        if (name.substring(0, 3) === 'ev-') {
            name = `@${name.substring(3)}`;
            const matches = value.match(/self\.(\w+)(\.bind\(self, (.*?)\))?/);
            if (matches) {
                if (matches[2]) {
                    if (matches[1] === 'set') {
                        methods.set = `set(key, value) { this[key] = value },`;
                    }
                    value = `${matches[1]}(${matches[3]})`;
                } else {
                    value = matches[1];
                }
            }
        } else if (name === 'v-for') {
            value = `(value, key) in ${value}`;
        } else if (name === 'v-if') {
            // do nothing
        } else if (name === 'v-model') {
            // v-model={{ `show${value}` }}
            if (!/[\.\[]/.test(value)) value = `$data[${value}]`;
            // v-model={{ `show[${key}]` }}
            else value = value.replace(/[\`\$\{\}]/g, '');
        } else {
            name = `:${name}`;
            if (value.substring(0, 5) === 'self.') {
                value = value.substring(5);
            }
        }
        value = value.replace(/self\./, '');
        return `${name}="${value}"`;
    });
}

const interpolationRegExp = /\{\{\s+([\s\S]*?)\s+\}\}/g
function parseInterpolation(template, properties, methods) {
    return template.replace(interpolationRegExp, (match, value) => {
        value = value.replace(new RegExp(getRegExp, 'g'), (match, value) => {
            properties[value] = null;
            return value;
        });
        value = value.replace(/JSON.stringify/, match => {
            methods.stringify = `stringify(data) { return JSON.stringify(data); },`;
            return 'stringify';
        });
        return `{{ ${value} }}`;
    });
}

function parseVModel(template, properties) {
    return template.replace(/v\-model(:(.*?))?=['"]([^"']+)["']/g, (match, nouse, name, value) => {
        if (/\$data/.test(value)) return match;
        properties[value] = null;
        if (!nouse) {
            return match;
        } else {
            return `:${name}.sync="${value}"`;
        } 
    });
}

function parseBlock(template) {
    template = template.replace(/<b:([\w\-]+)(\s+params="(.+)")?/g, (match, name, nouse, params) => {
        return `<template slot="${name}"` + (params ? ` slot-scope="${params}"` : '');
    });

    return template.replace(/<\/b:[\w\-]+>/g, '</template>');
}

const defaultsRegExp = /\n\s{4}defaults\(\) \{\n\s+return ([^;]*?);?\n\s{4}\}/;
function getDefaults(js) {
    const matches = js.match(defaultsRegExp);
    if (matches) {
        let data;
        console.log(matches[1]);
        eval(`data = ${matches[1]}`);
        return data; 
    }
}

function getMethods(js) {
    const methods = {};
    let start = 0;
    let name;
    const lines = js.split('\n');
    let spaces = '';
    lines.forEach((code, index) => {
        const matches = code.match(/^(\s*)((?:async )?\w+)\(.*?\) {$/);
        if (matches) {
            start = index;
            name = matches[2];
            spaces = matches[1];
        } else if (code === `${spaces}}`) {
            if (name === 'defaults' || name === '_init') return;
            let codes = lines.slice(start, index + 1);
            if (spaces) {
                codes = dedent(codes);
            }
            methods[name] = codes.join('\n')
                .replace(
                    /this\.set\((['"])?([\d\w]+)["']?,\s*([^\)]+)\)/g,
                    (nouse, quote, name, value) => {
                        if (quote) {
                            return `this.${name} = ${value}`;
                        } else {
                            return `this[${name}] = ${value}`;
                        }
                    }
                )
                .replace(/this\.refs/g, 'this.$refs')
                .replace(
                    /this\.get\((['"])?([\d\w]+)["']?\)/g,
                    (nouse, quote, name) => {
                        if (quote) {
                            return `this.${name}`;
                        } else {
                            return `this[${name}]`;
                        }
                    }
                ) + ','; 
        }
    });
    return methods;
}

function indent(scripts, number = 1) {
    if (typeof scripts === 'string') {
        scripts = scripts.split('\n');
    }
    return scripts.map(item => {
        return '    '.repeat(number) + item;
    });
}

function dedent(scripts, number = 1) {
    if (typeof scripts === 'string') {
        scripts = scripts.split('\n');
    }
    return scripts.map(item => {
        return item.substring(4 * number);
    });
}
