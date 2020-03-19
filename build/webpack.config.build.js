const Config = require('webpack-chain');
const initCommon = require('./webpack/common');
const initRules = require('./webpack/rules');
const webpack = require('webpack');
const {resolve} = require('./utils');

const config = new Config();

initCommon(config);
initRules(config);

config.entry('kpc').add(resolve('./index.js'));
config.output
    .path(resolve('./dist'))
    .filename('[name].js')
    .library('Kpc')
    .libraryTarget('umd');

// set mode to production but don't compress js
config.mode('production');
config.optimization.minimize(false);

config
    // disable code spliting
    .plugin('limitChunk').use(webpack.optimize.LimitChunkCountPlugin, [{maxChunks: 1}]).end()
    .plugin('clean').use(CleanWebpackPlugin).end();


module.exports = config;

// debug
// console.dir(module.exports, {depth: null});
