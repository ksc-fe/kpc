const gulp = require('gulp');
const rimraf = require('rimraf');
const tap = require('gulp-tap');
const path = require('path');

const dest = './kpc';

gulp.task(`clean`, (done) => {
    rimraf(dest, done);
});

gulp.task('copy', () => {
    return gulp.src(['../../@stylus/**/*', '../../@css/**/**'], {base: '../../'})
        .pipe(tap(file => {
            if (path.extname(file.path) === '.js') {
                file.contents = Buffer.from(
                    file.contents.toString('utf-8').replace(
                        /['"]intact["']/, 
                        `'intact-angular'`
                    )
                );
            }
        }))
        .pipe(gulp.dest(dest));
});

gulp.task('generate:components:css', () => {
     
});

gulp.task('build', gulp.series('clean', 'copy'));
