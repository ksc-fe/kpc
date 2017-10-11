const webpack = require('webpack');
const webpackConfig = require('./webpack.config.server');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
// const MemoryFileSystem = require('memory-fs');

// const memoryFs = new MemoryFileSystem();
const compiler = webpack(webpackConfig);

// compiler.outputFileSystem = memoryFs;

compiler.watch({
    aggregateTimeout: 300,
    poll: 1000
},function(err, stats) {
    // if (err) throw err;
    if (err) console.log(err);
    console.log(stats.toString({
        colors: true
    }));
    require('./dist/server');
});


// const app = require('./core/server');
// const Advanced = require('advanced');

// app.use(webapckDevMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler));
// require('babel-register', {
    // ignore: false
// });
// require('./core/server');
