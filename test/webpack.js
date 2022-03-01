const webpack = require('webpack');
const genConfig = require('../scripts/webpack');
const addThread = require('../scripts/webpack/thread');
const {addStyle} = require('../scripts/webpack/style');
const {addMonaco} = require('../scripts/webpack/monaco');
const {resolve, destData} = require('../scripts/utils');

exports.webpackConfig = () => {
    const config = genConfig();

    if (process.env.UPDATE || process.env.CI) {
        config
            .module
                .rule('istanbulTs')
                    .test(/^((?!(spec|mxgraph)).)*\.ts$/)
                    .include.add(resolve('./components')).add(resolve('./hooks')).end()
                    .enforce('post')
                    .use('istanbul')
                        .loader('istanbul-instrumenter-loader')
                        .options({esModules: true})
                        .end()
                    .end()
                .rule('istanbulVdt')
                    .test(/^((?!site).)*\.vdt$/)
                    .enforce('post')
                    .use('istanbul')
                        .merge(config.module.rules.get('istanbulTs').uses.get('istanbul').entries())
                        .end()
                    .end()
                .end()
    }

    config.devtool('inline-source-map')

    addConfig(config);

    return config;
}

const addConfig = exports.addConfig = function(config) {
    addThread(config);
    addStyle(config);
    addMonaco(config);
}
