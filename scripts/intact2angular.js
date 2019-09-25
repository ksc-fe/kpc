const {indent, dedent, getDefaults} = require('./utils');

module.exports = (vdt, js, angularMethods, angularProperties, hasStylus) => {
    const obj = parse(vdt, js, angularMethods);
    const refs = Object.keys(obj.refs);
    let result = [
        `import {Component${refs.length ? ', ViewChild' : ''}} from '@angular/core';`,
        obj.head,
        ``,
        `@Component({`,
            ...indent([
                `selector: 'app-demo',`,
                `template: \``,
                    ...indent(obj.template),
                `\`,`,
                hasStylus ? `styleUrls: ['./index.styl'],` : undefined,
            ]),
        `})`,
        `export class AppDemoComponent {`,
    ].filter(item => item !== undefined);

    const classBody = [
        ...indent(refs.map(ref => {
            return `@ViewChild('${ref}', {static: false}) ${ref};`;
        })),
        refs.length && (angularProperties || obj.defaults || obj.methods) ? `` : undefined,
        ...indent(angularProperties || (obj.defaults ? Object.keys(obj.defaults).map(key => {
            const value = obj.defaults[key];
            if (value === undefined) return indent(`private ${key};`);
            return indent(`private ${key} = ${value && value.exp ? value.exp : JSON.stringify(value, null, 4)};`);
        }) : undefined), angularProperties ? 1 : 0),
        (angularProperties || obj.defaults) && obj.methods ? `` : undefined,
        ...indent(obj.methods),
    ].filter(item => item !== undefined);

    if (classBody.length) {
        result = [...result, ...classBody, '}'];
    } else {
        result[result.length - 1] += ` }`;
    }

    return result.join('\n');
};

const importRegExp = /import \{?(.*?)\}? from .*/g
function parse(template, js, angularMethods) {
    // remove import
    const matchElement = /\n<\w+/.exec(template);
    if (matchElement) {
        template = template.substring(matchElement.index + 1);
    }

    // replace component name
    template = template.replace(/(<\/?)([A-Z])(\w+)/g, (match, start, head, tail) => {
        tail = tail.replace(/[A-Z]/g, (match) => `-` + match.toLowerCase());
        return `${start}k-${head.toLowerCase()}${tail}`;
    });

    const properties = {};
    const methodsObj = {};
    const imports = {};
    const eventCallbacks = {};
    template = parseProperty(template, properties, methodsObj, eventCallbacks);
    template = parseBooleanProperty(template);
    const refs = {};
    template = parseRef(template, refs);
    template = parseBlock(template);
    template = parseVModel(template, properties);
    template = parseInterpolation(template, properties);
    template = parseTemplate(template);
    template = parseVIf(template);
    template = parseSelfClosedTag(template);
    // special for CarouselIem
    template = parseSpecial(template, properties, imports);

    let {head, methods, defaults} = parseJS(js, refs, angularMethods, methodsObj, eventCallbacks); 
    defaults = {...properties, ...defaults};

    Object.keys(imports).forEach(key => {
        head = (head ? head + '\n' : '') + imports[key];
    });

    Object.assign(methodsObj, methods);
    methods = Object.values(methodsObj).join('\n\n');

    return {template, head, methods, refs, defaults: Object.keys(defaults).length ? defaults: null};
}

const delimitersRegExp = /\b([^\s]*?)=\{\{\s+([\s\S]*?)\s+}}/g;
const getRegExp = /self\.get\(['"](.*?)['"]\)/g;
function parseProperty(template, properties, methods, eventCallbacks) {
      template = template
        .replace(/`([^`]+)`/g, (match, expression, index) => {
            const name = `'` + expression.replace(/\${(.+)}/g, (nouse, variable) => {
                return `' + ${variable} + '`;
            }) + `'`;
            if (template[index + match.length] === ',') {
                return name;
            } else {
                return `this[${name}]`;
            }
        })
        .replace(getRegExp, (nouse, name) => {
            properties[name] = undefined;
            return name
        });

        return template.replace(delimitersRegExp, (match, name, value, index) => {
            if (name.substring(0, 3) === 'ev-') {
                // event
                name = name.replace(':', '-');
                name = `(${name.substring(3)})`;
                const matches = value.match(/self\.(\w+)(\.bind\(self, (.*?)\))?/);
                if (matches) {
                    if (matches[2]) {
                        if (matches[1] === 'set') {
                            methods.set = `set(key, value) { this[key] = value; }`;
                        }
                        value = `${matches[1]}(${matches[3]})`;
                    } else {
                        value = `${matches[1]}($event)`;
                        // detect if it is html element
                        while (--index) {
                            if (template[index] === '<' && template[index + 1] !== ' ') {
                                if (/[A-Z]/.test(template[index + 1])) {
                                    eventCallbacks[matches[1]] = true;
                                }
                                break;
                            }
                        }
                    }
                }
            } else if (name === 'class') {
                name = '[ngClass]';
            } else if (name === 'v-for') {
                name = `*ngFor`;
                value = `let value of ${value}; index as key`;
            } else if (name === 'v-if' || name === 'v-else-if') {
                // name = `*ngIf`;
            } else if (name === 'v-model') {
                // name = `[(value)]`;
            } else {
                name = `[${name}]`;
                if (value.substring(0, 5) === 'self.') {
                    value = value.substring(5);
                }
            }

            return `${name}="${value}"`;
        });
}

