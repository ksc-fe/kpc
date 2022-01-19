const {indent, dedent, getDefaults} = require('./utils');

module.exports = function(vdt, js, reactMethods, jsHead, hasStylus) {
    const properties = {state: false, interface: false, refs: false};
    const obj = parse(vdt, js, reactMethods, hasStylus, properties);
    const result = [
        `import React from 'react';`,
        obj.head.trim(),
        '',
        jsHead,
        `export default class Demo extends React.Component${properties.interface ? '<{}, Props>' : ''} {`,
        obj.js,
        '}',
    ].filter(item => item !== undefined);

    return result.join('\n');
}

const importRegExp = /import \{?([\s\S]*?)\}? from .*/g
function parse(vdt, js, reactMethods, hasStylus, properties) {
    const components = [];
    let head = '';
    let template = vdt.replace(importRegExp, (match, name) => {
        components.push(...(name.split(',').map(item => item.trim())).filter(Boolean));
        head += match.replace('kpc', 'kpc-react') + '\n';
        return '';
    });

    let methodsObj = {};

    template = template.replace(/class=/g, 'className=');
    const matchElement = /\n<\w+/.exec(template);
    let templateJsCode;
    if (matchElement) {
        templateJsCode = template.substring(0, matchElement.index).trim();
        templateJsCode = parseInterpolation(templateJsCode, properties);
        templateJsCode = parseGet(templateJsCode, properties);
        templateJsCode = parseTemplate(templateJsCode);
        template = template.substring(matchElement.index);
    }

    template = parseVFor(template);
    template = parseVIf(template);
    template = parseProperty(template, properties, methodsObj);
    template = parseVModel(template, properties, methodsObj);
    template = parseRef(template, properties);
    template = parseInterpolation(template, properties);
    template = parseBlock(template);
    template = parseStyle(template);
    template = parseTemplate(template);

    let scripts = [];

    if (js) {
        const lines = js.split('\n');
        const _head = [];
        let hasAdded = false;
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line.startsWith('import')) {
                const matches = line.match(/(import (?:type )?)(\{?)(.*?)\}? from (.*)/);
                if (matches) {
                    const variables = matches[3];
                    const names = variables.split(',')
                        .map(item => item.trim())
                        .filter(name => {
                            return components.indexOf(name) === -1;
                        });
                    if (!names.length) continue;

                    line = `${matches[1]}${matches[2] ? '{' : ''}${names.join(', ')}${matches[2] ? '}' : ''} from ${matches[4]}`;
                    line = line.replace('kpc', 'kpc-react');
                }
            } else if (!hasAdded && hasStylus) {
                head += `import './index.styl';`;
                hasAdded = true;
            }
            if (line.startsWith('export default')) {
                js = lines.slice(i).join('\n');
                break;
            } else if (line.startsWith('interface')) {
                properties.interface = true;
            }

            _head.push(line);
        }

        head += _head.join('\n');

        const defaults = getDefaults(js);
        if (defaults) {
            properties.state = defaults;
        }
        Object.assign(methodsObj, getMethods(js));
    } else if (hasStylus) {
        head += `import './index.styl';`;
    }

    if (reactMethods) {
        const methods = getMethods(reactMethods);
        Object.assign(methodsObj, methods);
    }

    if (properties.state) {
        scripts.push(
            // ...indent(`public state = ${JSON.stringify(properties.state, null, 4)};\n`),
            ...indent(`public state = ${properties.state};\n`),
        );
    }

    if (properties.refs) {
        scripts.push(
            ...properties.refs.map(ref => {
                return `    private ${ref}: any;\n`;
            })
        );
    }

    if (methodsObj.$constructor) {
        scripts.push(...indent(methodsObj.$constructor));
        delete methodsObj.$constructor;
    }

    const methods = Object.values(methodsObj);
    if (methods.length) {
        scripts.push(...indent(methods.join('\n')));
    }

    if (!methodsObj.render) {
        let render = [
            'render() {',
        ];
        if (templateJsCode) {
            render.push(indent(templateJsCode), '');
        }
        scripts.push(
            ...indent([
                ...render,
                '    return (',
                ...indent(template.trim(), 2),
                '    )',
                '}',
            ]),
        );
    }

    return {
        head,
        js: scripts.join('\n'),
    }
}

