const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend'
})(webpackConfig, {
    entry: {
        'static/client': [
            'webpack-hot-middleware/client?reload=true',
            './app/client.js',
        ],
    },
    devtool: '#inline-source-map',
    output: {
        chunkFilename: 'static/chunk/[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(styl|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                ]
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks: 3
        }),
        new webpack.DefinePlugin({
            'process.browser': true,
        }),
    ],
});
