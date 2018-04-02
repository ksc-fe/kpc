const webpackConfig = require('../webpack.config.client');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'production';

module.exports = merge.smartStrategy({
    'entry': 'replace',
    'plugins': 'replace',
})(webpackConfig, {
    entry: {
        'static/client': isDev ? 
            [
                'webpack-hot-middleware/client?reload=true',
                './src/client.js',
            ] :
            './src/client.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    externals: {
        fs: 'null',
    },
    devtool: isDev ? '#inline-source-map' : 'none',
    plugins: (function() {
        const plugins = [
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
        ];

        if (isDev) {
            plugins.push(new webpack.HotModuleReplacementPlugin());
        } else {
            plugins.push(new webpack.optimize.UglifyJsPlugin());
        }

        return plugins;
    })(),
});
