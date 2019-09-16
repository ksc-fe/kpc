const gulp = require('gulp'); 
const through = require('through2');
const doc = require('./scripts/doc');
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
const uglifyjs = require('gulp-uglify');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fsExtra = require('fs-extra');

const fsPromises = fs.promises;

const pages = {
    '/': 'index',
}; 
const vdtFile = path.resolve(__dirname, './site/src/index.vdt');
const isDev = process.env.NODE_ENV !== 'production';

let globalIframes;

gulp.task('doc', () => {
    console.log('build markdown');
    return doc(true).then(({iframes}) => {
        globalIframes = iframes;
    });
});
gulp.task('doc:production', () => {
    console.log('build markdown');
    return doc(false).then(({iframes}) => {
        globalIframes = iframes;
    });
});

function webpackWatch(theme) {
    const config = webpackConfig(theme);
    return webpackBuild(config);
}

function webpackBuild(config) {
    const compiler = webpack(config);
    return [
        compiler, 
        new Promise(resolve => {
            const callback = (err, stats) => {
                console.log(stats.toString({
                    colors: true,
                }));
                resolve();
            };
            isDev ? 
                compiler.watch({
                    aggregateTimeout: 300,
                    poll: 1000, 
                    ignored: /(theme\-)|(hot\-update)|(static\/client)/
                }, callback) : 
                compiler.run(callback);
        })
    ];
}

gulp.task('build:iframes', async () => {
    await Promise.all(globalIframes.map(iframe => {
        const config = webpackConfig('__nouse');
        config.entry = iframe;
        const [, p] = webpackBuild(config);
        return p;
    }));
});

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
    pages.demo = 'demo';
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
    const [compiler] = webpackWatch(process.env.THEME);
    const webpackHotMiddleware = require('webpack-hot-middleware');
    return connect.server({
        root: ['site/.dist', 'site/src'],
        livereload: false,
        port: 4567,
        host: '0.0.0.0',
        middleware: function() {
            return [webpackHotMiddleware(compiler)];
        }
    });
});

gulp.task('clean:doc:dev', () => {
    return exec(`rm -rf ./site/.dist`);
});

gulp.task('noop', () => {});

gulp.task('watch', gulp.series(
    'clean:doc:dev', 
    'doc', 
    gulp.parallel(
        'server',
        'build:iframes',
        process.env.THEME ? 'noop' : 'build:themes:css', 
        'dev:doc:server', 
        // 'webpack',
        () => {
            gulp.watch(
                './@(components|docs)/**/*.md', 
                {ignored: /node_modules/}, 
                gulp.parallel('doc')
            );
        }
    )
));

