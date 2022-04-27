const {webpackDemoConfig} = require('../doc/webpack');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const gulp = require('gulp');

gulp.task('demo', () => {
    const config = webpackDemoConfig().toConfig();
    // console.dir(config);
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);
    const {port, host} = config.devServer;
    server.listen(port, host, () => {
        console.log(`Starting server on http://${host}:${port}`);
    });
});
