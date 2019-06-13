const webpack = require('webpack');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    output: {
        path: path.resolve(__dirname, './.dev'),
        filename: '[name].js',
        publicPath: '/',
        // hotUpdateChunkFilename: 'hot/hot-update.js',
        // hotUpdateMainFilename: 'hot/hot-update.json',
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: [/node_modules(?!([\/\\]universal\-router)|([\/\\]graphlibrary))/],
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
                            minimize: isProduction,
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
                            minimize: isProduction,
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
