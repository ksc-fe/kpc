import Intact from 'intact';
import Layout from '../layout';
import template from './index.vdt';
import './index.styl';
import 'components/table/index.styl';
// import axios from 'axios';

export default class extends Layout {
    @Intact.template()
    static template = template;

    async _init() {
        let path = this.get('path');
        path = path.slice(1, -1);
        console.log(`../../${path}/index.json`);
        const data = await import(`../../${path}/index.json`);
        const Article = await import('../../components/button');
        // const demo = await import('../../components/button/demos');
        this.set({...data, Article});
    }
}
