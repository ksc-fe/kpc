const webpack = require('webpack');
const webpackConfig = require('./webpack.config.server');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const MemoryFileSystem = require('memory-fs');

// const memoryFs = new MemoryFileSystem();
// const compiler = webpack(webpackConfig);

// compiler.outputFileSystem = memoryFs;

// compiler.run(function(err, stats) {
    // if (err) throw err;
    // console.log(stats);
// });

require('./dist/server');

// const app = require('./core/server');
// const Advanced = require('advanced');

// app.use(webapckDevMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler));
// require('babel-register', {
    // ignore: false
// });
// require('./core/server');
