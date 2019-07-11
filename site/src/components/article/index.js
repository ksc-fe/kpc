import Intact from 'intact';
import template from './index.vdt';
import axios from 'axios';
import {version} from '../../../../package.json';

export default class extends Intact {
    @Intact.template()
    static template = template;

    _init() {
        const {demos, contents} = this.get();

        const _demos = [];
        const examples = [];
        demos.forEach(item => {
            if (item.example) {
                examples.push(item);
            } else {
                _demos.push(item);
            }
        });
        
        const _contents = contents ? contents.split('<!-- example -->') : [];

        this.set({
            demos: _demos.sort((a, b) => {
                return a.data.setting.order - b.data.setting.order;
            }),
            examples: examples,
            contents: _contents,
        });
    }

    _open(Demo, e) {
        const file = this.get(`file${Demo.data.index}`);
        const code = e.target.closest('.example-code').querySelector('.code').textContent;
        const stylus = Demo.data.highlighted[1];
        let stylusContent;
        if (stylus.language === 'styl') {
            const dom = document.createElement('div');
            dom.innerHTML = stylus.content;
            stylusContent = dom.textContent;
        }

        let params;
        if (file === 'index.vue') {
            params = this._getParamsForVue(code, stylusContent);
        } else {
            params = this._getParamsForReact(code, stylusContent);
        }

        params.files['src/index.css'] = {
            content: [
                `@import url("https://cdn.jsdelivr.net/npm/kpc@${version}/dist/kpc.css");`,
                ``,
                `body {padding: 24px !important;}`
            ].join('\n')
        };
        if (stylusContent) {
            // remove @require
            if (stylusContent.includes('@require')) {
                stylusContent = stylusContent.replace(/@require.*/g, '');
                stylusContent = [
                    `$success-color = #4db500`,
                    `$danger-color = #db2828`,
                    `$primary-color = #0a5eee`,
                    `$warning-color = #ff8a00`,
                    `$table-border-color = #f0f0f0`,
                ].join('\n') + stylusContent;
            }
            params.files['src/index.styl'] = {content: stylusContent};
        }

        axios.post('https://codesandbox.io/api/v1/sandboxes/define?json=1', params)
            .then(({data}) => {
                window.open(`https://codesandbox.io/s/${data.sandbox_id}`);
            });
    }

    _getParamsForVue(code) {
        const files = {
            'package.json': {
                content: {
                    dependencies: {
                        kpc: version,
                        vue: '^2.6.0',
                    }
                }
            },
            'src/index.vue': {
                content: [
                    `<!-- FIXME: font file is missing in CodeSandbox so we must import kpc.css -->`,
                    '<style src="./index.css"></style>',
                    code.replace(/kpc\/components/g, 'kpc/@vue/@css/components'),
                ].join('\n')
            },
            'src/main.js': {
                content: [
                    `import Vue from "vue";`,
                    `import App from "./index.vue";`,
                    ``,
                    `new Vue({`,
                    `    render: h => h(App)`,
                    `}).$mount("#app");`
                ].join('\n')
            },
        };

        return {files};
    }

    _getParamsForReact(code) {
        const files = {
            'package.json': {
                content: {
                    dependencies: {
                        kpc: version,
                        react: '^16.8.6',
                        'react-dom': '^16.8.6',
                        stylus: '^0.54.5',
                    },
                    main: 'index.html',
                    scripts: {
                        start: "parcel index.html --open",
                        build: "parcel build index.html"
                    },
                    "devDependencies": {
                        "@babel/core": "7.2.0",
                        "parcel-bundler": "^1.6.1"
                    } 
                }
            },
            'src/index.js': {
                content: [
                    `// FIXME: font file is missing in CodeSandbox so we must import kpc.css`,
                    `import './index.css';`,
                    `import ReactDOM from 'react-dom';`,
                    code.replace(/kpc\/components/g, 'kpc/@react/@css/components'),
                    ``,
                    `ReactDOM.render(<Demo />, document.getElementById('app'));`,
                ].join('\n')
            },
            'sandbox.config.json': {
                content: {
                    template: 'parcel',
                }
            },
            'index.html': {
                content: [
                    `<DOCTYPE html>`,
                    `<html>`,
                    `<head>`,
                    `    <title>KPC Demo</Title>`,
                    `    <meta charset="UTF-8" />`,
                    `</head>`,
                    `<body>`,
                    `    <div id="app"></div>`,
                    `    <script src="src/index.js"></script>`,
                    `</body>`,
                    `</html>`,
                ].join('\n')
            }
        };

        return {files};
    }
}
