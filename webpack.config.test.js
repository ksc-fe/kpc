const webpack = require('webpack');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/',
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
                    {
                        loader: 'css-loader', 
                        options: {
                            url: true 
                        }
                    },
                    {
                        loader: 'stylus-loader', 
                        options: {
                            'include css': true,
                            // 'import': path.resolve(__dirname, 'styles/themes/test.styl'),
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
        ]
    }
};
