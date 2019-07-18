require("source-map-support").install();
exports.ids = [4];
exports.modules = {

/***/ "./components/button/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _group = _interopRequireDefault(__webpack_require__("./components/button/group.vdt"));

__webpack_require__("./components/button/index.styl");

var _dec, _class, _class2, _temp;

var ButtonGroup = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(ButtonGroup, _Intact);

  function ButtonGroup() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.defaults = function defaults() {
    return {
      vertical: false,
      value: undefined,
      radio: false,
      // @deprecated: use checkType instead of
      checkType: 'none' // radio | checkbox | none

    };
  };

  _proto._init = function _init() {
    /* istanbul ignore if */
    if (this.get('radio')) {
      this.set('checkType', 'radio', {
        silent: true
      });
    }
  };

  (0, _createClass2.default)(ButtonGroup, [{
    key: "template",
    get: function get() {
      return _group.default;
    }
  }]);
  return ButtonGroup;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  vertical: Boolean,
  radio: Boolean,
  checkType: ['radio', 'checkbox', 'none']
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.default = ButtonGroup;

/***/ }),

/***/ "./components/button/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _ = _interopRequireDefault(__webpack_require__("./components/button/index.js"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      vertical = _self$get.vertical,
      style = _self$get.style,
      children = _self$get.children,
      value = _self$get.value,
      fluid = _self$get.fluid,
      checkType = _self$get.checkType;

  var classNameObj = (_classNameObj = {
    'k-btns': true,
    'k-vertical': vertical
  }, _classNameObj[className] = className, _classNameObj['k-fluid'] = fluid, _classNameObj);
  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), function () {
    try {
      return checkType !== 'none' ? __u.map(children ? (0, _isArray.default)(children) ? children : [children] : children, function (vNode) {
        if (vNode.tag === _.default) {
          vNode.props = (0, _assign.default)({}, vNode.props, {
            _value: value,
            _checkType: checkType
          });
        }

        return vNode;
      }) : children;
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Button = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/button/index.vdt"));

var _group = _interopRequireDefault(__webpack_require__("./components/button/group.js"));

exports.ButtonGroup = _group.default;

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/button/index.styl");

var _dec, _class, _class2, _temp;

var Button = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Button, _Intact);

  function Button() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.defaults = function defaults() {
    return {
      type: 'default',
      // primary | warning | danger | success | none | secondary | link
      size: 'default',
      // small | mini
      icon: false,
      circle: false,
      loading: false,
      disabled: false,
      fluid: false,
      htmlType: 'button',
      tagName: 'button',
      tagProps: undefined,
      value: undefined,
      name: undefined,
      tabindex: '0',
      ghost: false,
      _value: undefined,
      _checkType: 'none'
    };
  };

  _proto._mount = function _mount() {
    var parentVNode = this.parentVNode;

    while (parentVNode && parentVNode.tag !== _group.default) {
      parentVNode = parentVNode.parentVNode;
    }

    if (parentVNode) {
      this.group = parentVNode.children;
      this.set({
        _checkType: this.group.get('checkType'),
        _value: this.group.get('value')
      });
    }
  };

  _proto._beforeUpdate = function _beforeUpdate() {
    if (this.group) {
      this.set({
        _checkType: this.group.get('checkType'),
        _value: this.group.get('value')
      }, {
        silent: true
      });
    }
  };

  _proto.showLoading = function showLoading() {
    this.set('loading', true);
  };

  _proto.hideLoading = function hideLoading() {
    this.set('loading', false);
  };

  _proto.disable = function disable() {
    this.set('disabled', true);
  };

  _proto.enable = function enable() {
    this.set('disabled', false);
  };

  _proto._onClick = function _onClick(e) {
    if (this.get('disabled') || this.get('loading')) {
      return e.preventDefault();
    }

    if (this.group) {
      var _this$get = this.get(),
          _checkType = _this$get._checkType,
          value = _this$get.value,
          _value = _this$get._value;

      if (value !== undefined) {
        if (_checkType === 'radio') {
          this.group.set('value', value);
        } else if (_checkType === 'checkbox') {
          if (!(0, _isArray.default)(_value)) {
            _value = [];
          }

          _value = _value.slice(0);

          var index = _value.indexOf(value);

          if (!~index) {
            _value.push(value);
          } else {
            _value.splice(index, 1);
          }

          this.group.set('value', _value);
        }
      }
    }

    e.component = this;
    this.trigger('click', e);
  };

  _proto._onMouseUp = function _onMouseUp(e) {
    // when click, blur it to remove the focus style
    this.element.blur();
    this.trigger('mouseup', e);
  };

  (0, _createClass2.default)(Button, [{
    key: "template",
    get: function get() {
      return _index.default;
    }
  }]);
  return Button;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  type: String,
  size: String,
  icon: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
  fluid: Boolean,
  htmlType: String,
  tagName: [String, Function],
  tagProps: Object,
  name: String,
  tabindex: [String, Number],
  ghost: Boolean
}), (0, _defineProperty2.default)(_class2, "events", {
  click: true,
  mouseup: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.Button = exports.default = Button;

/***/ }),

/***/ "./components/button/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431258267
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/button/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/web.dom.iterable");

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

__webpack_require__("core-js/modules/es6.function.name");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose"));

var _utils = __webpack_require__("./components/utils.js");

var _icon = _interopRequireDefault(__webpack_require__("./components/icon/index.js"));

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      type = _self$get.type,
      className = _self$get.className,
      size = _self$get.size,
      icon = _self$get.icon,
      circle = _self$get.circle,
      ref = _self$get.ref,
      key = _self$get.key,
      tabindex = _self$get.tabindex,
      tagName = _self$get.tagName,
      htmlType = _self$get.htmlType,
      fluid = _self$get.fluid,
      children = _self$get.children,
      loading = _self$get.loading,
      disabled = _self$get.disabled,
      value = _self$get.value,
      _value = _self$get._value,
      name = _self$get.name,
      tagProps = _self$get.tagProps,
      _checkType = _self$get._checkType,
      ghost = _self$get.ghost,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_self$get, ["type", "className", "size", "icon", "circle", "ref", "key", "tabindex", "tagName", "htmlType", "fluid", "children", "loading", "disabled", "value", "_value", "name", "tagProps", "_checkType", "ghost"]);

  var checked = value !== undefined ? _checkType === 'radio' ? value === _value : _checkType === 'checkbox' ? (0, _isArray.default)(_value) && !!~_value.indexOf(value) : false : false;
  var classNameObj = (_classNameObj = {
    'k-btn': true
  }, _classNameObj["k-" + type] = type, _classNameObj['k-btn-icon'] = icon, _classNameObj[className] = className, _classNameObj['k-circle'] = circle, _classNameObj['k-loading'] = loading, _classNameObj['k-fluid'] = fluid, _classNameObj['k-active'] = checked, _classNameObj['k-disabled'] = disabled || loading, _classNameObj['k-ghost'] = ghost, _classNameObj); // type and size may both be default

  if (size !== 'default') classNameObj["k-" + size] = true;

  var Button = function Button(props) {
    if (props.href && tagName === 'button') {
      tagName = 'a';
    }

    if (tagName === 'button') {
      // set type of html button
      props.type = htmlType;
    } // disable button when loading

    /* if (loading) props.disabled = true; */


    return h(tagName, props, props.children);
  }; // hack for loading transition of width


  if (!icon && (0, _isArray.default)(children)) {
    children.forEach(function (child, index) {
      if (child) {
        if (child.type === 1 || (0, _utils.isStringOrNumberNotEmpty)(child)) {
          // is a text node
          // wrap text node with span
          children[index] = h('span', null, function () {
            try {
              return child;
            } catch (e) {
              _e(e);
            }
          }.call($this));
        } // whether the icon is on the left side or right


        if (index === 0) {
          if (child.tag === _icon.default || child.className && child.className.indexOf('icon') > -1) {
            classNameObj['k-icon-left'] = true;
          }
        } else if (index === children.length - 1) {
          if (child.tag === _icon.default || child.className && child.className.indexOf('icon') > -1) {
            classNameObj['k-icon-right'] = true;
          }
        }
      }
    });
  } else if ((0, _utils.isStringOrNumberNotEmpty)(children)) {
    // wrap text node with span
    children = h('span', null, function () {
      try {
        return children;
      } catch (e) {
        _e(e);
      }
    }.call($this));
  }
  /* const loadingSizeMap = { */

  /* 'large': 'default', */

  /* 'default': 'small', */

  /* 'small': 'mini', */

  /* 'mini': 'mini' */

  /* }; */


  var loadingIcon = h(_icon.default, {
    'className': 'ion-load-c icon-loading',
    'size': function () {
      try {
        return size
        /*loadingSizeMap[size]*/
        ;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'k-loading',
    '_context': $this
  });
  return h(Button, (0, _assign.default)({
    'className': _className(function () {
      try {
        return classNameObj;
      } catch (e) {
        _e(e);
      }
    }.call($this))
  }, function () {
    try {
      return rest;
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return tagProps;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'tabindex': function () {
      try {
        return disabled || loading ? "-1" : tabindex;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [function () {
      try {
        return loading ? classNameObj['k-icon-right'] ? [children, loadingIcon] : [loadingIcon, children] : children;
      } catch (e) {
        _e(e);
      }
    }.call($this), function () {
      try {
        return _checkType !== 'none';
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('input', {
      'type': function () {
        try {
          return _checkType;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'name': function () {
        try {
          return name;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'checked': function () {
        try {
          return checked;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'tabindex': '-1'
    }) : undefined],
    '_context': $this,
    'ev-click': function () {
      try {
        return self._onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseup': function () {
      try {
        return self._onMouseUp;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }));
}

/***/ }),

/***/ "./components/checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Checkbox = exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/checkbox/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/checkbox/index.styl");

var isArray = _intact.default.Vdt.utils.isArray;

var Checkbox =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Checkbox, _Intact);

  function Checkbox() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      value: false,
      trueValue: true,
      falseValue: false,
      indeterminate: false
    };
  };

  _proto._destroy = function _destroy() {// we should not change data in _destroy
    // we must use _context to get value, because it maybe has changed
    // const model = this.get('v-model');
    // if (!model) return;
    // let value = this.get('_context').data.get(model);
    // if (!value) return;
    // const trueValue = this.get('trueValue');
    // if (this.isChecked()) {
    // if (isArray(value)) {
    // value = value.slice(0);
    // const index = value.indexOf(trueValue);
    // value.splice(index, 1);
    // this.set('value', value);
    // } else {
    // this.set('value', this.get('falseValue'));
    // }
    // }
  };

  _proto.isChecked = function isChecked() {
    var value = this.get('value');
    var trueValue = this.get('trueValue');
    return isArray(value) ? value.indexOf(trueValue) > -1 : value === trueValue;
  };

  _proto._onKeypress = function _onKeypress(e) {
    if (e.keyCode === 13) {
      this.refs.input.click();
    }
  };

  (0, _createClass2.default)(Checkbox, [{
    key: "template",
    get: function get() {
      return _index.default;
    }
  }]);
  return Checkbox;
}(_intact.default);

exports.Checkbox = exports.default = Checkbox;
(0, _defineProperty2.default)(Checkbox, "propTypes", {
  disabled: Boolean,
  indeterminate: Boolean // set value to falseValue when destroy

});

/***/ }),

/***/ "./components/checkbox/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431261032
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/checkbox/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/es6.function.name");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      disabled = _self$get.disabled,
      falseValue = _self$get.falseValue,
      children = _self$get.children,
      value = _self$get.value,
      trueValue = _self$get.trueValue,
      style = _self$get.style,
      ref = _self$get.ref,
      key = _self$get.key,
      indeterminate = _self$get.indeterminate,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_self$get, ["className", "disabled", "falseValue", "children", "value", "trueValue", "style", "ref", "key", "indeterminate"]);

  var classNameObj = (_classNameObj = {
    'k-checkbox': true,
    'k-disabled': disabled,
    'k-checked': self.isChecked()
  }, _classNameObj[className] = className, _classNameObj['k-indeterminate'] = indeterminate, _classNameObj);
  var events = [// do not bind click to label, otherwise it will trigger click event twice

  /* 'ev-click', */
  'ev-mouseenter', 'ev-mouseleave'].reduce(function (memo, name) {
    if (rest[name]) {
      memo[name] = rest[name];
      delete rest[name];
    }

    return memo;
  }, {});
  return h('label', (0, _assign.default)({
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return disabled ? null : "0";
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return events;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-keypress': function () {
      try {
        return self._onKeypress;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h('span', null, h('input', (0, _assign.default)({
    'type': 'checkbox',
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return trueValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': '-1'
  }, function () {
    try {
      return (0, _utils.getRestProps)(self, rest);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'checked': _detectCheckboxChecked(self, 'value', function () {
      try {
        return trueValue;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'ev-change': function evChange(__e) {
      _setCheckboxModel(self, 'value', function () {
        try {
          return trueValue;
        } catch (e) {
          _e(e);
        }
      }.call($this), function () {
        try {
          return falseValue;
        } catch (e) {
          _e(e);
        }
      }.call($this), __e, $this);
    }
  }), null, null, null, function (i) {
    widgets['input'] = i;
  }), 'k-wrapper'), function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-text') : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose"));

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _utils = __webpack_require__("./components/utils.js");

var _menu = _interopRequireDefault(__webpack_require__("./components/dropdown/menu.js"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/dropdown/index.styl");

var _dec, _class, _class2, _temp;

var _Intact$Vdt$miss = _intact.default.Vdt.miss,
    h = _Intact$Vdt$miss.h,
    Types = _Intact$Vdt$miss.Types;
var _className = _intact.default.Vdt.utils.className;
var Dropdown = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Dropdown, _Intact);

  function Dropdown() {
    return _Intact.apply(this, arguments) || this;
  }

  Dropdown.template = function template(data) {
    var _className2;

    var vNode = data.get('children');
    var isShow = data.get('_isShow');
    var props = vNode.props;
    var className = vNode.className || props.className;

    var classNames = _className((_className2 = {}, _className2[className] = className, _className2['k-dropdown-open'] = isShow, _className2));

    if (vNode.type & Types.ComponentClassOrInstance) {
      props = (0, _assign.default)({}, props, {
        className: classNames
      });
    }

    return h(vNode.tag, props, vNode.children, classNames, vNode.key, vNode.ref);
  };

  var _proto = Dropdown.prototype;

  _proto.defaults = function defaults() {
    return {
      trigger: 'hover',
      disabled: false,
      _isShow: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$receive:children', function () {
      _this._saveOriginalEvents();
    }, {
      keep: true
    });
  };

  _proto._saveOriginalEvents = function _saveOriginalEvents() {
    var _this$get = this.get(),
        children = _this$get.children,
        trigger = _this$get.trigger,
        className = _this$get.className,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$get, ["children", "trigger", "className"]);

    if ((0, _isArray.default)(children)) {
      children = children[0];
    }

    if ((0, _utils.isTextChildren)(children)) {
      children = h('span', rest, children, className);
    } // save the original event


    var originProps = (0, _assign.default)({}, children.props);
    var hasSaved = false;

    if (!originProps._evHasSaved) {
      if (originProps.vueVNode) {
        // for vue element
        var data = originProps.vueVNode.data;
        var on = data && data.on || {};
        originProps._evClick = on.click;
        originProps._evMouseEnter = on.mouseenter;
        originProps._evMouseLeave = on.mouseleave; // children.className = undefined;
      } else if (originProps.reactVNode) {
        // for react element
        var _props = originProps.reactVNode.props;
        originProps._evClick = _props.onClick;
        originProps._evMouseEnter = _props.onMouseEnter;
        originProps._evMouseLeave = _props.onMouseLeave;
      } else {
        originProps._evClick = originProps['ev-click'];
        originProps._evMouseEnter = originProps['ev-mouseenter'];
        originProps._evMouseLeave = originProps['ev-mouseleave'];
      }

      hasSaved = true;
    }

    var props = {}; // if (trigger === 'click') {

    props['ev-click'] = this.show.bind(this, originProps._evClick); // } else {

    if (trigger === 'hover') {
      props['ev-mouseenter'] = this.show.bind(this, originProps._evMouseEnter);
      props['ev-mouseleave'] = this.hide.bind(this, originProps._evMouseLeave);
    }

    if (hasSaved) {
      props._evHasSaved = true;
    }

    children.props = (0, _assign.default)({}, originProps, props);
    this.set('children', children, {
      silent: true
    });
  };

  _proto._mount = function _mount() {
    // add instance to dom, for menu to get it by previousSibling
    this.element._dropdown = this;
  };

  _proto.show = function show(fn, e, isFocus) {
    if (typeof fn === 'function') fn(e);
    if (this.get('disabled') || e && e._hide === this) return;
    var menu = this.menu;
    menu.__event = e;
    menu.show();

    if (isFocus) {
      menu.focusItemByIndex(0);
    }
  };

  _proto.hide = function hide(fn, e, immediately) {
    if (typeof fn === 'function') fn(e);
    if (this.get('disabled')) return;
    var menu = this.menu;
    menu.hide(immediately);
  };

  return Dropdown;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  trigger: ['hover', 'click'],
  disabled: Boolean
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class, "template"), _class)), _class));
exports.default = Dropdown;

/***/ }),

/***/ "./components/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Dropdown = exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _dropdown = _interopRequireDefault(__webpack_require__("./components/dropdown/dropdown.js"));

var _menu = _interopRequireDefault(__webpack_require__("./components/dropdown/menu.js"));

exports.DropdownMenu = _menu.default;

var _item = _interopRequireDefault(__webpack_require__("./components/dropdown/item.js"));

exports.DropdownItem = _item.default;

var _utils = __webpack_require__("./components/utils.js");

var h = _intact.default.Vdt.miss.h;

function Wrapper(props, inVue) {
  var children = props.children,
      position = props.position,
      key = props.key,
      ref = props.ref,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "position", "key", "ref"]);
  var element = children[0],
      menu = children[1];
  var dropdown = h(_dropdown.default, (0, _assign.default)({
    key: key == null ? key : key + ".trigger",
    ref: ref,
    children: [element]
  }, rest));
  menu.props = (0, _assign.default)({
    position: position,
    // indicate that it is use in Dropdown or alone for lookup dropdown instance in _mount
    _useInDropdown: true
  }, rest, menu.props);
  menu.key = key == null ? menu.key : key + ".menu";

  if (!inVue || !_utils.config.useWrapper) {
    return [dropdown, menu];
  }

  return h(DropdownVueWrapper, (0, _assign.default)({
    children: [dropdown, menu]
  }, rest));
}

Wrapper.propTypes = _dropdown.default.propTypes;
var _className = _intact.default.Vdt.utils.className;

var DropdownVueWrapper =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(DropdownVueWrapper, _Intact);

  function DropdownVueWrapper() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DropdownVueWrapper.prototype;

  _proto.template = function template(data) {
    var _className2;

    var _data$get = data.get(),
        className = _data$get.className,
        children = _data$get.children,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_data$get, ["className", "children"]);

    return h('div', rest, children, _className((_className2 = {
      'k-dropdown': true
    }, _className2[className] = className, _className2)));
  };

  return DropdownVueWrapper;
}(_intact.default);

var _Wrapper = _intact.default.functionalWrapper ? _intact.default.functionalWrapper(Wrapper) : Wrapper;

exports.Dropdown = _Wrapper;
var _default = _Wrapper;
exports.default = _default;

/***/ }),

