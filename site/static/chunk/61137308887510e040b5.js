webpackJsonp([138],{

/***/ "./components/switch/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Switch = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/switch/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/switch/index.styl");

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

var Switch = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Switch, _Intact);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'defaults',
        value: function defaults() {
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
        }
    }, {
        key: '_init',
        value: function _init() {
            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            if (e.which !== 1) return;

            this._x = e.clientX;
            this._height = this.refs.bar.clientHeight;
            this._width = this.refs.bar.clientWidth;
            this._maxWidth = this.element.clientWidth;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            this.set('_dragging', true);

            var left = e.clientX - this._x;
            var width = Math.min(Math.max(this._height, this._width + left), this._maxWidth);
            this.refs.bar.style.width = width + 'px';
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            this.set('_dragging', false);

            var bar = this.refs.bar;

            // treat mousedown -> mouseup as click
            if (this._x === e.clientX) {
                this._toggle();
            } else {
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

            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_toggle',
        value: function _toggle() {
            if (this.get('disabled')) return;

            if (this.isChecked()) {
                this.uncheck();
            } else {
                this.check();
            }
        }
    }, {
        key: 'isChecked',
        value: function isChecked() {
            return this.get('value') === this.get('trueValue');
        }
    }, {
        key: 'check',
        value: function check() {
            this.set('value', this.get('trueValue'));
        }
    }, {
        key: 'uncheck',
        value: function uncheck() {
            this.set('value', this.get('falseValue'));
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(e) {
            e.stopPropagation();
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Switch;
}(_intact2.default), _class2.propTypes = {
    disabled: Boolean
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Switch;
exports.Switch = Switch;

/***/ }),

/***/ "./components/switch/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/switch/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {
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

    var _require = __webpack_require__("./components/utils.js"),
        addStyle = _require.addStyle;

    var _self$get = self.get(),
        className = _self$get.className,
        style = _self$get.style,
        children = _self$get.children,
        name = _self$get.name,
        on = _self$get.on,
        off = _self$get.off,
        value = _self$get.value,
        trueValue = _self$get.trueValue,
        falseValue = _self$get.falseValue,
        width = _self$get.width,
        height = _self$get.height,
        size = _self$get.size,
        disabled = _self$get.disabled,
        _dragging = _self$get._dragging;

    var classNameObj = (_classNameObj = {
        'k-switch': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-checked', value === trueValue), _defineProperty(_classNameObj, 'k-' + size, true), _defineProperty(_classNameObj, 'k-disabled', disabled), _defineProperty(_classNameObj, 'k-dragging', _dragging), _classNameObj);

    var onStyle = void 0;
    var offStyle = void 0;
    var barStyle = void 0;
    if (width && height) {
        style = addStyle(style, {
            width: width + 'px',
            height: height + 'px',
            borderRadius: height + 'px',
            lineHeight: height + 'px'
        });
        var textLeft = height / 3;
        var textWidth = width - height - textLeft;
        onStyle = {
            left: textLeft + 'px',
            width: textWidth + 'px'
        };
        offStyle = {
            left: height + 'px',
            width: textWidth + 'px'
        };
        barStyle = {
            width: value === trueValue ? '100%' : height + 'px'
        };
    }

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._toggle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('input', { 'type': 'checkbox', 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), checked: _detectCheckboxChecked(self, 'value', function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), 'ev-change': function evChange(__e) {
            _setCheckboxModel(self, 'value', function () {
                try {
                    return [trueValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function () {
                try {
                    return [falseValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), __e);
        } }, null, null, null, function (i) {
        widgets['input'] = i;
    }), function () {
        try {
            return [off || blocks.off][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [offStyle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, (_blocks.off = function (parent) {
        return function () {
            try {
                return [off][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks.off = function (parent) {
        var self = this;
        return blocks.off ? blocks.off.call(this, function () {
            return _blocks.off.call(self, parent);
        }) : _blocks.off.call(this, parent);
    }) && __blocks.off.call(this), 'k-off') : undefined, h('div', { 'style': function () {
            try {
                return [barStyle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [on || blocks.on][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', { 'style': function () {
            try {
                return [onStyle][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, (_blocks.on = function (parent) {
        return function () {
            try {
                return [on][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks.on = function (parent) {
        var self = this;
        return blocks.on ? blocks.on.call(this, function () {
            return _blocks.on.call(self, parent);
        }) : _blocks.on.call(this, parent);
    }) && __blocks.on.call(this), 'k-on') : undefined, h('div', null, h('div', { 'ev-click': function () {
            try {
                return [self._handleClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [self._dragStart][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h('img', { 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }), 'k-handle', null, function (i) {
        widgets['handle'] = i;
    }), 'k-wrapper')], 'k-bar', null, function (i) {
        widgets['bar'] = i;
    })], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/switch/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".k-switch {\n  display: inline-block;\n  vertical-align: middle;\n  background: #eee;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.k-switch input {\n  opacity: 0;\n  position: absolute;\n}\n.k-switch .k-bar {\n  position: absolute;\n  text-align: right;\n  overflow: hidden;\n}\n.k-switch .k-wrapper {\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n  border-radius: 100%;\n}\n.k-switch .k-bar,\n.k-switch .k-wrapper {\n  height: 100%;\n  background: #eee;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-switch .k-handle {\n  border-radius: 100%;\n  background: #fff;\n  height: 100%;\n  cursor: pointer;\n  -webkit-transition: left 0.25s ease-in-out;\n  transition: left 0.25s ease-in-out;\n  display: inline-block;\n}\n.k-switch .k-handle img {\n  height: 100%;\n  visibility: hidden;\n}\n.k-switch .k-on,\n.k-switch .k-off {\n  position: absolute;\n  font-size: 0.857142857142857rem;\n  color: #fff;\n  text-align: center;\n}\n.k-switch.k-dragging .k-bar,\n.k-switch.k-dragging .k-wrapper {\n  background: #0a5eee;\n  -webkit-transition: background 0.25s ease-in-out;\n  transition: background 0.25s ease-in-out;\n}\n.k-switch.k-default {\n  width: 3.428571428571428rem;\n  height: 1.714285714285714rem;\n  line-height: 1.714285714285714rem;\n  border-radius: 1.714285714285714rem;\n}\n.k-switch.k-default .k-bar {\n  width: 1.714285714285714rem;\n  border-radius: 1.714285714285714rem;\n}\n.k-switch.k-default .k-wrapper {\n  padding: 0.142857142857143rem;\n}\n.k-switch.k-default .k-on,\n.k-switch.k-default .k-off {\n  width: 1.142857142857143rem;\n}\n.k-switch.k-default .k-on {\n  left: 0.571428571428571rem;\n}\n.k-switch.k-default .k-off {\n  left: 1.714285714285714rem;\n}\n.k-switch.k-small {\n  width: 2.571428571428572rem;\n  height: 1.285714285714286rem;\n  line-height: 1.285714285714286rem;\n  border-radius: 1.285714285714286rem;\n}\n.k-switch.k-small .k-bar {\n  width: 1.285714285714286rem;\n  border-radius: 1.285714285714286rem;\n}\n.k-switch.k-small .k-wrapper {\n  padding: 0.142857142857143rem;\n}\n.k-switch.k-small .k-on,\n.k-switch.k-small .k-off {\n  width: 0.857142857142857rem;\n}\n.k-switch.k-small .k-on {\n  left: 0.428571428571429rem;\n}\n.k-switch.k-small .k-off {\n  left: 1.285714285714286rem;\n}\n.k-switch.k-mini {\n  width: 1.714285714285714rem;\n  height: 0.857142857142857rem;\n  line-height: 0.857142857142857rem;\n  border-radius: 0.857142857142857rem;\n}\n.k-switch.k-mini .k-bar {\n  width: 0.857142857142857rem;\n  border-radius: 0.857142857142857rem;\n}\n.k-switch.k-mini .k-wrapper {\n  padding: 0.071428571428571rem;\n}\n.k-switch.k-mini .k-on,\n.k-switch.k-mini .k-off {\n  width: 0.571428571428571rem;\n}\n.k-switch.k-mini .k-on {\n  left: 0.285714285714286rem;\n}\n.k-switch.k-mini .k-off {\n  left: 0.857142857142857rem;\n}\n.k-switch.k-checked .k-bar,\n.k-switch.k-checked .k-wrapper {\n  background: #0a5eee;\n}\n.k-switch.k-checked .k-bar {\n  width: 100%;\n}\n.k-switch.k-disabled {\n  background: #e6e6e6;\n  cursor: not-allowed;\n}\n.k-switch.k-disabled .k-bar,\n.k-switch.k-disabled .k-wrapper {\n  background: #e6e6e6;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-36 .k-form-item > .k-label {\n  width: 150px;\n}\n.example.index-36 .k-slider,\n.example.index-36 .k-select {\n  width: 300px;\n}\n.example.index-36 .k-radio,\n.example.index-36 .k-checkbox {\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/form/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/form/demos/basic/index.styl");

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
        key: 'defaults',
        value: function defaults() {
            return {
                model: {
                    checkbox: []
                }
            };
        }
    }, {
        key: 'submit',
        value: function submit() {
            _message2.default.success('验证通过，开始提交');
            console.log(this.get('model'));
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.refs.form.reset();
            console.log(this.get('model'));
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

/***/ "./site/components/form/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/basic/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/form/demos/basic/index.vdt":
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

  return h(_form.Form, { 'ev-submit': function () {
      try {
        return [self.submit][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': [h(_form.FormItem, { 'label': 'Input', 'model': 'model.input', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_input.Input, { 'children': null, '_context': this, value: _getModel(self, 'model.input'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.input', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Select', 'model': 'model.select', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_select.Select, { 'children': [h(_select.Option, { 'value': 'Javascript', 'children': 'Javascript', '_context': this }), h(_select.Option, { 'value': 'PHP', 'children': 'PHP', '_context': this }), h(_select.Option, { 'value': 'C++', 'children': 'C++', '_context': this })], '_context': this, value: _getModel(self, 'model.select'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.select', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Checkbox', 'model': 'model.checkbox', 'rules': function () {
        try {
          return [{ required: true, maxLength: 2 }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': [h(_checkbox.Checkbox, { 'trueValue': 'Javascript', 'children': 'Javascript', '_context': this, value: _getModel(self, 'model.checkbox'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.checkbox', __n);
        } }), h(_checkbox.Checkbox, { 'trueValue': 'PHP', 'children': 'PHP', '_context': this, value: _getModel(self, 'model.checkbox'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.checkbox', __n);
        } }), h(_checkbox.Checkbox, { 'trueValue': 'C++', 'children': 'C++', '_context': this, value: _getModel(self, 'model.checkbox'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.checkbox', __n);
        } })], '_context': this }), h(_form.FormItem, { 'label': 'Radio', 'model': 'model.radio', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': [h(_radio.Radio, { 'trueValue': 'Javascript', 'children': 'Javascript', '_context': this, value: _getModel(self, 'model.radio'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.radio', __n);
        } }), h(_radio.Radio, { 'trueValue': 'PHP', 'children': 'PHP', '_context': this, value: _getModel(self, 'model.radio'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.radio', __n);
        } }), h(_radio.Radio, { 'trueValue': 'C++', 'children': 'C++', '_context': this, value: _getModel(self, 'model.radio'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.radio', __n);
        } })], '_context': this }), h(_form.FormItem, { 'label': 'Radio ButtonGroup', 'model': 'model.buttonGroup', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'messages': function () {
        try {
          return [{ required: '必须选择' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_button.ButtonGroup, { 'checkType': 'radio', 'children': [h(_button.Button, { 'value': 'Javascript', 'children': 'Javascript', '_context': this }), h(_button.Button, { 'value': 'PHP', 'children': 'PHP', '_context': this }), h(_button.Button, { 'value': 'C++', 'children': 'C++', '_context': this })], '_context': this, value: _getModel(self, 'model.buttonGroup'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.buttonGroup', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Switch', 'children': h(_switch.Switch, { 'children': null, '_context': this, value: _getModel(self, 'model.switch'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.switch', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Slider', 'children': h(_slider.Slider, { 'isShowInput': function () {
          try {
            return [false][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': null, '_context': this, value: _getModel(self, 'model.slider'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.slider', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Textarea', 'model': 'model.textarea', 'children': h(_input.Input, { 'type': 'textarea', 'children': null, '_context': this, value: _getModel(self, 'model.textarea'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.textarea', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Password', 'model': 'model.password', 'rules': function () {
        try {
          return [{ required: true }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_input.Input, { 'type': 'password', 'children': null, '_context': this, value: _getModel(self, 'model.password'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.password', __n);
        } }), '_context': this }), h(_form.FormItem, { 'label': 'Confirm Password', 'model': 'model.confirmPassword', 'rules': function () {
        try {
          return [{ required: true, equalTo: 'model.password' }][0];
        } catch (e) {
          _e(e);
        }
      }.call(this), 'children': h(_input.Input, { 'type': 'password', 'children': null, '_context': this, value: _getModel(self, 'model.confirmPassword'), 'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, 'model.confirmPassword', __n);
        } }), '_context': this }), h(_form.FormItem, { 'children': [h(_button.Button, { 'type': 'primary', 'htmlType': 'submit', 'children': '提交', '_context': this }), h(_button.Button, { 'style': 'margin-left: 20px', 'ev-click': function () {
          try {
            return [self.reset][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': '重置', '_context': this })], '_context': this })], '_context': this }, null, null, null, function (i) {
    widgets['form'] = i;
  });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

var _select = __webpack_require__("./components/select/index.js");

var _checkbox = __webpack_require__("./components/checkbox/index.js");

var _radio = __webpack_require__("./components/radio/index.js");

var _button = __webpack_require__("./components/button/index.js");

var _switch = __webpack_require__("./components/switch/index.js");

var _slider = __webpack_require__("./components/slider/index.js");

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5zdHlsP2UzNDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zd2l0Y2gvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3dpdGNoL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC5zdHlsP2EwMjYiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sIm5hbWVzIjpbIlN3aXRjaCIsInRlbXBsYXRlIiwibmFtZSIsInVuZGVmaW5lZCIsIm9uIiwib2ZmIiwidmFsdWUiLCJ0cnVlVmFsdWUiLCJmYWxzZVZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplIiwiZGlzYWJsZWQiLCJfZHJhZ2dpbmciLCJfbW92ZSIsImJpbmQiLCJfZHJhZ0VuZCIsImUiLCJ3aGljaCIsIl94IiwiY2xpZW50WCIsIl9oZWlnaHQiLCJyZWZzIiwiYmFyIiwiY2xpZW50SGVpZ2h0IiwiX3dpZHRoIiwiY2xpZW50V2lkdGgiLCJfbWF4V2lkdGgiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0IiwibGVmdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdHlsZSIsIl90b2dnbGUiLCJwZXJjZW50IiwiaXNDaGVja2VkIiwiY2hlY2siLCJ1bmNoZWNrIiwiZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsInJlcXVpcmUiLCJhZGRTdHlsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lT2JqIiwib25TdHlsZSIsIm9mZlN0eWxlIiwiYmFyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJsaW5lSGVpZ2h0IiwidGV4dExlZnQiLCJ0ZXh0V2lkdGgiLCJjYWxsIiwiY2hlY2tlZCIsIl9fZSIsImkiLCJfaGFuZGxlQ2xpY2siLCJfZHJhZ1N0YXJ0IiwiZGVmYXVsdCIsIm1vZGVsIiwiY2hlY2tib3giLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJyZXNldCIsInN1Ym1pdCIsInJlcXVpcmVkIiwiX19jIiwiX19uIiwibWF4TGVuZ3RoIiwiZXF1YWxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTSxXQUNoQixpQkFBT0MsUUFBUCxFOzs7Ozs7Ozs7OzttQ0FHVTtBQUNQLG1CQUFPO0FBQ0hDLHNCQUFNQyxTQURIO0FBRUhDLG9CQUFJRCxTQUZEO0FBR0hFLHFCQUFLRixTQUhGO0FB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QUFBRTFDLG9CQUFVUSxJQUFWLEVBQWdCLHVCQUFoQixFQUF5Q2tDLEdBQXpDO0FBQStDLFNBQWxNLEVBQVQsQ0FBOUwsRUFBNlksWUFBWSxJQUF6WixFQUFaLENBQTNoSixFQUF3OEo1RCxrQkFBWSxFQUFDLFlBQVksQ0FBQ0Esa0JBQVUsRUFBQyxRQUFRLFNBQVQsRUFBb0IsWUFBWSxRQUFoQyxFQUEwQyxZQUFZLElBQXRELEVBQTRELFlBQVksSUFBeEUsRUFBVixDQUFELEVBQTJGQSxrQkFBVSxFQUFDLFNBQVMsbUJBQVYsRUFBK0IsWUFBWSxZQUFXO0FBQUMsY0FBSTtBQUFDLG1CQUFPLENBQUMwQixLQUFLOEIsS0FBTixFQUFjLENBQWQsQ0FBUDtBQUF3QixXQUE3QixDQUE4QixPQUFNM0YsQ0FBTixFQUFTO0FBQUM2QyxlQUFHN0MsQ0FBSDtBQUFNO0FBQUMsU0FBM0QsQ0FBNEQ4RSxJQUE1RCxDQUFpRSxJQUFqRSxDQUEzQyxFQUFtSCxZQUFZLElBQS9ILEVBQXFJLFlBQVksSUFBakosRUFBVixDQUEzRixDQUFiLEVBQTRRLFlBQVksSUFBeFIsRUFBWixDQUF4OEosQ0FBbkcsRUFBdzFLLFlBQVksSUFBcDJLLEVBQVIsRUFBbTNLLElBQW4zSyxFQUF5M0ssSUFBejNLLEVBQSszSyxJQUEvM0ssRUFBcTRLLFVBQVNHLENBQVQsRUFBWTtBQUFDMUMsWUFBUSxNQUFSLElBQWtCMEMsQ0FBbEI7QUFBb0IsR0FBdDZLLENBQVA7QUFDQyxDOztBQXRCRDs7QUFBbUQ7O0FBQTJDOztBQUFxRDs7QUFBaUQ7O0FBQTJDOztBQUEwRDs7QUFBNkMiLCJmaWxlIjoic3RhdGljL2NodW5rLzYxMTM3MzA4ODg3NTEwZTA0MGI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpdGNoIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgb2ZmOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICB0cnVlVmFsdWU6IHRydWUsXG4gICAgICAgICAgICBmYWxzZVZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcblxuICAgICAgICAgICAgX2RyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9tb3ZlID0gdGhpcy5fbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5fZHJhZ0VuZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9kcmFnU3RhcnQoZSkge1xuICAgICAgICBpZiAoZS53aGljaCAhPT0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX3ggPSBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHRoaXMucmVmcy5iYXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMucmVmcy5iYXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuX21heFdpZHRoID0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgX21vdmUoZSkge1xuICAgICAgICB0aGlzLnNldCgnX2RyYWdnaW5nJywgdHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbGVmdCA9IGUuY2xpZW50WCAtIHRoaXMuX3g7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5taW4oXG4gICAgICAgICAgICBNYXRoLm1heCh0aGlzLl9oZWlnaHQsIHRoaXMuX3dpZHRoICsgbGVmdCksXG4gICAgICAgICAgICB0aGlzLl9tYXhXaWR0aFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlZnMuYmFyLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIH1cblxuICAgIF9kcmFnRW5kKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19kcmFnZ2luZycsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBiYXIgPSB0aGlzLnJlZnMuYmFyO1xuXG4gICAgICAgIC8vIHRyZWF0IG1vdXNlZG93biAtPiBtb3VzZXVwIGFzIGNsaWNrXG4gICAgICAgIGlmICh0aGlzLl94ID09PSBlLmNsaWVudFgpIHtcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IChiYXIuY2xpZW50V2lkdGggLSB0aGlzLl9oZWlnaHQgLyAyKSAvIHRoaXMuX21heFdpZHRoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA+PSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnQgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2soKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGVja2VkKCkgJiYgdGhpcy5nZXQoJ3dpZHRoJykgJiYgdGhpcy5nZXQoJ2hlaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXMgc2V0IHdpZHRoIGFuZCBoZWlnaHRcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUud2lkdGggPSB0aGlzLmdldCgnaGVpZ2h0JykgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXIuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZHJhZ0VuZCk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5jaGVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDaGVja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZhbHVlJykgPT09IHRoaXMuZ2V0KCd0cnVlVmFsdWUnKTtcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy5nZXQoJ3RydWVWYWx1ZScpKTtcbiAgICB9XG5cbiAgICB1bmNoZWNrKCkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0aGlzLmdldCgnZmFsc2VWYWx1ZScpKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtTd2l0Y2h9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zd2l0Y2gvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvc3dpdGNoL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxMjYgMTM4IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7YWRkU3R5bGV9ID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubGV0IHtcbiAgICBjbGFzc05hbWUsIHN0eWxlLCBjaGlsZHJlbixcbiAgICBuYW1lLCBvbiwgb2ZmLCB2YWx1ZSxcbiAgICB0cnVlVmFsdWUsIGZhbHNlVmFsdWUsIHdpZHRoLFxuICAgIGhlaWdodCwgc2l6ZSwgZGlzYWJsZWQsIF9kcmFnZ2luZ1xufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1zd2l0Y2gnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stY2hlY2tlZCc6IHZhbHVlID09PSB0cnVlVmFsdWUsIFxuICAgIFtgay0ke3NpemV9YF06IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnay1kcmFnZ2luZyc6IF9kcmFnZ2luZyxcbn07XG5cblxubGV0IG9uU3R5bGU7XG5sZXQgb2ZmU3R5bGU7XG5sZXQgYmFyU3R5bGU7XG5pZiAod2lkdGggJiYgaGVpZ2h0KSB7XG4gICAgc3R5bGUgPSBhZGRTdHlsZShzdHlsZSwge1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgbGluZUhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0TGVmdCA9IGhlaWdodCAvIDM7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gd2lkdGggLSBoZWlnaHQgLSB0ZXh0TGVmdDtcbiAgICBvblN0eWxlID0ge1xuICAgICAgICBsZWZ0OiBgJHt0ZXh0TGVmdH1weGAsXG4gICAgICAgIHdpZHRoOiBgJHt0ZXh0V2lkdGh9cHhgLFxuICAgIH07XG4gICAgb2ZmU3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIHdpZHRoOiBgJHt0ZXh0V2lkdGh9cHhgLFxuICAgIH07XG4gICAgYmFyU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB2YWx1ZSA9PT0gdHJ1ZVZhbHVlID8gJzEwMCUnIDogYCR7aGVpZ2h0fXB4YCxcbiAgICB9O1xufVxuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fdG9nZ2xlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbaCgnaW5wdXQnLCB7J3R5cGUnOiAnY2hlY2tib3gnLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGNoZWNrZWQ6IF9kZXRlY3RDaGVja2JveENoZWNrZWQoc2VsZiwgJ3ZhbHVlJywgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2V2LWNoYW5nZSc6IGZ1bmN0aW9uKF9fZSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2V0Q2hlY2tib3hNb2RlbChzZWxmLCAndmFsdWUnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmYWxzZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9fZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvZmYgfHwgYmxvY2tzLm9mZiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvZmZTdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgKF9ibG9ja3Mub2ZmID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvZmYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKTt9KSAmJiAoX19ibG9ja3Mub2ZmID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLm9mZiA/IGJsb2Nrcy5vZmYuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLm9mZi5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Mub2ZmLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLm9mZi5jYWxsKHRoaXMpLCAnay1vZmYnKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtiYXJTdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtvbiB8fCBibG9ja3Mub24gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbb25TdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgKF9ibG9ja3Mub24gPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW29uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyk7fSkgJiYgKF9fYmxvY2tzLm9uID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLm9uID8gYmxvY2tzLm9uLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5vbi5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Mub24uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3Mub24uY2FsbCh0aGlzKSwgJ2stb24nKSA6IHVuZGVmaW5lZCwgaCgnZGl2JywgbnVsbCwgaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9oYW5kbGVDbGljayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtbW91c2Vkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgaCgnaW1nJywgeydzcmMnOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3J30pLCAnay1oYW5kbGUnLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snaGFuZGxlJ10gPSBpfSksICdrLXdyYXBwZXInKV0sICdrLWJhcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydiYXInXSA9IGl9KV0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC52ZHQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLXN3aXRjaCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uay1zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmstc3dpdGNoIC5rLWJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5rLXN3aXRjaCAuay13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4uay1zd2l0Y2ggLmstYmFyLFxcbi5rLXN3aXRjaCAuay13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc3dpdGNoIC5rLWhhbmRsZSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5rLXN3aXRjaCAuay1oYW5kbGUgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmstc3dpdGNoIC5rLW9uLFxcbi5rLXN3aXRjaCAuay1vZmYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uay1zd2l0Y2guay1kcmFnZ2luZyAuay1iYXIsXFxuLmstc3dpdGNoLmstZHJhZ2dpbmcgLmstd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjMGE1ZWVlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc3dpdGNoLmstZGVmYXVsdCB7XFxuICB3aWR0aDogMy40Mjg1NzE0Mjg1NzE0MjhyZW07XFxuICBoZWlnaHQ6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS43MTQyODU3MTQyODU3MTRyZW07XFxufVxcbi5rLXN3aXRjaC5rLWRlZmF1bHQgLmstYmFyIHtcXG4gIHdpZHRoOiAxLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1zd2l0Y2guay1kZWZhdWx0IC5rLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLXN3aXRjaC5rLWRlZmF1bHQgLmstb24sXFxuLmstc3dpdGNoLmstZGVmYXVsdCAuay1vZmYge1xcbiAgd2lkdGg6IDEuMTQyODU3MTQyODU3MTQzcmVtO1xcbn1cXG4uay1zd2l0Y2guay1kZWZhdWx0IC5rLW9uIHtcXG4gIGxlZnQ6IDAuNTcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zd2l0Y2guay1kZWZhdWx0IC5rLW9mZiB7XFxuICBsZWZ0OiAxLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG59XFxuLmstc3dpdGNoLmstc21hbGwge1xcbiAgd2lkdGg6IDIuNTcxNDI4NTcxNDI4NTcycmVtO1xcbiAgaGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMjg1NzE0Mjg1NzE0Mjg2cmVtO1xcbn1cXG4uay1zd2l0Y2guay1zbWFsbCAuay1iYXIge1xcbiAgd2lkdGg6IDEuMjg1NzE0Mjg1NzE0Mjg2cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMC4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLW9uLFxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLW9mZiB7XFxuICB3aWR0aDogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXN3aXRjaC5rLXNtYWxsIC5rLW9uIHtcXG4gIGxlZnQ6IDAuNDI4NTcxNDI4NTcxNDI5cmVtO1xcbn1cXG4uay1zd2l0Y2guay1zbWFsbCAuay1vZmYge1xcbiAgbGVmdDogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLXN3aXRjaC5rLW1pbmkge1xcbiAgd2lkdGg6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgaGVpZ2h0OiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1zd2l0Y2guay1taW5pIC5rLWJhciB7XFxuICB3aWR0aDogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG59XFxuLmstc3dpdGNoLmstbWluaSAuay13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zd2l0Y2guay1taW5pIC5rLW9uLFxcbi5rLXN3aXRjaC5rLW1pbmkgLmstb2ZmIHtcXG4gIHdpZHRoOiAwLjU3MTQyODU3MTQyODU3MXJlbTtcXG59XFxuLmstc3dpdGNoLmstbWluaSAuay1vbiB7XFxuICBsZWZ0OiAwLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG59XFxuLmstc3dpdGNoLmstbWluaSAuay1vZmYge1xcbiAgbGVmdDogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXN3aXRjaC5rLWNoZWNrZWQgLmstYmFyLFxcbi5rLXN3aXRjaC5rLWNoZWNrZWQgLmstd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kOiAjMGE1ZWVlO1xcbn1cXG4uay1zd2l0Y2guay1jaGVja2VkIC5rLWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmstc3dpdGNoLmstZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLXN3aXRjaC5rLWRpc2FibGVkIC5rLWJhcixcXG4uay1zd2l0Y2guay1kaXNhYmxlZCAuay13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9zd2l0Y2gvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3N3aXRjaC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTI2IDEzOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtMzYgLmstZm9ybS1pdGVtID4gLmstbGFiZWwge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG4uZXhhbXBsZS5pbmRleC0zNiAuay1zbGlkZXIsXFxuLmV4YW1wbGUuaW5kZXgtMzYgLmstc2VsZWN0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLmV4YW1wbGUuaW5kZXgtMzYgLmstcmFkaW8sXFxuLmV4YW1wbGUuaW5kZXgtMzYgLmstY2hlY2tib3gge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyNiAxMzgiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxuXG5pbXBvcnQgTWVzc2FnZSBmcm9tICdrcGMvY29tcG9uZW50cy9tZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94OiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgTWVzc2FnZS5zdWNjZXNzKCfpqozor4HpgJrov4fvvIzlvIDlp4vmj5DkuqQnKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXQoJ21vZGVsJykpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnJlZnMuZm9ybS5yZXNldCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldCgnbW9kZWwnKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvYmFzaWMvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTI2IDEzOCIsImltcG9ydCB7Rm9ybSwgRm9ybUl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Zvcm0nO2ltcG9ydCB7SW5wdXR9IGZyb20gJ2twYy9jb21wb25lbnRzL2lucHV0JztpbXBvcnQge1NlbGVjdCwgT3B0aW9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9zZWxlY3QnO2ltcG9ydCB7Q2hlY2tib3h9IGZyb20gJ2twYy9jb21wb25lbnRzL2NoZWNrYm94JztpbXBvcnQge1JhZGlvfSBmcm9tICdrcGMvY29tcG9uZW50cy9yYWRpbyc7aW1wb3J0IHtCdXR0b25Hcm91cCwgQnV0dG9ufSBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO2ltcG9ydCB7U3dpdGNofSBmcm9tICdrcGMvY29tcG9uZW50cy9zd2l0Y2gnO2ltcG9ydCB7U2xpZGVyfSBmcm9tICdrcGMvY29tcG9uZW50cy9zbGlkZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuXG5cblxuXG5cblxucmV0dXJuIGgoRm9ybSwgeydldi1zdWJtaXQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5zdWJtaXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goRm9ybUl0ZW0sIHsnbGFiZWwnOiAnSW5wdXQnLCAnbW9kZWwnOiAnbW9kZWwuaW5wdXQnLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiB0cnVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKElucHV0LCB7J2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuaW5wdXQnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLmlucHV0JywgX19uKSB9fSksICdfY29udGV4dCc6IHRoaXN9KSwgaChGb3JtSXRlbSwgeydsYWJlbCc6ICdTZWxlY3QnLCAnbW9kZWwnOiAnbW9kZWwuc2VsZWN0JywgJ3J1bGVzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogdHJ1ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ21lc3NhZ2VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogJ+W/hemhu+mAieaLqSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoU2VsZWN0LCB7J2NoaWxkcmVuJzogW2goT3B0aW9uLCB7J3ZhbHVlJzogJ0phdmFzY3JpcHQnLCAnY2hpbGRyZW4nOiAnSmF2YXNjcmlwdCcsICdfY29udGV4dCc6IHRoaXN9KSwgaChPcHRpb24sIHsndmFsdWUnOiAnUEhQJywgJ2NoaWxkcmVuJzogJ1BIUCcsICdfY29udGV4dCc6IHRoaXN9KSwgaChPcHRpb24sIHsndmFsdWUnOiAnQysrJywgJ2NoaWxkcmVuJzogJ0MrKycsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLnNlbGVjdCcpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwuc2VsZWN0JywgX19uKSB9fSksICdfY29udGV4dCc6IHRoaXN9KSwgaChGb3JtSXRlbSwgeydsYWJlbCc6ICdDaGVja2JveCcsICdtb2RlbCc6ICdtb2RlbC5jaGVja2JveCcsICdydWxlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMn0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ21lc3NhZ2VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogJ+W/hemhu+mAieaLqSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtoKENoZWNrYm94LCB7J3RydWVWYWx1ZSc6ICdKYXZhc2NyaXB0JywgJ2NoaWxkcmVuJzogJ0phdmFzY3JpcHQnLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5jaGVja2JveCcpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwuY2hlY2tib3gnLCBfX24pIH19KSwgaChDaGVja2JveCwgeyd0cnVlVmFsdWUnOiAnUEhQJywgJ2NoaWxkcmVuJzogJ1BIUCcsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLmNoZWNrYm94JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5jaGVja2JveCcsIF9fbikgfX0pLCBoKENoZWNrYm94LCB7J3RydWVWYWx1ZSc6ICdDKysnLCAnY2hpbGRyZW4nOiAnQysrJywgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuY2hlY2tib3gnKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLmNoZWNrYm94JywgX19uKSB9fSldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRm9ybUl0ZW0sIHsnbGFiZWwnOiAnUmFkaW8nLCAnbW9kZWwnOiAnbW9kZWwucmFkaW8nLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiB0cnVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbWVzc2FnZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiAn5b+F6aG76YCJ5oupJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goUmFkaW8sIHsndHJ1ZVZhbHVlJzogJ0phdmFzY3JpcHQnLCAnY2hpbGRyZW4nOiAnSmF2YXNjcmlwdCcsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLnJhZGlvJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5yYWRpbycsIF9fbikgfX0pLCBoKFJhZGlvLCB7J3RydWVWYWx1ZSc6ICdQSFAnLCAnY2hpbGRyZW4nOiAnUEhQJywgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwucmFkaW8nKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgJ21vZGVsLnJhZGlvJywgX19uKSB9fSksIGgoUmFkaW8sIHsndHJ1ZVZhbHVlJzogJ0MrKycsICdjaGlsZHJlbic6ICdDKysnLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5yYWRpbycpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwucmFkaW8nLCBfX24pIH19KV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChGb3JtSXRlbSwgeydsYWJlbCc6ICdSYWRpbyBCdXR0b25Hcm91cCcsICdtb2RlbCc6ICdtb2RlbC5idXR0b25Hcm91cCcsICdydWxlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6IHRydWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdtZXNzYWdlcyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7cmVxdWlyZWQ6ICflv4XpobvpgInmi6knfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKEJ1dHRvbkdyb3VwLCB7J2NoZWNrVHlwZSc6ICdyYWRpbycsICdjaGlsZHJlbic6IFtoKEJ1dHRvbiwgeyd2YWx1ZSc6ICdKYXZhc2NyaXB0JywgJ2NoaWxkcmVuJzogJ0phdmFzY3JpcHQnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoQnV0dG9uLCB7J3ZhbHVlJzogJ1BIUCcsICdjaGlsZHJlbic6ICdQSFAnLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoQnV0dG9uLCB7J3ZhbHVlJzogJ0MrKycsICdjaGlsZHJlbic6ICdDKysnLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5idXR0b25Hcm91cCcpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwuYnV0dG9uR3JvdXAnLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ1N3aXRjaCcsICdjaGlsZHJlbic6IGgoU3dpdGNoLCB7J2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuc3dpdGNoJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5zd2l0Y2gnLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ1NsaWRlcicsICdjaGlsZHJlbic6IGgoU2xpZGVyLCB7J2lzU2hvd0lucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLnNsaWRlcicpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwuc2xpZGVyJywgX19uKSB9fSksICdfY29udGV4dCc6IHRoaXN9KSwgaChGb3JtSXRlbSwgeydsYWJlbCc6ICdUZXh0YXJlYScsICdtb2RlbCc6ICdtb2RlbC50ZXh0YXJlYScsICdjaGlsZHJlbic6IGgoSW5wdXQsIHsndHlwZSc6ICd0ZXh0YXJlYScsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ21vZGVsLnRleHRhcmVhJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC50ZXh0YXJlYScsIF9fbikgfX0pLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoRm9ybUl0ZW0sIHsnbGFiZWwnOiAnUGFzc3dvcmQnLCAnbW9kZWwnOiAnbW9kZWwucGFzc3dvcmQnLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe3JlcXVpcmVkOiB0cnVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKElucHV0LCB7J3R5cGUnOiAncGFzc3dvcmQnLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCB2YWx1ZTogX2dldE1vZGVsKHNlbGYsICdtb2RlbC5wYXNzd29yZCcpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCAnbW9kZWwucGFzc3dvcmQnLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ0NvbmZpcm0gUGFzc3dvcmQnLCAnbW9kZWwnOiAnbW9kZWwuY29uZmlybVBhc3N3b3JkJywgJ3J1bGVzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tyZXF1aXJlZDogdHJ1ZSwgZXF1YWxUbzogJ21vZGVsLnBhc3N3b3JkJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaChJbnB1dCwgeyd0eXBlJzogJ3Bhc3N3b3JkJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCAnbW9kZWwuY29uZmlybVBhc3N3b3JkJyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdtb2RlbC5jb25maXJtUGFzc3dvcmQnLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKEZvcm1JdGVtLCB7J2NoaWxkcmVuJzogW2goQnV0dG9uLCB7J3R5cGUnOiAncHJpbWFyeScsICdodG1sVHlwZSc6ICdzdWJtaXQnLCAnY2hpbGRyZW4nOiAn5o+Q5LqkJywgJ19jb250ZXh0JzogdGhpc30pLCBoKEJ1dHRvbiwgeydzdHlsZSc6ICdtYXJnaW4tbGVmdDogMjBweCcsICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLnJlc2V0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6ICfph43nva4nLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zvcm0nXSA9IGl9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=