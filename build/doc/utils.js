const genConfig = require('../webpack');
const {resolve: resolvePath} = require('../utils');
const packageJson = require('../../package.json');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {extractCss, ignoreCss} = require('../webpack/extract');
const addThreadLoader = require('../webpack/thread');
const TerserPlugin = require('terser-webpack-plugin');

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

exports.destData = resolvePath('./site/data');
exports.dest = resolvePath('./site/dist');
exports.destServer = resolvePath('./site/.dist');

exports.webpackConfig = function webpackConfig() {
    const config = genConfig();

    config.output
        .path(exports.dest)
        .publicPath('/')
        .chunkFilename('static/chunk/[chunkhash].js');
    config.resolve.alias
        .set('~', exports.destData)
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
            // .end();

    addThreadLoader(config);

    return config;
};

exports.webpackConfigClient = (production) => {
    config = exports.webpackConfig();

    config.entry(`static/client`).add(resolvePath('./site/src/client.js'));
    config.plugin('html').use(HtmlWebpackPlugin, [{
        template: resolvePath('./site/src/index.html'),
    }]);

    if (production) {
        config.mode('production');
        config.plugin('demo').use(HtmlWebpackPlugin, [{
            template: resolvePath('./site/src/index.html'),
            filename: 'demo.html',
        }]);
        config.output.filename('[name].[contenthash].js').chunkFilename('static/chunk/[contenthash].js');
        config.devtool('none');
        // if we set bellow settings, it will be slow and more memory used
        // config.optimization.minimizer('uglify')
            // .use(TerserPlugin, [{
                // terserOptions: {
                    // output: {
                        // comments: false,
                    // },
                // }
            // }]);

        // console.dir(config.toConfig(), {depth: null});

        extractCss(config, 'theme-kpc.[contenthash].css');
    }

    return config;
};

exports.webpackConfigServer = () => {
    config = exports.webpackConfig();

    config.entry(`render`).add(resolvePath('./site/src/render.js'));
    config.devtool('none');
    config.target('node');
    config.output.chunkFilename('chunk/[chunkhash].js').libraryTarget('commonjs2');
    config.output.path(exports.destServer);

    ignoreCss(config);

    return config;
}