/***/ "./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431260569
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/dropdown/item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _item = _interopRequireDefault(__webpack_require__("./components/dropdown/item.vdt"));

var _dropdown = _interopRequireDefault(__webpack_require__("./components/dropdown/dropdown.js"));

var _menu = _interopRequireDefault(__webpack_require__("./components/dropdown/menu.js"));

var _utils = __webpack_require__("./components/utils.js");

var _dec, _class, _init, _class2, _temp;

var DropdownItem = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(DropdownItem, _Intact);

  function DropdownItem() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DropdownItem.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      hideOnSelect: true,
      _isFocus: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    // if selected hide all dropdown menu
    this.on('select', function () {
      if (_this.get('hideOnSelect')) {
        var ancestor = _this._findAncestorDropdownMenu();

        ancestor.hide(true);
      }
    });
  };

  _proto._mount = function _mount() {
    var parent = this.parent = this._findAncestorDropdownMenu(true);

    if (parent) {
      parent.items.push(this);
    }
  };

  _proto._onClick = function _onClick(e) {
    if (this.get('disabled')) return; // in IE, if the event has not call stopImmediatePropagation,
    // the document click will also be called after it has been removed

    e.stopPropagation();
    this.trigger('click', e); // is not a sub dropdown trigger

    if (this.parentVNode.tag !== _dropdown.default) {
      this.trigger('select', this, e);
    }
  };

  _proto._onMouseEnter = function _onMouseEnter(e) {
    this.trigger('mouseenter', e);
    if (this.get('disabled')) return;
    this.parent.focusItem(this);
  };

  _proto._onMouseLeave = function _onMouseLeave(e) {
    this.trigger('mouseleave', e);
    this.parent.unFocusLastItem(); // if (this.get('disabled')) return;
  };

  _proto.select = function select(e, isFocus) {
    // is not a sub dropdown trigger
    var dropdown = this._isSubMenu();

    this.trigger('click', e);

    if (!dropdown) {
      this.trigger('select', this);
    } else {
      dropdown.show(null, null, isFocus);
    }
  };

  _proto.focus = function focus() {
    this.set('_isFocus', true);
    var elRect = this.element.getBoundingClientRect();
    var pEl = this.parent.refs.menu.element;
    var pElRect = pEl.getBoundingClientRect();
    var bottomOverflowDistance = elRect.bottom - pElRect.bottom;
    var topOverflowDistance = elRect.top - pElRect.top;

    if (bottomOverflowDistance > 0) {
      pEl.scrollTop += bottomOverflowDistance;
    } else if (topOverflowDistance < 0) {
      pEl.scrollTop += topOverflowDistance;
    }
  };

  _proto.unFocus = function unFocus() {
    return this.set('_isFocus', false); // const dropdown = this._isSubMenu();
    // if (dropdown) {
    // dropdown.hide(null, null, true);
    // }
  };

  _proto.showMenuAndFocus = function showMenuAndFocus(e) {
    var dropdown = this._isSubMenu();

    if (dropdown) {
      this.select(e, true);
    }
  };

  _proto.hideMenu = function hideMenu() {
    var dropdown = this._isSubMenu();

    if (dropdown) {
      dropdown.hide(null, null, true);
    }
  };

  _proto._isSubMenu = function _isSubMenu() {
    if (this.parentVNode.tag === _dropdown.default) {
      return this.parentVNode.children;
    }
  };

  _proto._findAncestorDropdownMenu = function _findAncestorDropdownMenu(isFirst) {
    return (0, _utils.findParentComponent)(_menu.default, this, isFirst);
  };

  _proto._destroy = function _destroy() {
    if (this.parent) {
      var items = this.parent.items;
      items.splice(items.indexOf(this), 1);
    }
  };

  return DropdownItem;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _item.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  disabled: Boolean,
  hideOnSelect: Boolean
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.default = DropdownItem;

/***/ }),

