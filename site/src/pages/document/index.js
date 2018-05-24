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

        const data = await req(`.${path}/index.json`);
        const Article = await req(`.${path}/index.js`);
        this.set({...data, Article});
    }

    _mount() {
        super._mount();
        document.title = this.get('setting.title');
    }
}
