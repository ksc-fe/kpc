const webpack = require('webpack');
const path = require('path');
const nodeExternal = require('webpack-node-externals');
const webpackConfig = require('../webpack.config.common');
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV !== 'production';
process.URL_PREFIX = isDev ? '' : '/kpc';

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend',
    'plugins': 'replace',
})(webpackConfig, {
    entry: {
        render: path.resolve(__dirname, './src/render.js'),
    },
    output: {
        chunkFilename: 'chunk/[chunkhash].js',
        libraryTarget: 'commonjs2',
        publicPath: isDev ? '/' : `${process.URL_PREFIX}/`,
    },
    target: 'node',
    externals: [
        nodeExternal(
            {whitelist: ['universal-router', 'webpack/hot/poll?1000']}
        ),
        {'../webpack.config.client': 'commonjs ../webpack.config.client'},
    ],
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './fonts/',
                            publicPath: isDev ? '/fonts/' : `${process.URL_PREFIX}/fonts/`,
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, isDev ? './.dist' : './dist'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(styl|css)$/,
                use: [
                    {loader: 'node-style-loader'},
                ]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Intact: 'intact'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false,
        }),
        new webpack.DefinePlugin({
            'process.node': true,
            'process.ssr': true,
            'process.URL_PREFIX': JSON.stringify(process.URL_PREFIX),
        }),
    ],
});
