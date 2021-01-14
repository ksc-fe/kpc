import "core-js/modules/es.number.constructor";
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
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
var Switch = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Switch, _Intact);

  var _super = _createSuper(Switch);

  function Switch() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.defaults = function defaults() {
    return {
      name: undefined,
      on: undefined,
      off: undefined,
      value: false,
      trueValue: true,
      falseValue: false,
      width: undefined,
      height: undefined,
      size: 'default',
      disabled: false,
      _dragging: false
    };
  };

  _proto._dragStart = function _dragStart(e) {
    if (this.get('disabled') || e.which !== 1) return;
    this._x = e.clientX;
    this._height = this.refs.bar.clientHeight;
    this._width = this.refs.bar.clientWidth;
    this._maxWidth = this.element.clientWidth;
    document.addEventListener('mousemove', this._move);
    document.addEventListener('mouseup', this._dragEnd);
  };

  _proto._move = function _move(e) {
    this.set('_dragging', true);
    var left = e.clientX - this._x;
    var width = Math.min(Math.max(this._height, this._width + left), this._maxWidth);
    this.refs.bar.style.width = width + "px";
  };

  _proto._dragEnd = function _dragEnd(e) {
    this.element.blur();
    var bar = this.refs.bar; // treat mousedown -> mouseup as click

    if (this._x === e.clientX) {
      bar.style.width = '';

      this._toggle();
    } else {
      // cancel this operation if the distance less than half of width
      var percent = (bar.clientWidth - this._height / 2) / this._maxWidth;

      if (!this.isChecked()) {
        if (percent >= 0.5) {
          this.check();
        }
      } else if (percent < 0.5) {
        this.uncheck();
      }

      if (!this.isChecked() && this.get('width') && this.get('height')) {
        // if is set width and height
        bar.style.width = this.get('height') + 'px';
      } else {
        bar.style.width = '';
      }
    }

    this.set('_dragging', false);
    document.removeEventListener('mousemove', this._move);
    document.removeEventListener('mouseup', this._dragEnd);
  };

  _proto._onClick = function _onClick(e) {
    if (!e._switchIgnore) {
      this._toggle(e, false);
    }

    this.trigger('click', e);
  };

  _proto._toggle = function _toggle(e, isKeypress) {
    if (this.get('disabled')) return; // if is not keypress, we blur it to remove focus style

    if (!isKeypress) {
      this.element.blur();
    }

    if (this.isChecked()) {
      this.uncheck();
    } else {
      this.check();
    }
  };

  _proto._onKeypress = function _onKeypress(e) {
    this.trigger('keypress', e);

    if (e.keyCode === 13) {
      this._toggle(e, true);
    }
  };

  _proto.isChecked = function isChecked() {
    return this.get('value') === this.get('trueValue');
  };

  _proto.check = function check() {
    this.set('value', this.get('trueValue'));
  };

  _proto.uncheck = function uncheck() {
    this.set('value', this.get('falseValue'));
  };

  _proto._handleClick = function _handleClick(e) {
    // we can not stop propagation, otherwise the click can not be listen at outer
    e._switchIgnore = true; // e.stopPropagation();
  };

  _createClass(Switch, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Switch;
}(Intact), _defineProperty(_class2, "blocks", ['off', 'on']), _defineProperty(_class2, "propTypes", {
  name: String,
  on: String,
  off: String,
  width: [Number, String],
  height: [Number, String],
  size: ['large', 'default', 'small', 'mini'],
  disabled: Boolean,
  trueValue: undefined,
  falseValue: undefined
}), _defineProperty(_class2, "events", {
  click: true,
  keypress: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Switch as default };
export { Switch };