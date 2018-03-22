var webpackConfig = require('./webpack.config');
var path = require('path');

module.exports = function (config) {
    config.set({
        // browsers: ['PhantomJS', 'Chrome'],
        browsers: process.env.UPDATE ? ['Chrome'] : undefined,
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
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-snapshot',
            'karma-mocha-snapshot',
        ],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap'],
            '**/__snapshots__/**/*.md': ['snapshot'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            // noInfo: true
        },
        autoWatch: true,
        coverageIstanbulReporter: {
            reports: [ 'html', 'text-summary' ],
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
            update: !!process.env.UPDATE,
        },
        logLevel: config.LOG_INFO,
        singleRun: true,
    });
};
