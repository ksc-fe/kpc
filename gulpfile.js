const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.site.client');
const path = require('path');
const connect = require('gulp-connect');

gulp.task('doc', () => {
    console.log('build markdown');
    return doc();
});

gulp.task('webpack', () => {
    const compiler = webpack(webpackConfig);
    return compiler.watch({
        aggregateTimeout: 300,
        poll: 1000
    }, (err, stats) => {
        console.log(stats.toString({
            colors: true    // 在控制台展示颜色
        }));
    }); 
});

gulp.task('server', () => {
    connect.server({
        root: 'site',
        livereload: true,
        port: 4567,
    });
});

gulp.task('watch', gulp.series('doc', gulp.parallel('server', 'webpack', () => {
    gulp.watch('./**/*.md', {ignored: /node_modules/}, gulp.parallel('doc'));
})));

