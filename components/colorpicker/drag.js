import Intact from 'intact';
import template from './drag.vdt';
import '../../styles/kpc.styl';
import './index.styl';

export default class Drag extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: 0,
            min: 0,
            max: 255,
        };
    }

    _dragStart(e) {
        if (e.which !== 1) return;
        this.mousedown = true;
        this._x = e.clientX;
        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
        this.trigger('dragStart');
    }

    _move(e) {
        this.mousemove = true;
        const deltaX = e.clientX - this._x;
        this._x = e.clientX;
        const {value, min, max} = this.get();
        const newValue = value + deltaX;
        this.set('value', Math.min(max, Math.max(0, newValue)));
    }

    _dragEnd() {
        if (this.mousedown && !this.mousemove) this.trigger('click');
        this.mousedown = false;
        this.mousemove = false;
        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
        this.trigger('dragEnd');
    }

    _destory() {
        this._dragEnd();
    }
}
