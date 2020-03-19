const Config = require('webpack-chain');
const initCommon = require('./webpack/common');
const initRules = require('./webpack/rules');

const config = new Config();

initCommon(config);
initRules(config);

// config.mode('production');

console.dir(config.toConfig(), {depth: null});

module.exports = config.toConfig();

// const {resolve} = require('./utils');

// module.exports = {
    // mode: 'development',
    // entry: {
        // kpc: resolve('../index.js'),
    // },
    // output: {
        // path: resolve('../dist'),
        // filename: '[name].js',
        // library: 'Kpc',
        // libraryTarget: 'umd',
    // },
// };
