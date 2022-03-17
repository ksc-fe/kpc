const {webpackConfig} = require('./webpack');
const path = require('path');

console.log(
    '\x1b[33m%s\x1b[0m',
    `If the documents of components has not been built
please run:
	npx gulp doc:prepare
`
);

module.exports = function (config) {
    config.set({
        browsers: process.env.UPDATE || process.env.CI ? ['MyChromeHeadless'] : undefined,
        customLaunchers: {
            'MyChromeHeadless': {
                // base: 'ChromeHeadless',
                base: 'Chrome',
                flags: ['--window-size=1920,1080'],
            }
        },
        frameworks: ['mocha', 'sinon-chai', 'snapshot', 'mocha-snapshot'],
        reporters: ['mocha', 'coverage-istanbul'],
        files: [
            './index.js',
            '**/__snapshots__/**/*.md',
        ],
        exclude: [],
        plugins : [
            'karma-mocha',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-mocha-reporter',
            'karma-sinon-chai',
            'karma-coverage-istanbul-reporter',
            // 'karma-jasmine',
            'karma-chrome-launcher',
            'karma-snapshot',
            'karma-mocha-snapshot',
        ],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap'],
            '**/__snapshots__/**/*.md': ['snapshot'],
        },
        webpack: webpackConfig().toConfig(),
        webpackMiddleware: {
            // noInfo: true
        },
        autoWatch: true,
        coverageIstanbulReporter: {
            reports: [ 'html', 'lcovonly', 'text-summary' ],
            dir: path.join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true
        },
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
