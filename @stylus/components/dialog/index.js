'use strict';

exports.__esModule = true;
exports.Dialog = exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('../../styles/kpc.styl');

require('./index.styl');

var _position = require('../moveWrapper/position');

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Dialog = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Dialog, _Intact);

    function Dialog() {
        (0, _classCallCheck3.default)(this, Dialog);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Dialog.prototype.defaults = function defaults() {
        return {
            title: '提示',
            value: false,
            size: 'default', // default | small
            loading: false,
            disabledOk: false,
            okText: '确认',
            cancelText: '取消',
            ok: undefined,
            cancel: undefined,

            _dragging: false
        };
    };

    Dialog.prototype._init = function _init() {
        var _this2 = this;

        this.on('$changed:value', function (c, isShow) {
            if (isShow) {
                _this2.trigger('open');
                _this2._center();
            } else {
                _this2.trigger('close');
            }
        });
    };

    Dialog.prototype._create = function _create() {
        // use as component
        if (this.parentVNode) {
            this._useAsComponent = true;
        }
    };

    Dialog.prototype._mount = function _mount(lastVNode, nextVNode) {
        // for debug
        window.__dialog = this;

        this._center();

        document.addEventListener('keydown', this._escClose);
    };

    Dialog.prototype.showLoading = function showLoading() {
        this.set('loading', true);
    };

    Dialog.prototype.hideLoading = function hideLoading() {
        this.set('loading', false);
    };

    Dialog.prototype.disableOk = function disableOk() {
        this.set('disabledOk', true);
    };

    Dialog.prototype.enableOk = function enableOk() {
        this.set('disabledOk', false);
    };

    Dialog.prototype.close = function close() {
        this.set('value', false);
    };

    Dialog.prototype.cancel = function cancel() {
        var callback = this.get('cancel');
        if (typeof callback === 'function') {
            callback.call(this, this);
        } else {
            this.close();
            this.trigger('cancel', this);
        }
    };

    Dialog.prototype.ok = function ok() {
        var callback = this.get('ok');
        if (typeof callback === 'function') {
            callback.call(this, this);
        } else {
            this.close();
            this.trigger('ok', this);
        }
    };

    Dialog.prototype.show = function show() {
        var _this3 = this;

        return new _promise2.default(function (resolve) {
            if (_this3.get('value')) return;
            // use as component
            if (_this3._useAsComponent) {
                return _this3.set('value', true);
            }
            // use as instance
            if (_this3.rendered) {
                _this3.set('value', true);
            } else {
                var show = function show() {
                    _this3.init();
                    _this3.mount();
                    _this3.set('value', true);
                    resolve();
                };
                if (_this3.inited) {
                    show();
                } else {
                    _this3.on('$inited', show);
                }
            }
        });
    };

    Dialog.prototype._escClose = function _escClose(e) {
        // Esc
        if (e.keyCode === 27) this.close();
    };

    Dialog.prototype._leaveEnd = function _leaveEnd() {
        // use as instance or use as component but it has be destroyed
        // then remove the element
        if (!this._useAsComponent || this._useAsComponent && this.destroyed) {
            this.vdt.vNode.children._$destroy();
        }
    };

    Dialog.prototype._center = function _center() {
        var _this4 = this;

        if (!this.mounted || !this.get('value')) return;
        // move to center
        (0, _position2.default)(this.dialog, {
            // ensure title visible always
            using: function using(pos) {
                var height = pos.element.height;
                var scrollTop = window.scrollY;
                var outerHeight = window.innerHeight;
                if (height > outerHeight) {
                    _this4.dialog.style.top = scrollTop + 'px';
                }
            }
        });
    };

    Dialog.prototype._dragStart = function _dragStart(e) {
        /* istanbul ignore next */{

            // left key
            if (e.which !== 1) return;

            this.set('_dragging', true);
            var dialog = this.dialog;
            this._x = dialog.offsetLeft - e.clientX;
            this._y = dialog.offsetTop - e.clientY;
            this._width = dialog.offsetWidth;
            this._height = dialog.offsetHeight;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
            /* istanbul ignore end */
        }
    };

    Dialog.prototype._move = function _move(e) {
        /* istanbul ignore next */

        // TODO; drag out of screen
        if (this.get('_dragging')) {
            var style = this.dialog.style;
            var body = document.body;
            var html = document.documentElement;
            var left = Math.min(Math.max(this._x + e.clientX, 0), Math.max(Math.max(body.scrollWidth, html.scrollWidth) - this._width, 0));
            var top = Math.min(Math.max(this._y + e.clientY, 0), Math.max(Math.max(body.scrollHeight, html.scrollHeight) - this._height, 0));
            style.left = left + 'px';
            style.top = top + 'px';
        }
    };

    Dialog.prototype._dragEnd = function _dragEnd() {
        /* istanbul ignore if */
        if (this.get('_dragging')) {
            this.set('_dragging', false);
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    };

    Dialog.prototype._destroy = function _destroy() {
        document.removeEventListener('keydown', this._escClose);
        if (this.get('value')) {
            this.close();
        } else {
            var _vdt$vNode$children;

            (_vdt$vNode$children = this.vdt.vNode.children)._$destroy.apply(_vdt$vNode$children, arguments);
        }
        this._dragEnd();
    };

    return Dialog;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    value: Boolean,
    loading: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Dialog;
exports.Dialog = Dialog;