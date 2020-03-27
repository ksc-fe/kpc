const {prepare, parseFiles, globExp, dest} = require("../doc");
const gulp = require('gulp');
const {exec, rm} = require('../utils');

gulp.task('doc:clean', () => {
    return rm(dest);
});

gulp.task('doc:prepare', prepare);

gulp.task('doc:server', () => {
    return exec('npx webpack-dev-server --config build/doc/webpack.dev.js');
});

gulp.task('doc:watch', () => {
    const watcher = gulp.watch(globExp);
    watcher.on('change', (path) => {
        console.log('Changed', path);
        return parseFiles([path]).then(() => {
            console.log('Done');
        });
    });
    watcher.on('add', (path) => {
        console.log('Added', path);
        return parseFiles([path]).then(() => {
            console.log('Done');
        });
    });
});

gulp.task('doc:dev', gulp.series(
    'doc:clean',
    'doc:prepare',
    gulp.parallel('doc:server', 'doc:watch')
));
