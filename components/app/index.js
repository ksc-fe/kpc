import template from './index.vdt';
import serverStyleCleanup from 'node-style-loader/clientCleanup';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            view: undefined,
            container: undefined
        }
    }

    render(Page, data) {
        return new Promise((resolve, reject) => {
            const page = new Page(data);
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
