const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                'ie >= 9'
            ]
        })
    ]
};
