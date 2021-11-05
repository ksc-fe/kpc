const Config = require('webpack-chain');
const initCommon = require('./common');
const initRules = require('./rules');
const webpack = require('webpack');
const {resolve} = require('../utils');

module.exports = () => {
    const config = new Config();

    initCommon(config);
    initRules(config);

    return config;
};
