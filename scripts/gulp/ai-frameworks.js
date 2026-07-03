const gulp = require('gulp');
const {rm, resolve, root} = require('../utils');
const path = require('path');
const tap = require('gulp-tap');
const fs = require('fs-extra');

const packages = [
    {
        type: 'vue-legacy',
        packageName: 'kpc-ai-vue',
        intactPackage: 'intact-vue',
    },
    {
        type: 'vue',
        packageName: 'kpc-ai-vue-next',
        intactPackage: 'intact-vue-next',
    },
    {
        type: 'react',
        packageName: 'kpc-ai-react',
        intactPackage: 'intact-react',
    },
];

const aiExports = [
    `export * from './components/config';`,
    `export * from './components/bubble';`,
    `export * from './components/bubbleList';`,
    `export * from './components/fileCard';`,
    `export * from './components/sender';`,
    `export * from './components/think';`,
    `export * from './components/xmarkdown';`,
];

const copyEntries = ['components', 'hooks', 'i18n', 'styles'];

function prepare() {
    const entries = [
        'components',
        'hooks',
        'i18n',
        'styles',
        'index.js',
        'index.d.ts',
    ];

    return Promise.all(
        packages.reduce((memo, item) => {
            entries.forEach((entry) => {
                memo.push(rm(resolve(`./packages/${item.packageName}/${entry}`)));
            });
            return memo;
        }, [])
    );
}

function getCopyPatterns() {
    return [
        `./es/@(${copyEntries.join('|')})/**/*`,
        './es/index*',
    ];
}

function getIndexContent(contents, intactPackage, isTypes) {
    const exports = [
        ...aiExports,
        isTypes
            ? contents.match(/export declare const version = .+;/)[0]
            : contents.match(/export var version = .+;/)[0],
    ].join('\n');

    contents = contents.replace('@king-design v', '@king-design/ai v');
    contents = contents.replace(
        isTypes
            ? /export \* from '\.\/components\/[\s\S]+?export declare const version = .+;/
            : /\/\* generate start \*\/[\s\S]+?\/\* generate end \*\//,
        isTypes ? exports : `/* generate start */\n${exports}\n/* generate end */`
    );

    return `${contents}\n\nexport {normalize} from '${intactPackage}';`;
}

function generateCopyTask({type, packageName, intactPackage}) {
    const taskName = `copy@ai-${type}`;

    gulp.task(taskName, () => {
        return gulp.src(getCopyPatterns(), {base: './es', root})
            .pipe(tap((file) => {
                const extname = path.extname(file.path);
                if (extname !== '.js' && extname !== '.ts') return;

                let contents = file.contents.toString('utf-8');
                contents = contents.replace(/['"]intact["']/g, `'${intactPackage}'`);

                const filePath = path.relative(path.resolve(root, './es'), file.path);
                if (filePath === 'index.js' || filePath === 'index.d.ts') {
                    contents = getIndexContent(contents, intactPackage, extname === '.ts');
                }

                file.contents = Buffer.from(contents);
            }))
            .pipe(gulp.dest(resolve(`./packages/${packageName}`)));
    });

    return taskName;
}

const copyTasks = packages.map(generateCopyTask);

gulp.task('validate@ai-frameworks', async () => {
    const requiredFiles = [
        'index.js',
        'index.d.ts',
        'components/config/index.js',
        'components/bubble/index.js',
        'components/bubbleList/index.js',
        'components/fileCard/index.js',
        'components/fileCard/styles.js',
        'components/media/index.js',
        'components/media/styles.js',
        'components/sender/index.js',
        'components/sender/styles.js',
        'components/think/index.js',
        'components/xmarkdown/index.js',
        'styles/theme.js',
        'i18n/index.js',
        'hooks/useFixBody.js',
        'hooks/useState.js',
    ];

    const missing = [];
    packages.forEach(({packageName}) => {
        requiredFiles.forEach((file) => {
            const filepath = resolve(`./packages/${packageName}/${file}`);
            if (!fs.existsSync(filepath)) {
                missing.push(`${packageName}/${file}`);
            }
        });
    });

    if (missing.length) {
        throw new Error(`AI framework build missing files:\n${missing.join('\n')}`);
    }
});

gulp.task('build@ai-frameworks', gulp.series(
    prepare,
    gulp.parallel(...copyTasks),
    'validate@ai-frameworks',
));
