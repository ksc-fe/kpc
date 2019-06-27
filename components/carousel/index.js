import Intact from 'intact';
import template from './index.vdt';
import CarouselItem from './item';
import '../../styles/kpc.styl';
import './index.styl';
import {nextFrame} from '../utils';
import ResizeObserver from 'resize-observer-polyfill'; 

const defaultTimeout = 5000;

export default class Carousel extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: String,
        autoplay: [Number, Boolean],
        arrow: ['hover', 'always', 'never'],
        effect: ['slide', 'fade'],
        clonedAmount: Number,
    }

    static displayName = 'Carousel';

    defaults() {
        return {
            value: '$0',
            autoplay: false,
            arrow: 'hover',
            effect: 'slide',
            clonedAmount: 1,
            
            _width: undefined,
            _translate: 0,
            _stopTransition: false,
        }
    }

    _init() {
        this._items = [];
        this._firstCloned = null;
        this._lastCloned = null;

        this.on('$receive:autoplay', (c, v) => {
            if (v === true) {
                this.set('autoplay', defaultTimeout, {silent: true});
            }
        });
    }

    _mount(lastVNode, nextVNode) {
        /* istanbul ignore if */
        if (lastVNode && lastVNode.tag && lastVNode.tag.displayName === 'Carousel') {
            // if use hot-reload, the tag is the same, but they are two different contructors
            const lastInstance = lastVNode.children;
            this._items = lastInstance._items;
            this._firstCloned = lastInstance._firstCloned;
            this._lastCloned = lastInstance._lastCloned;
        }

        this.on('$change:autoplay', (c, v) => {
            clearTimeout(this.timer);
            this._autoplay();
        });
        this.on('$change:effect', (c, v) => {
            if (this._isSlide()) {
                this._initStatus();
            } else {
                this._disconnect();
            }
        });
        this.on('$change:clonedAmount', () => {
            if (this._isSlide()) {
                this._initStatus();
            }
        });

        if (this._isSlide()) {
            this._initStatus();
        }
    }

    _initStatus() {
        const init = () => {
            this.containerWidth = this.element.offsetWidth;

            this._stopTransition();
            this._setIndex(this._getIndex(), false);
            this._startTransition();
        }

        const ro = this.ro = new ResizeObserver(init);
        ro.observe(this.element);

        init();
    }

    _disconnect() {
        if (this.ro) {
            this.ro.disconnect();
            this.ro = null;
        }
    }

    _stopTransition() {
        this.set({_stopTransition: true});
    }

    _startTransition() {
        return new Promise(resolve => {
            nextFrame(() => {
                this.set({_stopTransition: false});
                resolve();
            });
        });
    }

    _autoplay() {
        const {autoplay} = this.get();
        if (autoplay) {
            clearTimeout(this.timer);
            this.timer = setTimeout(this._next, autoplay);
        }
    }

    async _setIndex(index, keepDirection) {
        const values = this._values;
        const value = values[index];

        if (this._isSlide()) {
            if (keepDirection) {
                const oldValue = this.get('value');
                const length = values.length;
                if (oldValue === values[length - 1] && index === 0) {
                    // the current value is the last one and the next value is the first one
                    // we got back to the first cloned node
                    this._stopTransition();
                    this.set('_translate', this._getTranslate(this._lastCloned));
                    await this._startTransition();
                } else if (oldValue === values[0] && index === length - 1) {
                    // contrary situation
                    this._stopTransition();
                    this.set('_translate', this._getTranslate(this._firstCloned));
                    await this._startTransition();
                }
            }

            const item = this._items[index];
            const _translate = this._getTranslate(item);
            this.set({value, _translate});
        } else {
            this.set({value});
        }

        this._autoplay();
    }

    _getTranslate(item) {
        const el = item.element;
        const offsetLeft = el.offsetLeft;
        const width = el.offsetWidth; 
        // let item position center
        this.containerWidth = this.element.offsetWidth;
        return -(offsetLeft - (this.containerWidth - width) / 2);
    }

    _next() {
        const values = this._values;
        const index = this._getIndex();
        const newIndex = (index + 1) % values.length;
        this._setIndex(newIndex, true);
    }

    _prev() {
        const values = this._values;
        const index = this._getIndex();
        const newIndex = (index + values.length - 1) % values.length;
        this._setIndex(newIndex, true);
    }

    _getIndex() {
        const value = this.get('value');

        return this._values.indexOf(value);
    }

    _isActive(v) {
        return this.get('value') === v;
    }

    _isSlide() {
        return this.get('effect') === 'slide';
    }

    _destroy() {
        if (this.get('autoplay')) {
            clearTimeout(this.timer);
        }
        this._disconnect();
    }
}

export {Carousel, CarouselItem};
