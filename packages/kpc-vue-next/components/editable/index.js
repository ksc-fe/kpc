import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.constructor";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
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
import { selectInput } from '../utils';
import { _$ } from '../utils';
var Editable = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Editable, _Intact);

  var _super = _createSuper(Editable);

  function Editable() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Editable.prototype;

  _proto.defaults = function defaults() {
    return {
      editing: false,
      value: undefined,
      required: true,
      validate: undefined,
      disabled: false,
      tip: _$('编辑'),
      trim: true,
      invalid: false
    };
  };

  _proto._init = function _init() {
    this.initValue = this.get('value');
  };

  _proto._edit = function _edit() {
    this.set('editing', true);
    var input = this.refs.input;
    selectInput(input);
  };

  _proto._onBlur = function _onBlur(e) {
    this._setValue(e.target.value);
  };

  _proto._onKeydown = function _onKeydown(e) {
    switch (e.keyCode) {
      case 27:
        // esc 
        this.set('editing', false);
        break;

      case 13:
        // enter
        this._onBlur(e);

        break;
    }
  };

  _proto._setValue = function _setValue(value) {
    var _this$get = this.get(),
        validate = _this$get.validate,
        required = _this$get.required,
        trim = _trimInstanceProperty(_this$get),
        oldValue = _this$get.value;

    if (trim) value = _trimInstanceProperty(value).call(value);
    var valid = true;

    if (required && !value) {
      valid = false;
    } else if (validate && value) {
      if (typeof validate === 'function') {
        valid = validate.call(this, value);
      } else if (validate instanceof RegExp) {
        valid = validate.test(value);
      } else if (typeof validate === 'string') {
        valid = new RegExp(validate).test(value);
      }
    }

    if (!valid) {
      // do not change the value if invalid, #51
      // this.set('value', value, {silent: true});
      this.set('invalid', true);
      return this.trigger('error', this, value);
    }

    this.set({
      invalid: false,
      editing: false,
      value: value
    });

    if (oldValue !== value) {
      this.trigger('change', this, value, oldValue);
    }
  };

  _proto.reset = function reset() {
    this.set({
      'value': this.initValue,
      'editing': false,
      'invalid': false
    });
  };

  _createClass(Editable, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return Editable;
}(Intact), _defineProperty(_class2, "propTypes", {
  editing: Boolean,
  required: Boolean,
  validate: [Function, String, RegExp],
  disabled: Boolean,
  tip: [String, Number],
  trim: Boolean,
  invalid: Boolean
}), _defineProperty(_class2, "events", {
  change: true,
  error: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { Editable as default };
export { Editable };