const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

exports.addMonaco = (config) => {
    config.plugin('monaco').use(MonacoWebpackPlugin);

    return config;
};

exports.removeMonaco = (config) => {
    config.plugins.delete('monaco');

    return config;
}
