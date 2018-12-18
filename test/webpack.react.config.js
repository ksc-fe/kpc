const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge.smartStrategy()(webpackConfig, {
    resolve: {
        alias: {
            'intact$': 'intact-react',
        }
    }
});

// console.log(require('util').inspect(module.exports, {showHidden: true, depth: null}));
