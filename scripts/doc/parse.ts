import fs from 'fs-extra';
import yaml from 'js-yaml';
import marked from 'marked';
import highlight from 'highlight.js';
import path from 'path';

type Metadata = {
    title: string
    order: number
    demo: boolean
}

type Code = {
    language: string,
    content: string,
    filename: string,
}

function handleFiles(files: string[], dest: string, root: string) {
    if (!files.length) return;

    return Promise.all(files.map(async file => {
        const {contents, metadata} = parseYaml(await fs.readFile(file, 'utf-8'));
        if (!metadata) return;

        const relativePath = path.relative(root, file);
        let basename = path.basename(relativePath, '.md');
        if (basename === 'index') {
            basename = path.dirname(basename);
        }
        const relative = path.join(path.dirname(relativePath), basename);
        const destPath = path.join(dest, relative);
        const {html, codes, catalogs} = parseMarkdown(contents, metadata);
    }));
}

function parseYaml(contents: string) {
    let metadata: Metadata | null = null;

    contents = contents.replace(/---\s*[\n\r]+\s*((?:.|\n|\r)*?)[\n\r]+---/, (all, matched) => {
        metadata = yaml.load(matched) as Metadata;
        return "";
    });

    return {contents, metadata};
}

const exampleReg = /^(example-?)/;
function parseMarkdown(contents: string, metadata: Metadata) {
    const codes: Code[] = [];
    renderer.code = function(code, language, ...args) {
        if (!language) throw new Error('The language of code must be specified.');

        if (exampleReg.test(language)) {
            // TODO
        }

        let matches;
        let showCode = false;
        let filename;

        if (matches = code.match(/@code/)) {
            showCode = true;
        } else if (matches = code.match(/@file ([^\s]+)/)) {
            filename = matches[1];
        }
        if (matches) {
            code = code.substring(code.indexOf('\n') + 1);
        }

        if (metadata.demo && !showCode) {
            codes.push({
                language,
                content: code,
                filename
            });

            return '';
        }

        return codeRenderer.call(this, code, language, ...args);
    }
}

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
