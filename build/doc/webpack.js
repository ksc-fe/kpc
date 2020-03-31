const genConfig = require('../webpack');
const {resolve: resolvePath} = require('../utils');
const {version} = require('../../package.json');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {extractCss, ignoreCss, ignoreFile} = require('../webpack/extract');
const addThreadLoader = require('../webpack/thread');
const TerserPlugin = require('terser-webpack-plugin');
const {addTheme} = require('../webpack/theme');
const {addStyle} = require('../webpack/style');
const nodeExternal = require('webpack-node-externals');

exports.destData = resolvePath('./site/data');
exports.dest = resolvePath('./site/dist');
exports.destServer = resolvePath('./site/.dist');

exports.webpackConfig = () => {
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
            .use(webpack.DefinePlugin, [{'process.version': JSON.stringify(version)}])
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

exports.webpackConfigClient = (production, theme = 'default') => {
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
            // disable code spliting
            config.plugin('limitChunk').use(webpack.optimize.LimitChunkCountPlugin, [{maxChunks: 1}]);
        }
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
        .contentBase([resolvePath('./site/src')]);

    addStyle(config);

    // for performance
    config.optimization.removeEmptyChunks(false).splitChunks(false);
    config.output.pathinfo(false);

    config.plugin('progress').use(webpack.ProgressPlugin);

    return config;
};

exports.webpackConfigServer = () => {
    config = exports.webpackConfig();

    config.entry(`render`).add(resolvePath('./site/src/render.js'));
    config.devtool('none');
    config.target('node');
    config.output.chunkFilename('chunk/[chunkhash].js').libraryTarget('commonjs2');
    config.output.path(exports.destServer);
    config.externals(nodeExternal());

    ignoreCss(config);

    return config;
}
