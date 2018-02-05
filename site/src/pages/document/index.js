import Intact from 'intact';
import Layout from '../layout';
import template from './index.vdt';
import './index.styl';
import 'kpc/components/table/index.styl';

export default class extends Layout {
    @Intact.template()
    static template = template;

    async _init() {
        let path = this.get('path');
        path = path.slice(1, -1);
        const data = await import(`~/${path}/index.json`);
        const Article = await import(`~/${path}/index.js`);
        this.set({...data, Article});
    }

    _mount() {
        super._mount();
        document.title = this.get('setting.title');
    }
}
