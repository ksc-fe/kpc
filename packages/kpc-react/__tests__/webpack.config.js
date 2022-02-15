const genConfig = require('../../../scripts/webpack');
const {addConfig} = require('../../../test/webpack');

module.exports = function() {
    const config = genConfig();

    config.devtool('inline-source-map');
    addConfig(config);

    return config;
}
