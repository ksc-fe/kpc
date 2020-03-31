const webpack = require('webpack');
const {webpackConfigServer} = require('./app/webpack');

// console.dir(webpackConfigServer().toConfig(), {depth: null});
const compiler = webpack(webpackConfigServer().toConfig());

compiler.watch({
    aggregateTimeout: 300,
    poll: 1000
}, function(err, stats) {
    if (err) console.log(err);
    console.log(stats.toString({
        colors: true
    }));
    require('./.dev/server');
});
