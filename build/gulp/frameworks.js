const gulp = require('gulp');
const {rm, resolve, root} = require('../utils');
const path = require('path');
const tap = require('gulp-tap');
require('./angular');

function prepare() {
    const entries = ['components', 'i18n', 'styles', 'index.js', 'inheritsLoose.js', '@stylus'];

    return Promise.all([
        ...['vue', 'react'].reduce((memo, type) => {
            memo.push(rm(resolve(`./@${type}`)));
            entries.forEach(entry => {
                memo.push(rm(resolve(`./packages/kpc-${type}/${entry}`)));
            });
            return memo;
        }, []),
        ...['css', 'stylus'].map(item => rm(resolve(`./packages/kpc-angular/@${item}`))),
    ]);
}

const tasks = [];
function generateCopy(type) {
    const name = `copy@${type}`;
    tasks.push(name);
    gulp.task(name, () => {
        let ret = gulp.src(['./@css/**/*', './@stylus/**/*'], {base: './', root})
            .pipe(tap(file => {
                if (path.extname(file.path) === '.js') {
                    const contents = file.contents.toString('utf-8');
                    file.contents = Buffer.from(contents.replace(/['"]intact["']/, `'intact-${type}'`));
                }
            }));

        if (type !== 'angular') {
            ret = ret.pipe(gulp.dest(resolve(`./@${type}`)));
        }

        return ret
            .pipe(tap(file => {
                if (type !== 'angular' && /@css/.test(file.path)) {
                    file.base = resolve(`./@${type}/@css`)
                }
            }))
            .pipe(gulp.dest(resolve(`./packages/kpc-${type}`)));
    });
}

['vue', 'react', 'angular'].forEach(type => generateCopy(type));

gulp.task('build@frameworks', gulp.series(prepare, gulp.parallel(...tasks, 'build@angular')));
