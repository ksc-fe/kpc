module.exports = function(api) {
    api.cache(true);

    const corejs = {version: 3, proposals: true};

    const config = {
        "presets": [
            ["@babel/preset-env", {
                // targets: {
                    // // browsers: 'last 2 versions'
                    // esmodules: true,
                // },
                // "loose": true,
                // "useBuiltIns": "usage",
                // "corejs": '3.6',
                "modules": process.env.BUILD ? false : "cjs",
                // "modules": "cjs",
                // "debug": true
            }],
            "@babel/preset-react"
        ],
        "plugins": [
            ["@babel/plugin-transform-runtime", {
                // "corejs": false,
                "corejs": corejs,
                "useESModules": true
            }],
            ["@babel/plugin-proposal-decorators", {"legacy": true}],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-do-expressions",
            // "@babel/plugin-transform-proto-to-assign"
        ]
    };

    if (process.env.VUE_NEXT) {
        config.plugins.push('@vue/babel-plugin-jsx');
    } else if (!process.env.REACT) {
        config.plugins.push('transform-vue-jsx');
    }

    return config;
}
