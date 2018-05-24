const gulp = require('gulp');
const through = require('through2');
const doc = require('./doc');
const webpack = require('webpack');
const webpackConfig = require('./site/webpack.config.client');
const webpackBuildConfig = require('./webpack.config.build');
const path = require('path');
const connect = require('gulp-connect');
const Advanced = require('advanced');
const babel = require('gulp-babel');
const Vdt = require('vdt');
const vdt = require('gulp-vdt');
const tap = require('gulp-tap');
const postcss = require('gulp-postcss');
const stylus = require('gulp-stylus');
const autoprefixer = require('autoprefixer');
const rimraf = require('rimraf');
const fs = require('fs');
const packageJson = require('./package.json');
const childProcess = require('child_process');

const pages = {
    '/': 'index',
}; 
const vdtFile = path.resolve(__dirname, './site/src/index.vdt');

gulp.task('doc', () => {
    console.log('build markdown');
    return doc(true);
});
gulp.task('doc:production', () => {
    console.log('build markdown');
    return doc(false);
});

function webpackWatch(theme) {
    const config = webpackConfig(theme);
    const compiler = webpack(config);
    return [
        compiler, 
        new Promise(resolve => {
            compiler.watch({
                aggregateTimeout: 300,
                poll: 1000, 
                ignored: /theme\-/
            }, (err, stats) => {
                console.log(stats.toString({
                    colors: true,
                }));
                resolve();
            });
        })
    ];
}

gulp.task('build:themes:css', async () => {
    const themes = ['ksyun'];
    for (let i = 0; i < themes.length; i++) {
        const theme = themes[i];
        const [, p] = webpackWatch(theme);
        await p;
    }
});

gulp.task('webpack', () => {
    const [compiler, p] = webpackWatch();
    return p;
});

gulp.task('dev:doc:server', async () => {
    await Promise.all(Object.keys(pages).map(async key => {
        await new Promise(resolve => {
            fs.writeFile(
                path.resolve(__dirname, `./site/.dist/${pages[key]}.html`),
                Vdt.renderFile(vdtFile),
                resolve
            );
        });
    }));
});

gulp.task('server', () => {
    const [compiler] = webpackWatch();

    const webpackHotMiddleware = require('webpack-hot-middleware');
    return connect.server({
        root: 'site/.dist',
        livereload: false,
        port: 4567,
        host: '0.0.0.0',
        middleware: function() {
            return [webpackHotMiddleware(compiler)];
        }
    });
});

gulp.task('watch', gulp.series('doc', gulp.parallel('server', 'build:themes:css', 'dev:doc:server', /* 'webpack', */ () => {
    gulp.watch('./@(components|docs)/**/*.md', {ignored: /node_modules/}, gulp.parallel('doc'));
})));

const rm = (path) => {
    return new Promise(resolve => {
        rimraf(path, resolve);
    });
};
gulp.task('clean:doc', () => {
    return exec(`rm -rf ./site/dist; REPO=\`git config remote.origin.url\`; echo $REPO;
        git clone -b gh-pages --single-branch $REPO ./site/dist &&
        cd ./site/dist &&
        rm -rf ./* && cd ../../`
    );
});
gulp.task('build:doc:server', () => {
    return doc(false).then(async render => {
        await Promise.all(Object.keys(pages).map(async key => {
            const data = await render(key);
            await new Promise(resolve => {
                fs.writeFile(
                    path.resolve(__dirname, `./site/dist/${pages[key]}.html`),
                    Vdt.renderFile(vdtFile, {
                        title: 'Kpc',
                        content: data.content,
                        style: data.style,
                    }),
                    resolve
                );
            });
        }));
    });
});
gulp.task('build:doc:client', (done) => {
    // webpackConfig.entry = {
        // 'static/client': './site/src/client.js'
    // };
    webpack(webpackConfig(), (err, stats) => {
        console.log(stats.toString({
            colors: true    // 在控制台展示颜色
        }));
        done();
    });
});
gulp.task('push:doc', () => {
    return exec(`cd ./site/dist && 
        git add -A;
        TIME=\`date +"%Y-%m-%d %H:%M:%S"\`;
        git commit -am "build: \${TIME}";
        git push origin gh-pages`
    );
});

gulp.task('build:doc', gulp.series('clean:doc', 'build:doc:server', 'build:doc:client'));
gulp.task('deploy:doc', gulp.series('build:doc', 'push:doc'));
gulp.task('watch:doc', gulp.series('doc:production', gulp.parallel('webpack', () => {
    gulp.watch('./@(components|docs)/**/*.md', {ignored: /node_modules/}, gulp.parallel('doc:production'));
})));


/******************
 * build packages
 ******************/

function buildVdt(destPath) {
    return gulp.src(['./components/**/*.vdt'], {base: './'})
        .pipe(vdt({
            format: 'cjs',
            delimiters: ['{{', '}}'],
            noWith: true,
            skipWhitespace: true,
        }))
        .pipe(babel())
        .pipe(tap(function(file) {
            file.path = file.path.replace('.js', '.vdt.js');
        }))
        .pipe(gulp.dest(destPath));
}

function buildFont(destPath) {
    return gulp.src('./styles/fonts/*.@(eot|svg|ttf|woff)', {base: './'})
        .pipe(gulp.dest(destPath));
}

function buildI18n(destPath) {
    return gulp.src('./i18n/**/*.js', {base: './'})
        .pipe(babel())
        .pipe(gulp.dest(destPath));
}