/***/ "./components/dropdown/item.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _radio = __webpack_require__("./components/radio/index.js");

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;
  /* import {proxyEvent} from '../utils'; */

  var _self$get = self.get(),
      children = _self$get.children,
      disabled = _self$get.disabled,
      className = _self$get.className,
      _isFocus = _self$get._isFocus,
      hideOnSelect = _self$get.hideOnSelect;

  var classNameObj = (_classNameObj = {
    'k-item': true,
    'k-disabled': disabled
  }, _classNameObj[className] = className, _classNameObj['k-hover'] = _isFocus, _classNameObj['k-no-padding'] = children && (children.tag === _checkbox.Checkbox || children.tag === _radio.Radio), _classNameObj);
  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-click': function () {
      try {
        return self._onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseenter': function () {
      try {
        return self._onMouseEnter;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseleave': function () {
      try {
        return self._onMouseLeave;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/dropdown/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _promise = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/promise"));

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _menu2 = _interopRequireDefault(__webpack_require__("./components/dropdown/menu.vdt"));

var _position2 = _interopRequireDefault(__webpack_require__("./components/moveWrapper/position.js"));

var _utils = __webpack_require__("./components/utils.js");

var _dropdown = _interopRequireDefault(__webpack_require__("./components/dropdown/dropdown.js"));

var _dec, _class, _init, _class2, _temp;

var DropdownMenu = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(DropdownMenu, _Intact);

  function DropdownMenu() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.defaults = function defaults() {
    return {
      value: false,
      trigger: 'hover',
      position: {},
      transition: 'c-slidedown',
      of: 'self',
      // self | parent
      container: undefined,
      // indicate that it is use in Dropdown or alone for lookup dropdown instance in _mount
      _useInDropdown: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.subDropdowns = [];
    this.items = [];
    this.focusIndex = -1;
    this.locked = false;
    this.on('$change:value', function (c, v) {
      // contextmenu has not dropdown
      if (_this.dropdown) {
        _this.dropdown.set('_isShow', v);
      }
    });
    this.on('$changed:value', function (c, value) {
      if (value) {
        _this.trigger('show', _this);
      } else {
        _this.trigger('hide', _this);
      }
    });
    this.on('$changed:of', function () {
      if (_this.get('value')) {
        _this.position();
      }
    });
  };

  _proto._mount = function _mount() {
    // maybe it is used as contextmenu
    if (!this.get('_useInDropdown')) return;

    var parent = this._getParent();

    if (parent) parent.subDropdowns.push(this); // the previous sibling is Dropdown

    var triggerElement = this.element.previousSibling; // in react, it may be a comment which value is ' react-mount-point-unstable ' 
    // is may be a leaving animation element
    // so we must look up it until the header

    var dropdown;

    while (triggerElement) {
      if (dropdown = triggerElement._dropdown) {
        this.dropdown = dropdown;
        dropdown.menu = this;
        break;
      }

      triggerElement = triggerElement.previousSibling;
    } // when mount, the child animate element mount first
    // if we use appearStart to show this menu
    // the parent component can not be get correctly
    // unless we find parent component in position method again
    // so we do this at here instead of appearStart callback
    //
    // find parent component in position method instead of
    // if (this.get('value')) {
    // this._onShow();
    // }

  };

  _proto._getParent = function _getParent() {
    if (this.parent === undefined) {
      this.parent = this._findParentDropdownMenu() || null;
    }

    return this.parent;
  };

  _proto._findParentDropdownMenu = function _findParentDropdownMenu() {
    return (0, _utils.findParentComponent)(DropdownMenu, this, true);
  };

  _proto.show = function show() {
    clearTimeout(this.timer);
    this.set('value', true);

    var parent = this._findParentDropdownMenu();

    if (parent) {
      var showedMenu = parent._showedMenu;

      if (showedMenu && showedMenu !== this) {
        showedMenu.hide(true);
      }

      parent._showedMenu = this; // hide last showed menu will unlock the parent
      // so we lock it here when show this menu

      parent.locked = true; // because parent will hide when click outside
      // we call parent show method to clear the timer of hiding

      parent.show();
    }
  };

  _proto.hide = function hide(immediately) {
    var _this2 = this;

    if (!immediately) {
      this.timer = setTimeout(function () {
        _this2._hide();
      }, 200);
    } else {
      this._hide();
    }
  };

  _proto._hide = function _hide() {
    this.set('value', false); // hide sub dropdown

    for (var i = 0; i < this.subDropdowns.length; i++) {
      this.subDropdowns[i].hide(true);
    }
  };

  _proto.toggle = function toggle() {
    this.set('value', !this.get('value'));
  };

  _proto.position = function position() {
    var _this3 = this;

    // if the dropdown menu is nested, then show the parent first
    // and show the child menu later
    var p = function p(_of, transition) {
      var _using2;

      (0, _position2.default)(_this3.refs.menu.element, (0, _assign.default)({
        my: 'center top+8',
        at: 'center bottom',
        of: _of,
        using: function using(feedback) {
          _using2 = function _using() {
            // let the child menu has the same transition with parent menu
            _this3.set('transition', transition || (0, _utils.getTransition)(feedback));

            _using2 = null;
          }; // if it is the first menu, getTransition immediately


          if (!transition) {
            _using2();
          }
        }
      }, _this3.get('position')));
      _this3.positioned = true;

      _this3.trigger('positioned', transition);

      _using2 && _using2();
    };

    var _of = this.get('of');

    if (_of === 'parent') {
      var parent = this._getParent();

      if (parent) {
        _of = parent.refs.menu.element;

        if (parent.positioned) {
          p(_of);
        } else {
          return new _promise.default(function (resolve) {
            parent.one('positioned', function (transition) {
              p(_of, transition || parent.get('transition'));
              resolve();
            });
          });
        }
      }
    } else if (_of === 'self') {
      _of = this.dropdown.element;
      p(_of);
    } else {
      p(_of);
    }
  };

  _proto._onShow = function _onShow() {
    this._enterEnd = false;
    this.unFocusLastItem();

    this._addDocumentEvents();

    return this.position();
  };

  _proto._addDocumentEvents = function _addDocumentEvents() {
    var parent = this.parent;

    if (!parent) {
      // no matter what the trigger is
      // we should let the layer hide when click document. #52
      // in vue the click event of trigger element
      // will propagate to document immediately
      // and this will lead close the layer. #209
      // we need to set this _dropdown to `this` to indentify
      // which component has been clicked. Otherwise the menu 
      // will not hide when click the other component. #221
      if (this.__event) this.__event._dropdown = this;
      document.addEventListener('click', this._onDocumentClick, true);
      document.addEventListener('click', this._documentClickHandler);
    } else {
      parent.locked = true;
    }

    document.addEventListener('keydown', this._onKeydown);
  };

  _proto._removeDocumentEvents = function _removeDocumentEvents() {
    this.positioned = false;
    var parent = this.parent;

    if (!parent) {
      document.removeEventListener('click', this._onDocumentClick, true);
      document.removeEventListener('click', this._documentClickHandler);
    } else {
      parent.locked = false;
    }

    document.removeEventListener('keydown', this._onKeydown);
  };

  _proto._onDocumentClick = function _onDocumentClick(e) {
    var _this4 = this;

    // in IE, if the event has not call stopImmediatePropagation,
    // the document click will also be called after it has been removed
    var _menu = this.refs.menu;
    if (!_menu) return;
    var target = e.target;
    var menu = _menu.element; // is a dropdown menu

    if (menu === target || menu.contains(target)) return; // is click on sub menu

    if (this._isClickSubMenu(target, this.subDropdowns)) return; // custom flag to indicate that the event does not lead to close menu

    if (e._dropdown === true || e._dropdown === this) return; // to indicate this click event will hide layer 
    // and don't show it again when the target is the trigger element

    e._hide = this.dropdown; // because we bind document click handler to hide menu in capture phase
    // and we get cancelBubble is true even if we stopPropagation
    // some action like clear in datepicker will prevent this menu hiding
    // we call this handler as soon as the event bubble to docuemnt

    e._handler = function () {
      return _this4.hide(true);
    }; // const handler = () => {
    // if (!e._cancelBubble) {
    // this.hide(true);
    // }
    // };
    // this.documentTimer = setTimeout(handler);

  };

  _proto._documentClickHandler = function _documentClickHandler(e) {
    e._handler && e._handler();
  };

  _proto._onKeydown = function _onKeydown(e) {
    if (this.locked) {
      return;
    }

    switch (e.keyCode) {
      // down
      case 40:
        this._focusNextItem(e);

        break;
      // up

      case 38:
        this._focusPrevItem(e);

        break;
      // right

      case 39:
        this._showSubMenu(e);

        break;
      // left

      case 37:
        this._hideSubMenu(e);

        break;
      // enter

      case 13:
        this._selectItem(e);

        break;
    }
  };

  _proto._focusNextItem = function _focusNextItem(e) {
    // const parent = this._findParentDropdownMenu();
    // if (parent && this.focusIndex < 0) {
    // return;
    // }
    e.preventDefault();
    this.focusItemByIndex(this.focusIndex + 1, 'down');
  };

  _proto._focusPrevItem = function _focusPrevItem(e) {
    // const parent = this._findParentDropdownMenu();
    // if (parent && this.focusIndex < 0) {
    // return;
    // }
    e.preventDefault();
    this.focusItemByIndex(this.focusIndex - 1, 'up');
  };

  _proto.focusItemByIndex = function focusItemByIndex(index, direction) {
    if (direction === void 0) {
      direction = 'down';
    }

    var items = this.items;
    var max = items.length - 1;
    this.unFocusLastItem();

    function fixIndex(index) {
      if (index > max) {
        index = 0;
      } else if (index < 0) {
        index = max;
      }

      return index;
    }

    index = fixIndex(index);
    var i = 0;

    while (i <= max && items[index] && items[index].get('disabled')) {
      index = fixIndex(direction === 'down' ? index + 1 : index - 1);
      i++;
    } // all items are disabled


    if (i > max) return;
    this.focusIndex = index;
    items[index].focus();
  };

  _proto.unFocusLastItem = function unFocusLastItem() {
    var oldIndex = this.focusIndex;
    var items = this.items;

    if (oldIndex > -1 && items[oldIndex]) {
      items[oldIndex].unFocus();
      this.focusIndex = -1;
    }
  };

  _proto._selectItem = function _selectItem(e) {
    this._showSubMenu(e);

    if (this.focusIndex > -1) {
      e.preventDefault();
      this.items[this.focusIndex] && this.items[this.focusIndex].select(e);
    }
  };

  _proto._showSubMenu = function _showSubMenu(e) {
    var parent = this.parent;
    if (!parent && this.focusIndex < 0) return;
    e.preventDefault();

    if (parent && this.focusIndex < 0) {
      this.focusItemByIndex(0);
    } else if (this.focusIndex > -1) {
      // maybe the items has been filtered, #50
      this.items[this.focusIndex] && this.items[this.focusIndex].showMenuAndFocus(e);
    }
  };

  _proto._hideSubMenu = function _hideSubMenu(e) {
    if (this.focusIndex > -1) {
      e.preventDefault();
      this.items[this.focusIndex].hideMenu();
      var parent = (0, _utils.findParentComponent)(DropdownMenu, this, true);

      if (parent) {
        this.dropdown.hide(null, null, true);
      }
    }
  };

  _proto.focusItem = function focusItem(item) {
    var index = this.items.indexOf(item);
    this.focusItemByIndex(index);
  };

  _proto._isClickSubMenu = function _isClickSubMenu(target, subMenus) {
    var ret = false;

    for (var i = 0; i < subMenus.length; i++) {
      var subMenu = subMenus[i].refs.menu;

      if (subMenu) {
        if (target === subMenu.element || subMenu.element.contains(target)) {
          ret = true;
          break;
        } else {
          ret = this._isClickSubMenu(target, subMenus[i].subDropdowns);
          if (ret) break;
        }
      }
    }

    return ret;
  };

  _proto._destroy = function _destroy() {
    var parent = this._findParentDropdownMenu();

    if (parent) {
      var subDropdowns = parent.subDropdowns;
      subDropdowns.splice(subDropdowns.indexOf(this), 1);
    }

    clearTimeout(this.timer); // clearTimeout(this.documentTimer);

    this._removeDocumentEvents();
  };

  return DropdownMenu;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _menu2.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  value: Boolean,
  trigger: ['hover', 'click'],
  position: Object,
  transition: String,
  // Event is undefined in NodeJs
  of: ['self', 'parent', Object
  /* Intact Event */
  , typeof Event === 'undefined' ? undefined : Event],
  container: [String, Function]
}), (0, _defineProperty2.default)(_class2, "events", {
  show: true,
  hide: true,
  positioned: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.default = DropdownMenu;

/***/ }),

/***/ "./components/dropdown/menu.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _moveWrapper = _interopRequireDefault(__webpack_require__("./components/moveWrapper/index.js"));

function _default(obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      children = _self$get.children,
      value = _self$get.value,
      trigger = _self$get.trigger,
      className = _self$get.className,
      transition = _self$get.transition,
      container = _self$get.container;

  var events = {}; // no matter what the trigger is, we should show menu when enter it.
  // for this case: hover trigger nests click trigger

  events['ev-mouseenter'] = self.show;

  if (trigger === 'hover') {
    events['ev-mouseleave'] = self.hide.bind(self, false);
  }

  return h(_moveWrapper.default, {
    'ref': function ref(i) {
      widgets['wrapper'] = i;
    },
    '_parent': function () {
      try {
        return self;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(Animate, (0, _assign.default)({
      'a:show': function () {
        try {
          return value;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': _className(function () {
        try {
          var _ref;

          return _ref = {
            "k-dropdown-menu": true
          }, _ref[className] = className, _ref;
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'a:transition': function () {
        try {
          return transition;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'a:appear': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ref': function ref(i) {
        widgets['menu'] = i;
      }
    }, function () {
      try {
        return events;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'a:delayDestroy': function () {
        try {
          return false;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'a:enterStart': function () {
        try {
          return self._onShow;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': (_blocks['children'] = function (parent) {
        return function () {
          try {
            return children;
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['children'] = function (parent) {
        var args = arguments;
        return blocks['children'] ? blocks['children'].apply($this, [function () {
          return _blocks['children'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['children'].apply($this, args);
      }) && __blocks['children'].apply($this, [__noop]),
      '_context': $this,
      'ev-a:leaveStart': function () {
        try {
          return self._removeDocumentEvents;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })),
    '_context': $this
  });
}

/***/ }),

/***/ "./components/grid/col.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/web.dom.iterable");

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _col = _interopRequireDefault(__webpack_require__("./components/grid/col.vdt"));

var _utils = __webpack_require__("./components/utils.js");

var _utils2 = __webpack_require__("./components/grid/utils.js");

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/grid/index.styl");

var _dec, _class, _class2, _temp;

var Col = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Col, _Intact);

  function Col() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.defaults = function defaults() {
    return {
      span: undefined,
      offset: 0,
      gutter: 0,
      order: 0,
      pull: 0,
      push: 0,
      // responsive
      xs: undefined,
      sm: undefined,
      md: undefined,
      lg: undefined,
      xl: undefined,
      xxl: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    _utils2.breakpoints.forEach(function (item) {
      _this.on("$receive:" + item, function (c, v) {
        if (!v) {
          _this[item] = undefined;
        } else if ((0, _utils.isStringOrNumber)(v)) {
          _this[item] = {
            span: +v
          };
        } else {
          _this[item] = v;
        }
      });
    });
  };

  (0, _createClass2.default)(Col, [{
    key: "template",
    get: function get() {
      return _col.default;
    }
  }]);
  return Col;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", (0, _assign.default)({
  gutter: [String, Number],
  span: [String, Number],
  offset: [String, Number],
  order: [String, Number],
  pull: [String, Number],
  push: [String, Number]
}, _utils2.breakpoints.reduce(function (memo, item) {
  memo[item] = [String, Number, Object];
  return memo;
}, {}))), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.default = Col;

/***/ }),

/***/ "./components/grid/col.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/web.dom.iterable");

var _utils = _interopRequireWildcard(__webpack_require__("./components/grid/utils.js"));

var _utils2 = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      children = _self$get.children,
      span = _self$get.span,
      className = _self$get.className,
      order = _self$get.order,
      gutter = _self$get.gutter,
      offset = _self$get.offset,
      push = _self$get.push,
      pull = _self$get.pull,
      style = _self$get.style;

  var xs = self.xs,
      sm = self.sm,
      md = self.md,
      lg = self.lg,
      xl = self.xl;
  var hasGutter = gutter > 0;

  if (hasGutter) {
    style = (0, _utils.default)(gutter, style, 'padding');
  }

  var classNameObj = (_classNameObj = {
    'k-col': true
  }, _classNameObj["k-" + span] = span, _classNameObj[className] = className && !hasGutter, _classNameObj["k-offset-" + offset] = offset > 0, _classNameObj["k-pull-" + pull] = pull, _classNameObj["k-push-" + push] = push, _classNameObj["k-order-" + order] = order, _classNameObj); // add responsive class

  _utils.breakpoints.forEach(function (item) {
    var obj = self[item];
    if (!obj) return;
    var prefix = item === 'xs' ? 'k-' : "k-" + item + "-";

    if (!(0, _utils2.isNullOrUndefined)(obj.span)) {
      classNameObj["" + prefix + obj.span] = true;
    }

    ['order', 'offset', 'pull', 'push'].forEach(function (prop) {
      if (!(0, _utils2.isNullOrUndefined)(obj[prop])) {
        classNameObj["" + prefix + prop + "-" + obj[prop]] = true;
      }
    });
  });

  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils2.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return hasGutter ? h('div', null, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), _className(function () {
        try {
          return className;
        } catch (e) {
          _e(e);
        }
      }.call($this))) : children;
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;

var _row = _interopRequireDefault(__webpack_require__("./components/grid/row.js"));

exports.Row = _row.default;

var _col = _interopRequireDefault(__webpack_require__("./components/grid/col.js"));

exports.Col = _col.default;

/***/ }),

/***/ "./components/grid/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431258806
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/grid/mediaMatch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

__webpack_require__("core-js/modules/es6.number.constructor");

__webpack_require__("core-js/modules/es6.regexp.match");

__webpack_require__("core-js/modules/es6.regexp.split");

/*! MediaMatch v.2.0.3 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */
function _default() {
  'use strict';
  /* istanbul ignore else */

  if (window.matchMedia) {
    return window.matchMedia;
  } else {
    // Internal globals
    var win = window,
        _doc = win.document,
        _viewport = _doc.documentElement,
        _queries = [],
        _queryID = 0,
        _type = '',
        _features = {},
        // only screen
    // only screen and
    // not screen
    // not screen and
    // screen
    // screen and
    _typeExpr = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,
        // (-vendor-min-width: 300px)
    // (min-width: 300px)
    // (width: 300px)
    // (width)
    // (orientation: portrait|landscape)
    _mediaExpr = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,
        _timer = 0,
        // Helper methods

    /*
        _matches
     */
    _matches = function _matches(media) {
      // screen and (min-width: 400px), screen and (max-width: 500px)
      var mql = media.indexOf(',') !== -1 && media.split(',') || [media],
          mqIndex = mql.length - 1,
          mqLength = mqIndex,
          mq = null,
          // not screen, screen
      negateType = null,
          negateTypeFound = '',
          negateTypeIndex = 0,
          negate = false,
          type = '',
          // (min-width: 400px), (min-width)
      exprListStr = '',
          exprList = null,
          exprIndex = 0,
          exprLength = 0,
          expr = null,
          prefix = '',
          length = '',
          unit = '',
          value = '',
          feature = '',
          match = false;

      if (media === '') {
        return true;
      }

      do {
        mq = mql[mqLength - mqIndex];
        negate = false;
        negateType = mq.match(_typeExpr);

        if (negateType) {
          negateTypeFound = negateType[0];
          negateTypeIndex = negateType.index;
        }

        if (!negateType || mq.substring(0, negateTypeIndex).indexOf('(') === -1 && (negateTypeIndex || !negateType[3] && negateTypeFound !== negateType.input)) {
          match = false;
          continue;
        }

        exprListStr = mq;
        negate = negateType[1] === 'not';

        if (!negateTypeIndex) {
          type = negateType[2];
          exprListStr = mq.substring(negateTypeFound.length);
        } // Test media type
        // Test type against this device or if 'all' or empty ''


        match = type === _type || type === 'all' || type === '';
        exprList = exprListStr.indexOf(' and ') !== -1 && exprListStr.split(' and ') || [exprListStr];
        exprIndex = exprList.length - 1;
        exprLength = exprIndex;

        if (match && exprIndex >= 0 && exprListStr !== '') {
          do {
            expr = exprList[exprIndex].match(_mediaExpr);

            if (!expr || !_features[expr[3]]) {
              match = false;
              break;
            }

            prefix = expr[2];
            length = expr[5];
            value = length;
            unit = expr[7];
            feature = _features[expr[3]]; // Convert unit types

            if (unit) {
              if (unit === 'px') {
                // If unit is px
                value = Number(length);
              } else if (unit === 'em' || unit === 'rem') {
                // Convert relative length unit to pixels
                // Assumed base font size is 16px
                value = 16 * length;
              } else if (expr[8]) {
                // Convert aspect ratio to decimal
                value = (length / expr[8]).toFixed(2);
              } else if (unit === 'dppx') {
                // Convert resolution dppx unit to pixels
                value = length * 96;
              } else if (unit === 'dpcm') {
                // Convert resolution dpcm unit to pixels
                value = length * 0.3937;
              } else {
                // default
                value = Number(length);
              }
            } // Test for prefix min or max
            // Test value against feature


            if (prefix === 'min-' && value) {
              match = feature >= value;
            } else if (prefix === 'max-' && value) {
              match = feature <= value;
            } else if (value) {
              match = feature === value;
            } else {
              match = !!feature;
            } // If 'match' is false, break loop
            // Continue main loop through query list


            if (!match) {
              break;
            }
          } while (exprIndex--);
        } // If match is true, break loop
        // Once matched, no need to check other queries


        if (match) {
          break;
        }
      } while (mqIndex--);

      return negate ? !match : match;
    },

    /*
        _setFeature
     */
    _setFeature = function _setFeature() {
      // Sets properties of '_features' that change on resize and/or orientation.
      var w = win.innerWidth || _viewport.clientWidth,
          h = win.innerHeight || _viewport.clientHeight,
          dw = win.screen.width,
          dh = win.screen.height,
          c = win.screen.colorDepth,
          x = win.devicePixelRatio;
      _features.width = w;
      _features.height = h;
      _features['aspect-ratio'] = (w / h).toFixed(2);
      _features['device-width'] = dw;
      _features['device-height'] = dh;
      _features['device-aspect-ratio'] = (dw / dh).toFixed(2);
      _features.color = c;
      _features['color-index'] = Math.pow(2, c);
      _features.orientation = h >= w ? 'portrait' : 'landscape';
      _features.resolution = x && x * 96 || win.screen.deviceXDPI || 96;
      _features['device-pixel-ratio'] = x || 1;
    },

    /*
        _watch
     */
    _watch = function _watch() {
      clearTimeout(_timer);
      _timer = setTimeout(function () {
        var query = null,
            qIndex = _queryID - 1,
            qLength = qIndex,
            match = false;

        if (qIndex >= 0) {
          _setFeature();

          do {
            query = _queries[qLength - qIndex];

            if (query) {
              match = _matches(query.mql.media);

              if (match && !query.mql.matches || !match && query.mql.matches) {
                query.mql.matches = match;

                if (query.listeners) {
                  for (var i = 0, il = query.listeners.length; i < il; i++) {
                    if (query.listeners[i]) {
                      query.listeners[i].call(win, query.mql);
                    }
                  }
                }
              }
            }
          } while (qIndex--);
        }
      }, 10);
    },

    /*
        _init
     */
    _init = function _init() {
      var head = _doc.getElementsByTagName('head')[0],
          style = _doc.createElement('style'),
          info = null,
          typeList = ['screen', 'print', 'speech', 'projection', 'handheld', 'tv', 'braille', 'embossed', 'tty'],
          typeIndex = 0,
          typeLength = typeList.length,
          cssText = '#mediamatchjs { position: relative; z-index: 0; }',
          eventPrefix = '',
          addEvent = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;

      style.type = 'text/css';
      style.id = 'mediamatchjs';
      head.appendChild(style); // Must be placed after style is inserted into the DOM for IE

      info = win.getComputedStyle && win.getComputedStyle(style) || style.currentStyle; // Create media blocks to test for media type

      for (; typeIndex < typeLength; typeIndex++) {
        cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
      } // Add rules to style element


      if (style.styleSheet) {
        style.styleSheet.cssText = cssText;
      } else {
        style.textContent = cssText;
      } // Get media type


      _type = typeList[info.zIndex * 1 || 0];
      head.removeChild(style);

      _setFeature(); // Set up listeners


      addEvent(eventPrefix + 'resize', _watch, false);
      addEvent(eventPrefix + 'orientationchange', _watch, false);
    };

    _init();
    /*
        A list of parsed media queries, ex. screen and (max-width: 400px), screen and (max-width: 800px)
    */


    return function (media) {
      var id = _queryID,
          mql = {
        matches: false,
        media: media,
        addListener: function addListener(listener) {
          _queries[id].listeners || (_queries[id].listeners = []);
          listener && _queries[id].listeners.push(listener);
        },
        removeListener: function removeListener(listener) {
          var query = _queries[id],
              i = 0,
              il = 0;

          if (!query) {
            return;
          }

          il = query.listeners.length;

          for (; i < il; i++) {
            if (query.listeners[i] === listener) {
              query.listeners.splice(i, 1);
            }
          }
        }
      };

      if (media === '') {
        mql.matches = true;
        return mql;
      }

      mql.matches = _matches(media);
      _queryID = _queries.push({
        mql: mql,
        listeners: null
      });
      return mql;
    };
  }
}

/***/ }),

/***/ "./components/grid/mediaQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "smMinWidth": "576px",
  "mdMinWidth": "768px",
  "lgMinWidth": "992px",
  "xlMinWidth": "1200px",
  "xxlMinWidth": "1600px"
};

/***/ }),

/***/ "./components/grid/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

__webpack_require__("core-js/modules/es6.array.find");

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _row = _interopRequireDefault(__webpack_require__("./components/grid/row.vdt"));

var _mediaQuery = _interopRequireDefault(__webpack_require__("./components/grid/mediaQuery.js"));

var _utils = __webpack_require__("./components/utils.js");

var _col = _interopRequireDefault(__webpack_require__("./components/grid/col.js"));

var _utils2 = __webpack_require__("./components/grid/utils.js");

var _mediaMatch = _interopRequireDefault(__webpack_require__("./components/grid/mediaMatch.js"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/grid/index.styl");

var _dec, _class, _class2, _temp;

var enquire;

if (_utils.hasWindow) {
  window.matchMedia = (0, _mediaMatch.default)();
  enquire = __webpack_require__("enquire.js");
}

var responsiveMap = {
  xxl: "(min-width: 0)",
  xl: "(min-width: " + _mediaQuery.default.xlMinWidth + ")",
  lg: "(min-width: " + _mediaQuery.default.lgMinWidth + ")",
  md: "(min-width: " + _mediaQuery.default.mdMinWidth + ")",
  sm: "(min-width: " + _mediaQuery.default.smMinWidth + ")",
  xs: "(max-width: " + _mediaQuery.default.xsMaxWidth + ")"
};
var Row = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Row, _Intact);

  function Row() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.defaults = function defaults() {
    return {
      gutter: 0,
      justify: undefined,
      flex: false,
      align: undefined,
      _gutter: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.useFlex = false;
    var needKeys = ['justify', 'align', 'flex', 'children'];
    this.on("$receive", function (c, keys) {
      if (needKeys.find(function (key) {
        return keys.indexOf(key) > -1;
      })) {
        var _this$get = _this.get(),
            flex = _this$get.flex,
            justify = _this$get.justify,
            align = _this$get.align,
            children = _this$get.children;

        _this.useFlex = flex || justify || align; // detect the order property of children

        if (!_this.useFlex && children) {
          var _children = children;

          if (!(0, _isArray.default)(children)) {
            _children = [children];
          }

          for (var i = 0; i < _children.length; i++) {
            var vNode = _children[i];

            if (vNode && vNode.tag === _col.default) {
              var props = vNode.props;

              if (props.order != null) {
                _this.useFlex = true;
              } else {
                for (var _i = 0; _i < _utils2.breakpoints.length; _i++) {
                  var breakpoint = _utils2.breakpoints[_i];

                  if (props[breakpoint] && props[breakpoint].order != null) {
                    _this.useFlex = true;
                    break;
                  }
                }
              }

              if (_this.useFlex) break;
            }
          }
        }
      }
    });
  };

  _proto._create = function _create() {
    var _this2 = this;

    var _loop = function _loop(key) {
      enquire.register(responsiveMap[key], {
        match: function match() {
          var _this2$get = _this2.get(),
              gutter = _this2$get.gutter;

          if ((0, _utils.isObject)(gutter)) {
            var _Object$assign2;

            _this2.set('_matches', (0, _assign.default)({}, _this2.get('_matches'), (_Object$assign2 = {}, _Object$assign2[key] = true, _Object$assign2)), {
              async: true
            });
          }
        },
        unmatch: function unmatch() {
          var _this2$get2 = _this2.get(),
              gutter = _this2$get2.gutter;

          if ((0, _utils.isObject)(gutter)) {
            var _Object$assign3;

            _this2.set('_matches', (0, _assign.default)({}, _this2.get('_matches'), (_Object$assign3 = {}, _Object$assign3[key] = false, _Object$assign3)), {
              async: true
            });
          }
        }
      });
    };

    for (var key in responsiveMap) {
      _loop(key);
    }
  };

  _proto._getGutter = function _getGutter() {
    var _this$get2 = this.get(),
        gutter = _this$get2.gutter;

    if ((0, _utils.isObject)(gutter)) {
      for (var i = 0; i < _utils2.breakpoints.length; i++) {
        var breakpoint = _utils2.breakpoints[i];

        if (this.get("_matches." + breakpoint) && gutter[breakpoint] != null) {
          return gutter[breakpoint];
        }
      }

      return 0;
    }

    return gutter;
  };

  (0, _createClass2.default)(Row, [{
    key: "template",
    get: function get() {
      return _row.default;
    }
  }]);
  return Row;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  gutter: [String, Number, Object],
  justify: ['start', 'end', 'center', 'between', 'around', 'evenly'],
  align: ['top', 'bottom', 'middle', 'stretch', 'baseline'],
  flex: Boolean
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.default = Row;

/***/ }),

/***/ "./components/grid/row.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _col = _interopRequireDefault(__webpack_require__("./components/grid/col.js"));

var _utils = __webpack_require__("./components/utils.js");

var _utils2 = _interopRequireDefault(__webpack_require__("./components/grid/utils.js"));

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      children = _self$get.children,
      className = _self$get.className,
      style = _self$get.style,
      justify = _self$get.justify,
      align = _self$get.align;

  var useFlex = self.useFlex;

  var gutter = self._getGutter();

  var hasGutter = gutter > 0;

  if (hasGutter) {
    style = (0, _utils2.default)(gutter, style);
  }

  var classNameObj = (_classNameObj = {
    'k-row': true
  }, _classNameObj[className] = className, _classNameObj['k-gutter'] = hasGutter, _classNameObj['k-flex'] = useFlex, _classNameObj["k-justify-" + justify] = justify, _classNameObj["k-align-" + align] = align, _classNameObj);
  /* if (Array.isArray(children)) { */

  /* // order the children by order property like flex's order */

  /* children.sort((a, b) => { */

  /* return (a && a.props && a.props.order || 0) -  */

  /* (b && b.props && b.props.order || 0); */

  /* }); */

  /* } */

  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return (0, _utils.mapChildren)(children, function (vNode) {
        if (vNode && vNode.tag === _col.default) {
          vNode.props = (0, _assign.default)({}, vNode.props, {
            gutter: gutter
          });
        }

        return vNode;
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/grid/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = gutterStyle;
exports.breakpoints = void 0;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

function gutterStyle(gutter, style, prop) {
  if (prop === void 0) {
    prop = 'margin';
  }

  var margin = gutter / 2;
  var sign = prop === 'margin' ? '-' : '';
  if (!style) style = '';

  if (typeof style === 'string') {
    style = "" + style + (!style || /;\s*$/.test(style) ? '' : ';') + prop + "-left: " + sign + margin + "px; " + prop + "-right: " + sign + margin + "px;";
  } else {
    var _Object$assign2;

    style = (0, _assign.default)((_Object$assign2 = {}, _Object$assign2[prop + "Left"] = "" + sign + margin + "px", _Object$assign2[prop + "Right"] = "" + sign + margin + "px", _Object$assign2), style);
  }

  return style;
}

var breakpoints = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
exports.breakpoints = breakpoints;

/***/ }),

/***/ "./components/icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Icon = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/icon/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/icon/index.styl");

var _dec, _class, _init, _class2, _temp;

var colors = ['default', 'primary', 'warning', 'danger', 'success'];
var Icon = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Icon, _Intact);

  function Icon() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Icon.prototype;

  _proto.defaults = function defaults() {
    this.colors = colors;
    return {
      size: 'default',
      color: undefined
    };
  };

  return Icon;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _index.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  size: ['large', 'default', 'small', 'mini', String, Number],
  color: String
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.Icon = exports.default = Icon;

/***/ }),

