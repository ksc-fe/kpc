import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './item.vdt';
var CarouselItem = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(CarouselItem, _Intact);

  var _super = _createSuper(CarouselItem);

  function CarouselItem() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = CarouselItem.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      _isCloned: false,
      _isFirst: false,
      _isLast: false
    };
  };

  _proto._mount = function _mount() {
    var _this$get = this.get(),
        _parent = _this$get._parent,
        _isCloned = _this$get._isCloned,
        _isFirst = _this$get._isFirst,
        _isLast = _this$get._isLast;

    if (!_isCloned) {
      _parent._items.push(this);
    } else {
      if (_isFirst) {
        _parent._firstCloned = this;
      } else if (_isLast) {
        _parent._lastCloned = this;
      }
    }
  };

  _proto._destroy = function _destroy() {
    var _this$get2 = this.get(),
        _parent = _this$get2._parent,
        _isCloned = _this$get2._isCloned,
        _isFirst = _this$get2._isFirst,
        _isLast = _this$get2._isLast;

    if (!_isCloned) {
      var items = _parent._items;

      var index = _indexOfInstanceProperty(items).call(items, this);

      _spliceInstanceProperty(items).call(items, index, 1);
    } else {
      if (_isFirst) {
        _parent._firstCloned = null;
      } else if (_isLast) {
        _parent._lastCloned = null;
      }
    }
  };

  return CarouselItem;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['children']), _defineProperty(_class2, "propTypes", {
  value: String
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { CarouselItem as default };