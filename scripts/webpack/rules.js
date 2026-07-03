const {resolve} = require('../utils');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const corejs = {version: 3, proposals: true};

const noParse = [
    // 'intact',
    'vue',
    'tinycolor2',
    'dayjs',
    'downloadjs',
    'mxgraphx',
    // 'mermaid',
].map(item => resolve(`./node_modules/${item}/`));

module.exports = (config) => {
    const rules = config.module.rules;

    config.module
        // .noParse(noParse)
        // .rule('ts')
            // .test(/\.[jt]sx?$/)
            // .exclude.add(/node_modules/).end()
            // .use('ts')
                // .loader('ts-loader')
                // .end()
            // .end()
        .rule('babel')
            .test(/\.[jt]sx?$/)
            // .test(/\.js$/)
            .exclude.add(/node_modules/).end()
            .use('babel')
                .loader('babel-loader')
                .options({
                    cacheDirectory: resolve('./.cache'),
                    // rootMode: 'upward',
                })
                .end()
            .end()
        .rule('mjs')
            .test(/\.mjs$/)
            .type('javascript/auto')
            .resolve
                .set('fullySpecified', false)
                .end()
            .end()
        .rule('mermaidMjs')
            .test(/\.mjs$/)
            .include
                .add(resolve('./node_modules/mermaid'))
                .add(resolve('./node_modules/@mermaid-js/parser'))
                .end()
            .type('javascript/auto')
            .use('babel')
                .loader('babel-loader')
                .options({
                    babelrc: false,
                    cacheDirectory: resolve('./.cache'),
                    configFile: false,
                    presets: [
                        ['@babel/preset-env', {
                            modules: false,
                        }],
                    ],
                    plugins: [
                        ['@babel/plugin-transform-runtime', {
                            corejs,
                        }],
                    ],
                })
                .end()
            .resolve
                .set('fullySpecified', false)
                .end()
            .end()
        .rule('vdt')
            .test(/\.vdt$/)
            .use('babel')
                .merge(rules.get('babel').uses.get('babel').entries())
                .end()
            .use('vdt')
                .loader('vdt-loader')
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
                .options({
                    postcssOptions: {
                        plugins: ['postcss-preset-env'],
                    }
                })
                .end()
            .use('stylus')
                .loader('stylus-loader')
                .options({
                    'stylusOptions': {
                        'includeCss': true,
                        'resolveUrl': true,
                    },
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
            .test(/\.(woff2?|eot|ttf|otf|svg|jpg|png|mp4)(\?.*)?$/)
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
        // .rule('vue')
            // .test(/\.vue$/)
            // // .use('thread')
                // // .merge(rules.get('babel').uses.get('thread').entries())
                // // .end()
            // .use('vue')
                // .loader('vue-loader')
                // .options({
                    // compilerOptions: {
                        // preserveWhitespace: false,
                    // }
                // })
                // .end()
            // .end();

    config.plugin('ts-checker').use(ForkTsCheckerWebpackPlugin, [{
        typescript: {
            diagnosticOptions: {
                semantic: true,
                syntactic: true,
            },
        },
    }]);
};
