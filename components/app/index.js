import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class App extends Intact {
    @Intact.template()
    get template() { return template; }

    static propTypes = {
        loading: Boolean,
    };

    defaults() {
        return {
            view: undefined,
            container: undefined,
            loading: false,
            ssr: false,
        };
    }

    showLoading() {
        this.set('loading', true, {async: true});
    }

    hideLoading() {
        this.set('loading', false, {async: true});
    }

    _init() {
        if (!this.get('ssr') && this.get('container')) {
            Intact.mount(this, this.get('container'));
        }
    }

    _render(Page, data, string) {
        this._current = Page;
        return new Promise((resolve, reject) => {
            const page = new Page(data);
            page.$app = this;

            // for debug
            globalThis.__page = page;

            const done = () => {
                if (this._current === Page) {
                    this.set('view', page);
                }
                if (string) {
                    resolve(this.toString());
                } else {
                    resolve();
                }
            }
            
            if (page.inited) {
                done();
            } else {
                page.on('$inited', done);
            }
        });
    }

    render(Page, data) {
        return this._render(Page, data, true);
    }

    load(Page, data, cleanup) {
        this.showLoading();
        return this._render(Page, data, false).then(() => {
            if (this.get('ssr') && !this.rendered) {
                Intact.hydrate(this, this.get('container'));
                cleanup && cleanup();
            }
            this.hideLoading();
        });
    }
}

export {App};
