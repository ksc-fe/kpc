const {resolve: resolvePath, writeFile} = require('../utils');
const glob = require('glob');
const cp = require('child_process');
const os = require('os');
const path = require('path');
const {destData} = require('./utils');
const parse = require('./parse');

const NUMS = os.cpus().length;
// const NUMS = 2;

// const globExp = './@(docs|components)/**/*.md';
const globExp = resolvePath('./@(docs|components)/**/*.md');

function prepare() {
    return new Promise(resolve => {
        glob(globExp, null, (err, files) => {
            parseFiles(files).then((data) => {
                // data = data.flat();
                data = data.reduce((memo, data) => {
                    memo = memo.concat(data);
                    return memo;
                }, []);
                return genereateSideBar(data).then(() => data);
            }).then((data) => {
                resolve(data);
            });
        });
    });
}

function parseFiles(files) {
    if (files.length < 8) {
        return Promise.all([parse(files, destData)]);
    }

    const amount = Math.ceil(files.length / NUMS);
    const filesPerTask = [];
    for (let i = 0; i < NUMS; i++) {
        filesPerTask.push(files.slice(i * amount, i === NUMS - 1 ? undefined : (i + 1) * amount));
    }
    return Promise.all(filesPerTask.map(files => {
        const sp = cp.fork(resolvePath('./build/doc/parse.js'));
        return new Promise(resolve => {
            sp.send({files, dest: destData});
            sp.on('message', (data) => {
                sp.kill();
                resolve(data);
            });
        });
    }));
}

function genereateSideBar(items) {
    const sidebars = {};
    items.forEach((data) => {
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

    return Promise.all(Object.keys(sidebars).map(name => {
        const data = sidebars[name];
        Object.keys(data).forEach(key => {
            data[key].sort((a, b) => {
                return (a.order || 0) - (b.order || 0);
            });
        });
        return writeFile(path.join(destData, `${name}.json`), JSON.stringify(data, null, 4));
    }));
}

exports.prepare = prepare;
exports.parseFiles = parseFiles;
exports.globExp = globExp;
exports.destData = destData;
