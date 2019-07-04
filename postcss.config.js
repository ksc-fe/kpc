const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                'ie >= 9'
            ]
        }),
        cssnano(),
    ]
};
