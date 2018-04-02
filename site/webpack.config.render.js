const webpack = require('webpack');
const path = require('path');
const nodeExternal = require('webpack-node-externals');
const webpackConfig = require('../webpack.config.common');
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV !== 'production';

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
        }),
    ],
});
