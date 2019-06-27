const stylus = require('stylus');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const expect = require('chai').expect;

const filename = path.resolve(__dirname, './default.styl');
const content = fs.readFileSync(filename, 'utf-8');

describe('Themes', () => {
    it('should render default theme', () => {
        stylus(content)
            .set('filename', filename)
            .render((err, css) => {
                expect(css).to.eql('.k-app {\n  width: 200px;\n}\n');
            });
    });

    it('should render themeA which extends default theme', () => {
        stylus(content)
            .set('filename', filename)
            .import(path.resolve(__dirname, './themeA/index.styl'))
            .render((err, css) => {
                expect(css).to.eql('.k-app {\n  width: 300px;\n}\n.k-app {\n  color: red;\n}\n');
            });
    });

    it('should render themeB which extends themeA', () => {
        stylus(content)
            .set('filename', filename)
            .import(path.resolve(__dirname, './themeB/index.styl'))
            .render((err, css) => {
                expect(css).to.eql('.k-app {\n  width: 400px;\n}\n.k-app {\n  color: red;\n}\n');
            });
    });
});

