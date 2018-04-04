webpackJsonp([6,49,50,51,52,90,115],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/disabled/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-28 .k-btn {\n  margin-right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/nested/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-29 .ion-ios-arrow-right {\n  float: right;\n}\n.example.index-29 .ion-ios-arrow-right:before {\n  font-size: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/position/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-30 .k-btn {\n  margin-right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/trigger/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-31 .k-btn {\n  margin-right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/dropdown recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/basic/index.js": "./site/components/dropdown/demos/basic/index.js",
	"./demos/disabled/index.js": "./site/components/dropdown/demos/disabled/index.js",
	"./demos/nested/index.js": "./site/components/dropdown/demos/nested/index.js",
	"./demos/position/index.js": "./site/components/dropdown/demos/position/index.js",
	"./demos/trigger/index.js": "./site/components/dropdown/demos/trigger/index.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./site/components/dropdown recursive demos.*index.js$";

/***/ }),

/***/ "./site/components/dropdown/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/dropdown/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/dropdown/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/dropdown/demos/basic/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

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
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  return h('div', null, h(_dropdown.Dropdown, { 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            hover ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this }));
};

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/dropdown/demos/disabled/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/dropdown/demos/disabled/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/dropdown/demos/disabled/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/dropdown/demos/disabled/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/dropdown/demos/disabled/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/disabled/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/disabled/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/disabled/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/dropdown/demos/disabled/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

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
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  return h('div', null, [h(_dropdown.Dropdown, { 'disabled': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            disabled ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.Dropdown, { 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            disabled item', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'disabled': function () {
          try {
            return [true][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this })]);
};

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/dropdown/demos/nested/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/dropdown/demos/nested/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/dropdown/demos/nested/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/dropdown/demos/nested/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/dropdown/demos/nested/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/nested/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/nested/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/nested/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/dropdown/demos/nested/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

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
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  return h('div', null, h(_dropdown.Dropdown, { 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            hover ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this }), h(_dropdown.Dropdown, { 'position': function () {
          try {
            return [{ my: 'left top', at: 'right top' }][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': [h(_dropdown.DropdownItem, { 'children': [h('span', { 'style': 'margin-right: 10px' }, 'hover', 'c-middle'), h('i', null, null, 'c-middle ion-ios-arrow-right')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.Dropdown, { 'position': function () {
              try {
                return [{ my: 'left top', at: 'right top' }][0];
              } catch (e) {
                _e(e);
              }
            }.call(this), 'children': [h(_dropdown.DropdownItem, { 'children': [h('span', { 'style': 'margin-right: 10px' }, 'hover', 'c-middle'), h('i', null, null, 'c-middle ion-ios-arrow-right')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.Dropdown, { 'trigger': 'click', 'position': function () {
          try {
            return [{ my: 'left top', at: 'right top' }][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': [h(_dropdown.DropdownItem, { 'children': [h('span', { 'style': 'margin-right: 10px' }, 'click', 'c-middle'), h('i', null, null, 'c-middle ion-ios-arrow-right')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.Dropdown, { 'trigger': 'click', 'position': function () {
              try {
                return [{ my: 'left top', at: 'right top' }][0];
              } catch (e) {
                _e(e);
              }
            }.call(this), 'children': [h(_dropdown.DropdownItem, { 'children': [h('span', { 'style': 'margin-right: 10px' }, 'click', 'c-middle'), h('i', null, null, 'c-middle ion-ios-arrow-right')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this }));
};

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/dropdown/demos/position/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/dropdown/demos/position/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/dropdown/demos/position/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/dropdown/demos/position/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/dropdown/demos/position/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/position/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/position/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/position/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/dropdown/demos/position/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

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
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  return h('div', null, [h(_dropdown.Dropdown, { 'position': function () {
      try {
        return [{ my: 'left top', at: 'left bottom+5' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            left ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.Dropdown, { 'position': function () {
      try {
        return [{ my: 'right top', at: 'right bottom+5' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            right ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.Dropdown, { 'position': function () {
      try {
        return [{ my: 'center bottom-5', at: 'center top' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            top center ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this })]);
};

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/dropdown/demos/trigger/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/dropdown/demos/trigger/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/dropdown/demos/trigger/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/dropdown/demos/trigger/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/dropdown/demos/trigger/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/trigger/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/trigger/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/dropdown/demos/trigger/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/dropdown/demos/trigger/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

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
      __o = __u.Options,
      _getModel = __o.getModel,
      _setModel = __o.setModel,
      _setCheckboxModel = __u.setCheckboxModel,
      _detectCheckboxChecked = __u.detectCheckboxChecked,
      _setSelectModel = __u.setSelectModel,
      self = this.data,
      scope = obj,
      Animate = self && self.Animate,
      parent = ($callee || {})._super;

  return h('div', null, [h(_dropdown.Dropdown, { 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            hover ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this }), h(_dropdown.Dropdown, { 'trigger': 'click', 'children': [h(_button2.default, { 'type': 'primary', 'children': ['\n            click ', h('i', null, null, 'k-icon ion-arrow-down-b')], '_context': this }), h(_dropdown.DropdownMenu, { 'children': [h(_dropdown.DropdownItem, { 'children': 'item 1', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 2', '_context': this }), h(_dropdown.DropdownItem, { 'children': 'item 3', '_context': this })], '_context': this })], '_context': this })]);
};

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _article = __webpack_require__("./site/src/components/article/index.js");

var _article2 = _interopRequireDefault(_article);

var _index = __webpack_require__("./site/components/dropdown/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/dropdown recursive demos.*index.js$");
var demos = r.keys().map(r);

var _default = function (_Article) {
    _inherits(_default, _Article);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'defaults',
        value: function defaults() {
            return _extends({}, _get(_default.prototype.__proto__ || Object.getPrototypeOf(_default.prototype), 'defaults', this).call(this), _index2.default, { demos: demos });
        }
    }]);

    return _default;
}(_article2.default);

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/components/dropdown/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"下拉菜单","category":"组件","order":0},"catalogs":[],"contents":"<blockquote>\n<p><code>kpc/component/dropdown</code>暴露出来的并非<code>Dropdown</code>组件本身，而是包装该组件的函数（vdt中称作宏函数）所以不要试图继承它。</p>\n</blockquote>\n<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1><h2 id='header-Dropdown'>Dropdown</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>trigger</td>\n<td>触发方式，<code>hover</code>为悬停触发，<code>click</code>为点击触发</td>\n<td><code>&quot;hover&quot;</code> &#124; <code>&quot;click&quot;</code></td>\n<td><code>&quot;hover&quot;</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用整个菜单</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>菜单弹出的位置，默认在触发器正下方向下偏移<code>5px</code>的地方</td>\n<td><code>Object</code></td>\n<td><code>{my: &#39;center top+5&#39;, &#39;center bottom&#39;}</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h2 id='header-DropdownItem'>DropdownItem</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>disabled</td>\n<td>是否禁用该菜单项</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>hideOnSelect</td>\n<td>是否选中该菜单后隐藏整个菜单</td>\n<td><code>Boolean</code></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2><h2 id='header-DropdownItem'>DropdownItem</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>事件名</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>select</td>\n<td>菜单项被选中时触发，不管是点击还是键盘操作选中</td>\n<td>被选中的<code>DropdownItem</code>实例</td>\n</tr>\n<tr>\n<td>click</td>\n<td>菜单项被点击时触发</td>\n<td><code>Event</code></td>\n</tr>\n<tr>\n<td>mouseenter</td>\n<td>鼠标进入菜单项时触发</td>\n<td><code>Event</code></td>\n</tr>\n<tr>\n<td>mouseleave</td>\n<td>鼠标离开菜单项时触发</td>\n<td><code>Event</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div>","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":32,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"表格","path":"components/table/index.md","children":[{"title":"表格属性 Table","path":"#header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table","level":1,"content":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1>","text":"表格属性 Table","children":[]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}],"undefined":[{"title":"按钮类型","path":"components/table/demo/basic.md","children":[]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvZGlzYWJsZWQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3Bvc2l0aW9uL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3RyaWdnZXIvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24gZGVtb3MuKmluZGV4LmpzJCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvYmFzaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvZGlzYWJsZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LnN0eWw/ZjY3ZCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvZGlzYWJsZWQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9uZXN0ZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC5zdHlsP2JkMmIiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3Bvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC5zdHlsP2ZkZGMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3Bvc2l0aW9uL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5zdHlsPzk3MjEiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3RyaWdnZXIvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanNvbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwidGVtcGxhdGUiLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsImUiLCJjYWxsIiwibXkiLCJhdCIsInIiLCJk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SCxFQUFFLEVBQUUsRUFBRSw2REFBNkQsd05BQXdOLEVBQUUsRUFBRSxpRUFBaUUsNElBQTRJLEVBQUUsZ0JBQWdCLHFFQUFxRSxFQUFFLGlCQUFpQiwrTEFBK0wsZ0pBQWdKLDZQQUE2UCw2RkFBNkYsR0FBRyxlQUFlLEUiLCJmaWxlIjoic3RhdGljL2NodW5rLzY0MDc3ZGNhNTBlNzA3YTY5Yzk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhhbXBsZS5pbmRleC0yOCAuay1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9kaXNhYmxlZC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9kaXNhYmxlZC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA1MiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtMjkgLmlvbi1pb3MtYXJyb3ctcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZXhhbXBsZS5pbmRleC0yOSAuaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9uZXN0ZWQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDUxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhhbXBsZS5pbmRleC0zMCAuay1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA1MCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtMzEgLmstYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy90cmlnZ2VyL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDQ5IiwidmFyIG1hcCA9IHtcblx0XCIuL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvYmFzaWMvaW5kZXguanNcIixcblx0XCIuL2RlbW9zL2Rpc2FibGVkL2luZGV4LmpzXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvZGlzYWJsZWQvaW5kZXguanNcIixcblx0XCIuL2RlbW9zL25lc3RlZC9pbmRleC5qc1wiOiBcIi4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC5qc1wiLFxuXHRcIi4vZGVtb3MvcG9zaXRpb24vaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC5qc1wiLFxuXHRcIi4vZGVtb3MvdHJpZ2dlci9pbmRleC5qc1wiOiBcIi4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3RyaWdnZXIvaW5kZXguanNcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24gcmVjdXJzaXZlIGRlbW9zLippbmRleC5qcyRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93biBkZW1vcy4qaW5kZXguanMkXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93biByZWN1cnNpdmUgZGVtb3MuKmluZGV4LmpzJFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvYmFzaWMvaW5kZXguanMiLCJpbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gZnJvbSAna3BjL2NvbXBvbmVudHMvZHJvcGRvd24nO2ltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBoKERyb3Bkb3duLCB7J2NoaWxkcmVuJzogW2goQnV0dG9uLCB7J3R5cGUnOiAncHJpbWFyeScsICdjaGlsZHJlbic6IFsnXFxuICAgICAgICAgICAgaG92ZXIgJywgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWFycm93LWRvd24tYicpXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duTWVudSwgeydjaGlsZHJlbic6IFtoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDEnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMicsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAzJywgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9iYXNpYy9pbmRleC52ZHQiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDUyIiwiaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJztpbXBvcnQgQnV0dG9uIGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goRHJvcGRvd24sIHsnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtoKEJ1dHRvbiwgeyd0eXBlJzogJ3ByaW1hcnknLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAgICAgICAgIGRpc2FibGVkICcsIGgoJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1hcnJvdy1kb3duLWInKV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bk1lbnUsIHsnY2hpbGRyZW4nOiBbaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAxJywgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDInLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMycsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93biwgeydjaGlsZHJlbic6IFtoKEJ1dHRvbiwgeyd0eXBlJzogJ3ByaW1hcnknLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAgICAgICAgIGRpc2FibGVkIGl0ZW0nLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tYXJyb3ctZG93bi1iJyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMScsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6ICdpdGVtIDInLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMycsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL2Rpc2FibGVkL2luZGV4LnZkdCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9uZXN0ZWQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNTEiLCJpbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gZnJvbSAna3BjL2NvbXBvbmVudHMvZHJvcGRvd24nO2ltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBoKERyb3Bkb3duLCB7J2NoaWxkcmVuJzogW2goQnV0dG9uLCB7J3R5cGUnOiAncHJpbWFyeScsICdjaGlsZHJlbic6IFsnXFxuICAgICAgICAgICAgaG92ZXIgJywgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWFycm93LWRvd24tYicpXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duTWVudSwgeydjaGlsZHJlbic6IFtoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDEnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMicsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAzJywgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duLCB7J3Bvc2l0aW9uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tteTogJ2xlZnQgdG9wJywgYXQ6ICdyaWdodCB0b3AnfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiBbaCgnc3BhbicsIHsnc3R5bGUnOiAnbWFyZ2luLXJpZ2h0OiAxMHB4J30sICdob3ZlcicsICdjLW1pZGRsZScpLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2MtbWlkZGxlIGlvbi1pb3MtYXJyb3ctcmlnaHQnKV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bk1lbnUsIHsnY2hpbGRyZW4nOiBbaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAncmlnaHQgdG9wJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogW2goJ3NwYW4nLCB7J3N0eWxlJzogJ21hcmdpbi1yaWdodDogMTBweCd9LCAnaG92ZXInLCAnYy1taWRkbGUnKSwgaCgnaScsIG51bGwsIG51bGwsICdjLW1pZGRsZSBpb24taW9zLWFycm93LXJpZ2h0JyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMScsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAyJywgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDEnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd24sIHsndHJpZ2dlcic6ICdjbGljaycsICdwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAncmlnaHQgdG9wJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogW2goJ3NwYW4nLCB7J3N0eWxlJzogJ21hcmdpbi1yaWdodDogMTBweCd9LCAnY2xpY2snLCAnYy1taWRkbGUnKSwgaCgnaScsIG51bGwsIG51bGwsICdjLW1pZGRsZSBpb24taW9zLWFycm93LXJpZ2h0JyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd24sIHsndHJpZ2dlcic6ICdjbGljaycsICdwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAncmlnaHQgdG9wJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogW2goJ3NwYW4nLCB7J3N0eWxlJzogJ21hcmdpbi1yaWdodDogMTBweCd9LCAnY2xpY2snLCAnYy1taWRkbGUnKSwgaCgnaScsIG51bGwsIG51bGwsICdjLW1pZGRsZSBpb24taW9zLWFycm93LXJpZ2h0JyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMScsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAyJywgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDEnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMycsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4LnZkdCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvcG9zaXRpb24vaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvcG9zaXRpb24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvcG9zaXRpb24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNTAiLCJpbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gZnJvbSAna3BjL2NvbXBvbmVudHMvZHJvcGRvd24nO2ltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaChEcm9wZG93biwgeydwb3NpdGlvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7bXk6ICdsZWZ0IHRvcCcsIGF0OiAnbGVmdCBib3R0b20rNSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtoKEJ1dHRvbiwgeyd0eXBlJzogJ3ByaW1hcnknLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAgICAgICAgIGxlZnQgJywgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWFycm93LWRvd24tYicpXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duTWVudSwgeydjaGlsZHJlbic6IFtoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDEnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMicsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAzJywgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duLCB7J3Bvc2l0aW9uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tteTogJ3JpZ2h0IHRvcCcsIGF0OiAncmlnaHQgYm90dG9tKzUnfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbaChCdXR0b24sIHsndHlwZSc6ICdwcmltYXJ5JywgJ2NoaWxkcmVuJzogWydcXG4gICAgICAgICAgICByaWdodCAnLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tYXJyb3ctZG93bi1iJyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMScsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAyJywgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDMnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd24sIHsncG9zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe215OiAnY2VudGVyIGJvdHRvbS01JywgYXQ6ICdjZW50ZXIgdG9wJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goQnV0dG9uLCB7J3R5cGUnOiAncHJpbWFyeScsICdjaGlsZHJlbic6IFsnXFxuICAgICAgICAgICAgdG9wIGNlbnRlciAnLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tYXJyb3ctZG93bi1iJyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMScsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAyJywgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDMnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9wb3NpdGlvbi9pbmRleC52ZHQiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3RyaWdnZXIvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy90cmlnZ2VyL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDQ5IiwiaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJztpbXBvcnQgQnV0dG9uIGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goRHJvcGRvd24sIHsnY2hpbGRyZW4nOiBbaChCdXR0b24sIHsndHlwZSc6ICdwcmltYXJ5JywgJ2NoaWxkcmVuJzogWydcXG4gICAgICAgICAgICBob3ZlciAnLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24tYXJyb3ctZG93bi1iJyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25NZW51LCB7J2NoaWxkcmVuJzogW2goRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMScsICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAyJywgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDMnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd24sIHsndHJpZ2dlcic6ICdjbGljaycsICdjaGlsZHJlbic6IFtoKEJ1dHRvbiwgeyd0eXBlJzogJ3ByaW1hcnknLCAnY2hpbGRyZW4nOiBbJ1xcbiAgICAgICAgICAgIGNsaWNrICcsIGgoJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1hcnJvdy1kb3duLWInKV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChEcm9wZG93bk1lbnUsIHsnY2hpbGRyZW4nOiBbaChEcm9wZG93bkl0ZW0sIHsnY2hpbGRyZW4nOiAnaXRlbSAxJywgJ19jb250ZXh0JzogdGhpc30pLCBoKERyb3Bkb3duSXRlbSwgeydjaGlsZHJlbic6ICdpdGVtIDInLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRHJvcGRvd25JdGVtLCB7J2NoaWxkcmVuJzogJ2l0ZW0gMycsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3RyaWdnZXIvaW5kZXgudmR0IiwiaW1wb3J0IEFydGljbGUgZnJvbSAnfi9zcmMvY29tcG9uZW50cy9hcnRpY2xlJztcbmltcG9ydCBkYXRhIGZyb20gJy4vaW5kZXguanNvbic7XG5cbmNvbnN0IHIgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL2RlbW9zLippbmRleC5qcyQvKTtcbmNvbnN0IGRlbW9zID0gci5rZXlzKCkubWFwKHIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFydGljbGUge1xuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gey4uLnN1cGVyLmRlZmF1bHRzKCksIC4uLmRhdGEsIGRlbW9zfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuS4i+aLieiPnOWNlVwiLFwiY2F0ZWdvcnlcIjpcIue7hOS7tlwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwiPGJsb2NrcXVvdGU+XFxuPHA+PGNvZGU+a3BjL2NvbXBvbmVudC9kcm9wZG93bjwvY29kZT7mmrTpnLLlh7rmnaXnmoTlubbpnZ48Y29kZT5Ecm9wZG93bjwvY29kZT7nu4Tku7bmnKzouqvvvIzogIzmmK/ljIXoo4Xor6Xnu4Tku7bnmoTlh73mlbDvvIh2ZHTkuK3np7DkvZzlro/lh73mlbDvvInmiYDku6XkuI3opoHor5Xlm77nu6fmib/lroPjgII8L3A+XFxuPC9ibG9ja3F1b3RlPlxcbjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT48aDIgaWQ9J2hlYWRlci1Ecm9wZG93bic+RHJvcGRvd248L2gyPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWxnuaApzwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuexu+WeizwvdGg+XFxuPHRoPum7mOiupOWAvDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPnRyaWdnZXI8L3RkPlxcbjx0ZD7op6blj5HmlrnlvI/vvIw8Y29kZT5ob3ZlcjwvY29kZT7kuLrmgqzlgZzop6blj5HvvIw8Y29kZT5jbGljazwvY29kZT7kuLrngrnlh7vop6blj5E8L3RkPlxcbjx0ZD48Y29kZT4mcXVvdDtob3ZlciZxdW90OzwvY29kZT4gJiMxMjQ7IDxjb2RlPiZxdW90O2NsaWNrJnF1b3Q7PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPiZxdW90O2hvdmVyJnF1b3Q7PC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmRpc2FibGVkPC90ZD5cXG48dGQ+5piv5ZCm56aB55So5pW05Liq6I+c5Y2VPC90ZD5cXG48dGQ+PGNvZGU+Qm9vbGVhbjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5mYWxzZTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5wb3NpdGlvbjwvdGQ+XFxuPHRkPuiPnOWNleW8ueWHuueahOS9jee9ru+8jOm7mOiupOWcqOinpuWPkeWZqOato+S4i+aWueWQkeS4i+WBj+enuzxjb2RlPjVweDwvY29kZT7nmoTlnLDmlrk8L3RkPlxcbjx0ZD48Y29kZT5PYmplY3Q8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+e215OiAmIzM5O2NlbnRlciB0b3ArNSYjMzk7LCAmIzM5O2NlbnRlciBib3R0b20mIzM5O308L2NvZGU+PC90ZD5cXG48L3RyPlxcbjwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj48aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+PGRpdiBjbGFzcz1cXFwiay10YWJsZS13cmFwcGVyIGstYm9yZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiay10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXG48dGg+5bGe5oCnPC90aD5cXG48dGg+6K+05piOPC90aD5cXG48dGg+57G75Z6LPC90aD5cXG48dGg+6buY6K6k5YC8PC90aD5cXG48L3RyPlxcbjwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pjx0cj5cXG48dGQ+ZGlzYWJsZWQ8L3RkPlxcbjx0ZD7mmK/lkKbnpoHnlKjor6Xoj5zljZXpobk8L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPmZhbHNlPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmhpZGVPblNlbGVjdDwvdGQ+XFxuPHRkPuaYr+WQpumAieS4reivpeiPnOWNleWQjumakOiXj+aVtOS4quiPnOWNlTwvdGQ+XFxuPHRkPjxjb2RlPkJvb2xlYW48L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+dHJ1ZTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMiBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMj48aDIgaWQ9J2hlYWRlci1Ecm9wZG93bkl0ZW0nPkRyb3Bkb3duSXRlbTwvaDI+PGRpdiBjbGFzcz1cXFwiay10YWJsZS13cmFwcGVyIGstYm9yZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiay10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXG48dGg+5LqL5Lu25ZCNPC90aD5cXG48dGg+6K+05piOPC90aD5cXG48dGg+5Y+C5pWwPC90aD5cXG48L3RyPlxcbjwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pjx0cj5cXG48dGQ+c2VsZWN0PC90ZD5cXG48dGQ+6I+c5Y2V6aG56KKr6YCJ5Lit5pe26Kem5Y+R77yM5LiN566h5piv54K55Ye76L+Y5piv6ZSu55uY5pON5L2c6YCJ5LitPC90ZD5cXG48dGQ+6KKr6YCJ5Lit55qEPGNvZGU+RHJvcGRvd25JdGVtPC9jb2RlPuWunuS+izwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmNsaWNrPC90ZD5cXG48dGQ+6I+c5Y2V6aG56KKr54K55Ye75pe26Kem5Y+RPC90ZD5cXG48dGQ+PGNvZGU+RXZlbnQ8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+bW91c2VlbnRlcjwvdGQ+XFxuPHRkPum8oOagh+i/m+WFpeiPnOWNlemhueaXtuinpuWPkTwvdGQ+XFxuPHRkPjxjb2RlPkV2ZW50PC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPm1vdXNlbGVhdmU8L3RkPlxcbjx0ZD7pvKDmoIfnprvlvIDoj5zljZXpobnml7bop6blj5E8L3RkPlxcbjx0ZD48Y29kZT5FdmVudDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MzIsXCJzaWRlQmFyc1wiOntcIue7hOS7tlwiOlt7XCJ0aXRsZVwiOlwi6Z2i5YyF5bGRXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2JyZWFkY3J1bWIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCcmVhZGNydW1iXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJyZWFkY3J1bWJcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJyZWFkY3J1bWInPkJyZWFkY3J1bWI8L2gyPlwiLFwidGV4dFwiOlwiQnJlYWRjcnVtYlwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkJyZWFkY3J1bWJJdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJyZWFkY3J1bWJJdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CcmVhZGNydW1iSXRlbSc+QnJlYWRjcnVtYkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiQnJlYWRjcnVtYkl0ZW1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5oyJ6ZKuXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2J1dHRvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJ1dHRvblwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbic+QnV0dG9uPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvblwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkJ1dHRvbkdyb3VwXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvbkdyb3VwXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b25Hcm91cCc+QnV0dG9uR3JvdXA8L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uR3JvdXBcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJ1dHRvblwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbic+QnV0dG9uPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLlpI3pgInmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvY2hlY2tib3gvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaXpeacn+mAieaLqVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLlvLnnqpdcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZGlhbG9nL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLkuIvmi4noj5zljZVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZHJvcGRvd24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJEcm9wZG93blwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93blwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd24nPkRyb3Bkb3duPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiRHJvcGRvd25JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd25JdGVtJz5Ecm9wZG93bkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25JdGVtXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gyPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiRHJvcGRvd25JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd25JdGVtJz5Ecm9wZG93bkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuWPr+e8lui+keaWh+acrFwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9lZGl0YWJsZS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi6KGo5Y2VXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2Zvcm0vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybUl0ZW0nPkZvcm1JdGVtPC9oMj5cIixcInRleHRcIjpcIkZvcm1JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybUl0ZW0nPkZvcm1JdGVtPC9oMj5cIixcInRleHRcIjpcIkZvcm1JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIumdmeaAgeaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NSc+6Z2Z5oCB5pa55rOVPC9oMT5cIixcInRleHRcIjpcIumdmeaAgeaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuagheagvFwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9ncmlkL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiUm93XCIsXCJwYXRoXCI6XCIjaGVhZGVyLVJvd1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItUm93Jz5Sb3c8L2gyPlwiLFwidGV4dFwiOlwiUm93XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQ29sXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUNvbFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQ29sJz5Db2w8L2gyPlwiLFwidGV4dFwiOlwiQ29sXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIui+k+WFpeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9pbnB1dC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5YWo5bGA5o+Q56S6XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL21lc3NhZ2UvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLpnZnmgIHmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTUnPumdmeaAgeaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLpnZnmgIHmlrnms5VcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWIhumhtVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiUGFnaW5hdGlvblwiLFwicGF0aFwiOlwiI2hlYWRlci1QYWdpbmF0aW9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1QYWdpbmF0aW9uJz5QYWdpbmF0aW9uPC9oMj5cIixcInRleHRcIjpcIlBhZ2luYXRpb25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi6L+b5bqm5p2hXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3Byb2dyZXNzL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLljZXpgInmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcmFkaW8vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIumAieaLqeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zZWxlY3QvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJTZWxlY3RcIixcInBhdGhcIjpcIiNoZWFkZXItU2VsZWN0XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TZWxlY3QnPlNlbGVjdDwvaDI+XCIsXCJ0ZXh0XCI6XCJTZWxlY3RcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJPcHRpb25cIixcInBhdGhcIjpcIiNoZWFkZXItT3B0aW9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1PcHRpb24nPk9wdGlvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJPcHRpb25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5ruR5Z2XXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3NsaWRlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pWw5a2X6L6T5YWl5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3NwaW5uZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuatpemqpOadoVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zdGVwcy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlN0ZXBzXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVN0ZXBzXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TdGVwcyc+U3RlcHM8L2gyPlwiLFwidGV4dFwiOlwiU3RlcHNcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJTdGVwXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVN0ZXBcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVN0ZXAnPlN0ZXA8L2gyPlwiLFwidGV4dFwiOlwiU3RlcFwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLooajmoLxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvdGFibGUvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLooajmoLzlsZ7mgKcgVGFibGVcIixcInBhdGhcIjpcIiNoZWFkZXItJUU4JUExJUE4JUU2JUEwJUJDJUU1JUIxJTlFJUU2JTgwJUE3JTIwVGFibGVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOCVBMSVBOCVFNiVBMCVCQyVFNSVCMSU5RSVFNiU4MCVBNyUyMFRhYmxlJz7ooajmoLzlsZ7mgKcgVGFibGU8L2gxPlwiLFwidGV4dFwiOlwi6KGo5qC85bGe5oCnIFRhYmxlXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLnqb/moq3moYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvdHJhbnNmZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX1dLFwidW5kZWZpbmVkXCI6W3tcInRpdGxlXCI6XCLmjInpkq7nsbvlnotcIixcInBhdGhcIjpcImNvbXBvbmVudHMvdGFibGUvZGVtby9iYXNpYy5tZFwiLFwiY2hpbGRyZW5cIjpbXX1dfSxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gNiAxMTUiXSwic291cmNlUm9vdCI6IiJ9