function parseBooleanProperty(template) {
    return template.replace(/(<[\w\-]+)( [^>]+>)/g, (nouse, start, properties) => {
        return start + properties.replace(/ \b(\w+)(?=[> \/\n])\b/g, (whole, name, index) => {
            // is not in quotes
            for (let i = index; i >= 0; i--) {
                const char = properties[i];
                if (char === '"') {
                    if (properties[i - 1] === '=') {
                        return whole;
                    }
                    break;
                }
            }
            return ` [${name}]="true"`;
        });
    });
}

function parseRef(template, refs) {
    return template.replace(/ ref=['"]([^"']+)["']/g, (match, ref, index) => {
        // detect if this ref is in element
        let isElement = false;
        for (let i = index; i >= 0; i--) {
            const char = template[i];
            if (char === '<') {
                let end = i + 1;
                while (end <= index) {
                    if (!/[\w\-]/.test(template[end])) {
                        break;
                    }
                    end++;
                }
                const tag = template.slice(i, end);
                isElement = tag.indexOf('-') < 0;
                break;
            }
        }
        refs[ref] = isElement;
        return ` #${ref}`;
    });
}

function parseBlock(template) {
    return template.replace(/<b:([\w\-]+)(\s+params="(.+)")?/g, (match, name, nouse, params) => {
        let scopes = [];
        if (params) {
            params.split(',').forEach((param, index) => {
                param = param.trim();
                scopes.push(`let-${param}="args[${index}]"`);
            });
        }
        return `<ng-template #${name.replace(/-/g, '_')}` + (scopes.length ? ` ${scopes.join(' ')}` : '');
    }).replace(/<\/b:[\w\-]+>/g, '</ng-template>');;
}

function parseVModel(template, properties) {
    return template.replace(/v\-model(:(.*?))?="([^"]+)"/g, (match, nouse, name, value) => {
        if (/^\w+$/.test(value)) {
            properties[value] = undefined;
        }
        if (!name) name = 'value';
        return `[(${name})]="${value}"`;
    });
}

const interpolationRegExp = /\{\{\s+([\s\S]*?)\s+\}\}/g
function parseInterpolation(template, properties) {
    return template.replace(interpolationRegExp, (match, value) => {
        value = value.replace(new RegExp(getRegExp, 'g'), (match, value) => {
            properties[value] = undefined;
            return value;
        });
        value = value.replace(/JSON.stringify\((.*?)\)/, (nouse, value) => {
            return `${value} | json`;
        });
        return `{{ ${value} }}`;
    });
}

function parseTemplate(template) {
    return template.replace(/(<|<\/)template/g, '$1ng-container');
}

