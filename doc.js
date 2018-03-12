const KDoc = require('kdoc');
const path = require('path');
const Vdt = require('vdt');
const webpackConfig = require('./webpack.config.site.render');
const webpackConfigClient = require('./webpack.config.site.client');
const webpack = require('webpack');
const highlight = require('highlight.js');
const babel = require('babel-core');

const languageMap = function(key) {
    const map = {
        'vue': 'html',
        'vdt': 'jsx',
    };
    return map[key] || key;
};

module.exports = function(isDev) {
    const doc = new KDoc(
        './components/**/*.md',
        path.resolve(__dirname, './site')
    );

    doc.use(KDoc.plugins.md);

    doc.use(function(ctx) {
        Vdt.setDefaults({
            disableSplitText: true,
            skipWhitespace: false,
            delimiters: ['{{', '}}']
        });

        ctx.hook.add('md.renderer', (renderer, file, codes) => {
            renderer.table = (header, body) => {
                return `<div class="k-table-wrapper k-border">
                    <table class="k-table">
                        <thead>${header}</thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>`
            };
            const codeRenderer = renderer.code;
            renderer.code = function(code, language) {
                const matches = code.match(/@file ([^\s]+)/);
                if (matches) {
                    code = code.substring(code.indexOf('\n') + 1);
                }
                const result = codeRenderer.call(this, code, language);
                if (matches) {
                    codes[codes.length - 1].file = matches[1];
                }
                if (/demos/.test(file.path)) {
                    return '';
                } else {
                    return result; 
                }
            };

            renderer.paragraph = function(text) {
                return text.replace(/\n/g, '');
            };
        });

        ctx.hook.add('dist.before', async function(files) {
            await ctx.fsEach(function(file, index) {
                file.extname = '.json';
                const basename = path.basename(file.path, '.json');
                if (basename !== 'index') {
                    file.path = path.join(path.dirname(file.path), basename, 'index.json');
                }
                file.md.index = index;

                let hasJs = false;
                let hasStylus = false;
                file.md.codes.forEach(item => {
                    if (item.language === 'js' && !item.file) {
                        hasJs = true;
                        item.content = [
                            `import Intact from 'intact';`,
                            `import template from './index.vdt';`,
                            hasStylus ? `import './index.styl'; \n` : '',
                            item.content,
                        ].join('\n');
                    }
                    if (item.language === 'styl') hasStylus = true;
                });
                if (!hasJs) {
                    file.md.codes.splice(hasStylus ? 2 : 1, 0, {
                        language: 'js',
                        content: [
                            `import Intact from 'intact';`,
                            `import template from './index.vdt';`,
                            hasStylus ? `import './index.styl'; \n` : '',
                            `export default class extends Intact {`,
                            `    @Intact.template()`,
                            `    static template = template;`,
                            `}`,
                        ].join('\n')
                    });
                }

                const highlighted = file.md.codes.map(item => {
                    return {
                        language: item.language,
                        content: `<pre><code class="hljs ${languageMap(item.language)}">` +
                            highlight.highlight(languageMap(item.language), item.content).value +
                        `</code></pre>`,
                        file: item.file,
                    };
                });

                const data = Object.assign({}, file.md, {
                    sideBars: file.sideBars,
                    highlighted: highlighted,
                });
                delete data.source;
                file.contents = new Buffer(JSON.stringify(data, null, 4));
            });
        });

        ctx.hook.add('dist.after', async files => {
            await ctx.fsEach(async function(file) {
                if (/demos/.test(file.path)) {
                    await file.md.codes.forEach(async item => {
                        file.extname = '.' + item.language;
                        let content = item.content;
                        if (item.language === 'js' && !item.file) {
                            content = [
                                `export {default as data} from './index.json';`,
                                item.content,
                            ].join('\n');
                        } else if (item.language === 'styl' && !item.file) {
                            content = [
                                `.example.index-${file.md.index}`,
                                ...content.split('\n').map(line => `    ${line}`)
                            ].join('\n');
                        }
                        await ctx.fsWrite(!item.file ? file.relative : file.dirname + '/' + item.file, content);
                    });
                } else {
                    file.extname = '.js';
                    await ctx.fsWrite(
                        file.relative,
                        [
                            `import Article from '~/src/components/article';`,
                            `import data from './index.json';`,
                            ``,
                            `const r = require.context('./', true, /demos.*index.js$/);`,
                            `const demos = r.keys().map(r);`,
                            ``,
                            `export default class extends Article {`,
                            `    defaults() {`,
                            `        return {...super.defaults(), ...data, demos};`,
                            `    }`,
                            `}`,
                        ].join('\n')
                    );
                }
            });

            // 静态化
            if (isDev) return ctx.fsEach(async function(file) {
                if (!/demos/.test(file.path)) {
                    file.extname = '.html';
                    await ctx.fsWrite(
                        file.relative,
                        Vdt.renderFile(path.resolve(__dirname, './site/src/index.vdt'))
                    );
                }
            });
            const compiler = webpack(webpackConfig); 
            compiler.run((err, stats) => {
                console.log(stats.toString({
                    colors: true 
                }));
                delete require.cache[require.resolve('./.dev/render')];
                const render = require('./.dev/render');

                ctx.fsEach(async function(file) {
                    if (!/demos/.test(file.path)) {
                        file.extname = '.html';
                        const pathname = path.relative(ctx.data.output, file.path).replace('index.html', '');
                        const data = await render(`/${pathname}`);
                        await ctx.fsWrite(
                            file.relative, 
                            Vdt.renderFile(path.resolve(__dirname, './site/src/index.vdt'), {
                                title: file.md.setting.title,
                                content: data.content,
                                style: data.style,
                            })
                        );
                    }
                });
            });
        });
    });

    return doc.run(); 
};

