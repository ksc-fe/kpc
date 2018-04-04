webpackJsonp([53],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-37 .k-form-item .k-form-item {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/form/demos/custom/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/custom/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/custom/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/form/demos/custom/index.styl");

var _form = __webpack_require__("./components/form/index.js");

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

// 添加全局规则
_form.Form.addMethod('letter', function (value, item, param) {
    console.log('arguments', value, item, param);
    return (/^[a-z|A-Z]+$/.test(value)
    );
}, '只能输入字母');

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
                descriptions: ['']
            };
        }
    }, {
        key: 'add',
        value: function add() {
            this.set('descriptions', this.get('descriptions').concat(''));
        }
    }, {
        key: 'delete',
        value: function _delete(index) {
            var descriptions = this.get('descriptions').slice(0);
            descriptions.splice(index, 1);
            this.set('descriptions', descriptions);
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

/***/ "./site/components/form/demos/custom/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl");
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
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/form/demos/custom/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/form/demos/custom/index.vdt":
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

    return h(_form.Form, { 'children': h(_form.FormItem, { 'label': '描述', 'children': [_Vdt.utils.map(function () {
                try {
                    return [self.get('descriptions')][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function (value, key) {
                return h(_form.FormItem, { 'model': function () {
                        try {
                            return ['descriptions.' + key][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'hideLabel': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'rules': function () {
                        try {
                            return [{
                                required: true,
                                // 自定义全局规则
                                letter: true,
                                // 自定义局部规则，所有描述必须不重复
                                unique: function unique(value) {
                                    var count = 0;
                                    self.get('descriptions').find(function (item) {
                                        if (item === value) count++;
                                        return count > 1;
                                    });

                                    // 直接返回错误文案，或者也可以单独定义messages为{unique: '不能相同'}
                                    return count === 1 || '不能相同';
                                }
                            }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h(_input.Input, { 'children': null, '_context': this, value: _getModel(self, function () {
                            try {
                                return ['descriptions.' + key][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                            _setModel(self, function () {
                                try {
                                    return ['descriptions.' + key][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), __n);
                        } }), '_context': this, '_blocks': function (blocks) {
                        var _blocks = {},
                            __blocks = extend({}, blocks);
                        return (_blocks.append = function (parent) {
                            return h(_button.Button, { 'ev-click': function () {
                                    try {
                                        return [self.delete.bind(self, key)][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(this), 'children': '删除', '_context': this });
                        }) && (__blocks.append = function (parent) {
                            var self = this;
                            return blocks.append ? blocks.append.call(this, function () {
                                return _blocks.append.call(self, parent);
                            }) : _blocks.append.call(this, parent);
                        }) && __blocks;
                    }.call(this, {}) });
            }, this), h(_button.Button, { 'ev-click': function () {
                    try {
                        return [self.add][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': '添加', '_context': this })], '_context': this }), '_context': this });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

var _button = __webpack_require__("./components/button/index.js");

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvY3VzdG9tL2luZGV4LnN0eWw/Y2UzZSIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXgudmR0Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsIml0ZW0iLCJwYXJhbSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0IiwidGVtcGxhdGUiLCJkZXNjcmlwdGlvbnMiLCJzZXQiLCJnZXQiLCJjb25jYXQiLCJpbmRleCIsInNsaWNlIiwic3BsaWNlIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJtYXAiLCJlIiwiY2FsbCIsImtleSIsInJlcXVpcmVkIiwibGV0dGVyIiwidW5pcXVlIiwiY291bnQiLCJmaW5kIiwiX19jIiwiX19uIiwiYXBwZW5kIiwiZGVsZXRlIiwi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ekIvSixFQUFSLENBQVA7QUEwQkMsQzs7QUExQ0Q7O0FBQW1EOztBQUEyQyIsImZpbGUiOiJzdGF0aWMvY2h1bmsvOGE1NWYyMDgyZTRiYTUxNDlmNGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leGFtcGxlLmluZGV4LTM3IC5rLWZvcm0taXRlbSAuay1mb3JtLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9jdXN0b20vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDExIDUzIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuaW1wb3J0IHtGb3JtfSBmcm9tICdrcGMvY29tcG9uZW50cy9mb3JtJztcblxuLy8g5re75Yqg5YWo5bGA6KeE5YiZXG5Gb3JtLmFkZE1ldGhvZCgnbGV0dGVyJywgKHZhbHVlLCBpdGVtLCBwYXJhbSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhcmd1bWVudHMnLCB2YWx1ZSwgaXRlbSwgcGFyYW0pO1xuICAgIHJldHVybiAvXlthLXp8QS1aXSskLy50ZXN0KHZhbHVlKTtcbn0sICflj6rog73ovpPlhaXlrZfmr40nKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbnM6IFsnJ11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2Rlc2NyaXB0aW9ucycsIHRoaXMuZ2V0KCdkZXNjcmlwdGlvbnMnKS5jb25jYXQoJycpKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25zID0gdGhpcy5nZXQoJ2Rlc2NyaXB0aW9ucycpLnNsaWNlKDApO1xuICAgICAgICBkZXNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXQoJ2Rlc2NyaXB0aW9ucycsIGRlc2NyaXB0aW9ucyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9mb3JtL2RlbW9zL2N1c3RvbS9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEgNTMiLCJpbXBvcnQge0Zvcm0sIEZvcm1JdGVtfSBmcm9tICdrcGMvY29tcG9uZW50cy9mb3JtJztpbXBvcnQge0lucHV0fSBmcm9tICdrcGMvY29tcG9uZW50cy9pbnB1dCc7aW1wb3J0IHtCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5cbnJldHVybiBoKEZvcm0sIHsnY2hpbGRyZW4nOiBoKEZvcm1JdGVtLCB7J2xhYmVsJzogJ+aPj+i/sCcsICdjaGlsZHJlbic6IFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2Rlc2NyaXB0aW9ucycpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKEZvcm1JdGVtLCB7J21vZGVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2BkZXNjcmlwdGlvbnMuJHtrZXl9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnaGlkZUxhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncnVsZXMnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAvLyDoh6rlrprkuYnlhajlsYDop4TliJlcbiAgICAgICAgICAgICAgICBsZXR0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8g6Ieq5a6a5LmJ5bGA6YOo6KeE5YiZ77yM5omA5pyJ5o+P6L+w5b+F6aG75LiN6YeN5aSNXG4gICAgICAgICAgICAgICAgdW5pcXVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0KCdkZXNjcmlwdGlvbnMnKS5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IHZhbHVlKSBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ID4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue6ZSZ6K+v5paH5qGI77yM5oiW6ICF5Lmf5Y+v5Lul5Y2V54us5a6a5LmJbWVzc2FnZXPkuLp7dW5pcXVlOiAn5LiN6IO955u45ZCMJ31cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ID09PSAxIHx8ICfkuI3og73nm7jlkIwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaChJbnB1dCwgeydjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2BkZXNjcmlwdGlvbnMuJHtrZXl9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbihfX2MsIF9fbikgeyBfc2V0TW9kZWwoc2VsZiwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2BkZXNjcmlwdGlvbnMuJHtrZXl9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfX24pIH19KSwgJ19jb250ZXh0JzogdGhpcywgJ19ibG9ja3MnOiBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKF9ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGgoQnV0dG9uLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZGVsZXRlLmJpbmQoc2VsZiwga2V5KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiAn5Yig6ZmkJywgJ19jb250ZXh0JzogdGhpc30pO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSk7XG59LCB0aGlzKSwgaChCdXR0b24sIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5hZGQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogJ+a3u+WKoCcsICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9KSwgJ19jb250ZXh0JzogdGhpc30pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL2Zvcm0vZGVtb3MvY3VzdG9tL2luZGV4LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=