import Intact from 'intact';
import template from './index.vdt';
import {req} from '../document';

export default class extends Intact {
    @Intact.template()
    static template = template;

    async _init() {
        const qs = {};
        location.search.substring(1).split('&').forEach(item => {
            const [key, value] = item.split('=');
            qs[key] = value;
        });

        const Demo = await req(`./${qs.path}/index.js`);
        this.set({Demo});
    }
}
