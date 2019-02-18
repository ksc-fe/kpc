import Article from '~/../src/components/article';
import data from './index.json';
import sidebar from '~/design.json';

const r = require.context('./', true, /demos.*(index|demo).js$/);
const keys = r.keys();
const demos = [];
for (let i = 0; i < keys.length; i++) {
    const file = keys[i];
    // if we found demo.js then ignore index.js
    if (/demo.js$/.test(file)) i++;
    demos.push(r(file));
}

export default class extends Article {
    static sidebar = sidebar;
    static data = data;
    defaults() {
        return {...super.defaults(), ...data, demos};
    }
}