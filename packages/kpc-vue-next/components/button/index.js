import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import Group from './group';
import '../../styles/kpc.css';
import './index.css';
var Button = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Button, _Intact);

  var _super = _createSuper(Button);

  function Button() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.defaults = function defaults() {
    return {
      type: 'default',
      // primary | warning | danger | success | none | secondary | link
      size: 'default',
      // small | mini
      icon: false,
      circle: false,
      loading: false,
      disabled: false,
      fluid: false,
      htmlType: 'button',
      tagName: 'button',
      tagProps: undefined,
      value: undefined,
      name: undefined,
      tabindex: '0',
      ghost: false,
      _value: undefined,
      _checkType: 'none'
    };
  };

  _proto._mount = function _mount() {
    this._findGroup();

    if (this.group) {
      this.set({
        _checkType: this.group.get('checkType'),
        _value: this.group.get('value')
      });
    }
  };

  _proto._beforeUpdate = function _beforeUpdate() {
    // we need recheck the group, #402
    this._findGroup();

    if (this.group) {
      this.set({
        _checkType: this.group.get('checkType'),
        _value: this.group.get('value')
      }, {
        silent: true
      });
    }
  };

  _proto._findGroup = function _findGroup() {
    var parentVNode = this.parentVNode;

    while (parentVNode && parentVNode.tag !== Group) {
      parentVNode = parentVNode.parentVNode;
    }

    this.group = parentVNode ? parentVNode.children : null;
  };

  _proto.showLoading = function showLoading() {
    this.set('loading', true);
  };

  _proto.hideLoading = function hideLoading() {
    this.set('loading', false);
  };

  _proto.disable = function disable() {
    this.set('disabled', true);
  };

  _proto.enable = function enable() {
    this.set('disabled', false);
  };

  _proto._onClick = function _onClick(e) {
    if (this.get('disabled') || this.get('loading')) {
      return e.preventDefault();
    }

    if (this.group) {
      var _this$get = this.get(),
          _checkType = _this$get._checkType,
          value = _this$get.value,
          _value = _this$get._value;

      if (value !== undefined) {
        if (_checkType === 'radio') {
          this.group.set('value', value);
        } else if (_checkType === 'checkbox') {
          if (!_Array$isArray(_value)) {
            _value = [];
          }

          _value = _sliceInstanceProperty(_value).call(_value, 0);

          var index = _indexOfInstanceProperty(_value).call(_value, value);

          if (!~index) {
            _value.push(value);
          } else {
            _spliceInstanceProperty(_value).call(_value, index, 1);
          }

          this.group.set('value', _value);
        }
      }
    }

    e.component = this;
    this.trigger('click', e);
  };

  _proto._onMouseUp = function _onMouseUp(e) {
    // when click, blur it to remove the focus style
    this.element.blur();
    this.trigger('mouseup', e);
  };

  _createClass(Button, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Button;
}(Intact), _defineProperty(_class2, "propTypes", {
  type: String,
  size: String,
  icon: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  fluid: Boolean,
  htmlType: String,
  tagName: [String, Function],
  tagProps: Object,
  name: String,
  tabindex: [String, Number],
  ghost: Boolean
}), _defineProperty(_class2, "events", {
  click: true,
  mouseup: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Button as default };
export { Button, Group as ButtonGroup };