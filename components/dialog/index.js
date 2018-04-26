import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {position} from '../moveWrapper/position';
import {_$} from '../utils';

export default class Dialog extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        value: Boolean,
        loading: Boolean,
    };

    defaults() {
        return {
            title: _$('提示'),
            value: false,
            size: 'default', // default | small
            loading: false,
            disabledOk: false,
            okText: _$('确认'),
            cancelText: _$('取消'),
            ok: undefined,
            cancel: undefined,

            _dragging: false,
        }
    }

    _init() {
        this.on('$changed:value', (c, isShow) => {
            if (isShow) {
                this.trigger('open');
                this._center();
            } else {
                this.trigger('close');
            }
        }); 
    }

    _create() {
        // use as component
        if (this.vNode) {
            this._useAsComponent = true;
        }
    }

    _mount(lastVNode, nextVNode) {
        // for debug
        window.__dialog = this;

        this._center();

        document.addEventListener('keydown', this._escClose);
    }

    showLoading() {
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    disableOk() {
        this.set('disabledOk', true);
    }

    enableOk() {
        this.set('disabledOk', false);
    }

    close() {
        this.set('value', false);
    }

    cancel() {
        const callback = this.get('cancel');
        if (typeof callback === 'function') {
            callback.call(this, this);
        } else {
            this.close();
            this.trigger('cancel', this);
        }
    }

    ok() {
        const callback = this.get('ok');
        if (typeof callback === 'function') {
            callback.call(this, this);
        } else {
            this.close();
            this.trigger('ok', this);
        }
    }

    show() {
        return new Promise((resolve) => {
            if (this.get('value')) return;
            // use as component
            if (this._useAsComponent) {
                return this.set('value', true);
            }
            // use as instance
            if (this.rendered) {
                this.set('value', true);
            } else {
                const show = () => {
                    this.init(); 
                    this.mount();
                    this.set('value', true);
                    resolve();
                }
                if (this.inited) {
                    show();
                } else {
                    this.on('$inited', show);
                }
            }
        });
    }

    _escClose(e) {
        // Esc
        if (e.keyCode === 27) this.close();
    }

    _leaveEnd() {
        // use as instance or use as component but it has be destroyed
        // then remove the element
        if (!this._useAsComponent || this._useAsComponent && this.destroyed) {
            this.vdt.vNode.children._$destroy();
        }
    }

    _center() {
        if (!this.mounted || !this.get('value')) return;
        // move to center
        position(this.dialog, {
            // ensure title visible always
            using: (feedback, position) => {
                const height = feedback.element.height;
                const scrollTop = window.pageYOffset;
                const outerHeight = window.document.documentElement.clientHeight;
                if (height > outerHeight) {
                    position.top = scrollTop;
                }    
            }
        });
    }

    _dragStart(e) {
        /* istanbul ignore next */ {
        
        // left key
        if (e.which !== 1) return;

        this.set('_dragging', true);
        const dialog = this.dialog;
        this._x = dialog.offsetLeft - e.clientX;
        this._y = dialog.offsetTop - e.clientY;
        this._width = dialog.offsetWidth;
        this._height = dialog.offsetHeight;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
        /* istanbul ignore end */ }
    }

    _move(e) {
        /* istanbul ignore next */

        // TODO; drag out of screen
        if (this.get('_dragging')) {
            const style = this.dialog.style;
            const body = document.body;
            const html = document.documentElement;
            const left = Math.min(
                Math.max(this._x + e.clientX, 0),
                Math.max(Math.max(body.scrollWidth, html.scrollWidth) - this._width, 0)
            );
            const top = Math.min(
                Math.max(this._y + e.clientY, 0),
                Math.max(Math.max(body.scrollHeight, html.scrollHeight) - this._height, 0)
            );
            style.left = `${left}px`;
            style.top = `${top}px`;
        }
    }

    _dragEnd() {
        /* istanbul ignore if */
        if (this.get('_dragging')) {
            this.set('_dragging', false);
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }

    _destroy(...args) {
        document.removeEventListener('keydown', this._escClose);
        if (this.get('value')) {
            this.close();
        } else {
            this.vdt.vNode.children._$destroy(...args);
        }
        this._dragEnd();
    }
}

export {Dialog};
