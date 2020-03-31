const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.extractCss = (config, filename) => {
    const rules = config.module.rules;
    const hasThread = rules.get('stylus').uses.get('thread');
    const before = hasThread ? 'thread' : 'css';

    rules.get('stylus').use('extract').loader(MiniCssExtractPlugin.loader).before(before);
    rules.get('css').use('extract').loader(MiniCssExtractPlugin.loader).before(before);

    config.plugin('extract').use(MiniCssExtractPlugin, [{filename}]);

    return config;
};

exports.ignoreCss = (config) => {
    const rules = config.module.rules;

    rules.get('stylus').uses.clear().end().use('null').loader('null-loader');
    rules.get('css').uses.clear().end().use('null').loader('null-loader');
    exports.ignoreFile(config);

    return config;
};

exports.ignoreFile = (config) => {
    const rules = config.module.rules;

    rules.get('file').uses.clear().end().use('null').loader('null-loader');

    return config;
};
