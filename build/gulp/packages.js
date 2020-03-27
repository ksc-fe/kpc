const gulp = require('gulp'); 
const tap = require('gulp-tap');
const {resolve, rm, root} = require('../utils');
const babel = require('gulp-babel');
const path = require('path');
const vdt = require('gulp-vdt');
const postcss = require('gulp-postcss');
const stylus = require('gulp-stylus');

const destStylus = resolve('./@stylus');
const destCss = resolve('./@css');

function prepare() {
    process.env.BUILD = 1;
    return Promise.all([
        rm(destStylus),
        rm(destCss),
    ]);
}

gulp.task('build:js', () => {
    return gulp.src([
        './components/**/*.js', 
        '!./components/**/*.spec.js', 
        './index.js', 
        './inheritsLoose.js',
        '!./components/grid/mediaQueryForStylus.js',
    ], {base: './', root})
        .pipe(babel())
        .pipe(tap((file) => {
            let contents = file.contents.toString('utf-8');
            // replace inheritsLoose for IE compatibilty
            const relativePath = path.relative(path.dirname(file.path), resolve('./inheritsLoose'));
            contents = contents.replace('@babel/runtime-corejs3/helpers/inheritsLoose', relativePath);
            file.contents = Buffer.from(contents);
        }))
        .pipe(gulp.dest(destStylus))
        .pipe(tap(file => {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(/\.styl(['"])/g, '.css$1');
            file.contents = Buffer.from(contents);
        }))
        .pipe(gulp.dest(destCss));

});

gulp.task('build:vdt', () => {
    return gulp.src(['./components/**/*.vdt'], {base: './', root})
        .pipe(vdt({
            format: 'module',
            // format: 'cjs',
            delimiters: ['{{', '}}'],
            noWith: true,
            skipWhitespace: true,
        }))
        .pipe(babel())
        .pipe(tap(function(file) {
            file.path = file.path.replace('.js', '.vdt.js');
        }))
        .pipe(gulp.dest(destStylus))
        .pipe(gulp.dest(destCss));
});

gulp.task('build:style@stylus', () => {
    return gulp.src(
            [
                './styles/*', './styles/themes/**/*', 
                './styles/fonts/*.styl', './components/**/*.styl',
                './components/grid/mediaQueryForStylus.js',
            ],
            {base: './', root}
        ) 
        .pipe(gulp.dest(destStylus));
});

gulp.task('build:style@css', () => {
    return gulp.src(['./styles/kpc.styl', './components/**/*.styl'], {base: './', root})
        .pipe(stylus({'include css': true, define: {url: require('stylus').resolver()}}))
        .pipe(postcss())
        .pipe(gulp.dest(destCss));
});


gulp.task('build:font', () => {
    return gulp.src([
        './styles/fonts/*.@(eot|svg|ttf|woff)',
    ], {base: './', root})
        .pipe(gulp.dest(destStylus))
        .pipe(gulp.dest(destCss));
})

gulp.task('build:i18n', () => {
    return gulp.src('./i18n/**/*.js', {base: './', root})
        .pipe(babel())
        .pipe(gulp.dest(destStylus))
        .pipe(gulp.dest(destCss));
});

gulp.task('build@packages', gulp.series(
    prepare,
    gulp.parallel(
        'build:js', 'build:vdt',
        'build:style@stylus', 'build:style@css', 
        'build:font', 'build:i18n'
    )
));
