import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            name: undefined,
            on: undefined,
            off: undefined,
            value: false,
            trueValue: true,
            falseValue: false,
            width: undefined,
            height: undefined,
            size: 'default',
            disabled: false,

            _dragging: false,
        }
    }

    _init() {
        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        if (e.which !== 1) return;

        console.log('start');

        this._x = e.clientX;
        this._height = this.refs.bar.clientHeight;
        this._width = this.refs.bar.clientWidth;
        this._maxWidth = this.element.clientWidth;
        console.log(this._width);

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        this.set('_dragging', true);

        console.log('move');
        const left = e.clientX - this._x;
        const width = Math.min(
            Math.max(this._height, this._width + left),
            this._maxWidth
        );
        this.refs.bar.style.width = `${width}px`;
    }

    _dragEnd(e) {
        this.set('_dragging', false);

        const bar = this.refs.bar;

        // treat mousedown -> mouseup as click
        if (this._x === e.clientX) {
            this.toggle();
        } else {
            const percent = (bar.clientWidth - this._height / 2) / this._maxWidth;
            
            if (!this.isChecked()) {
                if (percent >= 0.5) {
                    this.check();
                } 
            } else if (percent < 0.5) {
                this.uncheck();
            }
            bar.style.width = '';
        }

        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
    }

    toggle() {
        if (this.isChecked()) {
            this.uncheck();
        } else {
            this.check();
        }
    }

    isChecked() {
        return this.get('value') === this.get('trueValue');
    }

    check() {
        this.set('value', this.get('trueValue'));
    }

    uncheck() {
        this.set('value', this.get('falseValue'));
    }

    _handleClick(e) {
        e.stopPropagation();
    }
}
