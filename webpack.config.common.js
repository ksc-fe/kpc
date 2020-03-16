const webpack = require('webpack');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname, './.dev'),
        filename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                // exclude: [/node_modules(?!([\/\\]universal\-router)|([\/\\]graphlibrary))/],
                exclude: [/node_modules(?!([\/\\]graphlibrary))/],
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
                            skipWhitespace: true,
                        }
                    }
                ]
            },
            // don't change the order of the stylus loader
            {
                test: /\.styl$/,
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
                            // sourceMap: !isProduction,
                        // }
                    },
                    {
                        loader: 'stylus-loader', 
                        options: {
                            'include css': true,
                            'resolve url': true,
                            sourceMap: false,
                            // 'import': path.resolve(__dirname, 'styles/themes/ksyun/index.styl'),
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader', 
                        options: {
                            url: true,
                            // minimize: isProduction,
                            // sourceMap: !isProduction,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {
                            // sourceMap: !isProduction,
                        // }
                    },
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg|jpg|png)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            preserveWhitespace: false,
                        }
                    }
                ]
            },
            // monaco-editor exists es6 syntax: `const`
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './node_modules/monaco-editor/esm/vs/language/typescript/lib/typescriptServices.js'),
                    path.resolve(__dirname, './node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-html-languageservice/beautify/beautify-css.js'),
                ],
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: 'export const ',
                            replace: 'export var ',
                            flags: 'g',
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            'vue$': 'vue/dist/vue.js',
            // for running in vue
            'intact$': 'intact-vue',
            'kpc$': path.resolve(__dirname, 'index.js'),
            'kpc': path.resolve(__dirname),
            'kpc-vue': path.resolve(__dirname),
            'kpc-react': path.resolve(__dirname),
            '@babel/runtime-corejs2/helpers/inheritsLoose': path.resolve(__dirname, 'inheritsLoose.js'),
        },
        extensions: ['.mjs', '.js', '.vdt', '.json'],
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
        new MonacoWebpackPlugin(),
    ],
};
