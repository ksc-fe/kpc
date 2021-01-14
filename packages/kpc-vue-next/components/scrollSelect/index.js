import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _findIndexInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find-index";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import { isStringOrNumber } from '../utils';
var ScrollSelect = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(ScrollSelect, _Intact);

  var _super = _createSuper(ScrollSelect);

  function ScrollSelect() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = ScrollSelect.prototype;

  _proto.defaults = function defaults() {
    return {
      value: '',
      count: 19,
      data: [],
      disabled: false,
      disable: undefined,
      _list: [],
      _translate: 0,
      _marginTop: 0,
      _dragging: false,
      _value: ''
    };
  };

  _proto._init = function _init() {
    var _this = this,
        _context;

    // maybe the receive event of data or count is triggered before value
    // fix #186
    this.set('_value', this.get('value'), {
      silent: true
    });
    this.on('$receive:value', function (c, v) {
      _this.set('_value', v);
    });

    _forEachInstanceProperty(_context = ['data', 'count']).call(_context, function (item) {
      _this.on("$receive:" + item, _this._setList);
    });

    this.on('$change:_value', function (c, v) {
      var disable = _this.get('disable');

      if (!disable || !disable.call(_this, v)) {
        _this.set('value', v);
      }

      _this._setList();
    }); // throttle onWheel

    var lock = false;
    var onWheel = this._onWheel;

    this._onWheel = function (e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      e.preventDefault();
      if (lock) return;
      lock = true;
      _this.timer = _setTimeout(function () {
        var _context2;

        if (_this.destroyed) return;
        onWheel.apply(void 0, _concatInstanceProperty(_context2 = [e]).call(_context2, args));
        lock = false;
      }, 50);
    };
  };

  _proto._mount = function _mount() {
    var count = this.get('count');
    var height = this.element.offsetHeight;
    var itemHeight = this.refs.item.offsetHeight; // const totalHeight = this.refs.wrapper.offsetHeight; 
    // for even count, #211

    this._deltaY = -(Math.floor(count / 2) * itemHeight - (height - itemHeight) / 2);
    this.set({
      _translate: this._deltaY
    });
  };

  _proto._select = function _select(item, index) {
    // if _dragged, do not trigger click event, #123
    if (this._dragged) return;

    var _this$get = this.get(),
        count = _this$get.count,
        _translate = _this$get._translate,
        _marginTop = _this$get._marginTop;

    var half = Math.floor(count / 2);
    var itemHeight = this.refs.item.offsetHeight;
    this.set({
      _translate: _translate - itemHeight * (index - half),
      _marginTop: _marginTop + itemHeight * (index - half),
      _value: item.value
    });
  };

  _proto._setList = function _setList() {
    var _this$get2 = this.get(),
        data = _this$get2.data,
        _value = _this$get2._value,
        count = _this$get2.count;

    if (typeof data === 'function') {
      data = data(_value);
    }

    var index = -1;
    data = _mapInstanceProperty(data).call(data, function (item, i) {
      if (isStringOrNumber(item)) {
        item = {
          value: item,
          label: item
        };
      }

      if (item.value === _value) {
        index = i;
      }

      return item;
    });

    if (!~index) {
      index = 0;
      this.set('_value', data[0].value);
    }

    var length = data.length;
    var half = Math.floor(count / 2);
    var _list = [];

    for (var i = 0; i < count; i++) {
      _list.push(data[((index - half + i) % length + length) % length]);
    }

    this.set('_list', _list, {
      silent: true
    });
  };

  _proto._dragStart = function _dragStart(e) {
    if (e.which !== 1) return;
    this.set('_dragging', true);
    this._dragged = false;
    this._y = e.clientY;
    this._initY = e.clientY;
    this._itemHeight = this.refs.item.offsetHeight;
    document.addEventListener('mousemove', this._move);
    document.addEventListener('mouseup', this._dragEnd);
  };

  _proto._move = function _move(e) {
    if (this.get('_dragging')) {
      var deltaY = e.clientY - this._y;
      this._dragged = !!deltaY;
      this._y = e.clientY;

      var _this$get3 = this.get(),
          _translate = _this$get3._translate;

      var _deltaY = this._y - this._initY;

      var offsetIndex = Math.floor(Math.abs(_deltaY) / this._itemHeight);

      if (offsetIndex) {
        if (_deltaY < 0) {
          offsetIndex = -offsetIndex;
        }

        this._setByRelativeIndex(-offsetIndex, -_deltaY);

        this._initY = this._y;
      }

      this.set('_translate', _translate + deltaY);
    }
  };

  _proto._setByRelativeIndex = function _setByRelativeIndex(index, deltaY, isSetTranslate) {
    var _this$get4 = this.get(),
        _list = _this$get4._list,
        value = _this$get4._value,
        _marginTop = _this$get4._marginTop;

    var i = _findIndexInstanceProperty(_list).call(_list, function (v) {
      return v.value === value;
    });

    var l = _list.length;
    var itemHeight = this._itemHeight;
    var newValue = _list[(l + i + index) % l].value;
    var props = {
      '_value': newValue,
      _marginTop: _marginTop + (deltaY || index * itemHeight)
    };

    if (isSetTranslate) {
      props._translate = this.get('_translate') - itemHeight * index;
    }

    this.set(props);
  };

  _proto._dragEnd = function _dragEnd(e) {
    if (this.get('_dragging')) {
      this.set('_dragging', false);
      this.set({
        _translate: -this.get('_marginTop') + this._deltaY
      });
      document.removeEventListener('mousemove', this._move);
      document.removeEventListener('mouseup', this._dragEnd);
    }
  };

  _proto._onWheel = function _onWheel(e) {
    e.preventDefault();
    this._itemHeight = this.refs.item.offsetHeight;

    if (e._rawEvent.deltaY > 0) {
      // down
      this._setByRelativeIndex(1, null, true);
    } else {
      this._setByRelativeIndex(-1, null, true);
    }
  };

  _proto._destroy = function _destroy() {
    document.removeEventListener('mousemove', this._move);
    document.removeEventListener('mouseup', this._dragEnd);
    clearTimeout(this.timer);
  };

  return ScrollSelect;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['append']), _defineProperty(_class2, "propTypes", {
  count: Number,
  data: [Array, Function],
  disabled: Boolean,
  disable: Function
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { ScrollSelect as default };
export { ScrollSelect };