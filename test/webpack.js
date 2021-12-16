const webpack = require('webpack');
const genConfig = require('../scripts/webpack');
const addThread = require('../scripts/webpack/thread');
const {addStyle} = require('../scripts/webpack/style');
const {addMonaco} = require('../scripts/webpack/monaco');
const {resolve} = require('../scripts/utils');
const {destData} = require('../scripts/doc/webpack');

exports.webpackConfig = () => {
    const config = genConfig();

    if (process.env.UPDATE || process.env.CI) {
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
    }

    config
        .resolve
            .alias
                .set('~', destData)
                .set('intact$', 'intact/dist/index.esm.js')
                .end()
            .end()
        .devtool('inline-source-map')

    addConfig(config);

    return config;
}

exports.webpackConfigReact = () => {
    const config = genConfig();

    config.resolve.alias.set('~', destData).set('intact$', 'intact-react');
    config.devtool('inline-source-map');

    addConfig(config);

    return config;
}

function addConfig(config) {
    // addThread(config);
    // addStyle(config);
    // addMonaco(config);
}
