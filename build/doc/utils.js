const genConfig = require('../webpack');
const {resolve: resolvePath} = require('../utils');
const packageJson = require('../../package.json');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {extractCss} = require('../webpack/extract');
const addThreadLoader = require('../webpack/thread');

exports.dedent = function dedent(scripts, number = 1) {
    if (typeof scripts === 'string') {
        scripts = scripts.split('\n');
    }
    
    const ret = [];
    for (let i = 0; i < scripts.length; i++) {
        const item = scripts[i];
        if (Array.isArray(item)) {
            ret.push.apply(ret, dedent(item, number));
        } else if (item !== undefined) {
            ret.push(item.substring(4 * number));
        }
    }

    return ret;
}

exports.indent = function indent(scripts, number = 1) {
    if (!scripts) return [];
    if (typeof scripts === 'string') {
        scripts = scripts.split('\n');
    }

    const ret = [];
    for (let i = 0; i < scripts.length; i++) {
        const item = scripts[i];
        if (Array.isArray(item)) {
            ret.push.apply(ret, indent(item, number));
        } else if (item !== undefined) {
            ret.push('    '.repeat(number) + item);
        }
    }

    return ret;
}

const defaultsRegExp = /\n\s{4}defaults\(\) \{\n\s+return ([^;]*?);?\n\s{4}\}/;
exports.getDefaults = function getDefaults(js) {
    const matches = js.match(defaultsRegExp);
    if (matches) {
        let data;
        try {
            eval(`data = ${matches[1]}`);
        } catch (e) {}
        return data; 
    }
}

exports.dest = resolvePath('./site/data');

exports.webpackConfig = function webpackConfig() {
    const config = genConfig();

    config.entry(`static/client`).add(resolvePath('./site/src/client.js'));
    config.output
        .path(resolvePath('./site/dist'))
        .publicPath('/')
        .chunkFilename('static/chunk/[chunkhash].js');
    config.resolve.alias
        .set('~', exports.dest)
        .set('@', resolvePath('./src'));
    config
        .plugin('defineVersion')
            .use(webpack.DefinePlugin, [{'process.version': JSON.stringify(packageJson.version)}])
            .end()
        .plugin('monaco')
            .use(MonacoWebpackPlugin)
            .end()
        // .plugin('progress')
            // .use(webpack.ProgressPlugin)
            // .end()
        .plugin('html')
            .use(HtmlWebpackPlugin, [{template: resolvePath('./site/src/index.html')}])
            .end();

    addThreadLoader(config);

    return config;
}

