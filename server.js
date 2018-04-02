const webpack = require('webpack');
const webpackConfig = require('./webpack.config.server');
const compiler = webpack(webpackConfig);

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
