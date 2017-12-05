const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    output: {
        path: path.resolve(__dirname, './.dev'),
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
                            url: true,
                            // sourceMap: !isProduction,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer({
                                browsers: [
                                    'last 2 versions',
                                    'ie >= 9',
                                ],
                            })],
                            // sourceMap: !isProduction,
                        }
                    },
                    {
                        loader: 'stylus-loader', 
                        options: {
                            'include css': true,
                            sourceMap: false,
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
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.mjs', '.js', '.vdt'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Intact: 'intact'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.ssr': true,
        }),
    ],
};
