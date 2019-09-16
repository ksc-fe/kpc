const path = require('path');

module.exports = function(config) {
    // alias intact
    config.resolve.alias.intact$ = path.resolve(__dirname, './node_modules/intact-angular/dist/index.js');
    config.resolve.alias.kpc = path.resolve(__dirname, '../../@stylus');
    // add loader for style
    // config.module.rules.find(rule => {
        // if (rule.test.toString() === '/\\.css$/') {
            // rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc'));
            // return true;
        // }
    // });
    config.module.rules.find(rule => {
        if (rule.test.toString() === '/\\.styl$/') {
            rule.exclude.push(path.resolve(__dirname, '../../@stylus'));
            rule.use.find(loader => {
                if (loader.loader === 'stylus-loader') {
                    Object.assign(loader.options, {
                        'resolve url': true,
                        'include css': true,
                        'import': path.resolve(__dirname, '../../@stylus/styles/themes/ksyun/index.styl')
                    });
                    return true;
                }
            });
            return true;
        }
    });

    return config;
}
