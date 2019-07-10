import Intact from 'intact';
import template from './index.vdt';
import axios from 'axios';

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
        if (file === 'index.vue') {
            this._openVue(code, stylusContent);
        } else {
            this._openReact(code, stylusContent);
        }
    }

    _openVue(code, stylus) {
        const files = {
            'package.json': {
                content: {
                    dependencies: {
                        kpc: '1.0.0-beta.6',
                        vue: '^2.6.0',
                    }
                }
            },
            'src/index.vue': {
                content: code.replace(/kpc\/components/g, 'kpc/@vue/@css/components') + 
                    '\n<style src="./index.css"></style>'
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
            'src/index.css': {
                content: [
                    `@import url("https://cdn.jsdelivr.net/npm/kpc@1.0.0-beta.6/dist/kpc.css");`,
                    ``,
                    `body {padding: 24px;}`
                ].join('\n')
            }
        };
        if (stylus) {
            files['src/index.styl'] = {content: stylus};
        }

        axios.post('https://codesandbox.io/api/v1/sandboxes/define?json=1', {files})
            .then(({data}) => {
                window.open(`https://codesandbox.io/s/${data.sandbox_id}`);
            });
    }
}
