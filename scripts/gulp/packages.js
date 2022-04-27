const gulp = require('gulp');
const tap = require('gulp-tap');
const {resolve, rm, root} = require('../utils');
const babel = require('gulp-babel');
const path = require('path');
const vdt = require('gulp-vdt');
const stylus = require('gulp-stylus');
const ts = require('gulp-typescript');

const destEs = resolve('./es');
const tsProject = ts.createProject(resolve('./tsconfig.json'));

function prepare() {
    process.env.BUILD = 1;
    return Promise.all([
        rm(destEs),
    ]);
}

gulp.task('build:js', () => {
    const tsResult = tsProject.src().pipe(tsProject());

    return Promise.all([
        tsResult.js
            .pipe(babel())
            .pipe(gulp.dest(destEs)),
        tsResult.dts
            .pipe(gulp.dest(destEs)),
    ]);
});

gulp.task('build:vdt', () => {
    return gulp.src(['./components/**/*.vdt'], {base: './', root})
        .pipe(vdt())
        .pipe(babel())
        .pipe(tap(function(file) {
            file.path = file.path.replace('.js', '.vdt.js');
        }))
        .pipe(gulp.dest(destEs));
});

gulp.task('build:font', () => {
    return gulp.src([
        './styles/fonts/*.@(eot|svg|ttf|woff)',
    ], {base: './', root})
        .pipe(gulp.dest(destEs));
})

gulp.task('build@packages', gulp.series(
    prepare,
    gulp.parallel(
        'build:js',
        'build:vdt',
        'build:font',
    )
));
