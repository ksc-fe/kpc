const gulp = require('gulp');
const {resolve: resolvePath, writeFile, handleError} = require('../utils');
const glob = require('glob');
const {handleFiles} = require('./parse');
const cp = require('child_process');
const os = require('os');
const path = require('path');
const genConfig = require('../webpack');
const webpack = require('webpack');
const packageJson = require('../../package.json');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {extractCss} = require('../webpack/extract');
const connect = require('gulp-connect');
const webpackHotMiddleware = require('webpack-hot-middleware');
const {dest} = require('./utils');
const parse = require('./parse');

const NUMS = os.cpus().length;
// const NUMS = 2;

// const globExp = './@(docs|components)/**/*.md';
const globExp = resolvePath('./@(docs|components)/**/*.md');

function prepare() {
    return new Promise(resolve => {
        glob(globExp, null, (err, files) => {
            parseFiles(files).then((datas) => {
                return genereateSideBar(datas);
            }).then(() => {
                resolve();
            });
        });
    });
}

function parseFiles(files) {
    if (files.length < 8) {
        return Promise.all([parse(files, dest)]);
    }

    const amount = Math.ceil(files.length / NUMS);
    const filesPerTask = [];
    for (let i = 0; i < NUMS; i++) {
        filesPerTask.push(files.slice(i * amount, i === NUMS - 1 ? undefined : (i + 1) * amount));
    }
    return Promise.all(filesPerTask.map(files => {
        const sp = cp.fork(resolvePath('./build/doc/parse.js'));
        return new Promise(resolve => {
            sp.send({files, dest});
            sp.on('message', (data) => {
                sp.kill();
                resolve(data);
            });
        });
    }));
}

function genereateSideBar(items) {
    const sidebars = {};
    items.forEach(subItems => {
        subItems.forEach((data) => {
            if (!data) return;

            const {metadata, file, catalogs} = data;
            if (file.isDemo) return;

            const sidebar = metadata.sidebar;
            if (!sidebar) return;

            if (!sidebars[sidebar]) {
                sidebars[sidebar] = {};
            }

            const item = sidebars[sidebar];
            if (!item[metadata.category]) {
                item[metadata.category] = [];
            }

            const category = item[metadata.category];
            category.push({
                ...metadata,
                path: file.relative.replace(/\\/g, '/'),
            });
        });
    });

    return Promise.all(Object.keys(sidebars).map(name => {
        const data = sidebars[name];
        Object.keys(data).forEach(key => {
            data[key].sort((a, b) => {
                return (a.order || 0) - (b.order || 0);
            });
        });
        return writeFile(path.join(dest, `${name}.json`), JSON.stringify(data, null, 4));
    }));
}

function staticize() {
    return new Promise(resolve => {
        const config = webpackConfig();
        webpack(config.toConfig(), (err, stats) => {
            handleError(err, stats);
            resolve();
        });
    });
}

function watch() {
    return new Promise(resolve => {
        const config = webpackConfig();
        config.plugin('hot').use(webpack.HotModuleReplacementPlugin);
        compiler = webpack(config.toConfig());
        compiler.watch(null, (err, stats) => {
            handleError(err, stats);
        });
        connect.server({
            root: ['site/.dist', 'site/src'],
            livereload: false,
            port: 4567,
            host: '0.0.0.0',
            middleware: function() {
                return [webpackHotMiddleware(compiler)];
            }
        });
    });
}

function webpackConfig() {
    const config = genConfig();

    config.entry(`static/client`).add(resolvePath('./site/src/client.js'));
    config.output
        .path(resolvePath('./site/test'))
        .publicPath('/')
        .chunkFilename('static/chunk/[chunkhash].js');
    config.resolve.alias
        .set('~', dest)
        .set('@', resolvePath('./src'));
    config
        .plugin('defineVersion')
            .use(webpack.DefinePlugin, [{'process.version': JSON.stringify(packageJson.version)}])
            .end()
        .plugin('monaco')
            .use(MonacoWebpackPlugin)
            .end()
        .plugin('html')
            .use(HtmlWebpackPlugin, [{template: resolvePath('./site/src/index.html')}])
            .end();

    extractCss(config, 'kpc.css');
        
    // console.dir(config.toConfig(), {depth: null});
    return config;
}

exports.prepare = prepare;
exports.parseFiles = parseFiles;
exports.watch = watch;
exports.globExp = globExp;
exports.dest = dest;