/***/ "./components/icon/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431259614
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/icon/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      style = _self$get.style,
      size = _self$get.size,
      color = _self$get.color;

  var classNameObj = (_classNameObj = {
    "k-icon": true
  }, _classNameObj[className] = className, _classNameObj);
  var _style = {};

  if (/^\d+$/.test(size)) {
    _style.fontSize = size + 'px';
  } else if (size !== 'default') {
    classNameObj["k-" + size] = true;
  }

  if (self.colors.indexOf(color) > -1) {
    classNameObj["k-color-" + color] = color !== 'default';
  } else {
    _style.color = color;
  }

  return h('i', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return (0, _utils.addStyle)(_style, style);
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), null, _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Input = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/input/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/input/index.styl");

var _utils = __webpack_require__("./components/utils.js");

var _search = _interopRequireDefault(__webpack_require__("./components/input/search.js"));

exports.Search = _search.default;

var _dec, _class, _init, _class2, _temp;

var Input = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Input, _Intact);

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
      _width: 1
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
    (0, _utils.selectInput)(this.refs.input);
  };

  _proto.focus = function focus() {
    this.refs.input.focus();
  };

  _proto.blur = function blur() {
    this.refs.input.blur();
  };

  _proto._onInput = function _onInput(e) {
    this.set('value', e.target.value);
    this.trigger('input', e);
  };

  _proto._proxyEvent = function _proxyEvent(name, e) {
    this.trigger(name, e);
  };

  return Input;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _index.default), (0, _defineProperty2.default)(_class2, "propTypes", {
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
  nativeProps: Object
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.Input = exports.default = Input;

/***/ }),

/***/ "./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431259762
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/input/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/es6.function.name");

