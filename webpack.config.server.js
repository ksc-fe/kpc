const webpack = require('webpack');
const path = require('path');
const nodeExternal = require('webpack-node-externals');
const webpackConfig = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend'
})(webpackConfig, {
    entry: {
        server: './core/server.js',
    },
    output: {
        chunkFilename: 'chunk/[chunkhash].js',
    },
    target: 'node',
    externals: [nodeExternal({
        whitelist: ['universal-router']
    })],
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
});
