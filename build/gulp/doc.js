const gulp = require('gulp');
const {resolve, writeFile} = require('../utils');
const glob = require('glob');
const {handleFiles} = require('../doc/parse');
const cp = require('child_process');
const os = require('os');
const path = require('path');

const NUMS = os.cpus().length;

// const globExp = './@(docs|components)/**/*.md';
const globExp = './@(docs|components)/**/*.md';
const dest = resolve('./site/.dist');

function run(done) {
    glob(resolve(globExp), null, (err, files) => {
        const amount = Math.ceil(files.length / NUMS);
        const filesPerTask = [];
        for (let i = 0; i < NUMS; i++) {
            filesPerTask.push(files.slice(i * amount, i === NUMS - 1 ? undefined : (i + 1) * amount));
        }

        Promise.all(filesPerTask.map(files => {
            // const sp = cp.fork(resolve('./build/doc/parse.js'));
            // return new Promise(resolve => {
                // sp.send({files, dest});
                // sp.on('message', (data) => {
                    // sp.kill();
                    // resolve(data);
                // });
            // });
            const parse = require('../doc/parse');
            return parse(files, dest);
        })).then((data) => {
            return genereateSideBar(data);
        }).then(() => {
            done();
        });
    });
}

function genereateSideBar(items) {
    const sidebars = {};
    items.forEach(subItems => {
        subItems.forEach((data) => {
            if (!data) return;

            const {metadata, file, catalogs} = data;
            if (file.isDemo) return;

            const sidebar = metadata.sidebar;
            if (!sidebar) return;

            if (!sidebars[sidebar]) {
                sidebars[sidebar] = {};
            }

            const item = sidebars[sidebar];
            if (!item[metadata.category]) {
                item[metadata.category] = [];
            }

            const category = item[metadata.category];
            category.push({
                ...metadata,
                path: file.relative.replace(/\\/g, '/'),
            });
        });
    });

    return Promise.all(Object.keys(sidebars).map(name => {
        const data = sidebars[name];
        Object.keys(data).forEach(key => {
            data[key].sort((a, b) => {
                return (a.order || 0) - (b.order || 0);
            });
        });
        return writeFile(path.join(dest, `${name}.json`), JSON.stringify(data, null, 4));
    }));
}

gulp.task('test', run);
