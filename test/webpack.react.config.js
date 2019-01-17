const merge = require('webpack-merge');
const webpackConfig = require('../webpack.config.client');
const path = require('path');

module.exports = merge.smartStrategy()(webpackConfig, {
    resolve: {
        alias: {
            'intact$': 'intact-react',
            '~': path.resolve(__dirname, '../site/.dist'),
        }
    }
});

delete module.exports.entry;

// console.log(require('util').inspect(module.exports, {showHidden: true, depth: null}));
