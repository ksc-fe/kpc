const gulp = require('gulp');
const {resolve} = require('../utils');
const glob = require('glob');
const {handleFiles} = require('../doc/parse');

const NUMS = 4;

function run(done) {
    glob(resolve('./@(docs|components)/**/*.md'), null, (err, files) => {
        const amount = Math.ceil(files.length / NUMS);
        const filesPerTask = [];
        for (let i = 0; i < NUMS; i++) {
            filesPerTask.push(files.slice(i * amount, i === NUMS - 1 ? undefined : (i + 1) * amount));
        }

        Promise.all(filesPerTask.map(files => {
            return handleFiles(files);
        })).then((...args) => {
            console.dir(args, {depth: null});
            done();
        });
    });
}

gulp.task('test', run);
