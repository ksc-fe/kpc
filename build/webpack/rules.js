const {resolve} = require('../utils');

module.exports = (config) => {
    const rules = config.module.rules;

    config.module
        .rule('babel')
            .test(/\.jsx?$/)
            .exclude.add(/node_modules/).end()
            // .use('thread')
                // .loader('thread-loader')
                // .options({
                    // // workerParallelJobs: 50,
                // })
                // .end()
            .use('babel')
                .loader('babel-loader')
                .options({
                    cacheDirectory: resolve('./.cache'),
                })
                .end()
            .end()
        .rule('vdt')
            .test(/\.vdt$/)
            // .use('thread')
                // .merge(rules.get('babel').uses.get('thread').entries())
                // .end()
            .use('babel')
                .merge(rules.get('babel').uses.get('babel').entries())
                .end()
            .use('vdt')
                .loader('vdt-loader')
                .options({
                    delimiters: ['{{', '}}'],
                    skipWhitespace: true,
                })
                .end()
            .end()
        .rule('stylus')
            .test(/\.styl$/)
            // .use('thread')
                // .merge(rules.get('babel').uses.get('thread').entries())
                // .end()
            .use('css')
                .loader('css-loader')
                .options({url: true})
                .end()
            .use('postcss')
                .loader('postcss-loader')
                .end()
            .use('stylus')
                .loader('stylus-loader')
                .options({
                    'include css': true,
                    'resolve url': true,
                    'sourceMap': false,
                })
                .end()
            .end()
        .rule('css')
            .test(/\.css$/)
            // .use('thread')
                // .merge(rules.get('babel').uses.get('thread').entries())
                // .end()
            .use('css')
                .merge(rules.get('stylus').uses.get('css').entries())
                .end()
            .use('postcss')
                .merge(rules.get('stylus').uses.get('postcss').entries())
                .end()
            .end()
        .rule('file')
            .test(/\.(woff2?|eot|ttf|otf|svg|jpg|png)(\?.*)?$/)
            .use('file')
                .loader('file-loader')
                .options({
                    outputPath: 'fonts/',
                    name: '[name].[hash].[ext]',
                })
                .end()
            .end()
        .rule('gif')
            .test(/\.gif$/)
            .use('url')
                .loader('url-loader')
                .options({
                    limit: 100000
                })
                .end()
            .end()
        .rule('vue')
            .test(/\.vue$/)
            // .use('thread')
                // .merge(rules.get('babel').uses.get('thread').entries())
                // .end()
            .use('vue')
                .loader('vue-loader')
                .options({
                    preserveWhitespace: false,
                })
                .end()
            .end()
};