var _icon = _interopRequireDefault(__webpack_require__("./components/icon/index.js"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      type = _self$get.type,
      name = _self$get.name,
      value = _self$get.value,
      placeholder = _self$get.placeholder,
      tabindex = _self$get.tabindex,
      readonly = _self$get.readonly,
      clearable = _self$get.clearable,
      disabled = _self$get.disabled,
      size = _self$get.size,
      nativeProps = _self$get.nativeProps,
      rows = _self$get.rows,
      spellcheck = _self$get.spellcheck,
      defaultValue = _self$get.defaultValue,
      style = _self$get.style,
      _width = _self$get._width,
      className = _self$get.className,
      autoWidth = _self$get.autoWidth,
      fluid = _self$get.fluid,
      width = _self$get.width,
      autocomplete = _self$get.autocomplete;

  var classNameObj = (_classNameObj = {
    'k-input': true
  }, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-group'] = blocks.prepend || blocks.append, _classNameObj['k-disabled'] = disabled, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = blocks.suffix, _classNameObj['k-clearable'] = clearable, _classNameObj['k-auto-width'] = autoWidth, _classNameObj['k-fluid'] = fluid, _classNameObj[className] = className, _classNameObj);
  var events = ['keydown', 'keyup', 'change', 'keypress', 'focus', 'blur'].reduce(function (memo, name) {
    memo["ev-" + name] = self._proxyEvent.bind(self, name);
    return memo;
  }, {});
  var wrapperEvents = ['click', 'mouseenter', 'mouseleave'].reduce(function (memo, name) {
    memo["ev-" + name] = self._proxyEvent.bind(self, name);
    return memo;
  }, {});
  return h('div', (0, _assign.default)({
    'style': function () {
      try {
        return width != null ? (0, _utils.addStyle)(style, {
          width: width + "px"
        }) : style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return wrapperEvents;
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      var children;
      return blocks.prepend ? (children = blocks.prepend.call(this, function () {}), h('div', null, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), _className(function () {
        try {
          return {
            "k-prepend": true,
            "k-padding": (0, _utils.isTextChildren)(children)
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)))) : void 0;
    } catch (e) {
      _e(e);
    }
  }.call($this), h('div', null, [function () {
    try {
      return blocks.prefix;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['prefix'] = function (parent) {
    return null;
  }) && (__blocks['prefix'] = function (parent) {
    var args = arguments;
    return blocks['prefix'] ? blocks['prefix'].apply($this, [function () {
      return _blocks['prefix'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
  }) && __blocks['prefix'].apply($this, [__noop]), 'k-prefix') : undefined, function () {
    try {
      return type !== 'textarea';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('input', (0, _assign.default)({}, function () {
    try {
      return nativeProps || {};
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'type': function () {
      try {
        return type;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'name': function () {
      try {
        return name;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return value;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'defaultValue': function () {
      try {
        return defaultValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'readOnly': function () {
      try {
        return readonly;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'placeholder': function () {
      try {
        return placeholder;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return tabindex;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'autocomplete': function () {
      try {
        return autocomplete;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return (0, _utils.getRestProps)(self, events);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return autoWidth ? {
          width: _width + 'px'
        } : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-input': function () {
      try {
        return self._onInput;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), null, 'k-inner', null, function (i) {
    widgets['input'] = i;
  }) : h('textarea', (0, _assign.default)({}, function () {
    try {
      return nativeProps || {};
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'value': function () {
      try {
        return value;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'defaultValue': function () {
      try {
        return defaultValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'name': function () {
      try {
        return name;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'readOnly': function () {
      try {
        return readonly;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'placeholder': function () {
      try {
        return placeholder;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'rows': function () {
      try {
        return rows;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'spellcheck': function () {
      try {
        return spellcheck;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return tabindex;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return (0, _utils.getRestProps)(self, events);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-input': function () {
      try {
        return self._onInput;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), null, 'k-inner k-textarea', null, function (i) {
    widgets['input'] = i;
  }), function () {
    try {
      return blocks.suffix || clearable;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [function () {
    try {
      return clearable;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(_icon.default, {
    'className': _className(function () {
      try {
        return {
          "k-clear ion-ios-close": true,
          "k-show": value
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    '_context': $this,
    'ev-click': function () {
      try {
        return self.clear;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined, function () {
    try {
      return ' ';
    } catch (e) {
      _e(e);
    }
  }.call($this), (_blocks['suffix'] = function (parent) {
    return null;
  }) && (__blocks['suffix'] = function (parent) {
    var args = arguments;
    return blocks['suffix'] ? blocks['suffix'].apply($this, [function () {
      return _blocks['suffix'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
  }) && __blocks['suffix'].apply($this, [__noop])], 'k-suffix') : undefined, function () {
    try {
      return autoWidth;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return value == null || value === '' ? placeholder : value;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-fake', null, function (i) {
    widgets['fake'] = i;
  }) : undefined], 'k-wrapper'), function () {
    try {
      var children;
      return blocks.append ? (children = blocks.append.call(this, function () {}), h('div', null, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), _className(function () {
        try {
          return {
            "k-append": true,
            "k-padding": (0, _utils.isTextChildren)(children)
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)))) : void 0;
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/input/search.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _search = _interopRequireDefault(__webpack_require__("./components/input/search.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/input/search.styl");

var _utils = __webpack_require__("./components/utils.js");

var _dec, _class, _init, _class2, _temp;

var Search = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Search, _Intact);

  function Search() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.defaults = function defaults() {
    return {
      placeholder: (0, _utils._$)('请输入关键字'),
      value: '',
      type: 'default',
      size: 'default',
      _open: false
    };
  };

  _proto._mount = function _mount() {
    document.addEventListener('click', this._onDocumentClick);
  };

  _proto._onDocumentClick = function _onDocumentClick(e) {
    var target = e.target;
    var elem = this.element;
    if (target === elem || elem.contains(target)) return;

    this._hide();
  };

  _proto._open = function _open() {
    this.set('_open', true);
    this.refs.input.select();
  };

  _proto._hide = function _hide() {
    this.set('_open', false);
  };

  _proto._onClickBtn = function _onClickBtn() {
    // if the box is open, then submit the form
    if (this.get('_open')) {
      this._submit();
    } else {
      this._open();
    }
  };

  _proto._onChangeValue = function _onChangeValue(c, v) {
    if (!this.get('_open')) return;
    this.set('value', v);
  };

  _proto._onSubmit = function _onSubmit(e) {
    e.preventDefault();

    this._submit();
  };

  _proto._submit = function _submit() {
    this.trigger('submit', this.get('value').trim());
  };

  _proto._destroy = function _destroy() {
    document.removeEventListener('click', this._onDocumentClick);
  };

  return Search;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _search.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  placeholder: String,
  value: String,
  type: ['default', 'line'],
  size: ['large', 'default', 'small', 'mini']
}), (0, _defineProperty2.default)(_class2, "events", {
  submit: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.default = Search;

/***/ }),

/***/ "./components/input/search.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431260709
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/input/search.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _ = _interopRequireDefault(__webpack_require__("./components/input/index.js"));

var _icon = _interopRequireDefault(__webpack_require__("./components/icon/index.js"));

var _button = _interopRequireDefault(__webpack_require__("./components/button/index.js"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      _open = _self$get._open,
      placeholder = _self$get.placeholder,
      value = _self$get.value,
      type = _self$get.type,
      size = _self$get.size;

  var classNameObj = (_classNameObj = {
    'k-search': true
  }, _classNameObj[className] = className, _classNameObj['k-open'] = _open, _classNameObj['k-hide'] = !_open, _classNameObj["k-" + type] = type !== 'default', _classNameObj);
  return h('form', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-submit': function () {
      try {
        return self._onSubmit;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h(_.default, {
    'clearable': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['input'] = i;
    },
    'placeholder': function () {
      try {
        return _open ? placeholder : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return _open ? value : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'readonly': function () {
      try {
        return !_open;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': 'k-with-suffix',
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeValue;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(_button.default, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(_icon.default, {
      'className': 'ion-ios-search k-search-icon',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._onClickBtn;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  })], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/link/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Link = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.regexp.replace");

__webpack_require__("core-js/modules/es6.regexp.search");

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/link/index.vdt"));

var _dec, _class, _class2, _temp;

var Link = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Link, _Intact);

  function Link() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.defaults = function defaults() {
    return {
      href: undefined,
      name: undefined,
      isReplace: false
    };
  };

  _proto.to = function to(e) {
    e.preventDefault();
    this.trigger('click', e);
    var href = this.get('href');
    var name = this.get('name');
    var history = Link.history;
    var url;

    if (href != null) {
      url = href;
    } else if (name != null) {
      if ((0, _isArray.default)(name)) {
        url = Link.url.apply(Link.url, name);
      } else {
        url = Link.url(name);
      }
    }

    if (url) {
      // if the href is equal to the current href, then do nothing
      var _history$location = history.location,
          pathname = _history$location.pathname,
          search = _history$location.search;
      if (pathname + search === url) return;

      if (this.get('isReplace')) {
        history.replace(url);
      } else {
        history.push(url);
      }
    }
  };

  (0, _createClass2.default)(Link, [{
    key: "template",
    get: function get() {
      return _index.default;
    }
  }]);
  return Link;
}(_intact.default), (0, _defineProperty2.default)(_class2, "history", undefined), (0, _defineProperty2.default)(_class2, "propTypes", {
  href: String,
  name: [String, Array],
  isReplace: Boolean
}), (0, _defineProperty2.default)(_class2, "events", {
  click: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.Link = exports.default = Link;

/***/ }),

/***/ "./components/link/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className;

  return h('a', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-click': function () {
      try {
        return self.to;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return self.get('children');
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return className;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/moveWrapper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MoveWrapper = exports.default = void 0;

__webpack_require__("core-js/modules/es6.regexp.split");

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var MoveWrapper =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(MoveWrapper, _Intact);

  function MoveWrapper() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = MoveWrapper.prototype;

  _proto.template = function template(self, Vdt) {
    var children = self.get('children');
    return children || Vdt.miss.hc('MoveWrapper');
  };

  _proto.defaults = function defaults() {
    return {
      autoDestroy: true,
      container: undefined
    };
  };

  _proto.init = function init() {
    var _Intact$prototype$ini;

    // we must append the element before _mount lifecycles of children are called
    this.mountedQueue.push(this._appendElement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Intact$prototype$ini = _Intact.prototype.init).call.apply(_Intact$prototype$ini, [this].concat(args));

    return this.placeholder = document.createComment("placeholder");
  };

  _proto.hydrate = function hydrate() {
    var _Intact$prototype$hyd;

    this.mountedQueue.push(this._appendElement);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (_Intact$prototype$hyd = _Intact.prototype.hydrate).call.apply(_Intact$prototype$hyd, [this].concat(args));

    return this.placeholder = document.createComment('placeholder');
  };

  _proto.update = function update(lastVNode, nextVNode) {
    _Intact.prototype.update.call(this, lastVNode, nextVNode);

    return this.placeholder;
  };

  _proto.destroy = function destroy() {
    if (this.get('autoDestroy')) {
      this._$destroy.apply(this, arguments);
    }
  }
  /**
   * @brief override super destroy 
   *
   * MoveWraper component has changed the dom struction.
   * It is always the top level dom, so we should 
   * remove it from parent dom. By passing the container
   * to remove function can do this. We can't remove it
   * directly by calling removeChild method, beacause it
   * maybe have leave animation.
   *
   * @param ...args
   */
  ;

  _proto._$destroy = function _$destroy(lastVNode, nextVNode) {
    // if (this.destroyed) {
    // return console.warn('destroyed multiple times');
    // }
    if (this.rendered && (!nextVNode || !(nextVNode.type & _intact.default.Vdt.miss.Types.ComponentClassOrInstance) || nextVNode.key !== lastVNode.key)) {
      _intact.default.Vdt.miss.remove(this.vdt.vNode, this.container);
    }

    this._destroy(lastVNode, nextVNode);

    this.destroyed = true;
    this.trigger('$destroyed', this);
    this.off();
  };

  _proto._appendElement = function _appendElement() {
    var container = this.get('container');

    if (container) {
      if (typeof container === 'string') {
        this.container = document.querySelector(container);
      } else {
        this.container = container(this.placeholder);
      }
    }

    if (!this.container) {
      // find the closest dialog if exists
      var dom = this.placeholder;
      var found;

      while ((dom = dom.parentNode) && dom.nodeType === 1) {
        if (dom.className && dom.className.split(' ').indexOf('k-dialog') > -1) {
          found = dom;
          break;
        }
      }

      this.container = found || document.body;
    }

    this.container.appendChild(this.element);
    this.trigger('appended');
  };

  return MoveWrapper;
}(_intact.default);

exports.MoveWrapper = exports.default = MoveWrapper;
(0, _defineProperty2.default)(MoveWrapper, "propTypes", {
  autoDestroy: Boolean,
  container: [Function, String]
});

/***/ }),

/***/ "./components/moveWrapper/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getDocumentOrWindowRect = getDocumentOrWindowRect;
exports.scrollbarWidth = scrollbarWidth;
exports.position = exports.default = position;

__webpack_require__("core-js/modules/web.dom.iterable");

__webpack_require__("core-js/modules/es6.regexp.split");

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _parseInt2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/parse-int"));

var _parseFloat2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/parse-float"));

var max = Math.max;
var abs = Math.abs;
var rHorizontal = /left|center|right/;
var rVertical = /top|center|bottom/;
var rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
var rPosition = /^\w+/;
var rPercent = /%$/;

function getDimensions(elem) {
  if (elem.nodeType === 9) {
    // document
    var _getDocumentOrWindowR = getDocumentOrWindowRect(elem),
        width = _getDocumentOrWindowR.width,
        height = _getDocumentOrWindowR.height;

    return {
      width: width,
      height: height,
      offset: {
        top: 0,
        left: 0
      }
    };
  } else if (elem === window) {
    var _getDocumentOrWindowR2 = getDocumentOrWindowRect(elem),
        _width = _getDocumentOrWindowR2.width,
        _height = _getDocumentOrWindowR2.height;

    return {
      width: _width,
      height: _height,
      offset: {
        top: elem.pageYOffset,
        left: elem.pageXOffset
      }
    };
  } else if (elem.preventDefault) {
    // event
    return {
      width: 0,
      height: 0,
      offset: {
        top: elem.pageY,
        left: elem.pageX
      }
    };
  } // dom


  var rect = elem.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    }
  };
}

function getDocumentOrWindowRect(elem) {
  if (elem === window) {
    var _d = elem.document.documentElement;
    return {
      width: _d.clientWidth,
      height: _d.clientHeight
    };
  }

  var d = elem.documentElement;
  var b = elem.body;
  return {
    width: max(b.scrollWidth, d.scrollWidth, b.offsetWidth, d.offsetWidth, d.clientWidth),
    height: max(b.scrollHeight, d.scrollHeight, b.offsetHeight, d.offsetHeight, d.clientHeight)
  };
}

function getOffsets(offsets, width, height) {
  return [(0, _parseFloat2.default)(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1), (0, _parseFloat2.default)(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1)];
} // reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript


var _scrollBarWidth;

function scrollbarWidth() {
  if (_scrollBarWidth !== undefined) {
    return _scrollBarWidth;
  }

  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth; // force scrollbars

  outer.style.overflow = "scroll"; // add innerdiv

  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth; // remove divs

  outer.parentNode.removeChild(outer);
  return _scrollBarWidth = widthNoScroll - widthWithScroll;
}

function getScrollInfo(within) {
  var overflowX = within.isWindow || within.isDocument ? '' : within.element.style.overflowX;
  var overflowY = within.isWindow || within.isDocument ? '' : within.element.style.overflowY;
  var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element.scrollWidth;
  var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element.scrollHeight;
  return {
    width: hasOverflowY ? scrollbarWidth() : 0,
    height: hasOverflowX ? scrollbarWidth() : 0
  };
}

function getWithinInfo(element) {
  element || (element = window);
  var isWindow = element === window;
  var isDocument = element.nodeType === 9;
  var hasOffset = !isWindow && !isDocument;
  var ret = {
    element: element,
    isWindow: isWindow,
    isDocument: isDocument
  };

  if (hasOffset) {
    var rect = element.getBoundingClientRect();
    ret.offset = {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
    ret.width = rect.width;
    ret.height = rect.height;
    ret.scrollLeft = element.scrollLeft;
    ret.scrollTop = element.scrollTop;
  } else {
    ret.offset = {
      top: 0,
      left: 0
    };

    var _rect = getDocumentOrWindowRect(element);

    ret.width = _rect.width;
    ret.height = _rect.height;
    ret.scrollLeft = window.pageXOffset;
    ret.scrollTop = window.pageYOffset;
  }

  return ret;
}

function parseCss(style, property) {
  return (0, _parseInt2.default)(style[property], 10) || 0;
}

function position(elem, options) {
  options = (0, _assign.default)({}, options);
  var target = options.of || window;

  if (target.preventDefault) {
    options.at = "left top";
  }

  var _getDimensions = getDimensions(target),
      targetWidth = _getDimensions.width,
      targetHeight = _getDimensions.height,
      targetOffset = _getDimensions.offset;

  var basePosition = (0, _assign.default)({}, targetOffset);
  var collision = (options.collision || 'flip').split(' ');
  var offsets = {};
  var within = getWithinInfo(options.within);
  var scrollInfo = getScrollInfo(within);
  ['my', 'at'].forEach(function (item) {
    var pos = (options[item] || '').split(' ');

    if (pos.length === 1) {
      pos = rHorizontal.test(pos[0]) ? pos.concat(['center']) : rVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
    }

    pos[0] = rHorizontal.test(pos[0]) ? pos[0] : 'center';
    pos[1] = rVertical.test(pos[1]) ? pos[1] : 'center';
    var horizontalOffset = rOffset.exec(pos[0]);
    var verticalOffset = rOffset.exec(pos[1]);
    offsets[item] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
    options[item] = [rPosition.exec(pos[0])[0], rPosition.exec(pos[1])[0]];
  });

  if (collision.length === 1) {
    collision[1] = collision[0];
  }

  var at = options.at;

  if (at[0] === 'right') {
    basePosition.left += targetWidth;
  } else if (at[0] === 'center') {
    basePosition.left += targetWidth / 2;
  }

  if (at[1] === 'bottom') {
    basePosition.top += targetHeight;
  } else if (at[1] === 'center') {
    basePosition.top += targetHeight / 2;
  }

  var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
  basePosition.left += atOffset[0];
  basePosition.top += atOffset[1]; // maybe it has scaled, so we use getBoundingClientRect

  var _elem$getBoundingClie = elem.getBoundingClientRect(),
      elemWidth = _elem$getBoundingClie.width,
      elemHeight = _elem$getBoundingClie.height; // const elemWidth = elem.offsetWidth;
  // const elemHeight = elem.offsetHeight;


  var position = (0, _assign.default)({}, basePosition);
  var myOffset = getOffsets(offsets.my, elemWidth, elemHeight);
  var computedStyle = window.getComputedStyle(elem);
  var marginLeft = parseCss(computedStyle, 'marginLeft');
  var marginTop = parseCss(computedStyle, 'marginTop');
  var collisionWidth = elemWidth + marginLeft + parseCss(computedStyle, 'marginRight') + scrollInfo.width;
  var collisionHeight = elemHeight + marginTop + parseCss(computedStyle, 'marginBottom') + scrollInfo.height;
  var collisionPosition = {
    marginLeft: marginLeft,
    marginTop: marginTop
  };
  var my = options.my;

  if (my[0] === 'right') {
    position.left -= elemWidth;
  } else if (my[0] === 'center') {
    position.left -= elemWidth / 2;
  }

  if (my[1] === 'bottom') {
    position.top -= elemHeight;
  } else if (my[1] === 'center') {
    position.top -= elemHeight / 2;
  }

  position.left += myOffset[0];
  position.top += myOffset[1];
  var collisionDirection = options.collisionDirection || ['left', 'top'];
  collisionDirection.forEach(function (dir, i) {
    var coll = collision[i];

    if (rules[coll]) {
      rules[coll][dir](position, {
        targetWidth: targetWidth,
        targetHeight: targetHeight,
        elemWidth: elemWidth,
        elemHeight: elemHeight,
        collisionPosition: collisionPosition,
        collisionWidth: collisionWidth,
        collisionHeight: collisionHeight,
        offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
        my: options.my,
        at: options.at,
        within: within,
        elem: elem
      });
    }
  });

  if (options.using) {
    var left = targetOffset.left - position.left;
    var right = left + targetWidth - elemWidth;
    var top = targetOffset.top - position.top;
    var bottom = top + targetHeight - elemHeight;
    var feedback = {
      target: {
        element: target,
        left: targetOffset.left,
        top: targetOffset.top,
        width: targetWidth,
        height: targetHeight
      },
      element: {
        element: elem,
        left: position.left,
        top: position.top,
        width: elemWidth,
        height: elemHeight
      },
      horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
      vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
    };

    if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
      feedback.horizontal = 'center';
    }

    if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
      feedback.vertical = 'middle';
    }

    if (position.top + elemHeight <= targetOffset.top || position.top >= targetOffset.top + targetHeight) {
      feedback.important = 'vertical';
    } else if (position.left + elemWidth <= targetOffset.left || position.left >= targetOffset.left + targetWidth) {
      feedback.important = 'horizontal';
    } else if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
      feedback.important = 'horizontal';
    } else {
      feedback.important = 'vertical';
    }

    options.using(feedback, position);
  }

  var style = elem.style;

  if (computedStyle.position === 'static') {
    style.position = 'relative';
  }

  var curOffset = getDimensions(elem).offset;
  var curCSSTop = computedStyle.top;
  var curCSSLeft = computedStyle.left;
  style.left = position.left - curOffset.left + ((0, _parseFloat2.default)(curCSSLeft) || 0) + 'px';
  style.top = position.top - curOffset.top + ((0, _parseFloat2.default)(curCSSTop) || 0) + 'px';
}

var rules = {
  fit: {
    left: function left(position, data) {
      var within = data.within;
      var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
      var outerWidth = within.width;
      var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
      var overLeft = withinOffset - collisionPosLeft;
      var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
      var newOverRight;

      if (data.collisionWidth > outerWidth) {
        if (overLeft > 0 && overRight <= 0) {
          newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
          position.left += overLeft - newOverRight;
        } else if (overRight > 0 && overLeft <= 0) {
          position.left = withinOffset;
        } else if (overLeft > overRight) {
          position.left = withinOffset + outerWidth - data.collisionWidth;
        } else {
          position.left = withinOffset;
        }
      } else if (overLeft > 0) {
        position.left += overLeft;
      } else if (overRight > 0) {
        position.left -= overRight;
      } else {
        position.left = max(position.left - collisionPosLeft, position.left);
      }
    },
    top: function top(position, data) {
      var within = data.within;
      var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
      var outerHeight = data.within.height;
      var collisionPosTop = position.top - data.collisionPosition.marginTop;
      var overTop = withinOffset - collisionPosTop;
      var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
      var newOverBottom;

      if (data.collisionHeight > outerHeight) {
        if (overTop > 0 && overBottom <= 0) {
          newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
          position.top += overTop - newOverBottom;
        } else if (overBottom > 0 && overTop <= 0) {
          position.top = withinOffset;
        } else if (overTop > overBottom) {
          position.top = withinOffset + outerHeight - data.collisionHeight;
        } else {
          position.top = withinOffset;
        }
      } else if (overTop > 0) {
        position.top += overTop;
      } else if (overBottom > 0) {
        position.top -= overBottom;
      } else {
        position.top = max(position.top - collisionPosTop, position.top);
      }
    }
  },
  flip: {
    left: function left(position, data) {
      var within = data.within;
      var withinOffset = within.offset.left + within.scrollLeft;
      var outerWidth = within.width;
      var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
      var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
      var overLeft = collisionPosLeft - offsetLeft;
      var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
      var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
      var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
      var offset = -2 * data.offset[0];
      var newOverRight;
      var newOverLeft;

      if (overLeft < 0) {
        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;

        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
          position.left += myOffset + atOffset + offset;
        }
      } else if (overRight > 0) {
        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft; // the same to top
        // if (newOverLeft > 0 || abs(newOverLeft) < overRight) {

        if (newOverLeft > 0) {
          position.left += myOffset + atOffset + offset;
        }
      }
    },
    top: function top(position, data) {
      var within = data.within;
      var withinOffset = within.offset.top + within.scrollTop;
      var outerHeight = within.height;
      var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
      var collisionPosTop = position.top - data.collisionPosition.marginTop;
      var overTop = collisionPosTop - offsetTop;
      var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
      var myOffset = data.my[1] === 'top' ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
      var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
      var offset = -2 * data.offset[1];
      var newOverTop;
      var newOverBottom;

      if (overTop < 0) {
        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;

        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
          position.top += myOffset + atOffset + offset;
        }
      } else if (overBottom > 0) {
        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop; // because window can scroll down, when it beyond the top border,
        // we can not scroll it to view. Don't flip it in this case
        // if (newOverTop > 0 || abs(newOverTop) < overBottom) {

        if (newOverTop > 0) {
          position.top += myOffset + atOffset + offset;
        }
      }
    }
  },
  flipfit: {
    left: function left() {
      var _rules$flip, _rules$fit;

      (_rules$flip = rules.flip).left.apply(_rules$flip, arguments);

      (_rules$fit = rules.fit).left.apply(_rules$fit, arguments);
    },
    top: function top() {
      var _rules$flip2, _rules$fit2;

      (_rules$flip2 = rules.flip).top.apply(_rules$flip2, arguments);

      (_rules$fit2 = rules.fit).top.apply(_rules$fit2, arguments);
    }
  }
};

/***/ }),

/***/ "./components/radio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Radio = exports.default = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/radio/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/radio/index.styl");

var Radio =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Radio, _Intact);

  function Radio() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Radio.prototype;

  _proto.defaults = function defaults() {
    return {
      disabled: false,
      value: false,
      trueValue: true
    };
  };

  _proto.isChecked = function isChecked() {
    return this.get('value') === this.get('trueValue');
  };

  _proto._destroy = function _destroy() {// we should not change data in _destroy
    // if (this.isChecked()) {
    // this.set('value', undefined);
    // }
  };

  _proto._onKeypress = function _onKeypress(e) {
    if (e.keyCode === 13) {
      this.refs.input.click();
    }
  };

  (0, _createClass2.default)(Radio, [{
    key: "template",
    get: function get() {
      return _index.default;
    }
  }]);
  return Radio;
}(_intact.default);

exports.Radio = exports.default = Radio;
(0, _defineProperty2.default)(Radio, "propTypes", {
  disabled: Boolean
});

/***/ }),

/***/ "./components/radio/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431262189
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/radio/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/es6.function.name");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      disabled = _self$get.disabled,
      trueValue = _self$get.trueValue,
      style = _self$get.style,
      children = _self$get.children,
      value = _self$get.value,
      ref = _self$get.ref,
      key = _self$get.key,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_self$get, ["className", "disabled", "trueValue", "style", "children", "value", "ref", "key"]);

  var classNameObj = (_classNameObj = {
    'k-radio': true,
    'k-disabled': disabled,
    'k-checked': self.isChecked()
  }, _classNameObj[className] = className, _classNameObj);
  var events = [// do not bind click to label, otherwise it will trigger click event twice

  /* 'ev-click', */
  'ev-mouseenter', 'ev-mouseleave'].reduce(function (memo, name) {
    if (rest[name]) {
      memo[name] = rest[name];
      delete rest[name];
    }

    return memo;
  }, {});
  return h('label', (0, _assign.default)({
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return disabled ? "-1" : "0";
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return events;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-keypress': function () {
      try {
        return self._onKeypress;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h('span', null, h('input', (0, _assign.default)({
    'type': 'radio',
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return trueValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': '-1'
  }, function () {
    try {
      return (0, _utils.getRestProps)(self, rest);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'checked': _getModel(self, 'value') === function () {
      try {
        return trueValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-change': function evChange(__e) {
      _setModel(self, 'value', __e.target.checked ? function () {
        try {
          return trueValue;
        } catch (e) {
          _e(e);
        }
      }.call($this) : false, $this);
    }
  }), null, null, null, function (i) {
    widgets['input'] = i;
  }), 'k-wrapper'), function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-text') : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/select/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _group = _interopRequireDefault(__webpack_require__("./components/select/group.vdt"));

var _dec, _class, _init, _class2, _temp;

var OptionGroup = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(OptionGroup, _Intact);

  function OptionGroup() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = OptionGroup.prototype;

  _proto.defaults = function defaults() {
    return {
      label: '',
      _card: false
    };
  };

  return OptionGroup;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _group.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  label: [String, Number, _intact.default.VNode]
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.default = OptionGroup;

/***/ }),

/***/ "./components/select/group.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose"));

function _default(obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      children = _self$get.children,
      label = _self$get.label,
      _card = _self$get._card,
      className = _self$get.className,
      key = _self$get.key,
      ref = _self$get.ref,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_self$get, ["children", "label", "_card", "className", "key", "ref"]);

  return h('div', (0, _assign.default)({}, function () {
    try {
      return rest;
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return !_card;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['label'] = function (parent) {
    return function () {
      try {
        return label;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['label'] = function (parent) {
    var args = arguments;
    return blocks['label'] ? blocks['label'].apply($this, [function () {
      return _blocks['label'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['label'].apply($this, args);
  }) && __blocks['label'].apply($this, [__noop]), 'k-label') : undefined, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      var _ref;

      return _ref = {
        "k-group": true
      }, _ref[className] = className, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Select = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

__webpack_require__("core-js/modules/es6.number.constructor");

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./components/select/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/select/index.styl");

var _option = _interopRequireDefault(__webpack_require__("./components/select/option.js"));

exports.Option = _option.default;

var _group = _interopRequireDefault(__webpack_require__("./components/select/group.js"));

exports.OptionGroup = _group.default;

var _utils = __webpack_require__("./components/utils.js");

var _dec, _class, _init, _class2, _temp;

var Select = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Select, _Intact);

  function Select() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Select.prototype;

  _proto.defaults = function defaults() {
    return {
      data: [],
      value: '',
      multiple: false,
      // 是否支持多选
      disabled: false,
      clearable: false,
      // 是否可清空 
      filterable: false,
      // 搜索筛选
      filter: function filter(keywords, props) {
        var valid = false;
        var tmp;

        if (keywords == null || props.label && ~props.label.toLowerCase().indexOf(tmp = keywords.toLowerCase()) || (0, _utils.isStringOrNumber)(props.value) && ~String(props.value).toLowerCase().indexOf(tmp)) {
          valid = true;
        }

        return valid;
      },
      keywords: undefined,
      placeholder: undefined,
      size: 'default',
      fluid: false,
      width: undefined,
      allowUnmatch: false,
      card: false,
      // 卡片式分组
      container: undefined,
      inline: false,
      loading: false,
      hideIcon: false,
      _show: false,
      _activeLabel: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.on('$changed:value', function () {
      if (_this.get('multiple') && _this.get('_show')) {
        _this.refs.menu.position();
      }
    });
  };

  _proto._onClear = function _onClear(e) {
    e.stopPropagation();
    this.set('value', '');
  };

  _proto._onSelect = function _onSelect(value) {
    if (!this.get('multiple')) {
      this.set('value', value, {
        async: true
      });
    } else {
      var values = this.get('value');
      values = (0, _utils.toggleArray)(values, value);
      this.set('value', values, {
        async: true
      });

      this._focusInput();
    }

    this._resetSearch();
  };

  _proto._onSearch = function _onSearch(e) {
    this.set('keywords', e.target.value.trim()); // always show menu on searching

    this.refs.menu.show();
    this.refs.menu.focusItemByIndex(0); // the position may be flip, and the select input height my change height too,
    // so we should reset the position

    this.refs.menu.position();
  };

  _proto._resetSearch = function _resetSearch() {
    this.set('keywords', undefined, {
      async: true
    });
  };

  _proto._onChangeShow = function _onChangeShow(c, value) {
    this.set('_show', value); // reset the _activeLabel if show

    this._setActiveLabelSilent(undefined);
  }
  /**
   * @brief let the blur method be called after select
   * if we have selected the option, then the keywords have been set to undefined
   * in this case, we do nothing, otherwise we reset it
   */
  ;

  _proto._onBlur = function _onBlur() {
    var _this2 = this;

    var _this$get = this.get(),
        keywords = _this$get.keywords,
        allowUnmatch = _this$get.allowUnmatch;

    if (allowUnmatch && keywords != null) {
      this.set({
        value: keywords
      });
    }

    this.timer = setTimeout(function () {
      if (_this2.get('keywords') != null) {
        _this2._resetSearch();
      }
    }, 200);
  };

  _proto._selectInput = function _selectInput(e) {
    (0, _utils.selectInput)(e.target);
  };

  _proto._onFocus = function _onFocus(e) {
    clearTimeout(this.timer);
  };

  _proto._onFocusout = function _onFocusout() {
    this.refs.dropdown.hide();
  };

  _proto._delete = function _delete(value, e) {
    e.stopPropagation();
    var values = this.get('value').slice(0);
    var index = values.indexOf(value);
    values.splice(index, 1);
    this.set('value', values);

    this._focusInput();
  };

  _proto._focusInput = function _focusInput() {
    if (this.get('filterable')) {
      this.refs.input.focus();
    }
  };

  _proto._position = function _position() {
    var menuElement = this.refs.menu.vdt.vNode.children.element;
    var width = this.element.offsetWidth;
    var menuWidth = menuElement.offsetWidth;

    if (width > menuWidth) {
      menuElement.style.width = width + "px";
    }
  };

  _proto._onKeypress = function _onKeypress(e) {
    this.trigger('keypress', e);

    if (e.keyCode === 13) {
      this.refs.wrapper.click();
    }
  };

  _proto._onKeydown = function _onKeydown(e) {
    this.trigger('keydown', e);

    if (e.keyCode === 9) {
      // tab
      this.refs.dropdown.hide();
    }
  };

  _proto._clearValue = function _clearValue() {
    this.set('value', '', {
      update: false
    });
  };

  _proto._setActiveLabelSilent = function _setActiveLabelSilent(label) {
    this.set('_activeLabel', label, {
      silent: true
    });
  };

  _proto.handleProps = function handleProps(props, labelObj) {
    var _this$get2 = this.get(),
        multiple = _this$get2.multiple,
        value = _this$get2.value,
        filterable = _this$get2.filterable,
        keywords = _this$get2.keywords,
        filter = _this$get2.filter;

    var active = false;
    var valid = false;

    if (!multiple) {
      if (props.value === value) {
        // set label
        labelObj.label = props.label;
        active = true;
      } else {
        active = false;
      }
    } else if ((0, _isArray.default)(value)) {
      var index = value.indexOf(props.value);

      if (~index) {
        // keep order consistent
        labelObj.labels[index] = props.label;
        active = true;
      } else {
        active = false;
      }
    }

    if (!filterable || filter.call(this, keywords, props)) {
      valid = true;
    }

    return {
      active: active,
      valid: valid
    };
  };

  return Select;
}(_intact.default), (0, _defineProperty2.default)(_class2, "template", _index.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  data: Array,
  multiple: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filter: Function,
  keywords: String,
  placeholder: String,
  size: ['large', 'default', 'small', 'mini'],
  fluid: Boolean,
  width: [Number, String],
  allowUnmatch: Boolean,
  card: Boolean,
  container: [Function, String],
  inline: Boolean,
  loading: Boolean,
  hideIcon: Boolean
}), (0, _defineProperty2.default)(_class2, "events", {
  keypress: true,
  keydown: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
exports.Select = exports.default = Select;

/***/ }),

/***/ "./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431259538
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/select/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

__webpack_require__("core-js/modules/web.dom.iterable");

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

__webpack_require__("core-js/modules/es6.function.name");

var _input = _interopRequireDefault(__webpack_require__("./components/input/index.js"));

var _dropdown = _interopRequireWildcard(__webpack_require__("./components/dropdown/index.js"));

var _utils = __webpack_require__("./components/utils.js");

var _option = _interopRequireDefault(__webpack_require__("./components/select/option.js"));

var _group = _interopRequireDefault(__webpack_require__("./components/select/group.js"));

var _tabs = __webpack_require__("./components/tabs/index.js");

var _icon = _interopRequireDefault(__webpack_require__("./components/icon/index.js"));

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      clearable = _self$get.clearable,
      data = _self$get.data,
      value = _self$get.value,
      multiple = _self$get.multiple,
      disabled = _self$get.disabled,
      filterable = _self$get.filterable,
      keywords = _self$get.keywords,
      _show = _self$get._show,
      placeholder = _self$get.placeholder,
      size = _self$get.size,
      style = _self$get.style,
      name = _self$get.name,
      children = _self$get.children,
      fluid = _self$get.fluid,
      width = _self$get.width,
      allowUnmatch = _self$get.allowUnmatch,
      card = _self$get.card,
      hideIcon = _self$get.hideIcon,
      container = _self$get.container,
      inline = _self$get.inline,
      loading = _self$get.loading;

  var _activeLabel = self.get('_activeLabel');

  var _placeholder = placeholder == null ? allowUnmatch && filterable ? (0, _utils._$)('请输入或选择') : (0, _utils._$)('请选择') : placeholder;

  var classNameObj = (_classNameObj = {
    'k-select': true
  }, _classNameObj[className] = className, _classNameObj[scope.className] = scope.className, _classNameObj['k-disabled'] = disabled, _classNameObj['k-show'] = _show, _classNameObj['k-clearable'] = clearable, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-fluid'] = fluid, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = !hideIcon || loading || blocks.suffix, _classNameObj['k-inline'] = inline, _classNameObj);
  var hasValue = value != null && (!multiple && value !== '' || multiple && value.length);
  var isGroup = (0, _isArray.default)(self.get('data.0.data'));
  var labelObj = scope.labelObj || {
    // only show value as label when allowUnmatch is true, #40
    label: allowUnmatch && (0, _utils.isStringOrNumber)(value) ? value : null,
    labels: []
  };
  var groupIndex = 0;
  var hasData = isGroup;

  var Options = function Options(props) {
    var data = props.data;
    var ret = [];
    data.forEach(function (item, index) {
      // deprecate text, use label instead of
      if (item.text) item.label = item.text;

      var _self$handleProps = self.handleProps(item, labelObj),
          valid = _self$handleProps.valid,
          active = _self$handleProps.active;

      if (valid) {
        ret.push(h(_dropdown.DropdownItem, {
          'disabled': function () {
            try {
              return item.disabled;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'className': _className(function () {
            try {
              return {
                'k-active': active
              };
            } catch (e) {
              _e(e);
            }
          }.call($this)),
          'hideOnSelect': function () {
            try {
              return !multiple;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'children': function () {
            try {
              return item.template ? item.template(item, index) : item.label;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-select': function () {
            try {
              return self._onSelect.bind(self, item.value);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        })); // for card type groups, we need to highlight the parent label

        if (active && card) {
          if (_activeLabel == null && _show) {
            _activeLabel = groupIndex;

            self._setActiveLabelSilent(_activeLabel);
          }
        }

        hasData = true;
      }
    });
    return ret;
  };

  var OptionsVNodes = function OptionsVNodes(_ref) {
    var children = _ref.children;
    return __u.map(children ? (0, _isArray.default)(children) ? children : [children] : children, function (vNode) {
      if (vNode.tag === _option.default) {
        var props = vNode.props;
        props = (0, _assign.default)({}, props, {
          'ev-select': self._onSelect.bind(self, props.value),
          hideOnSelect: !multiple,
          label: props.label || (0, _utils.getTextByChildren)(props.children),
          children: props.children || props.label
        });

        var _self$handleProps2 = self.handleProps(props, labelObj),
            active = _self$handleProps2.active,
            valid = _self$handleProps2.valid;

        if (!valid) {
          return hc('');
        } else {
          var _className2;

          props.className = _className((_className2 = {}, _className2[props.className] = props.className, _className2['k-active'] = active, _className2));
          hasData = true;
        } // for card type groups, we need to highlight the parent label


        if (active && card) {
          if (_activeLabel == null && _show) {
            _activeLabel = groupIndex;

            self._setActiveLabelSilent(_activeLabel);
          }
        } // if the multiple select option is active
        // add a √ icon


        if (active && multiple) {
          props.children = [props.children, h('i', null, null, 'k-checkmark ion-ios-checkmark-empty')];
        } // return the cloned vNode


        return h(_option.default, props);
      } else if (vNode.tag === _group.default) {
        hasData = true;
        var _props = vNode.props;
        _props = (0, _assign.default)({}, _props, {
          children: h(OptionsVNodes, {
            'children': function () {
              try {
                return _props.children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          })
        });
        groupIndex++;
        return h(_group.default, _props);
      }

      return vNode;
    });
  };

  var labelList = [];
  var Menu = scope.Menu || h(_dropdown.DropdownMenu, {
    'ref': function ref(i) {
      widgets['menu'] = i;
    },
    'className': _className(function () {
      try {
        return {
          "k-select-dropdown": true,
          "k-card": card
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'children': function () {
      try {
        return function () {
          var _children = [];

          if (!isGroup) {
            _children.push(h(Options, {
              'data': function () {
                try {
                  return data;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              '_context': $this
            }));
          } else {
            _children.push(__m(function () {
              try {
                return data;
              } catch (e) {
                _e(e);
              }
            }.call($this), function (value, key) {
              return h(_group.default, {
                'label': function () {
                  try {
                    return value.label;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'children': h(Options, {
                  'data': function () {
                    try {
                      return value.data;
                    } catch (e) {
                      _e(e);
                    }
                  }.call($this),
                  'parentLabel': function () {
                    try {
                      return value.label;
                    } catch (e) {
                      _e(e);
                    }
                  }.call($this),
                  '_context': $this
                }),
                '_context': $this
              });
            }, $this));
          }

          _children.push(h(OptionsVNodes, {
            'children': function () {
              try {
                return children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          })); // if it is card type group, we extract the label as navBar


          if (card) {
            var flattenEach = function flattenEach(children) {
              children.forEach(function (vNode) {
                if ((0, _isArray.default)(vNode)) {
                  flattenEach(vNode);
                } else if (vNode) {
                  if (vNode.tag === _group.default) {
                    var props = vNode.props;
                    var label = (props._blocks || {}).label || props.label;
                    labelList.push({
                      label: label
                    });
                    vNode.props = (0, _assign.default)({}, props, {
                      _card: true
                    }); // if the _activeLabel is undefined
                    // we active the first label

                    if (_activeLabel == null && _show) {
                      _activeLabel = index;

                      self._setActiveLabelSilent(index);
                    } // only render the active options


                    if (_activeLabel === index) {
                      vNodes.push(vNode);
                    }

                    index++;
                  } else {
                    vNodes.push(vNode);
                  }
                }
              });
            };

            var vNodes = [];
            var index = 0;
            flattenEach(_children);
            _children = [h(_tabs.Tabs, {
              'vertical': function () {
                try {
                  return true;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'type': 'border-card',
              'children': __m(function () {
                try {
                  return labelList;
                } catch (e) {
                  _e(e);
                }
              }.call($this), function (value, key) {
                return h(_tabs.Tab, {
                  'value': function () {
                    try {
                      return key;
                    } catch (e) {
                      _e(e);
                    }
                  }.call($this),
                  'children': function () {
                    try {
                      return typeof value.label === 'function' ? // pass by block
                      value.label(_utils.noop) : // pass by property
                      value.label;
                    } catch (e) {
                      _e(e);
                    }
                  }.call($this),
                  '_context': $this
                });
              }, $this),
              '_context': $this,
              'value': _getModel(self, '_activeLabel'),
              'ev-$change:value': function ev$changeValue(__c, __n) {
                _setModel(self, '_activeLabel', __n, $this);
              }
            }), h('div', null, function () {
              try {
                return vNodes;
              } catch (e) {
                _e(e);
              }
            }.call($this), 'k-groups')];
          }

          if (!hasData) {
            return h('div', null, '无数据', 'k-no-data');
          }

          return _children;
        }();
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    'ev-$changed:value': function () {
      try {
        return self._position;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-$change:value': function () {
      try {
        return self._onChangeShow;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }); // if the value is not in options, then set hasValue to false

  if (hasValue && labelObj.label == null && !labelObj.labels.length) {
    hasValue = false; // if this is a value, but the value does not exist in options
    // we set it to empty, #41

    self._clearValue();
  }

  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return width != null ? (0, _utils.addStyle)(style, {
          width: width + "px"
        }) : style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return disabled ? "-1" : "0";
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keypress': function () {
      try {
        return self._onKeypress;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keydown': function () {
      try {
        return self._onKeydown;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(_dropdown.default, {
    'position': function () {
      try {
        return {
          my: 'left top+8',
          at: 'left bottom'
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'trigger': 'click',
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['dropdown'] = i;
    },
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [h('div', {
      'tabindex': '-1',
      'ev-click': function () {
        try {
          return self._focusInput;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, [function () {
      try {
        return blocks.prefix;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, (_blocks['prefix'] = function (parent) {
      return null;
    }) && (__blocks['prefix'] = function (parent) {
      var args = arguments;
      return blocks['prefix'] ? blocks['prefix'].apply($this, [function () {
        return _blocks['prefix'].apply($this, args);
      }].concat(__slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
    }) && __blocks['prefix'].apply($this, [__noop]), 'k-prefix') : undefined, h('div', null, [h('input', {
      'type': 'hidden',
      'value': function () {
        try {
          return value;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'name': function () {
        try {
          return name;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }), function () {
      try {
        return !multiple && filterable;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(_input.default, {
      'value': function () {
        try {
          return keywords == null ? labelObj.label : keywords;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'disabled': function () {
        try {
          return disabled;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'placeholder': function () {
        try {
          return _placeholder;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ref': function ref(i) {
        widgets['input'] = i;
      },
      'size': function () {
        try {
          return size;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'fluid': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this,
      'ev-input': function () {
        try {
          return self._onSearch;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-blur': function () {
        try {
          return self._onBlur;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-focus': function () {
        try {
          return self._selectInput;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }) : function () {
      try {
        return !filterable && !hasValue;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('span', null, function () {
      try {
        return _placeholder;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-placeholder c-ellipsis') : function () {
      try {
        return !multiple;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('span', null, function () {
      try {
        return labelObj.label;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-value c-ellipsis') : h(Animate, {
      'a:tag': 'span',
      'a:disabled': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': 'k-values',
      'children': [__m(function () {
        try {
          return labelObj.labels;
        } catch (e) {
          _e(e);
        }
      }.call($this), function (item, index) {
        return h(Animate, {
          'a:tag': 'span',
          'className': 'k-select-tag',
          'key': function () {
            try {
              return value[index];
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'a:transition': 'c-fade',
          'children': [h('span', null, function () {
            try {
              return item;
            } catch (e) {
              _e(e);
            }
          }.call($this), 'k-text'), h(_icon.default, {
            'className': 'ion-ios-close-empty',
            '_context': $this,
            'ev-click': function () {
              try {
                return self._delete.bind(self, value[index]);
              } catch (e) {
                _e(e);
              }
            }.call($this)
          })],
          '_context': $this
        });
      }, $this), function () {
        try {
          return filterable;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(_input.default, {
        'value': function () {
          try {
            return keywords;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'disabled': function () {
          try {
            return disabled;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'placeholder': function () {
          try {
            return !hasValue ? _placeholder : '';
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ref': function ref(i) {
          widgets['input'] = i;
        },
        'autoWidth': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'size': function () {
          try {
            return size;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'ev-input': function () {
          try {
            return self._onSearch;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-blur': function () {
          try {
            return self._onBlur;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-focus': function () {
          try {
            return self._onFocus;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }) : undefined],
      '_context': $this
    })], 'k-main'), function () {
      try {
        return !hideIcon || clearable || loading || blocks.suffix;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('span', null, [function () {
      try {
        return clearable;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(_icon.default, {
      'className': _className(function () {
        try {
          return {
            "k-clear ion-ios-close": true,
            "k-show": hasValue
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      '_context': $this,
      'ev-click': function () {
        try {
          return self._onClear;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }) : undefined, h('span', null, (_blocks['suffix'] = function (parent) {
      return function () {
        try {
          return loading;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(_icon.default, {
        'className': 'ion-load-c icon-loading',
        '_context': $this
      }) : function () {
        try {
          return !hideIcon;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('i', null, null, 'k-arrow ion-arrow-down-b') : undefined;
    }) && (__blocks['suffix'] = function (parent) {
      var args = arguments;
      return blocks['suffix'] ? blocks['suffix'].apply($this, [function () {
        return _blocks['suffix'].apply($this, args);
      }].concat(__slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
    }) && __blocks['suffix'].apply($this, [__noop]), 'k-suffix-icon')], 'k-suffix') : undefined], 'k-wrapper', null, function (i) {
      widgets['wrapper'] = i;
    }), function () {
      try {
        return Menu;
      } catch (e) {
        _e(e);
      }
    }.call($this)],
    '_context': $this
  }), _className(function () {
    try {
      return (0, _assign.default)({}, classNameObj, {
        'k-has-value': hasValue
      });
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/select/option.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var Option =
/*#__PURE__*/
function (_DropdownItem) {
  (0, _inheritsLoose2.default)(Option, _DropdownItem);

  function Option() {
    return _DropdownItem.apply(this, arguments) || this;
  }

  var _proto = Option.prototype;

  _proto.defaults = function defaults() {
    return (0, _assign.default)({}, _DropdownItem.prototype.defaults.call(this), {
      value: undefined,
      label: undefined
    });
  };

  return Option;
}(_dropdown.DropdownItem);

exports.default = Option;

/***/ }),

/***/ "./components/tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Tabs = exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _tab = _interopRequireDefault(__webpack_require__("./components/tabs/tab.js"));

exports.Tab = _tab.default;

var _index = _interopRequireDefault(__webpack_require__("./components/tabs/index.vdt"));

__webpack_require__("./styles/kpc.styl");

__webpack_require__("./components/tabs/index.styl");

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__("resize-observer-polyfill"));

var _utils = __webpack_require__("./components/utils.js");

var _dec, _class, _class2, _temp;

var Tabs = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Tabs, _Intact);

  function Tabs() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.defaults = function defaults() {
    return {
      data: undefined,
      value: undefined,
      vertical: false,
      size: 'default',
      type: 'default',
      closable: false,
      _activeBarStyle: undefined,
      _scroll: false,
      _left: 0,
      _prev: false,
      _next: false
    };
  };

  _proto._changeTab = function _changeTab(item) {
    // if exits 'to', we don't change the value,
    // while let the page to change it by pass value prop
    if (!item.to) {
      this.set('value', item.value);
    } else if (this.$router) {
      this.$router.push(item.to);
    } else {
      window.location.href = item.to;
    }
  };

  _proto._mount = function _mount() {
    var _this = this;

    this._setActiveBarStyle();

    this._refreshScroll();

    this.on('$changed:value', function () {
      // we scroll active tab to view next frame
      // because the _scroll property updates after it 
      (0, _utils.nextFrame)(function () {
        if (_this.destroyed) return;

        _this._scrollActiveToView();
      });
    }); // resize

    var ro = this.ro = new _resizeObserverPolyfill.default(function () {
      _this._refreshScroll();
    });
    ro.observe(this.element);
    this.$router = (0, _utils.findRouter)(this);
  };

  _proto._refreshScroll = function _refreshScroll() {
    var _this$get = this.get(),
        vertical = _this$get.vertical;

    if (vertical) return;
    var _this$refs = this.refs,
        scroll = _this$refs.scroll,
        wrapper = _this$refs.wrapper;
    var scrollWidth = scroll.offsetWidth;
    var wrapperWidth = wrapper.offsetWidth;
    this.set('_scroll', scrollWidth < wrapperWidth);

    this._setTransition();
  };

  _proto._setTransition = function _setTransition(_left) {
    if (_left === void 0) {
      _left = this.get('_left');
    }

    var _this$get2 = this.get(),
        vertical = _this$get2.vertical;

    if (vertical) return;
    var _this$refs2 = this.refs,
        scroll = _this$refs2.scroll,
        wrapper = _this$refs2.wrapper;
    var scrollWidth = scroll.offsetWidth;
    var wrapperWidth = wrapper.offsetWidth;
    var _prev = true;
    var _next = true;

    if (_left >= 0) {
      _left = 0;
      _prev = false;
    } else if (_left <= scrollWidth - wrapperWidth) {
      _left = scrollWidth - wrapperWidth;
      _next = false;
    }

    this.set({
      _left: _left,
      _prev: _prev,
      _next: _next
    });
  };

  _proto._update = function _update(lastVNode, nextVNode) {
    this._setActiveBarStyle();

    this._refreshScroll();
  };

  _proto._setActiveBarStyle = function _setActiveBarStyle() {
    if (this.get('type') !== 'default') return;
    var vertical = this.get('vertical');
    var activeTab = this.element.querySelector('.k-tab.k-active');

    if (activeTab) {
      if (!vertical) {
        var width = activeTab.offsetWidth;
        var left = activeTab.offsetLeft;
        this.set('_activeBarStyle', {
          left: left + 'px',
          width: width + 'px'
        });
      } else {
        var height = activeTab.offsetHeight;
        var top = activeTab.offsetTop;
        this.set('_activeBarStyle', {
          top: top + 'px',
          height: height + 'px'
        });
      }
    }
  };

  _proto._scrollActiveToView = function _scrollActiveToView() {
    var _this$get3 = this.get(),
        vertical = _this$get3.vertical;

    if (vertical) return;
    var activeTab = this.element.querySelector('.k-tab.k-active');

    if (activeTab) {
      var _this$get4 = this.get(),
          _left = _this$get4._left;

      var _this$refs3 = this.refs,
          scroll = _this$refs3.scroll,
          wrapper = _this$refs3.wrapper; // don't use getBoundingClientRect, it has transform and will return digital number

      var activeRect = {
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth
      };
      var scrollRect = {
        width: scroll.offsetWidth
      };
      var wrapperRect = {
        left: wrapper.offsetLeft,
        width: wrapper.offsetWidth
      };
      var x = activeRect.left - wrapperRect.left;

      if (_left + x <= 0) {
        _left = -x;
      } else if (x + activeRect.width + _left > scrollRect.width) {
        _left = -x - activeRect.width + scrollRect.width;
      }

      this.set({
        _left: _left
      });
    } else {
      this.set('_left', 0);
    }
  };

  _proto._remove = function _remove(tab) {
    this.trigger('remove', tab.get('value'));
  };

  _proto._prev = function _prev() {
    var _this$get5 = this.get(),
        _left = _this$get5._left;

    var scrollWidth = this.refs.scroll.offsetWidth;

    this._setTransition(_left + scrollWidth);
  };

  _proto._next = function _next() {
    var _this$get6 = this.get(),
        _left = _this$get6._left;

    var scrollWidth = this.refs.scroll.offsetWidth;

    this._setTransition(_left - scrollWidth);
  };

  _proto._destroy = function _destroy() {
    this.ro.disconnect();
  };

  (0, _createClass2.default)(Tabs, [{
    key: "template",
    get: function get() {
      return _index.default;
    }
  }]);
  return Tabs;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  data: Array,
  vertical: Boolean,
  size: ['large', 'default', 'small', 'mini'],
  type: ['default', 'card', 'border-card', 'no-border-card'],
  closable: Boolean
}), (0, _defineProperty2.default)(_class2, "events", {
  remove: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.Tabs = exports.default = Tabs;

/***/ }),

/***/ "./components/tabs/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431261683
      var cssReload = require("!../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./components/tabs/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _isArray = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/array/is-array"));

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _tab = _interopRequireDefault(__webpack_require__("./components/tabs/tab.js"));

var _button = _interopRequireDefault(__webpack_require__("./components/button/index.js"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  var _classNameObj;

  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      className = _self$get.className,
      data = _self$get.data,
      value = _self$get.value,
      children = _self$get.children,
      vertical = _self$get.vertical,
      size = _self$get.size,
      type = _self$get.type,
      _activeBarStyle = _self$get._activeBarStyle,
      _scroll = _self$get._scroll,
      _left = _self$get._left,
      _prev = _self$get._prev,
      _next = _self$get._next;

  var classNameObj = (_classNameObj = {
    'k-tabs': true
  }, _classNameObj[className] = className, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-vertical'] = vertical, _classNameObj['k-card'] = type === 'no-border-card', _classNameObj["k-" + type] = type !== 'default', _classNameObj["k-is-scroll"] = _scroll, _classNameObj);
  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return _scroll;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(_button.default, {
    'className': 'k-prev',
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'prev',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return !_prev;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('i', null, null, 'ion-ios-arrow-left'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._prev;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined, h('div', null, h('div', {
    'style': function () {
      try {
        return {
          transform: "translateX(" + _left + "px)"
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [__m(function () {
    try {
      return data;
    } catch (e) {
      _e(e);
    }
  }.call($this), function (item, key) {
    return h('a', {
      'ev-click': function () {
        try {
          return self._changeTab.bind(self, item);
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, function () {
      try {
        return item.text;
      } catch (e) {
        _e(e);
      }
    }.call($this), _className(function () {
      try {
        return {
          'k-tab': true,
          'k-active': item.value === value
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)));
  }, $this), function () {
    try {
      return __u.map(children ? (0, _isArray.default)(children) ? children : [children] : children, function (vNode) {
        if (vNode.tag === _tab.default) {
          vNode.props = (0, _assign.default)({}, vNode.props, {
            _value: value,
            _parent: self
          });
        }

        return vNode;
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return type === 'default';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'style': function () {
      try {
        return _activeBarStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'k-active-bar') : undefined], 'k-wrapper', null, function (i) {
    widgets['wrapper'] = i;
  }), 'k-scroll c-clearfix', null, function (i) {
    widgets['scroll'] = i;
  }), function () {
    try {
      return _scroll;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(_button.default, {
    'className': 'k-next',
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'next',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return !_next;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('i', null, null, 'ion-ios-arrow-right'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._next;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./components/tabs/tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _tab = _interopRequireDefault(__webpack_require__("./components/tabs/tab.vdt"));

var _dec, _class, _class2, _temp;

var Tab = (_dec = _intact.default.template(), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(Tab, _Intact);

  function Tab() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.defaults = function defaults() {
    return {
      value: undefined,
      to: undefined,
      disabled: false,
      closable: undefined,
      // passed by parent
      _value: undefined,
      _parent: undefined
    };
  } // _isActive() {
  // const value = this.get('value');
  // return value !== undefined && value === this.get('_value');
  // }
  ;

  _proto._changeTab = function _changeTab(e) {
    if (this.get('disabled')) {
      e.preventDefault();
    } else {
      this.get('_parent')._changeTab(this.get());

      this.trigger('click', e);
    }
  };

  _proto._remove = function _remove(e) {
    e.stopPropagation();

    var _this$get = this.get(),
        _parent = _this$get._parent;

    _parent._remove(this);
  };

  (0, _createClass2.default)(Tab, [{
    key: "template",
    get: function get() {
      return _tab.default;
    }
  }]);
  return Tab;
}(_intact.default), (0, _defineProperty2.default)(_class2, "propTypes", {
  disabled: Boolean,
  to: String,
  closable: Boolean
}), (0, _defineProperty2.default)(_class2, "events", {
  click: true
}), _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "template", [_dec], (0, _getOwnPropertyDescriptor.default)(_class.prototype, "template"), _class.prototype)), _class));
exports.default = Tab;

/***/ }),

/***/ "./components/tabs/tab.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _button = _interopRequireDefault(__webpack_require__("./components/button/index.js"));

var _utils = __webpack_require__("./components/utils.js");

function _default(obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  var _self$get = self.get(),
      value = _self$get.value,
      children = _self$get.children,
      _value = _self$get._value,
      className = _self$get.className,
      disabled = _self$get.disabled,
      _parent = _self$get._parent,
      closable = _self$get.closable;

  return h('div', (0, _assign.default)({}, function () {
    try {
      return (0, _utils.getRestProps)(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-click': function () {
      try {
        return self._changeTab;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [function () {
    try {
      return self.get('children');
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return closable == null ? _parent.get('closable') : closable;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(_button.default, {
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'size': 'mini',
    'className': 'k-close',
    'children': h('i', null, null, 'k-icon ion-ios-close-empty'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._remove;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], _className(function () {
    try {
      var _ref;

      return _ref = {
        'k-tab': true,
        'k-active': value !== undefined && value === _value
      }, _ref[className] = className, _ref['k-disabled'] = disabled, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ }),

/***/ "./site/src/imgs/page1.png":
/***/ (function(module, exports) {

module.exports = "/fonts/page1.png";

/***/ }),

/***/ "./site/src/imgs/page2.png":
/***/ (function(module, exports) {

module.exports = "/fonts/page2.png";

/***/ }),

/***/ "./site/src/pages/index/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _assign = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/assign"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _index = _interopRequireDefault(__webpack_require__("./site/src/pages/index/index.vdt"));

var _layout = _interopRequireDefault(__webpack_require__("./site/src/pages/layout.js"));

__webpack_require__("./site/src/pages/index/index.styl");

var _dec, _class2, _init, _class3, _temp;

var _class = (_dec = _intact.default.template(), (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Layout) {
  (0, _inheritsLoose2.default)(_class2, _Layout);

  function _class2() {
    return _Layout.apply(this, arguments) || this;
  }

  var _proto = _class2.prototype;

  _proto.defaults = function defaults() {
    return (0, _assign.default)({}, _Layout.prototype.defaults.call(this), {
      current: 'one'
    });
  };

  _proto._mount = function _mount() {
    window.scrollTo(0, 0);
  };

  return _class2;
}(_layout.default), (0, _defineProperty2.default)(_class3, "template", _index.default), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class2, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class2)), _class2));

exports.default = _class;

/***/ }),

/***/ "./site/src/pages/index/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431258581
      var cssReload = require("!../../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/index/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _button = __webpack_require__("./components/button/index.js");

var _link = __webpack_require__("./components/link/index.js");

var _grid = __webpack_require__("./components/grid/index.js");

var _page = _interopRequireDefault(__webpack_require__("./site/src/imgs/page1.png"));

var _page2 = _interopRequireDefault(__webpack_require__("./site/src/imgs/page2.png"));

function _default(obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;
  return function () {
    var _obj = {
      'className': 'index-page',
      'pageIndex': 'index'
    };
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['header'] = function (parent) {
        return [function () {
          try {
            return parent();
          } catch (e) {
            _e(e);
          }
        }.call($this), h('div', null, null, 'circle-bg right')];
      }) && (__blocks['header'] = function (parent) {
        var args = arguments;
        return blocks['header'] ? blocks['header'].apply($this, [function () {
          return _blocks['header'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['header'].apply($this, args);
      }) && (_blocks['content'] = function (parent) {
        return [h('div', null, [h(_grid.Row, {
          'className': 'first-page',
          'align': 'stretch',
          'justify': 'center',
          'children': [h(_grid.Col, {
            'className': 'first-page-left',
            'lg': '11',
            'children': h('div', null, [h('h1', null, 'KPC'), h('h2', null, [h('span', null, 'K'), 'ing design ', h('span', null, 'P'), 'ublic ', h('span', null, 'C'), 'omponents']), h('p', null, '支持多框架的前端高质量组件库'), h('div', null, [h(_button.Button, {
              'tagName': function () {
                try {
                  return _link.Link;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'type': 'primary',
              'tagProps': function () {
                try {
                  return {
                    href: "" + "/docs/getting-started/"
                  };
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'className': 'button',
              'children': '开始使用',
              '_context': $this
            }), h(_button.Button, {
              'href': 'https://github.com/ksc-fe/kpc',
              'className': 'button',
              'target': '_blank',
              'children': 'GitHub',
              '_context': $this
            })], 'actions')], 'wrapper'),
            '_context': $this
          }), h(_grid.Col, {
            'className': 'first-page-right',
            'lg': '11',
            'children': h('figure', null, h('img', {
              'src': function () {
                try {
                  return _page.default;
                } catch (e) {
                  _e(e);
                }
              }.call($this)
            })),
            '_context': $this
          })],
          '_context': $this
        }), h(_grid.Row, {
          'align': 'stretch',
          'justify': 'center',
          'children': [h(_grid.Col, {
            'className': 'second-page-left',
            'lg': '11',
            'children': h('figure', null, h('img', {
              'src': function () {
                try {
                  return _page2.default;
                } catch (e) {
                  _e(e);
                }
              }.call($this)
            })),
            '_context': $this
          }), h(_grid.Col, {
            'className': 'second-page-right',
            'lg': '11',
            'children': h('div', null, [h('div', null, [h('h2', null, '支持多框架'), h('div', null, '\n                                同时支持Intact/Vue/React框架\n                            ')], 'feature'), h('div', null, [h('h2', null, '忠于原生，增强原生'), h('div', null, '\n                                在保持浏览器原生特性的基础上，增强交互能力\n                            ')], 'feature'), h('div', null, [h('h2', null, '便捷开发'), h('div', null, '\n                                支持按需加载，主题定制，国际化等特性\n                            '), h('div', null, '\n                                并且提供了配套的脚手架方便快速初始化项目\n                            ')], 'feature')], 'info'),
            '_context': $this
          })],
          '_context': $this
        })], 'pages'), h('div', null, null, 'circle-bg left')];
      }) && (__blocks['content'] = function (parent) {
        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, [function () {
          return _blocks['content'].apply($this, args);
        }].concat(__slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, blocks), parent);
  }.call($this);
}

/***/ }),

/***/ "./site/src/pages/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(__webpack_require__("@babel/runtime-corejs2/helpers/applyDecoratedDescriptor"));

__webpack_require__("core-js/modules/es6.regexp.replace");

var _intact = _interopRequireDefault(__webpack_require__("intact"));

var _layout = _interopRequireDefault(__webpack_require__("./site/src/pages/layout.vdt"));

__webpack_require__("./site/src/pages/layout.styl");

var _dec, _class2, _init, _class3, _temp;

var theme;

function changeTheme(newTheme, oldTheme) {
  var link = document.querySelector('link[href^=http]');
  if (!link) return;
  link.href = link.href.replace("theme-" + oldTheme, "theme-" + newTheme);
  theme = newTheme;
  localStorage.setItem('theme', newTheme);
}

if (process.browser) {
  theme = localStorage.getItem('theme') || 'kpc';

  if (theme !== 'kpc') {
    changeTheme(theme, 'kpc');
  }
} else {
  theme = 'kpc';
}

var _class = (_dec = _intact.default.template(), (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_Intact) {
  (0, _inheritsLoose2.default)(_class2, _Intact);

  function _class2() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = _class2.prototype;

  _proto.defaults = function defaults() {
    return {
      theme: theme,
      version: 'v1.1.1'
    };
  };

  _proto._init = function _init() {
    this.on('$change:theme', function (c, v, o) {
      console.log(v, o);
      changeTheme(v, o);
    });
  };

  _proto._mount = function _mount() {
    this.border = this.element.querySelector('.border');

    this._updateBorder();
  };

  _proto._updateBorder = function _updateBorder() {
    var nav = this.element.querySelector('.active');
    var width = 0;
    var left = 0;

    if (nav) {
      left = nav.offsetLeft;
      width = nav.offsetWidth;
    }

    this.border.classList.add('transition');
    this.border.style.width = width + "px";
    this.border.style.left = left + "px";
  };

  return _class2;
}(_intact.default), (0, _defineProperty2.default)(_class3, "template", _layout.default), _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "template", [_dec], (_init = (0, _getOwnPropertyDescriptor.default)(_class2, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class2)), _class2));

exports.default = _class;

/***/ }),

/***/ "./site/src/pages/layout.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1563431257977
      var cssReload = require("!../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/layout.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime-corejs2/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _link = _interopRequireDefault(__webpack_require__("./components/link/index.js"));

var _select = __webpack_require__("./components/select/index.js");

function _default(obj, _Vdt, blocks, $callee) {
  _Vdt || (_Vdt = Vdt);
  obj || (obj = {});
  blocks || (blocks = {});
  var h = _Vdt.miss.h,
      hc = _Vdt.miss.hc,
      hu = _Vdt.miss.hu,
      widgets = this && this.widgets || {},
      _blocks = {},
      __blocks = {},
      __u = _Vdt.utils,
      extend = __u.extend,
      _e = __u.error,
      _className = __u.className,
      __slice = __u.slice,
      __noop = __u.noop,
      __m = __u.map,
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      $this = this,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;
  var nav = [{
    title: '设计',
    href: '/docs/design/language/',
    index: 'design'
  }, {
    title: '组件',
    href: '/docs/getting-started/',
    index: 'document'
  }, {
    title: 'Blog',
    href: '/docs/blogs/design/',
    index: 'blog'
  }];
  return h('div', null, [h('div', null, h('header', null, (_blocks['header'] = function (parent) {
    return [h('div', null, [h(_link.default, {
      'className': 'logo',
      'href': '/',
      '_context': $this
    }), h(_link.default, {
      'className': 'king',
      'href': '/',
      'children': 'KPC',
      '_context': $this
    })], 'king-logo'), h('div', null, [h('nav', null, [__m(function () {
      try {
        return nav;
      } catch (e) {
        _e(e);
      }
    }.call($this), function (value, key) {
      return h(_link.default, {
        'className': _className(function () {
          try {
            return {
              active: value.index === scope.navIndex
            };
          } catch (e) {
            _e(e);
          }
        }.call($this)),
        'href': function () {
          try {
            return "" + "" + value.href;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'children': function () {
          try {
            return value.title;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this
      });
    }, $this), h('div', null, null, 'border')]), h('div', null, null, 'line'), function () {
      try {
        return null;
      } catch (e) {
        _e(e);
      }
    }.call($this), h(_select.Select, {
      'inline': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'container': '.header-wrapper',
      'children': [h(_select.Option, {
        'value': 'kpc',
        'children': '默认主题',
        '_context': $this
      }), h(_select.Option, {
        'value': 'ksyun',
        'children': 'ksyun',
        '_context': $this
      })],
      '_context': $this,
      'value': _getModel(self, 'theme'),
      'ev-$change:value': function ev$changeValue(__c, __n) {
        _setModel(self, 'theme', __n, $this);
      }
    })], 'right')];
  }) && (__blocks['header'] = function (parent) {
    var args = arguments;
    return blocks['header'] ? blocks['header'].apply($this, [function () {
      return _blocks['header'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['header'].apply($this, args);
  }) && __blocks['header'].apply($this, [__noop])), _className(function () {
    try {
      return {
        'header-wrapper': true,
        'header-shadow': scope.pageIndex !== 'index'
      };
    } catch (e) {
      _e(e);
    }
  }.call($this)), null, function (i) {
    widgets['header'] = i;
  }), h('div', null, (_blocks['content'] = function (parent) {
    return null;
  }) && (__blocks['content'] = function (parent) {
    var args = arguments;
    return blocks['content'] ? blocks['content'].apply($this, [function () {
      return _blocks['content'].apply($this, args);
    }].concat(__slice.call(args, 1))) : _blocks['content'].apply($this, args);
  }) && __blocks['content'].apply($this, [__noop]), 'content-wrapper', null, function (i) {
    widgets['wrapper'] = i;
  })], _className(function () {
    try {
      var _ref;

      return _ref = {
        'main-wrapper': true
      }, _ref[scope.className] = scope.className, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}

/***/ })

};;