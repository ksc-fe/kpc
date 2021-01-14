import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.match";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
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
var Split = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Split, _Intact);

  var _super = _createSuper(Split);

  function Split() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Split.prototype;

  _proto.defaults = function defaults() {
    return {
      mode: 'horizontal',
      firstSize: 'auto',
      lastSize: 'auto',
      min: 0,
      max: '100%-6',
      _resizing: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    var fixSize = function fixSize() {
      var _this$get = _this.get(),
          firstSize = _this$get.firstSize,
          lastSize = _this$get.lastSize;

      if (firstSize === 'auto' && lastSize === 'auto') {
        _this.set('firstSize', '50%');
      } else if (firstSize !== 'auto' && lastSize !== 'auto') {
        _this.set('lastSize', 'auto');
      }
    };

    this.on('$receive', function (c, keys) {
      var _context;

      if (_findInstanceProperty(_context = ['firstSize', 'lastSize']).call(_context, function (key) {
        return ~_indexOfInstanceProperty(keys).call(keys, key);
      })) {
        fixSize();
      }
    }); // maybe there aren't props

    fixSize();
  };

  _proto._generateMinMaxValue = function _generateMinMaxValue() {
    var _this$get2 = this.get(),
        firstSize = _this$get2.firstSize,
        lastSize = _this$get2.lastSize,
        mode = _this$get2.mode,
        min = _this$get2.min,
        max = _this$get2.max;

    var minObject = parseValue(min);
    var maxObject = parseValue(max);

    if (minObject.percent || maxObject.percent) {
      var generateValue = function generateValue(_ref) {
        var percent = _ref.percent,
            op = _ref.op,
            px = _ref.px;

        if (percent) {
          var value = totalSize * percent / 100;

          if (px) {
            px = +px;
            value = op === '-' ? value - px : value + px;
          }

          return value;
        }

        return +px;
      };

      var totalSize = mode === 'horizontal' ? this.element.offsetWidth : this.element.offsetHeight;
      min = generateValue(minObject);
      max = generateValue(maxObject);
    }

    this.min = min;
    this.max = max;
  };

  _proto._restrainValue = function _restrainValue(v) {
    return Math.min(Math.max(v, this.min), this.max);
  };

  _proto._onMoveStart = function _onMoveStart(e) {
    // left mouse key
    if (e.which !== 1) return;
    this.set('_resizing', true);

    this._generateMinMaxValue();

    var _this$get3 = this.get(),
        mode = _this$get3.mode,
        firstSize = _this$get3.firstSize,
        lastSize = _this$get3.lastSize;

    if (lastSize === 'auto') {
      this._changeSizeName = 'firstSize';

      if (mode === 'horizontal') {
        var width = this._restrainValue(this.refs.first.offsetWidth);

        this._x = width - e.clientX;
      } else {
        var height = this._restrainValue(this.refs.first.offsetHeight);

        this._y = height - e.clientY;
      }
    } else {
      this._changeSizeName = 'lastSize';

      if (mode === 'horizontal') {
        var _width = this._restrainValue(this.refs.last.offsetWidth);

        this._x = _width + e.clientX;
      } else {
        var _height = this._restrainValue(this.refs.last.offsetHeight);

        this._y = _height + e.clientY;
      }
    }

    document.addEventListener('mousemove', this._onMove);
    document.addEventListener('mouseup', this._onMoveEnd);
    this.trigger('moveStart', e);
  };

  _proto._onMove = function _onMove(e) {
    e.preventDefault();

    var _this$get4 = this.get(),
        mode = _this$get4.mode;

    var min = this.min,
        max = this.max;
    var size;

    if (this._changeSizeName === 'firstSize') {
      if (mode === 'horizontal') {
        size = this._x + e.clientX;
      } else {
        size = this._y + e.clientY;
      }
    } else {
      if (mode === 'horizontal') {
        size = this._x - e.clientX;
      } else {
        size = this._y - e.clientY;
      }
    }

    size = this._restrainValue(size);
    this.set(this._changeSizeName, size + 'px');
    this.trigger('moving', e);
  };

  _proto._onMoveEnd = function _onMoveEnd(e) {
    if (this.get('_resizing')) {
      document.removeEventListener('mousemove', this._onMove);
      document.removeEventListener('mouseup', this._onMoveEnd);
      this.set('_resizing', false);
      this.trigger('moveEnd', e);
    }
  };

  _proto._destroy = function _destroy() {
    this._onMoveEnd();
  };

  return Split;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['first', 'last', 'drag']), _defineProperty(_class2, "propTypes", {
  mode: ['horizontal', 'vertical'],
  firstSize: String,
  lastSize: String,
  min: [Number, String],
  max: [Number, String]
}), _defineProperty(_class2, "events", {
  moveStart: true,
  moving: true,
  moveEnd: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Split as default };
var regexp = /(?:(\d+(?:\.\d+)?)%)?([\+\-])?(\d+(?:\.\d+)?)?/;
var cache = {};

function parseValue(v) {
  if (typeof v === 'number') return {
    px: v
  };

  if (!cache[v]) {
    var matches = v.match(regexp) || [];
    cache[v] = {
      percent: matches[1],
      op: matches[2],
      px: matches[3]
    };
  }

  return cache[v];
}

export { Split };