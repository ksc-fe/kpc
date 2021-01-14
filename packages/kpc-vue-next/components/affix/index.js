import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
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
import ResizeObserver from 'resize-observer-polyfill';
import '../../styles/kpc.css';
import './index.css';
var Affix = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Affix, _Intact);

  var _super = _createSuper(Affix);

  function Affix() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Affix.prototype;

  _proto.defaults = function defaults() {
    return {
      top: undefined,
      bottom: undefined,
      exclude: undefined,
      shouldFix: undefined,
      _style: undefined,
      _containerStyle: undefined
    };
  };

  _proto._mount = function _mount() {
    var _this = this,
        _context;

    this.on('$changed:_style', function (c, v, o) {
      if (v && !o) {
        _this.trigger('change', true);

        _this._observer();
      } else if (!v) {
        _this.trigger('change', false);

        _this._disconnect();
      }
    }); // for convenience of unit test

    _forEachInstanceProperty(_context = ['top', 'bottom']).call(_context, function (item) {
      _this.on("$change:" + item, _this._setStyle);
    }); // const keys = ['top', 'bottom'];
    // this.on('$receive', (c, _keys) => {
    // if (keys.find(key => _keys.indexOf(key) > -1)) {
    // this._setStyle();
    // }
    // });


    this._setStyle();

    window.addEventListener('scroll', this._setStyle); // when window resize the position may change

    window.addEventListener('resize', this._setStyle);
  }
  /**
   * @brief when the container resized, change the fixed element's width
   *
   * @return 
   */
  ;

  _proto._observer = function _observer() {
    var _this2 = this;

    var ro = this.ro = new ResizeObserver(function () {
      var _this2$get = _this2.get(),
          _style = _this2$get._style;

      _this2.set('_style', _Object$assign({}, _style, {
        width: _this2.element.offsetWidth + 'px'
      }));
    });
    ro.observe(this.element);
  };

  _proto._disconnect = function _disconnect() {
    if (this.ro) {
      this.ro.disconnect();
    }
  };

  _proto._setStyle = function _setStyle(e) {
    var _this3 = this;

    var _this$get = this.get(),
        offsetTop = _this$get.top,
        offsetBottom = _this$get.bottom,
        exclude = _this$get.exclude,
        shouldFix = _this$get.shouldFix;

    var _this$element$getBoun = this.element.getBoundingClientRect(),
        top = _this$element$getBoun.top,
        bottom = _this$element$getBoun.bottom,
        width = _this$element$getBoun.width,
        height = _this$element$getBoun.height;

    var resetStyle = function resetStyle() {
      _this3.set({
        '_style': undefined,
        '_containerStyle': undefined
      });
    };

    var setStyle = function setStyle(style) {
      if (!exclude || exclude && !exclude.call(_this3, {
        offsetTop: offsetTop,
        offsetBottom: offsetBottom,
        top: top,
        bottom: bottom,
        width: width,
        height: height
      })) {
        _this3.set({
          '_style': _Object$assign({
            position: 'fixed',
            width: width + "px"
          }, style),
          '_containerStyle': {
            // width: `${width}px`,
            height: height + "px"
          }
        });
      } else {
        resetStyle();
      }
    };

    if (offsetTop == null && offsetBottom == null) {
      offsetTop = 0;
    }

    if (offsetTop != null) {
      if (shouldFix && shouldFix.call(this, {
        offsetTop: offsetTop,
        offsetBottom: offsetBottom
      }) || !shouldFix && top <= offsetTop) {
        return setStyle({
          top: offsetTop + "px"
        });
      }
    } else {
      var viewportHeight = document.documentElement.clientHeight;

      if (shouldFix && shouldFix.call(this, {
        offsetTop: offsetTop,
        offsetBottom: offsetBottom,
        viewportHeight: viewportHeight
      }) || !shouldFix && viewportHeight - bottom <= offsetBottom) {
        return setStyle({
          bottom: offsetBottom + "px"
        });
      }
    }

    return resetStyle();
  };

  _proto._destroy = function _destroy() {
    window.removeEventListener('scroll', this._setStyle);
    window.removeEventListener('resize', this._setStyle);

    this._disconnect();
  };

  return Affix;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "events", {
  change: true
}), _defineProperty(_class2, "propTypes", {
  top: Number,
  bottom: Number,
  exclude: Function,
  shouldFix: Function
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Affix as default };
export { Affix };