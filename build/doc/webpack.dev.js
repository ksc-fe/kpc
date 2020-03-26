const {webpackConfig} = require('./utils');
const {resolve} = require('../utils');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const config = webpackConfig();
config.devServer
    .hot(true)
    .port(4567)
    .host('0.0.0.0')
    .stats('errors-only')
    .set('liveReload', false)
    .set('historyApiFallback', true)
    .contentBase([resolve('./site/src')]);

const rules = config.module.rules;
rules.get('stylus').use('style').loader('style-loader').before('css');
rules.get('css').use('style').loader('style-loader').before('css');

// for performance
config.optimization.removeEmptyChunks(false).splitChunks(false);
config.output.pathinfo(false);

// console.dir(config.toConfig(), {depth: null});

const smp = new SpeedMeasurePlugin();

module.exports =  smp.wrap(config.toConfig());
