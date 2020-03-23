const gulp = require('gulp');
const {resolve} = require('../utils');
const glob = require('glob');
const {handleFiles} = require('../doc/parse');
const cp = require('child_process');

const NUMS = 4;

function run(done) {
    glob(resolve('./@(docs|components)/**/*.md'), null, (err, files) => {
        const amount = Math.ceil(files.length / NUMS);
        const filesPerTask = [];
        for (let i = 0; i < NUMS; i++) {
            filesPerTask.push(files.slice(i * amount, i === NUMS - 1 ? undefined : (i + 1) * amount));
        }

        Promise.all(filesPerTask.map(files => {
            const sp = cp.fork(resolve('./build/doc/parse.js'));
            return new Promise(resolve => {
                sp.send(files);
                resolve();
                sp.on('close', (code) => {
                    console.log('code');
                });
                sp.on('exit', (code) => {
                    console.log(code);
                    resolve();
                });
            });
        })).then((...args) => {
            console.dir(args, {depth: null});
            done();
        });
    });
}

gulp.task('test', run);

process.on('message', (data) => {
    console.log(data);
});

