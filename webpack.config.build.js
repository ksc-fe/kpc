const webpack = require('webpack'); const path = require('path');
const webpackConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(theme) {
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
            kpc: './components/index.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js',
            library: 'Kpc',
            libraryTarget: 'umd',
        },
        externals: {
            intact: {
                root: 'Intact', 
                commonjs2: 'intact',
                commonjs: 'intact',
                amd: 'intact',
            }
        },
        module: {
            rules: [
                {
                    test: /\.(styl|css)$/,
                    use: ExtractTextPlugin.extract({
                        // the third rule is a stylus rule
                        use: commonConfig.module.rules[2].use,
                    }),
                },
            ]
        },
    });

    config.plugins = [
        new webpack.DefinePlugin({
            'process.browser': true
        }),
        new ExtractTextPlugin(theme ? `${theme}.css` : 'kpc.css'),
    ];

    return config;
}
