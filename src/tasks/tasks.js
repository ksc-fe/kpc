var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    childProcess = require('child_process'),
    tap = require('gulp-tap'),
    imerge = require('gulp-imerge'),
    nocache = require('gulp-nocache'),
    minifyCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    vdt = require('gulp-vdt'),
    documentWrite = require('gulp-document-write'),
    path = require('path'),
    _ = require('lodash'),
    sequence = require('gulp-sequence'),
    Promise = require('bluebird'),
    rimraf = Promise.promisify(require('rimraf')),
    copy = require('gulp-copy'),
    fs = require('fs-extra'),
    paths = require('./paths');

var nocacheConf = {
    sourceContext: './',
    outputContext: './build/'
};

gulp.task('clean', function() {
    return Promise.all([
        rimraf(paths.dest),
        rimraf('./static/images/sprite')
    ]).catch(function(err) {
        console.log(err);
    });
});

gulp.task('copy', function(cb) {
    return gulp.src(paths.other)
        .pipe(copy(paths.dest));
});

// 采用copy的方式加载依赖，适用于无网络环境
gulp.task('node_modules:copy', function() {
    return Promise.promisify(fs.copy)('./node_modules', paths.dest + '/node_modules');
});
// 采用npm intall --production的方式加载依赖，适用于网络环境
gulp.task('node_modules:install', function(cb) {
    return exec('cd ./build && npm install --production');
});

gulp.task('config', function() {
    return Promise.promisify(fs.copy)(isDev() ? './config/develop.js' : './config/online.js', paths.dest + '/config/config.js');
});

gulp.task('build:media', function() {
    return gulp.src(paths.images)
        .pipe(nocache(_.extend({
            type: 'media',
            dest: paths.staticDest + (isDev() ? '/i/[name].[hash:6].[ext]' : '/i/[hash:8].[ext]') 
        }, nocacheConf)))
        .pipe(gulp.dest(function(file) {return file.base;}));
});

gulp.task('build:css', function() {
    var nocacheSprite = _.once(function() {
        return gulp.src(paths.sprite)
            .pipe(nocache(_.extend({
                type: 'media',
                dest: paths.staticDest + (isDev() ? '/i/[name].[hash:6].[ext]' : '/i/[hash:8].[ext]') 
            })))
            .pipe(gulp.dest(function(file) {return file.base;}));
    });
    return gulp.src(paths.css)
        .pipe(tap(logFile))
        .pipe(stylus())
        .pipe(imerge({
            spriteTo: './static/images/sprite',
            defaults: {
                padding: 5
            }
        }))
        .pipe(tap(nocacheSprite))
        .pipe(nocache(_.extend({
            type: 'css',
            dest: paths.staticDest + (isDev() ? '/c/[name].[hash:6].[ext]' : '/c/[hash:8].[ext]')
        }, nocacheConf)))
        .pipe(minifyCss({compatibility: 'ie7'}))
        .pipe(gulp.dest(function(file) {return file.base;}));
});

gulp.task('build:js', function() {
    return gulp.src(paths.js)
        .pipe(tap(logFile))
        .pipe(vdt({delimiters: ['{{', '}}']}))
        .pipe(documentWrite({context: nocacheConf.sourceContext}))
        .pipe(uglify())
        .pipe(nocache(_.extend({
            type: 'js',
            dest: paths.staticDest + (isDev() ? '/j/[name].[hash:6].[ext]' : '/j/[hash:8].[ext]')
        }, nocacheConf)))
        .pipe(gulp.dest(function(file) {return file.base;}));
});

