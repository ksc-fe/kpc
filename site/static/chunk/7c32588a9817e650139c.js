webpackJsonp([8],{

/***/ "./components/pagination/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pagination = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/pagination/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/pagination/index.styl");

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

var Pagination = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Pagination, _Intact);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: 'defaults',
        value: function defaults() {
            return {
                total: 0,
                current: 1,
                limit: 10,
                counts: 7,
                showTotal: true,
                limits: [10, 20, 50],
                value: '',
                showGoto: false,
                size: 'default'
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // avoid setting incorrect value
            this.changePage(this.get('current'));

            this.on('$change:limit', function () {
                _this2.set('current', 1);
            });
        }
    }, {
        key: 'changePage',
        value: function changePage(page) {
            var _get = this.get(),
                total = _get.total,
                limit = _get.limit;

            var totalPages = Math.ceil(total / limit);

            if (page > totalPages) {
                page = totalPages;
            }
            if (page < 1) {
                page = 1;
            }

            this.set('current', page);
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.changePage(this.get('current') - 1);
        }
    }, {
        key: 'next',
        value: function next() {
            this.changePage(this.get('current') + 1);
        }
    }, {
        key: 'fastPrev',
        value: function fastPrev() {
            var page = this.get('current') - (this.get('counts') - 4);
            this.changePage(page);
        }
    }, {
        key: 'fastNext',
        value: function fastNext() {
            var page = this.get('current') + (this.get('counts') + 4);
            this.changePage(page);
        }
    }, {
        key: '_goto',
        value: function _goto(e) {
            // const regexp = /^[1-9]\d*$/;
            var value = parseInt(e.target.value) || 1;
            this.changePage(value);
        }
    }]);

    return Pagination;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    showGoto: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Pagination;
exports.Pagination = Pagination;

/***/ }),

