webpackJsonp([19,82,83,84,110],{

/***/ "./site/components/message recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/basic/index.js": "./site/components/message/demos/basic/index.js",
	"./demos/custom/index.js": "./site/components/message/demos/custom/index.js",
	"./demos/duration/index.js": "./site/components/message/demos/duration/index.js"
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
webpackContext.id = "./site/components/message recursive demos.*index.js$";

/***/ }),

/***/ "./site/components/message/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/message/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/message/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

var _message = __webpack_require__("./components/message/index.js");

var _message2 = _interopRequireDefault(_message);

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

    _createClass(_default, [{
        key: 'showMessage',
        value: function showMessage(type) {
            _message2.default[type](type);
        }
    }]);

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

/***/ "./site/components/message/demos/basic/index.vdt":
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

  return h(_button.ButtonGroup, { 'children': _Vdt.utils.map(function () {
      try {
        return [['info', 'error', 'warning', 'success']][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), function (value, key) {
      return h(_button.Button, { 'ev-click': function () {
          try {
            return [self.showMessage.bind(self, value)][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': function () {
          try {
            return [value][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), '_context': this });
    }, this), '_context': this });
};

var _button = __webpack_require__("./components/button/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/message/demos/custom/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/message/demos/custom/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/message/demos/custom/index.vdt");

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

    _createClass(_default, [{
        key: 'defaults',
        value: function defaults() {
            return {
                percent: 10,
                show: false
            };
        }
    }, {
        key: 'add',
        value: function add() {
            this.set('percent', this.get('percent') + 5);
        }
    }]);

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

/***/ "./site/components/message/demos/custom/index.vdt":
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

  return h('div', null, [h(_button.Button, { 'ev-click': function () {
      try {
        return [function () {
          return self.set('show', true);
        }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': 'custom message', '_context': this }), h(_message2.default, { 'key': 'message', 'duration': function () {
      try {
        return [0][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'type': function () {
      try {
        return [self.get('percent') >= 100 ? 'success' : 'info'][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': h(_progress.Progress, { 'style': 'width: 200px', 'percent': function () {
        try {
          return [self.get('percent')][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'ev-click': function () {
        try {
          return [self.add][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': null, '_context': this }), '_context': this, value: _getModel(self, 'show'), 'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'show', __n);
    } })]);
};

var _message = __webpack_require__("./components/message/index.js");

var _message2 = _interopRequireDefault(_message);

var _button = __webpack_require__("./components/button/index.js");

var _progress = __webpack_require__("./components/progress/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/message/demos/duration/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/message/demos/duration/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/message/demos/duration/index.vdt");

var _index3 = _interopRequireDefault(_index2);

var _message = __webpack_require__("./components/message/index.js");

var _message2 = _interopRequireDefault(_message);

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

    _createClass(_default, [{
        key: 'showMessage1',
        value: function showMessage1() {
            _message2.default.info('close after 10s', 10000);
        }
    }, {
        key: 'showMessage2',
        value: function showMessage2() {
            _message2.default.info('stick message', 0);
        }
    }]);

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

/***/ "./site/components/message/demos/duration/index.vdt":
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

  return h(_button.ButtonGroup, { 'children': [h(_button.Button, { 'ev-click': function () {
        try {
          return [self.showMessage1][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': 'close after 10s', '_context': this }), h(_button.Button, { 'ev-click': function () {
        try {
          return [self.showMessage2][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': 'stick message', '_context': this })], '_context': this });
};

var _button = __webpack_require__("./components/button/index.js");

module.exports = exports['default'];

/***/ }),

/***/ "./site/components/message/index.js":
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

var _index = __webpack_require__("./site/components/message/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/message recursive demos.*index.js$");
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

/***/ "./site/components/message/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"全局提示","category":"组件","order":0},"catalogs":[],"contents":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>content</td>\n<td>提示内容</td>\n<td><code>String</code> &#124; <code>VNode</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>提示展示多长时间后自动关闭，当传入0时，提示将会一直展示。单位ms</td>\n<td><code>Number</code></td>\n<td><code>5000</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>提示类型</td>\n<td><code>&quot;info&quot;</code> &#124; <code>&quot;error&quot;</code> &#124; <code>&quot;success&quot;</code> &#124; <code>&quot;warning&quot;</code></td>\n<td><code>&quot;info&quot;</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否展示关闭按钮</td>\n<td><code>Boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>key</td>\n<td>组件的<code>key</code>，当作为组件而非静态方法调用时，必须指定</td>\n<td><code>String</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>用于标识是否展示，可用<code>v-model</code>建立双向绑定</td>\n<td><code>Boolean</code></td>\n<td>false</td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>info</td>\n<td>普通提示</td>\n<td><code>content, duration</code> &#124; <code>config</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>error</td>\n<td>错误提示</td>\n<td><code>content, duration</code> &#124; <code>config</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>success</td>\n<td>成功提示</td>\n<td><code>content, duration</code> &#124; <code>config</code></td>\n<td>-</td>\n</tr>\n<tr>\n<td>warning</td>\n<td>警告提示</td>\n<td><code>content, duration</code> &#124; <code>config</code></td>\n<td>-</td>\n</tr>\n</tbody>\n                    </table>\n                </div><p>其中<code>content</code>和<code>duration</code>参数说明如下：</p>\n<div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>参数名</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>content</td>\n<td>提示的内容</td>\n<td><code>String</code> &#124; <code>VNode</code></td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>提示展示多长时间后自动关闭，当传入<code>0</code>时，提示将会一直展示。单位ms</td>\n<td><code>Number</code></td>\n<td><code>5000</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><p>上述静态方法的另一种重载方式是，传入<code>Object</code>作为参数，此时<code>config</code>可以配置如下：</p>\n<div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性名</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>content</td>\n<td>同上</td>\n<td>同上</td>\n<td>同上</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>同上</td>\n<td>同上</td>\n<td>同上</td>\n</tr>\n<tr>\n<td>type</td>\n<td>同上</td>\n<td>同上</td>\n<td>同上</td>\n</tr>\n<tr>\n<td>closable</td>\n<td>同上</td>\n<td>同上</td>\n<td>同上</td>\n</tr>\n</tbody>\n                    </table>\n                </div>","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":54,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Breadcrumb","path":"#header-Breadcrumb","level":2,"content":"<h2 id='header-Breadcrumb'>Breadcrumb</h2>","text":"Breadcrumb","children":[]},{"title":"BreadcrumbItem","path":"#header-BreadcrumbItem","level":2,"content":"<h2 id='header-BreadcrumbItem'>BreadcrumbItem</h2>","text":"BreadcrumbItem","children":[]}]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"可编辑文本","path":"components/editable/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"表单","path":"components/form/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[{"title":"FormItem","path":"#header-FormItem","level":2,"content":"<h2 id='header-FormItem'>FormItem</h2>","text":"FormItem","children":[]}]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[{"title":"Form","path":"#header-Form","level":2,"content":"<h2 id='header-Form'>Form</h2>","text":"Form","children":[]}]}]},{"title":"栅格","path":"components/grid/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Row","path":"#header-Row","level":2,"content":"<h2 id='header-Row'>Row</h2>","text":"Row","children":[]},{"title":"Col","path":"#header-Col","level":2,"content":"<h2 id='header-Col'>Col</h2>","text":"Col","children":[]}]}]},{"title":"输入框","path":"components/input/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"全局提示","path":"components/message/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"静态方法","path":"#header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95'>静态方法</h1>","text":"静态方法","children":[]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"进度条","path":"components/progress/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"选择框","path":"components/select/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Select","path":"#header-Select","level":2,"content":"<h2 id='header-Select'>Select</h2>","text":"Select","children":[]},{"title":"Option","path":"#header-Option","level":2,"content":"<h2 id='header-Option'>Option</h2>","text":"Option","children":[]}]}]},{"title":"滑块","path":"components/slider/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"数字输入框","path":"components/spinner/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"步骤条","path":"components/steps/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Steps","path":"#header-Steps","level":2,"content":"<h2 id='header-Steps'>Steps</h2>","text":"Steps","children":[]},{"title":"Step","path":"#header-Step","level":2,"content":"<h2 id='header-Step'>Step</h2>","text":"Step","children":[]}]}]},{"title":"表格","path":"components/table/index.md","children":[{"title":"表格属性 Table","path":"#header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table","level":1,"content":"<h1 id='header-%E8%A1%A8%E6%A0%BC%E5%B1%9E%E6%80%A7%20Table'>表格属性 Table</h1>","text":"表格属性 Table","children":[]}]},{"title":"穿梭框","path":"components/transfer/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]}],"undefined":[{"title":"基本用法","path":"components/table/demo/basic.md","children":[]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZSBkZW1vcy4qaW5kZXguanMkIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9jdXN0b20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvY3VzdG9tL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9kdXJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9kdXJhdGlvbi9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXguanNvbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwidGVtcGxhdGUiLCJ0eXBlIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJtYXAiLCJlIiwiY2FsbCIsInZhbHVlIiwia2V5Iiwic2hvd01lc3NhZ2UiLCJiaW5kIiwicGVyY2VudCIsInNob3ciLCJzZXQiLCJnZXQiLCJhZGQiLCJfX2MiLCJfX24iLCJpbmZvIiwic2hvd01lc3NhZ2UxIiwic2hvd01lc3NhZ2UyIiwiciIsImRlbW9zIiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENDbkJRQSxPOzs7O0FBQ1I7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHSyxpQkFBT0MsUUFBUCxFOzs7Ozs7Ozs7OztvQ0FHV0MsSSxFQUFNO0FBQ2QsOEJBQVFBLElBQVIsRUFBY0EsSUFBZDtBQUNIOzs7OzZCQUpNRCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNQSSxVQUFTRSxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQzs7QUFFcERGLFdBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFVBQVFBLE1BQU0sRUFBZDtBQUNBRSxhQUFXQSxTQUFTLEVBQXBCO0FBQ0EsTUFBSUcsSUFBSUosS0FBS0ssSUFBTCxDQUFVRCxDQUFsQjtBQUFBLE1BQXFCRSxLQUFLTixLQUFLSyxJQUFMLENBQVVDLEVBQXBDO0FBQUEsTUFBd0NDLEtBQUtQLEtBQUtLLElBQUwsQ0FBVUUsRUFBdkQ7QUFBQSxNQUEyREMsVUFBVSxRQUFRLEtBQUtBLE9BQWIsSUFBd0IsRUFBN0Y7QUFBQSxNQUFpR0MsVUFBVSxFQUEzRztBQUFBLE1BQStHQyxXQUFXLEVBQTFI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LEVBQUUsRUFBRSw4REFBOEQsNElBQTRJLEVBQUUsRUFBRSwrREFBK0QsMklBQTJJLGdJQUFnSSxFQUFFLGdJQUFnSSxFQUFFLEVBQUUsRUFBRSw4REFBOEQsNElBQTRJLEVBQUUsRUFBRSxrRUFBa0UsNElBQTRJLEVBQUUsRUFBRSw4REFBOEQsMklBQTJJLDJIQUEySCxFQUFFLHNIQUFzSCxFQUFFLEVBQUUsRUFBRSw2REFBNkQsd05BQXdOLEVBQUUsRUFBRSxpRUFBaUUsNElBQTRJLEVBQUUsZ0JBQWdCLHFFQUFxRSxFQUFFLGlCQUFpQiwrTEFBK0wsZ0pBQWdKLDZQQUE2UCw2RkFBNkYsR0FBRyxlQUFlLEUiLCJmaWxlIjoic3RhdGljL2NodW5rL2NlZmFkZmU0MzkwM2U4MDlhMzIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9iYXNpYy9pbmRleC5qc1wiLFxuXHRcIi4vZGVtb3MvY3VzdG9tL2luZGV4LmpzXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9jdXN0b20vaW5kZXguanNcIixcblx0XCIuL2RlbW9zL2R1cmF0aW9uL2luZGV4LmpzXCI6IFwiLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9kdXJhdGlvbi9pbmRleC5qc1wiXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlIHJlY3Vyc2l2ZSBkZW1vcy4qaW5kZXguanMkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZSBkZW1vcy4qaW5kZXguanMkXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlIHJlY3Vyc2l2ZSBkZW1vcy4qaW5kZXguanMkXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5cbmltcG9ydCBNZXNzYWdlIGZyb20gJ2twYy9jb21wb25lbnRzL21lc3NhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzaG93TWVzc2FnZSh0eXBlKSB7XG4gICAgICAgIE1lc3NhZ2VbdHlwZV0odHlwZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwiaW1wb3J0IHtCdXR0b25Hcm91cCwgQnV0dG9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbnJldHVybiBoKEJ1dHRvbkdyb3VwLCB7J2NoaWxkcmVuJzogX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW1snaW5mbycsICdlcnJvcicsICd3YXJuaW5nJywgJ3N1Y2Nlc3MnXSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5yZXR1cm4gaChCdXR0b24sIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5zaG93TWVzc2FnZS5iaW5kKHNlbGYsIHZhbHVlKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ19jb250ZXh0JzogdGhpc30pO1xufSwgdGhpcyksICdfY29udGV4dCc6IHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwZXJjZW50OiAxMCwgXG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3BlcmNlbnQnLCB0aGlzLmdldCgncGVyY2VudCcpICsgNSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2RlbW9zL2N1c3RvbS9pbmRleC5qcyIsImltcG9ydCBNZXNzYWdlIGZyb20gJ2twYy9jb21wb25lbnRzL21lc3NhZ2UnO2ltcG9ydCB7QnV0dG9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO2ltcG9ydCB7UHJvZ3Jlc3N9IGZyb20gJ2twYy9jb21wb25lbnRzL3Byb2dyZXNzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKEJ1dHRvbiwgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsoKSA9PiBzZWxmLnNldCgnc2hvdycsIHRydWUpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6ICdjdXN0b20gbWVzc2FnZScsICdfY29udGV4dCc6IHRoaXN9KSwgaChNZXNzYWdlLCB7J2tleSc6ICdtZXNzYWdlJywgJ2R1cmF0aW9uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWzAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3R5cGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ3BlcmNlbnQnKSA+PSAxMDAgPyAnc3VjY2VzcycgOiAnaW5mbycgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaChQcm9ncmVzcywgeydzdHlsZSc6ICd3aWR0aDogMjAwcHgnLCAncGVyY2VudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgncGVyY2VudCcpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmFkZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ3Nob3cnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ3Nob3cnLCBfX24pIH19KV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvY3VzdG9tL2luZGV4LnZkdCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAna3BjL2NvbXBvbmVudHMvbWVzc2FnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIHNob3dNZXNzYWdlMSgpIHtcbiAgICAgICAgTWVzc2FnZS5pbmZvKCdjbG9zZSBhZnRlciAxMHMnLCAxMDAwMCk7XG4gICAgfVxuXG4gICAgc2hvd01lc3NhZ2UyKCkge1xuICAgICAgICBNZXNzYWdlLmluZm8oJ3N0aWNrIG1lc3NhZ2UnLCAwKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvZGVtb3MvZHVyYXRpb24vaW5kZXguanMiLCJpbXBvcnQge0J1dHRvbkdyb3VwLCBCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxucmV0dXJuIGgoQnV0dG9uR3JvdXAsIHsnY2hpbGRyZW4nOiBbaChCdXR0b24sIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5zaG93TWVzc2FnZTEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogJ2Nsb3NlIGFmdGVyIDEwcycsICdfY29udGV4dCc6IHRoaXN9KSwgaChCdXR0b24sIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5zaG93TWVzc2FnZTIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogJ3N0aWNrIG1lc3NhZ2UnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vcy9kdXJhdGlvbi9pbmRleC52ZHQiLCJpbXBvcnQgQXJ0aWNsZSBmcm9tICd+L3NyYy9jb21wb25lbnRzL2FydGljbGUnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9pbmRleC5qc29uJztcblxuY29uc3QgciA9IHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvZGVtb3MuKmluZGV4LmpzJC8pO1xuY29uc3QgZGVtb3MgPSByLmtleXMoKS5tYXAocik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQXJ0aWNsZSB7XG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7Li4uc3VwZXIuZGVmYXVsdHMoKSwgLi4uZGF0YSwgZGVtb3N9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLlhajlsYDmj5DnpLpcIixcImNhdGVnb3J5XCI6XCLnu4Tku7ZcIixcIm9yZGVyXCI6MH0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7lsZ7mgKc8L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7nsbvlnos8L3RoPlxcbjx0aD7pu5jorqTlgLw8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5jb250ZW50PC90ZD5cXG48dGQ+5o+Q56S65YaF5a65PC90ZD5cXG48dGQ+PGNvZGU+U3RyaW5nPC9jb2RlPiAmIzEyNDsgPGNvZGU+Vk5vZGU8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+dW5kZWZpbmVkPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmR1cmF0aW9uPC90ZD5cXG48dGQ+5o+Q56S65bGV56S65aSa6ZW/5pe26Ze05ZCO6Ieq5Yqo5YWz6Zet77yM5b2T5Lyg5YWlMOaXtu+8jOaPkOekuuWwhuS8muS4gOebtOWxleekuuOAguWNleS9jW1zPC90ZD5cXG48dGQ+PGNvZGU+TnVtYmVyPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPjUwMDA8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+dHlwZTwvdGQ+XFxuPHRkPuaPkOekuuexu+WeizwvdGQ+XFxuPHRkPjxjb2RlPiZxdW90O2luZm8mcXVvdDs8L2NvZGU+ICYjMTI0OyA8Y29kZT4mcXVvdDtlcnJvciZxdW90OzwvY29kZT4gJiMxMjQ7IDxjb2RlPiZxdW90O3N1Y2Nlc3MmcXVvdDs8L2NvZGU+ICYjMTI0OyA8Y29kZT4mcXVvdDt3YXJuaW5nJnF1b3Q7PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPiZxdW90O2luZm8mcXVvdDs8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y2xvc2FibGU8L3RkPlxcbjx0ZD7mmK/lkKblsZXnpLrlhbPpl63mjInpkq48L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnRydWU8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+a2V5PC90ZD5cXG48dGQ+57uE5Lu255qEPGNvZGU+a2V5PC9jb2RlPu+8jOW9k+S9nOS4uue7hOS7tuiAjOmdnumdmeaAgeaWueazleiwg+eUqOaXtu+8jOW/hemhu+aMh+WumjwvdGQ+XFxuPHRkPjxjb2RlPlN0cmluZzwvY29kZT48L3RkPlxcbjx0ZD4tPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+dmFsdWU8L3RkPlxcbjx0ZD7nlKjkuo7moIfor4bmmK/lkKblsZXnpLrvvIzlj6/nlKg8Y29kZT52LW1vZGVsPC9jb2RlPuW7uueri+WPjOWQkee7keWumjwvdGQ+XFxuPHRkPjxjb2RlPkJvb2xlYW48L2NvZGU+PC90ZD5cXG48dGQ+ZmFsc2U8L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMSBpZD0naGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NSc+6Z2Z5oCB5pa55rOVPC9oMT48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7mlrnms5XlkI08L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7lj4LmlbA8L3RoPlxcbjx0aD7ov5Tlm57lgLw8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5pbmZvPC90ZD5cXG48dGQ+5pmu6YCa5o+Q56S6PC90ZD5cXG48dGQ+PGNvZGU+Y29udGVudCwgZHVyYXRpb248L2NvZGU+ICYjMTI0OyA8Y29kZT5jb25maWc8L2NvZGU+PC90ZD5cXG48dGQ+LTwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPmVycm9yPC90ZD5cXG48dGQ+6ZSZ6K+v5o+Q56S6PC90ZD5cXG48dGQ+PGNvZGU+Y29udGVudCwgZHVyYXRpb248L2NvZGU+ICYjMTI0OyA8Y29kZT5jb25maWc8L2NvZGU+PC90ZD5cXG48dGQ+LTwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnN1Y2Nlc3M8L3RkPlxcbjx0ZD7miJDlip/mj5DnpLo8L3RkPlxcbjx0ZD48Y29kZT5jb250ZW50LCBkdXJhdGlvbjwvY29kZT4gJiMxMjQ7IDxjb2RlPmNvbmZpZzwvY29kZT48L3RkPlxcbjx0ZD4tPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+d2FybmluZzwvdGQ+XFxuPHRkPuitpuWRiuaPkOekujwvdGQ+XFxuPHRkPjxjb2RlPmNvbnRlbnQsIGR1cmF0aW9uPC9jb2RlPiAmIzEyNDsgPGNvZGU+Y29uZmlnPC9jb2RlPjwvdGQ+XFxuPHRkPi08L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxwPuWFtuS4rTxjb2RlPmNvbnRlbnQ8L2NvZGU+5ZKMPGNvZGU+ZHVyYXRpb248L2NvZGU+5Y+C5pWw6K+05piO5aaC5LiL77yaPC9wPlxcbjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWPguaVsOWQjTwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuexu+WeizwvdGg+XFxuPHRoPum7mOiupOWAvDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPmNvbnRlbnQ8L3RkPlxcbjx0ZD7mj5DnpLrnmoTlhoXlrrk8L3RkPlxcbjx0ZD48Y29kZT5TdHJpbmc8L2NvZGU+ICYjMTI0OyA8Y29kZT5WTm9kZTwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT51bmRlZmluZWQ8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+ZHVyYXRpb248L3RkPlxcbjx0ZD7mj5DnpLrlsZXnpLrlpJrplb/ml7bpl7TlkI7oh6rliqjlhbPpl63vvIzlvZPkvKDlhaU8Y29kZT4wPC9jb2RlPuaXtu+8jOaPkOekuuWwhuS8muS4gOebtOWxleekuuOAguWNleS9jW1zPC90ZD5cXG48dGQ+PGNvZGU+TnVtYmVyPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPjUwMDA8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjwvdGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj48cD7kuIrov7DpnZnmgIHmlrnms5XnmoTlj6bkuIDnp43ph43ovb3mlrnlvI/mmK/vvIzkvKDlhaU8Y29kZT5PYmplY3Q8L2NvZGU+5L2c5Li65Y+C5pWw77yM5q2k5pe2PGNvZGU+Y29uZmlnPC9jb2RlPuWPr+S7pemFjee9ruWmguS4i++8mjwvcD5cXG48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7lsZ7mgKflkI08L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7nsbvlnos8L3RoPlxcbjx0aD7pu5jorqTlgLw8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5jb250ZW50PC90ZD5cXG48dGQ+5ZCM5LiKPC90ZD5cXG48dGQ+5ZCM5LiKPC90ZD5cXG48dGQ+5ZCM5LiKPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+ZHVyYXRpb248L3RkPlxcbjx0ZD7lkIzkuIo8L3RkPlxcbjx0ZD7lkIzkuIo8L3RkPlxcbjx0ZD7lkIzkuIo8L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD50eXBlPC90ZD5cXG48dGQ+5ZCM5LiKPC90ZD5cXG48dGQ+5ZCM5LiKPC90ZD5cXG48dGQ+5ZCM5LiKPC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y2xvc2FibGU8L3RkPlxcbjx0ZD7lkIzkuIo8L3RkPlxcbjx0ZD7lkIzkuIo8L3RkPlxcbjx0ZD7lkIzkuIo8L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6NTQsXCJzaWRlQmFyc1wiOntcIue7hOS7tlwiOlt7XCJ0aXRsZVwiOlwi6Z2i5YyF5bGRXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2JyZWFkY3J1bWIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJCcmVhZGNydW1iXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJyZWFkY3J1bWJcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJyZWFkY3J1bWInPkJyZWFkY3J1bWI8L2gyPlwiLFwidGV4dFwiOlwiQnJlYWRjcnVtYlwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkJyZWFkY3J1bWJJdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJyZWFkY3J1bWJJdGVtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CcmVhZGNydW1iSXRlbSc+QnJlYWRjcnVtYkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiQnJlYWRjcnVtYkl0ZW1cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5oyJ6ZKuXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2J1dHRvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJ1dHRvblwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbic+QnV0dG9uPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvblwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkJ1dHRvbkdyb3VwXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvbkdyb3VwXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b25Hcm91cCc+QnV0dG9uR3JvdXA8L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uR3JvdXBcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJ1dHRvblwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbic+QnV0dG9uPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLlpI3pgInmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvY2hlY2tib3gvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaXpeacn+mAieaLqVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLlvLnnqpdcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZGlhbG9nL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLkuIvmi4noj5zljZVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZHJvcGRvd24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJEcm9wZG93blwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93blwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd24nPkRyb3Bkb3duPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiRHJvcGRvd25JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd25JdGVtJz5Ecm9wZG93bkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25JdGVtXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gyPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiRHJvcGRvd25JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd25JdGVtJz5Ecm9wZG93bkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuWPr+e8lui+keaWh+acrFwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9lZGl0YWJsZS9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi6KGo5Y2VXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2Zvcm0vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybUl0ZW0nPkZvcm1JdGVtPC9oMj5cIixcInRleHRcIjpcIkZvcm1JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLmianlsZXngrlcIixcInBhdGhcIjpcIiNoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjknPuaJqeWxleeCuTwvaDE+XCIsXCJ0ZXh0XCI6XCLmianlsZXngrlcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtSXRlbVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybUl0ZW0nPkZvcm1JdGVtPC9oMj5cIixcInRleHRcIjpcIkZvcm1JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLkuovku7ZcIixcInBhdGhcIjpcIiNoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjYnPuS6i+S7tjwvaDE+XCIsXCJ0ZXh0XCI6XCLkuovku7ZcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJGb3JtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUZvcm1cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUZvcm0nPkZvcm08L2gyPlwiLFwidGV4dFwiOlwiRm9ybVwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiRm9ybVwiLFwicGF0aFwiOlwiI2hlYWRlci1Gb3JtXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1Gb3JtJz5Gb3JtPC9oMj5cIixcInRleHRcIjpcIkZvcm1cIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIumdmeaAgeaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOSU5RCU5OSVFNiU4MCU4MSVFNiU5NiVCOSVFNiVCMyU5NSc+6Z2Z5oCB5pa55rOVPC9oMT5cIixcInRleHRcIjpcIumdmeaAgeaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkZvcm1cIixcInBhdGhcIjpcIiNoZWFkZXItRm9ybVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRm9ybSc+Rm9ybTwvaDI+XCIsXCJ0ZXh0XCI6XCJGb3JtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuagheagvFwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9ncmlkL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiUm93XCIsXCJwYXRoXCI6XCIjaGVhZGVyLVJvd1wiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItUm93Jz5Sb3c8L2gyPlwiLFwidGV4dFwiOlwiUm93XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiQ29sXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUNvbFwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItQ29sJz5Db2w8L2gyPlwiLFwidGV4dFwiOlwiQ29sXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIui+k+WFpeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9pbnB1dC9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuaJqeWxleeCuVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlODklQTklRTUlQjElOTUlRTclODIlQjlcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOSc+5omp5bGV54K5PC9oMT5cIixcInRleHRcIjpcIuaJqeWxleeCuVwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuS6i+S7tlwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTQlQkElOEIlRTQlQkIlQjZcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNic+5LqL5Lu2PC9oMT5cIixcInRleHRcIjpcIuS6i+S7tlwiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5YWo5bGA5o+Q56S6XCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL21lc3NhZ2UvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCLpnZnmgIHmlrnms5VcIixcInBhdGhcIjpcIiNoZWFkZXItJUU5JTlEJTk5JUU2JTgwJTgxJUU2JTk2JUI5JUU2JUIzJTk1XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTklOUQlOTklRTYlODAlODElRTYlOTYlQjklRTYlQjMlOTUnPumdmeaAgeaWueazlTwvaDE+XCIsXCJ0ZXh0XCI6XCLpnZnmgIHmlrnms5VcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuWIhumhtVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiUGFnaW5hdGlvblwiLFwicGF0aFwiOlwiI2hlYWRlci1QYWdpbmF0aW9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1QYWdpbmF0aW9uJz5QYWdpbmF0aW9uPC9oMj5cIixcInRleHRcIjpcIlBhZ2luYXRpb25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi6L+b5bqm5p2hXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3Byb2dyZXNzL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLljZXpgInmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvcmFkaW8vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIumAieaLqeahhlwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zZWxlY3QvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJTZWxlY3RcIixcInBhdGhcIjpcIiNoZWFkZXItU2VsZWN0XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TZWxlY3QnPlNlbGVjdDwvaDI+XCIsXCJ0ZXh0XCI6XCJTZWxlY3RcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJPcHRpb25cIixcInBhdGhcIjpcIiNoZWFkZXItT3B0aW9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1PcHRpb24nPk9wdGlvbjwvaDI+XCIsXCJ0ZXh0XCI6XCJPcHRpb25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5ruR5Z2XXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3NsaWRlci9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5pWw5a2X6L6T5YWl5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3NwaW5uZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuatpemqpOadoVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9zdGVwcy9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIlN0ZXBzXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVN0ZXBzXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1TdGVwcyc+U3RlcHM8L2gyPlwiLFwidGV4dFwiOlwiU3RlcHNcIixcImNoaWxkcmVuXCI6W119LHtcInRpdGxlXCI6XCJTdGVwXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVN0ZXBcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLVN0ZXAnPlN0ZXA8L2gyPlwiLFwidGV4dFwiOlwiU3RlcFwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLooajmoLxcIixcInBhdGhcIjpcImNvbXBvbmVudHMvdGFibGUvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLooajmoLzlsZ7mgKcgVGFibGVcIixcInBhdGhcIjpcIiNoZWFkZXItJUU4JUExJUE4JUU2JUEwJUJDJUU1JUIxJTlFJUU2JTgwJUE3JTIwVGFibGVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFOCVBMSVBOCVFNiVBMCVCQyVFNSVCMSU5RSVFNiU4MCVBNyUyMFRhYmxlJz7ooajmoLzlsZ7mgKcgVGFibGU8L2gxPlwiLFwidGV4dFwiOlwi6KGo5qC85bGe5oCnIFRhYmxlXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLnqb/moq3moYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvdHJhbnNmZXIvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX1dLFwidW5kZWZpbmVkXCI6W3tcInRpdGxlXCI6XCLln7rmnKznlKjms5VcIixcInBhdGhcIjpcImNvbXBvbmVudHMvdGFibGUvZGVtby9iYXNpYy5tZFwiLFwiY2hpbGRyZW5cIjpbXX1dfSxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9tZXNzYWdlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDE5IDExMCJdLCJzb3VyY2VSb290IjoiIn0=