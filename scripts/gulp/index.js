const gulp = require('gulp');
const gulpMultiProcess = require('gulp-multi-process');

require('./dist');
require('./indexFile');
require('./packages');
require('./frameworks');
require('./ai-frameworks');
require('./doc');
require('./resources');
require('./demo');

gulp.task('build', gulp.series(
    'index',
    parallel,
    gulp.parallel('build@frameworks', 'build@ai-frameworks')
));

function parallel(cb) {
    gulpMultiProcess([
        'build@dist',
        'build@packages'
    ], cb)
}
