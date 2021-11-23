module.exports = function(api) {
    api.cache(true);

    const corejs = {version: 3, proposals: true};

    const config = {
        "presets": [
            // "@babel/preset-typescript",
            ["@babel/preset-env", {
                // set browserslist in package.json
                // targets: {
                    // browsers: 'last 2 versions'
                // },
                "loose": true,
                // "useBuiltIns": "usage",
                // "corejs": corejs,
                // // "modules": process.env.BUILD ? false : "cjs",
                // // "modules": "cjs",
                "modules": false,
                // "debug": true
            }],
            "@babel/preset-typescript",
            // "@babel/preset-react"
        ],
        "plugins": [
            ["@babel/plugin-transform-runtime", {
                "corejs": corejs,
                // "useESModules": true
            }],
            ["@babel/plugin-proposal-decorators", {"legacy": true}],
            // "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-do-expressions",
            ['@emotion', {
                sourceMap: false,
                autoLabel: 'never',
            }],
            // "@babel/plugin-proposal-class-properties",
            // "@babel/plugin-transform-classes",
            // // "@babel/plugin-transform-proto-to-assign"
        ]
    };

    // if (process.env.VUE_NEXT) {
        // config.plugins.push('@vue/babel-plugin-jsx');
    // } else if (!process.env.REACT) {
        // config.plugins.push('transform-vue-jsx');
    // }

    return config;
}
