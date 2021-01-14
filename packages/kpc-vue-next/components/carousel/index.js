import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
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
import CarouselItem from './item';
import '../../styles/kpc.css';
import './index.css';
import { nextFrame } from '../utils';
import ResizeObserver from 'resize-observer-polyfill';
var defaultTimeout = 5000;
var Carousel = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Carousel, _Intact);

  var _super = _createSuper(Carousel);

  function Carousel() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Carousel.prototype;

  _proto.defaults = function defaults() {
    return {
      value: '$0',
      autoplay: false,
      arrow: 'hover',
      effect: 'slide',
      clonedAmount: 1,
      _width: undefined,
      _translate: 0,
      _stopTransition: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this._items = [];
    this._firstCloned = null;
    this._lastCloned = null;
    this.on('$receive:autoplay', function (c, v) {
      if (v === true) {
        _this.set('autoplay', defaultTimeout, {
          silent: true
        });
      }
    });
  };

  _proto._mount = function _mount(lastVNode, nextVNode) {
    var _this2 = this;

    /* istanbul ignore if */
    if (lastVNode && lastVNode.tag && lastVNode.tag.displayName === 'Carousel') {
      // if use hot-reload, the tag is the same, but they are two different contructors
      var lastInstance = lastVNode.children;
      this._items = lastInstance._items;
      this._firstCloned = lastInstance._firstCloned;
      this._lastCloned = lastInstance._lastCloned;
    }

    this.on('$change:autoplay', function (c, v) {
      clearTimeout(_this2.timer);

      _this2._autoplay();
    });
    this.on('$change:effect', function (c, v) {
      if (_this2._isSlide()) {
        _this2._initStatus();
      } else {
        _this2._disconnect();
      }
    });
    this.on('$change:clonedAmount', function () {
      if (_this2._isSlide()) {
        _this2._initStatus();
      }
    });

    if (this._isSlide()) {
      this._initStatus();
    }
  };

  _proto._initStatus = function _initStatus() {
    var _this3 = this;

    this._disconnect();

    var init = function init() {
      _this3.containerWidth = _this3.element.offsetWidth;

      _this3._stopTransition();

      _this3._setIndex(_this3._getIndex(), false);

      _this3._startTransition();
    };

    var ro = this.ro = new ResizeObserver(init);
    ro.observe(this.element);
    init();
  };

  _proto._disconnect = function _disconnect() {
    if (this.ro) {
      this.ro.disconnect();
      this.ro = null;
    }
  };

  _proto._stopTransition = function _stopTransition() {
    this.set({
      _stopTransition: true
    });
  };

  _proto._startTransition = function _startTransition() {
    var _this4 = this;

    return new _Promise(function (resolve) {
      nextFrame(function () {
        _this4.set({
          _stopTransition: false
        });

        resolve();
      });
    });
  };

  _proto._autoplay = function _autoplay() {
    var _this$get = this.get(),
        autoplay = _this$get.autoplay;

    if (autoplay) {
      clearTimeout(this.timer);
      this.timer = _setTimeout(this._next, autoplay);
    }
  };

  _proto._setIndex = /*#__PURE__*/function () {
    var _setIndex2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(index, keepDirection) {
      var values, value, oldValue, length, item, _translate;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              values = this._values;
              value = values[index];

              if (!this._isSlide()) {
                _context.next = 23;
                break;
              }

              if (!keepDirection) {
                _context.next = 18;
                break;
              }

              oldValue = this.get('value');
              length = values.length;

              if (!(oldValue === values[length - 1] && index === 0)) {
                _context.next = 13;
                break;
              }

              // the current value is the last one and the next value is the first one
              // we got back to the first cloned node
              this._stopTransition();

              this.set('_translate', this._getTranslate(this._lastCloned));
              _context.next = 11;
              return this._startTransition();

            case 11:
              _context.next = 18;
              break;

            case 13:
              if (!(oldValue === values[0] && index === length - 1)) {
                _context.next = 18;
                break;
              }

              // contrary situation
              this._stopTransition();

              this.set('_translate', this._getTranslate(this._firstCloned));
              _context.next = 18;
              return this._startTransition();

            case 18:
              item = this._items[index];
              _translate = this._getTranslate(item);
              this.set({
                value: value,
                _translate: _translate
              });
              _context.next = 24;
              break;

            case 23:
              this.set({
                value: value
              });

            case 24:
              this._autoplay();

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _setIndex(_x, _x2) {
      return _setIndex2.apply(this, arguments);
    }

    return _setIndex;
  }();

  _proto._getTranslate = function _getTranslate(item) {
    var el = item.element;
    var offsetLeft = el.offsetLeft;
    var width = el.offsetWidth; // let item position center

    this.containerWidth = this.element.offsetWidth;
    return -(offsetLeft - (this.containerWidth - width) / 2);
  };

  _proto._next = function _next() {
    var values = this._values;

    var index = this._getIndex();

    var newIndex = (index + 1) % values.length;

    this._setIndex(newIndex, true);
  };

  _proto._prev = function _prev() {
    var values = this._values;

    var index = this._getIndex();

    var newIndex = (index + values.length - 1) % values.length;

    this._setIndex(newIndex, true);
  };

  _proto._getIndex = function _getIndex() {
    var _context2;

    var value = this.get('value');
    return _indexOfInstanceProperty(_context2 = this._values).call(_context2, value);
  };

  _proto._isActive = function _isActive(v) {
    return this.get('value') === v;
  };

  _proto._isSlide = function _isSlide() {
    return this.get('effect') === 'slide';
  };

  _proto._destroy = function _destroy() {
    if (this.get('autoplay')) {
      clearTimeout(this.timer);
    }

    this._disconnect();
  };

  return Carousel;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  value: String,
  autoplay: [Number, Boolean],
  arrow: ['hover', 'always', 'never'],
  effect: ['slide', 'fade'],
  clonedAmount: Number
}), _defineProperty(_class2, "displayName", 'Carousel'), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Carousel as default };
export { Carousel, CarouselItem };