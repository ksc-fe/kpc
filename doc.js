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

module.exports = function() {
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

        ctx.hook.add('md.renderer', (renderer, file) => {
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
                const result = codeRenderer.call(this, code, language);
                if (/demos/.test(file.path)) {
                    return '';
                } else {
                    return result; 
                }
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
                const data = Object.assign({}, file.md, {
                    sideBars: file.sideBars,
                    highlighted: file.md.codes.map(item => {
                        return {
                            language: item.language,
                            content: `<pre><code class="hljs ${languageMap(item.language)}">` +
                                highlight.highlight(languageMap(item.language), item.content).value +
                            `</code></pre>`
                        };
                    }),
                });
                delete data.source;
                file.contents = new Buffer(JSON.stringify(data, null, 4));
            });
        });

        ctx.hook.add('dist.after', files => {
            // 静态化
            const compiler = webpack(webpackConfig); 
            compiler.run((err, stats) => {
                console.log(stats.toString({
                    colors: true 
                }));
                delete require.cache[require.resolve('./.dev/render')];
                const render = require('./.dev/render');

                ctx.fsEach(async function(file) {
                    if (/demos/.test(file.path)) {
                        file.md.codes.forEach(item => {
                            file.extname = '.' + item.language;
                            let content = item.content;
                            if (item.language === 'js') {
                                content = [
                                    `export {default as data} from './index.json';`,
                                    item.content,
                                ].join('\n');
                            } else if (item.language === 'styl') {
                                content = [
                                    `.example.index-${file.md.index}`,
                                    ...content.split('\n').map(line => `    ${line}`)
                                ].join('\n');
                            }
                            ctx.fsWrite(file.relative, content);
                        });
                    } else {
                        file.extname = '.html';
                        const pathname = path.relative(ctx.data.output, file.path).replace('index.html', '');
                        const data = await render(`/${pathname}`);
                        await ctx.fsWrite(
                            file.relative, 
                            Vdt.renderFile(path.resolve(__dirname, './site/index.vdt'), {
                                title: 'test',
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

