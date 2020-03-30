const gulp = require('gulp'); 
const genConfig = require('../webpack');
const {resolve, handleError, rm} = require('../utils');
const webpack = require('webpack');
const gulpMultiProcess = require('gulp-multi-process');
const {extractCss, ignoreCss, ignoreFile} = require('../webpack/extract');
const path = require('path');
const tap = require('gulp-tap');
const uglifyjs = require('gulp-uglify');
const {addTheme} = require('../webpack/theme');

const outputPath = resolve('./dist');

const frameworks = ['intact', 'vue', 'react'];
const themes = ['default', 'ksyun'];

gulp.task('clean@dist', () => {
    return rm(outputPath);
});

gulp.task('build:i18n@dist', (done) => {
    gulp.src(resolve('./i18n/**/*.js'), {base: resolve('./')})
        .pipe(tap((file, t) => {
            const config = genConfig();
            initConfig(config);
            config.entry(path.basename(file.path, '.js')).add(file.path);
            config.output.path(path.resolve(outputPath, './i18n')).library('i18n');
            webpack(config.toConfig(), (err, stats) => {
                handleError(err, stats);
                uglify(stats).then(() => done());
            });
        }));
});

const parallelTasks = ['build:i18n@dist'];
frameworks.forEach(type => {
    themes.forEach(theme => {
        // only build theme once for Intact
        // it is unnecessary to build theme for other frameworks
        if (type !== 'intact' && theme !== 'default') return;
        const task = `build:${type}:${theme}@dist`;
        parallelTasks.push(task);
        gulp.task(task, () => {
            return buildDistFile(theme, type);
        });
    });
});

const parallelDist = (cb) => gulpMultiProcess(parallelTasks, cb);
// const parallelDist = gulp.parallel(...parallelTasks);

const copyTasks = [];
['vue', 'react'].forEach(type => {
    const name = `copy:${type}@dist`;
    copyTasks.push(name);
    gulp.task(name, () => {
        return copyDistFileToPackage(type);
    })
});

gulp.task('build@dist', gulp.series(
    'clean@dist',
    parallelDist,
    gulp.parallel(...copyTasks)
));

const tmpJsFile = 'kpc.tmp';
// because we build file with multiple processes
// it exists file race
// rename the filename and delete it after building
const shouldUseTmpFile = (type, theme) => type === 'intact' && theme !== 'default';

function buildDistFile(theme, type) {
    return new Promise(resolve => {
        webpack(webpackConfig(theme, type), (err, stats) => {
            handleError(err, stats);
            if (shouldUseTmpFile(type, theme)) {
                return rm(path.resolve(outputPath, `${tmpJsFile}.js`)).then(resolve);
            }
            uglify(stats).then(resolve);
        });
    });
}

function webpackConfig(theme = 'default', type = 'intact') {
    const config = genConfig();

    initConfig(config);

    // only extract css once when we build for Intact
    if (type === 'intact') {
        extractCss(config, theme === 'default' ? 'kpc.css' : `${theme}.css`);
        if (theme !== 'default') {
            ignoreFile(config);
        }
    } else {
        ignoreCss(config);
    }

    addTheme(config, theme);

    // add entry
    if (!shouldUseTmpFile(type, theme)) {
        config.entry(`kpc${type !== 'intact' ? `.${type}` : ''}`).add(resolve('./index.js'));
    } else {
        config.entry(tmpJsFile).add(resolve('./index.js'));
    }

    // add alias
    const alias = type === 'vue' ? 'intact-vue' : type === 'react' ? 'intact-react' : 'intact'; 
    config.resolve.alias.set('intact$', alias);

    // add externals
    config.externals(type === 'intact' ? 
        {
            intact: {
                root: 'Intact', 
                commonjs2: 'intact',
                commonjs: 'intact',
                amd: 'intact',
            }
        } : type === 'vue' ? 
        {
            vue: {
                root: 'Vue',
                commonjs2: 'vue',
                commonjs: 'vue',
                amd: 'vue',
            }
        } : 
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
            }
        }
    );

    // console.dir(config.toConfig(), {depth: null});

    return config.toConfig();
}

function initConfig(config) {
    config.output
        .path(outputPath)
        .filename('[name].js')
        .library('Kpc')
        .libraryTarget('umd');

    // set mode to production but don't compress js
    config.mode('production');
    config.optimization.minimize(false);

    config
        // disable code spliting
        .plugin('limitChunk').use(webpack.optimize.LimitChunkCountPlugin, [{maxChunks: 1}]);

    return config;
}

function uglify(stats) {
    const info = stats.toJson();
    const {outputPath, assets} = info;

    return Promise.all(assets.map(file => {
        const name = file.name;
        if (!/\.js$/.test(name)) return;

        const filePath = path.resolve(outputPath, name);

        return new Promise(resolve => {
            gulp.src(filePath)
                .pipe(tap((file) => {
                    file.path = file.path.replace('.js', '.min.js');
                }))
                .pipe(uglifyjs())
                .pipe(gulp.dest(outputPath))
                .on('end', resolve);
        });
    }));
}

function copyDistFileToPackage(type) {
    const path = `./packages/kpc-${type}`;
    return rm(`${path}/dist`).then(() => {
        return gulp.src([
            './dist/fonts/**/*', 
            './dist/i18n/**/*',
            `./dist/kpc.${type}.*`,
            './dist/*.css'
        ], {base: './'})
        .pipe(gulp.dest(path));
    });
}
