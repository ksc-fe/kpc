import Intact from 'intact';
import template from './index.vdt';
import '../../styles/kpc.styl';
import './index.styl';
import {position, scrollbarWidth} from '../moveWrapper/position';
import {_$, config} from '../utils';
import addStaticMethods from './methods';
import initMouseOutsidable from '../dropdown/mouseOutsidable';

// only close the top dialog when press ESC
const dialogs = [];
const escClose = (e) => {
    dialogs[dialogs.length - 1]._escClose(e);
}

export default class Dialog extends Intact {
    @Intact.template()
    static template = template;

    static blocks = ['header', 'body', 'footer', 'footer-wrapper'];

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
        overlay: Boolean,
        closable: Boolean,
        terminate: Function,
        escClosable: Boolean,
        width: [String, Number],
        mode: ['destroy', 'hide'],
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
            overlay: true,
            closable: true,
            terminate: undefined,
            escClosable: true,
            width: undefined,
            mode: 'destroy',

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
        initMouseOutsidable(this);
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

    _shouldFixBody() {
        if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
            return scrollbarWidth();
        }
    }

    _onOpen() {
        if (this.get('overlay')) {
            this.refs.wrapper.style.display = 'block';

            const body = document.body;
            if (!body.__dialogAmount) {
                const bodyStyle = body.style;
                this._originBodyStyle = body.getAttribute('style');
                bodyStyle.overflow = 'hidden';

                const scrollBarWidth = this._scrollBarWidth = this._shouldFixBody();
                if (scrollBarWidth) {
                    bodyStyle.paddingRight = `${scrollBarWidth}px`;

                    if (config.onDialogOpen) {
                        config.onDialogOpen(scrollBarWidth);
                    }
                }

                body.__dialogAmount = 1;
            } else {
                body.__dialogAmount++;
            }
        }

        this.trigger('open');
        this._center();
        if (!dialogs.length) {
            document.addEventListener('keydown', escClose);
        }
        dialogs.push(this);
    }

    _onClose() {
        this.trigger('close');
        dialogs.pop();
        if (!dialogs.length) {
            document.removeEventListener('keydown', escClose);
        }
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
                    this.set('value', true);
                    this.init();
                    this.mount();
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
        if (this.get('escClosable') && e.keyCode === 27) {
            this._terminate();
        }
    }

    _leaveEnd() {
        // use as instance or use as component but it has be destroyed
        // then remove the element
        // maybe the animation leaveEnd immediately when destroy it before enters
        // so use `_destroyed` instead of `destroyed`
        if (!this._useAsComponent || this._useAsComponent && this._destroyed) {
            this.vdt.vNode.children._$destroy();
        }

        if (this.get('overlay')) {
            if (this._useAsComponent) {
                const wrapper = this.refs.wrapper;
                if (wrapper) {
                    wrapper.style.display = 'none';
                }
            }

            const body = document.body;
            body.__dialogAmount--;
            if (!body.__dialogAmount) {
                body.setAttribute('style', this._originBodyStyle || '');
            }

            if (config.onDialogClose && this._scrollBarWidth) {
                config.onDialogClose(this._scrollBarWidth);
            }
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

        const body = document.body;
        const html = document.documentElement;
        if (!this.get('overlay')) {
            this._areaWidth = Math.max(body.scrollWidth, html.scrollWidth);
            this._areaHeight = Math.max(body.scrollHeight, html.scrollHeight);
        } else {
            this._areaWidth = body.offsetWidth;
            this._areaHeight = body.offsetHeight;
        }

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        if (this.get('_dragging')) {
            const style = this.dialog.style;

            let {_areaWidth, _areaHeight} = this;
            if (this.get('overlay')) {
                // detect the wrapper has scrollbar or not
                const wrapper = this.refs.wrapper;
                if (wrapper.scrollHeight > wrapper.offsetHeight) {
                    const scrollBarWidth = scrollbarWidth();
                    _areaWidth -= scrollBarWidth;
                }
            }

            const left = Math.min(
                Math.max(this._x + e.clientX, 0),
                Math.max(_areaWidth - this._width, 0)
            );
            const top = Math.min(
                Math.max(this._y + e.clientY, 0),
                Math.max(_areaHeight - this._height, 0)
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

    _onClickOverlay() {
        if (this.get('closable') && !this._mousedown) {
            this._terminate();
        }
    }

    _onClickWrapper(e) {
        if (e.target === this.refs.wrapper) {
            this._onClickOverlay(e);
        }
    }

    /**
     * @brief
     * only be called by self when user clicks close button,
     * presses ESC or clicks overlay
     */
    _terminate() {
        const terminate = this.get('terminate');
        if (terminate) {
            terminate.call(this, this);
        } else {
            this.trigger('terminate');
            this.close();
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
