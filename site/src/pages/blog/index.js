import Document from '../document';
import template from './index.vdt';
import './index.styl';

let mermaid;
if (process.browser) {
    mermaid = require('mermaid');
}

export default class extends Document {
    @Intact.template()
    static template = template;

    _mount() {
        super._mount();
        mermaid.init(undefined, '.mermaid');
    }

    scrollTo(id) {
        const header = document.getElementById(id);
        if (header) {
            const top = header.getBoundingClientRect().top + window.pageYOffset - 80;

            window.scrollTo(0, top);
        }
    }
}
