import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
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
import { selectInput } from '../utils';
import Search from './search';
var Input = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Input, _Intact);

  var _super = _createSuper(Input);

  function Input() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Input.prototype;

  _proto.defaults = function defaults() {
    return {
      type: 'text',
      // text | textarea
      name: undefined,
      value: undefined,
      defaultValue: undefined,
      placeholder: undefined,
      readonly: false,
      clearable: false,
      disabled: false,
      size: 'default',
      rows: 2,
      spellcheck: false,
      autoWidth: false,
      fluid: false,
      width: undefined,
      tabindex: undefined,
      autocomplete: undefined,
      nativeProps: undefined,
      stackClearIcon: false,
      frozenOnInput: false,
      _width: 1,
      _inputing: false,
      _originalValue: ''
    };
  };

  _proto._init = function _init() {
    this.on('$changed:value', this._adjustWidth);
    this.on('$changed:placeholder', this._adjustWidth);
  };

  _proto._mount = function _mount() {
    this.input = this.refs.input;

    this._adjustWidth();
  };

  _proto._adjustWidth = function _adjustWidth() {
    if (this.get('autoWidth')) {
      var width = this.refs.fake.offsetWidth || 1;
      this.set('_width', width);
    }
  };

  _proto.clear = function clear(e) {
    this.set('value', '');
    this.focus();
    this.trigger('clear', e);
  };

  _proto.select = function select() {
    selectInput(this.refs.input);
  };

  _proto.focus = function focus() {
    this.refs.input.focus();
  };

  _proto.blur = function blur() {
    this.refs.input.blur();
  };

  _proto._startInput = function _startInput(e) {
    this.set({
      _inputing: true,
      _originalValue: e.target.value
    });
    this.trigger('focus', e);
  };

  _proto._endInput = function _endInput(e) {
    // ignore dispatch event, #523
    if (e._dispatch) return;
    this.set({
      _inputing: false
    });
    this.trigger('blur', e);
  };

  _proto._onInput = function _onInput(e) {
    var value = e.target.value;
    this.set({
      value: value,
      _originalValue: value
    });
    this.trigger('input', e);
  };

  _proto._proxyEvent = function _proxyEvent(name, e) {
    this.trigger(name, e);
  };

  _proto._onChange = function _onChange(e) {
    if (this.get('frozenOnInput')) this.update();
    this.trigger('change', e);
  };

  return Input;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['prepend', 'append', 'prefix', 'suffix']), _defineProperty(_class2, "propTypes", {
  type: String,
  name: String,
  value: [String, Number],
  defaultValue: [String, Number],
  placeholder: String,
  readonly: Boolean,
  clearable: Boolean,
  disabled: Boolean,
  size: ['large', 'default', 'small', 'mini'],
  rows: [Number, String],
  spellcheck: Boolean,
  autoWidth: Boolean,
  fluid: Boolean,
  width: [Number, String],
  tabindex: [Number, String],
  autocomplete: String,
  nativeProps: Object,
  stackClearIcon: Boolean,
  frozenOnInput: Boolean
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Input as default };
export { Input, Search };