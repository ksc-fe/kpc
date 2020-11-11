const {resolve: resolvePath, writeFile, handleError, rm} = require('../utils');
const {dest, destServer, webpackConfigServer, webpackConfigClient, webpackConfigDll} = require('./webpack');
const path = require('path');
const webpack = require('webpack');
const {prepare} = require('./generate');
const fs = require('fs-extra');
const KS3 = require('ks3');

function buildClient(theme) {
    return new Promise(resolve => {
        const config = webpackConfigClient(true, theme);
        const tmpJsFile = 'tmp.js';
        const useTmp = theme !== 'default';
        if (useTmp) {
            config.output.filename(tmpJsFile);
        }
        webpack(config.toConfig(), (err, stats) => {
            handleError(err, stats);
            // generate stats.json for visualizer
            // return writeFile(
                // path.resolve(dest, 'stats.json'),
                // JSON.stringify(stats.toJson())
            // ).then(resolve);
            if (useTmp) {
                return rm(path.resolve(dest, tmpJsFile)).then(resolve);
            }
            resolve();
        });
    });
}

function buildServer() {
    return new Promise(resolve => {
        const config = webpackConfigServer();
        webpack(config.toConfig(), (err, stats) => {
            handleError(err, stats);
            resolve();
        });
    });
}

function buildDll() {
    return new Promise(resolve => {
        const config = webpackConfigDll();
        webpack(config.toConfig(), (err, stats) => {
            handleError(err, stats);
            resolve();
        });
    });
}

function staticize(data) {
    const render = require(path.join(destServer, './render.js')).default;
    const indexFile = path.join(dest, './index.html');
    return fs.readFile(indexFile, 'utf-8').then(contents => {
        // add /index.html /docs/resources/index.html
        data = [
            ...data,
            {metadata: {}, file: {isDemo: false, relative: ''}},
            {metadata: {}, file: {isDemo: false, relative: 'docs/resources'}},
        ];
        return Promise.all(data.map(({metadata, file}) => {
            if (!metadata.iframe && file.isDemo) return;

            const filePath = metadata.iframe ? `iframe/${file.relative}` : file.relative;
            return render(`/${filePath ? filePath + '/' : ''}`).then(({content}) => {
                content = contents.replace(`<div id="page"></div>`, () => {
                    return `<div id="page">${content}</div>`;
                });
                return writeFile(path.join(dest, filePath, 'index.html'), content);
            });
        }));
    });
}

function uploadPath(filePath) {
    const AK = process.env.KS3_AK;
    const SK = process.env.KS3_SK;
    const bucketName = 'damife';
    const key = 'kpc';
    const region = 'BEIJING'; //BEIJING|SHANGHAI|HONGKONG|AMERICA

    const ks3 = new KS3(AK, SK, bucketName, region);
    console.log('Start upload files to ks3. Time:' + new Date());
    console.log('Upload "' + filePath + '" to "' + key + '"');
    return new Promise(resolve => {
        ks3.upload.start({
            Bucket: bucketName,
            filePath: filePath,
            region: region,
            Key: key,
            ACL: 'public-read',
            fileSetting: {
                isDeep: true,
                ignore: /\.(swp|ds_store|git)$/i,
            }
        }, (err, data, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                console.log('Upload finished. Time:' + new Date());
                resolve();
            }
        }, {
            'Cache-Control': 'no-cache,max-age=0'
        });
    });

}

function upload() {
    return uploadPath(dest);
}

exports.buildClient = buildClient;
exports.buildServer = buildServer;
exports.buildDll = buildDll;
exports.staticize = staticize;
exports.upload = upload;
exports.uploadPath = uploadPath;
