import Article from '~/src/components/article';
import data from './index.json';

const r = require.context('./', true, /demos.*index.js$/);
const demos = r.keys().map(r);

export default class extends Article {
    defaults() {
        return {...super.defaults(), ...data, demos};
    }
}