webpackJsonp([49],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/input/demos/blocks/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-46 .k-input {\n  margin: 5px;\n}\n", ""]);

// exports


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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnN0eWw/MzM2MSIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnZkdCJdLCJuYW1lcyI6WyJkZWZhdWx0IiwidGVtcGxhdGUiLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsInByZXBlbmQiLCJjYWxsIiwiYXBwZW5kIiwiZSIsInByZWZpeCIsInN1ZmZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxnQkFBZ0IsR0FBRzs7QUFFekU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQ1BRQSxPOzs7O0FBQ1I7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0ss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QUFwQixFQUEwQkksTUFBMUIsQ0FBUDtBQUNDLGlCQUZzQixDQUFoQixHQUVGekIsUUFBUWdDLE1BQVIsQ0FBZUosSUFBZixDQUFvQixJQUFwQixFQUEwQkgsTUFBMUIsQ0FGTDtBQUdDLGFBcEJVLEtBb0JMeEIsUUFwQkY7QUFxQkgsU0F2QjJHLENBdUIxRzJCLElBdkIwRyxDQXVCckcsSUF2QnFHLEVBdUIvRixFQXZCK0YsQ0FBL0UsRUFBVCxDQWxERSxDQUFmLENBQVA7QUEwRUMsQzs7QUF6RkQ7Ozs7QUFBeUMiLCJmaWxlIjoic3RhdGljL2NodW5rL2RjODE2ZDViNDAzZjM0YTVhNWUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhhbXBsZS5pbmRleC00NiAuay1pbnB1dCB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA0OSIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2lucHV0L2RlbW9zL2Jsb2Nrcy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9pbnB1dC9kZW1vcy9ibG9ja3MvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNDkiLCJpbXBvcnQgSW5wdXQgZnJvbSAna3BjL2NvbXBvbmVudHMvaW5wdXQnO2ltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaChJbnB1dCwgeydwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5wcmVwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuICdodHRwOi8vJzt9KSAmJiAoX19ibG9ja3MucHJlcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5wcmVwZW5kID8gYmxvY2tzLnByZXBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnByZXBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLnByZXBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgKF9ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuICcuY29tJzt9KSAmJiAoX19ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmFwcGVuZCA/IGJsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmFwcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pLCBoKElucHV0LCB7J3BsYWNlaG9sZGVyJzogJ3BsZWFzZSBlbnRlcicsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKEJ1dHRvbiwgeydpY29uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdub25lJywgJ2NoaWxkcmVuJzogaCgnaScsIG51bGwsIG51bGwsICdpb24taW9zLXNlYXJjaCcpLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgaChJbnB1dCwgeydwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaChCdXR0b24sIHsnaWNvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3R5cGUnOiAncHJpbWFyeScsICdjaGlsZHJlbic6IGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1zZWFyY2gnKSwgJ19jb250ZXh0JzogdGhpc30pO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSksIGgoSW5wdXQsIHsncGxhY2Vob2xkZXInOiAncGxlYXNlIGVudGVyJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpcywgJ19ibG9ja3MnOiBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKF9ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoQnV0dG9uLCB7J3R5cGUnOiAncHJpbWFyeScsICdjaGlsZHJlbic6ICfmkJzntKInLCAnX2NvbnRleHQnOiB0aGlzfSk7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgaChJbnB1dCwgeydwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5wcmVmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaCgnaScsIG51bGwsIG51bGwsICdpb24tZWFydGgnKTt9KSAmJiAoX19ibG9ja3MucHJlZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnByZWZpeCA/IGJsb2Nrcy5wcmVmaXguY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnByZWZpeC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MucHJlZml4LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIChfYmxvY2tzLnN1ZmZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdpJywgbnVsbCwgbnVsbCwgJ2lvbi1pb3Mtc2VhcmNoJyk7fSkgJiYgKF9fYmxvY2tzLnN1ZmZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5zdWZmaXggPyBibG9ja3Muc3VmZml4LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5zdWZmaXguY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLnN1ZmZpeC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgaChJbnB1dCwgeydwbGFjZWhvbGRlcic6ICdwbGVhc2UgZW50ZXInLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5wcmVwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuICdodHRwOi8vJzt9KSAmJiAoX19ibG9ja3MucHJlcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5wcmVwZW5kID8gYmxvY2tzLnByZXBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnByZXBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLnByZXBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgKF9ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuICcuY29tJzt9KSAmJiAoX19ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmFwcGVuZCA/IGJsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmFwcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIChfYmxvY2tzLnByZWZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdpJywgbnVsbCwgbnVsbCwgJ2lvbi1lYXJ0aCcpO30pICYmIChfX2Jsb2Nrcy5wcmVmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MucHJlZml4ID8gYmxvY2tzLnByZWZpeC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MucHJlZml4LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5wcmVmaXguY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgKF9ibG9ja3Muc3VmZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1zZWFyY2gnKTt9KSAmJiAoX19ibG9ja3Muc3VmZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnN1ZmZpeCA/IGJsb2Nrcy5zdWZmaXguY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnN1ZmZpeC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Muc3VmZml4LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pXSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvaW5wdXQvZGVtb3MvYmxvY2tzL2luZGV4LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=