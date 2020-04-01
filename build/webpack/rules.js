const {resolve} = require('../utils');

const noParse = [
    // 'intact',
    'vue',
    'tinycolor2', 
    'dayjs',
    'downloadjs',
    'mxgraphx',
    'mermaid',
].map(item => resolve(`./node_modules/${item}/`));

module.exports = (config) => {
    const rules = config.module.rules;

    config.module
        .noParse(noParse)
        .rule('babel')
            .test(/\.jsx?$/)
            .exclude.add(/node_modules/).end()
            .use('babel')
                .loader('babel-loader')
                .options({
                    cacheDirectory: resolve('./.cache'),
                })
                .end()
            .end()
        .rule('vdt')
            .test(/\.vdt$/)
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
                    name: '[name].[ext]',
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
                    compilerOptions: {
                        preserveWhitespace: false,
                    }
                })
                .end()
            .end()
};
