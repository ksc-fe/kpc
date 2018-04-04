webpackJsonp([6,8,39],{

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

/***/ "./site/components/pagination recursive demos.*index.js$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demos/basic/index.js": "./site/components/pagination/demos/basic/index.js"
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
webpackContext.id = "./site/components/pagination recursive demos.*index.js$";

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

/***/ }),

/***/ "./site/components/pagination/index.js":
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

var _index = __webpack_require__("./site/components/pagination/index.json");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = __webpack_require__("./site/components/pagination recursive demos.*index.js$");
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

/***/ "./site/components/pagination/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"分页","category":"组件","order":0},"catalogs":[],"contents":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>size</td>\n<td>尺寸</td>\n<td><code>&quot;default&quot;</code> &#124; <code>&quot;mini&quot;</code> &#124; <code>&quot;small&quot;</code></td>\n<td><code>&quot;default&quot;</code></td>\n</tr>\n<tr>\n<td>counts</td>\n<td>展示按钮个数</td>\n<td><code>Number</code></td>\n<td><code>7</code></td>\n</tr>\n<tr>\n<td>total</td>\n<td>数据总条数</td>\n<td><code>Number</code></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>showTotal</td>\n<td>显示总条数</td>\n<td><code>Boolean</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>current</td>\n<td>当前页码</td>\n<td><code>Number</code></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>showGoto</td>\n<td>显示快速翻页</td>\n<td><code>Boolean</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>limit</td>\n<td>页面条数</td>\n<td><code>Number</code></td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td>limits</td>\n<td>页面条数</td>\n<td><code>Array&lt;Number&gt;</code></td>\n<td><code>[10, 20, 50]</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div><h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1><h2 id='header-Pagination'>Pagination</h2><div class=\"k-table-wrapper k-border\">\n                    <table class=\"k-table\">\n                        <thead><tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n                        <tbody><tr>\n<td>changePage</td>\n<td>切换页码</td>\n<td>要切换到的页码</td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>prev</td>\n<td>上一页</td>\n<td>-</td>\n<td><code>undefined</code></td>\n</tr>\n<tr>\n<td>next</td>\n<td>下一页</td>\n<td>-</td>\n<td><code>undefined</code></td>\n</tr>\n</tbody>\n                    </table>\n                </div>","codes":[{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":33,"sideBars":{"组件":[{"title":"面包屑","path":"components/breadcrumb/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"按钮","path":"components/button/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]},{"title":"ButtonGroup","path":"#header-ButtonGroup","level":2,"content":"<h2 id='header-ButtonGroup'>ButtonGroup</h2>","text":"ButtonGroup","children":[]}]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Button","path":"#header-Button","level":2,"content":"<h2 id='header-Button'>Button</h2>","text":"Button","children":[]}]}]},{"title":"复选框","path":"components/checkbox/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"日期选择","path":"components/datepicker/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]}]},{"title":"弹窗","path":"components/dialog/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"扩展点","path":"#header-%E6%89%A9%E5%B1%95%E7%82%B9","level":1,"content":"<h1 id='header-%E6%89%A9%E5%B1%95%E7%82%B9'>扩展点</h1>","text":"扩展点","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":1,"content":"<h1 id='header-%E4%BA%8B%E4%BB%B6'>事件</h1>","text":"事件","children":[]}]},{"title":"下拉菜单","path":"components/dropdown/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[{"title":"Dropdown","path":"#header-Dropdown","level":2,"content":"<h2 id='header-Dropdown'>Dropdown</h2>","text":"Dropdown","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]},{"title":"事件","path":"#header-%E4%BA%8B%E4%BB%B6","level":2,"content":"<h2 id='header-%E4%BA%8B%E4%BB%B6'>事件</h2>","text":"事件","children":[]},{"title":"DropdownItem","path":"#header-DropdownItem","level":2,"content":"<h2 id='header-DropdownItem'>DropdownItem</h2>","text":"DropdownItem","children":[]}]}]},{"title":"分页","path":"components/pagination/index.md","children":[{"title":"属性","path":"#header-%E5%B1%9E%E6%80%A7","level":1,"content":"<h1 id='header-%E5%B1%9E%E6%80%A7'>属性</h1>","text":"属性","children":[]},{"title":"方法","path":"#header-%E6%96%B9%E6%B3%95","level":1,"content":"<h1 id='header-%E6%96%B9%E6%B3%95'>方法</h1>","text":"方法","children":[{"title":"Pagination","path":"#header-Pagination","level":2,"content":"<h2 id='header-Pagination'>Pagination</h2>","text":"Pagination","children":[]}]}]},{"title":"单选框","path":"components/radio/index.md","children":[{"children":[{"title":"Radio 单选框","path":"#header-Radio%20%E5%8D%95%E9%80%89%E6%A1%86","level":2,"content":"<h2 id='header-Radio%20%E5%8D%95%E9%80%89%E6%A1%86'>Radio 单选框</h2>","text":"Radio 单选框","children":[]},{"title":"示例","path":"#header-%E7%A4%BA%E4%BE%8B","level":2,"content":"<h2 id='header-%E7%A4%BA%E4%BE%8B'>示例</h2>","text":"示例","children":[]},{"title":"常规属性","path":"#header-%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7","level":2,"content":"<h2 id='header-%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7'>常规属性</h2>","text":"常规属性","children":[]},{"title":"自定义属性","path":"#header-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7","level":2,"content":"<h2 id='header-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7'>自定义属性</h2>","text":"自定义属性","children":[]}]}]}]},"highlighted":[{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWw/NDRjMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L2dyb3VwLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsPzNjMDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24gZGVtb3MuKmluZGV4LmpzJCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5zdHlsPzRkYWQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4Lmpzb24iXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInRlbXBsYXRlIiwidG90YWwiLCJjdXJyZW50IiwibGltaXQiLCJjb3VudHMiLCJzaG93VG90YWwiLCJsaW1pdHMiLCJ2YWx1ZSIsInNob3dHb3RvIiwic2l6ZSIsImNoYW5nZVBhZ2UiLCJnZXQiLCJvbiIsInNldCIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJwcm9wVHlwZXMiLCJCb29sZWFuIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJyZXN0IiwiY2xhc3NOYW1lT2JqIiwicGFnaW5hdGlvbkJ1dHRvbiIsImJpbmQiLCJjYWxsIiwicGFnaW5hdGlvbkRvdCIsImNhbGxiYWNrIiwiaXRlbXMiLCJtaW5Db3VudCIsIm1heENvdW50IiwicHJldlBhZ2UiLCJuZXh0UGFnZSIsInB1c2giLCJ1bmRlZmluZWQiLCJwcmV2IiwibWF4IiwiaSIsImZhc3ROZXh0IiwiZmFzdFByZXYiLCJtaWRDb3VudCIsIm1pZCIsImZsb29yIiwibWluIiwibmV4dCIsIm1hcCIsIml0ZW0iLCJfX2MiLCJfX24iLCJfZ290byIsIk9wdGlvbkdyb3VwIiwiY2hpbGRyZW4iLCJsYWJlbCIsIlNlbGVjdCIsIm11bHRpcGxlIiwiZGlzYWJsZWQiLCJjbGVhcmFibGUiLCJmaWx0ZXJhYmxlIiwia2V5d29yZHMiLCJwbGFjZWhvbGRlciIsImZsdWlkIiwiX3Nob3ciLCJyZWZzIiwibWVudSIsInBvc2l0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiYXN5bmMiLCJ2YWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJzbGljZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIl9mb2N1c0lucHV0IiwiX3Jlc2V0U2VhcmNoIiwic2hvdyIsImZvY3VzSXRlbUJ5SW5kZXgiLCJjIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaW5wdXQiLCJmb2N1cyIsIm1lbnVFbGVtZW50IiwidmR0Iiwidk5vZGUiLCJlbGVtZW50Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm1lbnVXaWR0aCIsInN0eWxlIiwiT3B0aW9uIiwibmFtZSIsImhhc1ZhbHVlIiwibGVuZ3RoIiwiaXNHcm91cCIsImxhYmVscyIsImhhbmRsZVByb3BzIiwiYWN0aXZlIiwidmFsaWQiLCJwcm9wcyIsInRtcCIsInRvTG93ZXJDYXNlIiwiU3RyaW5nIiwicmV0IiwiZm9yRWFjaCIsInRleHQiLCJfb25TZWxlY3QiLCJPcHRpb25zVk5vZGVzIiwidGFnIiwiaGlkZU9uU2VsZWN0IiwiTWVudSIsIl9wb3NpdGlvbiIsIl9vbkNoYW5nZVNob3ciLCJrZXkiLCJteSIsImF0IiwiX29uU2VhcmNoIiwiX29uQmx1ciIsIl9kZWxldGUiLCJfb25Gb2N1cyIsIl9vbkNsZWFyIiwiZGVmYXVsdCIsInIiLCJkZW1vcyIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFUsV0FDaEIsaUJBQU9DLFFB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OEJBQThCLGFBQWEsMHJCQUEwckIsVUFBVSwyd0JBQTJ3Qix1REFBdUQscUNBQXFDLHlDQUF5Qyx5REFBeUQsR0FBRyxFQUFFLHlCQUF5QixPQUFPLG1FQUFtRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCwySUFBMkksZ0lBQWdJLEVBQUUseUpBQXlKLEVBQUUsRUFBRSwySUFBMkksZ0lBQWdJLEVBQUUsRUFBRSxFQUFFLGlFQUFpRSw0SUFBNEksRUFBRSxFQUFFLG9FQUFvRSw0SUFBNEksRUFBRSxFQUFFLDhEQUE4RCw0SUFBNEksRUFBRSxpS0FBaUssRUFBRSw0SUFBNEksRUFBRSw0SUFBNEksRUFBRSxFQUFFLGtFQUFrRSwySUFBMkksMElBQTBJLEVBQUUsOEpBQThKLEVBQUUsNElBQTRJLEVBQUUsOEpBQThKLEVBQUUsRUFBRSxFQUFFLGtFQUFrRSw0SUFBNEksRUFBRSwySUFBMkksb0pBQW9KLEVBQUUsRUFBRSxFQUFFLDhEQUE4RCxhQUFhLG1NQUFtTSxFQUFFLDRJQUE0SSxFQUFFLHNMQUFzTCxFQUFFLDJNQUEyTSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsK0xBQStMLGdKQUFnSiw2UEFBNlAsNkZBQTZGLEdBQUcsZUFBZSxFIiwiZmlsZSI6InN0YXRpYy9jaHVuay8xZWZkYTYyMDE3M2UxZGI3ZDc3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2hvd0dvdG86IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBjdXJyZW50OiAxLFxuICAgICAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICAgICAgY291bnRzOiA3LFxuICAgICAgICAgICAgc2hvd1RvdGFsOiB0cnVlLFxuICAgICAgICAgICAgbGltaXRzOiBbMTAsIDIwLCA1MF0sXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBzaG93R290bzogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIC8vIGF2b2lkIHNldHRpbmcgaW5jb3JyZWN0IHZhbHVlXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLmdldCgnY3VycmVudCcpKTtcblxuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOmxpbWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ2N1cnJlbnQnLCAxKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnZShwYWdlKSB7XG4gICAgICAgIGNvbnN0IHt0b3RhbCwgbGltaXR9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KTtcblxuICAgICAgICBpZiAocGFnZSA+IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIHBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWdlIDwgMSkge1xuICAgICAgICAgICAgcGFnZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldCgnY3VycmVudCcsIHBhZ2UpO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLmdldCgnY3VycmVudCcpIC0gMSk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMuZ2V0KCdjdXJyZW50JykgKyAxKTtcbiAgICB9XG5cbiAgICBmYXN0UHJldigpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0KCdjdXJyZW50JykgLSAodGhpcy5nZXQoJ2NvdW50cycpIC0gNCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShwYWdlKTtcbiAgICB9XG5cbiAgICBmYXN0TmV4dCgpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0KCdjdXJyZW50JykgKyAodGhpcy5nZXQoJ2NvdW50cycpICsgNCk7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShwYWdlKTtcbiAgICB9XG5cbiAgICBfZ290byhlKSB7XG4gICAgICAgIC8vIGNvbnN0IHJlZ2V4cCA9IC9eWzEtOV1cXGQqJC87XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDE7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQge1BhZ2luYXRpb259O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJpbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NlbGVjdCc7aW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbmNvbnN0IHtcbiAgICB0b3RhbCwgY3VycmVudCwgbGltaXQsIGxpbWl0cywgXG4gICAgY2xhc3NOYW1lLCBzaG93VG90YWwsIHNob3dHb3RvLFxuICAgIGNvdW50cywgc2l6ZSwgLi4ucmVzdFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1wYWdpbmF0aW9uJzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgIFtgay0ke3NpemV9YF06IHNpemUgIT09ICdkZWZhdWx0Jyxcbn07XG5cbmNvbnN0IHRvdGFsUGFnZXMgPSAoTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpKSB8fCAwO1xuXG5jb25zdCBwYWdpbmF0aW9uQnV0dG9uID0gZnVuY3Rpb24ocGFnZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIGgoJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jaGFuZ2VQYWdlLmJpbmQoc2VsZiwgcGFnZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwYWdlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1wYWdlJzogdHJ1ZSwgJ2stYWN0aXZlJzogcGFnZSA9PT0gY3VycmVudH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG4gICAgKTtcbn07XG5cbmNvbnN0IHBhZ2luYXRpb25Eb3QgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NhbGxiYWNrIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCAnLi4uJywgJ2stZWxsaXBzaXMnKVxufTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG8ge1xuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgbGV0IG1pbkNvdW50ID0gTWF0aC5jZWlsKGNvdW50cyAvIDIpO1xuICAgICAgICBsZXQgbWF4Q291bnQgPSB0b3RhbFBhZ2VzIC0gbWluQ291bnQ7XG4gICAgICAgIGxldCBwcmV2UGFnZSA9IGN1cnJlbnQgLSAxO1xuICAgICAgICBsZXQgbmV4dFBhZ2UgPSBjdXJyZW50ICsgMTtcblxuICAgICAgICAvLyBwcmV2aW91cyBwYWdlIGJ1dHRvblxuICAgICAgICBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwcmV2UGFnZSA8IDEgPyB1bmRlZmluZWQgOiBzZWxmLnByZXYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1hcnJvdy1sZWZ0JyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1wcmV2JzogdHJ1ZSwgJ2stZGlzYWJsZWQnOiBwcmV2UGFnZSA8IDF9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0b3RhbFBhZ2VzID4gY291bnRzKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudCA8PSBtaW5Db3VudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IGNvdW50cyAtIDI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uRG90KHNlbGYuZmFzdE5leHQpKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25CdXR0b24odG90YWxQYWdlcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID4gbWluQ291bnQgJiYgY3VycmVudCA8PSBtYXhDb3VudCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFnaW5hdGlvbkJ1dHRvbigxKSk7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uRG90KHNlbGYuZmFzdFByZXYpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1pZENvdW50ID0gY291bnRzIC0gNDtcbiAgICAgICAgICAgICAgICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKG1pZENvdW50IC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gY3VycmVudCAtIG1pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBtaWRDb3VudCAlIDIgPT09IDEgPyBjdXJyZW50ICsgbWlkIDogY3VycmVudCArIG1pZCAtIDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25CdXR0b24oaSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFnaW5hdGlvbkRvdChzZWxmLmZhc3ROZXh0KSk7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKHRvdGFsUGFnZXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKDEpKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25Eb3Qoc2VsZi5mYXN0UHJldikpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWluID0gdG90YWxQYWdlcyAtIGNvdW50cyArIDM7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChwYWdpbmF0aW9uQnV0dG9uKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHBhZ2luYXRpb25CdXR0b24oaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmV4dCBwYWdlIGJ1dHRvblxuICAgICAgICBpdGVtcy5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2Jywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuZXh0UGFnZSA+IHRvdGFsUGFnZXMgPyB1bmRlZmluZWQgOiBzZWxmLm5leHQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ2knLCBudWxsLCBudWxsLCAnaW9uLWlvcy1hcnJvdy1yaWdodCcpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7J2stbmV4dCc6IHRydWUsICdrLWRpc2FibGVkJzogbmV4dFBhZ2UgPiB0b3RhbFBhZ2VzfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbiAgICAgICAgKTtcblxuICAgICAgICBpdGVtcztcbiAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXBhZ2VzJyksIGgoJ2RpdicsIG51bGwsIGgoU2VsZWN0LCB7J2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGltaXRzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyd2YWx1ZSc6IGl0ZW0sICdsYWJlbCc6IGl0ZW0gKyAnIOadoSAvIOmhtSd9XG4gICAgICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaXplIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsIHZhbHVlOiBfZ2V0TW9kZWwoc2VsZiwgJ2xpbWl0JyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oX19jLCBfX24pIHsgX3NldE1vZGVsKHNlbGYsICdsaW1pdCcsIF9fbikgfX0pLCAnay1saW1pdHMnKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3dHb3RvIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbJ1xcbiAgICAgICAg6Lez6IezJywgaChJbnB1dCwgeydzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2N1cnJlbnQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNoYW5nZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9nb3RvIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ+mhtVxcbiAgICAnXSwgJ2stZ290bycpIDogdW5kZWZpbmVkLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2hvd1RvdGFsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCBbJ+WFsSAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdG90YWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJyDmnaEnXSwgJ2stdG90YWwnKSA6IHVuZGVmaW5lZF0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2luYXRpb24vaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZ3JvdXAudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uR3JvdXAgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAuanMiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtjaGlsZHJlbiwgbGFiZWx9ID0gc2VsZi5nZXQoKTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stbGFiZWwnKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCAnay1ncm91cCcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvZ3JvdXAudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuLi9tb3ZlV3JhcHBlci9wb3NpdGlvbic7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2dyb3VwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgSW50YWN0e1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZpbHRlcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGZsdWlkOiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLCAvL+aUr+aMgeWkmumAiWxpXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLCAvLyDmmK/lkKblj6/muIXnqbogXG4gICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSwgLy8g5pCc57Si562b6YCJXG4gICAgICAgICAgICBrZXl3b3JkczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfor7fpgInmi6knLFxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuXG4gICAgICAgICAgICBfc2hvdzogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6dmFsdWUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ211bHRpcGxlJykgJiYgdGhpcy5nZXQoJ19zaG93JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnMubWVudS5wb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25DbGVhcihlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsICcnKTtcbiAgICB9XG5cbiAgICBfb25TZWxlY3QodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWUsIHthc3luYzogdHJ1ZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLnNsaWNlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZmluZCwgZGVsZXRlIGl0XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNwbGljZShpbmRleCwgMSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZXMsIHthc3luYzogdHJ1ZX0pO1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNJbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2V0U2VhcmNoKCk7XG4gICAgfVxuXG4gICAgX29uU2VhcmNoKGUpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2tleXdvcmRzJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAvLyBhbHdheXMgc2hvdyBtZW51IG9uIHNlYXJjaGluZ1xuICAgICAgICB0aGlzLnJlZnMubWVudS5zaG93KCk7XG4gICAgICAgIHRoaXMucmVmcy5tZW51LmZvY3VzSXRlbUJ5SW5kZXgoMCk7XG4gICAgICAgIC8vIGluIG11bHRpcGxlIG1vZGUsIGl0IG1heSBsZWFkIHRoZSBoZWlnaHQgdG8gY2hhbmdlXG4gICAgICAgIGlmICh0aGlzLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLm1lbnUucG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2tleXdvcmRzJywgdW5kZWZpbmVkLCB7YXN5bmM6IHRydWV9KTtcbiAgICB9XG5cbiAgICBfb25DaGFuZ2VTaG93KGMsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfc2hvdycsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYnJpZWYgbGV0IHRoZSBibHVyIG1ldGhvZCBjYWxsZWQgYWZ0ZXIgc2VsZWN0XG4gICAgICogaWYgd2Ugc2VsZWN0ZWQgdGhlIG9wdGlvbiwgdGhlbiB0aGUga2V5d29yZHMgaGFzIGJlZW4gdG8gdG8gdW5kZWZpbmRcbiAgICAgKiBpbiB0aGlzIGNhc2UsIHdlIGRvIG5vdGhpbmcsIG90aGVyd2lzZSB3ZSByZXNldCBpdFxuICAgICAqL1xuICAgIF9vbkJsdXIoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgna2V5d29yZHMnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRTZWFyY2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBfb25Gb2N1cygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cblxuICAgIF9kZWxldGUodmFsdWUsIGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXQoJ3ZhbHVlJykuc2xpY2UoMCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5fZm9jdXNJbnB1dCgpO1xuICAgIH1cblxuICAgIF9mb2N1c0lucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2ZpbHRlcmFibGUnKSkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IG1lbnVFbGVtZW50ID0gdGhpcy5yZWZzLm1lbnUudmR0LnZOb2RlLmNoaWxkcmVuLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBtZW51V2lkdGggPSBtZW51RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgaWYgKHdpZHRoID4gbWVudVdpZHRoKSB7XG4gICAgICAgICAgICBtZW51RWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtTZWxlY3QsIE9wdGlvbiwgR3JvdXAgYXMgT3B0aW9uR3JvdXB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvc2VsZWN0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnO2ltcG9ydCBEcm9wZG93biwge0Ryb3Bkb3duSXRlbSwgRHJvcGRvd25NZW51fSBmcm9tICcuLi9kcm9wZG93bic7aW1wb3J0IHtpc1N0cmluZ09yTnVtYmVyLCBnZXRUZXh0QnlDaGlsZHJlbn0gZnJvbSAnLi4vdXRpbHMnO2ltcG9ydCBPcHRpb24gZnJvbSAnLi9vcHRpb24nO2ltcG9ydCBPcHRpb25Hcm91cCBmcm9tICcuL2dyb3VwJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgICBjbGFzc05hbWUsIGNsZWFyYWJsZSwgZGF0YSwgdmFsdWUsIG11bHRpcGxlLFxuICAgIGRpc2FibGVkLCBmaWx0ZXJhYmxlLCBrZXl3b3JkcywgX3Nob3csXG4gICAgcGxhY2Vob2xkZXIsIHNpemUsIHN0eWxlLCBuYW1lLCBjaGlsZHJlbixcbiAgICBmbHVpZCxcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stc2VsZWN0JzogdHJ1ZSxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgJ2stc2hvdyc6IF9zaG93LFxuICAgICdrLWNsZWFyYWJsZSc6IGNsZWFyYWJsZSxcbiAgICBbYGstJHtzaXplfWBdOiBzaXplICE9PSAnZGVmYXVsdCcsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbn07XG5cbmxldCBoYXNWYWx1ZSA9IHZhbHVlICE9IG51bGwgJiYgKCFtdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJycgfHwgbXVsdGlwbGUgJiYgdmFsdWUubGVuZ3RoKTtcbmNvbnN0IGlzR3JvdXAgPSBBcnJheS5pc0FycmF5KHNlbGYuZ2V0KCdkYXRhLjAuZGF0YScpKTtcblxubGV0IGxhYmVsO1xubGV0IGxhYmVscyA9IFtdO1xuXG5jb25zdCBoYW5kbGVQcm9wcyA9IHByb3BzID0+IHtcbiAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHNldCBsYWJlbFxuICAgICAgICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSk7XG4gICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgb3JkZXIgY29uc2lzdGVudFxuICAgICAgICAgICAgbGFiZWxzW2luZGV4XSA9IHByb3BzLmxhYmVsO1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRtcDtcbiAgICBpZiAoXG4gICAgICAgICFmaWx0ZXJhYmxlICYmIFxuICAgICAgICBwcm9wcy5sYWJlbCB8fCBcbiAgICAgICAga2V5d29yZHMgPT0gbnVsbCB8fCBcbiAgICAgICAgfnByb3BzLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigodG1wID0ga2V5d29yZHMudG9Mb3dlckNhc2UoKSkpIHx8IFxuICAgICAgICAoXG4gICAgICAgICAgICBpc1N0cmluZ09yTnVtYmVyKHByb3BzLnZhbHVlKSAmJiBcbiAgICAgICAgICAgIH5TdHJpbmcocHJvcHMudmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0bXApXG4gICAgICAgIClcbiAgICApIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlOyBcbiAgICB9XG5cbiAgICByZXR1cm4ge2FjdGl2ZSwgdmFsaWR9O1xufTtcblxuY29uc3QgT3B0aW9ucyA9IHByb3BzID0+IHtcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZSB0ZXh0LCB1c2UgbGFiZWwgaW5zdGVhZCBvZlxuICAgICAgICBpZiAoaXRlbS50ZXh0KSBpdGVtLmxhYmVsID0gaXRlbS50ZXh0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qge3ZhbGlkLCBhY3RpdmV9ID0gaGFuZGxlUHJvcHMoaXRlbSk7XG4gICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgaChEcm9wZG93bkl0ZW0sIHsnZXYtc2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgaXRlbS52YWx1ZSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6IF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3snay1hY3RpdmUnOiBhY3RpdmV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnaGlkZU9uU2VsZWN0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbS50ZW1wbGF0ZSA/IGl0ZW0udGVtcGxhdGUoaXRlbSwgaW5kZXgpIDogaXRlbS5sYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiB0aGlzfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IE9wdGlvbnNWTm9kZXMgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiBfX3UubWFwKGNoaWxkcmVuID8gKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dKSA6IGNoaWxkcmVuLCB2Tm9kZSA9PiB7XG4gICAgICAgIGlmICh2Tm9kZS50YWcgPT09IE9wdGlvbikge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcywgXG4gICAgICAgICAgICAgICAgJ2V2LXNlbGVjdCc6IHNlbGYuX29uU2VsZWN0LmJpbmQoc2VsZiwgcHJvcHMudmFsdWUpLFxuICAgICAgICAgICAgICAgIGhpZGVPblNlbGVjdDogIW11bHRpcGxlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCB8fCBnZXRUZXh0QnlDaGlsZHJlbihwcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIHx8IHByb3BzLmxhYmVsIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHthY3RpdmUsIHZhbGlkfSA9IGhhbmRsZVByb3BzKHByb3BzKTtcbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGMoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBfY2xhc3NOYW1lKHtcbiAgICAgICAgICAgICAgICAgICAgW3Byb3BzLmNsYXNzTmFtZV06IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2stYWN0aXZlJzogYWN0aXZlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIGNsb25lZCB2Tm9kZVxuICAgICAgICAgICAgcmV0dXJuIGgoT3B0aW9uLCBwcm9wcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUudGFnID09PSBPcHRpb25Hcm91cCkge1xuICAgICAgICAgICAgbGV0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogaChPcHRpb25zVk5vZGVzLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Byb3BzLmNoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBoKE9wdGlvbkdyb3VwLCBwcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgfSk7IFxufSBcblxuY29uc3QgTWVudSA9IChcbiAgICBoKERyb3Bkb3duTWVudSwgeydldi0kY2hhbmdlZDpzaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX3Bvc2l0aW9uIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnay1zZWxlY3QtZHJvcGRvd24nLCAnZXYtJGNoYW5nZTpzaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2hhbmdlU2hvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFpc0dyb3VwIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKE9wdGlvbnMsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSA6IF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKE9wdGlvbkdyb3VwLCB7J2xhYmVsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmxhYmVsIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoT3B0aW9ucywgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlLmRhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzfSk7XG59LCB0aGlzKSwgaChPcHRpb25zVk5vZGVzLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9KV0sICdfY29udGV4dCc6IHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snbWVudSddID0gaX0pXG4pO1xuXG4vLyBpZiB0aGUgdmFsdWUgaXMgbm90IGluIG9wdGlvbnMsIHRoZW4gc2V0IGhhc1ZhbHVlIHRvIGZhbHNlXG5pZiAoaGFzVmFsdWUgJiYgIWxhYmVsICYmICFsYWJlbHMubGVuZ3RoKSB7XG4gICAgaGFzVmFsdWUgPSBmYWxzZTtcbn1cblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoRHJvcGRvd24sIHsncG9zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe215OiAnbGVmdCB0b3AnLCBhdDogJ2xlZnQgYm90dG9tJ30gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3RyaWdnZXInOiAnY2xpY2snLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fZm9jdXNJbnB1dCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgW2goJ2lucHV0Jywgeyd0eXBlJzogJ2hpZGRlbicsICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnbmFtZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtuYW1lIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9KSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSAmJiBmaWx0ZXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKElucHV0LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleXdvcmRzID09IG51bGwgPyBsYWJlbCA6IGtleXdvcmRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlYXJjaCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtYmx1cic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkJsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaXplIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdmbHVpZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFmaWx0ZXJhYmxlICYmICFoYXNWYWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtwbGFjZWhvbGRlciBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1wbGFjZWhvbGRlcicpIDogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWyFtdWx0aXBsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnc3BhbicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtsYWJlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay12YWx1ZScpIDogaChBbmltYXRlLCB7J2E6dGFnJzogJ3NwYW4nLCAnYTpkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NsYXNzTmFtZSc6ICdrLXZhbHVlcycsICdjaGlsZHJlbic6IFtfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbGFiZWxzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG5yZXR1cm4gaChBbmltYXRlLCB7J2E6dGFnJzogJ3NwYW4nLCAnY2xhc3NOYW1lJzogJ2stdGFnJywgJ2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZVtpbmRleF0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2E6dHJhbnNpdGlvbic6ICdmYWRlJywgJ2NoaWxkcmVuJzogW2goJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbaXRlbSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay10ZXh0JyksIGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RlbGV0ZS5iaW5kKHNlbGYsIHZhbHVlW2luZGV4XSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWljb24gaW9uLWlvcy1jbG9zZS1lbXB0eScpXSwgJ19jb250ZXh0JzogdGhpc30pO1xufSwgdGhpcyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmaWx0ZXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKElucHV0LCB7J3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2tleXdvcmRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vblNlYXJjaCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtYmx1cic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbkJsdXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWZvY3VzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uRm9jdXMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdwbGFjZWhvbGRlcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshaGFzVmFsdWUgPyBwbGFjZWhvbGRlciA6ICcnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhdXRvV2lkdGgnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NpemUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pIDogdW5kZWZpbmVkXSwgJ19jb250ZXh0JzogdGhpc30pLCBoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGVhcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2knLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xlYXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstY2xlYXIgaW9uLWlvcy1jbG9zZVwiOiB0cnVlLCBcImstc2hvd1wiOiBoYXNWYWx1ZX0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCBoKCdpJywgbnVsbCwgbnVsbCwgJ2stYXJyb3cgaW9uLWFycm93LWRvd24tYicpXSwgJ2stc3VmZml4JyldLCAnay13cmFwcGVyJyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtNZW51IFxuICAgIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyldLCAnX2NvbnRleHQnOiB0aGlzfSksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQge0Ryb3Bkb3duSXRlbX0gZnJvbSAnLi4vZHJvcGRvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBEcm9wZG93bkl0ZW0ge1xuICAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VsZWN0L29wdGlvbi5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLXBhZ2luYXRpb24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzLFxcbi5rLXBhZ2luYXRpb24gLmstbGltaXRzLFxcbi5rLXBhZ2luYXRpb24gLmstZ290byxcXG4uay1wYWdpbmF0aW9uIC5rLXRvdGFsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjQyODU3MTQyODU3MTQyOWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWQwZGQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMC43MTQyODU3MTQyODU3MTRlbTtcXG4gIG1pbi13aWR0aDogMi41NzE0Mjg1NzE0Mjg1NzJlbTtcXG4gIGhlaWdodDogMi41NzE0Mjg1NzE0Mjg1NzJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuNTcxNDI4NTcxNDI4NTcyZW0gLSAycHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmstcGFnaW5hdGlvbiAuay1wYWdlcyA+IGRpdjpub3QoLmstYWN0aXZlKTpub3QoLmstZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzBhNWVlZTtcXG4gIGNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXBhZ2VzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5rLXBhZ2luYXRpb24gLmstcGFnZXMgLmstYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTVlZWU7XFxuICBib3JkZXItY29sb3I6ICMwYTVlZWU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmstcGFnaW5hdGlvbiAuay1wYWdlcyAuay1kaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgY29sb3I6ICM5OTk7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxufVxcbi5rLXBhZ2luYXRpb24gLmstZ290byAuay1pbnB1dCB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB3aWR0aDogNC4yODU3MTQyODU3MTQyODZlbTtcXG4gIG1hcmdpbjogMCAwLjcxNDI4NTcxNDI4NTcxNGVtO1xcbn1cXG4uay1wYWdpbmF0aW9uIC5rLXNlbGVjdCB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmstcGFnaW5hdGlvbi5rLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXBhZ2luYXRpb24uay1zbWFsbCAuay1wYWdlcyA+IGRpdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNDE2NjY2NjY2NjY2NjY3ZW07XFxuICBtaW4td2lkdGg6IDIuNWVtO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuNWVtIC0gMnB4KTtcXG59XFxuLmstcGFnaW5hdGlvbi5rLW1pbmkge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG59XFxuLmstcGFnaW5hdGlvbi5rLW1pbmkgLmstcGFnZXMgPiBkaXYge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjQxNjY2NjY2NjY2NjY2N2VtO1xcbiAgbWluLXdpZHRoOiAyLjE2NjY2NjY2NjY2NjY2N2VtO1xcbiAgaGVpZ2h0OiAyLjE2NjY2NjY2NjY2NjY2N2VtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi4xNjY2NjY2NjY2NjY2NjdlbSAtIDJweCk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1zZWxlY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNC4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLXNlbGVjdCA+IC5rLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAyLjU3MTQyODU3MTQyODU3MnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhZDBkZDtcXG4gIHBhZGRpbmc6IDAgMi4xNDI4NTcxNDI4NTcxNDNyZW0gMCAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjI1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwLjI1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4yNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4yNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc2VsZWN0IC5rLXN1ZmZpeCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHJpZ2h0OiAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG59XFxuLmstc2VsZWN0LmstZmx1aWQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLXNlbGVjdCAuay1jbGVhciB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmstc2VsZWN0IC5rLWNsZWFyOmhvdmVyIHtcXG4gIGNvbG9yOiAjMGE1ZWVlO1xcbn1cXG4uay1zZWxlY3Q6aG92ZXIgLmstY2xlYXIuay1zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uay1zZWxlY3Quay1jbGVhcmFibGUgPiAuay13cmFwcGVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMuMjE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1zZWxlY3QgLmstaW5wdXQgLmstaW5uZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMi41NzE0Mjg1NzE0Mjg1NzJyZW0gLSAycHgpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmstc2VsZWN0IC5rLWlucHV0IC5rLWlubmVyOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmstc2VsZWN0IC5rLXBsYWNlaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4uay1zZWxlY3QgLmstaW5wdXQsXFxuLmstc2VsZWN0IC5rLXBsYWNlaG9sZGVyLFxcbi5rLXNlbGVjdCAuay12YWx1ZSB7XFxuICBsaW5lLWhlaWdodDogY2FsYygyLjU3MTQyODU3MTQyODU3MnJlbSAtIDJweCk7XFxufVxcbi5rLXNlbGVjdCAuay1hcnJvdyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uay1zZWxlY3Quay1zaG93ID4gLmstd3JhcHBlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGE1ZWVlO1xcbn1cXG4uay1zZWxlY3Quay1zaG93IC5rLWFycm93IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmstc2VsZWN0LmstZGlzYWJsZWQgPiAuay13cmFwcGVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxufVxcbi5rLXNlbGVjdC5rLWRpc2FibGVkIC5rLWlucHV0IHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLXNlbGVjdCAuay12YWx1ZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMC4zNTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXNlbGVjdCAuay12YWx1ZXMgLmstaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLTAuMzU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1zZWxlY3QgLmstdGFnIHtcXG4gIHBhZGRpbmc6IDAuMTQyODU3MTQyODU3MTQzcmVtIDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTQyODU3MTQyODU3MTQzcmVtO1xcbiAgbWFyZ2luOiAwIDAuMzU3MTQyODU3MTQyODU3cmVtIDAuMzU3MTQyODU3MTQyODU3cmVtIDA7XFxufVxcbi5rLXNlbGVjdCAuay10YWcsXFxuLmstc2VsZWN0IC5rLXRhZyAuay10ZXh0LFxcbi5rLXNlbGVjdCAuay10YWcgLmstaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uay1zZWxlY3QgLmstdGFnIC5rLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1zZWxlY3QgLmstdGFnIC5rLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS40Mjg1NzE0Mjg1NzE0MjlyZW07XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciAuay1pbnB1dCxcXG4uay1zZWxlY3Quay1zbWFsbCA+IC5rLXdyYXBwZXIgLmstcGxhY2Vob2xkZXIsXFxuLmstc2VsZWN0Lmstc21hbGwgPiAuay13cmFwcGVyIC5rLXZhbHVlIHtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDIuMTQyODU3MTQyODU3MTQzcmVtIC0gMnB4KTtcXG59XFxuLmstc2VsZWN0Lmstc21hbGwgPiAuay13cmFwcGVyIC5rLWlucHV0IC5rLWlubmVyIHtcXG4gIGhlaWdodDogY2FsYygyLjE0Mjg1NzE0Mjg1NzE0M3JlbSAtIDJweCk7XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciAuay12YWx1ZXMge1xcbiAgbWFyZ2luLXRvcDogMC4wNzE0Mjg1NzE0Mjg1NzFyZW07XFxufVxcbi5rLXNlbGVjdC5rLXNtYWxsID4gLmstd3JhcHBlciAuay12YWx1ZXMgLmstaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLTAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zZWxlY3Quay1zbWFsbCA+IC5rLXdyYXBwZXIgLmstdGFnIHtcXG4gIG1hcmdpbjogMCAwLjE0Mjg1NzE0Mjg1NzE0M3JlbSAwLjA3MTQyODU3MTQyODU3MXJlbSAwO1xcbn1cXG4uay1zZWxlY3Quay1taW5pID4gLmstd3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiAxLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxufVxcbi5rLXNlbGVjdC5rLW1pbmkgPiAuay13cmFwcGVyIC5rLWlucHV0LFxcbi5rLXNlbGVjdC5rLW1pbmkgPiAuay13cmFwcGVyIC5rLXBsYWNlaG9sZGVyLFxcbi5rLXNlbGVjdC5rLW1pbmkgPiAuay13cmFwcGVyIC5rLXZhbHVlIHtcXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEuODU3MTQyODU3MTQyODU3cmVtIC0gMnB4KTtcXG59XFxuLmstc2VsZWN0LmstbWluaSA+IC5rLXdyYXBwZXIgLmstaW5wdXQgLmstaW5uZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEuODU3MTQyODU3MTQyODU3cmVtIC0gMnB4KTtcXG59XFxuLmstc2VsZWN0LmstbWluaSA+IC5rLXdyYXBwZXIgLmstdmFsdWVzIHtcXG4gIG1hcmdpbi10b3A6IDAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zZWxlY3Quay1taW5pID4gLmstd3JhcHBlciAuay12YWx1ZXMgLmstaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLTAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbn1cXG4uay1zZWxlY3Quay1taW5pID4gLmstd3JhcHBlciAuay10YWcge1xcbiAgbWFyZ2luOiAwIDAuMTQyODU3MTQyODU3MTQzcmVtIDAuMDcxNDI4NTcxNDI4NTcxcmVtIDA7XFxufVxcbi5rLXNlbGVjdC1kcm9wZG93biAuay1hY3RpdmUge1xcbiAgY29sb3I6ICMwYTVlZWU7XFxufVxcbi5rLXNlbGVjdC1kcm9wZG93biAuay1ncm91cCA+IC5rLWxhYmVsIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgcGFkZGluZzogMC41NzE0Mjg1NzE0Mjg1NzFyZW07XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4YW1wbGUuaW5kZXgtMzIgLmstcGFnaW5hdGlvbiB7XFxuICBtYXJnaW46IDMwcHggMzBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDgiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZGVtb3MvYmFzaWMvaW5kZXguanNcIjogXCIuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LmpzXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24gcmVjdXJzaXZlIGRlbW9zLippbmRleC5qcyRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uIGRlbW9zLippbmRleC5qcyRcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24gcmVjdXJzaXZlIGRlbW9zLippbmRleC5qcyRcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRhdGF9IGZyb20gJy4vaW5kZXguanNvbic7XG5pbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtb3MvYmFzaWMvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA4IiwiaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAna3BjL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKFBhZ2luYXRpb24sIHsndG90YWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMjAxIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjdXJyZW50JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWzIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3Nob3dHb3RvJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoUGFnaW5hdGlvbiwgeyd0b3RhbCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsyMDEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2N1cnJlbnQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnc2l6ZSc6ICdzbWFsbCcsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaChQYWdpbmF0aW9uLCB7J3RvdGFsJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gWzIwMSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY3VycmVudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzaXplJzogJ21pbmknLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSldKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4LnZkdCIsImltcG9ydCBBcnRpY2xlIGZyb20gJ34vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZSc7XG5pbXBvcnQgZGF0YSBmcm9tICcuL2luZGV4Lmpzb24nO1xuXG5jb25zdCByID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9kZW1vcy4qaW5kZXguanMkLyk7XG5jb25zdCBkZW1vcyA9IHIua2V5cygpLm1hcChyKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBBcnRpY2xlIHtcbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHsuLi5zdXBlci5kZWZhdWx0cygpLCAuLi5kYXRhLCBkZW1vc307XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuWIhumhtVwiLFwiY2F0ZWdvcnlcIjpcIue7hOS7tlwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPjxkaXYgY2xhc3M9XFxcImstdGFibGUtd3JhcHBlciBrLWJvcmRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcImstdGFibGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxuPHRoPuWxnuaApzwvdGg+XFxuPHRoPuivtOaYjjwvdGg+XFxuPHRoPuexu+WeizwvdGg+XFxuPHRoPum7mOiupOWAvDwvdGg+XFxuPC90cj5cXG48L3RoZWFkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT48dHI+XFxuPHRkPnNpemU8L3RkPlxcbjx0ZD7lsLrlr7g8L3RkPlxcbjx0ZD48Y29kZT4mcXVvdDtkZWZhdWx0JnF1b3Q7PC9jb2RlPiAmIzEyNDsgPGNvZGU+JnF1b3Q7bWluaSZxdW90OzwvY29kZT4gJiMxMjQ7IDxjb2RlPiZxdW90O3NtYWxsJnF1b3Q7PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPiZxdW90O2RlZmF1bHQmcXVvdDs8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y291bnRzPC90ZD5cXG48dGQ+5bGV56S65oyJ6ZKu5Liq5pWwPC90ZD5cXG48dGQ+PGNvZGU+TnVtYmVyPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPjc8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+dG90YWw8L3RkPlxcbjx0ZD7mlbDmja7mgLvmnaHmlbA8L3RkPlxcbjx0ZD48Y29kZT5OdW1iZXI8L2NvZGU+PC90ZD5cXG48dGQ+PGNvZGU+MDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5zaG93VG90YWw8L3RkPlxcbjx0ZD7mmL7npLrmgLvmnaHmlbA8L3RkPlxcbjx0ZD48Y29kZT5Cb29sZWFuPC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPnRydWU8L2NvZGU+PC90ZD5cXG48L3RyPlxcbjx0cj5cXG48dGQ+Y3VycmVudDwvdGQ+XFxuPHRkPuW9k+WJjemhteeggTwvdGQ+XFxuPHRkPjxjb2RlPk51bWJlcjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT4xPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnNob3dHb3RvPC90ZD5cXG48dGQ+5pi+56S65b+r6YCf57+76aG1PC90ZD5cXG48dGQ+PGNvZGU+Qm9vbGVhbjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT5mYWxzZTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5saW1pdDwvdGQ+XFxuPHRkPumhtemdouadoeaVsDwvdGQ+XFxuPHRkPjxjb2RlPk51bWJlcjwvY29kZT48L3RkPlxcbjx0ZD48Y29kZT4xMDwvY29kZT48L3RkPlxcbjwvdHI+XFxuPHRyPlxcbjx0ZD5saW1pdHM8L3RkPlxcbjx0ZD7pobXpnaLmnaHmlbA8L3RkPlxcbjx0ZD48Y29kZT5BcnJheSZsdDtOdW1iZXImZ3Q7PC9jb2RlPjwvdGQ+XFxuPHRkPjxjb2RlPlsxMCwgMjAsIDUwXTwvY29kZT48L3RkPlxcbjwvdHI+XFxuPC90Ym9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvZGl2PjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT48aDIgaWQ9J2hlYWRlci1QYWdpbmF0aW9uJz5QYWdpbmF0aW9uPC9oMj48ZGl2IGNsYXNzPVxcXCJrLXRhYmxlLXdyYXBwZXIgay1ib3JkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJrLXRhYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcbjx0aD7mlrnms5XlkI08L3RoPlxcbjx0aD7or7TmmI48L3RoPlxcbjx0aD7lj4LmlbA8L3RoPlxcbjx0aD7ov5Tlm57lgLw8L3RoPlxcbjwvdHI+XFxuPC90aGVhZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+PHRyPlxcbjx0ZD5jaGFuZ2VQYWdlPC90ZD5cXG48dGQ+5YiH5o2i6aG156CBPC90ZD5cXG48dGQ+6KaB5YiH5o2i5Yiw55qE6aG156CBPC90ZD5cXG48dGQ+PGNvZGU+dW5kZWZpbmVkPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPnByZXY8L3RkPlxcbjx0ZD7kuIrkuIDpobU8L3RkPlxcbjx0ZD4tPC90ZD5cXG48dGQ+PGNvZGU+dW5kZWZpbmVkPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48dHI+XFxuPHRkPm5leHQ8L3RkPlxcbjx0ZD7kuIvkuIDpobU8L3RkPlxcbjx0ZD4tPC90ZD5cXG48dGQ+PGNvZGU+dW5kZWZpbmVkPC9jb2RlPjwvdGQ+XFxuPC90cj5cXG48L3Rib2R5PlxcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjozMyxcInNpZGVCYXJzXCI6e1wi57uE5Lu2XCI6W3tcInRpdGxlXCI6XCLpnaLljIXlsZFcIixcInBhdGhcIjpcImNvbXBvbmVudHMvYnJlYWRjcnVtYi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfSx7XCJ0aXRsZVwiOlwi5oyJ6ZKuXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL2J1dHRvbi9pbmRleC5tZFwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIuWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBNyc+5bGe5oCnPC9oMT5cIixcInRleHRcIjpcIuWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJ1dHRvblwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbic+QnV0dG9uPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvblwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIkJ1dHRvbkdyb3VwXCIsXCJwYXRoXCI6XCIjaGVhZGVyLUJ1dHRvbkdyb3VwXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1CdXR0b25Hcm91cCc+QnV0dG9uR3JvdXA8L2gyPlwiLFwidGV4dFwiOlwiQnV0dG9uR3JvdXBcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaWueazlVwiLFwicGF0aFwiOlwiI2hlYWRlci0lRTYlOTYlQjklRTYlQjMlOTVcIixcImxldmVsXCI6MSxcImNvbnRlbnRcIjpcIjxoMSBpZD0naGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NSc+5pa55rOVPC9oMT5cIixcInRleHRcIjpcIuaWueazlVwiLFwiY2hpbGRyZW5cIjpbe1widGl0bGVcIjpcIkJ1dHRvblwiLFwicGF0aFwiOlwiI2hlYWRlci1CdXR0b25cIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLUJ1dHRvbic+QnV0dG9uPC9oMj5cIixcInRleHRcIjpcIkJ1dHRvblwiLFwiY2hpbGRyZW5cIjpbXX1dfV19LHtcInRpdGxlXCI6XCLlpI3pgInmoYZcIixcInBhdGhcIjpcImNvbXBvbmVudHMvY2hlY2tib3gvaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W119XX0se1widGl0bGVcIjpcIuaXpeacn+mAieaLqVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLlvLnnqpdcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZGlhbG9nL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5omp5bGV54K5XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU4OSVBOSVFNSVCMSU5NSVFNyU4MiVCOVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTg5JUE5JUU1JUIxJTk1JUU3JTgyJUI5Jz7mianlsZXngrk8L2gxPlwiLFwidGV4dFwiOlwi5omp5bGV54K5XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gxPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfV19LHtcInRpdGxlXCI6XCLkuIvmi4noj5zljZVcIixcInBhdGhcIjpcImNvbXBvbmVudHMvZHJvcGRvd24vaW5kZXgubWRcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCLlsZ7mgKdcIixcInBhdGhcIjpcIiNoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3XCIsXCJsZXZlbFwiOjEsXCJjb250ZW50XCI6XCI8aDEgaWQ9J2hlYWRlci0lRTUlQjElOUUlRTYlODAlQTcnPuWxnuaApzwvaDE+XCIsXCJ0ZXh0XCI6XCLlsZ7mgKdcIixcImNoaWxkcmVuXCI6W3tcInRpdGxlXCI6XCJEcm9wZG93blwiLFwicGF0aFwiOlwiI2hlYWRlci1Ecm9wZG93blwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd24nPkRyb3Bkb3duPC9oMj5cIixcInRleHRcIjpcIkRyb3Bkb3duXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiRHJvcGRvd25JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd25JdGVtJz5Ecm9wZG93bkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25JdGVtXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5LqL5Lu2XCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNCVCQSU4QiVFNCVCQiVCNlwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItJUU0JUJBJThCJUU0JUJCJUI2Jz7kuovku7Y8L2gyPlwiLFwidGV4dFwiOlwi5LqL5Lu2XCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwiRHJvcGRvd25JdGVtXCIsXCJwYXRoXCI6XCIjaGVhZGVyLURyb3Bkb3duSXRlbVwiLFwibGV2ZWxcIjoyLFwiY29udGVudFwiOlwiPGgyIGlkPSdoZWFkZXItRHJvcGRvd25JdGVtJz5Ecm9wZG93bkl0ZW08L2gyPlwiLFwidGV4dFwiOlwiRHJvcGRvd25JdGVtXCIsXCJjaGlsZHJlblwiOltdfV19XX0se1widGl0bGVcIjpcIuWIhumhtVwiLFwicGF0aFwiOlwiY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwi5bGe5oCnXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNSVCMSU5RSVFNiU4MCVBN1wiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU1JUIxJTlFJUU2JTgwJUE3Jz7lsZ7mgKc8L2gxPlwiLFwidGV4dFwiOlwi5bGe5oCnXCIsXCJjaGlsZHJlblwiOltdfSx7XCJ0aXRsZVwiOlwi5pa55rOVXCIsXCJwYXRoXCI6XCIjaGVhZGVyLSVFNiU5NiVCOSVFNiVCMyU5NVwiLFwibGV2ZWxcIjoxLFwiY29udGVudFwiOlwiPGgxIGlkPSdoZWFkZXItJUU2JTk2JUI5JUU2JUIzJTk1Jz7mlrnms5U8L2gxPlwiLFwidGV4dFwiOlwi5pa55rOVXCIsXCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiUGFnaW5hdGlvblwiLFwicGF0aFwiOlwiI2hlYWRlci1QYWdpbmF0aW9uXCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1QYWdpbmF0aW9uJz5QYWdpbmF0aW9uPC9oMj5cIixcInRleHRcIjpcIlBhZ2luYXRpb25cIixcImNoaWxkcmVuXCI6W119XX1dfSx7XCJ0aXRsZVwiOlwi5Y2V6YCJ5qGGXCIsXCJwYXRoXCI6XCJjb21wb25lbnRzL3JhZGlvL2luZGV4Lm1kXCIsXCJjaGlsZHJlblwiOlt7XCJjaGlsZHJlblwiOlt7XCJ0aXRsZVwiOlwiUmFkaW8g5Y2V6YCJ5qGGXCIsXCJwYXRoXCI6XCIjaGVhZGVyLVJhZGlvJTIwJUU1JThEJTk1JUU5JTgwJTg5JUU2JUExJTg2XCIsXCJsZXZlbFwiOjIsXCJjb250ZW50XCI6XCI8aDIgaWQ9J2hlYWRlci1SYWRpbyUyMCVFNSU4RCU5NSVFOSU4MCU4OSVFNiVBMSU4Nic+UmFkaW8g5Y2V6YCJ5qGGPC9oMj5cIixcInRleHRcIjpcIlJhZGlvIOWNlemAieahhlwiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuekuuS+i1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTclQTQlQkElRTQlQkUlOEJcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLSVFNyVBNCVCQSVFNCVCRSU4Qic+56S65L6LPC9oMj5cIixcInRleHRcIjpcIuekuuS+i1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuW4uOinhOWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTUlQjglQjglRTglQTclODQlRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLSVFNSVCOCVCOCVFOCVBNyU4NCVFNSVCMSU5RSVFNiU4MCVBNyc+5bi46KeE5bGe5oCnPC9oMj5cIixcInRleHRcIjpcIuW4uOinhOWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX0se1widGl0bGVcIjpcIuiHquWumuS5ieWxnuaAp1wiLFwicGF0aFwiOlwiI2hlYWRlci0lRTglODclQUElRTUlQUUlOUElRTQlQjklODklRTUlQjElOUUlRTYlODAlQTdcIixcImxldmVsXCI6MixcImNvbnRlbnRcIjpcIjxoMiBpZD0naGVhZGVyLSVFOCU4NyVBQSVFNSVBRSU5QSVFNCVCOSU4OSVFNSVCMSU5RSVFNiU4MCVBNyc+6Ieq5a6a5LmJ5bGe5oCnPC9oMj5cIixcInRleHRcIjpcIuiHquWumuS5ieWxnuaAp1wiLFwiY2hpbGRyZW5cIjpbXX1dfV19XX0sXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSA2IDM5Il0sInNvdXJjZVJvb3QiOiIifQ==