const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.site.client');
const webpackBuildConfig = require('./webpack.config.build');
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
const fs = require('fs');

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

function buildVdt(destPath) {
    return gulp.src(['./components/**/*.vdt'], {base: './'})
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
        .pipe(gulp.dest(destPath));
}

function buildFont(destPath) {
    return gulp.src('./styles/fonts/*.@(eot|svg|ttf|woff)', {base: './'})
        .pipe(gulp.dest(destPath));
}

gulp.task('index', () => {
    const codes = ['/* generate automatically */\n'];
    const components = [];
    return gulp.src('./components/*/index.js')
        .pipe(tap((file) => {
            const paths = file.path.split('/');
            const contents = file.contents.toString('utf-8').split('\n');
            let i = contents.length - 1;
            let lastLine;
            while (i >= 0) {
                lastLine = contents[i].trim();
                if (lastLine) {
                    break;
                }
                i--;
            }
            const matches = lastLine.match(/\{(.*?)\}/);
            const names = matches[1].split(',').map(name => {
                name = name.split('as');
                return name[name.length - 1].trim();
            });
            components.push(...names);
            codes.push(`import {${names.join(', ')}} from './${paths[paths.length - 2]}';`);
        }))
        .on('end', () => {
            // add position.js
            // codes.push(`import {position} from './moveWrapper/position';`);
            // components.push('position');

            codes.push('', `export {\n    ${components.join(',\n    ')}\n};`);
            fs.writeFileSync('./components/index.js', codes.join('\n'));
        });
});

gulp.task('build@single', (done) => {
    webpack(webpackBuildConfig, (err, stats) => {
        console.log(stats.toString({
            colors: true    // 在控制台展示颜色
        }));
        done();
    });
});

const destPath = './@css'

gulp.task('clean@css', (done) => {
    rimraf(destPath, done);
});

gulp.task('build:js', () => {
    return gulp.src(['./components/**/*.js', '!./components/**/*.spec.js'], {base: './'})
        .pipe(babel())
        .pipe(tap(function(file) {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(/\.styl(['"])/g, '.css$1');
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('build:vdt', () => {
    return buildVdt(destPath);
});

gulp.task('build:stylus', () => {
    return gulp.src(['./components/**/*.styl'], {base: './'})
        .pipe(stylus({'include css': true}))
        .pipe(postcss())
        .pipe(gulp.dest(destPath));
});

gulp.task('build:style', () => {
    return gulp.src('./styles/kpc.styl', {base: './'})
        .pipe(stylus({'include css': true}))
        .pipe(postcss())
        .pipe(gulp.dest(destPath));
});

gulp.task('build:font', () => {
    return buildFont(destPath);
});

gulp.task('build@css', gulp.series(
    'clean@css', 
    gulp.parallel('build:js', 'build:vdt', 'build:stylus', 'build:style', 'build:font')
));


/****************
 * build @stylus
 ****************/

const destPathStylus = '@stylus';

gulp.task('clean@stylus', (done) => {
    rimraf(destPathStylus, done);
});

gulp.task('build:js@stylus', () => {
    return gulp.src(['./components/**/*.js', '!./components/**/*.spec.js'], {base: './'})
        .pipe(babel())
        .pipe(gulp.dest(destPathStylus));
});

gulp.task('build:vdt@stylus', () => {
    return buildVdt(destPathStylus);
});

gulp.task('build:style@stylus', () => {
    return gulp.src(
            [
                './styles/*', './styles/themes/**/*', 
                './styles/fonts/*.styl', './components/**/*.styl'
            ],
            {base: './'}
        ) 
        .pipe(gulp.dest(destPathStylus));
});

gulp.task('build:font@stylus', () => {
    return buildFont(destPathStylus);
})

gulp.task('build@stylus', gulp.series(
    'clean@stylus',
    gulp.parallel('build:js@stylus', 'build:vdt@stylus', 'build:style@stylus', 'build:font@stylus')
)); 

gulp.task('build', gulp.series(
    'index',
    gulp.parallel('build@css', 'build@stylus', 'build@single')
));
