const webpack = require('webpack');
const genConfig = require('../build/webpack');
const addThread = require('../build/webpack/thread');
const {addStyle} = require('../build/webpack/style');
const {addMonaco} = require('../build/webpack/monaco');
const {resolve} = require('../build/utils');
const {destData} = require('../build/doc/webpack');

exports.webpackConfig = () => {
    const config = genConfig();

    config
        .module
            .rule('istanbulJs')
                .test(/^((?!(spec|mxgraph)).)*\.js$/)
                .include.add(resolve('./components')).end()
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
                    .merge(config.module.rules.get('istanbulJs').uses.get('istanbul').entries())
                    .end()
                .end()
            .end()
        .resolve
            .alias
                .set('~', destData)
                .end()
            .end()
        .devtool('#inline-source-map')

    addConfig(config);

    return config;
}

exports.webpackConfigReact = () => {
    const config = genConfig();

    config.resolve.alias.set('~', destData).set('intact$', 'intact-react');

    addConfig(config);

    return config;
}

function addConfig(config) {
    addThread(config);
    addStyle(config);
    addMonaco(config);
}