gulp.task('index', () => {
    const codes = [];
    const components = [];
    return gulp.src('./components/*/index.js')
        .pipe(tap((file) => {
            const paths = file.path.split('/');
            const contents = file.contents.toString('utf-8').split('\n');
            let i = contents.length - 1;
            let lastLine;
            while (i >= 0) {
                lastLine = contents[i].trim();
                if (lastLine) {
                    break;
                }
                i--;
            }
            const matches = lastLine.match(/\{(.*?)\}/);
            const names = matches[1].split(',').map(name => {
                name = name.split('as');
                return name[name.length - 1].trim();
            });
            components.push(...names);
            codes.push(`import {${names.join(', ')}} from './${paths[paths.length - 2]}';`);
        }))
        .on('end', () => {
            // add position.js
            // codes.push(`import {position} from './moveWrapper/position';`);
            // components.push('position');

            // sort
            codes.sort((a, b) => a > b ? 1 : -1);
            components.sort((a, b) => a > b ? 1 : -1);

            codes.push('', `export {\n    ${components.join(',\n    ')}\n};`);
            codes.push('', `export const version = '${packageJson.version}';`);
            const path = './components/index.js';
            const contents = fs.readFileSync(path, 'utf-8');
            const startComment = '/* generate start */';
            const startIndex = contents.indexOf(startComment) + startComment.length;
            const endIndex = contents.indexOf('/* generate end */');
            const startContents = contents.substring(0, startIndex);
            const endContents = contents.substring(endIndex);
            fs.writeFileSync(path, [startContents,  codes.join('\n'), endContents].join('\n\n'));
        });
});

gulp.task('clean@single', (done) => {
    rimraf('./dist', done);
});

gulp.task('build:js@single', (done) => {
    webpack(webpackBuildConfig(), (err, stats) => {
        console.log(stats.toString({
            colors: true    // 在控制台展示颜色
        }));
        done();
    });
    // build ksyun theme
    webpack(webpackBuildConfig('ksyun'), (err, stats) => {
        console.log(stats.toString({
            colors: true    // 在控制台展示颜色
        }));
        done();
    });
});

gulp.task('build:i18n@single', () => {
    return gulp.src('./i18n/**/*.js', {base: './'})
        .pipe(tap((file, t) => {
            webpack({
                entry: {
                    [path.basename(file.path, '.js')]: file.path,
                },
                output: {
                   path: path.resolve(__dirname, './dist/i18n'),
                   filename: '[name].js',
                   library: 'i18n',
                   libraryTarget: 'umd'
                },
                module: {
                    rules: [
                        {
                            test: /\.m?js$/,
                            exclude: [/node_modules/],
                            use: [
                                {
                                    loader: 'babel-loader',
                                    options: {
                                        cacheDirectory: path.resolve(__dirname, './.cache'),
                                    }
                                }
                            ]
                        },
                    ]
                }
            }, (err, stats) => {
                console.log(stats.toString({
                    colors: true
                }));
            });
        }));
});

gulp.task('build@single', gulp.series(
    'clean@single',
    gulp.parallel('build:js@single', 'build:i18n@single')
));

const destPath = './@css'

gulp.task('clean@css', (done) => {
    rimraf(destPath, done);
});

gulp.task('build:js', () => {
    return gulp.src(['./components/**/*.js', '!./components/**/*.spec.js'], {base: './'})
        .pipe(babel())
        .pipe(tap(function(file) {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(/\.styl(['"])/g, '.css$1');
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('build:vdt', () => {
    return buildVdt(destPath);
});

gulp.task('build:stylus', () => {
    return gulp.src(['./components/**/*.styl'], {base: './'})
        .pipe(stylus({'include css': true}))
        .pipe(postcss())
        .pipe(gulp.dest(destPath));
});

gulp.task('build:style', () => {
    return gulp.src('./styles/kpc.styl', {base: './'})
        .pipe(stylus({'include css': true}))
        .pipe(postcss())
        .pipe(gulp.dest(destPath));
});

gulp.task('build:font', () => {
    return buildFont(destPath);
});

gulp.task('build:i18n', () => {
    return buildI18n(destPath);
});

gulp.task('build@css', gulp.series(
    'clean@css', 
    gulp.parallel(
        'build:js', 'build:vdt', 'build:stylus', 
        'build:style', 'build:font', 'build:i18n'
    )
));


/****************
 * build @stylus
 ****************/

const destPathStylus = '@stylus';

gulp.task('clean@stylus', (done) => {
    rimraf(destPathStylus, done);
});

gulp.task('build:js@stylus', () => {
    return gulp.src(['./components/**/*.js', '!./components/**/*.spec.js'], {base: './'})
        .pipe(babel())
        .pipe(gulp.dest(destPathStylus));
});

gulp.task('build:vdt@stylus', () => {
    return buildVdt(destPathStylus);
});

gulp.task('build:style@stylus', () => {
    return gulp.src(
            [
                './styles/*', './styles/themes/**/*', 
                './styles/fonts/*.styl', './components/**/*.styl'
            ],
            {base: './'}
        ) 
        .pipe(gulp.dest(destPathStylus));
});

gulp.task('build:font@stylus', () => {
    return buildFont(destPathStylus);
})

gulp.task('build:i18n@stylus', () => {
    return buildI18n(destPathStylus);
});

gulp.task('build@stylus', gulp.series(
    'clean@stylus',
    gulp.parallel(
        'build:js@stylus', 'build:vdt@stylus', 
        'build:style@stylus', 'build:font@stylus',
        'build:i18n@stylus'
    )
)); 

gulp.task('build', gulp.series(
    'index',
    gulp.parallel('build@css', 'build@stylus', 'build@single')
));

function exec(command) {
    return new Promise(function(resolve, reject) {
        var cmd = childProcess.exec(command, {maxBuffer: 50000 * 1024}, function(err, stdout) {
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
