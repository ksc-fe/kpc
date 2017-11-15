const webpack = require('webpack');
const path = require('path');
const nodeExternal = require('webpack-node-externals');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend'
})(webpackConfig, {
    entry: {
        server: [
            'webpack/hot/poll?1000',
            './core/server.js',
        ],
    },
    output: {
        chunkFilename: 'chunk/[chunkhash].js',
    },
    target: 'node',
    externals: [nodeExternal(
        {whitelist: ['universal-router', 'webpack/hot/poll?1000']}),
        {'../webpack.config.client': 'commonjs ../webpack.config.client'}
    ],
    node: {
        __dirname: false,
        __filename: false,
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
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false,
        }),
        new webpack.DefinePlugin({
            'process.node': true
        }),
    ]
});
