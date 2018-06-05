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

    _mount() {
        super._mount();
        document.title = this.get('Article.data.setting.title');

        window.addEventListener('scroll', this._onScroll);
        window.scrollTo(0, 0);
    }

    _onScroll() {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 15) {
            this.refs.wrapper.classList.add('fixed');
        } else {
            this.refs.wrapper.classList.remove('fixed');
        }
    }

    _destroy() {
        window.removeEventListener('scroll', this._onScroll);
    }
}
