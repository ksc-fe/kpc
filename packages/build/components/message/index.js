'use strict';

exports.__esModule = true;
exports.Message = exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp, _dec2, _desc2, _value2, _class3, _init2, _class4, _temp2;

var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

var _message = require('./message.vdt');

var _message2 = _interopRequireDefault(_message);

require('../../styles/kpc.css');

require('./index.css');

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

var messages = void 0;
var id = 0;

var Message = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(Message, _Intact);

    function Message() {
        (0, _classCallCheck3.default)(this, Message);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    Message.notice = function notice(content) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';

        if (!messages) {
            messages = _intact2.default.mount(Messages, document.body);
        }

        if (content !== null && (typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content)) === 'object' && !content.tag) {
            content = (0, _assign2.default)({}, content, { type: type });
        } else {
            content = { content: content, duration: duration, type: type };
        }

        var message = new Message((0, _extends3.default)({}, content, {
            value: true,
            _isInstance: true
        }));

        messages.notice(message);

        return message;
    };

    Message.prototype.defaults = function defaults() {
        return {
            content: undefined,
            duration: 5000,
            type: 'info',
            key: id++,
            value: false,
            closable: true,

            // if this component is used as instance or not
            _isInstance: false
        };
    };

    Message.prototype.init = function init() {
        var _Intact$prototype$ini2;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!this.get('value')) {
            var _Intact$prototype$ini;

            // when use as component, render the component
            // but don't append it to parentDom, use a
            // placeholder instead of
            this.parentDom = null;
            (_Intact$prototype$ini = _Intact.prototype.init).call.apply(_Intact$prototype$ini, [this].concat(args));
            return this.placeholder = document.createComment("message");
        } else if (this.element) {
            // Messages render this component, return the 
            // original dom
            return this.element;
        }
        return (_Intact$prototype$ini2 = _Intact.prototype.init).call.apply(_Intact$prototype$ini2, [this].concat(args));
    };

    Message.prototype.hydrate = function hydrate(vNode) {
        // don't hydrate it, but initialize it
        this.init(null, vNode);
        return this.placeholder = document.createComment('message');
    };

    Message.prototype.update = function update(lastVNode, nextVNode) {
        // when this updating is from original parent,
        // update the original dom, but return the placeholder,
        // otherwise return the original dom which has been updated
        if (!lastVNode ||
        // it may have not parentVNode in vue
        lastVNode.parentVNode && lastVNode.parentVNode.tag === MessageAnimate) {
            return this.element;
        }
        _Intact.prototype.update.call(this, lastVNode, nextVNode);
        return this.placeholder;
    };

    Message.prototype.toString = function toString() {
        // return the placeholder string for ssr
        return '<!--message-->';
    };

    Message.prototype._init = function _init() {
        var _this2 = this;

        this.on('$change:value', function (c, value) {
            if (value) {
                messages.notice(_this2);
            } else {
                messages.delete(_this2);
            }
        });
    };

    Message.prototype._create = function _create() {
        if (!messages) {
            messages = _intact2.default.mount(Messages, document.body);
        }
    };

    Message.prototype._mount = function _mount() {
        var _this3 = this;

        if (!this.get('value')) return;

        var duration = this.get('duration');
        if (duration) {
            this.timer = setTimeout(function () {
                _this3.close();
            }, duration);
        }
    };

    Message.prototype.close = function close() {
        clearTimeout(this.timer);
        if (!this.get('_isInstance')) {
            this.set('value', false);
        } else {
            messages.delete(this);
        }
    };

    Message.prototype.onMouseEnter = function onMouseEnter() {
        clearTimeout(this.timer);
    };

    Message.prototype.onMouseLeave = function onMouseLeave() {
        clearTimeout(this.timer);
        this._mount();
    };

    Message.prototype.destroy = function destroy(vNode) {
        if (this._isVue && !vNode) {
            messages.delete(this);
        } else if (vNode.parentVNode.tag === MessageAnimate && !this.get('_isInstance')) {
            return;
        } else if (vNode.parentVNode.tag !== MessageAnimate) {
            messages.delete(this);
        } else {
            _Intact.prototype.destroy.call(this, vNode);
        }
    };

    return Message;
}(_intact2.default), _class2.template = _message2.default, _class2.info = function (content, duration) {
    Message.notice(content, duration, 'info');
}, _class2.error = function (content, duration) {
    Message.notice(content, duration, 'danger');
}, _class2.success = function (content, duration) {
    Message.notice(content, duration, 'success');
}, _class2.warning = function (content, duration) {
    Message.notice(content, duration, 'warning');
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Message;
var Messages = (_dec2 = _intact2.default.template(), (_class3 = (_temp2 = _class4 = function (_Intact2) {
    (0, _inherits3.default)(Messages, _Intact2);

    function Messages() {
        (0, _classCallCheck3.default)(this, Messages);
        return (0, _possibleConstructorReturn3.default)(this, _Intact2.apply(this, arguments));
    }

    Messages.prototype.defaults = function defaults() {
        return {
            messages: []
        };
    };

    Messages.prototype._init = function _init() {
        this.MessageAnimate = MessageAnimate;
    };

    Messages.prototype.notice = function notice(message) {
        this.get('messages').push(message);
        this.update();
    };

    Messages.prototype.delete = function _delete(message) {
        var messages = this.get('messages');
        var index = messages.indexOf(message);
        if (~index) {
            messages.splice(index, 1);
            this.update();
        }
    };

    return Messages;
}(_intact2.default), _class4.template = _index2.default, _temp2), (_applyDecoratedDescriptor(_class3, 'template', [_dec2], (_init2 = (0, _getOwnPropertyDescriptor2.default)(_class3, 'template'), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init2;
    }
}), _class3)), _class3));

// MessageAniamte type for type checking

var MessageAnimate = function (_Intact$Animate) {
    (0, _inherits3.default)(MessageAnimate, _Intact$Animate);

    function MessageAnimate() {
        (0, _classCallCheck3.default)(this, MessageAnimate);
        return (0, _possibleConstructorReturn3.default)(this, _Intact$Animate.apply(this, arguments));
    }

    return MessageAnimate;
}(_intact2.default.Animate);

exports.Message = Message;