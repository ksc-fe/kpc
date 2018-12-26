module.exports = function(api) {
    api.cache(true);

    return {
        "presets": [
            ["@babel/preset-env", {
                "loose": true, 
                "targets": {
                    "browsers": [
                        "ie >= 9",
                        "> 1%",
                        "last 2 versions"
                    ]
                },
                "useBuiltIns": "usage",
                // "modules": process.env.BUILD ? false : "cjs",
                // "debug": true
            }], 
            "@babel/preset-react"
        ],
        "plugins": [
            ["@babel/plugin-transform-runtime", {"corejs": 2}],
            ["@babel/plugin-proposal-decorators", {"legacy": true}],
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-do-expressions",
            "transform-vue-jsx",
            // "@babel/plugin-transform-proto-to-assign"
        ]
    }
}
