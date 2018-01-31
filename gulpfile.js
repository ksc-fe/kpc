const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.site.client');
const path = require('path');
const connect = require('gulp-connect');

gulp.task('doc', (done) => {
    console.log('build markdown');
    doc();
    done();
});

gulp.task('webpack', () => {
    const compiler = webpack(webpackConfig);
    compiler.watch({
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

gulp.task('watch', gulp.parallel('server', 'webpack', 'doc', () => {
    gulp.watch('./**/*.md', {ignored: /node_modules/}, gulp.parallel('doc'));
}));

