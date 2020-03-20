const path = require('path');
const rimraf = require('rimraf');

const resolve = (p) => {
    return path.resolve(__dirname, '../', p);
};

module.exports = {
    resolve,

    handleError(err, stats) {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
            return;
        }

        const info = stats.toJson();
        if (stats.hasErrors()) {
            console.error(info.errors);
        }
        if (stats.hasWarnings()) {
            // console.warn(info.warnings);
        }
    },

    rm(path) {
        return new Promise(resolve => {
            rimraf(path, resolve);
        });
    },

    isIgnoreComponents(name) {
        return ['code', 'diagram'].indexOf(name) > -1;
    },

    root: resolve('./'),
};
