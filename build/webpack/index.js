const Config = require('webpack-chain');
const initCommon = require('./common');
const initRules = require('./rules');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const {resolve} = require('../utils');

module.exports = () => {
    const config = new Config();

    initCommon(config);
    initRules(config);

    return config;
};
