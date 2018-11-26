const transitionend = {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    msTransition: 'MSTransitionEnd',
};

export default class VShow extends Intact {
    template(data, vdt) {
        const h = vdt.miss.h;
        const {height, display} = data.get();
        return h('div', {
            style: {
                height: height,
                display: display,
            },
        }, data.get('children'), 'k-show-height');
    }

    _mount() {
        if (!this.get('show')) {
            this.set({'display': 'none', 'height': 0});
        }
        const raf = window.requestAnimationFrame ? 
            window.requestAnimationFrame.bind(window) : setTimeout;
        this.nextFrame = (fn) => {
            raf(fn);
        };

        const element = this.element;
        this.transitionendName = '';
        for (let name in transitionend) {
            if (element.style[name]) {
                this.transitionendName = name;
                break;
            }
        }

        element.addEventListener(this.transitionendName, this.transitionend);

        this.on('$changed:show', (c, v) => {
            if (this.isRender) return;
            if (v) this.show();
            else this.hide();
        });
    }

    show() {
        this.set({'display': 'block', 'height': 0});
        this.nextFrame(() => {
            this.set({
                'height': this.element.firstChild.clientHeight + 'px',
            });
        });
    }

    hide() {
        this.set('height', this.element.firstChild.clientHeight + 'px');
        this.nextFrame(() => {
            this.set('height', 0);
        });
    }

    transitionend(e) {
        if (e.target !== this.element) return;
        if (this.get('show')) {
            this.set('height', undefined);
        } else {
            this.set({'display': 'none'});
        }
    }

    _destroy() {
        this.element.removeEventListener(this.transitionendName, this.transitionend);
    }
}
