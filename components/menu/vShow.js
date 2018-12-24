import Intact from 'intact';
import {nextFrame} from '../utils';
import './vShow.styl';

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
        const _c = vdt.utils.className;
        const {height, display, className} = data.get();
        return h(
            'div',
            {
                style: {
                    height: height,
                    display: display,
                },
            }, 
            data.get('children'), 
            _c({
                'k-show-height': true,
                [className]: className
            })
        );
    }

    _init() {
        this.on('$receive:show', (c, v) => {
            if (c.isRender === false) return;
            if (!v) {
                this.set({'display': 'none', 'height': 0});
            } else {
                this.set({display: undefined, height: undefined});
            }
        });
    }

    _mount() {
        const element = this.element;
        this.transitionendName = '';
        for (let name in transitionend) {
            if (name in element.style) {
                this.transitionendName = transitionend[name];
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
        const height = this.element.firstChild.clientHeight;
        if (!height) {
            // if the height is 0, call end immediately
            this.transitionend({target: this.element});
        } else {
            nextFrame(() => {
                this.set({
                    'height': height + 'px',
                });
            });
        }
        this.trigger('show');
    }

    hide() {
        const height = this.element.firstChild.clientHeight;
        this.set('height', height + 'px');
        if (!height) {
            // if the height is 0, call end immediately
            this.transitionend({target: this.element});
        } else {
            nextFrame(() => {
                this.set('height', 0);
            });
        }
        this.trigger('hide');
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
