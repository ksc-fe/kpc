import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {position} from '../moveWrapper/position';
import {_$} from '../utils';
import addStaticMethods from './methods';

export default class Dialog extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        title: String,
        value: Boolean,
        size: ['large', 'default', 'small', 'mini'],
        loading: Boolean,
        disabledOk: Boolean,
        okText: String,
        cancelText: String,
        ok: Function,
        cancel: Function,
        container: [String, Function],
        hideClose: Boolean,
    };

    static events = {
        open: true,
        close: true,
        ok: true,
        cancel: true,
    };

    defaults() {
        return {
            title: _$('提示'),
            value: false,
            size: 'default', // large | default | small | mini
            loading: false,
            disabledOk: false,
            okText: _$('确定'),
            cancelText: _$('取消'),
            ok: undefined,
            cancel: undefined,
            container: () => document.body,
            hideClose: false,

            _dragging: false,
        }
    }

    _init() {
        this.on('$changed:value', (c, isShow) => {
            if (isShow) {
                this._onOpen();
            } else {
                this._onClose();
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
    }

    _onAppended() {
        // if appear, it has animate-appear className and this will effect the dialog
        // so we can not call _center after it
        // in this case we center dialog as soon as it has been appended to container
        if (this.get('value')) {
            this.mounted = true;
            this._onOpen();
        }
    }

    _onOpen() {
        this.trigger('open');
        this._center();
        document.addEventListener('keydown', this._escClose);
    }

    _onClose() {
        this.trigger('close');
        document.removeEventListener('keydown', this._escClose);
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
            this.trigger('cancel', this);
            this.close();
        }
    }

    ok() {
        const callback = this.get('ok');
        if (typeof callback === 'function') {
            callback.call(this, this);
        } else {
            this.trigger('ok', this);
            this.close();
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
        // maybe the animation leaveEnd immediately when destroy it before enters
        // so use `_destroyed` instead of `destroyed`
        if (!this._useAsComponent || this._useAsComponent && this._destroyed) {
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
            },
            // let dialog padding top half of padding bottom
            my: 'center center+16%',
            at: 'center center-16%'
        });
    }

    _dragStart(e) {
        // left key
        if (e.which !== 1 || !this.get('value')) return;

        this.set('_dragging', true);
        const dialog = this.dialog;
        this._x = dialog.offsetLeft - e.clientX;
        this._y = dialog.offsetTop - e.clientY;
        this._width = dialog.offsetWidth;
        this._height = dialog.offsetHeight;

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
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
        if (this.get('_dragging')) {
            this.set('_dragging', false);
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }

    _destroy(...args) {
        this._destroyed = true;
        if (this.get('value')) {
            this.close();
        } else {
            this.vdt.vNode.children._$destroy(...args);
        }
        this._dragEnd();
    }
}

addStaticMethods(Dialog);

export {Dialog};
