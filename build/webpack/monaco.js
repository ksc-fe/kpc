const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

exports.addMonaco = (config, useHash) => {
    config.plugin('monaco').use(MonacoWebpackPlugin, useHash ? [{
        filename: '[name].[contenthash].worker.js'
    }] : undefined);

    return config;
};

exports.removeMonaco = (config) => {
    config.plugins.delete('monaco');

    return config;
}
