const gulp = require('gulp');
const {rm, resolve, root} = require('../utils');
const path = require('path');
const tap = require('gulp-tap');
require('./angular');

function prepare() {
    const entries = ['components', 'i18n', 'styles', 'index.js', 'inheritsLoose.js', '@stylus'];

    return Promise.all([
        ...['vue', 'react', 'vue-next'].reduce((memo, type) => {
            if (type !== 'vue-next') {
                memo.push(rm(resolve(`./@${type}`)));
            }
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
                    const intact = type === 'vue-next' ? 'intact-vue' : 'intact-' + type;
                    file.contents = Buffer.from(contents.replace(/['"]intact["']/, `'${intact}'`));
                }
            }));

        if (type !== 'angular' && type !== 'vue-next') {
            // this will change file.path
            ret = ret.pipe(gulp.dest(resolve(`./@${type}`)));
        }

        return ret
            .pipe(tap(file => {
                if (/@css/.test(file.path)) {
                    if (type === 'vue-next') {
                        file.base = resolve('./@css');
                    } else if (type !== 'angular') {
                        file.base = resolve(`./@${type}/@css`);
                    }
                }
            }))
            .pipe(gulp.dest(resolve(`./packages/kpc-${type}`)));
    });
}

['vue', 'react', 'angular', 'vue-next'].forEach(type => generateCopy(type));

gulp.task('build@frameworks', gulp.series(prepare, gulp.parallel(...tasks, 'build@angular')));
