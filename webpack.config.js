const webpack = require('webpack');
const path = require('path');
const nodeExternal = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './core/server.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: 'static/chunk/[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: [/node_modules(?![\/\\]universal\-router)/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(__dirname, './.cache'),
                        }
                    }
                ]
            },
            {
                test: /\.vdt$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(__dirname, './.cache'),
                        }
                    },
                    {
                        loader: 'vdt-loader',
                        options: {
                            delimiters: ['{{', '}}'],
                            skipWhitespace: true
                        }
                    }
                ]
            },
            {
                test: /\.(styl|css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'stylus-loader', options: {'include css': true}}
                ]
            }
        ]
    },
    target: 'node',
    externals: [nodeExternal({
        whitelist: ['universal-router']
    })],
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.mjs', '.js', '.vdt'],
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
    ],
    node: {
        __dirname: false,
        __filename: false,
    },
}
