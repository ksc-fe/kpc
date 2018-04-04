webpackJsonp([4,41,42,43,44,83,84,107],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-45 .k-input {\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/blocks/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-46 .k-input {\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/clearable/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-47 .k-input {\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/size/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-48 .k-input {\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/input recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/autowidth/index.js": "./site/components/input/demos/autowidth/index.js",
	"./demos/basic/index.js": "./site/components/input/demos/basic/index.js",
	"./demos/blocks/index.js": "./site/components/input/demos/blocks/index.js",
	"./demos/clearable/index.js": "./site/components/input/demos/clearable/index.js",
	"./demos/size/index.js": "./site/components/input/demos/size/index.js",
	"./demos/textarea/index.js": "./site/components/input/demos/textarea/index.js"
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
webpackContext.id = "./site/components/input recursive demos.*index.js$";

/***/ }),

/***/ "./site/components/input/demos/autowidth/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/input/demos/autowidth/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/input/demos/autowidth/index.vdt");

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

/***/ "./site/components/input/demos/autowidth/index.vdt":
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

  return h(_input2.default, { 'placeholder': 'auto width', 'autoWidth': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this });
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/input/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/input/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/input/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/input/demos/basic/index.styl");

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

/***/ "./site/components/input/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/basic/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/basic/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/basic/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/input/demos/basic/index.vdt":
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

  return h('div', null, [h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, value: _getModel(self, 'value'), 'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'value', __n);
    } }), ' ', function () {
    try {
      return [self.get('value')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), '\n    ', h('br'), h(_input2.default, { 'disabled': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'placeholder': 'disabled', 'children': null, '_context': this })]);
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/input/demos/blocks/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/input/demos/blocks/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/input/demos/blocks/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/input/demos/blocks/index.styl");

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

/***/ "./site/components/input/demos/blocks/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/blocks/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/blocks/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/blocks/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/input/demos/blocks/index.vdt":
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

    return h('div', null, [h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.prepend = function (parent) {
                return 'http://';
            }) && (__blocks.prepend = function (parent) {
                var self = this;
                return blocks.prepend ? blocks.prepend.call(this, function () {
                    return _blocks.prepend.call(self, parent);
                }) : _blocks.prepend.call(this, parent);
            }) && (_blocks.append = function (parent) {
                return '.com';
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.append = function (parent) {
                return h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'children': h('i', null, null, 'ion-ios-search'), '_context': this });
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.append = function (parent) {
                return h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'primary', 'children': h('i', null, null, 'ion-ios-search'), '_context': this });
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.append = function (parent) {
                return h(_button2.default, { 'type': 'primary', 'children': '搜索', '_context': this });
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.prefix = function (parent) {
                return h('i', null, null, 'ion-earth');
            }) && (__blocks.prefix = function (parent) {
                var self = this;
                return blocks.prefix ? blocks.prefix.call(this, function () {
                    return _blocks.prefix.call(self, parent);
                }) : _blocks.prefix.call(this, parent);
            }) && (_blocks.suffix = function (parent) {
                return h('i', null, null, 'ion-ios-search');
            }) && (__blocks.suffix = function (parent) {
                var self = this;
                return blocks.suffix ? blocks.suffix.call(this, function () {
                    return _blocks.suffix.call(self, parent);
                }) : _blocks.suffix.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.prepend = function (parent) {
                return 'http://';
            }) && (__blocks.prepend = function (parent) {
                var self = this;
                return blocks.prepend ? blocks.prepend.call(this, function () {
                    return _blocks.prepend.call(self, parent);
                }) : _blocks.prepend.call(this, parent);
            }) && (_blocks.append = function (parent) {
                return '.com';
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && (_blocks.prefix = function (parent) {
                return h('i', null, null, 'ion-earth');
            }) && (__blocks.prefix = function (parent) {
                var self = this;
                return blocks.prefix ? blocks.prefix.call(this, function () {
                    return _blocks.prefix.call(self, parent);
                }) : _blocks.prefix.call(this, parent);
            }) && (_blocks.suffix = function (parent) {
                return h('i', null, null, 'ion-ios-search');
            }) && (__blocks.suffix = function (parent) {
                var self = this;
                return blocks.suffix ? blocks.suffix.call(this, function () {
                    return _blocks.suffix.call(self, parent);
                }) : _blocks.suffix.call(this, parent);
            }) && __blocks;
        }.call(this, {}) })]);
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/input/demos/clearable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/input/demos/clearable/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/input/demos/clearable/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/input/demos/clearable/index.styl");

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

