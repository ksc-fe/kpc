import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Split extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            mode: 'horizontal',
            firstSize: 'auto',
            lastSize: 'auto',
            min: 0,
            max: '100%-6',
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
        this.on('$received', (c, keys) => {
            if (['firstSize', 'lastSize'].find(key => ~keys.indexOf(key))) {
                fixSize();
            }
        });
        // maybe there aren't props
        fixSize();
    }

    _onMoveStart(e) {
        // left mouse key
        if (e.which !== 1) return;

        const {firstSize, lastSize, mode} = this.get();
        if (lastSize === 'auto') {
            this._changeSizeName = 'firstSize';
            if (mode === 'horizontal') {
                const width = this.refs.first.offsetWidth;
                this._x = width - e.clientX;
            } else {
                const height = this.refs.first.offsetHeight;
                this._y = height - e.clientY;
            }
        } else {
            this._changeSizeName = 'lastSize';
            if (mode === 'horizontal') {
                const width = this.refs.last.offsetWidth;
                this._x = width + e.clientX;
            } else {
                const height = this.refs.last.offsetHeight;
                this._y = height + e.clientY;
            }
        }

        document.addEventListener('mousemove', this._onMove);
        document.addEventListener('mouseup', this._onMoveEnd);
    }

    _onMove(e) {
        e.preventDefault();

        let {min, max, mode} = this.get();
        const minObject = parseValue(min);
        const maxObject = parseValue(max);
        if (minObject.percent || maxObject.percent) {
            const totalSize = mode === 'horizontal' ?
                this.element.offsetWidth :
                this.element.offsetHeight;
            function generateValue({percent, op, px}, value) {
                if (percent) {
                    value = totalSize * percent / 100;
                }
                if (px) {
                    value = op === '+' ? value + px : value - px;
                }
                return value;
            }
            min = generateValue(minObject, min);
            max = generateValue(maxObject, max);
        }

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
        size = Math.min(Math.max(min, size), max);

        this.set(this._changeSizeName, size + 'px');
    }

    _onMoveEnd() {
        document.removeEventListener('mousemove', this._onMove);
        document.removeEventListener('mouseup', this._onMoveEnd);
    }
}

const regexp = /(?:(\d+(?:\.\d+)?)%)?([\+\-])?(\d+(?:\.\d+)?)?/;
const cache = {};
function parseValue(v) {
    if (typeof v === 'number') return {};
    if (!cache[v]) {
        const matches = v.match(regexp) || [];
        cache[v] = {percent: matches[1], op: matches[2], px: matches[3]};
    }
    return cache[v];
}

export {Split};
