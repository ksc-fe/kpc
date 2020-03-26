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

function handleFiles(files, dest) {
    if (!files.length) return;

    return Promise.all(files.map(async file => {
        const {contents, metadata} = parseYaml(await fs.readFile(file, 'utf-8'));

        if (!metadata) return;

        const isDemo = /demos/.test(file);
        const relativePath = path.relative(root, file);
        let basename = path.basename(relativePath, '.md');
        if (basename === 'index') {
            basename = path.dirname(basename);
        }
        const relative = path.join(path.dirname(relativePath), basename);
        const dir = path.join(dest, relative);
        const fileObj = {
            isDemo,
            path: dir,
            file,
            relative,
            id: relative.replace(/[\/\\]/g, '-'),
        };
        const {html, codes, catalogs} = parseMarkdown(fileObj, contents);

        await generateFiles(fileObj, codes, html, metadata, catalogs);

        return {metadata, file: fileObj, catalogs};
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

function parseMarkdown(file, contents) {
    const codes = getAllCodes(file);
    const catalogs = getAllCatalogs(file);

    const html = marked(contents, {
        renderer,
        langPrefix: 'hljs ',
        highlight(code) {
            return highlight.highlightAuto(code).value;
        }
    });

    return {html, codes, catalogs};
}

function getAllCodes(file) {
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

        if (file.isDemo && !ignore) {
            codes.push({
                language,
                content: code,
                filename,
            });
            return '';
        }

        return codeRenderer.call(this, code, language);
    };

    return codes;
}

function getAllCatalogs(file) {
    let catalogs = [];
    renderer.heading = function(text, level, raw) {
        const id = encodeURIComponent(raw);
        let result = `<h${level} id='${id}'>${text}</h${level}>`;
        if (!file.isDemo && level < 4) {
            catalogs.push({
                text: text,
                level: level,
                id: id,
            });
        }
        return result;
    };

    return catalogs;
}

function generateFiles(file, codes, html, metadata, catalogs) {
    codes = parseCodes(file, codes);

    // only demo has codes
    const promises = codes.map((code, index) => {
        if (code.ignored) return;

        if (!code.example) {
            return generateDemoFiles(file, code);
        } else {
            return generateExampleFiles(file, code, index);
        }
    });

    promises.push(writeJson(file, codes, html, metadata, catalogs));

    if (!file.isDemo) {
        promises.push(writeIndex(file, metadata));
    }

    if (metadata.iframe) {
        promises.push(writeIframe(file, metadata.iframe));
    }

    return Promise.all(promises);
}

function generateDemoFiles(file, code) {
    const filename = getFileName(file, code);
    let {content, language, filename: _filename} = code;

    if (language === 'js' && !_filename) {
        content = [
            `export {default as data} from './index.json';`,
            content,
        ].join('\n');
    } else if (language === 'styl' && !_filename) {
        const requires = [];
        content = [
            `.example.${file.id}`,
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
}

function generateExampleFiles(file, code, index) {
    return writeFile(path.join(file.path, `demos/demos${index}/index.js`), code.content);
}

function writeJson(file, codes, html, metadata, catalogs) {
    const data = {
        setting: metadata,
        contents: html,
        index: file.id,
    };

    if (file.isDemo) {
        data.highlighted = codes.map(item => {
            return {
                language: item.language,
                content: `<pre><code class="hljs ${languageMap(item.language)}">` +
                    highlight.highlight(languageMap(item.language), item.content).value +
                `</code></pre>`,
                file: item.filename,
            };
        });
    } else {
        data.catalogs = catalogs;
    }

    return writeFile(path.join(file.path, 'index.json'), JSON.stringify(data, null, 4));
}

function writeIndex(file, metadata) {
    const sidebar = metadata.sidebar;
    const content = [
        `import Article from '~/../src/components/article';`,
        `import data from './index.json';`,
        sidebar ? `import sidebar from '~/${sidebar}.json';` : undefined,
        ``,
        `const r = require.context('./', true, /demos.*(index|demo).js$/);`,
        `const keys = r.keys();`,
        `const demos = [];`,
        `for (let i = 0; i < keys.length; i++) {`,
        `    const file = keys[i];`,
        `    // if we found demo.js then ignore index.js`,
        `    if (/demo\.js$/.test(file)) i++;`,
        `    demos.push(r(file));`,
        `}`,
        ``,
        `export default class extends Article {`,
        sidebar ? `    static sidebar = sidebar;` : undefined,
        `    static data = data;`,
        `    defaults() {`,
        `        return {...super.defaults(), ...data, demos};`,
        `    }`,
        `}`,
    ].join('\n');

    return writeFile(path.join(file.path, 'index.js'), content);
}

function writeIframe(file, height) {
    return Promise.all([
        writeFile(path.join(file.path, 'demo.js'), [
            `export {default as data} from './index.json';`,
            `import Intact from 'intact';`,
            ``,
            `export default class extends Intact {`,
            `    @Intact.template()`,
            `    static template = \`<div class="browser-mockup">`,
            `        <iframe height="${height}" src="/${file.relative}/index.html"></iframe>`,
            `    </div>\`;`,
            `}`,
        ].join('\n')),
        writeFile(path.join(file.path, 'iframe.js'), [
            `import Intact from 'intact';`,
            `import Demo from './index.js';`,
            `Intact.mount(Demo, document.getElementById('page'));`,
        ].join('\n')),
        // TODO: write index.html
    ]);
}

function getFileName(file, code) {
    if (code.filename) {
        return path.join(file.path, code.filename);
    }
    return path.join(file.path, `index.${code.language}`);
}

function parseCodes(file, codes) {
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

    if (file.isDemo) {
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
    }

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

function languageMap(key) {
    const map = {
        'vue': 'html',
        'vdt': 'jsx',
    };
    return map[key] || key;
};


process.on('message', ({files, dest}) => {
    handleFiles(files, dest).then(res => {
        process.send(res);
    });
});

module.exports = handleFiles;
