import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import {isStringOrNumber} from '../utils';

export default class ScrollSelect extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: '',
            count: 19,
            data: [],

            _list: [],
            _translate: 0,
            _marginTop: 0,
            _dragging: false,
        };
    }

    _init() {
        this._setList();

        ['data', 'value', 'count'].forEach(item => {
            this.on(`$change:${item}`, this._setList);
        });

        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);

        // throttle onWheel
        let lock = false;
        const onWheel = this._onWheel;
        this._onWheel = (e, ...args) => {
            e.preventDefault();
            if (lock) return;
            lock = true;
            this.timer = setTimeout(function() {
                onWheel(e, ...args);
                lock = false;
            }, 50);
        }; 
    }

    _mount() {
        const height = this.element.offsetHeight;
        const totalHeight = this.refs.wrapper.offsetHeight; 
        this._deltaY = -Math.floor((totalHeight - height) / 2);
        this.set({
            _translate: this._deltaY 
        });
    }

    _select(item, index) {
        const {count, _translate, _marginTop} = this.get();
        const half = Math.floor(count / 2);
        const itemHeight = this.refs.item.offsetHeight;

        this.set({
            _translate: _translate - itemHeight * (index - half),
            _marginTop: _marginTop + itemHeight * (index - half),
            value: item.value,
        });
    }

    _setList() {
        let {data, value, count} = this.get();

        if (typeof data === 'function') {
            data = data(value); 
        }

        let index = -1;
        data = data.map((item, i) => {
            if (isStringOrNumber(item)) {
                item = {value: item, label: item};
            }
            if (item.value === value) {
                index = i;
            }
            return item;
        });

        if (!~index) {
            index = 0;
            this.set('value', data[0].value, {silent: true});
        }

        const length = data.length;
        const half = Math.floor(count / 2);
        const _list = [];
        for (let i = 0; i < count; i++) {
            _list.push(data[(((index - half + i) % length) + length) % length]);
        }
        this.set('_list', _list, {silent: true});
    }

    _dragStart(e) {
        if (e.which !== 1) return;

        this.set('_dragging', true);
        this._y = e.clientY;
        this._initY = e.clientY;
        this._itemHeight = this.refs.item.offsetHeight;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        if (this.get('_dragging')) {
            const deltaY = e.clientY - this._y;
            this._y = e.clientY;
            const {_translate} = this.get();

            const _deltaY = this._y - this._initY;
            let offsetIndex = Math.floor(Math.abs(_deltaY) / this._itemHeight);
            if (offsetIndex) {
                if (_deltaY < 0) {
                    offsetIndex = -offsetIndex;
                }
                this._setByRelativeIndex(-offsetIndex, -_deltaY);
                this._initY = this._y;
            }
            this.set('_translate', _translate + deltaY);
        }
    }

    _setByRelativeIndex(index, deltaY, isSetTranslate) {
        const {_list, value, _marginTop}  = this.get();

        const i = _list.findIndex(v => v.value === value);
        const l = _list.length;
        const itemHeight = this._itemHeight;
        const props = {
            'value': _list[(l + i + index) % l].value,
            _marginTop: _marginTop + (deltaY || index * itemHeight),
        };
        if (isSetTranslate) {
            props._translate = this.get('_translate') - itemHeight * index;
        }
        this.set(props);
    }

    _dragEnd(e) {
        if (this.get('_dragging')) {
            this.set('_dragging', false);
            this.set({
                _translate: -this.get('_marginTop') + this._deltaY
            });
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }

    _onWheel(e) {
        e.preventDefault();
        this._itemHeight = this.refs.item.offsetHeight;
        if (e._rawEvent.deltaY > 0) {
            // down
            this._setByRelativeIndex(1, null, true);
        } else {
            this._setByRelativeIndex(-1, null, true);
        }
    }

    _destroy() {
        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
        clearTimeout(this.timer);
    }
}

export {ScrollSelect};
