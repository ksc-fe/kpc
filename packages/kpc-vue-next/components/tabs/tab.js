import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
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
import template from './tab.vdt';
var Tab = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Tab, _Intact);

  var _super = _createSuper(Tab);

  function Tab() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      to: undefined,
      disabled: false,
      closable: undefined,
      // passed by parent
      _value: undefined,
      _parent: undefined
    };
  } // _isActive() {
  // const value = this.get('value');
  // return value !== undefined && value === this.get('_value');
  // }
  ;

  _proto._changeTab = function _changeTab(e) {
    if (this.get('disabled')) {
      e.preventDefault();
    } else {
      this.get('_parent')._changeTab(this.get());

      this.trigger('click', e);
    }
  };

  _proto._remove = function _remove(e) {
    e.stopPropagation();

    var _this$get = this.get(),
        _parent = _this$get._parent;

    _parent._remove(this);
  };

  _createClass(Tab, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Tab;
}(Intact), _defineProperty(_class2, "propTypes", {
  disabled: Boolean,
  to: [String, Object],
  closable: Boolean
}), _defineProperty(_class2, "events", {
  click: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Tab as default };