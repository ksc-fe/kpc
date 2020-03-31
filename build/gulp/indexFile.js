const gulp = require('gulp'); 
const tap = require('gulp-tap');
const {resolve, isIgnoreComponents} = require('../utils');
const fs = require('fs');
const packageJson = require('../../package.json');

const metadata = exports.metadata = {};

gulp.task('index', () => {
    const codes = [];
    const components = [];
    return gulp.src(resolve('./components/*/index.js'))
        .pipe(tap((file) => {
            const paths = file.path.split(/[\/\\]/);
            const contents = file.contents.toString('utf-8').split('\n');
            let i = contents.length - 1;
            let lastLine;
            while (i >= 0) {
                lastLine = contents[i].trim();
                if (lastLine) {
                    break;
                }
                i--;
            }
            const matches = lastLine.match(/\{(.*?)\}/);
            if (!matches) throw new Error('Do not forget export Component at last line!');
            const names = matches[1].split(',').map(name => {
                name = name.split(' as ');
                return name[name.length - 1].trim();
            });
            const dirname = paths[paths.length - 2];
            if (!isIgnoreComponents(dirname)) {
                components.push(...names);
                codes.push(`import {${names.join(', ')}} from './components/${dirname}';`);
            }
            metadata[dirname] = names;
        }))
        .on('end', () => {
            // add position.js
            // codes.push(`import {position} from './moveWrapper/position';`);
            // components.push('position');

            // sort
            codes.sort((a, b) => a > b ? 1 : -1);
            components.sort((a, b) => a > b ? 1 : -1);

            codes.push('', `export {\n    ${components.join(',\n    ')}\n};`);
            codes.push('', `const components = {\n    ${components.join(',\n    ')}\n};`);
            codes.push('', `export const version = '${packageJson.version}';`);
            const path = resolve('./index.js');
            let contents = fs.readFileSync(path, 'utf-8');

            // update version in copyright
            contents = contents.replace(/\* kpc v.*/, `* kpc v${packageJson.version}`);

            const startComment = '/* generate start */';
            const startIndex = contents.indexOf(startComment) + startComment.length;
            const endIndex = contents.indexOf('/* generate end */');
            const startContents = contents.substring(0, startIndex);
            const endContents = contents.substring(endIndex);
            fs.writeFileSync(path, [startContents,  codes.join('\n'), endContents].join('\n\n'));
        });

});