const vIfRegExp = / v-if="([\s\S]*?)"/;
const vElseIfRegExp = / v-else-if="([\s\S]*?)"/;
const vElseRegExp = / v-else/;
function parseVIf(template) {
    const lines = template.split('\n');
    const stacks = [];

    for (let index = 0; index < lines.length; index++) {
        let code = lines[index];

        let matches;
        const last = stacks[stacks.length - 1];

        const getMeta = (regexp) => {
            let startCode = code;
            let _matches;
            let backLines = 0;
            while (!(_matches = startCode.match(/^(\s+)</))) {
                backLines++;
                startCode = lines[index - backLines];
            }

            return {spaces: _matches[1], value: matches[1]};
        };

        if (matches = code.match(vIfRegExp)) {
            const {spaces, value} = getMeta(vIfRegExp);
            lines[index] = code.replace(vIfRegExp, () => {
                return ` *ngIf="${value}"`;
            }); 
            stacks.push({
                conditions: [`(${value})`],
                spaces,
            });
        } else if (matches = code.match(vElseIfRegExp)) {
            const value = matches[1];
            last.conditions.push(`(${value})`);
            lines[index] = code.replace(vElseIfRegExp, () => {
                return ` *ngIf="${value}"`;
            });
        } else if (matches = code.match(vElseRegExp)) {
            lines[index] = code.replace(vElseRegExp, () => {
                return ` *ngIf="!(${last.conditions.join(' && ')})"`;
            });

            stacks.pop();
        } else if (last) {
            const matches = code.match(/^(\s+)</);
            if (matches) {
                const spaces = matches[1];
                if (last.spaces.length > spaces.length) {
                    stacks.pop();
                }
            }
        }
    }

    return lines.join('\n');
}

function parseSelfClosedTag(template) {
    return template.replace(/<(k-\w+)(((?!<\w+)[\s\S])*)\/>/g, (nouse, tag, attrs) => {
        if (!/\n/.test(attrs)) attrs = attrs.trimRight();
        return `<${tag}${attrs}></${tag}>`;
    });
}

function parseSpecial(template, properties, imports) {
    return template
        .replace(/(<k-carousel-item.*?>)(.*?)(<\/k-carousel-item>)/g, (nouse, start, children, end) => {
            return `${start}<ng-template #children>${children}</ng-template>${end}`;
        })
        .replace(/new Date\(\)/g, () => {
            properties.now = {
                exp: 'new Date()',
            };
            return 'now';
        })
        .replace(/Datepicker/, (match) => {
            properties.Datepicker = {
                exp: 'Datepicker'
            };
            imports.Datepicker = `import {Datepicker} from 'kpc/components/datepicker';`;
            return match;
        });
}


function parseJS(js, refs, angularMethods, methodsObj, eventCallbacks) {
    if (!js) return {}; 

    js = js.trim();
    const lines = js.split('\n');
    const _head = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('export default')) {
            js = lines.slice(i).join('\n');
            break;
        }
        _head.push(line);
    }
    let head = _head.join('\n') || undefined;
    if (head) {
        head = '\n' + head;
    }

    const defaults = getDefaults(js);
    const methods = getMethods(js, refs, methodsObj, eventCallbacks);

    if (angularMethods) {
        const extraMethods = getMethods(angularMethods, refs);
        Object.assign(methods, extraMethods);
    }


    return {head, methods, defaults};
}

const functionNameRegExp = /^(\s*)(?:(get|set|async) )?(\w+)\((.*?)\) {$/;
function getMethods(js, refs, methodsObj, eventCallbacks) {
    const methods = {};
    let start = 0;
    let name;
    const lines = js.split('\n');
    let spaces = '';
    let entered = false;
    lines.forEach((code, index) => {
        if (!entered && !code) return;
        const matches = code.match(functionNameRegExp);
        if (matches) {
            entered = true;
            start = index;
            name = matches[3];
            spaces = matches[1];
            // bind this
            lines[index] = code.replace(functionNameRegExp, (match, spaces, keywords, name, params) => {
                if (eventCallbacks && eventCallbacks[name]) {
                    params = `[${params}]`;
                }
                if (keywords !== 'async') return `${spaces}${keywords || ''}${name}(${params}) {`;
                return `${spaces}${name} = ${keywords ? 'async ' : ''}(${params}) => {`;
            });
        } else if (code === `${spaces}}`) {
            entered = false;
            if (['defaults', '_init'].indexOf(name) > -1) return;
            let codes = lines.slice(start, index + 1);
            if (spaces) {
                codes = dedent(codes);
            }
            methods[name] = codes.join('\n')
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
                )
                .replace(
                    /this\.refs\.(\w+)/g,
                    (nouse, name) => {
                        if (refs[name]) {
                            return `this.${name}.nativeElement`;
                        } else {
                            return `this.${name}`;
                        }
                    }
                )
                .replace(/this\.set/, (match) => {
                    // if there is `this.set`, we need add set method
                    if (methodsObj) {
                        methodsObj.set = [
                            `// helper function`,
                            `set(obj) { Object.keys(obj).forEach(key => this[key] = obj[key]); }`,
                        ].join('\n');
                    }
                    return match;
                });
        }
    });

    return methods;
}
