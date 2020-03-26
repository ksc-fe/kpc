const {resolve, root} = require('../utils');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (config) => {
    config
        .mode('development')
        .resolve
            .modules
                .add(root)
                .add('node_modules')
                .end()
            .alias
                .set('vue$', 'vue/dist/vue.js')
                .set('intact$', 'intact-vue')
                .set('kpc$', resolve('index.js'))
                .set('kpc', root)
                .set('kpc-vue', root)
                .set('kpc-react', root)
                .end()
            .symlinks(false)
            .extensions
                .add('.js')
                .end()
            .end()
        // .optimization
            // .minimize(true)
            // .minimizer('uglify')
                // .use(TerserPlugin, [{
                    // test: /\.min\.js/,
                    // extractComments: false,
                    // terserOptions: {
                        // output: {
                            // comments: /^\**![\r\n]/,
                        // },
                    // }
                // }])
                // .end()
            // .splitChunks({
                // chunks: 'initial',
                // cacheGroups: {
                    // default: false,
                    // defaultVendors: false,
                // }
            // })
            // .runtimeChunk(false)
            // .end()
        .devtool('source-map')
        .plugin('progress')
            .use(webpack.ProgressPlugin)
            .end()
        // .plugin('clean')
            // .use(CleanWebpackPlugin)
            // .end();
};
