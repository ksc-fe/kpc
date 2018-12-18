const Intact = require('intact');
const Vdt = Intact.Vdt;

module.exports = function(vdt, js, vueScript) {
    // console.log(vdt, js, vueScript);
    const obj = parse(vdt, js, vueScript);
    const result = [
        `<template>`,
        obj.body,
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
function parse(vdt, js, vueScript) {
    const components = [];
    let properties = {};
    let methods = [];
    let head = '';
    let body = vdt.replace(importRegExp, (match, name) => {
        components.push(name);
        head += match + '\n';
        return '';
    });
    body = parseProperty(body, properties);
    body = parseVModel(body, properties);
    body = parseInterpolation(body, properties, methods);
    body = parseBlock(body);

    let scripts = [
        `components: {`,
        `    ${components.join(', ')}`,
        `},`,
    ];

    let methodsObj = {};
    if (js) {
        const {defaults, methods} = parseJS(js);
        if (defaults) {
            properties = {...properties, ...defaults};
        }
        methodsObj = methods;
    }
    if (vueScript) {
        const methods = getMethods(vueScript);
        Object.assign(methodsObj, methods);
    }
    methods = [...methods, ...(Object.values(methodsObj).map(value => {
        return value.map((item, i) => i ? `    ${item}` : item).join('\n');
    }))];
    if (Object.keys(properties).length) {
        scripts = [
            ...scripts,
            `data() {`,
            `    return ${JSON.stringify(properties, null, 4)
                .split('\n')
                .map((item, i) => i ? `        ${item}` : item)
                .join('\n')}`,
            `},`
        ];
    }
    if (methods.length) {
        scripts = [
            ...scripts,
            `methods: {`,
            methods.join(',\n'),
            `}`
        ]; 
    }

    return {
        head, 
        body: body.trim().split('\n').map(item => `    ${item}`).join('\n'),
        js: scripts.map(item => `    ${item}`).join('\n'),
    };
}

function parseJS(js) {
    return {
        defaults: getDefaults(js),
        methods: getMethods(js),
    }; 
}

const delimitersRegExp = /\b([^\s]*?)=\{\{\s+(.*?)\s+}}/g;
const getRegExp = /self\.get\(['"](.+)['"]\)/;
function parseProperty(template, properties) {
    return template.replace(delimitersRegExp, (match, name, value) => {
        const matches = value.match(getRegExp);
        if (matches) {
            value = matches[1];
            properties[value] = null;
        }
        if (name.substring(0, 3) === 'ev-') {
            name = `@${name.substring(3)}`;
            const matches = value.match(/self\.(\w+)(\.bind\(self, (.+)\))?/);
            if (matches) {
                if (matches[2]) {
                    value = `${matches[1]}(${matches[3]})`;
                } else {
                    value = matches[1];
                }
            }
        } else if (name === 'v-for') {
            value = `(value, key) in ${value}`;
        } else if (name === 'v-if') {
            // do nothing
        } else {
            name = `:${name}`;
            if (value.substring(0, 5) === 'self.') {
                value = value.substring(5);
            }
        }
        return `${name}="${value}"`;
    });
}

const interpolationRegExp = /\{\{\s+(.+)\s+\}\}/g
function parseInterpolation(template, properties, methods) {
    return template.replace(interpolationRegExp, (match, value) => {
        value = value.replace(new RegExp(getRegExp, 'g'), (match, value) => {
            properties[value] = null;
            return value;
        });
        value = value.replace(/JSON.stringify/, match => {
            methods.push(`    stringify(data) { return JSON.stringify(data); }`);
            return 'stringify';
        });
        return `{{ ${value} }}`;
    });
}

function parseVModel(template, properties) {
    return template.replace(/v\-model(:(.+))?=['"](.+)["']/, (match, nouse, name, value) => {
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

const defaultsRegExp = /\n\s{4}defaults\(\) \{\n\s+return ([^;]+);?\n\s{4}\}/;
function getDefaults(js) {
    const matches = js.match(defaultsRegExp);
    if (matches) {
        let data;
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
        const matches = code.match(/^(\s*)(\w+)\(.*?\) {$/);
        if (matches) {
            start = index;
            name = matches[2];
            spaces = matches[1];
        } else if (code === `${spaces}}`) {
            if (name === 'defaults') return;
            let codes = lines.slice(start, index + 1);
            if (!spaces) {
                codes = codes.map(item => `    ${item}`);
            }
            methods[name] = codes; 
        }
    });
    return methods;
}
