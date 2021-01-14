import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _Number$isNaN from "@babel/runtime-corejs3/core-js/number/is-nan";
import _parseInt from "@babel/runtime-corejs3/core-js/parse-int";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './panel.vdt';
import tinycolor from 'tinycolor2';
import '../../styles/kpc.css';
import './index.css';
var ColorPanel = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(ColorPanel, _Intact);

  var _super = _createSuper(ColorPanel);

  function ColorPanel() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = ColorPanel.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      presets: [],
      _mode: 'rgb'
    };
  };

  _proto._init = function _init() {
    this._initValues();

    this.on('$change:value', this._initValues);
  };

  _proto._initValues = function _initValues() {
    var color = tinycolor(this.get('value'));
    var oldHue = this._hsl ? this._hsl.h : null;
    this._color = color;
    this._format = color.getFormat();
    this._rgb = color.toRgb();
    this._hsv = color.toHsv();
    this._hsl = color.toHsl();
    this._hex = color.toHex(); // if the r === g === b, keep the hue as the old value

    var _this$_rgb = this._rgb,
        r = _this$_rgb.r,
        g = _this$_rgb.g,
        b = _this$_rgb.b;

    if (r === g && g === b && oldHue !== null) {
      this._hsv.h = this._hsl.h = oldHue;
    }
  };

  _proto._handleChange = function _handleChange(e) {
    var _this$refs$saturation = this.refs.saturation.getBoundingClientRect(),
        width = _this$refs$saturation.width,
        height = _this$refs$saturation.height,
        _left = _this$refs$saturation.left,
        _top = _this$refs$saturation.top;

    var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
    var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
    var left = x - _left - window.pageXOffset;
    var top = y - _top - window.pageYOffset;
    left = Math.max(Math.min(width, left), 0);
    top = Math.max(Math.min(height, top), 0);
    var saturation = left / width;
    var bright = -top / height + 1;
    var hsv = this._hsv;
    hsv.s = saturation;
    hsv.v = bright;
    var value = tinycolor(hsv).toString(this._format);
    this.set({
      value: value
    });
  };

  _proto._onMouseDown = function _onMouseDown(e) {
    this._handleChange(e);

    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseup', this._onMouseUp);
  };

  _proto._onMouseMove = function _onMouseMove(e) {
    this._handleChange(e);
  };

  _proto._onMouseUp = function _onMouseUp() {
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
  };

  _proto._onChangeHue = function _onChangeHue(c, v) {
    var hsl = this._hsl;
    hsl.h = v; // we alos need update the hue of hsv, #395

    this._hsv.h = v;
    var value = tinycolor(hsl).toString(this._format); // maybe r === g === b, the value is the same, even if we change the hue

    if (this.get('value') === value) {
      this.update();
    } else {
      this.set('value', value);
    }
  };

  _proto._onChangeAlpha = function _onChangeAlpha(c, v) {
    var rgb = this._rgb;
    rgb.a = v;
    this.set('value', tinycolor(rgb).toRgbString());
  };

  _proto._onInputHex = function _onInputHex(e) {
    var _context;

    var hex = _trimInstanceProperty(_context = e.target.value).call(_context);

    var color = tinycolor(hex);

    if (color.isValid()) {
      this.set('value', color.toString(this._format));
    }
  };

  _proto._changeRgb = function _changeRgb(type, e) {
    this._setInputValue(type, e, 255);
  };

  _proto._changeAlpha = function _changeAlpha(e) {
    this._setInputValue('a', e, 100, function (v) {
      return v / 100;
    });
  };

  _proto._changeHsv = function _changeHsv(type, e) {
    this._setInputValue(type, e, type === 'h' ? 359 : 100, type === 'h' ? null : function (v) {
      return v / 100;
    });
  };

  _proto._changeMode = function _changeMode() {
    var mode = this.get('_mode');
    mode = mode === 'rgb' ? 'hsv' : 'rgb';
    this.set({
      _mode: mode
    });
  };

  _proto._setInputValue = function _setInputValue(type, e, maxValue, filter) {
    var _context2;

    var value = _trimInstanceProperty(_context2 = e.target.value).call(_context2);

    value = _parseInt(value, 10);
    if (_Number$isNaN(value)) return;
    value = Math.min(Math.max(0, value), maxValue);
    value = filter ? filter(value) : value;

    this._setValue(type, value);
  };

  _proto._setValue = function _setValue(type, value) {
    var mode = this.get('_mode');
    var color = mode === 'rgb' ? this._rgb : this._hsv;
    if (color[type] === value) return;
    color[type] = value;
    this.set('value', tinycolor(color).toString(mode));
  }
  /**
   * disable animation of slider when we are dragging to change the value
   */
  ;

  _proto._onDragStart = function _onDragStart() {
    this.refs.hueSlider.set('animate', false);
    this.refs.alphaSlider.set('animate', false);
  };

  _proto._onDragEnd = function _onDragEnd() {
    this.refs.hueSlider.set('animate', true);
    this.refs.alphaSlider.set('animate', true);
  };

  _proto._forceUpdate = function _forceUpdate() {
    this.update();
  };

  _proto._destroy = function _destroy() {
    this._onMouseUp();
  };

  return ColorPanel;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  value: {
    type: String,
    required: true
  },
  presets: Array
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { ColorPanel as default };