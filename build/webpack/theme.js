const {resolve} = require('../utils');

exports.addTheme = (config, theme) => {
    if (theme !== 'default') {
        // add theme
        config.module.rules.get('stylus').uses.get('stylus').tap(options => ({
            ...options,
            import: resolve(`./styles/themes/${theme}/index.styl`),
        }));
    }

    return config;
}
