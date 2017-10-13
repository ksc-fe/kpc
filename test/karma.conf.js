var webpackConfig = require('../webpack.config.test');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS', 'Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    exclude: [],
    plugins : [
      'karma-mocha', 
      'karma-webpack', 
      'karma-sourcemap-loader', 
      'karma-spec-reporter',
      'karma-sinon-chai', 
      'karma-coverage', 
      'karma-jasmine', 
      'karma-phantomjs-launcher', 
      'karma-chrome-launcher'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    //coverage option
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
	  logLevel: config.LOG_INFO,
	  singleRun: true,
    port: 9876,
  })
};
