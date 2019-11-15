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
        this._x = e.screenX;
        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
        this.trigger('dragStart');
    }

    _move(e) {
        const deltaX = e.screenX - this._x;
        this._x = e.screenX;
        const {value, min, max} = this.get();
        const newValue = value + deltaX;
        if (newValue >= min && newValue <= max) {
            this.set('value', newValue);
        }
    }

    _dragEnd() {
        document.removeEventListener('mousemove', this._move);
        document.removeEventListener('mouseup', this._dragEnd);
        this.trigger('dragEnd');
    }

    _destory() {
        this._dragEnd();
    }
}
