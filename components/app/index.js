import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

let serverStyleCleanup;
if (process.ssr) {
    serverStyleCleanup = require('node-style-loader/clientCleanup');
}

export default class App extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            view: undefined,
            container: undefined,
            loading: false,
        };
    }

    showLoading() {
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    _init() {
        if (!process.ssr && process.browser) {
            Intact.mount(this, this.get('container'));
        }
    }

    render(Page, data) {
        this._current = Page;
        return new Promise((resolve, reject) => {
            if (!process.ssr && process.node) return reject();

            const page = new Page(data);
            // for debug
            if (process.browser) {
                window.__page = page;
            }
            page.$app = this;

            const done = () => {
                if (this._current === Page) {
                    this.set('view', page);
                }
                resolve();
            }
            
            if (page.inited) {
                done();
            } else {
                page.on('$inited', done);
            }
        });
    }

    load(Page, data) {
        return this.render(Page, data).then(() => {
            if (process.ssr && process.browser && !this.rendered) {
                Intact.hydrate(this, this.get('container'));
                serverStyleCleanup();
            }
        });
    }
}

export {App};
