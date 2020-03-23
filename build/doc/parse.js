const fs = require('fs').promises;
const yaml = require("js-yaml");
const marked = require('marked');
const highlight = require("highlight.js");

const renderer = new marked.Renderer();

function handleFiles(files) {
    if (!files.length) return;

    return Promise.all(files.map(async file => {
        let {contents, metadata} = parseYaml(await fs.readFile(file, 'utf-8'));
        contents = parseMarkdown(contents);

        return {contents, metadata, path: file};
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

process.on('message', files => {
    process.send('hello')
    // handleFiles(files).then(res => {
        // process.send(res);
    // });
});

exports.handleFiles = handleFiles;
