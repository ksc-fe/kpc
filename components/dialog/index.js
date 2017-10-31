import Intact from 'intact';
import template from './index.vdt';
import './index.styl';
import position from '../moveWrapper/position';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            title: '提示',
            value: false,
            type: 'default', // default | small
            fixHeader: false,
            _dragging: false,
        }
    }

    _init() {
        this.on('$changed:value', (c, isShow) => {
            if (isShow) this._center();
        }); 

        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
        this._escClose = this._escClose.bind(this);
    }

    _create() {
        // use as component
        if (this.parentVNode) {
            this._useAsComponent = true;
        }
    }

    _mount(lastVNode, nextVNode) {
        // for debug
        window.__dialog = this;

        this._center();

        document.addEventListener('keydown', this._escClose);
    }

    close() {
        this.set('value', false);
    }

    cancel() {
        this.close();
        this.trigger('cancel', this);
    }

    ok() {
        this.close();
        this.trigger('ok', this);
    }

    show() {
        if (this.get('value')) return;
        // use as component
        if (this._useAsComponent) {
            return this.set('value', true);
        }
        if (this.rendered) {
            this.set('value', true);
        } else {
            const show = () => {
                this.init(); 
                this.mount();
                this.set('value', true);
            }
            if (this.inited) {
                show();
            } else {
                this.on('$inited', show);
            }
        }
    }

    _escClose(e) {
        // Esc
        if (e.keyCode === 27) this.close();
    }

    _leaveEnd() {
        // use as instance or use as component but it has be destroyed
        // then remove the element
        if (!this._useAsComponent || this._useAsComponent && this.destroyed) {
            this.vdt.vNode.children.$destroy();
        }
    }

    _center() {
        if (!this.mounted || !this.get('value')) return;
        // move to center
        position(this._dialog.element);
        // const body = document.body
        // const dialog = this._dialog.element;
        // const style = dialog.style;
        // style.top = Math.max((body.offsetHeight - dialog.offsetHeight) / 2, 0) + 'px';
        // style.left = Math.max((body.offsetWidth - dialog.offsetWidth) / 2, 0) + 'px';
    }

    _dragStart(e) {
        // left key
        if (e.which !== 1) return;

        this.set('_dragging', true);
        const dialog = this._dialog.element;
        this._x = dialog.offsetLeft - e.clientX;
        this._y = dialog.offsetTop - e.clientY;
        this._width = dialog.offsetWidth;
        this._height = dialog.offsetHeight;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        if (this.get('_dragging')) {
            const style = this._dialog.element.style;
            const body = document.body;
            const left = Math.min(
                Math.max(this._x + e.clientX, 0),
                Math.max(body.offsetWidth - this._width, 0)
            );
            const top = Math.min(
                Math.max(this._y + e.clientY, 0),
                Math.max(body.offsetHeight - this._height, 0)
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

    _destroy() {
        document.removeEventListener('keydown', this._escClose);
        if (this.get('value')) {
            this.close();
        } else {
            // this.vdt.vNode.children === MoveWrapper
            this.vdt.vNode.children.$destroy();
        }
        this._dragEnd();
    }
}
