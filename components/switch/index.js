import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Switch extends Intact {
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

    static propTypes = {
        name: String,
        on: String,
        off: String,
        width: [Number, String],
        height: [Number, String],
        size: ['large', 'default', 'small', 'mini'],
        disabled: Boolean,
    };

    static events = {
        click: true,
        keypress: true,
    };

    _dragStart(e) {
        if (this.get('disabled') || e.which !== 1) return;

        this._x = e.clientX;
        this._height = this.refs.bar.clientHeight;
        this._width = this.refs.bar.clientWidth;
        this._maxWidth = this.element.clientWidth;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        this.set('_dragging', true);

        const left = e.clientX - this._x;
        const width = Math.min(
            Math.max(this._height, this._width + left),
            this._maxWidth
        );
        this.refs.bar.style.width = `${width}px`;
    }

    _dragEnd(e) {
        this.element.blur();
        const bar = this.refs.bar;

        // treat mousedown -> mouseup as click
        if (this._x === e.clientX) {
            bar.style.width = '';
            this._toggle();
        } else {
            // cancel this operation if the distance less than half of width
            const percent = (bar.clientWidth - this._height / 2) / this._maxWidth;
            
            if (!this.isChecked()) {
                if (percent >= 0.5) {
                    this.check();
                } 
            } else if (percent < 0.5) {
                this.uncheck();
            } 
            if (!this.isChecked() && this.get('width') && this.get('height')) {
                // if is set width and height
                bar.style.width = this.get('height') + 'px';
            } else {
                bar.style.width = '';
            }
        }

        this.set('_dragging', false);

        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
    }

    _onClick(e) {
        this.trigger('click', e);
        if (!e._switchIgnore) {
            this._toggle(e, false);
        }
    }

    _toggle(e, isKeypress) {
        if (this.get('disabled')) return;

        // if is not keypress, we blur it to remove focus style
        if (!isKeypress) {
            this.element.blur();
        }

        if (this.isChecked()) {
            this.uncheck();
        } else {
            this.check();
        }
    }

    _onKeypress(e) {
        this.trigger('keypress', e);
        if (e.keyCode === 13) {
            this._toggle(e, true);
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
        // we can not stop propagation, otherwise the click can not be listen at outer
        e._switchIgnore = true;
        // e.stopPropagation();
    }
}

export {Switch};
