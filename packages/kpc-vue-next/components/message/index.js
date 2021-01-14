import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp, _dec2, _class3, _init2, _class4, _temp2;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import message from './message.vdt';
import '../../styles/kpc.css';
import './index.css';
var messages;
var id = 0;
var Message = (_dec2 = Intact.template(), (_class3 = (_temp2 = _class4 = /*#__PURE__*/function (_Intact2) {
  _inheritsLoose(Message, _Intact2);

  var _super3 = _createSuper(Message);

  function Message() {
    return _Intact2.apply(this, arguments) || this;
  }

  Message.notice = function notice(content, duration, type) {
    if (duration === void 0) {
      duration = 5000;
    }

    if (type === void 0) {
      type = 'info';
    }

    if (!messages) {
      messages = Intact.mount(Messages, document.body);
    }

    if (content !== null && typeof content === 'object' && !content.tag) {
      content = _Object$assign({}, content, {
        type: type
      });
    } else {
      content = {
        content: content,
        duration: duration,
        type: type
      };
    }

    var message = new Message(_Object$assign({}, content, {
      value: true,
      _isInstance: true
    }));
    messages.notice(message);
    return message;
  };

  var _proto2 = Message.prototype;

  _proto2.defaults = function defaults() {
    return {
      content: undefined,
      duration: 5000,
      type: 'info',
      key: id++,
      value: false,
      closable: true,
      hideIcon: false,
      // if this component is used as instance or not
      _isInstance: false
    };
  };

  _proto2.init = function init() {
    var _Intact2$prototype$in2, _context2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!this.get('value')) {
      var _Intact2$prototype$in, _context;

      // when use as component, render the component
      // but don't append it to parentDom, use a
      // placeholder instead of
      this.parentDom = null;

      (_Intact2$prototype$in = _Intact2.prototype.init).call.apply(_Intact2$prototype$in, _concatInstanceProperty(_context = [this]).call(_context, args));

      return this.placeholder = document.createComment("message");
    } else if (this.element) {
      // Messages render this component, return the 
      // original dom
      return this.element;
    }

    return (_Intact2$prototype$in2 = _Intact2.prototype.init).call.apply(_Intact2$prototype$in2, _concatInstanceProperty(_context2 = [this]).call(_context2, args));
  };

  _proto2.hydrate = function hydrate(vNode) {
    // don't hydrate it, but initialize it
    this.init(null, vNode);
    return this.placeholder = document.createComment('message');
  };

  _proto2.update = function update(lastVNode, nextVNode) {
    // when this updating is from original parent,
    // update the original dom, but return the placeholder,
    // otherwise return the original dom which has been updated
    if ( // always update in angular
    !this._isAngular && (!lastVNode || // it may have not parentVNode in vue
    lastVNode.parentVNode && lastVNode.parentVNode.tag === MessageAnimate)) {
      return this.element;
    }

    _Intact2.prototype.update.call(this, lastVNode, nextVNode);

    return this.placeholder;
  };

  _proto2.toString = function toString() {
    // return the placeholder string for ssr
    return '<!--message-->';
  };

  _proto2._init = function _init() {
    var _this = this;

    this.on('$change:value', function (c, value) {
      if (value) {
        messages.notice(_this);
      } else {
        messages.delete(_this);
      }
    });
  };

  _proto2._create = function _create() {
    if (!messages) {
      messages = Intact.mount(Messages, document.body);
    }
  };

  _proto2._mount = function _mount() {
    var _this2 = this;

    if (!this.get('value')) return;
    var duration = this.get('duration');

    if (duration) {
      this.timer = _setTimeout(function () {
        _this2.close();
      }, duration);
    }
  };

  _proto2.close = function close() {
    clearTimeout(this.timer);

    if (!this.get('_isInstance')) {
      this.set('value', false);
    } else {
      messages.delete(this);
    }
  };

  _proto2.onMouseEnter = function onMouseEnter(e) {
    this.trigger('mouseenter', e);
    clearTimeout(this.timer);
  };

  _proto2.onMouseLeave = function onMouseLeave(e) {
    this.trigger('mouseleave', e);
    clearTimeout(this.timer);

    this._mount();
  };

  _proto2.destroy = function destroy(vNode) {
    if ((this._isVue || this._isReact || this._isAngular) && !vNode) {
      messages.delete(this);
    } else if (vNode.parentVNode.tag === MessageAnimate && !this.get('_isInstance')) {
      return;
    } else if (vNode.parentVNode.tag !== MessageAnimate) {
      messages.delete(this);
    } else {
      var _Intact2$prototype$de, _context3;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_Intact2$prototype$de = _Intact2.prototype.destroy).call.apply(_Intact2$prototype$de, _concatInstanceProperty(_context3 = [this, vNode]).call(_context3, args));
    }
  };

  return Message;
}(Intact), _defineProperty(_class4, "template", message), _defineProperty(_class4, "info", function (content, duration) {
  return Message.notice(content, duration, 'info');
}), _defineProperty(_class4, "error", function (content, duration) {
  return Message.notice(content, duration, 'danger');
}), _defineProperty(_class4, "success", function (content, duration) {
  return Message.notice(content, duration, 'success');
}), _defineProperty(_class4, "warning", function (content, duration) {
  return Message.notice(content, duration, 'warning');
}), _defineProperty(_class4, "propTypes", {
  content: [String, Intact.VNode],
  duration: Number,
  type: ['info', 'danger', 'success', 'warning'],
  key: [String, Number],
  value: Boolean,
  closable: Boolean,
  hideIcon: Boolean
}), _temp2), (_applyDecoratedDescriptor(_class3, "template", [_dec2], (_init2 = _Object$getOwnPropertyDescriptor(_class3, "template"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _class3)), _class3));
export { Message as default };
var Messages = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Messages, _Intact);

  var _super = _createSuper(Messages);

  function Messages() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Messages.prototype;

  _proto.defaults = function defaults() {
    return {
      messages: []
    };
  };

  _proto._init = function _init() {
    this.MessageAnimate = MessageAnimate;
  };

  _proto.notice = function notice(message) {
    this.get('messages').push(message);
    this.update();
  };

  _proto.delete = function _delete(message) {
    var messages = this.get('messages');

    var index = _indexOfInstanceProperty(messages).call(messages, message);

    if (~index) {
      _spliceInstanceProperty(messages).call(messages, index, 1);

      this.update();
    }
  };

  return Messages;
}(Intact), _defineProperty(_class2, "template", template), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class)); // MessageAniamte type for type checking

var MessageAnimate = /*#__PURE__*/function (_Intact$Animate) {
  _inheritsLoose(MessageAnimate, _Intact$Animate);

  var _super2 = _createSuper(MessageAnimate);

  function MessageAnimate() {
    return _Intact$Animate.apply(this, arguments) || this;
  }

  return MessageAnimate;
}(Intact.Animate);

export { Message };