gulp.task('build:requirejs', function() {   
    return gulp.src(paths.requirejs)
        .pipe(documentWrite({context: nocacheConf.sourceContext}))
        .pipe(tap(function(file) {
            var map = nocache.getMap(),
                newMap = {},
                sourceContext = path.resolve(nocacheConf.sourceContext),
                outputContext = path.resolve(nocacheConf.outputContext);
            _.each(map, function(value, key) {
                if (path.extname(key) === '.js') {
                    newMap[key.replace(sourceContext, '').replace(/\\/g, '/')] = nocache.utils.addCdn(value.replace(outputContext, '').replace(/\\/g, '/'), nocacheConf.cdn);
                }
            });
            var contents = file.contents.toString();
            var extraContent = 'var _HASH_MAP = ' + JSON.stringify(newMap) + ';\n';
            var load = "\n(function() { \
                var oldLoad = require.load; \
                require.load = function(context, moduleName, url) { \
                    if (window._HASH_MAP  !== undefined && _HASH_MAP[url]) { \
                        url = _HASH_MAP[url]; \
                    } \
                    return oldLoad(context, moduleName, url); \
                };\
            })();\n";
            contents = extraContent + contents + load;
            file.contents = new Buffer(contents);
        }))
        .pipe(uglify())
        .pipe(nocache(_.extend({
            type: 'js',
            dest: paths.staticDest + (isDev() ? '/j/[name].[hash:6].[ext]' : '/j/[hash:8].[ext]')
        }, nocacheConf)))
        .pipe(gulp.dest(function(file) {return file.base;}));
});

gulp.task('build:tpl', function() {
    return gulp.src(paths.tpl)
        .pipe(tap(logFile))
        .pipe(nocache(_.extend({
            type: 'tpl',
            dest: paths.dest + '/[path][name].[ext]'
        }, nocacheConf)))
        .pipe(gulp.dest(function(file) {return file.base;}));
});

gulp.task('cdn', function() {
    return exec('./node_modules/kpc/tools/ks3sync/ks3sync.py -f -a GRF/1cR5ev+aW4n9sJRk -s 2fKmqRZCmCslKzZDVWIPz4u/9famBecjWxN2n05+ -b ksc-console-static ./build/static/ /')
        .then(function() {
            console.log('cdn推送完成');
        }, function() {
            console.log('cdn推送失败');
        });
});

// build任务
gulp.task('build-install', sequence('clean', 'copy', 'node_modules:install', 'config', 'build:media', 'build:css', 'build:js', 'build:requirejs', 'build:tpl'));
// 如果网络不好安装不了依赖，可以使用下面命令
gulp.task('build-copy', sequence('clean', 'copy', 'node_modules:copy', 'config', 'build:media', 'build:css', 'build:js', 'build:requirejs', 'build:tpl'));

gulp.task('dev', function() {
    console.log('通过copy依赖的方式，编译开发测试代码');
    process.env.NODE_ENV = 'development';
    gulp.start('build-copy');
});
gulp.task('dev-install', function() {
    console.log('通过在线install依赖的方式，编译开发测试代码');
    process.env.NODE_ENV = 'development';
    gulp.start('build-install');
});
gulp.task('build', function() {
    console.log('通过copy依赖的方式，编译发布上线代码');
    process.env.NODE_ENV = 'production';
    nocacheConf.cdn = ['//ksc-console-static.ks3-cn-center-1.ksyun.com'];
    gulp.start('build-copy');
});
gulp.task('build-install', function() {
    console.log('通过在线install依赖的方式，编译发布上线代码');
    process.env.NODE_ENV = 'production';
    nocacheConf.cdn = ['//ksc-console-static.ks3-cn-center-1.ksyun.com'];
    gulp.start('build-insall');
});
gulp.task('default', function() {
    gulp.start('build');
});

function exec(command) {
    return new Promise(function(resolve, reject) {
        var cmd = childProcess.exec(command, function(err, stdout) {
            if (err) {
                reject(err);
            } else {
                resolve(stdout);
            }
        });
        cmd.stdout.pipe(process.stdout);
        cmd.stderr.pipe(process.stderr);
    });
}

function isDev() {
    return process.env.NODE_ENV === 'development'; 
}

function logFile(file) {
    console.log('compile:', file.path);
}
