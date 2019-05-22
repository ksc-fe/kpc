const Intact = require('intact');
const Vdt = Intact.Vdt;
const {indent, dedent, getDefaults} = require('./utils');

module.exports = function(vdt, js, vueScript, vueTemplate, vueMethods, vueData, jsHead) {
    // console.log(vdt, js, vueScript);
    const obj = parse(vdt, js, vueScript, vueTemplate, vueMethods, vueData);
    const result = [
        `<template>`,
        obj.template,
        `</template>`,
        `<script>`,
        obj.head + (jsHead ? '\n' + jsHead + '\n' : ''),
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
    }).replace(/<(\/)?Switch/g, '<$1KSwitch');
    if (vueTemplate) {
        template = vueTemplate;
    } else {
        const matchElement = /\n<\w+/.exec(template);
        if (matchElement) {
            template = template.substring(matchElement.index);
        }

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
        const lines = js.split('\n');
        const _head = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith('import')) {
                const matches = line.match(/import \{?(.*?)\}? from .*/);
                const names = matches[1].split(', ').map(item => item === 'Switch' ? 'KSwitch' : item)
                if (names.find(name => components.indexOf(name) > -1)) continue;
            }
            if (line.startsWith('export default')) {
                js = lines.slice(i).join('\n');
                break;
            }
            _head.push(line);
        }
        head += _head.join('\n');
        
        const {defaults, methods} = parseJS(js, vueData);
        if (defaults) {
            properties = {...properties, ...defaults};
        }
        methodsObj = methods;
        js.replace(importRegExp, (match, name) => {
            if (components.indexOf(name) > -1) return;
            if (name === 'Intact' || name === 'template') return;
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

function parseJS(js, vueData) {
    return {
        defaults: vueData ? {} : getDefaults(js),
        methods: getMethods(js),
    }; 
}

const delimitersRegExp = /\b([^\s]*?)=\{\{\s+([\s\S]*?)\s+}}/g;
const getRegExp = /self\.get\(['"](.*?)['"]\)/g;
function parseProperty(template, properties, methods) {
    // specical for Editable validate string
    template = template.replace('"\\d+"', '"\\\\d+"');
    return template.replace(delimitersRegExp, (match, name, value) => {
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
        } else if (name === 'v-if' || name === 'v-else-if') {
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
        value = value.replace(/self\./, '').replace(/\\/g, '\\\\');
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
                ) 
                .replace(
                    /this\.set\((['"])?([\d\w]+)["']?,\s*(.*?)\)/g,
                    (nouse, quote, name, value, semiconlon) => {
                        let ret;
                        if (quote) {
                            ret = `this.${name} = ${value}`;
                        } else {
                            ret = `this[${name}] = ${value}`;
                        }
                        return ret;
                    }
                ) + ',';
        }
    });
    return methods;
}
