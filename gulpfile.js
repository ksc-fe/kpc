const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.site.client');
const path = require('path');

gulp.task('doc', () => {
    console.log('build markdown');
    doc();
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

gulp.task('watch', gulp.parallel('webpack', 'doc', () => {
    gulp.watch('./**/*.md', gulp.parallel('doc'));
}));