/***/ "./components/pagination/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/pagination/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../node_modules/stylus-loader/index.js??ref--2-3!./index.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../node_modules/stylus-loader/index.js??ref--2-3!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/pagination/index.vdt":
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

    var _self$get = self.get(),
        total = _self$get.total,
        current = _self$get.current,
        limit = _self$get.limit,
        limits = _self$get.limits,
        className = _self$get.className,
        showTotal = _self$get.showTotal,
        showGoto = _self$get.showGoto,
        counts = _self$get.counts,
        size = _self$get.size,
        rest = _objectWithoutProperties(_self$get, ['total', 'current', 'limit', 'limits', 'className', 'showTotal', 'showGoto', 'counts', 'size']);

    var classNameObj = (_classNameObj = {
        'k-pagination': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _classNameObj);

    var totalPages = Math.ceil(total / limit) || 0;

    var paginationButton = function paginationButton(page) {
        return h('div', { 'ev-click': function () {
                try {
                    return [self.changePage.bind(self, page)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [page][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{ 'k-page': true, 'k-active': page === current }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)));
    };

    var paginationDot = function paginationDot(callback) {
        return h('div', { 'ev-click': function () {
                try {
                    return [callback][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, '...', 'k-ellipsis');
    };

    return h('div', null, [h('div', null, function () {
        var _this = this;

        try {
            return [function () {
                var items = [];
                var minCount = Math.ceil(counts / 2);
                var maxCount = totalPages - minCount;
                var prevPage = current - 1;
                var nextPage = current + 1;

                // previous page button
                items.push(h('div', { 'ev-click': function () {
                        try {
                            return [prevPage < 1 ? undefined : self.prev][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, h('i', null, null, 'ion-ios-arrow-left'), _className(function () {
                    try {
                        return [{ 'k-prev': true, 'k-disabled': prevPage < 1 }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this))));

                if (totalPages > counts) {
                    if (current <= minCount) {
                        var max = counts - 2;
                        for (var i = 1; i <= max; i++) {
                            items.push(paginationButton(i));
                        }
                        items.push(paginationDot(self.fastNext));
                        items.push(paginationButton(totalPages));
                    } else if (current > minCount && current <= maxCount) {
                        items.push(paginationButton(1));
                        items.push(paginationDot(self.fastPrev));

                        var midCount = counts - 4;
                        var mid = Math.floor(midCount / 2);
                        var min = current - mid;
                        var _max = midCount % 2 === 1 ? current + mid : current + mid - 1;
                        for (var _i = min; _i <= _max; _i++) {
                            items.push(paginationButton(_i));
                        }

                        items.push(paginationDot(self.fastNext));
                        items.push(paginationButton(totalPages));
                    } else {
                        items.push(paginationButton(1));
                        items.push(paginationDot(self.fastPrev));

                        var _min = totalPages - counts + 3;
                        for (var _i2 = _min; _i2 <= totalPages; _i2++) {
                            items.push(paginationButton(_i2));
                        }
                    }
                } else {
                    for (var _i3 = 1; _i3 <= totalPages; _i3++) {
                        items.push(paginationButton(_i3));
                    }
                }

                // next page button
                items.push(h('div', { 'ev-click': function () {
                        try {
                            return [nextPage > totalPages ? undefined : self.next][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this) }, h('i', null, null, 'ion-ios-arrow-right'), _className(function () {
                    try {
                        return [{ 'k-next': true, 'k-disabled': nextPage > totalPages }][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(_this))));

                return items;
            }()][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-pages'), h('div', null, h(_select2.default, { 'data': function () {
            try {
                return [limits.map(function (item) {
                    return { 'value': item, 'label': item + ' 条 / 页' };
                })][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this, value: _getModel(self, 'limit'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, 'limit', __n);
        } }), 'k-limits'), function () {
        try {
            return [showGoto][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['\n        跳至', h(_input2.default, { 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [current][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._goto][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': this }), '页\n    '], 'k-goto') : undefined, function () {
        try {
            return [showTotal][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['共 ', function () {
        try {
            return [total][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' 条'], 'k-total') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _select = __webpack_require__("./components/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _group = __webpack_require__("./components/select/group.vdt");

var _group2 = _interopRequireDefault(_group);

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

var OptionGroup = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(OptionGroup, _Intact);

    function OptionGroup() {
        _classCallCheck(this, OptionGroup);

        return _possibleConstructorReturn(this, (OptionGroup.__proto__ || Object.getPrototypeOf(OptionGroup)).apply(this, arguments));
    }

    return OptionGroup;
}(_intact2.default), _class2.template = _group2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = OptionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./components/select/group.vdt":
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

  var _self$get = self.get(),
      children = _self$get.children,
      label = _self$get.label;

  return h('div', null, [h('div', null, function () {
    try {
      return [label][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-label'), '\n    ', function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), '\n'], 'k-group');
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionGroup = exports.Option = exports.Select = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/select/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/select/index.styl");

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

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

var Select = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Select, _Intact);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: [],
                value: '',
                multiple: false, //支持多选li
                disabled: false,
                clearable: false, // 是否可清空 
                filterable: false, // 搜索筛选
                keywords: undefined,
                placeholder: '请选择',
                size: 'default',
                fluid: false,

                _show: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.on('$changed:value', function () {
                if (_this2.get('multiple') && _this2.get('_show')) {
                    _this2.refs.menu.position();
                }
            });
        }
    }, {
        key: '_onClear',
        value: function _onClear(e) {
            e.stopPropagation();
            this.set('value', '');
        }
    }, {
        key: '_onSelect',
        value: function _onSelect(value) {
            if (!this.get('multiple')) {
                this.set('value', value, { async: true });
            } else {
                var values = this.get('value');
                if (!Array.isArray(values)) {
                    values = [];
                } else {
                    values = values.slice(0);
                }
                var index = values.indexOf(value);
                if (~index) {
                    // if find, delete it
                    values.splice(index, 1);
                } else {
                    values.push(value);
                }
                this.set('value', values, { async: true });
                this._focusInput();
            }
            this._resetSearch();
        }
    }, {
        key: '_onSearch',
        value: function _onSearch(e) {
            this.set('keywords', e.target.value);
            // always show menu on searching
            this.refs.menu.show();
            this.refs.menu.focusItemByIndex(0);
            // in multiple mode, it may lead the height to change
            if (this.get('multiple')) {
                this.refs.menu.position();
            }
        }
    }, {
        key: '_resetSearch',
        value: function _resetSearch() {
            this.set('keywords', undefined, { async: true });
        }
    }, {
        key: '_onChangeShow',
        value: function _onChangeShow(c, value) {
            this.set('_show', value);
        }

        /**
         * @brief let the blur method called after select
         * if we selected the option, then the keywords has been to to undefind
         * in this case, we do nothing, otherwise we reset it
         */

    }, {
        key: '_onBlur',
        value: function _onBlur() {
            var _this3 = this;

            this.timer = setTimeout(function () {
                if (_this3.get('keywords') != null) {
                    _this3._resetSearch();
                }
            }, 200);
        }
    }, {
        key: '_onFocus',
        value: function _onFocus() {
            clearTimeout(this.timer);
        }
    }, {
        key: '_delete',
        value: function _delete(value, e) {
            e.stopPropagation();
            var values = this.get('value').slice(0);
            var index = values.indexOf(value);
            values.splice(index, 1);
            this.set('value', values);
            this._focusInput();
        }
    }, {
        key: '_focusInput',
        value: function _focusInput() {
            if (this.get('filterable')) {
                this.refs.input.focus();
            }
        }
    }, {
        key: '_position',
        value: function _position() {
            var menuElement = this.refs.menu.vdt.vNode.children.element;
            var width = this.element.offsetWidth;
            var menuWidth = menuElement.offsetWidth;
            if (width > menuWidth) {
                menuElement.style.width = width + 'px';
            }
        }
    }]);

    return Select;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    fluid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Select;
exports.Select = Select;
exports.Option = _option2.default;
exports.OptionGroup = _group2.default;

/***/ }),

/***/ "./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/select/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../node_modules/stylus-loader/index.js??ref--2-3!./index.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../node_modules/stylus-loader/index.js??ref--2-3!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/select/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (obj, _Vdt, blocks, $callee) {
    var _classNameObj,
        _this = this;

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
        fluid = _self$get.fluid;

    var classNameObj = (_classNameObj = {
        'k-select': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-disabled', disabled), _defineProperty(_classNameObj, 'k-show', _show), _defineProperty(_classNameObj, 'k-clearable', clearable), _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, 'k-fluid', fluid), _classNameObj);

    var hasValue = value != null && (!multiple && value !== '' || multiple && value.length);
    var isGroup = Array.isArray(self.get('data.0.data'));

    var label = void 0;
    var labels = [];

    var handleProps = function handleProps(props) {
        var active = false;
        var valid = false;

        if (!multiple) {
            if (props.value === value) {
                // set label
                label = props.label;
                active = true;
            } else {
                active = false;
            }
        } else {
            var index = value.indexOf(props.value);
            if (~index) {
                // keep order consistent
                labels[index] = props.label;
                active = true;
            } else {
                active = false;
            }
        }

        var tmp = void 0;
        if (!filterable && props.label || keywords == null || ~props.label.toLowerCase().indexOf(tmp = keywords.toLowerCase()) || (0, _utils.isStringOrNumber)(props.value) && ~String(props.value).toLowerCase().indexOf(tmp)) {
            valid = true;
        }

        return { active: active, valid: valid };
    };

    var Options = function Options(props) {
        var data = props.data;
        var ret = [];
        data.forEach(function (item, index) {
            // deprecate text, use label instead of
            if (item.text) item.label = item.text;

            var _handleProps = handleProps(item),
                valid = _handleProps.valid,
                active = _handleProps.active;

            if (valid) {
                ret.push(h(_dropdown.DropdownItem, { 'ev-select': function () {
                        try {
                            return [self._onSelect.bind(self, item.value)][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'disabled': function () {
                        try {
                            return [item.disabled][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'className': _className(function () {
                        try {
                            return [{ 'k-active': active }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this)), 'hideOnSelect': function () {
                        try {
                            return [!multiple][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), 'children': function () {
                        try {
                            return [item.template ? item.template(item, index) : item.label][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(_this), '_context': _this }));
            }
        });

        return ret;
    };

    var OptionsVNodes = function OptionsVNodes(_ref) {
        var children = _ref.children;

        return __u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
            if (vNode.tag === _option2.default) {
                var props = vNode.props;
                props = _extends({}, props, {
                    'ev-select': self._onSelect.bind(self, props.value),
                    hideOnSelect: !multiple,
                    label: props.label || (0, _utils.getTextByChildren)(props.children),
                    children: props.children || props.label
                });

                var _handleProps2 = handleProps(props),
                    active = _handleProps2.active,
                    valid = _handleProps2.valid;

                if (!valid) {
                    return hc('');
                } else {
                    var _className2;

                    props.className = _className((_className2 = {}, _defineProperty(_className2, props.className, props.className), _defineProperty(_className2, 'k-active', active), _className2));
                }

                // return the cloned vNode
                return h(_option2.default, props);
            } else if (vNode.tag === _group2.default) {
                var _props = vNode.props;
                _props = _extends({}, _props, {
                    children: h(OptionsVNodes, { 'children': function () {
                            try {
                                return [_props.children][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(_this), '_context': _this })
                });
                return h(_group2.default, _props);
            }

            return vNode;
        });
    };

    var Menu = h(_dropdown.DropdownMenu, { 'ev-$changed:show': function () {
            try {
                return [self._position][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-select-dropdown', 'ev-$change:show': function () {
            try {
                return [self._onChangeShow][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': [function () {
            try {
                return [!isGroup][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Options, { 'data': function () {
                try {
                    return [data][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': this }) : _Vdt.utils.map(function () {
            try {
                return [data][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function (value, key) {
            return h(_group2.default, { 'label': function () {
                    try {
                        return [value.label][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': h(Options, { 'data': function () {
                        try {
                            return [value.data][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': null, '_context': this }), '_context': this });
        }, this), h(OptionsVNodes, { 'children': function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '_context': this })], '_context': this }, null, null, null, function (i) {
        widgets['menu'] = i;
    });

    // if the value is not in options, then set hasValue to false
    if (hasValue && !label && !labels.length) {
        hasValue = false;
    }

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h(_dropdown2.default, { 'position': function () {
            try {
                return [{ my: 'left top', at: 'left bottom' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'trigger': 'click', 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': [h('div', { 'ev-click': function () {
                try {
                    return [self._focusInput][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, [h('input', { 'type': 'hidden', 'value': function () {
                try {
                    return [value][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
                try {
                    return [name][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }), function () {
            try {
                return [!multiple && filterable][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(_input2.default, { 'value': function () {
                try {
                    return [keywords == null ? label : keywords][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-input': function () {
                try {
                    return [self._onSearch][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-blur': function () {
                try {
                    return [self._onBlur][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'disabled': function () {
                try {
                    return [disabled][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'placeholder': function () {
                try {
                    return [placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'size': function () {
                try {
                    return [size][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'fluid': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': this }, null, null, null, function (i) {
            widgets['input'] = i;
        }) : function () {
            try {
                return [!filterable && !hasValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('span', null, function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'k-placeholder') : function () {
            try {
                return [!multiple][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('span', null, function () {
            try {
                return [label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'k-value') : h(Animate, { 'a:tag': 'span', 'a:disabled': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'className': 'k-values', 'children': [_Vdt.utils.map(function () {
                try {
                    return [labels][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), function (item, index) {
                return h(Animate, { 'a:tag': 'span', 'className': 'k-tag', 'key': function () {
                        try {
                            return [value[index]][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'a:transition': 'fade', 'children': [h('span', null, function () {
                        try {
                            return [item][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'k-text'), h('i', { 'ev-click': function () {
                            try {
                                return [self._delete.bind(self, value[index])][0];
                            } catch (e) {
                                _e(e);
                            }
                        }.call(this) }, null, 'k-icon ion-ios-close-empty')], '_context': this });
            }, this), function () {
                try {
                    return [filterable][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) ? h(_input2.default, { 'value': function () {
                    try {
                        return [keywords][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-input': function () {
                    try {
                        return [self._onSearch][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-blur': function () {
                    try {
                        return [self._onBlur][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-focus': function () {
                    try {
                        return [self._onFocus][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'disabled': function () {
                    try {
                        return [disabled][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'placeholder': function () {
                    try {
                        return [!hasValue ? placeholder : ''][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'autoWidth': function () {
                    try {
                        return [true][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'size': function () {
                    try {
                        return [size][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': null, '_context': this }, null, null, null, function (i) {
                widgets['input'] = i;
            }) : undefined], '_context': this }), h('span', null, [function () {
            try {
                return [clearable][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h('i', { 'ev-click': function () {
                try {
                    return [self._onClear][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, null, _className(function () {
            try {
                return [{ "k-clear ion-ios-close": true, "k-show": hasValue }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this))) : undefined, h('i', null, null, 'k-arrow ion-arrow-down-b')], 'k-suffix')], 'k-wrapper'), function () {
            try {
                return [Menu][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)], '_context': this }), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _utils = __webpack_require__("./components/utils.js");

var _option = __webpack_require__("./components/select/option.js");

var _option2 = _interopRequireDefault(_option);

var _group = __webpack_require__("./components/select/group.js");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/select/option.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.default = undefined;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_DropdownItem) {
     _inherits(Option, _DropdownItem);

     function Option() {
          _classCallCheck(this, Option);

          return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
     }

     return Option;
}(_dropdown.DropdownItem);

exports.default = Option;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/pagination/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-pagination {\n  font-size: 1rem;\n}\n.k-pagination .k-pages,\n.k-pagination .k-limits,\n.k-pagination .k-goto,\n.k-pagination .k-total {\n  margin-left: 1.428571428571429em;\n  display: inline-block;\n}\n.k-pagination .k-pages {\n  margin-left: 0;\n}\n.k-pagination .k-pages > div {\n  display: inline-block;\n  border: 1px solid #cad0dd;\n  border-radius: 0.142857142857143rem;\n  margin-right: 0.714285714285714em;\n  min-width: 2.571428571428572em;\n  height: 2.571428571428572em;\n  line-height: calc(2.571428571428572em - 2px);\n  cursor: pointer;\n  text-align: center;\n  vertical-align: middle;\n}\n.k-pagination .k-pages > div:not(.k-active):not(.k-disabled):hover {\n  border-color: #0a5eee;\n  color: #0a5eee;\n}\n.k-pagination .k-pages > div:last-of-type {\n  margin-right: 0;\n}\n.k-pagination .k-pages .k-active {\n  background-color: #0a5eee;\n  border-color: #0a5eee;\n  color: #fff;\n}\n.k-pagination .k-pages .k-disabled {\n  cursor: not-allowed;\n  color: #999;\n  border-color: #d9d9d9;\n}\n.k-pagination .k-goto .k-input {\n  font-size: inherit;\n  width: 4.285714285714286em;\n  margin: 0 0.714285714285714em;\n}\n.k-pagination .k-select {\n  width: auto;\n}\n.k-pagination.k-small {\n  font-size: 0.857142857142857rem;\n}\n.k-pagination.k-small .k-pages > div {\n  margin-right: 0.416666666666667em;\n  min-width: 2.5em;\n  height: 2.5em;\n  line-height: calc(2.5em - 2px);\n}\n.k-pagination.k-mini {\n  font-size: 0.857142857142857rem;\n}\n.k-pagination.k-mini .k-pages > div {\n  margin-right: 0.416666666666667em;\n  min-width: 2.166666666666667em;\n  height: 2.166666666666667em;\n  line-height: calc(2.166666666666667em - 2px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/select/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-select {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  width: 14.285714285714286rem;\n}\n.k-select > .k-wrapper {\n  width: 100%;\n  min-height: 2.571428571428572rem;\n  cursor: pointer;\n  outline: none;\n  vertical-align: middle;\n  border: 1px solid #cad0dd;\n  padding: 0 2.142857142857143rem 0 0.714285714285714rem;\n  background: #fff;\n  -webkit-transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n}\n.k-select .k-suffix {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 0.714285714285714rem;\n}\n.k-select.k-fluid {\n  width: 100%;\n}\n.k-select .k-clear {\n  margin-right: 0.357142857142857rem;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n}\n.k-select .k-clear:hover {\n  color: #0a5eee;\n}\n.k-select:hover .k-clear.k-show {\n  opacity: 1;\n  pointer-events: all;\n}\n.k-select.k-clearable > .k-wrapper {\n  padding-right: 3.214285714285714rem;\n}\n.k-select .k-input .k-inner {\n  width: 100%;\n  height: calc(2.571428571428572rem - 2px);\n  border: none;\n  padding: 0;\n}\n.k-select .k-input .k-inner:focus {\n  border: none;\n}\n.k-select .k-placeholder {\n  display: inline-block;\n  color: #999;\n}\n.k-select .k-input,\n.k-select .k-placeholder,\n.k-select .k-value {\n  line-height: calc(2.571428571428572rem - 2px);\n}\n.k-select .k-arrow {\n  display: inline-block;\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.k-select.k-show > .k-wrapper {\n  border: 1px solid #0a5eee;\n}\n.k-select.k-show .k-arrow {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.k-select.k-disabled > .k-wrapper {\n  color: #999;\n  cursor: not-allowed;\n  background: #f7f7f7;\n  border-color: #d9d9d9;\n}\n.k-select.k-disabled .k-input {\n  color: #999;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.k-select .k-values {\n  display: inline-block;\n  margin-top: 0.357142857142857rem;\n}\n.k-select .k-values .k-input {\n  margin-top: -0.357142857142857rem;\n}\n.k-select .k-tag {\n  padding: 0.142857142857143rem 0.357142857142857rem;\n  background: #f7f7f7;\n  border-radius: 0.142857142857143rem;\n  margin: 0 0.357142857142857rem 0.357142857142857rem 0;\n}\n.k-select .k-tag,\n.k-select .k-tag .k-text,\n.k-select .k-tag .k-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n.k-select .k-tag .k-icon {\n  margin-left: 0.357142857142857rem;\n}\n.k-select .k-tag .k-icon:before {\n  font-size: 1.428571428571429rem;\n}\n.k-select.k-small > .k-wrapper {\n  min-height: 2.142857142857143rem;\n  font-size: 0.857142857142857rem;\n}\n.k-select.k-small > .k-wrapper .k-input,\n.k-select.k-small > .k-wrapper .k-placeholder,\n.k-select.k-small > .k-wrapper .k-value {\n  line-height: calc(2.142857142857143rem - 2px);\n}\n.k-select.k-small > .k-wrapper .k-input .k-inner {\n  height: calc(2.142857142857143rem - 2px);\n}\n.k-select.k-small > .k-wrapper .k-values {\n  margin-top: 0.071428571428571rem;\n}\n.k-select.k-small > .k-wrapper .k-values .k-input {\n  margin-top: -0.071428571428571rem;\n}\n.k-select.k-small > .k-wrapper .k-tag {\n  margin: 0 0.142857142857143rem 0.071428571428571rem 0;\n}\n.k-select.k-mini > .k-wrapper {\n  min-height: 1.857142857142857rem;\n  font-size: 0.857142857142857rem;\n}\n.k-select.k-mini > .k-wrapper .k-input,\n.k-select.k-mini > .k-wrapper .k-placeholder,\n.k-select.k-mini > .k-wrapper .k-value {\n  line-height: calc(1.857142857142857rem - 2px);\n}\n.k-select.k-mini > .k-wrapper .k-input .k-inner {\n  height: calc(1.857142857142857rem - 2px);\n}\n.k-select.k-mini > .k-wrapper .k-values {\n  margin-top: 0.071428571428571rem;\n}\n.k-select.k-mini > .k-wrapper .k-values .k-input {\n  margin-top: -0.071428571428571rem;\n}\n.k-select.k-mini > .k-wrapper .k-tag {\n  margin: 0 0.142857142857143rem 0.071428571428571rem 0;\n}\n.k-select-dropdown .k-active {\n  color: #0a5eee;\n}\n.k-select-dropdown .k-group > .k-label {\n  color: #999;\n  padding: 0.571428571428571rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/pagination/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".example.index-32 .k-pagination {\n  margin: 30px 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/pagination/demos/basic/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/pagination/demos/basic/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/pagination/demos/basic/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/pagination/demos/basic/index.styl");

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

/***/ "./site/components/pagination/demos/basic/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/pagination/demos/basic/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js??ref--2-1!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../../../node_modules/stylus-loader/index.js??ref--2-3!./index.styl", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js??ref--2-1!../../../../../node_modules/postcss-loader/lib/index.js??ref--2-2!../../../../../node_modules/stylus-loader/index.js??ref--2-3!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/pagination/demos/basic/index.vdt":
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

  return h('div', null, [h(_pagination2.default, { 'total': function () {
      try {
        return [201][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'current': function () {
      try {
        return [2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'showGoto': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this }), h(_pagination2.default, { 'total': function () {
      try {
        return [201][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'current': function () {
      try {
        return [2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'size': 'small', 'children': null, '_context': this }), h(_pagination2.default, { 'total': function () {
      try {
        return [201][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'current': function () {
      try {
        return [2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'size': 'mini', 'children': null, '_context': this })]);
};

var _pagination = __webpack_require__("./components/pagination/index.js");

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWw/NDRjMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsPzNjMDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXguc3R5bD80ZGFkIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwidGVtcGxhdGUiLCJ0b3RhbCIsImN1cnJlbnQiLCJsaW1pdCIsImNvdW50cyIsInNob3dUb3RhbCIsImxpbWl0cyIsInZhbHVlIiwic2hvd0dvdG8iLCJzaXplIiwiY2hhbmdlUGFnZSIsImdldCIsIm9uIiwic2V0IiwicGFnZSIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsIlZkdCIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJ1dGlscyIsImV4dGVuZCIsIl9lIiwiZXJyb3IiLCJfY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiX19vIiwiT3B0aW9ucyIsIl9nZXRNb2RlbCIsImdldE1vZGVsIiwiX3NldE1vZGVsIiwic2V0TW9kZWwiLCJfc2V0Q2hlY2tib3hNb2RlbCIsInNldENoZWNrYm94TW9kZWwiLCJfZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiZGV0ZWN0Q2hlY2tib3hDaGVja2VkIiwiX3NldFNlbGVjdE1vZGVsIiwic2V0U2VsZWN0TW9kZWwiLCJzZWxmIiwiZGF0YSIsInNjb3BlIiwiQW5pbWF0ZSIsInBhcmVudCIsIl9zdXBlciIsInJlc3QiLCJjbGFzc05hbWVPYmoiLCJwYWdpbmF0aW9uQnV0dG9uIiwiYmluZCIsImNhbGwiLCJwYWdpbmF0aW9uRG90IiwiY2FsbGJhY2siLCJpdGVtcyIsIm1pbkNvdW50IiwibWF4Q291bnQiLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwicHVzaCIsInVuZGVmaW5lZCIsInByZXYiLCJtYXgiLCJpIiwiZmFzdE5leHQiLCJmYXN0UHJldiIsIm1pZENvdW50IiwibWlkIiwiZmxvb3IiLCJtaW4iLCJuZXh0IiwibWFwIiwiaXRlbSIsIl9fYyIsIl9fbiIsIl9nb3RvIiwiT3B0aW9uR3JvdXAiLCJjaGlsZHJlbiIsImxhYmVsIiwiU2VsZWN0IiwibXVsdGlwbGUiLCJkaXNhYmxlZCIsImNsZWFyYWJsZSIsImZpbHRlcmFibGUiLCJrZXl3b3JkcyIsInBsYWNlaG9sZGVyIiwiZmx1aWQiLCJfc2hvdyIsInJlZnMiLCJtZW51IiwicG9zaXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJhc3luYyIsInZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiX2ZvY3VzSW5wdXQiLCJfcmVzZXRTZWFyY2giLCJzaG93IiwiZm9jdXNJdGVtQnlJbmRleCIsImMiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpbnB1dCIsImZvY3VzIiwibWVudUVsZW1lbnQiLCJ2ZHQiLCJ2Tm9kZSIsImVsZW1lbnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibWVudVdpZHRoIiwic3R5bGUiLCJPcHRpb24iLCJuYW1lIiwiaGFzVmFsdWUiLCJsZW5ndGgiLCJpc0dyb3VwIiwibGFiZWxzIiwiaGFuZGxlUHJvcHMiLCJhY3RpdmUiLCJ2YWxpZCIsInByb3BzIiwidG1wIiwidG9Mb3dlckNhc2UiLCJTdHJpbmciLCJyZXQiLCJmb3JFYWNoIiwidGV4dCIsIl9vblNlbGVjdCIsIk9wdGlvbnNWTm9kZXMiLCJ0YWciLCJoaWRlT25TZWxlY3QiLCJNZW51IiwiX3Bvc2l0aW9uIiwiX29uQ2hhbmdlU2hvdyIsImtleSIsIm15IiwiYXQiLCJfb25TZWFyY2giLCJfb25CbHVyIiwiX2RlbGV0ZSIsIl9vbkZvY3VzIiwiX29uQ2xlYXIiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVLFdBQ2hCLGlCQUFPQyxRQUFQLEU7Ozs7Ozs7Ozs7O21DQU9VO0FBQ1AsbUJBQU87QUFDSEMsdUJBQU8sQ0FESjtBQUVIQyx5QkFBUyxDQUZOO0FBR0hDLHVCQUFPLEVBSEo7QUFJSEMsd0JBQVEsQ0FKTDtBQUtIQywyQkFBVyxJQUxSO0FBTUhDLHdCQUFRLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBTkw7QUFPSEMsdUJBQU8sRUFQSjtB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R0FBRCxFQUFPLENBQVAsQ0FBUDtBQUFpQixPQUF0QixDQUF1QixPQUFNVixDQUFOLEVBQVM7QUFBQ29CLFdBQUdwQixDQUFIO0FBQU07QUFBQyxLQUFwRCxDQUFxRDhDLElBQXJELENBQTBELElBQTFELENBQVYsRUFBMkUsV0FBVyxZQUFXO0FBQUMsVUFBSTtBQUFDLGVBQU8sQ0FBQyxDQUFELEVBQUssQ0FBTCxDQUFQO0FBQWUsT0FBcEIsQ0FBcUIsT0FBTTlDLENBQU4sRUFBUztBQUFDb0IsV0FBR3BCLENBQUg7QUFBTTtBQUFDLEtBQWxELENBQW1EOEMsSUFBbkQsQ0FBd0QsSUFBeEQsQ0FBdEYsRUFBcUosUUFBUSxNQUE3SixFQUFxSyxZQUFZLElBQWpMLEVBQXVMLFlBQVksSUFBbk0sRUFBZCxDQUFqZixDQUFmLENBQVA7QUFDQyxDOztBQWZEIiwiZmlsZSI6InN0YXRpYy9jaHVuay83YzMyNTg4YTk4MTdlNjUwMTM5Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2hvd0dvdG86IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgY291bnRzOiA3LFxuICAgICAgICAgICAgc2hvd1RvdGFsOiB0cnVlLFxuICAgICAgICAgICAgbGltaXRzOiBbMTAsIDIwLCA1MF0sXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBzaG93R290bzogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIC8vIGF2b2lkIHNldHRpbmcgaW5jb3JyZWN0IHZhbHVlXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLmdldCgnY3VycmVudCcpKTtcblxuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOmxpbWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2N1cnJlbnQnLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IHt0b3RhbCwgbGltaXR9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KTtcblxuICAgICAgICBpZiAocGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlIDwgMSkge1xuICAgICAgICAgICAgcGFnZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldCgnY3VycmVudCcsIHBhZ2UpO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLmdldCgnY3VycmVudCcpIC0gMSk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuZ2V0KCdjdXJyZW50JykgKyAxKTtcbiAgICB9XG5cbiAgICBmYXN0UHJldigpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0KCdjdXJyZW50JykgLSAodGhpcy5nZXQoJ2NvdW50cycpIC0gNCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShwYWdlKTtcbiAgICB9XG5cbiAgICBmYXN0TmV4dCgpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0KCdjdXJyZW50JykgKyAodGhpcy5nZXQoJ2NvdW50cycpICsgNCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShwYWdlKTtcbiAgICB9XG5cbiAgICBfZ290byhlKSB7XG4gICAgICAgIC8vIGNvbnN0IHJlZ2V4cCA9IC9eWzEtOV1cXGQqJC87XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDE7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQge1BhZ2luYXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJpbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NlbGVjdCc7aW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbmNvbnN0IHtcbiAgICB0b3RhbCwgY3VycmVudCwgbGltaXQsIGxpbWl0cywgXG4gICAgY2xhc3NOYW1lLCBzaG93VG90YWwsIHNob3dHb3RvLFxuICAgIGNvdW50cywgc2l6ZSwgLi4ucmVzdFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1wYWdpbmF0aW9uJzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0Jyxcbn07XG5cbmNvbnN0IHRvdGFsUGFnZXMgPSAoTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpKSB8fCAwO1xuXG5jb25zdCBwYWdpbmF0aW9uQnV0dG9uID0gZnVuY3Rpb24ocGFnZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIGgoJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jaGFuZ2VQYWdlLmJpbmQoc2VsZiwgcGFnZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwYWdlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1wYWdlJzogdHJ1ZSwgJ2stYWN0aXZlJzogcGFnZSA9PT0gY3VycmVudH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG4gICAgKTtcbn07XG5cbmNvbnN0IHBhZ2luYXRpb25Eb3QgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NhbGxiYWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCAnLi4uJywgJ2stZWxsaXBzaXMnKVxufTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG8ge1xuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IG1pbkNvdW50ID0gTWF0aC5jZWlsKGNvdW50cyAvIDIpO1xuICAgICAgICBsZXQgbWF4Q291bnQgPSB0b3RhbFBhZ2VzIC0gbWluQ291bnQ7XG4gICAgICAgIGxldCBwcmV2UGFnZSA9IGN1cnJlbnQgLSAxO1xuICAgICAgICBsZXQgbmV4dFBhZ2UgPSBjdXJyZW50ICsgMTtcblxuICAgICAgICAvLyBwcmV2aW91cyBwYWdlIGJ1dHRvblxuICAgICAgICBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcmV2UGFnZSA8IDEgPyB1bmRlZmluZWQgOiBzZWxmLnByZXYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1hcnJvdy1sZWZ0JyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1wcmV2JzogdHJ1ZSwgJ2stZGlzYWJsZWQnOiBwcmV2UGFnZSA8IDF9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzID4gY291bnRzKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8PSBtaW5Db3VudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IGNvdW50cyAtIDI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uRG90KHNlbGYuZmFzdE5leHQpKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25CdXR0b24odG90YWxQYWdlcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID4gbWluQ291bnQgJiYgY3VycmVudCA8PSBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFnaW5hdGlvbkJ1dHRvbigxKSk7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uRG90KHNlbGYuZmFzdFByZXYpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1pZENvdW50ID0gY291bnRzIC0gNDtcbiAgICAgICAgICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKG1pZENvdW50IC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gY3VycmVudCAtIG1pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtaWRDb3VudCAlIDIgPT09IDEgPyBjdXJyZW50ICsgbWlkIDogY3VycmVudCArIG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25CdXR0b24oaSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFnaW5hdGlvbkRvdChzZWxmLmZhc3ROZXh0KSk7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKHRvdGFsUGFnZXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKDEpKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25Eb3Qoc2VsZi5mYXN0UHJldikpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gdG90YWxQYWdlcyAtIGNvdW50cyArIDM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25CdXR0b24oaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmV4dCBwYWdlIGJ1dHRvblxuICAgICAgICBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuZXh0UGFnZSA+IHRvdGFsUGFnZXMgPyB1bmRlZmluZWQgOiBzZWxmLm5leHQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1hcnJvdy1yaWdodCcpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stbmV4dCc6IHRydWUsICdrLWRpc2FibGVkJzogbmV4dFBhZ2UgPiB0b3RhbFBhZ2VzfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbiAgICAgICAgKTtcblxuICAgICAgICBpdGVtcztcbiAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXBhZ2VzJyksIGgoJ2RpdicsIG51bGwsIGgoU2VsZWN0LCB7J2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGltaXRzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyd2YWx1ZSc6IGl0ZW0sICdsYWJlbCc6IGl0ZW0gKyAnIOadoSAvIOmhtSd9XG4gICAgICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaXplIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2xpbWl0JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdsaW1pdCcsIF9fbikgfX0pLCAnay1saW1pdHMnKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3dHb3RvIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbJ1xcbiAgICAgICAg6Lez6IezJywgaChJbnB1dCwgeydzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2N1cnJlbnQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNoYW5nZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9nb3RvIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ+mhtVxcbiAgICAnXSwgJ2stZ290bycpIDogdW5kZWZpbmVkLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2hvd1RvdGFsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbJ+WFsSAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdG90YWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJyDmnaEnXSwgJ2stdG90YWwnKSA6IHVuZGVmaW5lZF0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ3JvdXAudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uR3JvdXAgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtjaGlsZHJlbiwgbGFiZWx9ID0gc2VsZi5nZXQoKTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stbGFiZWwnKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCAnay1ncm91cCcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuLi9tb3ZlV3JhcHBlci9wb3NpdGlvbic7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW50YWN0e1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZpbHRlcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLCAvL+aUr+aMgeWkmumAiWxpXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLCAvLyDmmK/lkKblj6/muIXnqbogXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSwgLy8g5pCc57Si562b6YCJXG4gICAgICAgICAgICBrZXl3b3JkczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fpgInmi6knLFxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuXG4gICAgICAgICAgICBfc2hvdzogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6dmFsdWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ211bHRpcGxlJykgJiYgdGhpcy5nZXQoJ19zaG93JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMubWVudS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25DbGVhcihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsICcnKTtcbiAgICB9XG5cbiAgICBfb25TZWxlY3QodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWUsIHthc3luYzogdHJ1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZmluZCwgZGVsZXRlIGl0XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZXMsIHthc3luYzogdHJ1ZX0pO1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgfVxuXG4gICAgX29uU2VhcmNoKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2tleXdvcmRzJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAvLyBhbHdheXMgc2hvdyBtZW51IG9uIHNlYXJjaGluZ1xuICAgICAgICB0aGlzLnJlZnMubWVudS5zaG93KCk7XG4gICAgICAgIHRoaXMucmVmcy5tZW51LmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIC8vIGluIG11bHRpcGxlIG1vZGUsIGl0IG1heSBsZWFkIHRoZSBoZWlnaHQgdG8gY2hhbmdlXG4gICAgICAgIGlmICh0aGlzLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2tleXdvcmRzJywgdW5kZWZpbmVkLCB7YXN5bmM6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfb25DaGFuZ2VTaG93KGMsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfc2hvdycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYgbGV0IHRoZSBibHVyIG1ldGhvZCBjYWxsZWQgYWZ0ZXIgc2VsZWN0XG4gICAgICogaWYgd2Ugc2VsZWN0ZWQgdGhlIG9wdGlvbiwgdGhlbiB0aGUga2V5d29yZHMgaGFzIGJlZW4gdG8gdG8gdW5kZWZpbmRcbiAgICAgKiBpbiB0aGlzIGNhc2UsIHdlIGRvIG5vdGhpbmcsIG90aGVyd2lzZSB3ZSByZXNldCBpdFxuICAgICAqL1xuICAgIF9vbkJsdXIoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgna2V5d29yZHMnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRTZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1cygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cblxuICAgIF9kZWxldGUodmFsdWUsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXQoJ3ZhbHVlJykuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5fZm9jdXNJbnB1dCgpO1xuICAgIH1cblxuICAgIF9mb2N1c0lucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpbHRlcmFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IG1lbnVFbGVtZW50ID0gdGhpcy5yZWZzLm1lbnUudmR0LnZOb2RlLmNoaWxkcmVuLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBtZW51V2lkdGggPSBtZW51RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgaWYgKHdpZHRoID4gbWVudVdpZHRoKSB7XG4gICAgICAgICAgICBtZW51RWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtTZWxlY3QsIE9wdGlvbiwgR3JvdXAgYXMgT3B0aW9uR3JvdXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO2ltcG9ydCBEcm9wZG93biwge0Ryb3Bkb3duSXRlbSwgRHJvcGRvd25NZW51fSBmcm9tICcuLi9kcm9wZG93bic7aW1wb3J0IHtpc1N0cmluZ09yTnVtYmVyLCBnZXRUZXh0QnlDaGlsZHJlbn0gZnJvbSAnLi4vdXRpbHMnO2ltcG9ydCBPcHRpb24gZnJvbSAnLi9vcHRpb24nO2ltcG9ydCBPcHRpb25Hcm91cCBmcm9tICcuL2dyb3VwJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgICBjbGFzc05hbWUsIGNsZWFyYWJsZSwgZGF0YSwgdmFsdWUsIG11bHRpcGxlLFxuICAgIGRpc2FibGVkLCBmaWx0ZXJhYmxlLCBrZXl3b3JkcywgX3Nob3csXG4gICAgcGxhY2Vob2xkZXIsIHNpemUsIHN0eWxlLCBuYW1lLCBjaGlsZHJlbixcbiAgICBmbHVpZCxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stc2VsZWN0JzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgJ2stc2hvdyc6IF9zaG93LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbmxldCBoYXNWYWx1ZSA9IHZhbHVlICE9IG51bGwgJiYgKCFtdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJycgfHwgbXVsdGlwbGUgJiYgdmFsdWUubGVuZ3RoKTtcbmNvbnN0IGlzR3JvdXAgPSBBcnJheS5pc0FycmF5KHNlbGYuZ2V0KCdkYXRhLjAuZGF0YScpKTtcblxubGV0IGxhYmVsO1xubGV0IGxhYmVscyA9IFtdO1xuXG5jb25zdCBoYW5kbGVQcm9wcyA9IHByb3BzID0+IHtcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHNldCBsYWJlbFxuICAgICAgICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiB0aGlzfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IE9wdGlvbnNWTm9kZXMgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiBfX3UubWFwKGNoaWxkcmVuID8gKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6IGNoaWxkcmVuLCB2Tm9kZSA9PiB7XG4gICAgICAgIGlmICh2Tm9kZS50YWcgPT09IE9wdGlvbikge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcywgXG4gICAgICAgICAgICAgICAgJ2V2LXNlbGVjdCc6IHNlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgcHJvcHMudmFsdWUpLFxuICAgICAgICAgICAgICAgIGhpZGVPblNlbGVjdDogIW11bHRpcGxlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCB8fCBnZXRUZXh0QnlDaGlsZHJlbihwcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIHx8IHByb3BzLmxhYmVsIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHthY3RpdmUsIHZhbGlkfSA9IGhhbmRsZVByb3BzKHByb3BzKTtcbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGMoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBfY2xhc3NOYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgW3Byb3BzLmNsYXNzTmFtZV06IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2stYWN0aXZlJzogYWN0aXZlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIGNsb25lZCB2Tm9kZVxuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uLCBwcm9wcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUudGFnID09PSBPcHRpb25Hcm91cCkge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogaChPcHRpb25zVk5vZGVzLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Byb3BzLmNoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbkdyb3VwLCBwcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgfSk7IFxufSBcblxuY29uc3QgTWVudSA9IChcbiAgICBoKERyb3Bkb3duTWVudSwgeydldi0kY2hhbmdlZDpzaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3Bvc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay1zZWxlY3QtZHJvcGRvd24nLCAnZXYtJGNoYW5nZTpzaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2hhbmdlU2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFpc0dyb3VwIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKE9wdGlvbnMsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzfSk7XG59LCB0aGlzKSwgaChPcHRpb25zVk5vZGVzLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snbWVudSddID0gaX0pXG4pO1xuXG4vLyBpZiB0aGUgdmFsdWUgaXMgbm90IGluIG9wdGlvbnMsIHRoZW4gc2V0IGhhc1ZhbHVlIHRvIGZhbHNlXG5pZiAoaGFzVmFsdWUgJiYgIWxhYmVsICYmICFsYWJlbHMubGVuZ3RoKSB7XG4gICAgaGFzVmFsdWUgPSBmYWxzZTtcbn1cblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoRHJvcGRvd24sIHsncG9zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe215OiAnbGVmdCB0b3AnLCBhdDogJ2xlZnQgYm90dG9tJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RyaWdnZXInOiAnY2xpY2snLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fZm9jdXNJbnB1dCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2goJ2lucHV0Jywgeyd0eXBlJzogJ2hpZGRlbicsICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSAmJiBmaWx0ZXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKElucHV0LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleXdvcmRzID09IG51bGwgPyBsYWJlbCA6IGtleXdvcmRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlYXJjaCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtYmx1cic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkJsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaXplIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdmbHVpZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFmaWx0ZXJhYmxlICYmICFoYXNWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlcicpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtsYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay12YWx1ZScpIDogaChBbmltYXRlLCB7J2E6dGFnJzogJ3NwYW4nLCAnYTpkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXZhbHVlcycsICdjaGlsZHJlbic6IFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWxzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG5yZXR1cm4gaChBbmltYXRlLCB7J2E6dGFnJzogJ3NwYW4nLCAnY2xhc3NOYW1lJzogJ2stdGFnJywgJ2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZVtpbmRleF0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6dHJhbnNpdGlvbic6ICdmYWRlJywgJ2NoaWxkcmVuJzogW2goJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay10ZXh0JyksIGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RlbGV0ZS5iaW5kKHNlbGYsIHZhbHVlW2luZGV4XSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWljb24gaW9uLWlvcy1jbG9zZS1lbXB0eScpXSwgJ19jb250ZXh0JzogdGhpc30pO1xufSwgdGhpcyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaWx0ZXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKElucHV0LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleXdvcmRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlYXJjaCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtYmx1cic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkJsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWZvY3VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uRm9jdXMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshaGFzVmFsdWUgPyBwbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGVhcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xlYXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstY2xlYXIgaW9uLWlvcy1jbG9zZVwiOiB0cnVlLCBcImstc2hvd1wiOiBoYXNWYWx1ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2stYXJyb3cgaW9uLWFycm93LWRvd24tYicpXSwgJ2stc3VmZml4JyldLCAnay13cmFwcGVyJyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtNZW51IFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyldLCAnX2NvbnRleHQnOiB0aGlzfSksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQge0Ryb3Bkb3duSXRlbX0gZnJvbSAnLi4vZHJvcGRvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBEcm9wZG93bkl0ZW0ge1xuICAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLXBhZ2luYXRpb24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzLFxcbi5rLXBhZ2luYXRpb24gLmstbGltaXRzLFxcbi5rLXBhZ2luYXRpb24gLmstZ290byxcXG4uay1wYWdpbmF0aW9uIC5rLXRvdGFsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjQyODU3MTQyODU3MTQyOWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWQwZGQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMC43MTQyODU3MTQyODU3MTRlbTtcXG4gIG1pbi13aWR0aDogMi41NzE0Mjg1NzE0Mjg1NzJlbTtcXG4gIGhlaWdodDogMi41NzE0Mjg1NzE0Mjg1NzJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuNTcxNDI4NTcxNDI4NTcyZW0gLSAycHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmstcGFnaW5hdGlvbiAuay1wYWdlcyA+IGRpdjpub3QoLmstYWN0aXZlKTpub3QoLmstZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzBhNWVlZTtcXG4gIGNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5rLXBhZ2luYXRpb24gLmstcGFnZXMgLmstYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTVlZWU7XFxuICBib3JkZXItY29sb3I6ICMwYTVlZWU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmstcGFnaW5hdGlvbiAuay1wYWdlcyAuay1kaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgY29sb3I6ICM5OTk7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxufVxcbi5rLXBhZ2luYXRpb24gLmstZ290byAuay1pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB3aWR0aDogNC4yODU3MTQyODU3MTQyODZlbTtcXG4gIG1hcmdpbjogMCAwLjcxNDI4NTcxNDI4NTcxNGVtO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXNlbGVjdCB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmstcGFnaW5hdGlvbi5rLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXBhZ2luYXRpb24uay1zbWFsbCAuay1wYWdlcyA+IGRpdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNDE2NjY2NjY2NjY2NjY3ZW07XFxuICBtaW4td2lkdGg6IDIuNWVtO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuNWVtIC0gMnB4KTtcXG59XFxuLmstcGFnaW5hdGlvbi5rLW1pbmkge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG59XFxuLmstcGFnaW5hdGlvbi5rLW1pbmkgLmstcGFnZXMgPiBkaXYge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjQxNjY2NjY2NjY2NjY2N2VtO1xcbiAgbWluLXdpZHRoOiAyLjE2NjY2NjY2NjY2NjY2N2VtO1xcbiAgaGVpZ2h0OiAyLjE2NjY2NjY2NjY2NjY2N2VtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi4xNjY2NjY2NjY2NjY2NjdlbSAtIDJweCk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1zZWxlY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNC4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLXNlbGVjdCA+IC5rLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAyLjU3MTQyODU3MTQyODU3MnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhZDBkZDtcXG4gIHBhZGRpbmc6IDAgMi4xNDI4NTcxNDI4NTcxNDNyZW0gMCAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjI1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwLjI1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4yNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4yNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc2VsZWN0IC5rLXN1ZmZpeCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHJpZ2h0OiAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG59XFxuLmstc2VsZWN0LmstZmx1aWQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLXNlbGVjdCAuay1jbGVhciB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmstc2VsZWN0IC5rLWNsZWFyOmhvdmVyIHtcXG4gIGNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uay1zZWxlY3Q6aG92ZXIgLmstY2xlYXIuay1zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uay1zZWxlY3Quay1jbGVhcmFibGUgPiAuay13cmFwcGVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMuMjE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1zZWxlY3QgLmstaW5wdXQgLmstaW5uZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMi41NzE0Mjg1NzE0Mjg1NzJyZW0gLSAycHgpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmstc2VsZWN0IC5rLWlucHV0IC5rLWlubmVyOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmstc2VsZWN0IC5rLXBsYWNlaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4uay1zZWxlY3QgLmstaW5wdXQsXFxuLmstc2VsZWN0IC5rLXBsYWNlaG9sZGVyLFxcbi5rLXNlbGVjdCAuay12YWx1ZSB7XFxuICBsaW5lLWhlaWdodDogY2FsYygyLjU3MTQyODU3MTQyODU3MnJlbSAtIDJweCk7XFxufVxcbi5rLXNlbGVjdCAuay1hcnJvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uay1zZWxlY3Quay1zaG93ID4gLmstd3JhcHBlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGE1ZWVlO1xcbn1cXG4uay1zZWxlY3Quay1zaG93IC5rLWFycm93IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmstc2VsZWN0LmstZGlzYWJsZWQgPiAuay13cmFwcGVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxufVxcbi5rLXNlbGVjdC5rLWRpc2FibGVkIC5rLWlucHV0IHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLXNlbGVjdCAuay12YWx1ZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMC4zNTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXNlbGVjdCAuay12YWx1ZXMgLmstaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLTAuMzU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1zZWxlY3QgLmstdGFnIHtcXG4gIHBhZGRpbmc6IDAuMTQyODU3MTQyODU3MTQzcmVtIDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTQyODU3MTQyODU3MTQzcmVtO1xcbiAgbWFyZ2luOiAwIDAuMzU3MTQyODU3MTQyODU3cmVtIDAuMzU3MTQyODU3MTQyODU3cmVtIDA7XFxufVxcbi5rLXNlbGVjdCAuay10YWcsXFxuLmstc2VsZWN0IC5rLXRhZyAuay10ZXh0LFxcbi5rLXNlbGVjdCAuay10YWcgLmstaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uay1zZWxlY3QgLmstdGFnIC5rLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1zZWxlY3QgLmstdGFnIC5rLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS40Mjg1NzE0Mjg1NzE0MjlyZW07XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciAuay1pbnB1dCxcXG4uay1zZWxlY3Quay1zbWFsbCA+IC5rLXdyYXBwZXIgLmstcGxhY2Vob2xkZXIsXFxuLmstc2VsZWN0Lmstc21hbGwgPiAuay13cmFwcGVyIC5rLXZhbHVlIHtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuMTQyODU3MTQyODU3MTQzcmVtIC0gMnB4KTtcXG59XFxuLmstc2VsZWN0Lmstc21hbGwgPiAuay13cmFwcGVyIC5rLWlucHV0IC5rLWlubmVyIHtcXG4gIGhlaWdodDogY2FsYygyLjE0Mjg1NzE0Mjg1NzE0M3JlbSAtIDJweCk7XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciAuay12YWx1ZXMge1xcbiAgbWFyZ2luLXRvcDogMC4wNzE0Mjg1NzE0Mjg1NzFyZW07XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciAuay12YWx1ZXMgLmstaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLTAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zZWxlY3Quay1zbWFsbCA+IC5rLXdyYXBwZXIgLmstdGFnIHtcXG4gIG1hcmdpbjogMCAwLjE0Mjg1NzE0Mjg1NzE0M3JlbSAwLjA3MTQyODU3MTQyODU3MXJlbSAwO1xcbn1cXG4uay1zZWxlY3Quay1taW5pID4gLmstd3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXNlbGVjdC5rLW1pbmkgPiAuay13cmFwcGVyIC5rLWlucHV0LFxcbi5rLXNlbGVjdC5rLW1pbmkgPiAuay13cmFwcGVyIC5rLXBsYWNlaG9sZGVyLFxcbi5rLXNlbGVjdC5rLW1pbmkgPiAuay13cmFwcGVyIC5rLXZhbHVlIHtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuODU3MTQyODU3MTQyODU3cmVtIC0gMnB4KTtcXG59XFxuLmstc2VsZWN0LmstbWluaSA+IC5rLXdyYXBwZXIgLmstaW5wdXQgLmstaW5uZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEuODU3MTQyODU3MTQyODU3cmVtIC0gMnB4KTtcXG59XFxuLmstc2VsZWN0LmstbWluaSA+IC5rLXdyYXBwZXIgLmstdmFsdWVzIHtcXG4gIG1hcmdpbi10b3A6IDAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zZWxlY3Quay1taW5pID4gLmstd3JhcHBlciAuay12YWx1ZXMgLmstaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLTAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zZWxlY3Quay1taW5pID4gLmstd3JhcHBlciAuay10YWcge1xcbiAgbWFyZ2luOiAwIDAuMTQyODU3MTQyODU3MTQzcmVtIDAuMDcxNDI4NTcxNDI4NTcxcmVtIDA7XFxufVxcbi5rLXNlbGVjdC1kcm9wZG93biAuay1hY3RpdmUge1xcbiAgY29sb3I6ICMwYTVlZWU7XFxufVxcbi5rLXNlbGVjdC1kcm9wZG93biAuay1ncm91cCA+IC5rLWxhYmVsIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgcGFkZGluZzogMC41NzE0Mjg1NzE0Mjg1NzFyZW07XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtMzIgLmstcGFnaW5hdGlvbiB7XFxuICBtYXJnaW46IDMwcHggMzBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdrcGMvY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5yZXR1cm4gaCgnZGl2JywgbnVsbCwgW2goUGFnaW5hdGlvbiwgeyd0b3RhbCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsyMDEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2N1cnJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2hvd0dvdG8nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaChQYWdpbmF0aW9uLCB7J3RvdGFsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWzIwMSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY3VycmVudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogJ3NtYWxsJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCBoKFBhZ2luYXRpb24sIHsndG90YWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMjAxIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjdXJyZW50JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWzIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiAnbWluaScsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==