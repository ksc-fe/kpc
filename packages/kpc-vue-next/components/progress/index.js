import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Created by sylvia on 2017/10/16.
 */
import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';

function fixPercent(percent) {
  if (percent > 100) percent = 100;
  if (percent < 0) percent = 0;
  return +percent;
}

var Progress = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Progress, _Intact);

  var _super = _createSuper(Progress);

  function Progress() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Progress.prototype;

  _proto.defaults = function defaults() {
    return {
      type: 'bar',
      // bar circle
      percent: 0,
      // 0~100
      size: 'default',
      // small mini
      isOuterText: true,
      isInnerText: false,
      status: 'active',
      strokeWidth: 4,
      _status: 'active'
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:percent', function (c, percent) {
      _this.set('percent', fixPercent(percent), {
        silent: true
      });
    });
    this.on('$receive', function (c, keys) {
      var _this$get = _this.get(),
          status = _this$get.status,
          percent = _this$get.percent;

      if (percent === 100 && status !== 'error') {
        status = 'success';
      }

      _this.set('_status', status, {
        silent: true
      });
    });
  };

  _createClass(Progress, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Progress;
}(Intact);

_defineProperty(Progress, "propTypes", {
  type: ['bar', 'circle'],
  percent: [Number, String],
  size: ['default', 'small', 'mini'],
  isOuterText: Boolean,
  isInnerText: Boolean,
  status: ['active', 'success', 'error', 'normal', 'warning'],
  strokeWidth: Number
});

export { Progress as default };
export { Progress };