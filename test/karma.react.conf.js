var webpackConfig = require('./webpack.react.config');

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
            './react.demos.js',
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
            './react.demos.js': ['webpack', 'sourcemap'],
            '**/__snapshots__/**/*.md': ['snapshot'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            // noInfo: true
        },
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
        },
        logLevel: config.LOG_INFO,
        singleRun: true,
    });
};
