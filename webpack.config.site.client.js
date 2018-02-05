const webpackConfig = require('./webpack.config.client');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge.smartStrategy({
    'entry': 'replace',
    'plugins': 'replace',
})(webpackConfig, {
    entry: {
        'static/client': './site/src/client.js',
    },
    output: {
        path: path.resolve(__dirname, './site'),
    },
    externals: {
        fs: 'null',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks: 3
        }),
        new webpack.ProvidePlugin({
            Intact: 'intact'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.ssr': true,
            'process.browser': true,
        }),
    ]
});
