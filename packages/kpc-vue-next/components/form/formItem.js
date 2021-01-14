import "core-js/modules/es.array.iterator";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
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
import template from './formItem.vdt';
import Form from './form';
import '../../styles/kpc.css';
import './index.css';
var warn = Intact.utils.warn;
var FormItem = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(FormItem, _Intact);

  var _super = _createSuper(FormItem);

  function FormItem() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = FormItem.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      model: undefined,
      rules: {},
      isValid: undefined,
      isDirty: false,
      message: '',
      messages: {},
      classNames: {},
      errorClassName: '',
      label: undefined,
      htmlFor: undefined,
      hideLabel: false,
      force: false,
      fluid: false,
      _ellipsis: false
    };
  };

  _proto._init = function _init() {
    this.initValue = this.get('value');
    this.on('$change:value', this.validateIfDirty);
    this.on('$change:rules', this.validateIfDirty);
    this.on('$changed:message', this._checkEllipsis);
  };

  _proto._beforeCreate = function _beforeCreate() {
    var form = this.parentVNode;

    while (form && form.tag !== Form) {
      form = form.parentVNode;
    }
    /* istanbul ignore if */


    if (!form) {
      // return warn('FormItem must be used as the descendant of Form');
      return;
    }

    this.form = form = form.children;

    if (this.get('model')) {
      var items = form.get('items');
      items.push(this);
    }
  };

  _proto.getRules = function getRules() {
    var formRules = this.form.get("rules." + this.get('model'));
    var selfRules = this.get('rules');
    return _Object$assign({}, formRules, selfRules);
  };

  _proto.getMessage = function getMessage(name) {
    var defaultMessages = Form.messages;
    var customMessages = this.get('messages');
    var message = customMessages[name] || defaultMessages[name];

    if (typeof message === 'function') {
      var rules = this.getRules();
      return message.call(this.form, this.get('value'), this, rules[name]);
    }

    return message;
  };

  _proto.getClassName = function getClassName(name) {
    var defaultClassNames = Form.classNames;
    var customClassNames = this.get('classNames');
    var className = customClassNames[name] || defaultClassNames[name];

    if (typeof className === 'function') {
      var rules = this.getRules();
      return className.call(this.form, this.get('value'), this, rules[name]);
    }

    return className;
  };

  _proto.validate = function validate() {
    var _this = this;

    if (!this.get('model') || !this.form) return;

    this._cancel();

    var rules = this.getRules();
    var promises = [];
    var keys = []; // check required firstly

    var required = Form.methods.required.call(this.form, this.get('value'), this);

    if (rules.required) {
      promises.push(required);
      keys.push('required');
    } // if the field is not empty, then check other rules


    if (required) {
      for (var key in rules) {
        var rule = rules[key];
        if (key === 'required' || rule === false) continue;
        var fn = void 0;

        if (typeof rule === 'function') {
          fn = rule;
        } else {
          fn = Form.methods[key];
          /* istanbul ignore if */

          if (!fn) {
            console.warn("Can not find validate method: " + key);
            continue;
          }
        }

        promises.push(fn.call(this.form, this.get('value'), this, rules[key]));
        keys.push(key);
      }
    }

    var p = this.promise = _Promise.all(promises).then(function (values) {
      for (var index = 0; index < values.length; index++) {
        if (values[index] !== true) {
          return [false, values[index] || _this.getMessage(keys[index]), _this.getClassName(keys[index])];
        }
      }

      return [true, _this.get('message'), null];
    }, function (err) {
      var message;
      var className;

      if (typeof err === 'string') {
        message = err;
      } else if (err) {
        message = err.message || _this.getMessage(err.name);
        className = err.className || _this.getClassName(err.name);
      }

      return [false, message, className];
    }).then(function (_ref) {
      var isValid = _ref[0],
          message = _ref[1],
          className = _ref[2];
      // if cancelled, should return the last result
      if (p.cancelled) return _this.get('isValid');

      _this.set({
        isDirty: true,
        isValid: isValid,
        message: message,
        errorClassName: className
      });

      return isValid;
    });

    return p;
  };

  _proto.validateIfDirty = function validateIfDirty() {
    // if force is true, it will been validated when update
    // so we do nothing for this case
    if (this.get('force')) return;

    if (this.get('isDirty')) {
      this.validate();
    }
  };

  _proto._beforeUpdate = function _beforeUpdate() {
    if (this.get('force') && this.get('isDirty')) {
      this.validate();
    }
  };

  _proto.reset = function reset() {
    var _context;

    this._cancel();

    this.set({
      isDirty: false,
      isValid: undefined,
      message: '',
      value: _Array$isArray(this.get('value')) ? _concatInstanceProperty(_context = []).call(_context, this.initValue) : this.initValue
    });
  };

  _proto._dirty = function _dirty() {
    var _this2 = this;

    if (!this.get('model')) return;
    /* istanbul ignore if */

    if (this.get('isDirty')) return; // for select, the focusout event triggers before select
    // so we put off validating it

    _setTimeout(function () {
      if (_this2.destroyed) return;

      _this2.validate();
    }, 100);
  };

  _proto._onChange = function _onChange(e) {
    this.trigger('change', e);

    this._dirty();
  };

  _proto._onFocusout = function _onFocusout(e) {
    this.trigger('focusout', e);

    this._dirty();
  };

  _proto._cancel = function _cancel() {
    // cancel the last promise
    if (this.promise) {
      this.promise.cancelled = true;
    }
  };

  _proto._checkEllipsis = function _checkEllipsis() {
    var error = this.refs.error;
    if (!error) return;
    this.set('_ellipsis', error.offsetWidth < error.scrollWidth);
  };

  _proto._destroy = function _destroy() {
    if (!this.get('model') || !this.form) return;
    var items = this.form.get('items');

    _spliceInstanceProperty(items).call(items, _indexOfInstanceProperty(items).call(items, this), 1); // this.reset();

  };

  _createClass(FormItem, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return FormItem;
}(Intact), _defineProperty(_class2, "blocks", ['label', 'content', 'append']), _defineProperty(_class2, "propTypes", {
  model: String,
  rules: Object,
  // isValid: Boolean,
  isDirty: Boolean,
  // message: String,
  messages: Object,
  classNames: Object,
  label: String,
  htmlFor: String,
  hideLabel: Boolean,
  force: Boolean,
  fluid: Boolean
}), _defineProperty(_class2, "events", {
  change: true,
  focusout: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { FormItem as default };