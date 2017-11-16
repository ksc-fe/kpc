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
    externals: {
        intact: {
            root: 'Intact',
            commonjs2: 'intact',
            commonjs: 'intact',
            amd: 'intact',
        }
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
});

module.exports.plugins = [
    new webpack.DefinePlugin({
        'process.browser': true
    }),
];
