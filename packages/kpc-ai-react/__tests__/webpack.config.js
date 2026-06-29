const path = require('path');
const genConfig = require('../../../scripts/webpack');
const {addConfig} = require('../../../test/webpack');

module.exports = function() {
    const config = genConfig();

    config.module.rule('babel').use('babel').tap(options => {
        options.rootMode = 'upward';
        return options;
    });

    config.resolve.modules
        .clear()
        .add(path.resolve(__dirname, '../../kpc-ai-react/node_modules'))
        .add(path.resolve(__dirname, '../../../node_modules'))
        .add('node_modules');

    config.devtool('inline-source-map');
    addConfig(config);

    return config;
};
