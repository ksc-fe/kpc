const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge.smartStrategy({
    'module.rules.use': 'replace'
})(webpackConfig, {
    entry: {
        kpc: './components/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        library: 'Kpc',
        libraryTarget: 'umd',
    },
    externals: {
        intact: {
            root: 'Intact', commonjs2: 'intact',
            commonjs: 'intact',
            amd: 'intact',
        }
    },
    module: {
        rules: [
            {
                test: /\.(styl|css)$/,
                use: ExtractTextPlugin.extract({
                    // the third rule is a stylus rule
                    use: webpackConfig.module.rules[2].use,
                }),
            },
        ]
    },
});

module.exports.plugins = [
    new webpack.DefinePlugin({
        'process.browser': true
    }),
    new ExtractTextPlugin('kpc.css'),
    new CleanWebpackPlugin(module.exports.output.path),
];
