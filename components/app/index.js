import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

let serverStyleCleanup;
if (process.ssr) {
    serverStyleCleanup = require('node-style-loader/clientCleanup');
}

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            view: undefined,
            container: undefined
        }
    }

    _init() {
        if (!process.ssr && process.browser) {
            Intact.mount(this, this.get('container'));
        }
    }

    render(Page, data) {
        return new Promise((resolve, reject) => {
            if (!process.ssr && process.node) return reject();

            const page = new Page(data);
            // for debug
            if (process.browser) {
                window.__page = page;
            }
            page.$app = this;
            if (page.inited) {
                this.set('view', page);
                resolve();
            } else {
                page.on('$inited', () => {
                    this.set('view', page);
                    resolve();
                });
            }
        });
    }

    load(Page, data) {
        return this.render(Page, data).then(() => {
            if (!this.rendered) {
                Intact.hydrate(this, this.get('container'));
                serverStyleCleanup();
            }
        });
    }
}
