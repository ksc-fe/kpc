import "core-js/modules/es.array.iterator";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
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
import template from './form.vdt';
import { methods, messages, classNames, addMethod } from './methods';
import '../../styles/kpc.css';
import './index.css';
var Form = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Form, _Intact);

  var _super = _createSuper(Form);

  function Form() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Form.prototype;

  _proto.defaults = function defaults() {
    return {
      items: [],
      rules: {},
      labelWidth: undefined,
      layout: 'horizontal',
      starOnRequired: false,
      size: 'default'
    };
  } // getRules() {
  // const rules = this.get('rules');
  // const items = this.get('items');
  // items.forEach(item => {
  // rules[item.get('model')] = item.get('rules');
  // });
  // return rules;
  // }
  ;

  _proto.validate = function validate() {
    var items = this.get('items');
    return _Promise.all(_mapInstanceProperty(items).call(items, function (item) {
      return item.validate();
    })).then(function (values) {
      return _everyInstanceProperty(values).call(values, function (value) {
        return value;
      });
    });
  };

  _proto.reset = function reset() {
    var items = this.get('items');

    _forEachInstanceProperty(items).call(items, function (item) {
      return item.reset();
    });
  };

  _proto.getItem = function getItem(model) {
    var items = this.get('items');
    /* istanbul ignore if */

    if (model === undefined) return items;
    return _findInstanceProperty(items).call(items, function (item) {
      return item.get('model') === model;
    });
  } // optional(item) {
  // const value = item.get('value');
  // return !Form.methods.required.call(this, value, item);
  // }
  ;

  _proto.getFirstInvalidFormItem = function getFirstInvalidFormItem() {
    var _context;

    return _findInstanceProperty(_context = this.get('items')).call(_context, function (item) {
      if (item.get('isValid') === false) {
        return item;
      }
    });
  };

  _proto._submit = function _submit(e) {
    e.preventDefault();
    this.submit(e);
  };

  _proto.submit = function submit(e) {
    var _this = this;

    this.validate().then(function (isValid) {
      if (isValid) {
        _this.trigger('submit', e, _this);
      }
    });
  };

  return Form;
}(Intact), _defineProperty(_class2, "methods", methods), _defineProperty(_class2, "messages", messages), _defineProperty(_class2, "classNames", classNames), _defineProperty(_class2, "addMethod", addMethod), _defineProperty(_class2, "template", template), _defineProperty(_class2, "propTypes", {
  items: Array,
  rules: Object,
  labelWidth: [String, Number],
  layout: ['horizontal', 'vertical', 'inline'],
  starOnRequired: Boolean,
  size: ['default', 'small', 'mini']
}), _defineProperty(_class2, "events", {
  submit: true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Form as default };