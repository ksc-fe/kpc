const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
process.URL_PREFIX = isDev ? '' : '/kpc';

module.exports = function(theme) {
    const commonConfig = webpackConfig(theme);

    return merge.smartStrategy({
        'entry': 'replace',
        // 'plugins': 'replace',
    })(commonConfig, {
        entry: {
            // don't let different theme to change the same entry file
            [!theme ? 'static/client' : '__nouse']: isDev && !theme ? 
                [
                    'webpack-hot-middleware/client?reload=true',
                    path.resolve(__dirname, './src/client.js'),
                ] :
                path.resolve(__dirname, './src/client.js'),
        },
        externals: {
            fs: 'null',
        },
        plugins: (function() {
            const plugins = [
                new webpack.optimize.CommonsChunkPlugin({
                    children: true,
                    async: true,
                    minChunks: 3
                }),
                new webpack.DefinePlugin({
                    'process.ssr': true,
                    'process.browser': true,
                    'process.URL_PREFIX': JSON.stringify(process.URL_PREFIX),
                }),
            ];

            if (isDev && !theme) {
                plugins.push(new webpack.HotModuleReplacementPlugin());
            } else {
                plugins.push(new webpack.optimize.UglifyJsPlugin());
            }

            return plugins;
        })(),
    });
}
