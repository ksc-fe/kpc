const path = require('path');
const rimraf = require('rimraf');
const fs = require('fs-extra');
const childProcess = require('child_process');

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

    writeFile(file, content) {
        return fs.ensureFile(file).then(() => fs.writeFile(file, content)); 
    },

    exec(command) {
        return new Promise(function(resolve, reject) {
            var cmd = childProcess.exec(
                `sh -c '${command}'`,
                {maxBuffer: 50000 * 1024},
                (err, stdout) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(stdout);
                    }
                }
            );
            cmd.stdout.pipe(process.stdout);
            cmd.stderr.pipe(process.stderr);
        });
    },

    themes: ['default', 'ksyun'],
};
