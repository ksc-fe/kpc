const webpack = require('webpack');
const path = require('path');
const nodeExternal = require('webpack-node-externals');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV !== 'production';
// process.URL_PREFIX = isDev ? '' : '/kpc';
process.URL_PREFIX = '';

module.exports = function(theme) {
    const commonConfig = webpackConfig(theme);

    return merge.smartStrategy({
        // 'module.rules.use': 'prepend',
        // 'plugins': 'replace',
    })(commonConfig, {
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
        plugins: [
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
}

