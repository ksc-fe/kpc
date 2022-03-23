const {webpackConfig} = require('./webpack');
const path = require('path');
const os = require('os');

console.log(
    '\x1b[33m%s\x1b[0m',
    `If the documents of components has not been built
please run:
	npx gulp doc:prepare
`
);

const isDebug = !process.env.UPDATE && !process.env.CI

// for get font files
// https://github.com/ryanclark/karma-webpack/issues/498#issuecomment-790040818
const output = {
    path: path.join(os.tmpdir(), '_karma_webpack_') + Math.floor(Math.random() * 1000000),
};

module.exports = function (config) {
    config.set({
        browsers: !isDebug ? ['MyChromeHeadless'] : undefined,
        customLaunchers: {
            'MyChromeHeadless': {
                base: 'ChromeHeadless',
                flags: ['--window-size=1920,1080', '--force-device-scale-factor=1'],
                // flags: ['--window-size=1920,1080'],
            }
        },
        frameworks: ['webpack', 'mocha', 'sinon-chai', 'snapshot', 'mocha-snapshot'],
        reporters: ['mocha', 'coverage-istanbul'],
        files: [
            './index.ts',
            './__snapshots__/**/*.md',
            {
                pattern: `${output.path}/**/*`,
                watched: false,
                included: false,
            }
        ],
        preprocessors: {
            './index.ts': ['webpack', 'sourcemap'],
            './__snapshots__/**/*.md': ['snapshot'],
        },
        webpack: {...webpackConfig().toConfig(), output},
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
                timeout: 5000,
                // allowUncaught: true,
            }
        },
        snapshot: {
            update: process.env.UPDATE === '1',
            prune: process.env.UPDATE === '3',
        },
        logLevel: config.LOG_INFO,
        // webpack doesn't watch files when singeRun is true. https://github.com/ryanclark/karma-webpack/issues/448
        singleRun: !isDebug,
    });
};
