import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Split extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        mode: ['horizontal', 'vertical'],
        firstSize: String,
        lastSize: String,
        min: [Number, String],
        max: [Number, String],
    };

    defaults() {
        return {
            mode: 'horizontal',
            firstSize: 'auto',
            lastSize: 'auto',
            min: 0,
            max: '100%-6',

            _resizing: false,
        };
    }

    _init() {
        const fixSize = () => {
            const {firstSize, lastSize} = this.get();
            if (firstSize === 'auto' && lastSize === 'auto') {
                this.set('firstSize', '50%');
            } else if (firstSize !== 'auto' && lastSize !== 'auto') {
                this.set('lastSize', 'auto');
            }
        };
        this.on('$receive', (c, keys) => {
            if (['firstSize', 'lastSize'].find(key => ~keys.indexOf(key))) {
                fixSize();
            }
        });
        // maybe there aren't props
        fixSize();
    }

    _generateMinMaxValue() {
        let {firstSize, lastSize, mode, min, max} = this.get();
        const minObject = parseValue(min);
        const maxObject = parseValue(max);

        if (minObject.percent || maxObject.percent) {
            const totalSize = mode === 'horizontal' ?
                this.element.offsetWidth :
                this.element.offsetHeight;
            function generateValue({percent, op, px}) {
                if (percent) {
                    let value = totalSize * percent / 100;
                    if (px) {
                        px = +px;
                        value = op === '-' ? value - px : value + px;
                    }
                    return value;
                }
                return +px;
            }
            min = generateValue(minObject);
            max = generateValue(maxObject);
        }

        this.min = min;
        this.max = max;
    }

    _restrainValue(v) {
        return Math.min(Math.max(v, this.min), this.max);
    }

    _onMoveStart(e) {
        // left mouse key
        if (e.which !== 1) return;

        this.set('_resizing', true);

        this._generateMinMaxValue();

        const {mode, firstSize, lastSize} = this.get();
        if (lastSize === 'auto') {
            this._changeSizeName = 'firstSize';
            if (mode === 'horizontal') {
                const width = this._restrainValue(this.refs.first.offsetWidth);
                this._x = width - e.clientX;
            } else {
                const height = this._restrainValue(this.refs.first.offsetHeight);
                this._y = height - e.clientY;
            }
        } else {
            this._changeSizeName = 'lastSize';
            if (mode === 'horizontal') {
                const width = this._restrainValue(this.refs.last.offsetWidth);
                this._x = width + e.clientX;
            } else {
                const height = this._restrainValue(this.refs.last.offsetHeight);
                this._y = height + e.clientY;
            }
        }

        document.addEventListener('mousemove', this._onMove);
        document.addEventListener('mouseup', this._onMoveEnd);

        this.trigger('moveStart', e);
    }

    _onMove(e) {
        e.preventDefault();

        let {mode} = this.get();

        const {min, max} = this;

        let size;
        if (this._changeSizeName === 'firstSize') {
            if (mode === 'horizontal') {
                size = this._x + e.clientX;
            } else {
                size = this._y + e.clientY;
            }
        } else {
            if (mode === 'horizontal') {
                size = this._x - e.clientX;
            } else {
                size = this._y - e.clientY;
            }
        }

        size = this._restrainValue(size);

        this.set(this._changeSizeName, size + 'px');

        this.trigger('moving', e);
    }

    _onMoveEnd(e) {
        if (this.get('_resizing')) {
            document.removeEventListener('mousemove', this._onMove);
            document.removeEventListener('mouseup', this._onMoveEnd);
            this.set('_resizing', false);
            this.trigger('moveEnd', e);
        }
    }

    _destroy() {
        this._onMoveEnd();
    }
}

const regexp = /(?:(\d+(?:\.\d+)?)%)?([\+\-])?(\d+(?:\.\d+)?)?/;
const cache = {};
function parseValue(v) {
    if (typeof v === 'number') return {px: v};
    if (!cache[v]) {
        const matches = v.match(regexp) || [];
        cache[v] = {percent: matches[1], op: matches[2], px: matches[3]};
    }
    return cache[v];
}

export {Split};
