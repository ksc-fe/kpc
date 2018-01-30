const webpackConfig = require('./webpack.config.client');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge.smartStrategy({
    'entry': 'replace'
})(webpackConfig, {
    entry: {
        'static/client': './site/client.js',
    },
    output: {
        path: path.resolve(__dirname, './site'),
    },
    externals: {
        fs: 'null',
    },
});
