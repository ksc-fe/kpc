var paths = {
    css: ['./static/**/*.@(css|styl)', './node_modules/kpc/src/all.styl'],
    images: ['./static/images/**/*.@(jpg|png)'],
    js: ['./static/js/**/*.js', './views/@(pages|components)/**/*.vdt', './node_modules/kpc/src/views/components/**/*.vdt', './node_modules/kpc/src/**/*.js'],
    requirejs: './node_modules/kpc/src/all.js',
    tpl: ['./views/*.vdt', './node_modules/kpc/src/views/*.vdt'],
    other: ['./*.@(js|json)', './app/**/*.*', './config/**/*.*'],
    sprite: './static/images/sprite/**/*.png',

    staticDest: './build/static',
    dest: './build'
};

// 处理js时，排除all.js，all.js用build:requirejs处理
paths.js.push('!' + paths.requirejs);

module.exports = paths;

