const webpackConfig = require('../../build/webpack');
const {addStyle} = require('../../build/webpack/style');
const addThread = require('../../build/webpack/thread');
const {addMonaco} = require('../../build/webpack/monaco');
const {destData} = require('../../build/doc/webpack');
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {root} = require('../../build/utils');

console.log(
    '\x1b[33m%s\x1b[0m',
    `If the documents of components has not been built
please run:
	npx gulp doc:prepare
`
);

const resolve = (p) => path.resolve(__dirname, p);

const createWebpackConfig = function() {
     const config = webpackConfig()
        .context(resolve(''))
        .resolve
            .alias
                .set('vue$', resolve('./node_modules/vue/dist/vue.esm-bundler.js'))
                .set('~', destData)
                .set('intact$', resolve('./node_modules/intact-vue/dist/index.js'))
                .set('vue-router', resolve('./node_modules/vue-router/dist/vue-router.esm-bundler.js'))
            .end()
        .end()
        .plugin('vue')
            .use(VueLoaderPlugin)
            .end()
        .devtool('#inline-source-map');

    addThread(config);
    addStyle(config);
    // addMonaco(config);

    return config.toConfig();
}

module.exports = function (config) {
    config.set({
        browsers: process.env.UPDATE || process.env.CI ? ['MyChromeHeadless'] : undefined,
        customLaunchers: {
            'MyChromeHeadless': {
                base: 'ChromeHeadless',
                flags: ['--window-size=1920,1080'],
            }
        },
        frameworks: ['mocha', 'sinon-chai', 'snapshot', 'mocha-snapshot'],
        reporters: ['mocha'],
        files: [
            './test/index.js',
            './test/__snapshots__/**/*.md',
        ],
        exclude: [],
        plugins : [
            'karma-mocha',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-mocha-reporter',
            'karma-sinon-chai',
            'karma-chrome-launcher',
            'karma-snapshot',
            'karma-mocha-snapshot',
        ],
        preprocessors: {
            './test/index.js': ['webpack', 'sourcemap'],
            './test/__snapshots__/**/*.md': ['snapshot'],
        },
        webpack: createWebpackConfig(),
        autoWatch: true,
        mochaReporter: {
            showDiff: true,
        },
        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd',
            }
        },
        snapshot: {
            update: process.env.UPDATE === '1',
            prune: process.env.UPDATE === '3',
        },
        logLevel: config.LOG_INFO,
        singleRun: true,
    });
};
