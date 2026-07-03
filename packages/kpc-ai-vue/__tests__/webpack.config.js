const path = require('path');
const genConfig = require('../../../scripts/webpack');
const {addConfig} = require('../../../test/webpack');

const resolve = (p) => path.resolve(__dirname, p);

module.exports = function() {
    const config = genConfig();

    config.module.rule('babel').use('babel').tap(options => {
        options.rootMode = 'upward';
        return options;
    });

    config.resolve.modules
        .clear()
        .add(path.resolve(__dirname, '../../kpc-ai-vue/node_modules'))
        .add(path.resolve(__dirname, '../../../node_modules'))
        .add('node_modules')
        .end()
        .alias
            .set('vue$', resolve('../../kpc-ai-vue/node_modules/vue/dist/vue.js'));

    config.devtool('inline-source-map');
    addConfig(config);

    return config;
};