const rm = (path) => {
    return new Promise(resolve => {
        rimraf(path, resolve);
    });
};
gulp.task('clean:doc', () => {
    return exec(`rm -rf ./site/dist; REPO=\`git config remote.origin.url\`; echo $REPO;
        git clone -b gh-pages --single-branch $REPO ./site/dist --depth=1 &&
        cd ./site/dist &&
        rm -rf ./* && cd ../../`
    );
});
gulp.task('build:doc:server', () => {
    return doc(false).then(async ({render, iframes}) => {
        globalIframes = iframes;
        await Promise.all(Object.keys(pages).map(async key => {
            const data = await render(key);
            await new Promise(resolve => {
                fs.writeFile(
                    path.resolve(__dirname, `./site/dist/${pages[key]}.html`),
                    Vdt.renderFile(vdtFile, {
                        title: 'KPC',
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
            colors: true
        }));
        done();
    });
});
gulp.task('push:doc', () => {
    return exec(`cd ./site/dist && 
        git add -A;
        TIME=\`date +"%Y-%m-%d %H:%M:%S"\`;
        git commit -m "build: \${TIME}";
        git push origin gh-pages`
    );
});

gulp.task('copy:imgs', () => {
    return gulp.src(['./site/src/imgs/design/*', './site/src/imgs/favicon.ico'], {base: './site/src'})
        .pipe(gulp.dest('./site/dist/'));
});

gulp.task('copy:cname', () => {
    return gulp.src('./site/CNAME')
        .pipe(gulp.dest('./site/dist'));
});

gulp.task('build:doc', gulp.series('clean:doc', 'build:doc:server', 'build:doc:client', 'build:themes:css', 'build:iframes', 'copy:imgs', 'copy:cname'));
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
            format: 'module',
            // format: 'cjs',
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
    return gulp.src([
        './styles/fonts/*.@(eot|svg|ttf|woff)',
    ], {base: './'})
        .pipe(gulp.dest(destPath));
}

function buildI18n(destPath) {
    return gulp.src('./i18n/**/*.js', {base: './'})
        .pipe(babel())
        .pipe(gulp.dest(destPath));
}

const metadata = {};
gulp.task('index', () => {
    const codes = [];
    const components = [];
    return gulp.src('./components/*/index.js')
        .pipe(tap((file) => {
            const paths = file.path.split(/[\/\\]/);
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
            if (!matches) throw new Error('Do not forget export Component at last line!');
            const names = matches[1].split(',').map(name => {
                name = name.split(' as ');
                return name[name.length - 1].trim();
            });
            components.push(...names);
            codes.push(`import {${names.join(', ')}} from './components/${paths[paths.length - 2]}';`);
            metadata[paths[paths.length - 2]] = names;
        }))
        .on('end', () => {
            // add position.js
            // codes.push(`import {position} from './moveWrapper/position';`);
            // components.push('position');

            // sort
            codes.sort((a, b) => a > b ? 1 : -1);
            components.sort((a, b) => a > b ? 1 : -1);

            codes.push('', `export {\n    ${components.join(',\n    ')}\n};`);
            codes.push('', `const components = {\n    ${components.join(',\n    ')}\n};`);
            codes.push('', `export const version = '${packageJson.version}';`);
            const path = './index.js';
            let contents = fs.readFileSync(path, 'utf-8');

            // update version in copyright
            contents = contents.replace(/\* kpc v.*/, `* kpc v${packageJson.version}`);

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

function buildSingleFile(type) {
    const p1 = new Promise(resolve => {
        webpack(webpackBuildConfig(null, type), (err, stats) => {
            resolve();
        });
    });
    const p2 = new Promise(resolve => {
        webpack(webpackBuildConfig('ksyun', type), (err, stats) => {
            resolve();
        });
    });

    return [p1, p2];
}
gulp.task('build:js@single', () => {
    return Promise.all(buildSingleFile());
});
gulp.task('build:vue@single', () => {
    return Promise.all(buildSingleFile('vue'));
});
gulp.task('build:react@single', () => {
    return Promise.all(buildSingleFile('react'));
});

gulp.task('build:i18n@single', (done) => {
    gulp.src('./i18n/**/*.js', {base: './'})
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
                done();
            });
        }));
});

gulp.task('inject@single', () => {
    return gulp.src(['./dist/kpc.js', './dist/kpc.vue.js', './dist/kpc.react.js'], {base: './'})
        .pipe(tap(file => {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(
                `return (pathPrefix ? stripTrailingSlash(pathPrefix) + '/' : '') + paths[label];`,
                `return 'data:text/javascript;charset=utf-8,' + encodeURIComponent('importScripts("' + (pathPrefix ? stripTrailingSlash(pathPrefix) + '/' : '') + paths[label] + '")')`
            );
            contents = [
                `// get the url for this script file to init crossdomain webworker #312`,
                `(function() {`,
                `    var scripts = document.getElementsByTagName('script');`,
                `    var index = scripts.length - 1;`,
                `    var src = scripts[index].src;`,
                `    window.__webpack_public_path__ = src.substring(0, src.lastIndexOf('/'));`,
                `})();`,
                ``
            ].join('\n') + contents;
            fs.writeFileSync(file.path,  contents);
        }));
});

gulp.task('uglify@single', () => {
    return gulp.src('./dist/**/*.js')
        .pipe(tap((file) => {
            file.path = file.path.replace('.js', '.min.js');
            // const filename = path.basename(file.path);
            // if (/^kpc/.test(filename)) {
                // contents = file.contents.toString('utf-8');
                // contents = contents.replace(/"([^\.]*)\.worker\.js"/g, '"$1.worker.min.js"');
                // file.contents = Buffer.from(contents);
            // }
        }))
        .pipe(uglifyjs())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build@single', gulp.series(
    'clean@single',
    gulp.parallel('build:js@single', 'build:vue@single', 'build:react@single', 'build:i18n@single'),
    // 'inject@single',
    'uglify@single'
));

const destPath = './@css';

gulp.task('clean@css', (done) => {
    rimraf(destPath, done);
});

gulp.task('build:js', () => {
    return gulp.src([
        './components/**/*.js', 
        '!./components/**/*.spec.js', 
        './index.js', 
        './inheritsLoose.js',
        '!./components/grid/mediaQueryForStylus.js',
    ], {base: './'})
        .pipe(babel())
        .pipe(tap(function(file) {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(/\.styl(['"])/g, '.css$1');
            // replace inheritsLoose for IE compatibilty
            contents = contents.replace('@babel/runtime-corejs2/helpers/inheritsLoose', '../../inheritsLoose');
            file.contents = Buffer.from(contents);
        }))
        .pipe(gulp.dest(destPath));
});

gulp.task('build:vdt', () => {
    return buildVdt(destPath);
});

// gulp.task('build:stylus', () => {
    // return gulp.src(['./components/**/*.styl'], {base: './'})
        // .pipe(stylus({'include css': true, 'resolve url': true}))
        // .pipe(postcss())
        // .pipe(gulp.dest(destPath));
// });

gulp.task('build:style', () => {
    return gulp.src(['./styles/kpc.styl', './components/**/*.styl'], {base: './'})
        .pipe(stylus({'include css': true, define: {url: require('stylus').resolver()}}))
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
        'build:js', 'build:vdt',
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
    return gulp.src([
        './components/**/*.js', 
        '!./components/**/*.spec.js', 
        './index.js', 
        './inheritsLoose.js',
        '!./components/grid/mediaQueryForStylus.js',
    ], {base: './'})
        .pipe(babel())
        .pipe(tap(function(file) {
            let contents = file.contents.toString('utf-8');
            // replace inheritsLoose for IE compatibilty
            contents = contents.replace('@babel/runtime-corejs2/helpers/inheritsLoose', '../../inheritsLoose');
            file.contents = Buffer.from(contents);
        }))
        .pipe(gulp.dest(destPathStylus));
});

gulp.task('build:vdt@stylus', () => {
    return buildVdt(destPathStylus);
});

gulp.task('build:style@stylus', () => {
    return gulp.src(
            [
                './styles/*', './styles/themes/**/*', 
                './styles/fonts/*.styl', './components/**/*.styl',
                './components/grid/mediaQueryForStylus.js',
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

// build for Vue, React and Angular
function generateTask(type, dest) {
    dest= dest || `./@${type}`;
    gulp.task(`clean@${type}`, (done) => {
        rimraf(dest, done);
    });
    gulp.task(`copy@${type}`, () => {
        return gulp.src(['./@css/**/*', './@stylus/**/*'], {base: './'})   
            .pipe(tap(file => {
                if (path.extname(file.path) === '.js') {
                    file.contents = Buffer.from(file.contents.toString('utf-8').replace(/['"]intact["']/, `'intact-${type}'`));
                }
            }))
            .pipe(gulp.dest(dest));
    });
    gulp.task(`build@${type}`, gulp.series(`clean@${type}`, `copy@${type}`));
}

generateTask('vue');
generateTask('react');
generateTask('angular', './packages/angular/kpc');

// generate components for Angular
const angularComponentsPath = `./packages/angular/components`;
const generateAngular = async (type) => {
    await rm(angularComponentsPath);

    for (let key in metadata) {
        const path = `${angularComponentsPath}/${key}.ts`;
        const components = metadata[key];
        const filenames = [];
        const codes = [
            `import Intact from 'intact-angular';`,
            `import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';`,
        ];
        codes.push(`import {${components.join(', ')}} from 'kpc/components/${key}'`, ``);
        for (let i = 0; i < components.length; i++) {
            const name = components[i];
            const selector = name.replace(/[A-Z]/g, (char, index) => {
                if (index) return `-${char.toLowerCase()}`;
                else return char.toLowerCase();
            });
            codes.push(`export const ${name}Component = Intact.decorate(${name}, 'k-${selector}');`);
        }
        // generate module
        codes.push(
            ``,
            `const components = [${components.map(name => `${name}Component`).join(', ')}];`,
            ``,
            `@NgModule({`,
            `    declarations: components,`,
            `    exports: components,`,
            `    schemas: [NO_ERRORS_SCHEMA]`,
            `})`,
            `export class ${key[0].toUpperCase() + key.substring(1)}Module {}`,
        );
        
        await fsExtra.ensureFile(path);
        await fsPromises.writeFile(path, codes.join('\n'));
    } 
}

const generateAngularIndex = async () => {
    const imports = [];
    const exports = [];
    const modules = [];
    for (let key in metadata) {
        const moduleName = `${key[0].toUpperCase() + key.substring(1)}Module`;
        imports.push(`import {${moduleName}} from './${key}';`);
        exports.push(`export * from './${key}';`);
        modules.push(moduleName);
    }

    const contents = [
        `import {NgModule} from '@angular/core';`,
        ``,
        ...imports,
        ``,
        ...exports,
        ``,
        `@NgModule({`,
        `    exports: [`,
                modules.map(item => `        ${item},`).join('\n'),
        `    ]`,
        `})`,
        `export class KpcModule {}`,
    ].join('\n');

    await fsPromises.writeFile(`${angularComponentsPath}/index.ts`, contents);
}
gulp.task('_generate:angular', async () => {
    // await generateAngular('css');
    await generateAngular('stylus');
    await generateAngularIndex();
});
gulp.task('generate:angular', gulp.series('index', '_generate:angular'));

// build
gulp.task('build', gulp.series(
    'index',
    gulp.parallel('build@css', 'build@stylus', 'build@single'),
    gulp.parallel('build@vue', 'build@react')
));

function exec(command) {
    return new Promise(function(resolve, reject) {
        var cmd = childProcess.exec(`sh -c '${command}'`, {maxBuffer: 50000 * 1024}, function(err, stdout) {
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

// get the lines of all codes
gulp.task('code', () => {
    const codes = [];
    return gulp.src([
        './components/**/@(index|variables).@(styl|vdt|js)',
        './styles/**/*.styl'
    ])
        .pipe(tap((file) => {
            codes.push(`// @file ${path.relative(file._cwd, file.path)}`);
            codes.push(file.contents.toString('utf-8'));
        }))
        .on('end', () => {
            const path = './dist/code.js';
            fs.writeFileSync(path, codes.join('\n'));
        });
});
