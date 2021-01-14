import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './drag.vdt';
import '../../styles/kpc.css';
import './index.css';
var Drag = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Drag, _Intact);

  var _super = _createSuper(Drag);

  function Drag() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Drag.prototype;

  _proto.defaults = function defaults() {
    return {
      value: 0,
      min: 0,
      max: 255
    };
  };

  _proto._dragStart = function _dragStart(e) {
    if (e.which !== 1) return;
    this.mousedown = true;
    this._x = e.clientX;
    document.addEventListener('mousemove', this._move);
    document.addEventListener('mouseup', this._dragEnd);
    this.trigger('dragStart');
  };

  _proto._move = function _move(e) {
    this.mousemove = true;
    var deltaX = e.clientX - this._x;
    this._x = e.clientX;

    var _this$get = this.get(),
        value = _this$get.value,
        min = _this$get.min,
        max = _this$get.max;

    var newValue = value + deltaX;
    this.set('value', Math.min(max, Math.max(0, newValue)));
  };

  _proto._dragEnd = function _dragEnd(fromDestroy) {
    document.removeEventListener('mousemove', this._move);
    document.removeEventListener('mouseup', this._dragEnd);
    if (fromDestroy === true) return;
    if (this.mousedown && !this.mousemove) this.trigger('click');
    this.mousedown = false;
    this.mousemove = false;
    this.trigger('dragEnd');
  };

  _proto._destroy = function _destroy() {
    this._dragEnd(true);
  };

  return Drag;
}(Intact), _defineProperty(_class2, "template", template), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Drag as default };