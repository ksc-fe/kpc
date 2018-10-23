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

    defaults() {
        return {
            ...super.defaults(),
            borderStyle: {
                width: '12px',
                height: '12px',
                'border-radius': '12px',
                left: '-6px',
                top: '5px'
            }
        }
    }

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
            const top = header.getBoundingClientRect().top + window.pageYOffset - 50; // todo

            window.scrollTo(0, top);
        }
    }

    _onScroll() {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 15) {
            this.refs.wrapper.classList.add('fixed');
        } else {
            this.refs.wrapper.classList.remove('fixed');
        }
        
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
                // height: active.offsetHeight + 'px',
                height: active.getAttribute('key') == '2' ? '12px' : '8px',
                width: active.getAttribute('key') == '2' ? '12px' : '8px',
                'border-radius': active.getAttribute('key') == '2' ? '12px' : '8px',
                left: active.getAttribute('key') == '2' ? '-6px' : '-4px',
                top: active.offsetTop + 5 + 'px',
            });
        } else {
            this.set('borderStyle', {
                width: '12px',
                height: '12px',
                'border-radius': '12px',
                left: '-6px',
                top: '5px'
            });
        }
    }
}
