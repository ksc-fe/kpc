const gulp = require('gulp'); 
const genConfig = require('../webpack');
const {resolve} = require('../utils');
const webpack = require('webpack');
const rimraf = require('rimraf');
const gulpMultiProcess = require('gulp-multi-process');

const outputPath = resolve('./dist');

const frameworks = ['intact', 'vue', 'react'];
const themes = ['default', 'ksyun'];

gulp.task('clean@single', (done) => {
    rimraf(outputPath, done);
});

const parallelTasks = [];
frameworks.forEach(type => {
    themes.forEach(theme => {
        const task = `build:${type}:${theme}@single`;
        parallelTasks.push(task);
        gulp.task(task, () => {
            return buildSingleFile(theme, type);
        });
    });
});

gulp.task('_parallel@single', cb => {
    gulpMultiProcess(parallelTasks, cb);
});

gulp.task('build@single', gulp.series(
    'clean@single',
    '_parallel@single'
));

function buildSingleFile(theme, type) {
    return new Promise(resolve => {
        webpack(webpackConfig(theme, type), () => resolve());
    });
}

function webpackConfig(theme = 'default', type = 'intact') {
    const config = genConfig();

    initConfig(config);

    if (theme !== 'default') {
        // add theme
        config.module.rules.get('stylus').uses.get('stylus').tap(options => ({
            ...options,
            import: resolve(`./styles/themes/${theme}/index.styl`),
        }));
    } 

    // add entry
    config.entry(`kpc${type !== 'intact' ? `.${type}` : ''}`).add(resolve('./index.js'));

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
};

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
