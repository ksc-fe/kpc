const path = require('path');
const genConfig = require('../../../scripts/webpack');
const {VueLoaderPlugin} = require('vue-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const {addConfig} = require('../../../test/webpack');

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
                    .end()
                .end()
            .end()
        .resolve
            .alias
                .set('vue$', resolve('../node_modules/vue/dist/vue.esm-bundler.js'))
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

    addConfig(config);

    // config.plugin('ts-checker').use(ForkTsCheckerWebpackPlugin, [{
        // typescript: {
            // configFile: resolve('../tsconfig.json'),
            // diagnosticOptions: {
                // semantic: true,
                // syntactic: true,
            // },
        // },
    // }]);

    return config;
}


