const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.site.client');
const path = require('path');
const connect = require('gulp-connect');
const Advanced = require('advanced');

gulp.task('doc', () => {
    console.log('build markdown');
    return doc(true);
});

function webpackWatch() {
    const compiler = webpack(webpackConfig);
    return [
        compiler, 
        compiler.watch({
            aggregateTimeout: 300,
            poll: 1000
        }, (err, stats) => {
            console.log(stats.toString({
                colors: true    // 在控制台展示颜色
            }));
        }) 
    ];
}

gulp.task('webpack', () => {
    const [compiler, p] = webpackWatch();
    return p;
});

gulp.task('server', () => {
    const [compiler] = webpackWatch();

    const webpackHotMiddleware = require('webpack-hot-middleware');
    return connect.server({
        root: 'site',
        livereload: true,
        port: 4567,
        middleware: function() {
            return [webpackHotMiddleware(compiler)];
        }
    });
});

gulp.task('watch', gulp.series('doc', gulp.parallel('server', /* 'webpack', */ () => {
    gulp.watch('./@(components|docs)/**/*.md', {ignored: /node_modules/}, gulp.parallel('doc'));
})));

