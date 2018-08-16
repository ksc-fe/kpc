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
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    _init() {
        if (!this.get('ssr') && this.get('container')) {
            Intact.mount(this, this.get('container'));
        }
    }

    render(Page, data) {
        this._current = Page;
        return new Promise((resolve, reject) => {
            const page = new Page(data);
            page.$app = this;

            // for debug
            global.__page = page;

            const done = () => {
                if (this._current === Page) {
                    this.set('view', page);
                }
                if (this.get('ssr')) {
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

    load(Page, data, cleanup) {
        return this.render(Page, data).then(() => {
            if (this.get('ssr') && !this.rendered) {
                Intact.hydrate(this, this.get('container'));
                cleanup && cleanup();
            }
        });
    }
}

export {App};
