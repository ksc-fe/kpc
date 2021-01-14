import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import Calendar from '../datepicker/calendar';
import template from './panel.vdt';
import '../../styles/kpc.css';
import './index.css';
import { getDateString, createDate, getTimeString } from '../datepicker/utils';
var TimePanel = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Calendar) {
  _inheritsLoose(TimePanel, _Calendar);

  var _super = _createSuper(TimePanel);

  function TimePanel() {
    return _Calendar.apply(this, arguments) || this;
  }

  var _proto = TimePanel.prototype;

  _proto.defaults = function defaults() {
    return _Object$assign({}, _Calendar.prototype.defaults.call(this), {
      _isSelectTime: true,
      _id: undefined,
      _parent: undefined
    });
  };

  _proto._init = function _init() {
    this.isSelectTime = true;
    this.initIndex();
    this.on('$receive:value', this.initIndex);
    this.on('$receive:multiple', this.initIndex);
  };

  _proto.initState = function initState() {
    this.initIndex();
    this.set('_isSelectTime', true);
  };

  _proto.initIndex = function initIndex(c) {
    var _this$get = this.get(),
        value = _this$get.value,
        multiple = _this$get.multiple,
        _index = _this$get._index;

    if (_index === undefined) {
      // if multiple, add one value showed every time
      // if `c` does no exits it indicate this call is from initState
      this._index = multiple && value && value.length - (c ? 1 : 0) || 0;
    } else {
      this._index = _index;
    }
  };

  _proto.changeTimeByStep = function changeTimeByStep(c, v) {
    // the function is only called in range step,
    // so detecting multiple is unnecessary
    this.isSelectTime = true;

    var _this$get2 = this.get(),
        _parent = _this$get2._parent,
        value = _this$get2.value;

    var valueDate = _parent._createDate(v[0]);

    var _value;

    if (value) {
      _value = _sliceInstanceProperty(value).call(value, 0);
      _value[this._index] = valueDate;
    } else {
      _value = [valueDate];
    }

    this.set('value', _value);
  };

  _proto.onChangeTime = function onChangeTime() {
    var _Calendar$prototype$o, _context;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Calendar$prototype$o = _Calendar.prototype.onChangeTime).call.apply(_Calendar$prototype$o, _concatInstanceProperty(_context = [this]).call(_context, args)); // always set this flag to true


    this.isSelectTime = true;
  };

  _proto.getShowDate = function getShowDate() {
    // we can not set the date to 1, otherwise we can disable the begin time
    // when we select end time firstly
    // we always return now date for time picker
    // #339
    return this.get('_now');
  };

  return TimePanel;
}(Calendar), _defineProperty(_class2, "template", template), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { TimePanel as default };