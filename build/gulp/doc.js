const {prepare, parseFiles, globExp} = require("../doc/generate");
const {destData, destServer, dest, webpackConfigDevServer} = require('../doc/webpack');
const {buildClient, buildServer, staticize, upload} = require("../doc/dist");
const gulp = require('gulp');
const {exec, rm, resolve, themes} = require('../utils');
const gulpMultiProcess = require('gulp-multi-process');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('doc:clean:data', () => {
    return rm(destData);
});

let data;
gulp.task('doc:prepare', () => {
    return prepare().then(i => data = i);
});

gulp.task('doc:server', () => {
    const config = webpackConfigDevServer().toConfig();
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);
    const {port, host} = config.devServer;
    server.listen(port, host, () => {
        console.log(`Starting server on http://${host}:${port}`);
    });
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
    'doc:clean:data',
    'doc:prepare',
    gulp.parallel('doc:server', 'doc:watch')
));

gulp.task('doc:clean:dist', () => {
    return Promise.all([
        exec(`rm -rf ./site/dist; REPO=\`git config remote.origin.url\`; echo $REPO;
            git clone --reference ./ -b gh-pages --single-branch $REPO ./site/dist --depth=1 &&
            cd ./site/dist &&
            rm -rf ./* && cd ../../`
        ),
        rm(destServer),
    ]);
});

gulp.task('doc:build:server', buildServer);

const parallelTasks = ['doc:build:server'];

themes.forEach(theme => {
    const task = `doc:build:client:${theme}`;
    parallelTasks.push(task);
    gulp.task(task, () => buildClient(theme));
});

gulp.task('doc:build:webpack', (cb) => gulpMultiProcess(parallelTasks, cb));

function staticizeDoc() {
    return staticize(data);
}

gulp.task('copy:imgs', () => {
    return gulp.src([
        resolve('./site/src/imgs/design/*'),
        resolve('./site/src/imgs/favicon.ico'),
    ], {base: resolve('./site/src')})
        .pipe(gulp.dest(dest));
});

gulp.task('copy:cname', () => {
    return gulp.src(resolve('./site/CNAME'))
        .pipe(gulp.dest(dest));
});

gulp.task('doc:build', gulp.series(
    gulp.parallel('doc:clean:dist', 'doc:clean:data'),
    'doc:prepare',
    'doc:build:webpack',
    staticizeDoc,
    gulp.parallel('copy:imgs', 'copy:cname')
));

gulp.task('doc:upload', upload);

gulp.task('doc:push', () => {
    return exec(`cd ./site/dist && 
        git add -A;
        TIME=\`date +"%Y-%m-%d %H:%M:%S"\`;
        git commit -m "build: \${TIME}";
        git push origin gh-pages`
    );
});


gulp.task('doc:deploy', gulp.series(
    'doc:build',
    'doc:upload',
    'doc:push',
));

// gulp.task('test', gulp.series('doc:prepare', staticizeDoc));
