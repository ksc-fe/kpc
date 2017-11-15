const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend'
})(webpackConfig, {
    entry: {
        kpc: './components/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'KPC',
        libraryTarget: 'umd',
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
        new webpack.DefinePlugin({
            'process.browser': true
        }),
    ]
});
