import Article from '~/../src/components/article';
import data from './index.json';
import sidebar from '~/doc.json';

const r = require.context('./', true, /demos.*index.js$/);
const demos = r.keys().map(r);

export default class extends Article {
    static sidebar = sidebar;
    static data = data;
    defaults() {
        return {...super.defaults(), ...data, demos};
    }
}