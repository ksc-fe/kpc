import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/reduce";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
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
import template from './col.vdt';
import { isStringOrNumber } from '../utils';
import { breakpoints } from './utils';
import '../../styles/kpc.css';
import './index.css';
var Col = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Col, _Intact);

  var _super = _createSuper(Col);

  function Col() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.defaults = function defaults() {
    return {
      span: undefined,
      offset: 0,
      gutter: 0,
      order: 0,
      pull: 0,
      push: 0,
      // responsive
      xs: undefined,
      sm: undefined,
      md: undefined,
      lg: undefined,
      xl: undefined,
      xxl: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    _forEachInstanceProperty(breakpoints).call(breakpoints, function (item) {
      _this.on("$receive:" + item, function (c, v) {
        if (!v) {
          _this[item] = undefined;
        } else if (isStringOrNumber(v)) {
          _this[item] = {
            span: +v
          };
        } else {
          _this[item] = v;
        }
      });
    });
  };

  _createClass(Col, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Col;
}(Intact), _defineProperty(_class2, "propTypes", _Object$assign({
  gutter: [String, Number],
  span: [String, Number],
  offset: [String, Number],
  order: [String, Number],
  pull: [String, Number],
  push: [String, Number]
}, _reduceInstanceProperty(breakpoints).call(breakpoints, function (memo, item) {
  memo[item] = [String, Number, Object];
  return memo;
}, {}))), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Col as default };