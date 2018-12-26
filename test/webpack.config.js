const webpackConfig = require('../webpack.config.client');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge.smartStrategy({
    'module.rules.use': 'prepend',
})(webpackConfig, {
    module: {
        rules: [
            {
                test: /^((?!spec).)*\.js$/,
                include: path.resolve(__dirname, '../components'),
                enforce: 'post',
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true,
                    }
                }
            },
            {
                test: /^((?!site).)*\.vdt$/,
                // include: path.resolve(__dirname, '../components'),
                enforce: 'post',
                use: [
                    {
                        loader: 'istanbul-instrumenter-loader',
                        options: {
                            esModules: true,
                        }
                    },
                ]
            },
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, '../site/.dist'),
            // '~': path.resolve(__dirname, '../site/dist'),
            // 'kpc': path.resolve(__dirname, '../@stylus'),
        }
    },
});
delete module.exports.entry;

// console.log(require('util').inspect(module.exports, {showHidden: true, depth: null}));
