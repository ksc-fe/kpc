const genConfig = require('../webpack');
const {resolve: resolvePath} = require('../utils');
const {version} = require('../../package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {extractCss, ignoreCss, ignoreFile} = require('../webpack/extract');
const addThreadLoader = require('../webpack/thread');
const TerserPlugin = require('terser-webpack-plugin');
const {addTheme} = require('../webpack/theme');
const {addStyle} = require('../webpack/style');
const {addMonaco, removeMonaco} = require('../webpack/monaco');
const nodeExternal = require('webpack-node-externals');
const path = require('path');

const destData = exports.destData = resolvePath('./site/data');
const dest = exports.dest = resolvePath('./site/dist');
const destServer = exports.destServer = resolvePath('./site/.dist');

exports.webpackConfig = (production) => {
    const config = genConfig();

    config.output
        .path(dest)
        .publicPath('/')
        .chunkFilename('static/chunk/[chunkhash].js');
    config.resolve.alias
        .set('~', destData)
        .set('@', resolvePath('./src'));
    config
        .plugin('defineVersion')
            .use(webpack.DefinePlugin, [{'process.version': JSON.stringify(version)}])
            .end()
        // .plugin('progress')
            // .use(webpack.ProgressPlugin)
            // .end();

    addMonaco(config, production);
    addThreadLoader(config);

    return config;
};

exports.webpackConfigClient = (production, theme = 'default') => {
    const config = exports.webpackConfig(production);
    // const manifest = require(path.resolve(dest, 'dll-manifest.json'));

    config.entry(`static/client`).add(resolvePath('./site/src/client.js'));
    config.plugin('html').use(HtmlWebpackPlugin, [{
        template: resolvePath('./site/src/index.html'),
        // dll: manifest.name,
    }]);
    // config.plugin('dllRef').use(webpack.DllReferencePlugin, [{
        // manifest
    // }]);

    // removeMonaco(config);

    config.optimization.splitChunks({
        cacheGroups: {
            // vendor: {
                // test: /node_modules/,
                // name: 'vendor',
                // chunks: 'initial',
                // enforce: true,
            // }
            // extract all css in a signle file
            styles: {
                name: 'styles',
                test: /\.(css|styl)$/,
                chunks: 'all',
                enforce: true,
            }
        }
    });

    if (production) {
        config.mode('production');
        config.plugin('demo').use(HtmlWebpackPlugin, [{
            template: resolvePath('./site/src/index.html'),
            // dll: manifest.name,
            filename: 'demo.html',
        }]);
        config.output
            .filename('[name].[contenthash].js')
            .chunkFilename('static/chunk/[contenthash].js')
            .publicPath('//damife.ks3-cn-beijing.ksyun.com/kpc/');
        config.devtool('none');
        config.module.rules
            .get('file').uses.get('file')
            .options({
                outputPath: 'fonts/',
                name: '[name].[contenthash].[ext]',
            });

        // If we set bellow settings, it will be slow and use more memory.
        // config.optimization.minimizer('uglify')
            // .use(TerserPlugin, [{
                // terserOptions: {
                    // output: {
                        // comments: false,
                    // },
                // }
            // }]);

        if (theme === 'default') {
            extractCss(config, `theme-kpc.${version}.css`);
        } else {
            extractCss(config, `theme-${theme}.${version}.css`);
            addTheme(config, theme);
            // ignoreFile(config);
            config.plugins.delete('html').delete('demo');
            config.optimization.minimize(false);
        }
        // disable code spliting
        config.plugin('limitChunk').use(webpack.optimize.LimitChunkCountPlugin, [{maxChunks: 1}]);
    }

    return config;
};

exports.webpackConfigDevServer = () => {
    const theme = process.env.THEME  || 'default';
    const config = exports.webpackConfigClient();

    addTheme(config, theme);

    config.devServer
        .hot(true)
        .port(4567)
        .host('0.0.0.0')
        .stats('errors-only')
        .set('liveReload', false)
        .set('historyApiFallback', {
            rewrites: [
                {from: '/demo.html', to: '/index.html'},
            ]
        })
        .contentBase([resolvePath('./site/src')/*, dest*/]);

    addStyle(config);

    // for performance
    config.optimization.removeEmptyChunks(false).splitChunks(false);
    config.output.pathinfo(false);

    config.plugin('progress').use(webpack.ProgressPlugin);

    return config;
};

exports.webpackConfigServer = () => {
    const config = exports.webpackConfig();

    config.entry(`render`).add(resolvePath('./site/src/render.js'));
    config.devtool('none');
    config.target('node');
    config.output.chunkFilename('chunk/[chunkhash].js').libraryTarget('commonjs2');
    config.output.path(destServer);
    config.externals(nodeExternal());

    removeMonaco(config);
    ignoreCss(config);

    return config;
};

exports.webpackConfigDll = () => {
    const config = exports.webpackConfig();

    config
        .entry(`dll`)
            .add('intact')
            .add('vue')
            .add('tinycolor2')
            .add('downloadjs')
            .add('mxgraphx')
            .add('mermaid')
            .add('enquire.js')
            .add('monaco-editor')
            .add('resize-observer-polyfill')
            .add('dayjs')
            .end()
        .output
            .path(dest)
            .filename('[name].[hash].js')
            .library('[name]_[hash]')
            .end()
        .plugin('dll')
            .use(webpack.DllPlugin, [{
                path: path.resolve(dest, '[name]-manifest.json'),
                name: '[name]_[hash]'
            }])
            .end()

    return config;
};
