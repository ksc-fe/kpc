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

        this.h1s = this.element.querySelectorAll('h1');
        this.h2s = this.element.querySelectorAll('h2');
        this.h3s = this.element.querySelectorAll('h3');

        mermaid.init(undefined, '.mermaid');
    }

    scrollTo(id) {
        const header = document.getElementById(id);
        if (header) {
            const top = header.getBoundingClientRect().top + window.pageYOffset - 80;

            window.scrollTo(0, top);
        }
    }

    _onScroll() {
        super._onScroll();

        const scrollTop = window.pageYOffset;
        
        function findActive(hs, minTop = 0) {
            for (let i = hs.length - 1; i >= 0; i--) {
                const h = hs[i];
                const top = h.getBoundingClientRect().top + window.pageYOffset;

                if (top > minTop && top - 80 <= scrollTop) {
                    return {header: h.id, top: top};
                }
            }
            return {header: '', top: 0};
        }

        const active2 = findActive(this.h2s, 0);
        const active3 = findActive(this.h3s, active2.top);
        this.set({
            'active2': active2.header,
            'active3': active3.header, 
        });

        let active = this.refs.aside.querySelectorAll('.active');
        active = active[active.length - 1];
        if (active) {
            this.set('borderStyle', {
                height: active.offsetHeight + 'px',
                top: active.offsetTop + 'px',
            });
        } else {
            this.set('borderStyle', undefined);
        }
    }
}
