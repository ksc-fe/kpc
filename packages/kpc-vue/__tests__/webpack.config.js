const path = require('path');
const os = require('os');
const genConfig = require('../../../scripts/webpack');
const {addStyle} = require('../../../scripts/webpack/style');
const addThread = require('../../../scripts/webpack/thread');
const {addMonaco} = require('../../../scripts/webpack/monaco');
const {destData} = require('../../../scripts/doc/webpack');
const {VueLoaderPlugin} = require('vue-loader');
const {root} = require('../../../scripts/utils');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const resolve = (p) => path.resolve(__dirname, p);

module.exports = function() {
     const config = genConfig()
        // .context(resolve(''))
        .module
            .rule('ts')
                .test(/\.ts$/)
                .use('ts')
                    .loader('ts-loader')
                    .options({
                        appendTsSuffixTo: [/\.vue$/],
                        configFile: resolve('../tsconfig.json'),
                        happyPackMode: true,
                    })
                    .end()
                .end()
            .rule('vue')
                .test(/\.vue$/)
                .use('vue')
                    .loader(resolve('../node_modules/vue-loader'))
                    .options({
                        compilerOptions: {
                            preserveWhitespace: false,
                        }
                    })
                    .end()
                .end()
            .end()
        .resolve
            .alias
                .set('vue$', resolve('../node_modules/vue/dist/vue.js'))
                .set('~', destData)
                .set('vue-router', resolve('../node_modules/vue-router/dist/vue-router.esm-bundler.js'))
            .end()
        .end()
        .plugin('vue')
            .use(VueLoaderPlugin)
            .end()
        .devtool('inline-source-map');

        config.stats({
            errorDetails: true
        });

    addThread(config);
    addStyle(config);
    addMonaco(config);

    return config;
}
