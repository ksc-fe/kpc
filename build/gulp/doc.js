const gulp = require('gulp');
const {resolve} = require('../utils');
const glob = require('glob');
const {handleFiles} = require('../doc/parse');
const cp = require('child_process');
const os = require('os');

const NUMS = os.cpus().length;

// const globExp = './@(docs|components)/**/*.md';
const globExp = './@(docs|components)/@(app)/demos/*.md';
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
            //     sp.send({files, dest});
            //     sp.on('message', (data) => {
            //         sp.kill();
            //         resolve(data);
            //     });
            // });
            const parse = require('../doc/parse');
            return parse(files, dest);
        })).then((...args) => {
            // console.dir(args, {depth: null});
            done();
        });
    });
}

gulp.task('test', run);
