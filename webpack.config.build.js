const webpack = require('webpack'); const path = require('path');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// don't build monaco to buddle file, it's too big 
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function(theme, type = 'intact') {
    // add theme
    const commonConfig = merge.smartStrategy()(webpackConfig);
    if (theme) {
        commonConfig.module.rules[2].use[2].options.import =
            path.resolve(__dirname, `styles/themes/${theme}/index.styl`);
    }

    const config = merge.smartStrategy({
        'module.rules.use': 'replace'
    })(webpackConfig, {
        entry: {
            [`kpc${type !== 'intact' ? '.' + type : ''}`]: './index.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js',
            library: 'Kpc',
            libraryTarget: 'umd',
            publicPath: '',
        },
        resolve: {
            alias: {
                './components/code': './empty',
                'intact$': type === 'vue' ? 'intact-vue' : type === 'react' ? 'intact-react' : undefined,
            },
        },
        externals: type === 'intact' ? 
            {
                intact: {
                    root: 'Intact', 
                    commonjs2: 'intact',
                    commonjs: 'intact',
                    amd: 'intact',
                }
            } : type === 'vue' ? 
            {
                vue: {
                    root: 'Vue',
                    commonjs2: 'vue',
                    commonjs: 'vue',
                    amd: 'vue',
                }
            } : 
            {
                react: {
                    root: 'React',
                    commonjs2: 'react',
                    commonjs: 'react',
                    amd: 'react',
                },
                'react-dom': {
                    root: 'ReactDOM',
                    commonjs2: 'react-dom',
                    commonjs: 'react-dom',
                    amd: 'react-dom',
                }
            },
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: ExtractTextPlugin.extract({
                        // the third rule is a stylus rule
                        use: commonConfig.module.rules[2].use,
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        // the fourth rule is a css rule
                        use: commonConfig.module.rules[3].use,
                    }),
                },
            ]
        },
    });

    config.plugins = [
        // disable code splitting 
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.DefinePlugin({
            'process.browser': true
        }),
        new ExtractTextPlugin(theme ? `${theme}.css` : 'kpc.css'),
        // new MonacoWebpackPlugin(),
    ];

    return config;
}
