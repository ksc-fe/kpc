import Intact from 'intact';
import Layout from '../layout';
import template from './index.vdt';
import './index.styl';
import 'kpc/components/table/index.styl';

const req = require.context('~/', true, /^\.\/(components|docs)\/.*index\.(json|js)$/);

export default class extends Layout {
    @Intact.template()
    static template = template;

    async _init() {
        super._init();

        let path = this.get('path').replace('index.html', '');
        path = path.slice(0, -1).replace(process.URL_PREFIX, '');

        this.path = path;

        const Article = await req(`.${path}/index.js`);
        this.set({Article});
    }

    _create() {
        this.set('hasRead', localStorage.getItem('v0.5.0'));
        if (this.path === '/docs/changelog') {
            this.set('hasRead', true);
            localStorage.setItem('v0.5.0', 1);
        }
        this.examples = this.element.querySelectorAll('.example');
    }

    _mount() {
        super._mount();
        document.title = this.get('Article.data.setting.title');
        if (this.refs.article) {
            this.set('demos', this.refs.article.get('demos'));
        }
        
        window.addEventListener('scroll', this._onScroll);

        window.scrollTo(0, 0);
    }

    _onScroll() {
        const example = this._findActive(this.examples, 0);
        this.set('activeExample', example.header);

        let active = this.refs.tableContents.querySelectorAll('.active');
        active = active[active.length - 1];
        if (active) {
            this.set('borderStyle', {
                height: active.offsetHeight + 'px',
                top: active.offsetTop + 'px',
            });
        } else {
            this.set('borderStyle', undefined);
        }
    }

    _findActive(hs, minTop = 0) {
        const scrollTop = window.pageYOffset;

        for (let i = hs.length - 1; i >= 0; i--) {
            const h = hs[i];
            const top = h.getBoundingClientRect().top + scrollTop;

            if (top > minTop && top - 80 <= scrollTop) {
                return {header: h.id, top: top, elem: h};
            }
        }

        return {header: '', top: 0, elem: null};
    }

    _scrollToView(demo) {
        const index = demo.data.index;
        const dom = this.element.querySelector(`.index-${index}`);
        const top = dom.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, top - 80);
    }

    _destroy() {
        window.removeEventListener('scroll', this._onScroll);
    }
}
