const webpackConfig = require('../webpack.config.client');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
process.URL_PREFIX = isDev ? '' : '/kpc';

module.exports = merge.smartStrategy({
    'entry': 'replace',
    'plugins': 'replace',
    'module.rules.use': 'replace',
})(webpackConfig, {
    entry: {
        'static/client': isDev ? 
            [
                'webpack-hot-middleware/client?reload=true',
                path.resolve(__dirname, './src/client.js'),
            ] :
            path.resolve(__dirname, './src/client.js'),
    },
    output: {
        path: isDev ? path.resolve(__dirname, './.dist') : path.resolve(__dirname, './dist'),
        publicPath: isDev ? '/' : `${process.URL_PREFIX}/`,
    },
    externals: {
        fs: 'null',
    },
    module: {
        rules: [
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './fonts/',
                            publicPath: isDev ? '/fonts/' : `${process.URL_PREFIX}/fonts/`,
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.(styl|css)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader', 
                            options: {
                                url: true,
                                // sourceMap: !isProduction,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            // options: {
                                // // sourceMap: !isProduction,
                            // }
                        },
                        {
                            loader: 'stylus-loader', 
                            options: {
                                'include css': true,
                                sourceMap: false,
                                'import': path.resolve(__dirname, '../styles/themes/ksyun/index.styl'),
                            }
                        }
                    ]
                }),
            },
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, isDev ? './.dist' : './dist'),
        }
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
                'process.URL_PREFIX': JSON.stringify(process.URL_PREFIX),
            }),
            new ExtractTextPlugin({
                filename: 'themes/default.css',
                allChunks: true,
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
