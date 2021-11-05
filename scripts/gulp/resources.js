const gulp = require('gulp');
const {uploadPath} = require('../doc/dist');
const {resolve} = require('../utils');

gulp.task('upload:resources', () => {
    return uploadPath(resolve('./site/resources'));
});
