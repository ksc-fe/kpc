const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend'
})(webpackConfig, {
    entry: {
        'static/client': './core/client.js',
    },
    output: {
        chunkFilename: 'static/chunk/[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(styl|css)$/,
                use: [
                    {loader: 'style-loader'},
                ]
            },
        ]
    }
});

// const util = require('util');
// console.log(util.inspect(module.exports, {showHidden: true, depth: null}))
