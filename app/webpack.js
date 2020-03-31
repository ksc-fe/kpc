const webpack = require('webpack');
const genConfig = require('../build/webpack');
const addThread = require('../build/webpack/thread');
const {addStyle} = require('../build/webpack/style');
const {addMonaco} = require('../build/webpack/monaco');
const {resolve} = require('../build/utils');
const nodeExternal = require('webpack-node-externals');

function webpackConfig() {
    const config = genConfig();

    config
        .output
            .path(resolve('./.dev'))
            .filename('[name].js')
            .publicPath('/')
            .end()
        .plugin('hot')
            .use(webpack.HotModuleReplacementPlugin)
            .end()
        .plugin('name')
            .use(webpack.NamedModulesPlugin)
            .end()
        .plugin('progress')
            .use(webpack.ProgressPlugin)
            .end()

    addThread(config);

    return config;
}

exports.webpackConfigClient = () => {
    const config = webpackConfig();

    // addStyle(config, 'vue-style-loader');
    addStyle(config);
    addMonaco(config);

    config
        .entry('static/client')
            .add('webpack-hot-middleware/client?reload=true')
            .add('./app/client.js')
            .end()
        .output
            .chunkFilename('static/chunk/[chunkhash].js')
            .end();

    return config;
}

exports.webpackConfigServer = () => {
    const config = webpackConfig();

    addStyle(config, 'node-style-loader');

    config
        .entry('server')
            .add('webpack/hot/poll?1000')
            .add('./app/server.js')
            .end()
        .output
            .chunkFilename('chunk/[chunkhash].js')
            .end()
        .target('node')
        .plugin('banner')
            .use(webpack.BannerPlugin, [{
                banner: 'require("source-map-support").install();',
                raw: true,
                entryOnly: false,
            }])
            .end()
        .externals([
            nodeExternal({whitelist: ['webpack/hot/poll?1000']}),
            {'./webpack': 'commonjs ../app/webpack'},
        ])

    return config;
}
