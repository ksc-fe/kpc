import Intact from 'intact';
import template from './index.vdt';

const req = require.context('~/', true, /^\.\/components\/.*index\.js$/);

export default class extends Intact {
    @Intact.template()
    static template = template;

    async _init() {
        const qs = {};
        location.search.substring(1).split('&').forEach(item => {
            const [key, value] = item.split('=');
            qs[key] = value;
        });

        const Demo = (await req(`./components/${qs.component}/demos/${qs.demo}/index.js`)).default;
        this.set({Demo});
    }
}
