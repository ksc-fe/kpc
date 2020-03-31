exports.addStyle = (config, loader = 'style-loader') => {
    const rules = config.module.rules;

    rules.get('stylus').use('style').loader(loader).before('css');
    rules.get('css').use('style').loader(loader).before('css');

    return config;
};
