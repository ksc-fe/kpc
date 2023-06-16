const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const packageJson = require('./package.json');

exports.default = {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'es',
    },
    external: [
        'vue',
        /\.(eot|woff|ttf|svg)/,
        ...Object.keys(packageJson.dependencies).filter(key => key !== 'intact-vue'),
        /@babel\/runtime-corejs3/,
    ],
    plugins: [nodeResolve(), commonjs()],
}
