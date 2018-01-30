const KDoc = require('kdoc');
const path = require('path');
const Vdt = require('vdt');
const webpackConfig = require('./webpack.config.site.render');
const webpackConfigClient = require('./webpack.config.site.client');
const webpack = require('webpack');

global.root = path.resolve(__dirname, './site');

const doc = new KDoc(
    './components/**/*.md',
    global.root
);
doc.use(KDoc.plugins.md);

doc.use(function(ctx) {
    Vdt.setDefaults({
        disableSplitText: true,
        skipWhitespace: false,
        delimiters: ['{{', '}}']
    });
    ctx.hook.add('dist.before', function(files) {
        ctx.fsEach(async function(file) {
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
            const render = require('./.dev/render');

            ctx.fsEach(async function(file) {
                file.extname = '.html';
                const pathname = path.relative(ctx.data.output, file.path).replace('index.html', '');
                const data = await render(`/${pathname}`);
                ctx.fsWrite(
                    file.relative, 
                    Vdt.renderFile(path.resolve(__dirname, './site/index.vdt'), {
                        title: 'test',
                        content: data.content,
                        style: data.style,
                    })
                );
            });
        });
    });

    ctx.hook.add('dist.after', () => {
        const compiler = webpack(webpackConfigClient);
        compiler.watch({
            aggregateTimeout: 300,
            poll: 1000
        }, (err, stats) => {
            console.log(stats.toString({
                colors: true    // 在控制台展示颜色
            }));
        });
    });
});
doc.run();
