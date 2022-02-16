const genConfig = require('../../../scripts/webpack');
const {addConfig} = require('../../../test/webpack');
const {resolve} = require('../../../scripts/utils');

module.exports = function() {
    const config = genConfig();

    config.module.rule('babel').use('babel').tap(options => {
        options.rootMode = 'upward';
        return options;
    });

    config.devtool('inline-source-map');
    addConfig(config);

    return config;
}
