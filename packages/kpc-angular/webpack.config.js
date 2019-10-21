const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function(config) {
    // alias intact
    config.resolve.alias.intact$ = path.resolve(__dirname, './node_modules/intact-angular/dist/index.js');
    config.resolve.alias.kpc = path.resolve(__dirname, '../../');
    // config.plugins.push(new MonacoWebpackPlugin());
    // add loader for style
    config.module.rules.find(rule => {
        if (rule.test.toString() === '/\\.css$/') {
            rule.exclude.push(path.resolve(__dirname, '../../node_modules'));
            return true;
        }
    });
    config.module.rules.find(rule => {
        if (rule.test.toString() === '/\\.styl$/') {
            rule.exclude.push(
                path.resolve(__dirname, '../../components'),
                path.resolve(__dirname, '../../styles')
            );
            rule.use.find(loader => {
                if (loader.loader === 'stylus-loader') {
                    Object.assign(loader.options, {
                        'resolve url': true,
                        'include css': true,
                        'import': path.resolve(__dirname, '../../styles/themes/ksyun/index.styl')
                    });
                    return true;
                }
            });
            return true;
        }
    });
    config.module.rules.push(
        {
            test: /\.m?jsx?$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, '../../babel.config.js'),
                    }
                }
            ]

        },
        {
            test: /\.vdt$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, '../../babel.config.js'),
                    }
                },
                {
                    loader: 'vdt-loader',
                    options: {
                        delimiters: ['{{', '}}'],
                        skipWhitespace: true,
                    }
                }
            ]
        }
    );

    return config;
}
