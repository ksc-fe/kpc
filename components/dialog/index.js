import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    get template() { return template }

    defaults() {
        return {
            title: '提示',
            _dragging: false 
        }
    }

    _init() {
         
    }

    _mount() {
        // move element to body
        const element = this.element;
        document.body.appendChild(element);
        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        // left key
        if (e.which !== 1) return;

        this.set('_dragging', true);
        const dialog = this._dialog;
        this._x = dialog.offsetLeft - e.clientX;
        this._y = dialog.offsetTop - e.clientY;
        this._width = dialog.offsetWidth;
        this._height = dialog.offsetHeight;
        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        if (this.get('_dragging')) {
            const style = this._dialog.style;
            const body = document.body;
            const left = Math.min(
                Math.max(this._x + e.clientX, 0),
                body.offsetWidth - this._width
            );
            const top = Math.min(
                Math.max(this._y + e.clientY, 0),
                body.offsetHeight - this._height
            );
            style.left = `${left}px`;
            style.top = `${top}px`;
        }
    }

    _dragEnd() {
        if (this.get('_dragging')) {
            this.set('_dragging', false);
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }
}
