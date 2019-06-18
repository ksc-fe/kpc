import Intact from 'intact';
import template from './index.vdt';
import CarouselItem from './item';
import '../../styles/kpc.styl';
import './index.styl';

const defaultTimeout = 5000;

export default class Carousel extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        autoplay: [Number, Boolean],
        arrow: ['hover', 'always', 'never'],
        effect: ['slide', 'fade'],
    }

    defaults() {
        return {
            value: '$0',
            autoplay: defaultTimeout,
            arrow: 'hover',
            effect: 'slide',

            _transition: 'k-left',
        }
    }

    _init() {
        this._items = [];
        this.on('$receieve:autoplay', (c, v) => {
            if (v === true) {
                this.set('autoplay', defaultTimeout, {silent: true});
            }
        });
    }

    _mount() {
        // when the value has changed
        // cancel all animation before updating
        this.on('$change:value', () => {
            this._items.forEach(item => {
                const animate = item.refs.animate;
                if (animate._leaving) {
                    animate._leaveEnd(null, true);
                } else if (animate._entering) {
                    animate._enterEnd(null, true);
                }
            });
        });

        this.on('$change:autoplay', (c, v) => {
            clearTimeout(this.timer);
            this._autoplay();
        });

        this._autoplay();
    }

    _autoplay() {
        const {autoplay} = this.get();
        if (autoplay) {
            clearTimeout(this.timer);
            this.timer = setTimeout(this._next, autoplay);
        }
    }

    _setValue(value, _transition) {
        this.set({value, _transition});

        this._autoplay();
    }

    _changeValue(value) {
        this._setValue(value, this._getTransition(value));
    }

    _next() {
        const values = this._values;
        const index = this._getIndex();
        this._setValue(
            values[(index + 1) % values.length],
            this._getTransition(null, 'left')
        );
    }

    _prev() {
        const values = this._values;
        const index = this._getIndex();
        this._setValue(
            values[(index + values.length - 1) % values.length],
            this._getTransition(null, 'right')
        );
    }

    _getIndex() {
        const value = this.get('value');

        return this._values.indexOf(value);
    }

    _isActive(v) {
        return this.get('value') === v;
    }

    _getTransition(nextValue, arrow) {
        const {value, effect} = this.get();

        if (effect === 'fade') return 'k-fade';
        if (arrow) return `k-${arrow}`;

        const values = this._values; // this property is set in index.vdt
        const lastIndex = values.indexOf(value);
        const nextIndex = values.indexOf(nextValue);
        if (lastIndex > nextIndex) {
            return 'k-right';
        } else {
            return 'k-left';
        }
    }

    _destroy() {
        if (this.get('autoplay')) {
            clearTimeout(this.timer);
        }
    }
}

export {Carousel, CarouselItem};
