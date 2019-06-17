import Intact from 'intact';
import template from './index.vdt';
import CarouselItem from './item';
import '../../styles/kpc.styl';
import './index.styl';

export default class Carousel extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        window.carousel = this;
        return {
            value: '$0',

            _transition: 'k-left',
        }
    }

    _changeValue(v) {
        this.set({
            value: v,
            _transition: this._getTransition(v),
        });
    }

    _next() {
        const values = this._values;
        const index = this._getIndex();
        this.set({
            value: values[(index + 1) % values.length],
            _transition: 'k-left',
        });
    }

    _prev() {
        const values = this._values;
        const index = this._getIndex();
        this.set({
            value: values[(index + values.length - 1) % values.length],
            _transition: 'k-right',
        });
    }

    _getIndex() {
        const value = this.get('value');

        return this._values.indexOf(value);
    }

    _isActive(v) {
        return this.get('value') === v;
    }

    _getTransition(nextValue) {
        const {value} = this.get();
        const values = this._values; // this property is set in index.vdt
        const lastIndex = values.indexOf(value);
        const nextIndex = values.indexOf(nextValue);
        if (lastIndex > nextIndex) {
            return 'k-right';
        } else {
            return 'k-left';
        }
    }
}

export {Carousel, CarouselItem};
