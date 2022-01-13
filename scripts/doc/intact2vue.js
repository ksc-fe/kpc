// const Intact = require('intact');
// const Vdt = Intact.Vdt;
const {indent, dedent, getDefaults} = require('./utils');
const {memoize} = require('../utils');

exports.toVue2 = function(...args) {
    return parseToVue2(start(...args, 2));
}

exports.toVue3 = function(...args) {
    return parseToVue3(start(...args, 3));
}

function parseToVue2(template) {
    template = template.replace(/<b:([\w\-]+)(\s+params="(.+)")?/g, (match, name, nouse, params) => {
        return `<template slot="${name}"` + (params ? ` slot-scope="${params}"` : '');
    });

    return template.replace(/<\/b:[\w\-]+>/g, '</template>');
}

function parseToVue3(template) {
    template = template
        .replace(/<b:([\w\-]+)(\s+params="(.+)")?/g, (match, name, nouse, params) => {
            return `<template v-slot:${name}${params ? `="${params}"` : ''}`;
        })
        .replace(/kpc-vue/g, 'kpc-vue-next');

    return template.replace(/<\/b:[\w\-]+>/g, '</template>');
}

function start(vdt, js, vueScript, vueTemplate, vueMethods, vueData, jsHead, hasStylus, version) {
    // console.log(vdt, js, vueScript);
    const obj = parse(vdt, js, vueScript, vueTemplate, vueMethods, vueData);
    const isVue3 = version === 3;
    const result = [
        `<template>`,
        obj.template,
        `</template>`,
    ];
    if (isVue3) {
        result.push(
            `<script lang="ts">`,
            `import {defineComponent} from 'kpc-vue/node_modules/vue';`,
            obj.head + (jsHead ? '\n' + jsHead + '\n' : ''),
            `export default defineComponent({`,
            obj.js,
            `});`,
            `</script>`
        );
    } else {
        result.push(
            `<script lang="ts">`,
            `import Vue from 'vue'`,
            obj.head + (jsHead ? '\n' + jsHead + '\n' : ''),
            `export default Vue.extend({`,
            obj.js,
            `});`,
            `</script>`,
        );
    }
    if (hasStylus) {
        result.push('<style lang="stylus" src="./index.styl"></style>');
    }

    return result.join('\n');
};

const importRegExp = /import \{?([\s\S]*?)\}? from .*/g
const parse = memoize(function(vdt, js, vueScript, vueTemplate, vueMethods, vueData) {
    const components = [];
    let properties = {};
    let methods = {};
    let head = '';
    let template = vdt.replace(importRegExp, (match, name) => {
        name = name.split(',').map(item => {
            item = item.trim();
            return item === 'Switch' ? 'KSwitch' : item;
        }).filter(Boolean);
        components.push(...name);
        head += match.replace('Switch', 'Switch as KSwitch').replace('kpc', 'kpc-vue') + '\n';
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
        // template = parseBlock(template);
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
            let line = lines[i];
            if (line.startsWith('import')) {
                const matches = line.match(/(import (?:type )?)\{?(.*?)\}? from (.*)/);
                if (matches) {
                    const variables = matches[2];
                    // ignore bind, it is unnecessary in Vue
                    if (variables === 'bind') continue;

                    const names = variables.split(', ').map(item => {
                        return item === 'Switch' ? 'KSwitch' : item;
                    }).filter(name => {
                        return components.indexOf(name) === -1 && name !== 'bind';
                    });
                    if (!names.length) continue;

                    line = `${matches[1]}{${names.join(', ')}} from ${matches[3]}`;
                    line = line.replace('kpc', 'kpc-vue');
                }
            }
            if (line.startsWith('export default')) {
                js = lines.slice(i).join('\n');
                break;
            }
            _head.push(line);
        }
        head += _head.join('\n');

        let {defaults, methods} = parseJS(js, vueData);
        let data;
        try {
            eval(`data = ${defaults}`);
        } catch (e) {
        }
        if (data) {
            for (let key in properties) {
                if (key in data) {
                    delete properties[key];
                }
            }
        }
        const extra = Object.keys(properties).map(key => {
            return indent(`${key}: null,`);
        });
        if (defaults) {
            const lines = defaults.split('\n');
            const lastLine = lines.pop();
            lines.push(...extra, lastLine);
            defaults = lines.join('\n');
        } else if (extra.length) {
            defaults = [`{`, ...extra, `}`].join('\n');
        }

        methodsObj = methods;
        js.replace(importRegExp, (match, name) => {
            if (components.indexOf(name) > -1) return;
            if (name === 'Intact' || name === 'template') return;
            head += match + '\n'
        });

        if (defaults && !vueData) {
            scripts = [
                ...scripts,
                ...indent([
                    `data() {`,
                    ...indent(`return ${defaults};`),
                    `},`
                ]),
            ];
        }
    }
    if (vueMethods) {
        const methods = getMethods(vueMethods);
        Object.assign(methodsObj, methods);
    }
    methods = [...Object.values(methods), ...Object.values(methodsObj)];
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
}, function(vdt, js, vueScript, vueTemplate) {
    return vdt + vueTemplate;
});

function parseJS(js, vueData) {
    return {
        defaults: vueData ? null : getDefaults(js),
        methods: getMethods(js),
    };
}

const delimitersRegExp = /\b([^\s]*?)=\{\s*([\s\S]*?)\s*}/g;
const getRegExp = /this\.get\(['"](.*?)['"]\)/g;
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
            const matches = value.match(/this\.(\w+)(\.bind\(this, (.*?)\))?/);
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
            value = `($value, $key) in ${value}`;
        } else if (name === 'v-if' || name === 'v-else-if') {
            // do nothing
        } else if (name === 'v-model') {
            // v-model={{ `show${value}` }}
            if (!/[\.\[]/.test(value)) value = `$data[${value}]`;
            // v-model={{ `show[${key}]` }}
            else value = value.replace(/[\`\$\{\}]/g, '');
        } else {
            name = `:${name}`;
            if (value.substring(0, 5) === 'this.') {
                value = value.substring(5);
            }
        }
        value = value.replace(/this\./, '').replace(/\\/g, '\\\\');
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
        if (/^\w+$/.test(value)) {
            properties[value] = null;
        }
        if (!nouse) {
            return match;
        } else {
            return `:${name}.sync="${value}"`;
        }
    });
}

function getMethods(js) {
    const methods = {};
    let start = 0;
    let name;
    const lines = js.split('\n');
    let spaces = '';
    let isBound = false;
    lines.forEach((code, index) => {
        const matches = code.match(/^(\s*)(?:(?:get|set|async|static) )?(\w+)\(.*?\) {$/);
        if (matches) {
            start = index;
            name = matches[2];
            spaces = matches[1];
        } else if (code === `${spaces}}`) {
            if (!name || name === 'defaults') return;
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
