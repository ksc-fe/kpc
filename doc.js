const KDoc = require('kdoc');
const path = require('path');
const Vdt = require('vdt');
const webpackConfig = require('./webpack.config.site.render');
const webpackConfigClient = require('./webpack.config.site.client');
const webpack = require('webpack');

module.exports = function(done) {
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

        ctx.hook.add('md.renderer', renderer => {
            renderer.table = (header, body) => {
                return `<div class="k-table-wrapper k-border">
                    <table class="k-table">
                        <thead>${header}</thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>`
            };
        });

        ctx.hook.add('dist.before', async function(files) {
            await ctx.fsEach(function(file) {
                file.extname = '.json';
                const data = Object.assign({}, file.md, {
                    sideBars: file.sideBars
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
                    colors: true    // 在控制台展示颜色
                }));
                delete require.cache[require.resolve('./.dev/render')];
                const render = require('./.dev/render');

                ctx.fsEach(async function(file) {
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
                });

                done();
            });
        });
    });

    doc.run(); 
};