const delimitersRegExp = /\b([^\s]*?)=\{\s*([\s\S]*?)\s*(\})?\}(?!`)/g;
function parseProperty(template, properties, methods) {
    // specical for Editable validate string
    template = template.replace('"\\d+"', '"\\\\d+"');
    return template.replace(delimitersRegExp, (match, name, value, isObject) => {
        if (isObject) value += isObject;
        value = parseGet(value, properties);
        if (name.substring(0, 3) === 'ev-') {
            if (name === 'ev-contextmenu') {
                name = 'onContextMenu';
            } else {
                let type = name.substring(3);
                if (type.startsWith('$change')) {
                    type = `Change` + upperFirst(type.substring(`$change-`.length));
                } else {
                    type = upperFirst(type);
                }
                name = `on${type.replace(':', '-')}`;
            }
            const matches = value.match(/this\.(\w+)(\.bind\(this, (.*?)\))?/);
            if (matches) {
                if (matches[2]) {
                    if (matches[1] === 'set') {
                        addSet(methods);
                    }
                    // value = `${matches[1]}(${matches[3]})`;
                    value = `this.${matches[1]}.bind(this, ${matches[3]})`;
                } else {
                    // value = `this.${matches[1]}`;
                }
            }
        } else if (name === 'v-model') {
            // properties.state = '{}';
            // if (value === "`descriptions[${key}]`") {
                // methods._onChangeValue = [
                    // `_onChangeValue(index, c, v) {`,
                    // ...indent([
                        // `const descriptions = this.state.descriptions.slice(0);`,
                        // `descriptions[index] = v;`,
                        // `this.setState({descriptions});`
                    // ]),
                    // `}`,
                    // '',
                // ].join('\n');
                // return `value={this.state.descriptions[key]} on$change-value={this._onChangeValue.bind(this, key)}`;
            // }
            addSet(methods);
            return `value={this.state[${value}]} onChangeValue={this.set.bind(this, ${value})}`;
        } else if (name === 'className') {
            methods.classNames = [
                `private classNames(classNames: Record<string, any> | string) {`,
                ...indent([
                    `if (typeof classNames === 'string') return classNames;`,
                    `const ret = [];`,
                    `for (let key in classNames) {`,
                    ...indent([
                        `const value = classNames[key];`,
                        `if (value) {`,
                        ...indent([
                            `ret.push(key);`,
                        ]),
                        `}`,
                    ]),
                    `}`,
                    `return ret.join(' ');`
                ]),
                `}`,
                ``
            ].join('\n');
            value = `this.classNames(${value})`;
        } else {
            value = value.replace(/this/g, 'this');
        }

        return `${name}={${value}}`;
    });
}

function parseStyle(template) {
    return template.replace(/style=['"]([^"']+)['"]/g, (match, value) => {
        return `style={${JSON.stringify(stringStyleToObject(value))}}`;
    });
}

function parseVModel(template, properties, methods) {
    const lines = template.split('\n');
    const results = [];
    for (let index = 0; index < lines.length; index++) {
        const code = lines[index].replace(/^(\s*)(.*?)v\-model(:(.*?))?=['"]([^"']+)["'](\s*\S*)?/g, (match, spaces, start, nouse, name, value, isEnd) => {
            if (!nouse) {
                name = 'value';
            }
            properties.state = '{}';
            const matches = value.match(/(\w+)\.(.*)/);
            let valueStr = `${name}={this.state.${value}}`;
            let changeStr = `onChange${upperFirst(name)}={${value} => this.setState({${value}})}`;
            if (matches) {
                const name = `onChange${upperFirst(matches[1])}`;
                methods[name] = [
                    `${name}(key: string, value: any) {`,
                    ...indent([
                        `this.setState({`,
                        ...indent([
                            `${matches[1]}: {`,
                            `    ...this.state.${matches[1]},`,
                            `    [key]: value`,
                            `}`,
                        ]),
                        `})`,
                    ]),
                    `}`,
                    '',
                ].join('\n')
                valueStr = `value={this.state.${value}}`;
                changeStr = `onChangeValue={this.${name}.bind(this, '${matches[2]}')}`;
            }
            valueStr = `${spaces}${start}${valueStr}`;
            changeStr = `${changeStr}${isEnd || ''}`;
            if (!isEnd || !isEnd.trim()) {
                return valueStr + '\n' + (start ? '    ' : '') + spaces + changeStr;
            }
            return valueStr + ' ' + changeStr;
        });
        results.push(code);
    }
    return results.join('\n');
}

function parseRef(template, properties) {
    return template.replace(/ ref=['"]([^"']+)["']/g, (match, ref) => {
        if (!properties.refs) properties.refs = [];
        properties.refs.push(ref);
        return ` ref={i => this.${ref} = i}`;
    });
}

function parseBlock(template) {
    const lines = template.split('\n');
    const stacks = [];
    let results = [];
    const resultsStacks = [];

    for (let index = 0; index < lines.length; index++) {
        let code = lines[index];
        const last = stacks[stacks.length - 1];
        const matches = code.match(/^(\s*)<([A-Z]\w+)/);
        if (matches) {
            const spaces = matches[1];
            const isClosed = new RegExp(`^${spaces}(\\S.*)?(</\\w+>|/>)`).test(code);
            if (!isClosed) {
                resultsStacks.push(results);
                results = [];
                stacks.push({
                    name: matches[2],
                    spaces,
                    blocks: [],
                    results,
                });
            }
        } else if (last) {
            const {spaces: compponentSpaces, blocks} = last;
            const lastBlock = blocks[blocks.length - 1];
            const spaces = compponentSpaces + '    ';
            const startBlockRegExp = new RegExp(`^${spaces}<b:([\\w\\-]+)(\\s+args="(.+)")?\\s*(/)?>`);
            const matches = code.match(startBlockRegExp);
            if (matches) {
                resultsStacks.push(results);
                results = [];
                const block = {
                    name: matches[1],
                    params: matches[3],
                    codes: results,
                    hasEnd: false,
                    spaces,
                };
                blocks.push(block);

                const endBlockRegExp = new RegExp(`</b:${block.name}>`);
                if (endBlockRegExp.test(code)) {
                    block.codes.push(code.replace(startBlockRegExp, '').replace(endBlockRegExp, ''));
                    block.hasEnd = true;
                    results = resultsStacks.pop();
                } else if (matches[4]) {
                    block.codes.push('');
                    block.hasEnd = true;
                    results = resultsStacks.pop();
                }

                code = undefined;
            } else if (lastBlock && !lastBlock.hasEnd) {
                if (code === `${lastBlock.spaces}</b:${lastBlock.name}>`) {
                    lastBlock.hasEnd = true;
                    results = resultsStacks.pop();
                } else {
                    lastBlock.codes.push(code);
                }

                code = undefined;
            } else if (new RegExp(`^${compponentSpaces}(\\S.*)?(</\\w+>|/>)`).test(code)) {
                if (blocks.length) {
                    const componentCode = results[0].trimRight();
                    const lastChar = componentCode[componentCode.length - 1];
                    const indentCount = compponentSpaces.length / 4 + 1;

                    results[0] = [
                        (lastChar === '>' ? componentCode.slice(0, -1) : componentCode),
                        indent([
                            blocks.map(block => {
                                const codes = block.codes;
                                const name = upperFirst(block.name);
                                if (!block.params) {
                                    if (codes.length === 1) {
                                        return indent(`slot${name}={<React.Fragment>${block.codes[0].trim()}</React.Fragment>}`, indentCount);
                                    } else {
                                        return [
                                            indent(`slot${name}={<React.Fragment>`, indentCount),
                                            block.codes,
                                            indent(`</React.Fragment>}`, indentCount)
                                        ];
                                    }
                                } else {
                                    return [
                                        indent(`slot${name}={(${block.params}) => {`, indentCount),
                                        indent(`    return <React.Fragment>`, indentCount),
                                        indent(block.codes, 1),
                                        indent(`    </React.Fragment>`, indentCount),
                                        indent(`}}`, indentCount),
                                    ];
                                }
                            }),
                            lastChar === '>' ? indent('>', indentCount - 1) : undefined,
                        ], 0)
                    ];
                }
                results.push(code);
                const _results = results;

                function flat(arr) {
                    return arr.reduce((memo, item) => {
                        if (Array.isArray(item)) {
                            memo = memo.concat(flat(item));
                        } else {
                            memo.push(item);
                        }
                        return memo;
                    }, []);
                }

                stacks.pop();
                results = resultsStacks.pop();
                results.push(...(flat(_results)));
                continue;
            }
        }

        if (code !== undefined) {
            results.push(code);
        }
    }
    return results.filter(line => line !== undefined).join('\n');
}

const vForRegExp = / v-for=\{\s*([\s\S]*?)\s*\}/;
const vForValueRegExp = / v-for-value="(\w+)"/;
const vForKeyRegExp = / v-for-key="(\w+)"/;
function parseVFor(template) {
    const lines = template.split('\n');
    const stacks = [];
    const results = [];
    for (let index = 0; index < lines.length; index++) {
        let code = lines[index];
        const matches = code.match(vForRegExp);
        if (matches) {
            let $value = '$value';
            let valueMatches = code.match(vForValueRegExp);
            if (valueMatches) {
                $value = valueMatches[1];
            }
            let $key = '$key';
            let keyMatches = code.match(vForKeyRegExp);
            if (keyMatches) {
                $key = keyMatches[1];
            }

            let backLines = 0;
            let _code = code;
            while (!/^\s*</.test(_code)) {
                backLines++;
                _code = lines[index - backLines];
            }
            if (backLines !== 0) {
                code = undefined;
            }
            stacks.push({
                start: index - backLines,
                value: parseGet(matches[1]),
                $value,
                $key,
            });
        } else if (stacks.length) {
            const last = stacks[stacks.length - 1];
            const startCode = lines[last.start];
            const matches = startCode.match(/(\s*)</);
            const spaces = matches[1];
            const newLineRegExp = new RegExp(`^${spaces}\\S`);
            let tmp;
            if (
                code.substring(0, spaces.length + 2) === `${spaces}</` ||
                code === `${spaces}/>` ||
                newLineRegExp.test(code) &&
                    (lines[index + 1] === undefined ||
                    (tmp = lines[index + 1]) &&
                    (tmp = tmp.match(/^(\s*)\S/)) &&
                    tmp[1].length <= spaces.length)
            ) {
                const indentCount = spaces.length / 4;
                results[last.start] = indent([
                    `{${last.value}.map((${last.$value}, ${last.$key}) => {`,
                    `    return (`,
                ], indentCount);
                results[last.start].push(`        ${startCode.replace(vForRegExp, '')}`);
                for (let i = last.start + 1; i < index; i++) {
                    const code = results[i];
                    if (code !== undefined) {
                        results[i] = indent(code, 2);
                    }
                }
                code = [
                    `        ${code}`,
                    ...indent([
                        `    )`,
                        `})}`
                    ], indentCount)
                ];
                stacks.pop();
            }
        }

        results.push(code);
    }

    return indent(results.filter(line => line !== undefined), 0).join('\n');
}

const vIfRegExp = / v-if=\{\s*([\s\S]*?)\s*\}/;
const vElseIfRegExp = / v-else-if=\{\s*([\s\S]*?)\s*\}/;
const vElseRegExp = / v-else/;
function parseVIf(template) {
    const lines = template.split('\n');
    const stacks = [];
    const results = [];

    for (let index = 0; index < lines.length; index++) {
        let code = lines[index];
        if (code === undefined) continue;

        let matches;
        const getBackLines = () => {
            let backLines = 0;
            let _code = code;
            while (!/^\s*/.test(_code)) {
                backLines++;
                _code = lines[index - backLines];
            }

            return backLines;
        };
        const getMeta = (regexp) => {
            let startCode = code;
            const backLines = getBackLines();
            if (backLines > 0) {
                // delete the unuseful codes
                results.splice(-backLines, backLines);
                lines[index] = undefined;
                startCode = lines[index - backLines];
            } else {
                lines[index] = code.replace(regexp, '');
            }
            // go back
            index = index - backLines - 1;

            // get indent count
            const _matches = startCode.match(/(\s*)</);
            const spaces = _matches[1];

            const value = matches[1] ? parseGet(matches[1]) : null;

            return {spaces, value};
        }

        const last = stacks[stacks.length - 1];

        if (matches = code.match(vIfRegExp)) {
            const {spaces, value} = getMeta(vIfRegExp);
            const codes = [];
            stacks.push({
                spaces,
                isVIf: true,
                codes,
                vElseIf: [],
                value,
                codesStacks: [codes],
                hasEnd: false,
            });

            continue;
        } else if (matches = code.match(vElseIfRegExp)) {
            const {spaces, value} = getMeta(vElseIfRegExp);
            const codes = [];
            last.hasEnd = false;
            last.vElseIf.push({
                spaces,
                isVElseIf: true,
                value,
                codes,
            });
            last.codesStacks.push(codes);

            continue;
        } else if (matches = code.match(vElseRegExp)) {
            const {spaces, value} = getMeta(vElseRegExp);
            const codes = [];
            last.hasEnd = false;
            last.vElse = {
                spaces,
                isVElse: true,
                codes
            };
            last.codesStacks.push(codes);

            continue;
        } else if (last) {
            if (last.hasEnd && (!/^\s*</.test(code) || /^\s*<.*>\s*$/.test(code))) {
                // go back to end line
                const backLines = index - 1 - last.endIndex;
                if (backLines > 0) {
                    results.splice(-backLines, backLines);
                }
                index = last.endIndex;

                const stack = stacks.pop();
                const {spaces, value} = stack;
                const results = [`${spaces}{${value} ?`];
                results.push(indent(stack.codes).join('\n') + ' :');
                if (stack.vElseIf.length) {
                    stack.vElseIf.forEach((item, index) => {
                        const value = item.value;
                        results.push(indent([
                            `${spaces}${value} ?`,
                            indent(item.codes)
                        ], index + 1).join('\n') + ' :');
                    });
                }
                if (stack.vElse) {
                    results.push(...indent(stack.vElse.codes, stack.vElseIf.length + 1));
                } else {
                    results.push(indentOneLine(`${spaces}undefined`, stack.vElseIf.length + 1));
                }
                results.push(`${spaces}}`);
                code = results.join('\n');

                const _last = stacks[stacks.length - 1];
                if (_last) {
                    // nested v-if
                    const {codes} = _last;
                    const _code = indent(code);
                    _code[0] = dedent(_code[0]);
                    codes.push(_code.join('\n'));
                    continue;
                }
                // console.log(stack);
            } else {
                const {spaces, codesStacks} = last;
                const codes = codesStacks[codesStacks.length - 1];
                const isClosed = new RegExp(`^${spaces}(\\S.*)?(</\\w+>|/>)\\s*$`).test(code);
                codes.push(code);
                if (isClosed) {
                    codesStacks.pop();
                    last.hasEnd = true;
                    last.endIndex = index;
                }
                continue;
            }
        }

        results.push(code);
    }

    return indent(results.filter(line => line !== undefined), 0).join('\n');
}

const interpolationRegExp = /\{\s*(.*?)\s*\}/g
function parseInterpolation(template, properties) {
    return template.replace(interpolationRegExp, (match, value) => {
        value = parseGet(value, properties);
        return `{${value}}`;
    });
}

const getRegExp = /this\.get\((['"](.*?)['"])?\)/g;
function parseGet(template, properties = {}) {
    return template.replace(new RegExp(getRegExp, 'g'), (match, key, name) => {
        if (key) {
            properties.state = '{}';
            return `this.state.${name}`;
        } else {
            return `this.state`;
        }
    });
}

function parseTemplate(template) {
    return template.replace(/(<|<\/)template>/g, '$1React.Fragment>');
}

function getMethods(js) {
    const methods = {};
    let start = 0;
    let name;
    const lines = js.split('\n').slice();
    let spaces = '';
    let isBound = false;
    lines.forEach((code, index) => {
        // if (code.startsWith('export default')) return;
        if (/@bind/.test(code)) {
            isBound = true;
            return;
        }
        const property = code.match(/(private|public) (\w+)(: | =)/);
        if (property) {
            methods[property[2]] = dedent(code) + '\n';
            return;
        }
        const matches = code.match(/^(\s*)(?:(?:get|set|async|static) )?(\w+)(?:<.*>)?\(.*?\) {$/);
        if (matches) {
            start = index;
            name = matches[2];
            spaces = matches[1];
        } else if (code === `${spaces}}`) {
            if (!name || ['defaults'].indexOf(name) > -1) return;
            if (name === 'init') {
                // name = '$constructor';
                name = 'componentDidMount';
                lines[start] = lines[start].replace('init', name);
            }
            let codes = lines.slice(start, index + 1);
            if (spaces) {
                codes = dedent(codes);
            }
            methods[name] = (isBound ? '@bind\n' : '') + codes.join('\n')
                .replace(
                    /this\.get\((['"])?([\d\w]+)["']?\)/g,
                    (nouse, quote, name) => {
                        if (quote) {
                            return `this.state.${name}`;
                        } else {
                            return `this.state.[${name}]`;
                        }
                    }
                )
                .replace(
                    /this\.set\((['"])?([\d\w]+)["']?,\s*(.*?)\)/g,
                    (nouse, quote, name, value, semiconlon) => {
                        let ret;
                        if (quote) {
                            ret = `this.setState({${name}: ${value}})`;
                        } else {
                            ret = `this.setState({[${name}]: ${value}})`;
                        }
                        return ret;
                    }
                )
                .replace(
                    /this\.set\(/g,
                    'this.setState\('
                )
                .replace(
                    /this\.refs/g,
                    'this'
                ) + '\n';

            isBound = false;
        }
    });
    return methods;
}

function stringStyleToObject(style) {
    const styles = style.split(';');
    const ret = {};
    styles.forEach(item => {
        const [key, value] = item.split(':');
        if (key) {
            ret[upperCase(key.trim())] = value.trim();
        }
    });

    return ret;
}

const _cache = {};
function upperCase(word) {
    if (!_cache[word]) {
        _cache[word] = word.replace(/-([a-z])/g, (nouse, item) => {
            return item.toUpperCase();
        });
    }
    return _cache[word];
}

function upperFirst(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function indentOneLine(code, count = 1) {
    return `${'    '.repeat(count)}${code}`;
}

function addSet(methods) {
    if (methods.set) return;
    methods.set = [
        `set<K extends keyof Props>(key: K, value: Props[K]) {`,
        `    this.setState({[key]: value} as Pick<Props, K>);`,
        `}`
    ].join('\n') + '\n';
}