/***/ "./site/components/input/demos/clearable/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/clearable/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/clearable/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/clearable/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/input/demos/clearable/index.vdt":
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

    return h('div', null, [h(_input2.default, { 'clearable': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': 'please enter', 'children': null, '_context': this }), h('br'), h(_input2.default, { 'clearable': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.suffix = function (parent) {
                return h('i', null, null, 'ion-ios-search');
            }) && (__blocks.suffix = function (parent) {
                var self = this;
                return blocks.suffix ? blocks.suffix.call(this, function () {
                    return _blocks.suffix.call(self, parent);
                }) : _blocks.suffix.call(this, parent);
            }) && __blocks;
        }.call(this, {}) })]);
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/input/demos/size/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/input/demos/size/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/input/demos/size/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/input/demos/size/index.styl");

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

/***/ "./site/components/input/demos/size/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/size/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/size/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/size/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/input/demos/size/index.vdt":
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

    return h('div', null, [h(_input2.default, { 'value': 'default', 'children': null, '_context': this }), h('br'), h(_input2.default, { 'value': 'small', 'size': 'small', 'children': null, '_context': this }), h(_input2.default, { 'size': 'small', 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.prepend = function (parent) {
                return 'http://';
            }) && (__blocks.prepend = function (parent) {
                var self = this;
                return blocks.prepend ? blocks.prepend.call(this, function () {
                    return _blocks.prepend.call(self, parent);
                }) : _blocks.prepend.call(this, parent);
            }) && (_blocks.append = function (parent) {
                return '.com';
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'size': 'small', 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.append = function (parent) {
                return h(_button2.default, { 'size': 'small', 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'primary', 'children': h('i', null, null, 'ion-ios-search'), '_context': this });
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'size': 'small', 'placeholder': 'please enter', 'children': null, '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.append = function (parent) {
                return h(_button2.default, { 'type': 'primary', 'size': 'small', 'children': 'Search', '_context': this });
            }) && (__blocks.append = function (parent) {
                var self = this;
                return blocks.append ? blocks.append.call(this, function () {
                    return _blocks.append.call(self, parent);
                }) : _blocks.append.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }), h(_input2.default, { 'value': 'mini', 'size': 'mini', 'children': null, '_context': this })]);
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/input/demos/textarea/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/input/demos/textarea/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/input/demos/textarea/index.vdt");

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

/***/ "./site/components/input/demos/textarea/index.vdt":
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

  return h('div', null, [h(_input2.default, { 'type': 'textarea', 'placeholder': 'please enter', 'children': null, '_context': this }), h('br'), h(_input2.default, { 'type': 'textarea', 'rows': '5', 'placeholder': 'please enter', 'children': null, '_context': this })]);
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/input/index.js":
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

var _index = __webpack_require__("./site/components/input/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/input recursive demos.*index.js$");
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

/***/ "./site/components/input/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"输入框","category":"组件","order":0},"catalogs":[],"contents":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>type</td>\n<td>在原生<code>input</code>标签的<code>type</code>取值的基础上扩展了<code>textarea</code>值,当我改值时渲染成<code>textarea</code></td>\n<td><code>String</code></td>\n<td><code>&quot;text&quot;</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>原生<code>input</code>标签的<code>name</code>属性</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>value</td>\n<td>输入框的值,可用<code>v-model</code>进行双向绑定</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td><code>input</code>的<code>defaultValue</code>，首次渲染使用该值</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>占位文案</td>\n<td><code>String</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>是否只读</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clearable</td>\n<td>是否展示快速清除按钮</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>组件尺寸</td>\n<td><code>&quot;default&quot;</code> &#124; <code>&quot;small&quot;</code> &#124; <code>&quot;mini&quot;</code></td>\n<td><code>&quot;default&quot;</code></td>\n</tr>\n<tr>\n<td>rows</td>\n<td>当<code>type = &quot;textarea&quot;</code>时，默认展示文本行数</td>\n<td><code>Number</code> &#124; <code>String</code></td>\n<td><code>2</code></td>\n</tr>\n<tr>\n<td>spellcheck</td>\n<td><code>textarea</code>是否进行拼写检查</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>fluid</td>\n<td>是否宽度100%</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>autoWidth</td>\n<td>是否宽度随输入的文本的长度变化而变化</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>width</td>\n<td>指定宽度，组件会加上单位<code>px</code></td>\n<td><code>String</code>  &#124; <code>Number</code></td>\n<td><code>undefined</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>prepend</td>\n<td>往<code>input</code>前面追加内容</td>\n</tr>\n<tr>\n<td>append</td>\n<td>往<code>input</code>后面追加内容</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>往<code>input</code>头部追加前缀</td>\n</tr>\n<tr>\n<td>suffix</td>\n<td>往<code>input</code>尾部追加后缀</td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>事件名</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>clear</td>\n<td>点击清除按钮时触发</td>\n<td>-</td>\n</tr>\n</tbody>\n                    </table>\n                </div>","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":50,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmFzaWMvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2NsZWFyYWJsZS9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9zaXplL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0IGRlbW9zLippbmRleC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2F1dG93aWR0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYXV0b3dpZHRoL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmFzaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jhc2ljL2luZGV4LnN0eWw/NWMxNiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmFzaWMvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5zdHlsPzMzNjEiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvY2xlYXJhYmxlL2luZGV4LnN0eWw/MDNmMSIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvY2xlYXJhYmxlL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3Mvc2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3Mvc2l6ZS9pbmRleC5zdHlsP2I4ZGQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL3NpemUvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy90ZXh0YXJlYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvdGV4dGFyZWEvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanNvbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwidGVtcGxhdGUiLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsImUiLCJjYWxsIiwidmFsdWUiLCJfX2MiLCJfX24iLCJnZXQiLCJwcmVwZW5kIiwiYXBwZW5kIiwicHJlZml4Iiwic3VmZml4IiwiciIsImRlbW9zIiwia2V5cyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxnQkFBZ0IsR0FBRzs7QUFFekU7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxxREFBc0QsZ0JBQWdCLEdBQUc7O0FBRXpFOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EscURBQXNELGdCQUFnQixHQUFHOztBQUV6RTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxnQkFBZ0IsR0FBRzs7QUFFekU7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0N0QlFBLE87Ozs7QUFDUjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHSyxpQkFBT0MsUUFBUCxFOzs7Ozs7Ozs7OzZCQUNNQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNMSSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQzs7QUFFcERGLFdBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFVBQVFBLE1BQU0sRUFBZDtBQUNBRSxhQUFXQSxTQUFTLEVBQXBCO0FBQ0EsTUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLE1BQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsTUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxNQUEyREMsVUFBVSxRQUFRLEtB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QUUsaUVBQWlFLDRJQUE0SSxFQUFFLEVBQUUsaUJBQWlCLCtMQUErTCxnSkFBZ0osNlBBQTZQLDZGQUE2RixHQUFHLGVBQWUsRSIsImZpbGUiOiJzdGF0aWMvY2h1bmsvODYwMDFlMDNkNzliZDVjNTkzZDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leGFtcGxlLmluZGV4LTQ1IC5rLWlucHV0IHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA0NCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtNDYgLmstaW5wdXQge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leGFtcGxlLmluZGV4LTQ3IC5rLWlucHV0IHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9jbGVhcmFibGUvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvY2xlYXJhYmxlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDQyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhhbXBsZS5pbmRleC00OCAuay1pbnB1dCB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3Mvc2l6ZS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9zaXplL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDQxIiwidmFyIG1hcCA9IHtcblx0XCIuL2RlbW9zL2F1dG93aWR0aC9pbmRleC5qc1wiOiBcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2F1dG93aWR0aC9pbmRleC5qc1wiLFxuXHRcIi4vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9iYXNpYy9pbmRleC5qc1wiLFxuXHRcIi4vZGVtb3MvYmxvY2tzL2luZGV4LmpzXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LmpzXCIsXG5cdFwiLi9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9jbGVhcmFibGUvaW5kZXguanNcIixcblx0XCIuL2RlbW9zL3NpemUvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9zaXplL2luZGV4LmpzXCIsXG5cdFwiLi9kZW1vcy90ZXh0YXJlYS9pbmRleC5qc1wiOiBcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL3RleHRhcmVhL2luZGV4LmpzXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc2l0ZS9jb21wb25lbnRzL2lucHV0IHJlY3Vyc2l2ZSBkZW1vcy4qaW5kZXguanMkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQgZGVtb3MuKmluZGV4LmpzJFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQgcmVjdXJzaXZlIGRlbW9zLippbmRleC5qcyRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2F1dG93aWR0aC9pbmRleC5qcyIsImltcG9ydCBJbnB1dCBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5yZXR1cm4gaChJbnB1dCwgeydwbGFjZWhvbGRlcic6ICdhdXRvIHdpZHRoJywgJ2F1dG9XaWR0aCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2F1dG93aWR0aC9pbmRleC52ZHQiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDQ0IiwiaW1wb3J0IElucHV0IGZyb20gJ2twYy9jb21wb25lbnRzL2lucHV0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goSW5wdXQsIHsncGxhY2Vob2xkZXInOiAncGxlYXNlIGVudGVyJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAndmFsdWUnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ3ZhbHVlJywgX19uKSB9fSksICcgJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCd2YWx1ZScpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdcXG4gICAgJywgaCgnYnInKSwgaChJbnB1dCwgeydkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogJ2Rpc2FibGVkJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmFzaWMvaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA0MyIsImltcG9ydCBJbnB1dCBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7aW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKElucHV0LCB7J3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLnByZXBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJ2h0dHA6Ly8nO30pICYmIChfX2Jsb2Nrcy5wcmVwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnByZXBlbmQgPyBibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MucHJlcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJy5jb20nO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSksIGgoSW5wdXQsIHsncGxhY2Vob2xkZXInOiAncGxlYXNlIGVudGVyJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgJ19ibG9ja3MnOiBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKF9ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoQnV0dG9uLCB7J2ljb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0eXBlJzogJ25vbmUnLCAnY2hpbGRyZW4nOiBoKCdpJywgbnVsbCwgbnVsbCwgJ2lvbi1pb3Mtc2VhcmNoJyksICdfY29udGV4dCc6IHRoaXN9KTt9KSAmJiAoX19ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmFwcGVuZCA/IGJsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmFwcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pLCBoKElucHV0LCB7J3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKEJ1dHRvbiwgeydpY29uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdwcmltYXJ5JywgJ2NoaWxkcmVuJzogaCgnaScsIG51bGwsIG51bGwsICdpb24taW9zLXNlYXJjaCcpLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgaChJbnB1dCwgeydwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaChCdXR0b24sIHsndHlwZSc6ICdwcmltYXJ5JywgJ2NoaWxkcmVuJzogJ+aQnOe0oicsICdfY29udGV4dCc6IHRoaXN9KTt9KSAmJiAoX19ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmFwcGVuZCA/IGJsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmFwcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pLCBoKElucHV0LCB7J3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLnByZWZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdpJywgbnVsbCwgbnVsbCwgJ2lvbi1lYXJ0aCcpO30pICYmIChfX2Jsb2Nrcy5wcmVmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MucHJlZml4ID8gYmxvY2tzLnByZWZpeC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MucHJlZml4LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5wcmVmaXguY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgKF9ibG9ja3Muc3VmZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1zZWFyY2gnKTt9KSAmJiAoX19ibG9ja3Muc3VmZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnN1ZmZpeCA/IGJsb2Nrcy5zdWZmaXguY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnN1ZmZpeC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Muc3VmZml4LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pLCBoKElucHV0LCB7J3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLnByZXBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJ2h0dHA6Ly8nO30pICYmIChfX2Jsb2Nrcy5wcmVwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnByZXBlbmQgPyBibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MucHJlcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJy5jb20nO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgKF9ibG9ja3MucHJlZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWVhcnRoJyk7fSkgJiYgKF9fYmxvY2tzLnByZWZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5wcmVmaXggPyBibG9ja3MucHJlZml4LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5wcmVmaXguY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLnByZWZpeC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiAoX2Jsb2Nrcy5zdWZmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaCgnaScsIG51bGwsIG51bGwsICdpb24taW9zLXNlYXJjaCcpO30pICYmIChfX2Jsb2Nrcy5zdWZmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3Muc3VmZml4ID8gYmxvY2tzLnN1ZmZpeC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3Muc3VmZml4LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5zdWZmaXguY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSldKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9jbGVhcmFibGUvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvY2xlYXJhYmxlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2NsZWFyYWJsZS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA0MiIsImltcG9ydCBJbnB1dCBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKElucHV0LCB7J2NsZWFyYWJsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaCgnYnInKSwgaChJbnB1dCwgeydjbGVhcmFibGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5zdWZmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaCgnaScsIG51bGwsIG51bGwsICdpb24taW9zLXNlYXJjaCcpO30pICYmIChfX2Jsb2Nrcy5zdWZmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3Muc3VmZml4ID8gYmxvY2tzLnN1ZmZpeC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3Muc3VmZml4LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5zdWZmaXguY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSldKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9jbGVhcmFibGUvaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9zaXplL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL3NpemUvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3Mvc2l6ZS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA0MSIsImltcG9ydCBJbnB1dCBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7aW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKElucHV0LCB7J3ZhbHVlJzogJ2RlZmF1bHQnLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ2JyJyksIGgoSW5wdXQsIHsndmFsdWUnOiAnc21hbGwnLCAnc2l6ZSc6ICdzbWFsbCcsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaChJbnB1dCwgeydzaXplJzogJ3NtYWxsJywgJ3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLnByZXBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJ2h0dHA6Ly8nO30pICYmIChfX2Jsb2Nrcy5wcmVwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnByZXBlbmQgPyBibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MucHJlcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJy5jb20nO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSksIGgoSW5wdXQsIHsnc2l6ZSc6ICdzbWFsbCcsICdwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaChCdXR0b24sIHsnc2l6ZSc6ICdzbWFsbCcsICdpY29uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdwcmltYXJ5JywgJ2NoaWxkcmVuJzogaCgnaScsIG51bGwsIG51bGwsICdpb24taW9zLXNlYXJjaCcpLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgaChJbnB1dCwgeydzaXplJzogJ3NtYWxsJywgJ3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKEJ1dHRvbiwgeyd0eXBlJzogJ3ByaW1hcnknLCAnc2l6ZSc6ICdzbWFsbCcsICdjaGlsZHJlbic6ICdTZWFyY2gnLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgaChJbnB1dCwgeyd2YWx1ZSc6ICdtaW5pJywgJ3NpemUnOiAnbWluaScsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL3NpemUvaW5kZXgudmR0IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL3RleHRhcmVhL2luZGV4LmpzIiwiaW1wb3J0IElucHV0IGZyb20gJ2twYy9jb21wb25lbnRzL2lucHV0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goSW5wdXQsIHsndHlwZSc6ICd0ZXh0YXJlYScsICdwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ2JyJyksIGgoSW5wdXQsIHsndHlwZSc6ICd0ZXh0YXJlYScsICdyb3dzJzogJzUnLCAncGxhY2Vob2xkZXInOiAncGxlYXNlIGVudGVyJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvdGV4dGFyZWEvaW5kZXgudmR0IiwiaW1wb3J0IEFydGljbGUgZnJvbSAnfi9zcmMvY29tcG9uZW50cy9hcnRpY2xlJztcbmltcG9ydCBkYXRhIGZyb20gJy4vaW5kZXguanNvbic7XG5cbmNvbnN0IHIgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL2RlbW9zLippbmRleC5qcyQvKTtcbmNvbnN0IGRlbW9zID0gci5rZXlzKCkubWFwKHIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEFydGljbGUge1xuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4gey4uLnN1cGVyLmRlZmF1bHRzKCksIC4uLmRhdGEsIGRlbW9zfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIui+k+WFpeahhlwiLFwiY2F0ZWdvcnlcIjpcIue7hOS7tlwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWxnuaApzwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuexu+WeizwvdGg+XFxuPHRoPum7mOiupOWAvDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPnR5cGU8L3RkPlxcbjx0ZD7lnKjljp/nlJ88Y29kZT5pbnB1dDwvY29kZT7moIfnrb7nmoQ8Y29kZT50eXBlPC9jb2RlPuWPluWAvOeahOWfuuehgOS4iuaJqeWxleS6hjxjb2RlPnRleHRhcmVhPC9jb2RlPuWAvCzlvZPmiJHmlLnlgLzml7bmuLLmn5PmiJA8Y29kZT50ZXh0YXJlYTwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5TdHJpbmc8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+JnF1b3Q7dGV4dCZxdW90OzwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5uYW1lPC90ZD5cXG48dGQ+5Y6f55SfPGNvZGU+aW5wdXQ8L2NvZGU+5qCH562+55qEPGNvZGU+bmFtZTwvY29kZT7lsZ7mgKc8L3RkPlxcbjx0ZD48Y29kZT5TdHJpbmc8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+dW5kZWZpbmVkPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnZhbHVlPC90ZD5cXG48dGQ+6L6T5YWl5qGG55qE5YC8LOWPr+eUqDxjb2RlPnYtbW9kZWw8L2NvZGU+6L+b6KGM5Y+M5ZCR57uR5a6aPC90ZD5cXG48dGQ+PGNvZGU+U3RyaW5nPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnVuZGVmaW5lZDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5kZWZhdWx0VmFsdWU8L3RkPlxcbjx0ZD48Y29kZT5pbnB1dDwvY29kZT7nmoQ8Y29kZT5kZWZhdWx0VmFsdWU8L2NvZGU+77yM6aaW5qyh5riy5p+T5L2/55So6K+l5YC8PC90ZD5cXG48dGQ+PGNvZGU+U3RyaW5nPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnVuZGVmaW5lZDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5wbGFjZWhvbGRlcjwvdGQ+XFxuPHRkPuWNoOS9jeaWh+ahiDwvdGQ+XFxuPHRkPjxjb2RlPlN0cmluZzwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT51bmRlZmluZWQ8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+cmVhZG9ubHk8L3RkPlxcbjx0ZD7mmK/lkKblj6ror7s8L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPmZhbHNlPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmNsZWFyYWJsZTwvdGQ+XFxuPHRkPuaYr+WQpuWxleekuuW/q+mAn+a4hemZpOaMiemSrjwvdGQ+XFxuPHRkPjxjb2RlPkJvb2xlYW48L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+ZmFsc2U8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+ZGlzYWJsZWQ8L3RkPlxcbjx0ZD7mmK/lkKbnpoHnlKg8L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPmZhbHNlPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnNpemU8L3RkPlxcbjx0ZD7nu4Tku7blsLrlr7g8L3RkPlxcbjx0ZD48Y29kZT4mcXVvdDtkZWZhdWx0JnF1b3Q7PC9jb2RlPiAmIzEyNDsgPGNvZGU+JnF1b3Q7c21hbGwmcXVvdDs8L2NvZGU+ICYjMTI0OyA8Y29kZT4mcXVvdDttaW5pJnF1b3Q7PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPiZxdW90O2RlZmF1bHQmcXVvdDs8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+cm93czwvdGQ+XFxuPHRkPuW9kzxjb2RlPnR5cGUgPSAmcXVvdDt0ZXh0YXJlYSZxdW90OzwvY29kZT7ml7bvvIzpu5jorqTlsZXnpLrmlofmnKzooYzmlbA8L3RkPlxcbjx0ZD48Y29kZT5OdW1iZXI8L2NvZGU+ICYjMTI0OyA8Y29kZT5TdHJpbmc8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+MjwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5zcGVsbGNoZWNrPC90ZD5cXG48dGQ+PGNvZGU+dGV4dGFyZWE8L2NvZGU+5piv5ZCm6L+b6KGM5ou85YaZ5qOA5p+lPC90ZD5cXG48dGQ+PGNvZGU+Qm9vbGVhbjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5mYWxzZTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5mbHVpZDwvdGQ+XFxuPHRkPuaYr+WQpuWuveW6pjEwMCU8L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPmZhbHNlPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmF1dG9XaWR0aDwvdGQ+XFxuPHRkPuaYr+WQpuWuveW6pumaj+i+k+WFpeeahOaWh+acrOeahOmVv+W6puWPmOWMluiAjOWPmOWMljwvdGQ+XFxuPHRkPjxjb2RlPkJvb2xlYW48L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+ZmFsc2U8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+d2lkdGg8L3RkPlxcbjx0ZD7mjIflrprlrr3luqbvvIznu4Tku7bkvJrliqDkuIrljZXkvY08Y29kZT5weDwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5TdHJpbmc8L2NvZGU+ICAmIzEyNDsgPGNvZGU+TnVtYmVyPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnVuZGVmaW5lZDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7lkI3np7A8L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5wcmVwZW5kPC90ZD5cXG48dGQ+5b6APGNvZGU+aW5wdXQ8L2NvZGU+5YmN6Z2i6L+95Yqg5YaF5a65PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+YXBwZW5kPC90ZD5cXG48dGQ+5b6APGNvZGU+aW5wdXQ8L2NvZGU+5ZCO6Z2i6L+95Yqg5YaF5a65PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+cHJlZml4PC90ZD5cXG48dGQ+5b6APGNvZGU+aW5wdXQ8L2NvZGU+5aS06YOo6L+95Yqg5YmN57yAPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+c3VmZml4PC90ZD5cXG48dGQ+5b6APGNvZGU+aW5wdXQ8L2NvZGU+5bC+6YOo6L+95Yqg5ZCO57yAPC90ZD5cXG48L3RyPlxcbjwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj48aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+PGRpdiBjbGFzcz1cXFwiay10YWJsZS13cmFwcGVyIGstYm9yZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiay10YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXG48dGg+5LqL5Lu25ZCNPC90aD5cXG48dGg+6K+05piOPC90aD5cXG48dGg+5Y+C5pWwPC90aD5cXG48L3RyPlxcbjwvdGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5Pjx0cj5cXG48dGQ+Y2xlYXI8L3RkPlxcbjx0ZD7ngrnlh7vmuIXpmaTmjInpkq7ml7bop6blj5E8L3RkPlxcbjx0ZD4tPC90ZD5cXG48L3RyPlxcbjwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjUwLFwic2lkZUJhcnNcIjp7XCLnu4Tku7ZcIjpbe1widGl0bGVcIjpcIumdouWMheWxkVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9icmVhZGNydW1iL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiQnJlYWRjcnVtYlwiLFwicGF0aFwiOlwiI2hlYWRlci1CcmVhZGNydW1iXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CcmVhZGNydW1iJz5CcmVhZGNydW1iPC9oMj5cIixcInRleHRcIjpcIkJyZWFkY3J1bWJcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJCcmVhZGNydW1iSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1CcmVhZGNydW1iSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnJlYWRjcnVtYkl0ZW0nPkJyZWFkY3J1bWJJdGVtPC9oMj5cIixcInRleHRcIjpcIkJyZWFkY3J1bWJJdGVtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuaMiemSrlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9idXR0b24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCdXR0b25cIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b24nPkJ1dHRvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25cIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJCdXR0b25Hcm91cFwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25Hcm91cFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQnV0dG9uR3JvdXAnPkJ1dHRvbkdyb3VwPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvbkdyb3VwXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTUnPuaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCdXR0b25cIixcInBhdGhcIjpcIiNoZWFkZXItQnV0dG9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b24nPkJ1dHRvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJCdXR0b25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5aSN6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2NoZWNrYm94L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLml6XmnJ/pgInmi6lcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5by556qXXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2RpYWxvZy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5LiL5ouJ6I+c5Y2VXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRHJvcGRvd25cIixcInBhdGhcIjpcIiNoZWFkZXItRHJvcGRvd25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duJz5Ecm9wZG93bjwvaDI+XCIsXCJ0ZXh0XCI6XCJEcm9wZG93blwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkRyb3Bkb3duSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93bkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMj5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkRyb3Bkb3duSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93bkl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLURyb3Bkb3duSXRlbSc+RHJvcGRvd25JdGVtPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLlj6/nvJbovpHmlofmnKxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZWRpdGFibGUvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuihqOWNlVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9mb3JtL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybUl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybUl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm1JdGVtJz5Gb3JtSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybUl0ZW1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybUl0ZW1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm1JdGVtJz5Gb3JtSXRlbTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtSXRlbVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLpnZnmgIHmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTUnPumdmeaAgeaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLpnZnmgIHmlrnms5VcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLmoIXmoLxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZ3JpZC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlJvd1wiLFwicGF0aFwiOlwiI2hlYWRlci1Sb3dcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVJvdyc+Um93PC9oMj5cIixcInRleHRcIjpcIlJvd1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkNvbFwiLFwicGF0aFwiOlwiI2hlYWRlci1Db2xcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUNvbCc+Q29sPC9oMj5cIixcInRleHRcIjpcIkNvbFwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLovpPlhaXmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvaW5wdXQvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWFqOWxgOaPkOekulwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9tZXNzYWdlL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1Jz7pnZnmgIHmlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi6Z2Z5oCB5pa55rOVXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLliIbpobVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlBhZ2luYXRpb25cIixcInBhdGhcIjpcIiNoZWFkZXItUGFnaW5hdGlvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItUGFnaW5hdGlvbic+UGFnaW5hdGlvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJQYWdpbmF0aW9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIui/m+W6puadoVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9wcm9ncmVzcy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5Y2V6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3JhZGlvL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLpgInmi6nmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc2VsZWN0L2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiU2VsZWN0XCIsXCJwYXRoXCI6XCIjaGVhZGVyLVNlbGVjdFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU2VsZWN0Jz5TZWxlY3Q8L2gyPlwiLFwidGV4dFwiOlwiU2VsZWN0XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiT3B0aW9uXCIsXCJwYXRoXCI6XCIjaGVhZGVyLU9wdGlvblwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItT3B0aW9uJz5PcHRpb248L2gyPlwiLFwidGV4dFwiOlwiT3B0aW9uXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIua7keWdl1wiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zbGlkZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaVsOWtl+i+k+WFpeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zcGlubmVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmraXpqqTmnaFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvc3RlcHMvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJTdGVwc1wiLFwicGF0aFwiOlwiI2hlYWRlci1TdGVwc1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItU3RlcHMnPlN0ZXBzPC9oMj5cIixcInRleHRcIjpcIlN0ZXBzXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiU3RlcFwiLFwicGF0aFwiOlwiI2hlYWRlci1TdGVwXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TdGVwJz5TdGVwPC9oMj5cIixcInRleHRcIjpcIlN0ZXBcIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi56m/5qKt5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3RyYW5zZmVyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19XX0sXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTA3Il0sInNvdXJjZVJvb3QiOiIifQ==