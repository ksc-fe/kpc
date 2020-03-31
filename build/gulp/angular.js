const gulp = require('gulp');
const {isIgnoreComponents, rm, resolve} = require('../utils');
const path = require('path');
const tap = require('gulp-tap');
const fsExtra = require('fs-extra');
const packageJson = require('../../package.json');
const ts = require('gulp-typescript');
const fs = require('fs');
const {metadata} = require('./indexFile');

const fsPromises = fs.promises;

const packageAngularPath = resolve('./packages/kpc-angular');
const angularComponentsPath = `${packageAngularPath}/components`;

const generateAngular = async () => {
    await rm(angularComponentsPath);

    for (let key in metadata) {
        const path = `${angularComponentsPath}/${key}.ts`;
        const components = metadata[key];
        const filenames = [];
        const codes = [
            `import Intact from 'intact-angular';`,
            `import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';`,
        ];
        codes.push(`import {${components.join(', ')}} from 'kpc/components/${key}';`, ``);
        for (let i = 0; i < components.length; i++) {
            const name = components[i];
            const selector = name.replace(/[A-Z]/g, (char, index) => {
                if (index) return `-${char.toLowerCase()}`;
                else return char.toLowerCase();
            });
            codes.push(`export const ${name}Component = Intact.decorate(${name}, 'k-${selector}');`);
        }
        // generate module
        codes.push(
            ``,
            `const components = [${components.map(name => `${name}Component`).join(', ')}];`,
            ``,
            `@NgModule({`,
            `    declarations: components,`,
            `    exports: components,`,
            `    schemas: [NO_ERRORS_SCHEMA]`,
            `})`,
            `export class ${key[0].toUpperCase() + key.substring(1)}Module {}`,
        );
        
        await fsExtra.ensureFile(path);
        await fsPromises.writeFile(path, codes.join('\n'));
    } 
}

const utilsPath = '../../../components/utils';
const generateAngularIndex = async () => {
    const imports = [];
    const exports = [];
    const modules = [];
    exports.push(`export {_$, localize} from '${utilsPath}';`, '');
    for (let key in metadata) {
        // ignore App and Code...
        if (key === 'app' || isIgnoreComponents(key)) continue;

        const moduleName = `${key[0].toUpperCase() + key.substring(1)}Module`;
        imports.push(`import {${moduleName}} from './${key}';`);
        exports.push(`export * from './${key}';`);
        modules.push(moduleName);
    }
    exports.push('', `export const version = '${packageJson.version}';`);
    exports.push(`export {IntactAngularBrowserModule as KpcBrowserModule} from 'intact-angular';`);

    const contents = [
`/*!
 * kpc ${packageJson.version}
 *
 * Copyright (c) Kingsoft Cloud
 * Released under the MIT License
 * 
 * Documentation available at
 * https://ksc-fe.github.io/kpc/
 */
`,
        `import {NgModule} from '@angular/core';`,
        ``,
        ...imports,
        ``,
        ...exports,
        ``,
        `@NgModule({`,
        `    exports: [`,
                modules.map(item => `        ${item},`).join('\n'),
        `    ]`,
        `})`,
        `export class KpcModule {}`,
    ].join('\n');

    await fsPromises.writeFile(`${angularComponentsPath}/index.ts`, contents);
}
const tsconfig = {
    "experimentalDecorators": true,
    "module": "esnext",
    "isolatedModules": true,
    "importHelpers": true,
};

const buildAngular = async () => {
    await generateAngular();
    await generateAngularIndex();

    return gulp.src(`${angularComponentsPath}/**/*.ts`)
        .pipe(ts(tsconfig))
        .pipe(tap(function(file) {
            let contents = file.contents.toString('utf-8');
            contents = contents.replace(/kpc\/components/g, './components');
            contents = contents.replace(utilsPath, './components/utils');
            file.contents = Buffer.from(contents);
        }))
        .pipe(gulp.dest(`${packageAngularPath}/@css`))
        .pipe(gulp.dest(`${packageAngularPath}/@stylus`));

};

gulp.task('build@angular', buildAngular);
