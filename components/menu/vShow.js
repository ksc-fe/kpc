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
    static propTypes = {
        show: Boolean,
    };

    defaults() {
        return {
            show: false,
            _active: false,
        }
    }

    template(data, vdt) {
        const h = vdt.miss.h;
        const _c = vdt.utils.className;
        const {height, display, className, _active} = data.get();
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
                'k-show-active': _active,
                [className]: className
            })
        );
    }

    _init() {
        this.on('$receive:show', (c, v) => {
            if (c.isRender === false) return;
            if (!v) {
                this.set({display: 'none', height: undefined});
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

        this._on = (callback) => {
            element.addEventListener(this.transitionendName, callback);
        };
        this._off = (callback) => {
            element.removeEventListener(this.transitionendName, callback);
        };

        this.on('$changed:show', (c, v) => {
            if (this.isRender) return;
            if (v) this.show();
            else this.hide();
        });
    }

    show() {
        if (this.hiding) {
            this.hideEnd();
        }
        this.showing = true;
        this.set({'display': 'block', 'height': 0});
        this._on(this.showEnd);
        const height = this.element.firstChild.clientHeight;
        if (!height) {
            // if the height is 0, call end immediately
            this.showEnd();
        } else {
            nextFrame(() => {
                if (!this.get('show')) return;
                this.set({
                    _active: true,
                    height: height + 'px',
                });
            });
        }
        this.trigger('show');
    }

    hide() {
        if (this.showing) {
            this.showEnd();
        }
        this.hiding = true;
        const height = this.element.firstChild.clientHeight;
        this.set('height', height + 'px');
        this._on(this.hideEnd);
        if (!height) {
            // if the height is 0, call end immediately
            this.hideEnd();
        } else {
            nextFrame(() => {
                if (this.get('show')) return;
                this.set({
                    _active: true,
                    height: 0,
                });
            });
        }
        this.trigger('hide');
    }

    showEnd(e) {
        if (e && e.target !== this.element) return;
        this._off(this.showEnd);
        this.showing = false;
        this.set({height: undefined, _active: false});
    }

    hideEnd(e) {
        if (e && e.target !== this.element) return;
        this._off(this.hideEnd);
        this.hiding = false;
        this.set({display: 'none', height: undefined, _active: false});
    }
}
