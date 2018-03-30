const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.site.client');
const path = require('path');
const connect = require('gulp-connect');
const Advanced = require('advanced');
const babel = require('gulp-babel');
const vdt = require('gulp-vdt');
const tap = require('gulp-tap');
const postcss = require('gulp-postcss');
const stylus = require('gulp-stylus');
const autoprefixer = require('autoprefixer');
const rimraf = require('rimraf');

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


/******************
 * build packages
 ******************/

gulp.task('clean:build', (done) => {
    rimraf('./packages', done);
});

gulp.task('build:js', () => {
    return gulp.src(['./components/**/*.js', '!./components/**/*.spec.js'])
        .pipe(babel())
        .pipe(tap(function(file) {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(/\.styl/g, '.css');
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest('./packages/build/components'));
});

gulp.task('build:vdt', () => {
    return gulp.src(['./components/**/*.vdt'])
        .pipe(vdt({
            format: 'cjs',
            delimiters: ['{{', '}}'],
            noWith: true,
            skipWhitespace: true,
        }))
        .pipe(babel())
        .pipe(tap(function(file) {
            file.path = file.path.replace('.js', '.vdt.js');
        }))
        .pipe(gulp.dest('./packages/build/components'));
});

gulp.task('build:stylus', () => {
    return gulp.src(['./components/**/*.styl'])
        .pipe(stylus({'include css': true}))
        .pipe(postcss())
        .pipe(gulp.dest('./packages/build/components'));
});

gulp.task('build:style', () => {
    return gulp.src('./styles/kpc.styl')
        .pipe(stylus({'include css': true}))
        .pipe(postcss())
        .pipe(gulp.dest('./packages/build/styles'));
});

gulp.task('build:font', () => {
    return gulp.src('./styles/fonts/*.@(eot|svg|ttf|woff)')
        .pipe(gulp.dest('./packages/build/styles/fonts'));
});

gulp.task('build', gulp.series(
    'clean:build', 
    (gulp.parallel('build:js', 'build:vdt', 'build:stylus', 'build:style', 'build:font'))
));

