const {resolve} = require('../utils');
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (config) => {
    config
        .mode('development')
        .resolve
            .modules
                .add(resolve('./'))
                .add('node_modules')
                .end()
            .alias
                .set('vue$', 'vue/dist/vue.js')
                .set('intact$', 'intact-vue')
                .set('kpc$', resolve('index.js'))
                .set('kpc-vue', resolve('./'))
                .set('kpc-react', resolve('./'))
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
        // .plugin('clean')
            // .use(CleanWebpackPlugin)
            // .end();
};
