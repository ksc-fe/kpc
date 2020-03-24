const fs = require('fs-extra');
const yaml = require("js-yaml");
const marked = require('marked');
const highlight = require("highlight.js");
const intact2vue = require('./intact2vue');
const intact2react = require('./intact2react');
const intact2angular = require('./intact2angular');
const {root, writeFile} = require('../utils');
const path = require('path');

const renderer = new marked.Renderer();
const codeRenderer = renderer.code;

renderer.table = (header, body) => {
    return `<div class="k-table k-border">
        <div class="k-table-wrapper">
            <div class="k-thead">
                <table>
                    <thead>${header}</thead>
                </table>
            </div>
            <div class="k-tbody">
                <table>
                    <tbody>${body}</tbody>
                </table>
            </div>
        </div>
    </div>`
};

renderer.paragraph = function(text) {
    return '<p>' + text.replace(/\n/g, '') + '</p>\n';
};

// get all codes
const codes = [];
const exampleReg = /^(example-?)/;
renderer.code = function(code, language) {
    // for rendering example to html
    if (exampleReg.test(language)) {
        language = language.replace(exampleReg, "") || 'js';
        codes.push({
            language,
            content: code,
            example: true,
        });
        return `<!-- example -->`;
    }

    let matches;
    let ignore = false;
    let filename;

    if (matches = code.match(/@code/)) {
        ignore = true;
    } else if (matches = code.match(/@file ([^\s]+)/)) {
        filename = matches[1];
    }
    if (matches) {
        code = code.substring(code.indexOf('\n') + 1);
    }


    if (!ignore) {
        codes.push({
            language,
            content: code,
            filename,
        });
        return '';
    }

    return codeRenderer.call(this, code, language);
};

function handleFiles(files, dest) {
    if (!files.length) return;

    return Promise.all(files.map(async file => {
        let {contents, metadata} = parseYaml(await fs.readFile(file, 'utf-8'));
        contents = parseMarkdown(contents);

        await generateFiles(file, dest, codes);

        // return {contents, metadata, path: file, codes};
    }));
}

function parseYaml(contents) {
    let metadata;
    contents = contents.replace(/---\s*[\n\r]+\s*((?:.|\n|\r)*?)[\n\r]+---/, (all, matched) => {
        metadata = yaml.safeLoad(matched);
        return "";
    });

    return {contents, metadata};
}

function parseMarkdown(contents) {
    return marked(contents, {
        renderer,
        highlight(code) {
            return highlight.highlightAuto(code).value;
        }
    });
}

function generateFiles(file, dest, codes) {
    codes = parseCodes(codes);

    return Promise.all(codes.map(code => {
        if (code.ignored) return;

        const filename = getFileName(file, dest, code);
        let {content, language, filename: _filename} = code;

        if (language === 'js' && !_filename) {
            content = [
                `export {default as data} from './index.json';`,
                content,
            ].join('\n');
        } else if (language === 'styl' && !_filename) {
            const requires = [];
            content = [
                `.example.${path.basename(file, '.md')}`,
                ...content.split('\n').map(line => {
                    if (line.startsWith('@require')) {
                        requires.push(line);
                        return '';
                    }
                    return `    ${line}`
                })
            ].join('\n');
            if (requires.length) {
                content = requires.join('\n') + '\n' + content;
            }
        }

        return writeFile(filename, content);
    }));
}

function getFileName(file, dest, code) {
    const relativePath = path.relative(root, file);
    const dir = path.join(dest, path.dirname(relativePath), path.basename(relativePath, '.md'));

    if (code.filename) {
        return path.join(dir, code.filename);
    }
    return path.join(dir, `index.${code.language}`);
}

function parseCodes(codes) {
    const hasMap = {
        hasJs: false,
        hasStylus: false,
        hasVue: false,
        hasReact: false,
        hasAngular: false,
    };
    const hasLangMap = {
        styl: 'hasStylus',
        vue: 'hasVue',
        jsx: 'hasReact',
        ts: 'hasAngular',
    };

    const codeSnippetMap = {
        vueScript: null,
        vueTemplate: null,
        vueData: null,
        vueMethods: null,
        reactMethods: null,
        angularMethods: null,
        jsHead: null,
        angularProperties: null
    };
    const codeSnippetLangMap = {};
    const codeSnippetLangArray = Object.keys(codeSnippetMap).map(key => {
        const lang = key.replace(/([A-Z])/g, c => `-${c.toLowerCase()}`);
        codeSnippetLangMap[lang] = key;
        return lang; 
    });

    const ignoreMap = {
        'vue-ignore': 'vue',
        'react-ignore': 'jsx',
        'angular-ignore': 'ts',
    };

    let jsCode;

    codes = codes.filter((code, index) => {
        const {language, filename, content, example} = code;

        if (example) {
            code.content = [
                content,
                `export const example = true;`,
            ].join('\n');
            return true;
        }

        if (language === 'js' && !filename) {
            hasMap.hasJs = true;
            jsCode = code;
            code.content = [
                `import Intact from 'intact';`,
                `import template from './index.vdt';`,
                hasMap.hasStylus ? `import './index.styl'; \n` : '',
                content,
            ].join('\n');
            return true;
        }

        if (~['styl', 'vue', 'jsx', 'ts'].indexOf(language)) {
            hasMap[hasLangMap[language]] = true;
            return true;
        }

        if (~codeSnippetLangArray.indexOf(language)) {
            codeSnippetMap[codeSnippetLangMap[language]] = content;
            return false;
        }

        if (ignoreMap[language]) {
            code.language = ignoreMap[language];
            code.ignore = true;
            hasMap['has' + language.split('-')[0].replace(/[a-z]/, c => c.toUpperCase())] = true;

            return true;
        }

        return true;
    });

    if (!hasMap.hasJs) {
        codes.splice(hasMap.hasStylus ? 2 : 1, 0, (jsCode = {
            language: 'js',
            content: [
                `import Intact from 'intact';`,
                `import template from './index.vdt';`,
                hasMap.hasStylus ? `import './index.styl'; \n` : '',
                `export default class extends Intact {`,
                `    @Intact.template()`,
                `    static template = template;`,
                `}`,
            ].join('\n')
        }));
    }

    const js = hasMap.hasJs ? jsCode.content.split('\n').slice(hasMap.hasStylus ? 3 : 2).join('\n') : null;
    const vdt = codes[0].content;
    generateOtherCodes(vdt, js, hasMap, codeSnippetMap, codes);

    return codes;
}

function generateOtherCodes(vdt, js, hasMap, codeSnippetMap, codes) {
    const {
        vueScript, vueTemplate, vueMethods, vueData,
        jsHead, reactMethods, angularMethods, angularProperties
    } = codeSnippetMap;
    const {hasStylus, hasVue, hasReact, hasAngular} = hasMap;

    if (!hasVue) {
        const code = {
            language: 'vue',
            content: intact2vue(vdt, js, vueScript, vueTemplate, vueMethods, vueData, jsHead, hasStylus)
        }
        if (!hasReact) {
            codes.push(code);
        } else {
            codes.splice(codes.length - 1, 0, code);
        }
    }

    if (!hasReact) {
        codes.push({
            language: 'jsx',
            content: intact2react(vdt, js, reactMethods, jsHead, hasStylus), 
        });
    }

    if (!hasAngular) {
        codes.push({
            language: 'ts',
            content: intact2angular(vdt, js, angularMethods, angularProperties, hasStylus),
        });
    }
}

process.on('message', ({files, dest}) => {
    handleFiles(files, dest).then(res => {
        process.send(res);
    });
});

module.exports = handleFiles;
