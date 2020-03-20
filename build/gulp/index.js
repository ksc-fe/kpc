const gulp = require('gulp');
const gulpMultiProcess = require('gulp-multi-process');

require('./dist');
require('./indexFile');
require('./packages');
require('./frameworks');

gulp.task('build', gulp.series(
    'index',
    parallel,
    'build@frameworks'
));

function parallel(cb) {
    gulpMultiProcess(['build@dist', 'build@packages'], cb)
}
