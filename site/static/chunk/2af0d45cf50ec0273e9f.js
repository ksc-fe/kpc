webpackJsonp([2],{

/***/ "./components/checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/checkbox/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/checkbox/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isArray = _intact2.default.Vdt.utils.isArray;
var Checkbox = (_temp = _class = function (_Intact) {
    _inherits(Checkbox, _Intact);

    function Checkbox() {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    _createClass(Checkbox, [{
        key: 'defaults',
        value: function defaults() {
            return {
                disabled: false,
                value: false,
                trueValue: true,
                falseValue: false
            };
        }
    }, {
        key: '_destroy',


        // set value to falseValue when destroy
        value: function _destroy() {
            var value = this.get('value');
            var trueValue = this.get('trueValue');
            if (this.isChecked()) {
                if (isArray(value)) {
                    value = value.slice(0);
                    var index = value.indexOf(trueValue);
                    value.splice(index, 1);
                    this.set('value', value);
                } else {
                    this.set('value', this.get('falseValue'));
                }
            }
        }
    }, {
        key: 'isChecked',
        value: function isChecked() {
            var value = this.get('value');
            var trueValue = this.get('trueValue');
            return isArray(value) ? value.indexOf(trueValue) > -1 : value === trueValue;
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Checkbox;
}(_intact2.default), _class.propTypes = {
    disabled: Boolean }, _temp);
exports.default = Checkbox;
exports.Checkbox = Checkbox;

/***/ }),

/***/ "./components/checkbox/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/checkbox/index.styl");
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

/***/ "./components/checkbox/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        className = _self$get.className,
        disabled = _self$get.disabled,
        falseValue = _self$get.falseValue,
        children = _self$get.children,
        value = _self$get.value,
        trueValue = _self$get.trueValue,
        style = _self$get.style,
        ref = _self$get.ref,
        key = _self$get.key,
        rest = _objectWithoutProperties(_self$get, ['className', 'disabled', 'falseValue', 'children', 'value', 'trueValue', 'style', 'ref', 'key']);

    var classNameObj = _defineProperty({
        'k-checkbox': true,
        'k-disabled': disabled,
        'k-checked': self.isChecked()
    }, className, className);

    return h('label', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('span', null, h('input', _extends({ 'type': 'checkbox', 'disabled': function () {
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
        }.call(this) }, function () {
        try {
            return [rest][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), { checked: _detectCheckboxChecked(self, 'value', function () {
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
        } })), 'k-wrapper'), function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('span', null, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-text') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/datepicker/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Datepicker = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/datepicker/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/datepicker/index.styl");

var _utils = __webpack_require__("./components/utils.js");

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

var Datepicker = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Datepicker, _Intact);

    function Datepicker() {
        _classCallCheck(this, Datepicker);

        return _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).apply(this, arguments));
    }

    _createClass(Datepicker, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: undefined,
                clearable: false,
                maxDate: undefined,
                minDate: undefined,
                placeholder: "请选择日期",
                disabled: false,
                disabledDate: function disabledDate(date) {
                    return false;
                },

                multiple: false,
                size: 'default',
                type: 'date', // date | datetime

                _showDate: undefined,
                _now: new Date(),
                _isShowYearPicker: false,
                _isSelectTime: false
            };
        }
    }, {
        key: 'select',
        value: function select(value, e) {
            value = this.getDateString(value);
            var type = this.get('type');
            if (!this.get('multiple')) {
                this.set('value', value);
                if (type !== 'datetime') {
                    this.refs.calendar.hide();
                } else {
                    e._rawEvent._dropdown = true;
                    this.set('_isSelectTime', true);
                }
            } else {
                var values = this.get('value');
                if (!Array.isArray(values)) {
                    values = [];
                } else {
                    values = values.slice(0);
                }
                var index = values.indexOf(value);
                if (~index) {
                    values.splice(index, 1);
                } else {
                    values.push(value);
                }
                this.set('value', values);
            }
        }
    }, {
        key: 'getDateString',
        value: function getDateString(date) {
            var _date = [date.getFullYear(), (0, _utils.strPad)(date.getMonth() + 1, 2), (0, _utils.strPad)(date.getDate(), 2)].join('-');
            if (this.get('type') !== 'datetime') {
                return _date;
            }
            var _time = [(0, _utils.strPad)(date.getHours(), 2), (0, _utils.strPad)(date.getMinutes(), 2), (0, _utils.strPad)(date.getSeconds(), 2)].join(':');
            return _date + ' ' + _time;
        }
    }, {
        key: 'isEqual',
        value: function isEqual(a, b) {
            if (a && b) {
                return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
            }
            return false;
        }
    }, {
        key: 'isLT',
        value: function isLT(a, b) {
            if (a && b) {
                var aYear = a.getFullYear();
                var bYear = b.getFullYear();
                if (aYear < bYear) {
                    return true;
                } else if (aYear > bYear) {
                    return false;
                }

                var aMonth = a.getMonth();
                var bMonth = b.getMonth();
                if (aMonth < bMonth) {
                    return true;
                } else if (aMonth > bMonth) {
                    return false;
                }

                var aDay = a.getDate();
                var bDay = b.getDate();
                if (aDay < bDay) {
                    return true;
                } else if (aDay > bDay) {
                    return false;
                }
            }

            return false;
        }
    }, {
        key: 'isGT',
        value: function isGT(a, b) {
            return this.isLT(b, a);
        }
    }, {
        key: 'onClear',
        value: function onClear(e) {
            e.stopPropagation();
            this.set('value', undefined);
        }
    }, {
        key: 'prevMonth',
        value: function prevMonth() {
            this.setRelativeMonth(-1);
        }
    }, {
        key: 'nextMonth',
        value: function nextMonth() {
            this.setRelativeMonth(1);
        }
    }, {
        key: 'prevYear',
        value: function prevYear() {
            this.setRelativeYear(-1);
        }
    }, {
        key: 'nextYear',
        value: function nextYear() {
            this.setRelativeYear(1);
        }
    }, {
        key: 'setRelativeMonth',
        value: function setRelativeMonth(month) {
            var date = this.getShowDate();
            date.setMonth(date.getMonth() + month);
            this.set('_showDate', date);
        }
    }, {
        key: 'setRelativeYear',
        value: function setRelativeYear(year) {
            var date = this.getShowDate();
            date.setFullYear(date.getFullYear() + year);
            this.set('_showDate', date);
        }
    }, {
        key: 'setMonth',
        value: function setMonth(month) {
            var date = this.getShowDate();
            date.setMonth(month);
            this.set('_showDate', date);
        }
    }, {
        key: 'setYear',
        value: function setYear(year) {
            var date = this.getShowDate();
            date.setFullYear(year);
            this.set('_showDate', date);
        }
    }, {
        key: 'onChangeYear',
        value: function onChangeYear(c, value) {
            this.setYear(value);
        }
    }, {
        key: 'onChangeMonth',
        value: function onChangeMonth(c, value) {
            this.setMonth(value);
        }
    }, {
        key: 'getShowDate',
        value: function getShowDate() {
            var _get = this.get(),
                _showDate = _get._showDate,
                value = _get.value,
                _now = _get._now,
                multiple = _get.multiple;

            var values = multiple ? value || [] : [value];
            return new Date(_showDate || values[values.length - 1] || _now);
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            this.set({
                '_showDate': undefined,
                '_isShowYearPicker': false,
                '_isSelectTime': false
            });
        }
    }, {
        key: 'onBeforeShow',
        value: function onBeforeShow() {
            this.set('_now', new Date());
        }
    }, {
        key: 'showYearPicker',
        value: function showYearPicker() {
            this.set('_isShowYearPicker', !this.get('_isShowYearPicker'));
        }
    }, {
        key: 'onChangeTime',
        value: function onChangeTime(type, c, v) {
            var _get2 = this.get(),
                value = _get2.value,
                _now = _get2._now;

            var valueDate = new Date(value || _now);
            valueDate['set' + type](v);
            this.set('value', this.getDateString(valueDate));
        }
    }, {
        key: 'confirm',
        value: function confirm() {
            this.refs.calendar.hide();
        }
    }, {
        key: 'cancel',
        value: function cancel(e) {
            e._rawEvent._dropdown = true;
            this.set('_isSelectTime', false);
        }
    }]);

    return Datepicker;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    clearable: Boolean,
    disabled: Boolean,
    multiple: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Datepicker;
exports.Datepicker = Datepicker;

/***/ }),

/***/ "./components/datepicker/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/datepicker/index.styl");
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

/***/ "./components/datepicker/index.vdt":
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
        value = _self$get.value,
        clearable = _self$get.clearable,
        className = _self$get.className,
        style = _self$get.style,
        name = _self$get.name,
        _showDate = _self$get._showDate,
        _now = _self$get._now,
        maxDate = _self$get.maxDate,
        minDate = _self$get.minDate,
        placeholder = _self$get.placeholder,
        disabled = _self$get.disabled,
        disabledDate = _self$get.disabledDate,
        multiple = _self$get.multiple,
        size = _self$get.size,
        _isShowYearPicker = _self$get._isShowYearPicker,
        _isSelectTime = _self$get._isSelectTime,
        type = _self$get.type;

    var classNameObj = _defineProperty({
        'k-datepicker': true,
        'k-disabled': disabled
    }, className, className);

    var values = multiple ? value || [] : [value];

    var valueDate = new Date(values[values.length - 1] || _now);
    var showDate = new Date(_showDate || valueDate);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, h(_tooltip2.default, { 'className': 'k-datepicker-content', 'position': function () {
            try {
                return [{ my: 'left top', at: 'left bottom' }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'trigger': 'click', 'showArrow': function () {
            try {
                return [false][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'transition': 'dropdown', 'ev-hide': function () {
            try {
                return [self.onHide][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-beforeShow': function () {
            try {
                return [self.onBeforeShow][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': h(_input2.default, { 'placeholder': function () {
                try {
                    return [placeholder][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'readonly': function () {
                try {
                    return [true][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'value': function () {
                try {
                    return [values.join(', ')][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'clearable': function () {
                try {
                    return [clearable][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'ev-clear': function () {
                try {
                    return [self.onClear][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'name': function () {
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
            }.call(this), 'size': function () {
                try {
                    return [size][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': null, '_context': this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.suffix = function (parent) {
                    return h('i', null, null, 'ion-ios-calendar-outline');
                }) && (__blocks.suffix = function (parent) {
                    var self = this;
                    return blocks.suffix ? blocks.suffix.call(this, function () {
                        return _blocks.suffix.call(self, parent);
                    }) : _blocks.suffix.call(this, parent);
                }) && __blocks;
            }.call(this, {}) }), '_context': this, '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks.content = function (parent) {
                return function () {
                    try {
                        return [!_isSelectTime][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, [h('div', null, [h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-prev', 'ev-click': function () {
                        try {
                            return [self.prevYear][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': [h('i', null, null, 'k-icon ion-ios-arrow-left'), h('i', null, null, 'k-icon ion-ios-arrow-left')], '_context': this }), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-prev', 'ev-click': function () {
                        try {
                            return [self.prevMonth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-left'), '_context': this }), h('span', { 'ev-click': function () {
                        try {
                            return [self.showYearPicker][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, [h('span', null, [function () {
                    try {
                        return [showDate.getFullYear()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '年'], 'k-text'), h('span', null, [function () {
                    try {
                        return [showDate.getMonth() + 1][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '月'], 'k-text')], 'k-text-wrapper'), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-next', 'ev-click': function () {
                        try {
                            return [self.nextYear][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': [h('i', null, null, 'k-icon ion-ios-arrow-right'), h('i', null, null, 'k-icon ion-ios-arrow-right')], '_context': this }), h(_button2.default, { 'icon': function () {
                        try {
                            return [true][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'none', 'size': 'small', 'className': 'k-next', 'ev-click': function () {
                        try {
                            return [self.nextMonth][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-arrow-right'), '_context': this })], 'k-month c-clearfix'), function () {
                    try {
                        return [!_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, _Vdt.utils.map(function () {
                    try {
                        return [['日', '一', '二', '三', '四', '五', '六']][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), function (value, key) {
                    return h('div', null, function () {
                        try {
                            return [value][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'k-weekday');
                }, this), 'k-weekdays') : undefined, function () {
                    try {
                        return [!_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h('div', null, ['\n                    ', function () {
                    var _this = this;

                    try {
                        return [function () {
                            var ret = [];
                            var start = new Date(showDate);
                            var month = start.getMonth();
                            start.setDate(1);
                            var startWeekday = start.getDay();
                            start.setDate(1 - startWeekday);

                            var _loop = function _loop(i) {
                                var _date = start.getDate();
                                var _month = start.getMonth();
                                var disabled = self.isGT(start, new Date(maxDate)) || self.isLT(start, new Date(minDate)) || disabledDate.call(self, self.getDateString(start));
                                ret.push(h('div', { 'ev-click': function () {
                                        try {
                                            return [!disabled && self.select.bind(self, new Date(start))][0];
                                        } catch (e) {
                                            _e(e);
                                        }
                                    }.call(_this) }, function () {
                                    try {
                                        return [_date][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this), _className(function () {
                                    try {
                                        return [{
                                            "k-day": true,
                                            "k-out": _month !== month,
                                            "k-active": values.find(function (value) {
                                                return self.isEqual(new Date(value), start);
                                            }),
                                            "k-today": self.isEqual(_now, start),
                                            "k-disabled": disabled
                                        }][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this))));
                                start.setDate(start.getDate() + 1);
                            };

                            for (var i = 0; i < 42; i++) {
                                _loop(i);
                            }
                            var result = [];

                            var _loop2 = function _loop2(i) {
                                result.push(h('div', null, function () {
                                    try {
                                        return [ret.slice(7 * i, 7 * (i + 1))][0];
                                    } catch (e) {
                                        _e(e);
                                    }
                                }.call(_this)));
                            };

                            for (var i = 0; i < 6; i++) {
                                _loop2(i);
                            }
                            return result;
                        }()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '\n                '], 'k-calendar') : undefined, function () {
                    try {
                        return [_isShowYearPicker][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this) ? h(_grid.Row, { 'className': 'k-year-picker', 'children': [h(_grid.Col, { 'span': '12', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [function (value) {
                                        return (0, _utils.range)(value - 5, value + 5);
                                    }][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [showDate.getFullYear()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeYear][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this }), '_context': this }), h(_grid.Col, { 'span': '12', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [(0, _utils.range)(0, 11).map(function (i) {
                                        return { label: i + 1 + '\u6708', value: i };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [showDate.getMonth()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeMonth][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this }), '_context': this })], '_context': this }) : undefined]) : h('div', null, [h('div', null, ['\n                    ', hc('<Button type=\"none\" size=\"small\" class=\"k-prev\"\n                        ev-click={{ self.cancel.bind(self) }}\n                    >取消</Button>'), h('span', { 'ev-click': function () {
                        try {
                            return [self.cancel][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this) }, [h('span', null, [function () {
                    try {
                        return [showDate.getFullYear()][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '年'], 'k-text'), h('span', null, [function () {
                    try {
                        return [showDate.getMonth() + 1][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), '月'], 'k-text')], 'k-text-wrapper'), '\n                    ', hc('<Button type=\"none\" size=\"small\" class=\"k-next\"\n                        ev-click={{ self.confirm.bind(self) }}\n                    >确认</Button>')], 'k-month c-clearfix'), h(_grid.Row, { 'children': [h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [(0, _utils.range)(0, 23).map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getHours()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Hours')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this, '_blocks': function (blocks) {
                                var _blocks = {},
                                    __blocks = extend({}, blocks);
                                return (_blocks.append = function (parent) {
                                    return ':';
                                }) && (__blocks.append = function (parent) {
                                    var self = this;
                                    return blocks.append ? blocks.append.call(this, function () {
                                        return _blocks.append.call(self, parent);
                                    }) : _blocks.append.call(this, parent);
                                }) && __blocks;
                            }.call(this, {}) }), '_context': this }), h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [(0, _utils.range)(0, 59).map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getMinutes()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Minutes')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this, '_blocks': function (blocks) {
                                var _blocks = {},
                                    __blocks = extend({}, blocks);
                                return (_blocks.append = function (parent) {
                                    return ':';
                                }) && (__blocks.append = function (parent) {
                                    var self = this;
                                    return blocks.append ? blocks.append.call(this, function () {
                                        return _blocks.append.call(self, parent);
                                    }) : _blocks.append.call(this, parent);
                                }) && __blocks;
                            }.call(this, {}) }), '_context': this }), h(_grid.Col, { 'span': '8', 'children': h(_scrollSelect2.default, { 'data': function () {
                                try {
                                    return [(0, _utils.range)(0, 59).map(function (v) {
                                        return { label: (0, _utils.strPad)(v, 2), value: v };
                                    })][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'value': function () {
                                try {
                                    return [valueDate.getSeconds()][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'ev-$change:value': function () {
                                try {
                                    return [self.onChangeTime.bind(self, 'Seconds')][0];
                                } catch (e) {
                                    _e(e);
                                }
                            }.call(this), 'children': null, '_context': this }), '_context': this })], '_context': this })], 'k-time-picker', 'time');
            }) && (__blocks.content = function (parent) {
                var self = this;
                return blocks.content ? blocks.content.call(this, function () {
                    return _blocks.content.call(self, parent);
                }) : _blocks.content.call(this, parent);
            }) && __blocks;
        }.call(this, {}) }, null, null, null, function (i) {
        widgets['calendar'] = i;
    }), _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _input = __webpack_require__("./components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _tooltip = __webpack_require__("./components/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _scrollSelect = __webpack_require__("./components/scrollSelect/index.js");

var _scrollSelect2 = _interopRequireDefault(_scrollSelect);

var _grid = __webpack_require__("./components/grid/index.js");

var _utils = __webpack_require__("./components/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/dialog/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/dialog/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/dialog/index.styl");

var _position = __webpack_require__("./components/moveWrapper/position.js");

var _position2 = _interopRequireDefault(_position);

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

var Dialog = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Dialog, _Intact);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
    }

    _createClass(Dialog, [{
        key: 'defaults',
        value: function defaults() {
            return {
                title: '提示',
                value: false,
                size: 'default', // default | small
                loading: false,
                okText: '确认',
                cancelText: '取消',

                _dragging: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.on('$changed:value', function (c, isShow) {
                if (isShow) _this2._center();
            });
        }
    }, {
        key: '_create',
        value: function _create() {
            // use as component
            if (this.parentVNode) {
                this._useAsComponent = true;
            }
        }
    }, {
        key: '_mount',
        value: function _mount(lastVNode, nextVNode) {
            // for debug
            window.__dialog = this;

            this._center();

            document.addEventListener('keydown', this._escClose);
        }
    }, {
        key: 'showLoading',
        value: function showLoading() {
            this.set('loading', true);
        }
    }, {
        key: 'hideLoading',
        value: function hideLoading() {
            this.set('loading', false);
        }
    }, {
        key: 'close',
        value: function close() {
            this.set('value', false);
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.close();
            this.trigger('cancel', this);
        }
    }, {
        key: 'ok',
        value: function ok() {
            this.close();
            this.trigger('ok', this);
        }
    }, {
        key: 'show',
        value: function show() {
            var _this3 = this;

            if (this.get('value')) return;
            // use as component
            if (this._useAsComponent) {
                return this.set('value', true);
            }
            // use as instance
            if (this.rendered) {
                this.set('value', true);
            } else {
                var show = function show() {
                    _this3.init();
                    _this3.mount();
                    _this3.set('value', true);
                };
                if (this.inited) {
                    show();
                } else {
                    this.on('$inited', show);
                }
            }
        }
    }, {
        key: '_escClose',
        value: function _escClose(e) {
            // Esc
            if (e.keyCode === 27) this.close();
        }
    }, {
        key: '_leaveEnd',
        value: function _leaveEnd() {
            // use as instance or use as component but it has be destroyed
            // then remove the element
            if (!this._useAsComponent || this._useAsComponent && this.destroyed) {
                this.vdt.vNode.children._$destroy();
            }
        }
    }, {
        key: '_center',
        value: function _center() {
            if (!this.mounted || !this.get('value')) return;
            // move to center
            (0, _position2.default)(this.dialog);
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            // left key
            if (e.which !== 1) return;

            this.set('_dragging', true);
            var dialog = this.dialog;
            this._x = dialog.offsetLeft - e.clientX;
            this._y = dialog.offsetTop - e.clientY;
            this._width = dialog.offsetWidth;
            this._height = dialog.offsetHeight;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            // TODO; drag out of screen
            if (this.get('_dragging')) {
                var style = this.dialog.style;
                var body = document.body;
                var left = Math.min(Math.max(this._x + e.clientX, 0), Math.max(body.scrollWidth - this._width, 0));
                var top = Math.min(Math.max(this._y + e.clientY, 0), Math.max(body.scrollHeight - this._height, 0));
                style.left = left + 'px';
                style.top = top + 'px';
            }
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd() {
            if (this.get('_dragging')) {
                this.set('_dragging', false);
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            document.removeEventListener('keydown', this._escClose);
            if (this.get('value')) {
                this.close();
            } else {
                var _vdt$vNode$children;

                (_vdt$vNode$children = this.vdt.vNode.children)._$destroy.apply(_vdt$vNode$children, arguments);
            }
            this._dragEnd();
        }
    }]);

    return Dialog;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    value: Boolean,
    loading: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Dialog;
exports.Dialog = Dialog;

/***/ }),

/***/ "./components/dialog/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dialog/index.styl");
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

/***/ "./components/dialog/index.vdt":
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

                return h(_moveWrapper2.default, { 'autoDestroy': function () {
                                                try {
                                                                return [false][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this), 'children': h('div', null, [function () {
                                                try {
                                                                return [self.get('value')][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this) ? h(Animate, { 'className': 'k-overlay', 'children': null, '_context': this }) : undefined, function () {
                                                try {
                                                                return [self.get('value')][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this) ? h(Animate, { 'className': _className(function () {
                                                                try {
                                                                                return [_defineProperty({
                                                                                                "k-dialog": true,
                                                                                                'k-dragging': self.get('_dragging'),
                                                                                                "k-small": self.get('size') === 'small'
                                                                                }, self.get('className'), self.get('className'))][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this)), 'ref': function () {
                                                                try {
                                                                                return [function (i) {
                                                                                                return self.dialog = i ? i.element : null;
                                                                                }][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this), 'ev-a:leaveEnd': function () {
                                                                try {
                                                                                return [self._leaveEnd][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this), 'children': [h('div', { 'ev-mousedown': function () {
                                                                                try {
                                                                                                return [self._dragStart][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this) }, [(_blocks.header = function (parent) {
                                                                return h('span', null, function () {
                                                                                try {
                                                                                                return [self.get('title')][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'k-title');
                                                }) && (__blocks.header = function (parent) {
                                                                var self = this;
                                                                return blocks.header ? blocks.header.call(this, function () {
                                                                                return _blocks.header.call(self, parent);
                                                                }) : _blocks.header.call(this, parent);
                                                }) && __blocks.header.call(this), h(_button2.default, { 'type': 'none', 'icon': function () {
                                                                                try {
                                                                                                return [true][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'title': '关闭', 'className': 'k-close', 'ev-click': function () {
                                                                                try {
                                                                                                return [self.close][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-close-empty'), '_context': this })], 'k-header'), h('div', null, (_blocks.body = function (parent) {
                                                                return function () {
                                                                                try {
                                                                                                return [self.get('children')][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this);
                                                }) && (__blocks.body = function (parent) {
                                                                var self = this;
                                                                return blocks.body ? blocks.body.call(this, function () {
                                                                                return _blocks.body.call(self, parent);
                                                                }) : _blocks.body.call(this, parent);
                                                }) && __blocks.body.call(this), 'k-body'), h('div', null, (_blocks.footer = function (parent) {
                                                                return [h(_button2.default, { 'ev-click': function () {
                                                                                                try {
                                                                                                                return [self.cancel][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'children': function () {
                                                                                                try {
                                                                                                                return [self.get('cancelText')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), '_context': this }), h(_button2.default, { 'type': 'primary', 'ev-click': function () {
                                                                                                try {
                                                                                                                return [self.ok][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'loading': function () {
                                                                                                try {
                                                                                                                return [self.get('loading')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'children': function () {
                                                                                                try {
                                                                                                                return [self.get('okText')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), '_context': this })];
                                                }) && (__blocks.footer = function (parent) {
                                                                var self = this;
                                                                return blocks.footer ? blocks.footer.call(this, function () {
                                                                                return _blocks.footer.call(self, parent);
                                                                }) : _blocks.footer.call(this, parent);
                                                }) && __blocks.footer.call(this), 'k-footer')], '_context': this }) : undefined], 'k-dialog-wrapper', null, function () {
                                                try {
                                                                return [function (dom) {
                                                                                return self.$element = dom;
                                                                }][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this)), '_context': this });
};

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _utils = __webpack_require__("./components/utils.js");

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var h = _intact2.default.Vdt.miss.h;

var Dropdown = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Dropdown, _Intact);

    function Dropdown() {
        _classCallCheck(this, Dropdown);

        return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }

    _createClass(Dropdown, [{
        key: 'defaults',
        value: function defaults() {
            return {
                trigger: 'hover',
                disabled: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this._saveOriginalEvents();
            this.on('$change:children', function () {
                _this2._saveOriginalEvents();
            });
        }
    }, {
        key: '_saveOriginalEvents',
        value: function _saveOriginalEvents() {
            var _get = this.get(),
                children = _get.children,
                trigger = _get.trigger,
                className = _get.className,
                rest = _objectWithoutProperties(_get, ['children', 'trigger', 'className']);

            if (Array.isArray(children)) {
                children = children[0];
            }
            if ((0, _utils.isTextVNode)(children)) {
                children = h('span', rest, children, className);
            }

            // save the original event
            var originProps = children.props;
            if (!children._hasSaved) {
                children._evClick = originProps['ev-click'];
                children._evMouseEnter = originProps['ev-mouseenter'];
                children._evMouseLeave = originProps['ev-mouseleave'];
                children._hasSaved = true;
            }
            var props = {};
            if (trigger === 'click') {
                props['ev-click'] = this.show.bind(this, children._evClick);
            } else {
                props['ev-mouseenter'] = this.show.bind(this, children._evMouseEnter);
                props['ev-mouseleave'] = this.hide.bind(this, children._evMouseLeave);
            }
            children.props = _extends({}, children.props, props);
            this.set('children', children, { silent: true });
        }
    }, {
        key: '_mount',
        value: function _mount() {
            this.get('menu').children.dropdown = this;
        }
    }, {
        key: 'show',
        value: function show(fn, e, isFocus) {
            if (typeof fn === 'function') fn(e);

            if (this.get('disabled')) return;

            var menu = this.get('menu').children;
            menu.show();

            if (isFocus) {
                menu.focusItemByIndex(0);
            }
        }
    }, {
        key: 'hide',
        value: function hide(fn, e, immediately) {
            if (typeof fn === 'function') fn(e);

            if (this.get('disabled')) return;

            var menu = this.get('menu').children;
            menu.hide(immediately);
        }
    }], [{
        key: 'template',
        value: function template(data) {
            return data.get('children');
        }
    }]);

    return Dropdown;
}(_intact2.default), (_applyDecoratedDescriptor(_class, 'template', [_dec], Object.getOwnPropertyDescriptor(_class, 'template'), _class)), _class));
exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropdownItem = exports.DropdownMenu = exports.Dropdown = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _item = __webpack_require__("./components/dropdown/item.js");

var _item2 = _interopRequireDefault(_item);

__webpack_require__("./components/dropdown/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var h = _intact2.default.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        position = props.position,
        key = props.key,
        ref = props.ref,
        rest = _objectWithoutProperties(props, ['children', 'position', 'key', 'ref']);

    var element = children[0];
    var menu = children[1];

    menu.props = _extends({
        position: position,
        key: key == null ? key : key + '.menu'
    }, rest, menu.props);

    return !inVue ? [h(_dropdown2.default, _extends({
        key: key == null ? key : key + '.trigger',
        ref: ref,
        children: element,
        menu: menu
    }, rest)), menu] : h(VueWrapper, {
        children: [h(_dropdown2.default, _extends({
            key: key == null ? key : key + '.trigger',
            ref: ref,
            children: [element],
            menu: menu
        }, rest)), menu]
    });
}

// Vue only support return one element from functional component,
// so we wrap them. This will lead to damage the dom struction,
// because we must wrap them with a div

var VueWrapper = function (_Intact) {
    _inherits(VueWrapper, _Intact);

    function VueWrapper() {
        _classCallCheck(this, VueWrapper);

        return _possibleConstructorReturn(this, (VueWrapper.__proto__ || Object.getPrototypeOf(VueWrapper)).apply(this, arguments));
    }

    _createClass(VueWrapper, [{
        key: 'template',
        value: function template(data) {
            return h('div', null, data.get('children'), 'k-dropdown');
        }
    }]);

    return VueWrapper;
}(_intact2.default);

var _Wrapper = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Dropdown = _Wrapper;
exports.DropdownMenu = _menu2.default;
exports.DropdownItem = _item2.default;

/***/ }),

/***/ "./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dropdown/index.styl");
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

/***/ "./components/dropdown/item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _item = __webpack_require__("./components/dropdown/item.vdt");

var _item2 = _interopRequireDefault(_item);

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = __webpack_require__("./components/dropdown/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _utils = __webpack_require__("./components/utils.js");

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

var DropdownItem = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(DropdownItem, _Intact);

    function DropdownItem() {
        _classCallCheck(this, DropdownItem);

        return _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).apply(this, arguments));
    }

    _createClass(DropdownItem, [{
        key: 'defaults',
        value: function defaults() {
            return {
                disabled: false,
                hideOnSelect: true,

                _isFocus: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            // if selected hide all dropdown menu
            this.on('select', function () {
                if (_this2.get('hideOnSelect')) {
                    var ancestor = _this2._findAncestorDropdownMenu();
                    ancestor.hide(true);
                }
            });
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var parent = this.parent = this._findAncestorDropdownMenu(true);
            parent.items.push(this);
        }
    }, {
        key: '_onClick',
        value: function _onClick(e) {
            if (this.get('disabled')) return;

            this.trigger('click', e);

            // is not a sub dropdown trigger
            if (this.parentVNode.tag !== _dropdown2.default) {
                this.trigger('select', this, e);
            }
        }
    }, {
        key: '_onMouseEnter',
        value: function _onMouseEnter(e) {
            if (this.get('disabled')) return;

            this.trigger('mouseenter', e);

            this.parent.focusItem(this);
        }
    }, {
        key: '_onMouseLeave',
        value: function _onMouseLeave(e) {
            if (this.get('disabled')) return;

            this.trigger('mouseleave', e);
        }
    }, {
        key: 'select',
        value: function select() {
            // is not a sub dropdown trigger
            var dropdown = this._isSubMenu();
            if (!dropdown) {
                this.trigger('select', this);
            } else {
                dropdown.show();
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.set('_isFocus', true);
        }
    }, {
        key: 'unFocus',
        value: function unFocus() {
            this.set('_isFocus', false);

            var dropdown = this._isSubMenu();
            if (dropdown) {
                dropdown.hide(null, null, true);
            }
        }
    }, {
        key: 'showMenuAndFocus',
        value: function showMenuAndFocus() {
            var dropdown = this._isSubMenu();
            if (dropdown) {
                dropdown.show(null, null, true);
            }
        }
    }, {
        key: 'hideMenu',
        value: function hideMenu() {
            var dropdown = this._isSubMenu();
            if (dropdown) {
                dropdown.hide(null, null, true);
            }
        }
    }, {
        key: '_isSubMenu',
        value: function _isSubMenu() {
            if (this.parentVNode.tag === _dropdown2.default) {
                return this.parentVNode.children;
            }
        }
    }, {
        key: '_findAncestorDropdownMenu',
        value: function _findAncestorDropdownMenu(isFirst) {
            return (0, _utils.findParentComponent)(_menu2.default, this, isFirst);
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            var items = this.parent.items;
            items.splice(items.indexOf(this), 1);
        }
    }]);

    return DropdownItem;
}(_intact2.default), _class2.template = _item2.default, _class2.propTypes = {
    disabled: Boolean,
    hideOnSelect: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownItem;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/item.vdt":
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
    /* import {proxyEvent} from '../utils'; */

    var _self$get = self.get(),
        children = _self$get.children,
        disabled = _self$get.disabled,
        className = _self$get.className,
        _isFocus = _self$get._isFocus;

    var classNameObj = (_classNameObj = {
        'k-item': true,
        'k-disabled': disabled
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-hover', _isFocus), _classNameObj);

    return h('div', { 'ev-click': function () {
            try {
                return [self._onClick][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseenter': function () {
            try {
                return [self._onMouseEnter][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mouseleave': function () {
            try {
                return [self._onMouseLeave][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
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

/***/ "./components/dropdown/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _menu = __webpack_require__("./components/dropdown/menu.vdt");

var _menu2 = _interopRequireDefault(_menu);

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _utils = __webpack_require__("./components/utils.js");

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

var DropdownMenu = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(DropdownMenu, _Intact);

    function DropdownMenu() {
        _classCallCheck(this, DropdownMenu);

        return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
    }

    _createClass(DropdownMenu, [{
        key: 'defaults',
        value: function defaults() {
            return {
                show: false,
                trigger: 'hover',
                position: {}
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.subDropdowns = [];
            this.items = [];
            this.focusIndex = -1;
            this.locked = false;

            this.on('$changed:show', function (c, value) {
                if (value) {
                    _this2.focusIndex = -1;
                    _this2._addDocumentEvents();
                    _this2.position();
                } else {
                    _this2._removeDocumentEvents();
                }
            });

            this._onDocumentClick = this._onDocumentClick.bind(this);
            this._onKeydown = this._onKeydown.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var parent = this._findParentDropdownMenu();
            if (parent) parent.subDropdowns.push(this);

            if (this.get('show')) {
                this._addDocumentEvents();
            }
        }
    }, {
        key: '_findParentDropdownMenu',
        value: function _findParentDropdownMenu() {
            return (0, _utils.findParentComponent)(DropdownMenu, this, true);
        }
    }, {
        key: 'show',
        value: function show() {
            clearTimeout(this.timer);
            this.set('show', true);
            var parent = this._findParentDropdownMenu();
            if (parent) {
                parent.show();
            }
        }
    }, {
        key: 'hide',
        value: function hide(immediately) {
            var _this3 = this;

            if (!immediately) {
                this.timer = setTimeout(function () {
                    _this3.set('show', false);
                }, 200);
            } else {
                this.set('show', false);
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.set('show', !this.get('show'));
        }
    }, {
        key: 'position',
        value: function position() {
            (0, _position3.default)(this.refs.menu.element, _extends({
                my: 'center top+5',
                at: 'center bottom',
                of: this.dropdown.element
            }, this.get('position')));
        }
    }, {
        key: '_addDocumentEvents',
        value: function _addDocumentEvents() {
            var parent = this._findParentDropdownMenu();
            if (!parent) {
                if (this.get('trigger') === 'click') {
                    document.addEventListener('click', this._onDocumentClick);
                }
            } else {
                parent.locked = true;
            }

            document.addEventListener('keydown', this._onKeydown);
        }
    }, {
        key: '_removeDocumentEvents',
        value: function _removeDocumentEvents() {
            var parent = this._findParentDropdownMenu();
            if (!parent) {
                if (this.get('trigger') === 'click') {
                    document.removeEventListener('click', this._onDocumentClick);
                }
            } else {
                parent.locked = false;
            }

            document.removeEventListener('keydown', this._onKeydown);
        }
    }, {
        key: '_onDocumentClick',
        value: function _onDocumentClick(e) {
            var target = e.target;
            var menu = this.refs.menu.element;

            // is a dropdown menu
            if (menu === target || menu.contains(target)) return;
            // is click on sub menu
            if (this._isClickSubMenu(target, this.subDropdowns)) return;
            // custom flag to indicate that the event does not lead to close menu
            if (e._dropdown) return;

            this.hide(true);
        }
    }, {
        key: '_onKeydown',
        value: function _onKeydown(e) {
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
        }
    }, {
        key: '_focusNextItem',
        value: function _focusNextItem(e) {
            var parent = this._findParentDropdownMenu();
            if (parent && this.focusIndex < 0) {
                return;
            }
            e.preventDefault();
            this.focusItemByIndex(this.focusIndex + 1, 'down');
        }
    }, {
        key: '_focusPrevItem',
        value: function _focusPrevItem(e) {
            var parent = this._findParentDropdownMenu();
            if (parent && this.focusIndex < 0) {
                return;
            }
            e.preventDefault();
            this.focusItemByIndex(this.focusIndex - 1, 'up');
        }
    }, {
        key: 'focusItemByIndex',
        value: function focusItemByIndex(index) {
            var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'down';

            var items = this.items;
            var max = items.length - 1;
            var oldIndex = this.focusIndex;

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
            }

            // all items are disabled
            if (i > max) return;

            this.focusIndex = index;

            if (oldIndex > -1 && items[oldIndex]) {
                items[oldIndex].unFocus();
            }

            items[index].focus();
        }
    }, {
        key: '_selectItem',
        value: function _selectItem(e) {
            this._showSubMenu(e);
            if (this.focusIndex > -1) {
                e.preventDefault();
                this.items[this.focusIndex].select();
            }
        }
    }, {
        key: '_showSubMenu',
        value: function _showSubMenu(e) {
            var parent = this._findParentDropdownMenu();
            if (!parent && this.focusIndex < 0) return;

            e.preventDefault();
            if (parent && this.focusIndex < 0) {
                this.focusItemByIndex(0);
            } else if (this.focusIndex > -1) {
                this.items[this.focusIndex].showMenuAndFocus();
            }
        }
    }, {
        key: '_hideSubMenu',
        value: function _hideSubMenu(e) {
            if (this.focusIndex > -1) {
                e.preventDefault();
                this.items[this.focusIndex].hideMenu();

                var parent = (0, _utils.findParentComponent)(DropdownMenu, this, true);
                if (parent) {
                    this.dropdown.hide(null, null, true);
                }
            }
        }
    }, {
        key: 'focusItem',
        value: function focusItem(item) {
            var index = this.items.indexOf(item);
            this.focusItemByIndex(index);
        }
    }, {
        key: '_isClickSubMenu',
        value: function _isClickSubMenu(target, subMenus) {
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
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            var parent = this._findParentDropdownMenu();
            if (parent) {
                var subDropdowns = parent.subDropdowns;
                subDropdowns.splice(subDropdowns.indexOf(this), 1);
            }
            clearTimeout(this.timer);
            this._removeDocumentEvents();
        }
    }]);

    return DropdownMenu;
}(_intact2.default), _class2.template = _menu2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = DropdownMenu;
module.exports = exports['default'];

/***/ }),

/***/ "./components/dropdown/menu.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        show = _self$get.show,
        trigger = _self$get.trigger,
        className = _self$get.className;

    var events = {};
    // no matter what the trigger is, we should show menu when enter it.
    // for the case: hover trigger nests click trigger
    events['ev-mouseenter'] = self.show;
    if (trigger === 'hover') {
        events['ev-mouseleave'] = self.hide.bind(self, false);
    }

    return h(_moveWrapper2.default, { '_parent': function () {
            try {
                return [self][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': function () {
            try {
                return [show][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Animate, _extends({ 'className': _className(function () {
                try {
                    return [_defineProperty({ "k-dropdown-menu": true }, className, className)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)), 'a:transition': 'dropdown' }, function () {
            try {
                return [events][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), { 'a:delayDestroy': function () {
                try {
                    return [false][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), '_context': this }), null, null, null, function (i) {
            widgets['menu'] = i;
        }) : undefined, '_context': this }, null, null, null, function (i) {
        widgets['wrapper'] = i;
    });
};

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/col.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _col = __webpack_require__("./components/grid/col.vdt");

var _col2 = _interopRequireDefault(_col);

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

var Col = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Col, _Intact);

    function Col() {
        _classCallCheck(this, Col);

        return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    _createClass(Col, [{
        key: 'defaults',
        value: function defaults() {
            return {
                span: 24,
                offset: 0,
                gutter: 0
            };
        }
    }, {
        key: 'template',
        get: function get() {
            return _col2.default;
        }
    }]);

    return Col;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Col;
module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/col.vdt":
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
    var gutterStyle = __webpack_require__("./components/grid/utils.js");

    var _self$get = self.get(),
        children = _self$get.children,
        span = _self$get.span,
        className = _self$get.className,
        style = _self$get.style,
        gutter = _self$get.gutter,
        offset = _self$get.offset;

    var hasGutter = gutter > 0;
    if (hasGutter) {
        style = gutterStyle(gutter, style, 'padding');
    }

    var classNameObj = (_classNameObj = {}, _defineProperty(_classNameObj, 'k-' + span, true), _defineProperty(_classNameObj, className, className && !hasGutter), _defineProperty(_classNameObj, 'k-offset-' + offset, offset > 0), _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [hasGutter ? h('div', null, function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), _className(function () {
                try {
                    return [className][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this))) : children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
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

/***/ "./components/grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__("./components/grid/row.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__("./components/grid/col.js");

var _col2 = _interopRequireDefault(_col);

__webpack_require__("./components/grid/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _row2.default;
exports.Col = _col2.default;

/***/ }),

/***/ "./components/grid/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/grid/index.styl");
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

/***/ "./components/grid/row.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _row = __webpack_require__("./components/grid/row.vdt");

var _row2 = _interopRequireDefault(_row);

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

var Row = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Row, _Intact);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
        key: 'defaults',
        value: function defaults() {
            return {
                gutter: 0
            };
        }
    }, {
        key: 'template',
        get: function get() {
            return _row2.default;
        }
    }]);

    return Row;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Row;
module.exports = exports['default'];

/***/ }),

/***/ "./components/grid/row.vdt":
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
    var gutterStyle = __webpack_require__("./components/grid/utils.js");

    var _self$get = self.get(),
        children = _self$get.children,
        className = _self$get.className,
        style = _self$get.style,
        gutter = _self$get.gutter;

    var hasGutter = gutter > 0;
    if (hasGutter) {
        style = gutterStyle(gutter, style);
    }

    var classNameObj = (_classNameObj = {
        'k-row': true
    }, _defineProperty(_classNameObj, className, className), _defineProperty(_classNameObj, 'k-gutter', hasGutter), _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [hasGutter ? children.map(function (vNode) {
                if (vNode) {
                    vNode.props.gutter = gutter;
                    return vNode;
                }
            }) : children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), _className(function () {
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

/***/ "./components/grid/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = gutterStyle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function gutterStyle(gutter, style) {
    var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'margin';

    var margin = gutter / 2;
    var sign = prop === 'margin' ? '-' : '';
    if (!style) style = '';
    if (typeof style === 'string') {
        style = '' + style + (!style || /;\s*$/.test(style) ? '' : ';') + prop + '-left: ' + sign + margin + 'px; ' + prop + '-right: ' + sign + margin + 'px;';
    } else {
        var _extends2;

        style = _extends((_extends2 = {}, _defineProperty(_extends2, prop + 'Left', '' + sign + margin + 'px'), _defineProperty(_extends2, prop + 'Right', '' + sign + margin + 'px'), _extends2), style);
    }
    return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "./components/input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Input = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/input/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/input/index.styl");

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

var Input = (_dec = _intact2.default.template, (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Input, _Intact);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: 'defaults',
        value: function defaults() {
            return {
                type: 'text', // text | textarea
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
                fluid: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this.on('$changed:value', this._adjustWidth);
            this.on('$changed:placeholder', this._adjustWidth);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            this._adjustWidth();
        }
    }, {
        key: '_adjustWidth',
        value: function _adjustWidth() {
            if (this.get('autoWidth')) {
                var width = this.refs.fake.offsetWidth || 1;
                this.refs.input.style.width = width + 1 + 'px';
            }
        }
    }, {
        key: 'clear',
        value: function clear(e) {
            this.set('value', '');
            this.focus();
            this.trigger('clear', e);
        }
    }, {
        key: 'select',
        value: function select() {
            this.refs.input.select();
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.refs.input.focus();
        }
    }, {
        key: '_onInput',
        value: function _onInput(e) {
            this.set('value', e.target.value);
            this.trigger('input', e);
        }
    }, {
        key: '_proxyEvent',
        value: function _proxyEvent(name, e) {
            this.trigger(name, e);
        }
    }]);

    return Input;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    type: String,
    readonly: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    fluid: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Input;
exports.Input = Input;

/***/ }),

/***/ "./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/input/index.styl");
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

/***/ "./components/input/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        type = _self$get.type,
        name = _self$get.name,
        value = _self$get.value,
        placeholder = _self$get.placeholder,
        readonly = _self$get.readonly,
        clearable = _self$get.clearable,
        disabled = _self$get.disabled,
        size = _self$get.size,
        rows = _self$get.rows,
        spellcheck = _self$get.spellcheck,
        defaultValue = _self$get.defaultValue,
        style = _self$get.style,
        className = _self$get.className,
        autoWidth = _self$get.autoWidth,
        fluid = _self$get.fluid;

    var classNameObj = (_classNameObj = {
        'k-input': true
    }, _defineProperty(_classNameObj, 'k-' + size, size !== 'default'), _defineProperty(_classNameObj, 'k-group', blocks.prepend || blocks.append), _defineProperty(_classNameObj, 'k-disabled', disabled), _defineProperty(_classNameObj, 'k-with-prefix', blocks.prefix), _defineProperty(_classNameObj, 'k-with-suffix', blocks.suffix), _defineProperty(_classNameObj, 'k-clearable', clearable), _defineProperty(_classNameObj, 'k-auto-width', autoWidth), _defineProperty(_classNameObj, 'k-fluid', fluid), _defineProperty(_classNameObj, className, className), _classNameObj);

    var events = ['keydown', 'keyup', 'change', 'keypress', 'focus', 'blur'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    var wrapperEvents = ['click', 'mouseenter', 'mouseleave'].reduce(function (memo, name) {
        memo['ev-' + name] = self._proxyEvent.bind(self, name);
        return memo;
    }, {});

    return h('div', _extends({ 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [wrapperEvents][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), [function () {
        try {
            return [blocks.prepend][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.prepend = function (parent) {
        return null;
    }) && (__blocks.prepend = function (parent) {
        var self = this;
        return blocks.prepend ? blocks.prepend.call(this, function () {
            return _blocks.prepend.call(self, parent);
        }) : _blocks.prepend.call(this, parent);
    }) && __blocks.prepend.call(this), 'k-prepend') : undefined, h('div', null, [function () {
        try {
            return [blocks.prefix][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.prefix = function (parent) {
        return null;
    }) && (__blocks.prefix = function (parent) {
        var self = this;
        return blocks.prefix ? blocks.prefix.call(this, function () {
            return _blocks.prefix.call(self, parent);
        }) : _blocks.prefix.call(this, parent);
    }) && __blocks.prefix.call(this), 'k-prefix') : undefined, function () {
        try {
            return [type !== 'textarea'][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('input', _extends({ 'type': function () {
            try {
                return [type][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'value': function () {
            try {
                return [value][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-input': function () {
            try {
                return [self._onInput][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'defaultValue': function () {
            try {
                return [defaultValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'readOnly': function () {
            try {
                return [readonly][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [events][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, 'k-inner', null, function (i) {
        widgets['input'] = i;
    }) : h('textarea', _extends({ 'value': function () {
            try {
                return [value][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-input': function () {
            try {
                return [self._onInput][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'defaultValue': function () {
            try {
                return [defaultValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'name': function () {
            try {
                return [name][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'readOnly': function () {
            try {
                return [readonly][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'placeholder': function () {
            try {
                return [placeholder][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'rows': function () {
            try {
                return [rows][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'spellcheck': function () {
            try {
                return [spellcheck][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [events][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), null, 'k-inner k-textarea', null, function (i) {
        widgets['input'] = i;
    }), function () {
        try {
            return [blocks.suffix || clearable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, [function () {
        try {
            return [clearable][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', { 'ev-click': function () {
            try {
                return [self.clear][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, _className(function () {
        try {
            return [{
                "k-clear k-icon ion-ios-close": true,
                "k-show": value
            }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this))) : undefined, (_blocks.suffix = function (parent) {
        return null;
    }) && (__blocks.suffix = function (parent) {
        var self = this;
        return blocks.suffix ? blocks.suffix.call(this, function () {
            return _blocks.suffix.call(self, parent);
        }) : _blocks.suffix.call(this, parent);
    }) && __blocks.suffix.call(this)], 'k-suffix') : undefined, function () {
        try {
            return [autoWidth][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, function () {
        try {
            return [value == null || value === '' ? placeholder : value][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-fake', null, function (i) {
        widgets['fake'] = i;
    }) : undefined], 'k-wrapper'), function () {
        try {
            return [blocks.append][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.append = function (parent) {
        return null;
    }) && (__blocks.append = function (parent) {
        var self = this;
        return blocks.append ? blocks.append.call(this, function () {
            return _blocks.append.call(self, parent);
        }) : _blocks.append.call(this, parent);
    }) && __blocks.append.call(this), 'k-append') : undefined], _className(function () {
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

/***/ "./components/message/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Message = exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _desc, _value, _class, _init, _class2, _temp, _dec2, _desc2, _value2, _class3, _init2, _class4, _temp2;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/message/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _message = __webpack_require__("./components/message/message.vdt");

var _message2 = _interopRequireDefault(_message);

__webpack_require__("./components/message/index.styl");

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

var messages = void 0;
var id = 0;

var Message = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(Message, _Intact);

    function Message() {
        _classCallCheck(this, Message);

        return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
    }

    _createClass(Message, [{
        key: 'defaults',
        value: function defaults() {
            return {
                content: undefined,
                duration: 5000,
                type: 'info',
                key: id++,
                value: false,
                closable: true,

                // if this component is used as instance or not
                _isInstance: false
            };
        }
    }, {
        key: 'init',
        value: function init() {
            var _get3;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (!this.get('value')) {
                var _get2;

                // when use as component, render the component
                // but don't append it to parentDom, use a
                // placeholder instead of
                this.parentDom = null;
                (_get2 = _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'init', this)).call.apply(_get2, [this].concat(args));
                return this.placeholder = document.createComment("message");
            } else if (this.element) {
                // Messages render this component, return the 
                // original dom
                return this.element;
            }
            return (_get3 = _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'init', this)).call.apply(_get3, [this].concat(args));
        }
    }, {
        key: 'hydrate',
        value: function hydrate(vNode) {
            // don't hydrate it, but initialize it
            this.init(null, vNode);
            return this.placeholder = document.createComment('message');
        }
    }, {
        key: 'update',
        value: function update(lastVNode, nextVNode) {
            // when this updating is from original parent,
            // update the original dom, but return the placeholder,
            // otherwise return the original dom which has been updated
            if (!lastVNode ||
            // it may have not parentVNode in vue
            lastVNode.parentVNode && lastVNode.parentVNode.tag === MessageAnimate) {
                return this.element;
            }
            _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'update', this).call(this, lastVNode, nextVNode);
            return this.placeholder;
        }
    }, {
        key: 'toString',
        value: function toString() {
            // return the placeholder string for ssr
            return '<!--message-->';
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this.on('$change:value', function (c, value) {
                if (value) {
                    messages.notice(_this2);
                } else {
                    messages.delete(_this2);
                }
            });
        }
    }, {
        key: '_create',
        value: function _create() {
            if (!messages) {
                messages = _intact2.default.mount(Messages, document.body);
            }
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var _this3 = this;

            if (!this.get('value')) return;

            var duration = this.get('duration');
            if (duration) {
                this.timer = setTimeout(function () {
                    _this3.close();
                }, duration);
            }
        }
    }, {
        key: 'close',
        value: function close() {
            clearTimeout(this.timer);
            if (!this.get('_isInstance')) {
                this.set('value', false);
            } else {
                messages.delete(this);
            }
        }
    }, {
        key: 'onMouseEnter',
        value: function onMouseEnter() {
            clearTimeout(this.timer);
        }
    }, {
        key: 'onMouseLeave',
        value: function onMouseLeave() {
            clearTimeout(this.timer);
            this._mount();
        }
    }, {
        key: 'destroy',
        value: function destroy(vNode) {
            if (this._isVue && !vNode) {
                messages.delete(this);
            } else if (vNode.parentVNode.tag === MessageAnimate && !this.get('_isInstance')) {
                return;
            } else if (vNode.parentVNode.tag !== MessageAnimate) {
                messages.delete(this);
            } else {
                _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), 'destroy', this).call(this, vNode);
            }
        }
    }], [{
        key: 'notice',
        value: function notice(content) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';

            if (!messages) {
                messages = _intact2.default.mount(Messages, document.body);
            }

            if (content !== null && (typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && !content.tag) {
                content = Object.assign({}, content, { type: type });
            } else {
                content = { content: content, duration: duration, type: type };
            }

            var message = new Message(_extends({}, content, {
                value: true,
                _isInstance: true
            }));

            messages.notice(message);

            return message;
        }
    }]);

    return Message;
}(_intact2.default), _class2.template = _message2.default, _class2.info = function (content, duration) {
    Message.notice(content, duration, 'info');
}, _class2.error = function (content, duration) {
    Message.notice(content, duration, 'danger');
}, _class2.success = function (content, duration) {
    Message.notice(content, duration, 'success');
}, _class2.warning = function (content, duration) {
    Message.notice(content, duration, 'warning');
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = Message;
var Messages = (_dec2 = _intact2.default.template(), (_class3 = (_temp2 = _class4 = function (_Intact2) {
    _inherits(Messages, _Intact2);

    function Messages() {
        _classCallCheck(this, Messages);

        return _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).apply(this, arguments));
    }

    _createClass(Messages, [{
        key: 'defaults',
        value: function defaults() {
            return {
                messages: []
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            this.MessageAnimate = MessageAnimate;
        }
    }, {
        key: 'notice',
        value: function notice(message) {
            this.get('messages').push(message);
            this.update();
        }
    }, {
        key: 'delete',
        value: function _delete(message) {
            var messages = this.get('messages');
            var index = messages.indexOf(message);
            if (~index) {
                messages.splice(index, 1);
                this.update();
            }
        }
    }]);

    return Messages;
}(_intact2.default), _class4.template = _index2.default, _temp2), (_applyDecoratedDescriptor(_class3, 'template', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_class3, 'template'), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init2;
    }
}), _class3)), _class3));

// MessageAniamte type for type checking

var MessageAnimate = function (_Intact$Animate) {
    _inherits(MessageAnimate, _Intact$Animate);

    function MessageAnimate() {
        _classCallCheck(this, MessageAnimate);

        return _possibleConstructorReturn(this, (MessageAnimate.__proto__ || Object.getPrototypeOf(MessageAnimate)).apply(this, arguments));
    }

    return MessageAnimate;
}(_intact2.default.Animate);

exports.Message = Message;

/***/ }),

/***/ "./components/message/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/message/index.styl");
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

/***/ "./components/message/index.vdt":
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
  var MessageAnimate = self.MessageAnimate;

  return h(Animate, { 'className': 'k-messages', 'children': _Vdt.utils.map(function () {
      try {
        return [self.get('messages')][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), function (value, key) {
      return h(MessageAnimate, { 'a:tag': function () {
          try {
            return [value][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'key': function () {
          try {
            return [value.get('key')][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': null, '_context': this });
    }, this), '_context': this });
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/message/message.vdt":
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
      type = _self$get.type,
      content = _self$get.content,
      children = _self$get.children,
      closable = _self$get.closable;

  return h('div', { 'ev-mouseenter': function () {
      try {
        return [self.onMouseEnter][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'ev-mouseleave': function () {
      try {
        return [self.onMouseLeave][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, h('div', null, [h('i', null, null, 'k-icon ion-ios-information'), function () {
    try {
      return [typeof content === 'string' || typeof content === 'number'][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('div', { 'innerHTML': function () {
      try {
        return [content][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, null, 'k-content') : h('div', null, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-content'), function () {
    try {
      return [closable][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h(_button2.default, { 'type': 'none', 'icon': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'className': 'k-close', 'ev-click': function () {
      try {
        return [self.close][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-close-empty'), '_context': this }) : undefined], 'k-container'), _className(function () {
    try {
      return [_defineProperty({ "k-message": true }, 'k-' + type, type !== 'info')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this)));
};

var _button = __webpack_require__("./components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/moveWrapper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoveWrapper = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoveWrapper = function (_Intact) {
    _inherits(MoveWrapper, _Intact);

    function MoveWrapper() {
        _classCallCheck(this, MoveWrapper);

        return _possibleConstructorReturn(this, (MoveWrapper.__proto__ || Object.getPrototypeOf(MoveWrapper)).apply(this, arguments));
    }

    _createClass(MoveWrapper, [{
        key: 'template',
        value: function template(self, Vdt) {
            var children = self.get('children');
            return children || Vdt.miss.hc('MoveWrapper');
        }
    }, {
        key: 'defaults',
        value: function defaults() {
            return {
                autoDestroy: true,
                container: undefined
            };
        }
    }, {
        key: 'init',
        value: function init() {
            var _get2;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            (_get2 = _get(MoveWrapper.prototype.__proto__ || Object.getPrototypeOf(MoveWrapper.prototype), 'init', this)).call.apply(_get2, [this].concat(args));
            return this.placeholder = document.createComment("placeholder");
        }
    }, {
        key: 'hydrate',
        value: function hydrate() {
            var _get3;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            (_get3 = _get(MoveWrapper.prototype.__proto__ || Object.getPrototypeOf(MoveWrapper.prototype), 'hydrate', this)).call.apply(_get3, [this].concat(args));
            return this.placeholder = document.createComment('placeholder');
        }
    }, {
        key: 'update',
        value: function update(lastVNode, nextVNode) {
            _get(MoveWrapper.prototype.__proto__ || Object.getPrototypeOf(MoveWrapper.prototype), 'update', this).call(this, lastVNode, nextVNode);
            return this.placeholder;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
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

    }, {
        key: '_$destroy',
        value: function _$destroy(lastVNode, nextVNode) {
            // if (this.destroyed) {
            // return console.warn('destroyed multiple times');
            // }
            if (this.rendered && (!nextVNode || !(nextVNode.type & _intact2.default.Vdt.miss.Types.ComponentClassOrInstance) || nextVNode.key !== lastVNode.key)) {
                _intact2.default.Vdt.miss.remove(this.vdt.vNode, this.container);
            }
            this._destroy(lastVNode, nextVNode);
            this.destroyed = true;
            this.trigger('$destroyed', this);
            this.off();
        }
    }, {
        key: '_mount',
        value: function _mount(lastVNode, nextVNode) {
            var container = this.get('container');
            if (container) {
                this.container = document.querySelector(container);
            }
            if (!this.container) {
                this.container = document.body;
            }
            this.container.appendChild(this.element);
        }
    }]);

    return MoveWrapper;
}(_intact2.default);

exports.default = MoveWrapper;
exports.MoveWrapper = MoveWrapper;

/***/ }),

/***/ "./components/moveWrapper/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = position;
var max = Math.max;
var abs = Math.abs;
var rHorizontal = /left|center|right/;
var rVertical = /top|center|bottom/;
var rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
var rPosition = /^\w+/;
var rPercent = /%$/;

function position(elem, options) {
    options = Object.assign({}, options);

    var target = options.of || window;
    // const dimensions = getDimensions(target);
    if (target.preventDefault) {
        options.at = "left top";
    }

    var _getDimensions = getDimensions(target),
        targetWidth = _getDimensions.width,
        targetHeight = _getDimensions.height,
        targetOffset = _getDimensions.offset;

    var basePosition = Object.assign({}, targetOffset);
    var collision = (options.collision || 'flip').split(' ');
    var offsets = {};

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
    basePosition.top += atOffset[1];

    var elemWidth = elem.offsetWidth;
    var elemHeight = elem.offsetHeight;
    var position = Object.assign({}, basePosition);
    var myOffset = getOffsets(offsets.my, elemWidth, elemHeight);

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

    var style = elem.style;

    var _window$getComputedSt = window.getComputedStyle(elem),
        elemPosition = _window$getComputedSt.elemPosition;

    if (elemPosition === 'static') {
        style.position = 'relative';
    }
    style.left = position.left + 'px';
    style.top = position.top + 'px';

    if (options.using) {
        var left = targetOffset.left - position.left;
        var right = left + targetWidth - elemWidth;
        var top = targetOffset.top - position.top;
        var bottom = top + targetHeight - elemHeight;
        var feedback = {
            horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
            vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
        };
        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
            feedback.horizontal = 'center';
        }
        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
            feedback.vertical = 'middle';
        }
        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
            feedback.important = 'horizontal';
        } else {
            feedback.important = 'vertical';
        }
        options.using(feedback);
    }
}

function getDimensions(elem) {
    if (elem.nodeType === 9) {
        // document
        return {
            width: elem.offsetWidth,
            height: elem.offsetHeight,
            offset: {
                top: 0,
                left: 0
            }
        };
    } else if (elem === window) {
        var _d = elem.document.documentElement;
        return {
            width: _d.clientWidth,
            height: _d.clientHeight,
            offset: {
                top: elem.pageYOffset || _d.scrollTop,
                left: elem.pageXOffset || _d.scrollLeft
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
    }
    // dom
    var rect = elem.getBoundingClientRect();
    var d = elem.ownerDocument.defaultView;
    return {
        width: rect.width,
        height: rect.height,
        offset: {
            top: rect.top + d.pageYOffset,
            left: rect.left + d.pageXOffset
        }
    };
}

function getOffsets(offsets, width, height) {
    return [parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1)];
}

exports.position = position;

/***/ }),

/***/ "./components/scrollSelect/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScrollSelect = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./components/scrollSelect/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/scrollSelect/index.styl");

var _utils = __webpack_require__("./components/utils.js");

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

var ScrollSelect = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(ScrollSelect, _Intact);

    function ScrollSelect() {
        _classCallCheck(this, ScrollSelect);

        return _possibleConstructorReturn(this, (ScrollSelect.__proto__ || Object.getPrototypeOf(ScrollSelect)).apply(this, arguments));
    }

    _createClass(ScrollSelect, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: '',
                count: 19,
                data: [],

                _list: [],
                _translate: 0,
                _marginTop: 0,
                _dragging: false
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this2 = this;

            this._setList();

            ['data', 'value', 'count'].forEach(function (item) {
                _this2.on('$change:' + item, _this2._setList);
            });

            this._move = this._move.bind(this);
            this._dragEnd = this._dragEnd.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            var height = this.element.offsetHeight;
            var totalHeight = this.refs.wrapper.offsetHeight;
            this._deltaY = -Math.floor((totalHeight - height) / 2);
            this.set({
                _translate: this._deltaY
            });
        }
    }, {
        key: '_select',
        value: function _select(item, index) {
            var _get = this.get(),
                count = _get.count,
                _translate = _get._translate,
                _marginTop = _get._marginTop;

            var half = Math.floor(count / 2);
            var itemHeight = this.refs.item.offsetHeight;

            this.set({
                _translate: _translate - itemHeight * (index - half),
                _marginTop: _marginTop + itemHeight * (index - half),
                value: item.value
            });
        }
    }, {
        key: '_setList',
        value: function _setList() {
            var _get2 = this.get(),
                data = _get2.data,
                value = _get2.value,
                count = _get2.count;

            if (typeof data === 'function') {
                data = data(value);
            }

            var index = -1;
            data = data.map(function (item, i) {
                if ((0, _utils.isStringOrNumber)(item)) {
                    item = { value: item, label: item };
                }
                if (item.value === value) {
                    index = i;
                }
                return item;
            });

            if (!~index) {
                index = 0;
                this.set('value', data[0].value, { silent: true });
            }

            var length = data.length;
            var half = Math.floor(count / 2);
            var _list = [];
            for (var i = 0; i < count; i++) {
                _list.push(data[((index - half + i) % length + length) % length]);
            }
            this.set('_list', _list, { silent: true });
        }
    }, {
        key: '_dragStart',
        value: function _dragStart(e) {
            if (e.which !== 1) return;

            this.set('_dragging', true);
            this._y = e.clientY;
            this._initY = e.clientY;
            this._itemHeight = this.refs.item.offsetHeight;

            document.addEventListener('mousemove', this._move);
            document.addEventListener('mouseup', this._dragEnd);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            if (this.get('_dragging')) {
                var deltaY = e.clientY - this._y;
                this._y = e.clientY;

                var _get3 = this.get(),
                    _translate = _get3._translate;

                var _deltaY = this._y - this._initY;
                var offsetIndex = Math.floor(Math.abs(_deltaY) / this._itemHeight);
                if (offsetIndex) {
                    if (_deltaY < 0) {
                        offsetIndex = -offsetIndex;
                    }
                    this._setByRelativeIndex(-offsetIndex, -_deltaY);
                    this._initY = this._y;
                }
                this.set('_translate', _translate + deltaY);
            }
        }
    }, {
        key: '_setByRelativeIndex',
        value: function _setByRelativeIndex(index, deltaY, isSetTranslate) {
            var _get4 = this.get(),
                _list = _get4._list,
                value = _get4.value,
                _marginTop = _get4._marginTop;

            var i = _list.findIndex(function (v) {
                return v.value === value;
            });
            var l = _list.length;
            var itemHeight = this._itemHeight;
            var props = {
                'value': _list[(l + i + index) % l].value,
                _marginTop: _marginTop + (deltaY || index * itemHeight)
            };
            if (isSetTranslate) {
                props._translate = this.get('_translate') - itemHeight * index;
            }
            this.set(props);
        }
    }, {
        key: '_dragEnd',
        value: function _dragEnd(e) {
            if (this.get('_dragging')) {
                this.set('_dragging', false);
                this.set({
                    _translate: -this.get('_marginTop') + this._deltaY
                });
                document.removeEventListener('mousemove', this._move);
                document.removeEventListener('mouseup', this._dragEnd);
            }
        }
    }, {
        key: '_onWheel',
        value: function _onWheel(e) {
            e.preventDefault();
            this._itemHeight = this.refs.item.offsetHeight;
            if (e._rawEvent.deltaY > 0) {
                // down
                this._setByRelativeIndex(1, null, true);
            } else {
                this._setByRelativeIndex(-1, null, true);
            }
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }]);

    return ScrollSelect;
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));
exports.default = ScrollSelect;
exports.ScrollSelect = ScrollSelect;

/***/ }),

/***/ "./components/scrollSelect/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/scrollSelect/index.styl");
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

/***/ "./components/scrollSelect/index.vdt":
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
        value = _self$get.value,
        _list = _self$get._list,
        _translate = _self$get._translate,
        _marginTop = _self$get._marginTop,
        _dragging = _self$get._dragging;

    return h('div', null, [h('div', { 'style': function () {
            try {
                return [{
                    transform: 'translateY(' + _translate + 'px)',
                    marginTop: _marginTop + 'px'
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [self._dragStart][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-wheel': function () {
            try {
                return [self._onWheel][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, _Vdt.utils.map(function () {
        try {
            return [_list][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), function (item, key) {
        return h('div', { 'ev-click': function () {
                try {
                    return [self._select.bind(self, item, key)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [item.label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{
                    "k-item": true,
                    "k-active": item.value === value
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), function () {
            try {
                return [item.key][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), function () {
            try {
                return [key === 0 ? function (dom) {
                    return self.refs.item = dom;
                } : undefined][0];
            } catch (e) {
                _e(e);
            }
        }.call(this));
    }, this), 'k-wrapper', null, function (i) {
        widgets['wrapper'] = i;
    }), function () {
        try {
            return [blocks.append][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, (_blocks.append = function (parent) {
        return null;
    }) && (__blocks.append = function (parent) {
        var self = this;
        return blocks.append ? blocks.append.call(this, function () {
            return _blocks.append.call(self, parent);
        }) : _blocks.append.call(this, parent);
    }) && __blocks.append.call(this), 'k-append') : undefined], _className(function () {
        try {
            return [{ "k-scroll-select": true, "k-dragging": _dragging }][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = exports.Tabs = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _tab = __webpack_require__("./components/tabs/tab.js");

var _tab2 = _interopRequireDefault(_tab);

var _index = __webpack_require__("./components/tabs/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/tabs/index.styl");

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

var Tabs = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Tabs, _Intact);

    function Tabs() {
        _classCallCheck(this, Tabs);

        return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }

    _createClass(Tabs, [{
        key: 'defaults',
        value: function defaults() {
            return {
                data: undefined,
                value: undefined
            };
        }
    }, {
        key: '_changeTab',
        value: function _changeTab(item) {
            if (!item.href) {
                this.set('value', item.value);
            }
        }
    }, {
        key: 'template',
        get: function get() {
            return _index2.default;
        }
    }]);

    return Tabs;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tabs;
exports.Tabs = Tabs;
exports.Tab = _tab2.default;

/***/ }),

/***/ "./components/tabs/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tabs/index.styl");
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

/***/ "./components/tabs/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        className = _self$get.className,
        data = _self$get.data,
        value = _self$get.value,
        children = _self$get.children,
        style = _self$get.style;

    var classNameObj = _defineProperty({
        'k-tabs': true
    }, className, className);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [_Vdt.utils.map(function () {
        try {
            return [data][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), function (item, key) {
        return h('a', { 'ev-click': function () {
                try {
                    return [self._changeTab.bind(self, item)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [item.text][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), _className(function () {
            try {
                return [{ 'k-tab': true, 'k-active': item.value === value }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)));
    }, this), '\n    ', function () {
        try {
            return [__u.map(children ? Array.isArray(children) ? children : [children] : children, function (vNode) {
                if (vNode.tag === _tab2.default) {
                    vNode.props = _extends({}, vNode.props, { _value: value, _parent: self });
                }
                return vNode;
            })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};

var _tab = __webpack_require__("./components/tabs/tab.js");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _tab = __webpack_require__("./components/tabs/tab.vdt");

var _tab2 = _interopRequireDefault(_tab);

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

var Tab = (_dec = _intact2.default.template(), (_class = function (_Intact) {
    _inherits(Tab, _Intact);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'defaults',
        value: function defaults() {
            return {
                value: undefined,
                href: undefined,

                // passed by parent
                _value: undefined,
                _parent: undefined
            };
        }
    }, {
        key: '_isActive',
        value: function _isActive() {
            var value = this.get('value');
            return value !== undefined && value === this.get('_value');
        }
    }, {
        key: '_changeTab',
        value: function _changeTab(e) {
            this.get('_parent')._changeTab(this.get());
        }
    }, {
        key: 'template',
        get: function get() {
            return _tab2.default;
        }
    }]);

    return Tab;
}(_intact2.default), (_applyDecoratedDescriptor(_class.prototype, 'template', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'template'), _class.prototype)), _class));
exports.default = Tab;
module.exports = exports['default'];

/***/ }),

/***/ "./components/tabs/tab.vdt":
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
            value = _self$get.value,
            href = _self$get.href,
            children = _self$get.children,
            _value = _self$get._value;

        return h('a', { 'href': function () {
                        try {
                                return [href][0];
                        } catch (e) {
                                _e(e);
                        }
                }.call(this), 'ev-click': function () {
                        try {
                                return [self._changeTab][0];
                        } catch (e) {
                                _e(e);
                        }
                }.call(this) }, function () {
                try {
                        return [self.get('children')][0];
                } catch (e) {
                        _e(e);
                }
        }.call(this), _className(function () {
                try {
                        return [{
                                'k-tab': true,
                                'k-active': value !== undefined && value === _value
                        }][0];
                } catch (e) {
                        _e(e);
                }
        }.call(this)));
};

module.exports = exports['default'];

/***/ }),

/***/ "./components/tooltip/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Intact) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tooltip = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _dropdown = __webpack_require__("./components/dropdown/dropdown.js");

var _dropdown2 = _interopRequireDefault(_dropdown);

var _position2 = __webpack_require__("./components/moveWrapper/position.js");

var _position3 = _interopRequireDefault(_position2);

var _index = __webpack_require__("./components/tooltip/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./components/tooltip/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sylvia on 2017/10/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tooltip = function (_Dropdown) {
    _inherits(Tooltip, _Dropdown);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
    }

    return Tooltip;
}(_dropdown2.default);

var TooltipContent = (_dec = Intact.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(TooltipContent, _Intact);

    function TooltipContent() {
        _classCallCheck(this, TooltipContent);

        return _possibleConstructorReturn(this, (TooltipContent.__proto__ || Object.getPrototypeOf(TooltipContent)).apply(this, arguments));
    }

    _createClass(TooltipContent, [{
        key: 'defaults',
        value: function defaults() {
            return {
                show: false,
                trigger: 'hover',
                canHover: false,
                showArrow: true,
                positon: {},
                transition: 'fade',

                _feedback: {}
            };
        }
    }, {
        key: '_init',
        value: function _init() {
            var _this3 = this;

            this.on('$change:show', function (c, value) {
                _this3.trigger(value ? 'beforeShow' : 'beforeHide', _this3);
            });

            this.on('$changed:show', function (c, value) {
                if (value) {
                    _this3._addDocumentClick();
                    _this3.position();
                    _this3.trigger('show', _this3);
                } else {
                    _this3._removeDocumentClick();
                    _this3.trigger('hide', _this3);
                }
            });

            this._onDocumentClick = this._onDocumentClick.bind(this);
        }
    }, {
        key: '_mount',
        value: function _mount() {
            if (this.get('show')) {
                this._addDocumentClick();
            }
        }
    }, {
        key: 'show',
        value: function show() {
            clearTimeout(this.timer);
            this.set('show', true);
        }
    }, {
        key: 'hide',
        value: function hide(immediately) {
            var _this4 = this;

            if (!immediately && this.get('canHover')) {
                this.timer = setTimeout(function () {
                    _this4.set('show', false);
                }, 200);
            } else {
                this.set('show', false);
            }
        }
    }, {
        key: 'position',
        value: function position() {
            var _this5 = this;

            var pos = this.get('position');
            if (typeof pos === 'string') {
                switch (pos) {
                    case 'left':
                        pos = { my: 'right-10 center', at: 'left center' };
                        break;
                    case 'bottom':
                        pos = { my: 'center top+10', at: 'center bottom' };
                        break;
                    case 'right':
                        pos = { my: 'left+10 center', at: 'right center' };
                        break;
                    default:
                        pos = { my: 'center bottom-10', at: 'center top' };
                        break;
                }
            }
            var element = this.refs.content.element;
            (0, _position3.default)(element, _extends({
                my: 'center bottom-10',
                at: 'center top',
                of: this.dropdown.element,
                using: function using(feedback) {
                    _this5.set('_feedback', feedback);
                }
            }, pos));
        }
    }, {
        key: '_addDocumentClick',
        value: function _addDocumentClick() {
            if (this.get('trigger') === 'click') {
                document.addEventListener('click', this._onDocumentClick);
            }
        }
    }, {
        key: '_removeDocumentClick',
        value: function _removeDocumentClick() {
            if (this.get('trigger') === 'click') {
                document.removeEventListener('click', this._onDocumentClick);
            }
        }
    }, {
        key: '_onDocumentClick',
        value: function _onDocumentClick(e) {
            var target = e.target;
            var element = this.refs.content.element;

            if (element === target || element.contains(target)) return;
            if (e._dropdown) return;

            this.hide(true);
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            clearTimeout(this.timer);
            this._removeDocumentClick();
        }
    }]);

    return TooltipContent;
}(Intact), _class2.template = _index2.default, _class2.propTypes = {
    show: Boolean,
    canHover: Boolean,
    showArrow: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));


var h = Intact.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        content = props.content,
        _blocks = props._blocks,
        _context = props._context,
        ref = props.ref,
        rest = _objectWithoutProperties(props, ['children', 'content', '_blocks', '_context', 'ref']);

    if (_blocks && _blocks.content) {
        content = _blocks.content.call(_context);
    }

    var contentVNode = h(TooltipContent, _extends({
        _context: _context,
        children: content,
        ref: ref
    }, rest));

    return !inVue ? [h(Tooltip, _extends({
        _context: _context,
        children: children,
        menu: contentVNode
    }, rest, {
        className: 'k-tooltip'
    })), contentVNode] : h(VueWrapper, _extends({
        children: [h(Tooltip, _extends({
            _context: _context,
            children: children,
            menu: contentVNode
        }, props.trigger ? { trigger: props.trigger } : {})), contentVNode]
    }, rest));
}

// for vue Boolean cast
Wrapper.propTypes = {
    canHover: Boolean
};

var VueWrapper = function (_Intact2) {
    _inherits(VueWrapper, _Intact2);

    function VueWrapper() {
        _classCallCheck(this, VueWrapper);

        return _possibleConstructorReturn(this, (VueWrapper.__proto__ || Object.getPrototypeOf(VueWrapper)).apply(this, arguments));
    }

    _createClass(VueWrapper, [{
        key: 'template',
        value: function template(data) {
            var _data$get = data.get(),
                className = _data$get.className,
                children = _data$get.children,
                rest = _objectWithoutProperties(_data$get, ['className', 'children']);

            return h('div', rest, children, Intact.Vdt.utils.className(_defineProperty({
                'k-tooltip': true
            }, className, className)));
        }
    }]);

    return VueWrapper;
}(Intact);

var _Wrapper = Intact.functionalWrapper ? Intact.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Tooltip = _Wrapper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/intact-vue/src/index.js")))

/***/ }),

/***/ "./components/tooltip/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tooltip/index.styl");
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

/***/ "./components/tooltip/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        show = _self$get.show,
        trigger = _self$get.trigger,
        showArrow = _self$get.showArrow,
        canHover = _self$get.canHover,
        className = _self$get.className,
        _feedback = _self$get._feedback,
        transition = _self$get.transition;

    var events = {};
    if (canHover && trigger === 'hover') {
        events['ev-mouseenter'] = self.show;
        events['ev-mouseleave'] = self.hide.bind(self, false);
    }

    var classNameObj = _defineProperty({
        "k-tooltip-content": true,
        'k-cannot-hover': trigger === 'hover' && !canHover
    }, className, className);

    return h(_moveWrapper2.default, { 'children': function () {
            try {
                return [show][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Animate, _extends({ 'className': _className(function () {
                try {
                    return [classNameObj][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)), 'a:transition': function () {
                try {
                    return [transition][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) }, function () {
            try {
                return [events][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), { 'a:delayDestroy': function () {
                try {
                    return [false][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this), 'children': [function () {
                try {
                    return [showArrow][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) ? h('i', null, null, _className(function () {
                try {
                    var _ref;

                    return [(_ref = {
                        "k-arrow": true
                    }, _defineProperty(_ref, 'k-' + _feedback.vertical, _feedback.vertical), _defineProperty(_ref, 'k-' + _feedback.horizontal, _feedback.horizontal), _ref)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this))) : undefined, function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)], '_context': this }), null, null, null, function (i) {
            widgets['content'] = i;
        }) : undefined, '_context': this });
};

var _moveWrapper = __webpack_require__("./components/moveWrapper/index.js");

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/checkbox/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-checkbox {\n  display: inline-block;\n  cursor: pointer;\n}\n.k-checkbox .k-wrapper {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  vertical-align: middle;\n  border: 1px solid #979797;\n  border-radius: 2px;\n  position: relative;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-checkbox .k-wrapper:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0.285714285714286rem;\n  height: 0.571428571428571rem;\n  top: 0.071428571428571rem;\n  left: 0.285714285714286rem;\n  border: 1px solid #fff;\n  border-top: 0;\n  border-left: 0;\n  -webkit-transform: rotate(45deg) scale(0);\n      -ms-transform: rotate(45deg) scale(0);\n          transform: rotate(45deg) scale(0);\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-checkbox input {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.k-checkbox .k-text {\n  vertical-align: middle;\n  margin-left: 0.571428571428571em;\n  display: inline-block;\n}\n.k-checkbox.k-checked .k-wrapper {\n  border-color: #0a5eee;\n  background: #0a5eee;\n}\n.k-checkbox.k-checked .k-wrapper:before {\n  -webkit-transform: rotate(45deg) scale(1);\n      -ms-transform: rotate(45deg) scale(1);\n          transform: rotate(45deg) scale(1);\n}\n.k-checkbox.k-disabled {\n  color: #999;\n  cursor: not-allowed;\n}\n.k-checkbox.k-disabled .k-wrapper {\n  border-color: #d9d9d9;\n  background: #f7f7f7;\n}\n.k-checkbox.k-disabled .k-wrapper:before {\n  border-color: #999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/datepicker/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-datepicker {\n  display: inline-block;\n}\n.k-datepicker .k-inner {\n  cursor: pointer;\n}\n.k-datepicker-content {\n  position: absolute;\n  border-radius: 0.142857142857143rem;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  color: #595959;\n}\n.k-datepicker-content .k-day,\n.k-datepicker-content .k-weekday {\n  display: inline-block;\n  width: 2.5em;\n  text-align: center;\n  margin: 0.083333333333333em 0.166666666666667em;\n}\n.k-datepicker-content .k-day {\n  height: 2.5em;\n  line-height: calc(2.5em - 2px);\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.k-datepicker-content .k-day:hover {\n  background: #eee;\n}\n.k-datepicker-content .k-day.k-out {\n  color: #999;\n}\n.k-datepicker-content .k-day.k-today {\n  border: 1px solid #cad0dd;\n}\n.k-datepicker-content .k-day.k-active {\n  background: #0a5eee;\n  color: #fff;\n}\n.k-datepicker-content .k-day.k-active.k-today {\n  border-color: transparent;\n}\n.k-datepicker-content .k-day.k-disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.k-datepicker-content .k-day.k-disabled:hover {\n  background: none;\n}\n.k-datepicker-content .k-weekday {\n  color: #999;\n}\n.k-datepicker-content .k-month {\n  text-align: center;\n  padding: 0 0 0.416666666666667em;\n}\n.k-datepicker-content .k-month .k-text {\n  margin: 0 0.25em;\n  line-height: 2.5em;\n}\n.k-datepicker-content .k-month .k-icon {\n  font-size: 1.166666666666667em;\n}\n.k-datepicker-content .k-month .k-prev {\n  float: left;\n}\n.k-datepicker-content .k-month .k-next {\n  float: right;\n}\n.k-datepicker-content .k-month .k-text-wrapper {\n  cursor: pointer;\n}\n.k-datepicker-content .k-year-picker {\n  width: 19.833333333333332em;\n}\n.k-datepicker-content .k-time-picker {\n  width: 19.833333333333332em;\n}\n.k-datepicker-content .k-scroll-select {\n  height: 17.5em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dialog/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-dialog-wrapper {\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n.k-dialog-wrapper .k-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n}\n.k-dialog-wrapper .k-overlay.animate-enter,\n.k-dialog-wrapper .k-overlay.animate-leave {\n  opacity: 0;\n}\n.k-dialog {\n  position: absolute;\n  width: 47.857142857142854rem;\n  border-radius: 2px;\n  background: #fff;\n  font-size: 0.857142857142857rem;\n  color: #595959;\n}\n.k-dialog .k-header {\n  padding: 0 2.142857142857143rem;\n  border-bottom: 1px solid #cad0dd;\n  position: relative;\n}\n.k-dialog .k-title {\n  height: 4.285714285714286em;\n  line-height: 4.285714285714286em;\n  font-size: 1rem;\n  color: #404040;\n}\n.k-dialog .k-close {\n  position: absolute;\n  right: 0.357142857142857em;\n  top: 0.714285714285714em;\n}\n.k-dialog .k-close.k-btn .k-icon {\n  font-size: 2.285714285714286em;\n}\n.k-dialog .k-body {\n  padding: 1.285714285714286rem 2.142857142857143rem;\n}\n.k-dialog .k-footer {\n  text-align: right;\n  padding: 1.714285714285714rem 2.142857142857143rem;\n}\n.k-dialog .k-footer .k-btn {\n  margin-left: 0.857142857142857rem;\n}\n.k-dialog.k-dragging {\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.k-dialog.animate-enter-active,\n.k-dialog.animate-leave-active {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-dialog.animate-enter,\n.k-dialog.animate-leave {\n  -webkit-transform: translateY(-10px) scale(1.05);\n      -ms-transform: translateY(-10px) scale(1.05);\n          transform: translateY(-10px) scale(1.05);\n  opacity: 0;\n}\n.k-dialog.k-small {\n  width: 32.142857142857146rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/dropdown/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-dropdown {\n  display: inline-block;\n}\n.k-dropdown-menu {\n  position: absolute;\n  min-width: 7.142857142857143rem;\n  background: #fff;\n  border-radius: 0.142857142857143rem;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  font-size: 0.857142857142857rem;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n.k-dropdown-menu .k-dropdown {\n  display: block;\n}\n.k-dropdown-menu .k-item {\n  padding: 0.666666666666667em 1.333333333333333em;\n  cursor: pointer;\n}\n.k-dropdown-menu .k-item.k-hover {\n  background: #0a5eee;\n  color: #fff;\n}\n.k-dropdown-menu .k-item:first-of-type {\n  border-radius: 0.142857142857143rem 0.142857142857143rem 0 0;\n}\n.k-dropdown-menu .k-item:last-of-type {\n  border-radius: 0 0 0.142857142857143rem 0.142857142857143rem;\n}\n.k-dropdown-menu .k-item.k-disabled {\n  background: #f7f7f7;\n  color: #999;\n  cursor: not-allowed;\n}\n.k-dropdown-menu.dropdown-leave-active {\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/grid/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-row {\n  display: block;\n  zoom: 1;\n}\n.k-row:after {\n  display: table;\n  clear: both;\n  content: '';\n  height: 0;\n}\n.k-1 {\n  width: 4.166666666666666%;\n  float: left;\n}\n.k-offset-1 {\n  margin-left: 4.166666666666666%;\n}\n.k-2 {\n  width: 8.333333333333332%;\n  float: left;\n}\n.k-offset-2 {\n  margin-left: 8.333333333333332%;\n}\n.k-3 {\n  width: 12.5%;\n  float: left;\n}\n.k-offset-3 {\n  margin-left: 12.5%;\n}\n.k-4 {\n  width: 16.666666666666664%;\n  float: left;\n}\n.k-offset-4 {\n  margin-left: 16.666666666666664%;\n}\n.k-5 {\n  width: 20.833333333333336%;\n  float: left;\n}\n.k-offset-5 {\n  margin-left: 20.833333333333336%;\n}\n.k-6 {\n  width: 25%;\n  float: left;\n}\n.k-offset-6 {\n  margin-left: 25%;\n}\n.k-7 {\n  width: 29.166666666666668%;\n  float: left;\n}\n.k-offset-7 {\n  margin-left: 29.166666666666668%;\n}\n.k-8 {\n  width: 33.33333333333333%;\n  float: left;\n}\n.k-offset-8 {\n  margin-left: 33.33333333333333%;\n}\n.k-9 {\n  width: 37.5%;\n  float: left;\n}\n.k-offset-9 {\n  margin-left: 37.5%;\n}\n.k-10 {\n  width: 41.66666666666667%;\n  float: left;\n}\n.k-offset-10 {\n  margin-left: 41.66666666666667%;\n}\n.k-11 {\n  width: 45.83333333333333%;\n  float: left;\n}\n.k-offset-11 {\n  margin-left: 45.83333333333333%;\n}\n.k-12 {\n  width: 50%;\n  float: left;\n}\n.k-offset-12 {\n  margin-left: 50%;\n}\n.k-13 {\n  width: 54.166666666666664%;\n  float: left;\n}\n.k-offset-13 {\n  margin-left: 54.166666666666664%;\n}\n.k-14 {\n  width: 58.333333333333336%;\n  float: left;\n}\n.k-offset-14 {\n  margin-left: 58.333333333333336%;\n}\n.k-15 {\n  width: 62.5%;\n  float: left;\n}\n.k-offset-15 {\n  margin-left: 62.5%;\n}\n.k-16 {\n  width: 66.66666666666666%;\n  float: left;\n}\n.k-offset-16 {\n  margin-left: 66.66666666666666%;\n}\n.k-17 {\n  width: 70.83333333333334%;\n  float: left;\n}\n.k-offset-17 {\n  margin-left: 70.83333333333334%;\n}\n.k-18 {\n  width: 75%;\n  float: left;\n}\n.k-offset-18 {\n  margin-left: 75%;\n}\n.k-19 {\n  width: 79.16666666666666%;\n  float: left;\n}\n.k-offset-19 {\n  margin-left: 79.16666666666666%;\n}\n.k-20 {\n  width: 83.33333333333334%;\n  float: left;\n}\n.k-offset-20 {\n  margin-left: 83.33333333333334%;\n}\n.k-21 {\n  width: 87.5%;\n  float: left;\n}\n.k-offset-21 {\n  margin-left: 87.5%;\n}\n.k-22 {\n  width: 91.66666666666666%;\n  float: left;\n}\n.k-offset-22 {\n  margin-left: 91.66666666666666%;\n}\n.k-23 {\n  width: 95.83333333333334%;\n  float: left;\n}\n.k-offset-23 {\n  margin-left: 95.83333333333334%;\n}\n.k-24 {\n  width: 100%;\n  float: left;\n}\n.k-offset-24 {\n  margin-left: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/input/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-input {\n  font-size: 1rem;\n  display: inline-block;\n  width: 21.428571428571427rem;\n  vertical-align: middle;\n}\n.k-input .k-wrapper {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n.k-input .k-inner {\n  display: inline-block;\n  width: 100%;\n  font-size: 1rem;\n  height: 2.571428571428572rem;\n  border: 1px solid #cad0dd;\n  padding: 0 0.714285714285714rem;\n  background-color: #fff;\n  -webkit-transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;\n  transition: border 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out, -webkit-box-shadow 0.25s ease-in-out;\n  outline: none;\n}\n.k-input .k-inner:focus {\n  border: 1px solid #0a5eee;\n}\n.k-input.k-fluid {\n  width: 100%;\n}\n.k-input .k-textarea {\n  padding: 0.357142857142857rem 0.714285714285714rem;\n  height: auto;\n  line-height: 1.5;\n}\n.k-input.k-with-prefix .k-inner {\n  padding-left: 2.142857142857143rem;\n}\n.k-input.k-with-suffix .k-inner,\n.k-input.k-clearable .k-inner {\n  padding-right: 2.142857142857143rem;\n}\n.k-input .k-prefix,\n.k-input .k-suffix {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.k-input .k-prefix {\n  left: 0.714285714285714rem;\n}\n.k-input .k-suffix {\n  right: 0.714285714285714rem;\n}\n.k-input .k-clear {\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-in-out;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n}\n.k-input .k-clear:hover {\n  color: #0a5eee;\n}\n.k-input.k-with-suffix .k-clear {\n  margin-right: 0.357142857142857rem;\n}\n.k-input.k-with-suffix.k-clearable .k-inner {\n  padding-right: 3.214285714285714rem;\n}\n.k-input .k-inner:focus + .k-suffix .k-clear.k-show,\n.k-input:hover .k-clear.k-show {\n  opacity: 1;\n  pointer-events: all;\n}\n.k-input.k-group {\n  display: table;\n}\n.k-input .k-prepend,\n.k-input .k-append {\n  display: table-cell;\n  width: 1px;\n  vertical-align: middle;\n  padding: 0 0.5em;\n  background: #eee;\n  border: 1px solid #cad0dd;\n}\n.k-input .k-prepend .k-btn,\n.k-input .k-append .k-btn {\n  margin: -1px -0.571428571428571em;\n  border-radius: 0;\n}\n.k-input .k-prepend {\n  border-right: none;\n}\n.k-input .k-append {\n  border-left: none;\n}\n.k-input.k-disabled {\n  color: #999;\n  cursor: not-allowed;\n}\n.k-input.k-disabled .k-inner {\n  color: #999;\n  border-color: #d9d9d9;\n  background: #f7f7f7;\n  cursor: not-allowed;\n}\n.k-input.k-small {\n  font-size: 0.857142857142857rem;\n}\n.k-input.k-small .k-inner {\n  height: 2.142857142857143rem;\n  font-size: 0.857142857142857rem;\n}\n.k-input.k-mini {\n  font-size: 0.857142857142857rem;\n}\n.k-input.k-mini .k-inner {\n  height: 1.857142857142857rem;\n  font-size: 0.857142857142857rem;\n}\n.k-input .k-fake {\n  position: absolute;\n  visibility: hidden;\n  top: 0;\n  white-space: nowrap;\n}\n.k-input.k-auto-width {\n  width: auto;\n}\n.k-input.k-auto-width .k-inner {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/message/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-messages {\n  position: fixed;\n  top: 0.714285714285714rem;\n  width: 100%;\n  pointer-events: none;\n  z-index: 9999;\n}\n.k-messages .animate-enter,\n.k-messages .animate-leave {\n  opacity: 0;\n  -webkit-transform: translateY(-0.5rem);\n      -ms-transform: translateY(-0.5rem);\n          transform: translateY(-0.5rem);\n}\n.k-messages .animate-enter-active,\n.k-messages .animate-leave-active {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n.k-messages .animate-move {\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.k-message {\n  text-align: center;\n  width: 100%;\n}\n.k-message > .k-container {\n  display: inline-block;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  background: #fff;\n  border-radius: 0.285714285714286rem;\n  margin-bottom: 0.714285714285714rem;\n  pointer-events: all;\n}\n.k-message > .k-container > .k-icon {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 0.714285714285714rem;\n  color: #0a5eee;\n}\n.k-message > .k-container > .k-icon:before {\n  font-size: 1.285714285714286rem;\n}\n.k-message > .k-container > .k-content {\n  display: inline-block;\n  padding: 0.714285714285714rem;\n  vertical-align: middle;\n}\n.k-message > .k-container > .k-close {\n  vertical-align: middle;\n}\n.k-message > .k-container > .k-close .k-icon:before {\n  font-size: 1.714285714285714rem;\n}\n.k-message.k-danger > .k-container > .k-icon {\n  color: #db2828;\n}\n.k-message.k-success > .k-container > .k-icon {\n  color: #4db500;\n}\n.k-message.k-warning > .k-container > .k-icon {\n  color: #ff8a00;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/scrollSelect/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-scroll-select {\n  text-align: center;\n  overflow: hidden;\n  max-height: 100%;\n  height: 8.928571428571429rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n}\n.k-scroll-select .k-wrapper {\n  -webkit-transition: -webkit-transform 0.25s ease-in-out;\n  transition: -webkit-transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out;\n  transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;\n}\n.k-scroll-select.k-dragging .k-wrapper {\n  -webkit-transition: none;\n  transition: none;\n}\n.k-scroll-select .k-item {\n  line-height: 1.785714285714286rem;\n  color: #999;\n  cursor: pointer;\n}\n.k-scroll-select .k-item.k-active {\n  color: #0a5eee;\n  font-size: 1.1em;\n}\n.k-scroll-select > .k-append {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tabs/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-tabs {\n  border-bottom: 1px solid #cad0dd;\n}\n.k-tabs .k-tab {\n  height: 4.214285714285714rem;\n  line-height: calc(4.214285714285714rem - 2px);\n  padding: 0 0.571428571428571rem;\n  margin: 0 0.714285714285714rem;\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  color: #595959;\n  position: relative;\n  vertical-align: middle;\n}\n.k-tabs .k-tab.k-active {\n  color: #0a5eee;\n}\n.k-tabs .k-tab.k-active:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 0.142857142857143rem;\n  width: 100%;\n  background: #0a5eee;\n  margin-left: -0.571428571428571rem;\n  bottom: -0.071428571428571rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./components/tooltip/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".k-tooltip {\n  display: inline-block;\n}\n.k-tooltip-content {\n  position: absolute;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n          box-shadow: 0 2px 8px 0 rgba(191,191,191,0.5);\n  padding: 0.357142857142857rem 0.714285714285714rem;\n  border-radius: 0.142857142857143rem;\n  font-size: 0.857142857142857rem;\n  color: #0a5eee;\n  line-height: 1.4;\n  z-index: 9999;\n}\n.k-tooltip-content > .k-arrow:before,\n.k-tooltip-content > .k-arrow {\n  position: absolute;\n  display: block;\n  border-style: solid;\n  border-color: transparent;\n}\n.k-tooltip-content > .k-arrow:before {\n  content: ' ';\n}\n.k-tooltip-content > .k-arrow.k-center {\n  left: 50%;\n  margin-left: -6px;\n}\n.k-tooltip-content > .k-arrow.k-top:before,\n.k-tooltip-content > .k-arrow.k-bottom:before,\n.k-tooltip-content > .k-arrow.k-top,\n.k-tooltip-content > .k-arrow.k-bottom {\n  border-width: 8px 6px;\n}\n.k-tooltip-content > .k-arrow.k-top:before,\n.k-tooltip-content > .k-arrow.k-bottom:before {\n  left: -6px;\n}\n.k-tooltip-content > .k-arrow.k-top {\n  top: -16px;\n  border-bottom-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-top:before {\n  border-bottom-color: #fff;\n  top: -7px;\n}\n.k-tooltip-content > .k-arrow.k-bottom {\n  bottom: -16px;\n  border-top-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-bottom:before {\n  border-top-color: #fff;\n  bottom: -7px;\n}\n.k-tooltip-content > .k-arrow.k-middle {\n  top: 50%;\n  margin-top: -6px;\n}\n.k-tooltip-content > .k-arrow.k-left:before,\n.k-tooltip-content > .k-arrow.k-right:before,\n.k-tooltip-content > .k-arrow.k-left,\n.k-tooltip-content > .k-arrow.k-right {\n  border-width: 6px 8px;\n}\n.k-tooltip-content > .k-arrow.k-left:before,\n.k-tooltip-content > .k-arrow.k-right:before {\n  top: -6px;\n}\n.k-tooltip-content > .k-arrow.k-left {\n  left: -16px;\n  border-right-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-left:before {\n  border-right-color: #fff;\n  left: -7px;\n}\n.k-tooltip-content > .k-arrow.k-right {\n  right: -16px;\n  border-left-color: rgba(191,191,191,0.2);\n}\n.k-tooltip-content > .k-arrow.k-right:before {\n  border-left-color: #fff;\n  right: -7px;\n}\n.k-tooltip-content.k-cannot-hover {\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/breadcrumb/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"通过添加<code>to</code>属性，来展示超链接","codes":[{"language":"vdt","content":"import {Breadcrumb, BreadcrumbItem} from 'kpc/components/breadcrumb';\n\n<Breadcrumb>\n    <BreadcrumbItem to=\"/\">item 1</BreadcrumbItem>\n    <BreadcrumbItem to=\"/components/breadcrumb/\">item 2</BreadcrumbItem>\n    <BreadcrumbItem>item 3</BreadcrumbItem>\n</Breadcrumb>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":0,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Breadcrumb, BreadcrumbItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/breadcrumb'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Breadcrumb</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">BreadcrumbItem</span> <span class=\"hljs-attr\">to</span>=<span class=\"hljs-string\">\"/\"</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">BreadcrumbItem</span> <span class=\"hljs-attr\">to</span>=<span class=\"hljs-string\">\"/components/breadcrumb/\"</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">BreadcrumbItem</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Breadcrumb</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮类型","order":0},"catalogs":[],"contents":"有如下几种类型：默认按钮，主按钮，警告按钮，危险按钮，文字按钮。","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button>default</Button>\n    <Button type=\"primary\">primay</Button>\n    <Button type=\"warning\">warning</Button>\n    <Button type=\"danger\">danger</Button>\n    <Button type=\"none\">none</Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"},{"language":"vue","content":"<template>\n    <div>\n        <Button>default</Button>\n        <Button type=\"primary\">primay</Button>\n        <Button type=\"warning\">warning</Button>\n        <Button type=\"danger\">danger</Button>\n        <Button type=\"none\">none</Button>\n    </div>\n</template>\n<style src=\"./index.styl\" lang=\"stylus\"></style>\n<script>\nimport Button from 'kpc/components/button';\n\nexport default {\n    components: {\n        Button\n    }\n}\n</script>"}],"index":2,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>primay<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"danger\"</span>&gt;</span>danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"none\"</span>&gt;</span>none<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"},{"language":"vue","content":"<pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>primay<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warning\"</span>&gt;</span>warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"danger\"</span>&gt;</span>danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"none\"</span>&gt;</span>none<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./index.styl\"</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">\"stylus\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">components</span>: {\n        Button\n    }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/disabled/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用状态","order":5},"catalogs":[],"contents":"添加<code>disabled</code>属性，可以禁用按钮","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button disabled>disabled</Button>\n    <Button disabled type=\"none\">disabled text</Button>\n    <Button disabled icon circle><i class=\"k-icon ion-ios-search\"></i></Button>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":3,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">disabled</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"none\"</span>&gt;</span>disabled text<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">disabled</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/group/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮组","order":1},"catalogs":[],"contents":"将<code>Button</code>作为<code>ButtonGroup</code>的子元素，可以展示按钮组。给<code>ButtonGroup</code>添加<code>vertical</code>属性，可以是按钮组纵向排列。给<code>ButtonGroup</code>添加<code>radio</code>属性，可以使按钮组拥有类似radio的单选能力。","codes":[{"language":"vdt","content":"import {Button, ButtonGroup} from 'kpc/components/button';\n\n<div>\n    <ButtonGroup>\n        <Button>开机</Button>\n        <Button>关机</Button>\n        <Button>重启</Button>\n    </ButtonGroup>\n    <ButtonGroup>\n        <Button type=\"primary\" size=\"small\">开机</Button>\n        <Button type=\"primary\" size=\"small\">关机</Button>\n        <Button type=\"primary\" size=\"small\">重启</Button>\n    </ButtonGroup>\n    <ButtonGroup>\n        <Button type=\"primary\" size=\"small\">\n            <i class=\"k-icon ion-ios-arrow-left\"></i>上一页\n        </Button>\n        <Button type=\"primary\" size=\"small\">\n            下一页<i class=\"k-icon ion-ios-arrow-right\"></i>\n        </Button>\n    </ButtonGroup>\n    <br /><br />\n    <p>纵向按钮组</p>\n    <ButtonGroup vertical>\n        <Button type=\"primary\" size=\"small\">开机</Button>\n        <Button type=\"primary\" size=\"small\">关机</Button>\n        <Button type=\"primary\" size=\"small\">重启</Button>\n    </ButtonGroup>\n    <br /><br />\n    <p>radio按钮组</p>\n    <ButtonGroup radio v-model=\"city\">\n        <Button value=\"beijing\" type=\"small\">北京</Button>\n        <Button value=\"shanghai\" type=\"small\">上海</Button>\n        <Button value=\"guangzhou\" type=\"small\">广州</Button>\n        <Button value=\"shenzhen\" type=\"small\">深圳</Button>\n    </ButtonGroup>\n</div>"},{"language":"styl","content":".k-btns\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            city: 'beijing'\n        };\n    }\n}"},{"language":"vue","content":"<template>\n    <div>\n        <ButtonGroup>\n            <Button>开机</Button>\n            <Button>关机</Button>\n            <Button>重启</Button>\n        </ButtonGroup>\n        <ButtonGroup>\n            <Button type=\"primary\" size=\"small\">开机</Button>\n            <Button type=\"primary\" size=\"small\">关机</Button>\n            <Button type=\"primary\" size=\"small\">重启</Button>\n        </ButtonGroup>\n        <ButtonGroup vertical>\n            <Button type=\"primary\" size=\"small\">开机</Button>\n            <Button type=\"primary\" size=\"small\">关机</Button>\n            <Button type=\"primary\" size=\"small\">重启</Button>\n        </ButtonGroup>\n    </div>\n</template>\n<style src=\"./index.styl\" lang=\"stylus\"></style>\n<script>\nimport {Button, ButtonGroup} from 'kpc/components/button';\n\nexport default {\n    components: {\n        Button, ButtonGroup\n    }\n}\n</script>"}],"index":4,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Button, ButtonGroup} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-arrow-left\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>上一页\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>\n            下一页<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>纵向按钮组<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">vertical</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>radio按钮组<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">radio</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"city\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"beijing\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>北京<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"shanghai\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>上海<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"guangzhou\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>广州<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"shenzhen\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>深圳<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btns</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">city</span>: <span class=\"hljs-string\">'beijing'</span>\n        };\n    }\n}</code></pre>"},{"language":"vue","content":"<pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ButtonGroup</span> <span class=\"hljs-attr\">vertical</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>开机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>关机<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>重启<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ButtonGroup</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">style</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./index.styl\"</span> <span class=\"hljs-attr\">lang</span>=<span class=\"hljs-string\">\"stylus\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">style</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n<span class=\"hljs-keyword\">import</span> {Button, ButtonGroup} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">components</span>: {\n        Button, ButtonGroup\n    }\n}\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/icon/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"图标按钮","order":1},"catalogs":[],"contents":"给<code>Button</code>添加<code>icon</code>属性，可以展示图标按钮。图标按钮仅仅是使按钮的宽高相等，此时你可以将任意图标元素作为它的子元素。<code>circle</code>属性可以展示圆形图标。如果你不需要宽高相等的图标按钮，而仅仅是带图标的文字按钮，去掉<code>icon</code>属性即可。<blockquote>\n请给图标元素添加<code>k-icon</code>类名，用于定位图标元素，以便按钮变为<code>loading</code>状态时能够将它替换为loading图标</blockquote>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button icon><i class=\"ion-ios-search\"></i></Button>\n    <Button icon circle><i class=\"ion-ios-search\"></i></Button>\n    <Button type=\"primary\"><i class=\"k-icon ion-ios-search\"></i>搜索</Button>\n    <Button circle type='primary'><i class=\"k-icon ion-ios-search\"></i>搜索</Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":5,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>搜索<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">'primary'</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>搜索<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/loading/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"加载状态按钮","order":2},"catalogs":[],"contents":"添加<code>loading</code>属性，可以将按钮设为加载状态，此时按钮不可点。","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button type=\"primary\" loading>确认</Button>\n    <Button icon circle loading><i class=\"k-icon ion-ios-search\"></i></Button>\n    <br /> <br />\n    <Button type=\"primary\" \n        loading={{ self.get('loading1') }}\n        ev-click={{ self.onClick.bind(self, 'loading1') }}\n    >点击加载</Button>\n    <Button type=\"primary\" \n        loading={{ self.get('loading2') }}\n        ev-click={{ self.onClick.bind(self, 'loading2') }}\n    ><i class=\"k-icon ion-ios-search\"></i>点击加载</Button>\n    <Button icon circle\n        loading={{ self.get('loading3') }}\n        ev-click={{ self.onClick.bind(self, 'loading3') }}\n    ><i class=\"k-icon ion-ios-search\"></i></Button>\n    <Button type=\"primary\" \n        loading={{ self.get('loading4') }}\n        ev-click={{ self.onClick.bind(self, 'loading4') }}\n    >图标在右侧<i class=\"k-icon ion-ios-search\"></i></Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    onClick(name) {\n        this.set(name, true);\n    }\n}"}],"index":6,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">loading</span>&gt;</span>确认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">loading</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> \n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading1</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading1</span>') }}\n    &gt;</span>点击加载<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> \n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading2</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading2</span>') }}\n    &gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>点击加载<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>\n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading3</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading3</span>') }}\n    &gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> \n        <span class=\"hljs-attr\">loading</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>('<span class=\"hljs-attr\">loading4</span>') }}\n        <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onClick.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">loading4</span>') }}\n    &gt;</span>图标在右侧<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    onClick(name) {\n        <span class=\"hljs-keyword\">this</span>.set(name, <span class=\"hljs-literal\">true</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/size/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"按钮尺寸","order":4},"catalogs":[],"contents":"按钮有三种尺寸：<code>default</code>,<code>small</code>, <code>mini</code>。","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button>default</Button>\n    <Button type=\"small\">small</Button>\n    <Button type=\"mini\">mini</Button>\n    <br /><br />\n    <Button icon circle><i class=\"k-icon ion-ios-search\"></i></Button>\n    <Button icon circle size=\"small\"><i class=\"k-icon ion-ios-search\"></i></Button>\n    <Button icon circle size=\"mini\"><i class=\"k-icon ion-ios-search\"></i></Button>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":7,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span>&gt;</span>default<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span>small<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"mini\"</span>&gt;</span>mini<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span> /&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"small\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">icon</span> <span class=\"hljs-attr\">circle</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"mini\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-ios-search\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/button/demos/tagName/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定按钮tagName","order":5},"catalogs":[],"contents":"<code>Button</code>默认渲染成<code>button</code>元素，通过<code>tagName</code>，我们可以渲染成任意元素或组件。此时，我们可以通过<code>tagProps</code>属性，给指定的<code>tagName</code>传递与<code>Button</code>属性名相冲突的属性。<blockquote>\n当给<code>Button</code>指定<code>href</code>属性时，则它会强制渲染成<code>a</code>标签</blockquote>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<div>\n    <Button tagName=\"div\" type=\"primary\">div元素按钮</Button>\n    <Button href=\"https://www.ksyun.com\" \n        style=\"margin-left: 20px;\"\n        target=\"_blank\"\n    >超链接按钮</Button>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":8,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">tagName</span>=<span class=\"hljs-string\">\"div\"</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>div元素按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"https://www.ksyun.com\"</span> \n        <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-left: 20px;\"</span>\n        <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"_blank\"</span>\n    &gt;</span>超链接按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/checkbox/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<code>Checkbox</code>的基本用法，及禁用状态","codes":[{"language":"vdt","content":"import Checkbox from 'kpc/components/checkbox';\n\n<div>\n    <Checkbox>checkbox</Checkbox>\n    <Checkbox disabled>disabled checkbox</Checkbox>\n    <Checkbox value={{ true }} disabled>disabled checked checkbox</Checkbox>\n</div>"},{"language":"styl","content":".k-checkbox\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":10,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Checkbox <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span>&gt;</span>checkbox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled checkbox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">true</span> }} <span class=\"hljs-attr\">disabled</span>&gt;</span>disabled checked checkbox<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/checkbox/demos/group/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"Checkbox组","order":1},"catalogs":[],"contents":"和浏览器原生行为一样，给<code>Checkbox</code>指定相同的<code>name</code>，它们便组成了复选框组。<blockquote>\n此时必须初始化绑定的属性为数组，否则<code>Checkbox</code>将类似<code>radio</code>一样只能单选</blockquote>\n","codes":[{"language":"vdt","content":"import Checkbox from 'kpc/components/checkbox';\n\n<div>\n    <Checkbox name=\"languages\" trueValue=\"Javascript\" v-model=\"languages\">Javascript</Checkbox>\n    <Checkbox name=\"languages\" trueValue=\"C++\" v-model=\"languages\">C++</Checkbox>\n    <Checkbox name=\"languages\" trueValue=\"PHP\" v-model=\"languages\">PHP</Checkbox>\n    Your selected: {{ JSON.stringify(self.get('languages')) }}\n</div>"},{"language":"styl","content":".k-checkbox\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            // 必须初始化为数组\n            languages: []\n        };\n    }\n}"}],"index":11,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Checkbox <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"languages\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"Javascript\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"languages\"</span>&gt;</span>Javascript<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"languages\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"C++\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"languages\"</span>&gt;</span>C++<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"languages\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"PHP\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"languages\"</span>&gt;</span>PHP<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    Your selected: {{ JSON.stringify(self.get('languages')) }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-comment\">// 必须初始化为数组</span>\n            languages: []\n        };\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/checkbox/demos/value/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"指定选中和非选中的取值","order":1},"catalogs":[],"contents":"<code>Checkbox</code>默认选中的值为<code>true</code>，非选中的值为<code>false</code>，通过<code>trueValue</code>和<code>falseValue</code>属性，我们可以指定选中和非选中的值。<blockquote>\n当指定值为对象时，不要在模板中直接定义对象字面量（如：trueValue={{ {a: 1} }}），因为在模板中创建的对象每次执行模板都会生成一份新数据，使全等判断(<code>===</code>)失效。此时应该在js中定义该对象，然后模板中引用它。</blockquote>\n","codes":[{"language":"vdt","content":"import Checkbox from 'kpc/components/checkbox';\n\n<div>\n    <Checkbox v-model=\"value1\">默认值: {{ JSON.stringify(self.get('value1')) }}</Checkbox>\n    <Checkbox v-model=\"value2\" trueValue=\"checked\">\n        指定选中时取值为\"checked\": {{ JSON.stringify(self.get('value2')) }}\n    </Checkbox>\n    <Checkbox v-model=\"value3\" trueValue={{ 0 }} falseValue={{ self.get(\"uncheckedValue\") }}>\n        指定非选中时取值为对象：{{ JSON.stringify(self.get('value3')) }}\n    </Checkbox>\n</div>"},{"language":"styl","content":".k-checkbox\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {\n            uncheckedValue: {\n                unchecked: true\n            }\n        };\n    }\n}"}],"index":12,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Checkbox <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/checkbox'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value1\"</span>&gt;</span>默认值: {{ JSON.stringify(self.get('value1')) }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value2\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">\"checked\"</span>&gt;</span>\n        指定选中时取值为\"checked\": {{ JSON.stringify(self.get('value2')) }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Checkbox</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"value3\"</span> <span class=\"hljs-attr\">trueValue</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">0</span> }} <span class=\"hljs-attr\">falseValue</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.get</span>(\"<span class=\"hljs-attr\">uncheckedValue</span>\") }}&gt;</span>\n        指定非选中时取值为对象：{{ JSON.stringify(self.get('value3')) }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-checkbox</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">uncheckedValue</span>: {\n                <span class=\"hljs-attr\">unchecked</span>: <span class=\"hljs-literal\">true</span>\n            }\n        };\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"基本用法和禁用状态","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker v-model=\"date\" />\n    <Datepicker disabled value=\"2018-01-01\"/>\n</div>"},{"language":"styl","content":".k-datepicker\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":14,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n&lt;div&gt;\n    &lt;Datepicker v-model=\"date\" /&gt;\n    &lt;Datepicker disabled value=\"2018-01-01\"/&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-datepicker</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/clearable/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"可清空","order":1},"catalogs":[],"contents":"添加<code>clearable</code>属性，可以清空当前日期。","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<Datepicker clearable v-model=\"date\" />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":15,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">clearable</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> /&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/datetime/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"选择时间","order":5},"catalogs":[],"contents":"将<code>type</code>属性指定为<code>datetime</code>，即可让日期支持选择时间。","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<Datepicker type=\"datetime\" v-model=\"datetime\" />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":16,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datetime\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"datetime\"</span> /&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/disabledDate/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用指定日期","order":3},"catalogs":[],"contents":"通过<code>disabledDate</code>属性，可以定义个方法，来指定哪些日期被禁止选择。组件会将一个日期字符串作为方法的参数，如果方法返回“真”则禁用掉该日期，否则不禁用。","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<Datepicker disabledDate={{ (date) => {\n    // 禁用掉2018-02-05和2018-03-05\n    return ~['2018-02-05', '2018-03-05'].indexOf(date);\n} }} />"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":17,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">disabledDate</span>=<span class=\"hljs-string\">{{</span> (<span class=\"hljs-attr\">date</span>) =&gt;</span> {\n    // 禁用掉2018-02-05和2018-03-05\n    return ~['2018-02-05', '2018-03-05'].indexOf(date);\n} }} /&gt;</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/maxMin/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"最大和最小日期","order":2},"catalogs":[],"contents":"通过<code>maxDate</code>和<code>minDate</code>可以给组件指定最大和最小选择日期。","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker v-model=\"from\" placeholder=\"开始日期\"\n        maxDate={{ self.get('to') }}\n        minDate={{ new Date() }}\n    />\n    <Datepicker v-model=\"to\" placeholder=\"结束日期\"\n        minDate={{ self.get('from') }}\n    />\n</div>"},{"language":"styl","content":".k-datepicker\n    margin-right 10px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":18,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n&lt;div&gt;\n    &lt;Datepicker v-model=\"from\" placeholder=\"开始日期\"\n        maxDate={{ self.get('to') }}\n        minDate={{ new Date() }}\n    /&gt;\n    &lt;Datepicker v-model=\"to\" placeholder=\"结束日期\"\n        minDate={{ self.get('from') }}\n    /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-datepicker</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">10px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/datepicker/demos/multiple/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"日期多选","order":4},"catalogs":[],"contents":"添加<code>multiple</code>属性，即可支持日期多选。","codes":[{"language":"vdt","content":"import Datepicker from 'kpc/components/datepicker';\n\n<div>\n    <Datepicker multiple v-model=\"date\" />\n    You selected: {{ JSON.stringify(self.get('date')) }}\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":19,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Datepicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/datepicker'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Datepicker</span> <span class=\"hljs-attr\">multiple</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"date\"</span> /&gt;</span>\n    You selected: {{ JSON.stringify(self.get('date')) }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"定义一个弹窗，然后通过<code>v-model</code>建立绑定，当该绑定的值为<code>true</code>时，展示弹窗。","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\nimport Dialog from 'kpc/components/dialog';\n\n<div>\n    <Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    >Show Dialog</Button>\n    <Dialog v-model=\"show\" title=\"Dialog Title\">\n        Dialog Body \n    </Dialog>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":21,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.set.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">show</span>', <span class=\"hljs-attr\">true</span>) }}\n        <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>\n    &gt;</span>Show Dialog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dialog</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"show\"</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"Dialog Title\"</span>&gt;</span>\n        Dialog Body \n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dialog</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/block/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"自定义头部和底部","order":2},"catalogs":[],"contents":"组件提供了<code>header</code>和<code>footer</code>扩展点（block），通过它们可以自定义头部和底部。<blockquote>\n可以通过<code>parent()</code>引用到组件定义的默认内容</blockquote>\n","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\nimport Dialog from 'kpc/components/dialog';\n\n<div>\n    <Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    >Show Dialog</Button>\n    <Dialog v-model=\"show\">\n        <b:header>\n            <div class=\"k-title\">\n                <i class=\"ion-person\"></i>\n                Custom Header\n            </div>\n        </b:header>\n\n        Dialog Body \n\n        <b:footer>\n            Custom Footer\n            {{ parent() }}\n        </b:footer>\n    </Dialog>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":22,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n\n&lt;div&gt;\n    &lt;Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    &gt;Show Dialog&lt;/Button&gt;\n    &lt;Dialog v-model=\"show\"&gt;\n        &lt;b:header&gt;\n            &lt;div class=\"k-title\"&gt;\n                &lt;i class=\"ion-person\"&gt;&lt;/i&gt;\n                Custom Header\n            &lt;/div&gt;\n        &lt;/b:header&gt;\n\n        Dialog Body \n\n        &lt;b:footer&gt;\n            Custom Footer\n            {{ parent() }}\n        &lt;/b:footer&gt;\n    &lt;/Dialog&gt;\n&lt;/div&gt;</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/events/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"事件回调","order":0},"catalogs":[],"contents":"弹窗点击“确认”和“取消”时，分别会派发出<code>ok</code>和<code>cancel</code>事件，通过它们可以执行相应的回调逻辑。","codes":[{"language":"vdt","content":"import Button from 'kpc/components/button';\nimport Dialog from 'kpc/components/dialog';\n\n<div>\n    <Button ev-click={{ self.set.bind(self, 'show', true) }}\n        type=\"primary\"\n    >Show Dialog</Button>\n    <Dialog v-model=\"show\" title=\"Dialog Title\"\n        ev-ok={{ self.onOk }}\n        ev-cancel={{ self.onCancel }}\n    >Dialog Body</Dialog>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    onOk() {\n        Message.success('You clicked ok button.');\n    }\n\n    onCancel() {\n        Message.error('You clicked cancel button.');\n    }\n}"}],"index":23,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.set.bind</span>(<span class=\"hljs-attr\">self</span>, '<span class=\"hljs-attr\">show</span>', <span class=\"hljs-attr\">true</span>) }}\n        <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>\n    &gt;</span>Show Dialog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dialog</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"show\"</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"Dialog Title\"</span>\n        <span class=\"hljs-attr\">ev-ok</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onOk</span> }}\n        <span class=\"hljs-attr\">ev-cancel</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.onCancel</span> }}\n    &gt;</span>Dialog Body<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dialog</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    onOk() {\n        Message.success(<span class=\"hljs-string\">'You clicked ok button.'</span>);\n    }\n\n    onCancel() {\n        Message.error(<span class=\"hljs-string\">'You clicked cancel button.'</span>);\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dialog/demos/extends/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"继承弹窗","order":3},"catalogs":[],"contents":"在实际应用中，弹窗的逻辑一般都很复杂，通过继承，我们可以控制弹窗的各个细节，例如：点击确定时进行表单验证，发送请求，延迟关闭等等。将这些业务逻辑封装在单独的模块中，是推荐的做法。","codes":[{"language":"vdt","content":"<t:parent>\n    <b:body>\n        Hello\n    </b:body>\n</t:parent>","file":"dialog.vdt"},{"language":"js","content":"import Dialog from 'kpc/components/dialog';\nimport template from './dialog.vdt';\n\nexport default class extends Dialog {\n    @Intact.template()\n    static template = template;\n\n    defaults() {\n        return {...super.defaults(), title: 'Extends Dialog'};\n    }\n\n    ok() {\n        this.showLoading();\n        setTimeout(() => {\n            this.close();\n            this.trigger(\"ok\", 'test');\n        }, 2000);\n    }\n}","file":"dialog.js"},{"language":"vdt","content":"import Button from 'kpc/components/button';\n\n<Button type=\"primary\" ev-click={{ self.showDialog }}>Show Dialog</Button>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nimport Dialog from './dialog';\nimport Message from 'kpc/components/message';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n\n    showDialog() {\n        const dialog = new Dialog();\n        dialog.show();\n        dialog.on('ok', (data) => {\n            Message.info(`data from dialog: ${data}`);\n        });\n    }\n}"}],"index":24,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\">&lt;t:parent&gt;\n    <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">b:body</span>&gt;</span>\n        Hello\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">b:body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">t:parent</span>&gt;</span></span></code></pre>","file":"dialog.vdt"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dialog'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./dialog.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Dialog</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    defaults() {\n        <span class=\"hljs-keyword\">return</span> {...super.defaults(), <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Extends Dialog'</span>};\n    }\n\n    ok() {\n        <span class=\"hljs-keyword\">this</span>.showLoading();\n        setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n            <span class=\"hljs-keyword\">this</span>.close();\n            <span class=\"hljs-keyword\">this</span>.trigger(<span class=\"hljs-string\">\"ok\"</span>, <span class=\"hljs-string\">'test'</span>);\n        }, <span class=\"hljs-number\">2000</span>);\n    }\n}</code></pre>","file":"dialog.js"},{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span> <span class=\"hljs-attr\">ev-click</span>=<span class=\"hljs-string\">{{</span> <span class=\"hljs-attr\">self.showDialog</span> }}&gt;</span>Show Dialog<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">import</span> Dialog <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./dialog'</span>;\n<span class=\"hljs-keyword\">import</span> Message <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/message'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n\n    showDialog() {\n        <span class=\"hljs-keyword\">const</span> dialog = <span class=\"hljs-keyword\">new</span> Dialog();\n        dialog.show();\n        dialog.on(<span class=\"hljs-string\">'ok'</span>, (data) =&gt; {\n            Message.info(<span class=\"hljs-string\">`data from dialog: <span class=\"hljs-subst\">${data}</span>`</span>);\n        });\n    }\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基础用法","order":0},"catalogs":[],"contents":"一个完整的菜单需要用到<code>Dropdown</code>，<code>DropdownMenu</code>和<code>DropdownItem</code>三个组件。<code>Dropdown</code>会将第一个子元素作为触发器，第二个元素为菜单<code>DropdownMenu</code>。<blockquote>\n<code>Dropdown</code>会返回两个元素（触发器和菜单），而不是将它们包裹起来，作为一个元素返回所以不要将它作为模板的顶级元素，例如本例中，用<code>&lt;div&gt;</code>将之包裹起来才能作为模板元素返回。</blockquote>\n","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown>\n        <Button type=\"primary\">\n            hover <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":26,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            hover <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/disabled/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"禁用菜单（项）","order":3},"catalogs":[],"contents":"通过给<code>Dropdown</code>和<code>DropdownItem</code>添加<code>disabled</code>属性，可以分别禁用菜单和菜单项。","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown disabled>\n        <Button type=\"primary\">\n            disabled <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown>\n        <Button type=\"primary\">\n            disabled item<i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem disabled>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":27,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            disabled <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            disabled item<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span> <span class=\"hljs-attr\">disabled</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/nested/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"嵌套菜单","order":4},"catalogs":[],"contents":"<code>Dropdown</code>可以嵌套使用，实现级联菜单。子菜单需要指定展示的位置<code>position</code>。我们还可以通过<code>trigger</code>单独子菜单触发方式。","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown>\n        <Button type=\"primary\">\n            hover <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n            <Dropdown position={{ {my: 'left top', at: 'right top'} }}>\n                <DropdownItem>\n                    <span class=\"c-middle\" style=\"margin-right: 10px\">hover</span>\n                    <i class=\"c-middle ion-ios-arrow-right\"></i>\n                </DropdownItem>\n                <DropdownMenu>\n                    <Dropdown position={{ {my: 'left top', at: 'right top'} }}>\n                        <DropdownItem>\n                            <span class=\"c-middle\" style=\"margin-right: 10px\">hover</span>\n                            <i class=\"c-middle ion-ios-arrow-right\"></i>\n                        </DropdownItem>\n                        <DropdownMenu>\n                            <DropdownItem>item 1</DropdownItem>\n                            <DropdownItem>item 2</DropdownItem>\n                        </DropdownMenu>\n                    </Dropdown>\n                    <DropdownItem>item 1</DropdownItem>\n                </DropdownMenu>\n            </Dropdown>\n            <Dropdown trigger=\"click\" position={{ {my: 'left top', at: 'right top'} }}>\n                <DropdownItem>\n                    <span class=\"c-middle\" style=\"margin-right: 10px\">click</span>\n                    <i class=\"c-middle ion-ios-arrow-right\"></i>\n                </DropdownItem>\n                <DropdownMenu>\n                    <Dropdown trigger=\"click\" position={{ {my: 'left top', at: 'right top'} }}>\n                        <DropdownItem>\n                            <span class=\"c-middle\" style=\"margin-right: 10px\">click</span>\n                            <i class=\"c-middle ion-ios-arrow-right\"></i>\n                        </DropdownItem>\n                        <DropdownMenu>\n                            <DropdownItem>item 1</DropdownItem>\n                            <DropdownItem>item 2</DropdownItem>\n                        </DropdownMenu>\n                    </Dropdown>\n                    <DropdownItem>item 1</DropdownItem>\n                </DropdownMenu>\n            </Dropdown>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".ion-ios-arrow-right\n    float right\n    &:before\n        font-size inherit"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":28,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            hover <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>hover<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>hover<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>click<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"margin-right: 10px\"</span>&gt;</span>click<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"c-middle ion-ios-arrow-right\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n                    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.ion-ios-arrow-right</span>\n    <span class=\"hljs-attribute\">float</span> right\n    &amp;:before\n        <span class=\"hljs-attribute\">font-size</span> inherit</code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/position/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"菜单位置","order":2},"catalogs":[],"contents":"通过<code>position</code>属性，可以定义菜单相对触发器的位置。位置对象中<code>my</code>指菜单，<code>at</code>指触发器","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown position={{ {my: 'left top', at: 'left bottom+5'} }}>\n        <Button type=\"primary\">\n            left <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown position={{ {my: 'right top', at: 'right bottom+5'} }}>\n        <Button type=\"primary\">\n            right <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown position={{ {my: 'center bottom-5', at: 'center top'} }}>\n        <Button type=\"primary\">\n            top center <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":29,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">left</span> <span class=\"hljs-attr\">bottom</span>+<span class=\"hljs-attr\">5</span>'} }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            left <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">top</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">right</span> <span class=\"hljs-attr\">bottom</span>+<span class=\"hljs-attr\">5</span>'} }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            right <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">position</span>=<span class=\"hljs-string\">{{</span> {<span class=\"hljs-attr\">my:</span> '<span class=\"hljs-attr\">center</span> <span class=\"hljs-attr\">bottom-5</span>', <span class=\"hljs-attr\">at:</span> '<span class=\"hljs-attr\">center</span> <span class=\"hljs-attr\">top</span>'} }}&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            top center <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/dropdown/demos/trigger/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"触发方式","order":0},"catalogs":[],"contents":"<code>Dropdown</code>提供了两种触发方式来弹窗菜单，<code>hover</code>悬停触发（默认），<code>click</code>点击触发。通过<code>trigger</code>属性来指定它们。","codes":[{"language":"vdt","content":"import {Dropdown, DropdownMenu, DropdownItem} from 'kpc/components/dropdown';\nimport Button from 'kpc/components/button';\n\n<div>\n    <Dropdown>\n        <Button type=\"primary\">\n            hover <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n\n    <Dropdown trigger=\"click\">\n        <Button type=\"primary\">\n            click <i class=\"k-icon ion-arrow-down-b\"></i>\n        </Button>\n        <DropdownMenu>\n            <DropdownItem>item 1</DropdownItem>\n            <DropdownItem>item 2</DropdownItem>\n            <DropdownItem>item 3</DropdownItem>\n        </DropdownMenu>\n    </Dropdown>\n</div>"},{"language":"styl","content":".k-btn\n    margin-right 20px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":30,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> {Dropdown, DropdownMenu, DropdownItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/dropdown'</span>;\n<span class=\"hljs-keyword\">import</span> Button <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/button'</span>;\n\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            hover <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Dropdown</span> <span class=\"hljs-attr\">trigger</span>=<span class=\"hljs-string\">\"click\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>\n            click <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">i</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"k-icon ion-arrow-down-b\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">i</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">DropdownItem</span>&gt;</span>item 3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownItem</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">DropdownMenu</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Dropdown</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span></code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-btn</span>\n    <span class=\"hljs-attribute\">margin-right</span> <span class=\"hljs-number\">20px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/components/pagination/demos/basic/index.json":
/***/ (function(module, exports) {

module.exports = {"setting":{"title":"基本用法","order":0},"catalogs":[],"contents":"<code>Pagination</code> size用法：mini，small，default","codes":[{"language":"vdt","content":"import Pagination from 'kpc/components/pagination';\n\n<div>\n    <Pagination total={{ 201 }} current={{ 2 }} showGoto />\n    <Pagination total={{ 201 }} current={{ 2 }} size=\"small\" />\n    <Pagination total={{ 201 }} current={{ 2 }} size=\"mini\" />\n</div>"},{"language":"styl","content":".k-pagination\n    margin 30px 30px"},{"language":"js","content":"import Intact from 'intact';\nimport template from './index.vdt';\nimport './index.styl'; \n\nexport default class extends Intact {\n    @Intact.template()\n    static template = template;\n}"}],"index":32,"highlighted":[{"language":"vdt","content":"<pre><code class=\"hljs jsx\"><span class=\"hljs-keyword\">import</span> Pagination <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'kpc/components/pagination'</span>;\n\n&lt;div&gt;\n    &lt;Pagination total={{ 201 }} current={{ 2 }} showGoto /&gt;\n    &lt;Pagination total={{ 201 }} current={{ 2 }} size=\"small\" /&gt;\n    &lt;Pagination total={{ 201 }} current={{ 2 }} size=\"mini\" /&gt;\n&lt;/div&gt;</code></pre>"},{"language":"styl","content":"<pre><code class=\"hljs styl\"><span class=\"hljs-selector-class\">.k-pagination</span>\n    <span class=\"hljs-attribute\">margin</span> <span class=\"hljs-number\">30px</span> <span class=\"hljs-number\">30px</span></code></pre>"},{"language":"js","content":"<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> Intact <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'intact'</span>;\n<span class=\"hljs-keyword\">import</span> template <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./index.vdt'</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">'./index.styl'</span>; \n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Intact</span> </span>{\n    @Intact.template()\n    <span class=\"hljs-keyword\">static</span> template = template;\n}</code></pre>"}]}

/***/ }),

/***/ "./site/src/components/article/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./site/src/components/article/index.vdt");

var _index2 = _interopRequireDefault(_index);

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
}(_intact2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/src/components/article/index.vdt":
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

            return h('div', null, [function () {
                        try {
                                    return [self.get('demos').length][0];
                        } catch (e) {
                                    _e(e);
                        }
            }.call(this) ? h('div', null, [h('h1', null, '示例'), '\n        ', function () {
                        var _this = this;

                        try {
                                    return [self.get('demos').map(function (Demo) {
                                                return h('div', null, [h('div', null, h(Demo.default, { 'children': null, '_context': _this }), 'example-opera'), h('div', null, [h('div', null, function () {
                                                            try {
                                                                        return [Demo.data.setting.title][0];
                                                            } catch (e) {
                                                                        _e(e);
                                                            }
                                                }.call(_this), 'title'), h('div', { 'innerHTML': function () {
                                                                        try {
                                                                                    return [Demo.data.contents][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this) }, null, 'desc')], 'example-desc'), h('div', null, [h(_tabs.Tabs, { 'children': _Vdt.utils.map(function () {
                                                                        try {
                                                                                    return [Demo.data.highlighted][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this), function (value, key) {
                                                                        return h(_tabs.Tab, { 'value': function () {
                                                                                                try {
                                                                                                            return [value.file ? value.file : 'index.' + value.language][0];
                                                                                                } catch (e) {
                                                                                                            _e(e);
                                                                                                }
                                                                                    }.call(this), 'children': ['\n                            ', function () {
                                                                                                try {
                                                                                                            return [value.file ? value.file : 'index.' + value.language][0];
                                                                                                } catch (e) {
                                                                                                            _e(e);
                                                                                                }
                                                                                    }.call(this), '\n                        '], '_context': this });
                                                            }, _this), '_context': _this, value: _getModel(self, function () {
                                                                        try {
                                                                                    return ['file' + Demo.data.index][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this)), 'ev-$change:value': function ev$changeValue(__c, __n) {
                                                                        _setModel(self, function () {
                                                                                    try {
                                                                                                return ['file' + Demo.data.index][0];
                                                                                    } catch (e) {
                                                                                                _e(e);
                                                                                    }
                                                                        }.call(this), __n);
                                                            } }), h('div', { 'innerHTML': function () {
                                                                        try {
                                                                                    return [(Demo.data.highlighted.find(function (item) {
                                                                                                var file = item.file ? item.file : 'index.' + item.language;
                                                                                                return file === self.get('file' + Demo.data.index);
                                                                                    }) || {}).content][0];
                                                                        } catch (e) {
                                                                                    _e(e);
                                                                        }
                                                            }.call(_this) }, null, 'code')], 'example-code')], _className(function () {
                                                            try {
                                                                        return ['example index-' + Demo.data.index][0];
                                                            } catch (e) {
                                                                        _e(e);
                                                            }
                                                }.call(_this)));
                                    })][0];
                        } catch (e) {
                                    _e(e);
                        }
            }.call(this), '\n    '], null, 'demos') : undefined, h('div', { 'innerHTML': function () {
                                    try {
                                                return [self.get('contents')][0];
                                    } catch (e) {
                                                _e(e);
                                    }
                        }.call(this) }, null, 'api', 'contents')], 'contents');
};

var _tabs = __webpack_require__("./components/tabs/index.js");

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrYm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXguc3R5bD8wOWI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXguc3R5bD8yY2QzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kaWFsb2cvaW5kZXguc3R5bD8wNjg5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsPzA3YmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaXRlbS52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kcm9wZG93bi9tZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ncmlkL2NvbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQvY29sLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ncmlkL2luZGV4LnN0eWw/NmI5ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQvcm93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ3JpZC9yb3cudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ3JpZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bD8yM2UzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXguc3R5bD8xZmMzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVzc2FnZS9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb3ZlV3JhcHBlci9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njcm9sbFNlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njcm9sbFNlbGVjdC9pbmRleC5zdHlsPzVhZjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zY3JvbGxTZWxlY3QvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYnMvaW5kZXguc3R5bD9hMjE2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFicy9pbmRleC52ZHQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzL3RhYi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYnMvdGFiLnZkdCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b29sdGlwL2luZGV4LnN0eWw/NjM3YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXgudmR0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RhdGVwaWNrZXIvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dyaWQvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zY3JvbGxTZWxlY3QvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYnMvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguc3R5bCIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vcy9iYXNpYy9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvYmFzaWMvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2Rpc2FibGVkL2luZGV4Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9ncm91cC9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvaWNvbi9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvbG9hZGluZy9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3Mvc2l6ZS9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvdGFnTmFtZS9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9ncm91cC9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy92YWx1ZS9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvY2xlYXJhYmxlL2luZGV4Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGF0ZXRpbWUvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9kaXNhYmxlZERhdGUvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9tYXhNaW4vaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9tdWx0aXBsZS9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmFzaWMvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2Jsb2NrL2luZGV4Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9kZW1vcy9ldmVudHMvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2V4dGVuZHMvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvYmFzaWMvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvZGlzYWJsZWQvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3Bvc2l0aW9uL2luZGV4Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL3RyaWdnZXIvaW5kZXguanNvbiIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5qc29uIiwid2VicGFjazovLy8uL3NpdGUvc3JjL2NvbXBvbmVudHMvYXJ0aWNsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9jb21wb25lbnRzL2FydGljbGUvaW5kZXgudmR0Il0sIm5hbWVzIjpbImlzQXJyYXkiLCJWZHQiLCJ1dGlscyIsIkNoZWNrYm94IiwiZGlzYWJsZWQiLCJ2YWx1ZSIsInRydWVWYWx1ZSIsImZhbHNlVmFsdWUiLCJnZXQiLCJpc0NoZWNrZWQiLCJzbGljZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInNldCIsInByb3BUeXBlcyIsIkJvb2xlYW4iLCJvYmoiLCJfVmR0IiwiYmxvY2tzIiwiJGNhbGxlZSIsImgiLCJtaXNzIiwiaGMiLCJodSIsIndpZGdldHMiLCJfYmxvY2tzIiwiX19ibG9ja3MiLCJfX3UiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJjaGlsZHJlbiIsInN0eWxlIiwicmVmIiwia2V5IiwicmVzdCIsImNsYXNzTmFtZU9iaiIsImUiLCJjYWxsIiwiY2hlY2tlZCIsIl9fZSIsInVuZGVmaW5lZCIsIkRhdGVwaWNrZXIiLCJ0ZW1wbGF0ZSIsImNsZWFyYWJsZSIsIm1heERhdGUiLCJtaW5EYXRlIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZERhdGUiLCJkYXRlIiwibXVsdGlwbGUiLCJzaXplIiwidHlwZSIsIl9zaG93RGF0ZSIsIl9ub3ciLCJEYXRlIiwiX2lzU2hvd1llYXJQaWNrZXIiLCJfaXNTZWxlY3RUaW1lIiwiZ2V0RGF0ZVN0cmluZyIsInJlZnMiLCJjYWxlbmRhciIsImhpZGUiLCJfcmF3RXZlbnQiLCJfZHJvcGRvd24iLCJ2YWx1ZXMiLCJBcnJheSIsInB1c2giLCJfZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsIl90aW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImEiLCJiIiwiYVllYXIiLCJiWWVhciIsImFNb250aCIsImJNb250aCIsImFEYXkiLCJiRGF5IiwiaXNMVCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFJlbGF0aXZlTW9udGgiLCJzZXRSZWxhdGl2ZVllYXIiLCJtb250aCIsImdldFNob3dEYXRlIiwic2V0TW9udGgiLCJ5ZWFyIiwic2V0RnVsbFllYXIiLCJjIiwic2V0WWVhciIsImxlbmd0aCIsInYiLCJ2YWx1ZURhdGUiLCJuYW1lIiwic2hvd0RhdGUiLCJteSIsImF0Iiwib25IaWRlIiwib25CZWZvcmVTaG93Iiwib25DbGVhciIsInN1ZmZpeCIsImNvbnRlbnQiLCJwcmV2WWVhciIsInByZXZNb250aCIsInNob3dZZWFyUGlja2VyIiwibmV4dFllYXIiLCJuZXh0TW9udGgiLCJtYXAiLCJyZXQiLCJzdGFydCIsInNldERhdGUiLCJzdGFydFdlZWtkYXkiLCJnZXREYXkiLCJpIiwiX21vbnRoIiwiaXNHVCIsInNlbGVjdCIsImJpbmQiLCJmaW5kIiwiaXNFcXVhbCIsInJlc3VsdCIsIm9uQ2hhbmdlWWVhciIsImxhYmVsIiwib25DaGFuZ2VNb250aCIsImNhbmNlbCIsIm9uQ2hhbmdlVGltZSIsImFwcGVuZCIsIkRpYWxvZyIsInRpdGxlIiwibG9hZGluZyIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJfZHJhZ2dpbmciLCJvbiIsImlzU2hvdyIsIl9jZW50ZXIiLCJwYXJlbnRWTm9kZSIsIl91c2VBc0NvbXBvbmVudCIsImxhc3RWTm9kZSIsIm5leHRWTm9kZSIsIndpbmRvdyIsIl9fZGlhbG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2VzY0Nsb3NlIiwiY2xvc2UiLCJ0cmlnZ2VyIiwicmVuZGVyZWQiLCJzaG93IiwiaW5pdCIsIm1vdW50IiwiaW5pdGVkIiwia2V5Q29kZSIsImRlc3Ryb3llZCIsInZkdCIsInZOb2RlIiwiXyRkZXN0cm95IiwibW91bnRlZCIsImRpYWxvZyIsIndoaWNoIiwiX3giLCJvZmZzZXRMZWZ0IiwiY2xpZW50WCIsIl95Iiwib2Zmc2V0VG9wIiwiY2xpZW50WSIsIl93aWR0aCIsIm9mZnNldFdpZHRoIiwiX2hlaWdodCIsIm9mZnNldEhlaWdodCIsIl9tb3ZlIiwiX2RyYWdFbmQiLCJib2R5IiwibGVmdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzY3JvbGxXaWR0aCIsInRvcCIsInNjcm9sbEhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiX2xlYXZlRW5kIiwiX2RyYWdTdGFydCIsImhlYWRlciIsImZvb3RlciIsIm9rIiwiJGVsZW1lbnQiLCJkb20iLCJEcm9wZG93biIsIl9zYXZlT3JpZ2luYWxFdmVudHMiLCJvcmlnaW5Qcm9wcyIsInByb3BzIiwiX2hhc1NhdmVkIiwiX2V2Q2xpY2siLCJfZXZNb3VzZUVudGVyIiwiX2V2TW91c2VMZWF2ZSIsInNpbGVudCIsImRyb3Bkb3duIiwiZm4iLCJpc0ZvY3VzIiwibWVudSIsImZvY3VzSXRlbUJ5SW5kZXgiLCJpbW1lZGlhdGVseSIsIldyYXBwZXIiLCJpblZ1ZSIsInBvc2l0aW9uIiwiVnVlV3JhcHBlciIsIl9XcmFwcGVyIiwiZnVuY3Rpb25hbFdyYXBwZXIiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJoaWRlT25TZWxlY3QiLCJfaXNGb2N1cyIsImFuY2VzdG9yIiwiX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSIsIml0ZW1zIiwidGFnIiwiZm9jdXNJdGVtIiwiX2lzU3ViTWVudSIsImlzRmlyc3QiLCJfb25DbGljayIsIl9vbk1vdXNlRW50ZXIiLCJfb25Nb3VzZUxlYXZlIiwic3ViRHJvcGRvd25zIiwiZm9jdXNJbmRleCIsImxvY2tlZCIsIl9hZGREb2N1bWVudEV2ZW50cyIsIl9yZW1vdmVEb2N1bWVudEV2ZW50cyIsIl9vbkRvY3VtZW50Q2xpY2siLCJfb25LZXlkb3duIiwiX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJvZiIsInRhcmdldCIsImNvbnRhaW5zIiwiX2lzQ2xpY2tTdWJNZW51IiwiX2ZvY3VzTmV4dEl0ZW0iLCJfZm9jdXNQcmV2SXRlbSIsIl9zaG93U3ViTWVudSIsIl9oaWRlU3ViTWVudSIsIl9zZWxlY3RJdGVtIiwicHJldmVudERlZmF1bHQiLCJkaXJlY3Rpb24iLCJvbGRJbmRleCIsImZpeEluZGV4IiwidW5Gb2N1cyIsImZvY3VzIiwic2hvd01lbnVBbmRGb2N1cyIsImhpZGVNZW51IiwiaXRlbSIsInN1Yk1lbnVzIiwic3ViTWVudSIsImV2ZW50cyIsIkNvbCIsInNwYW4iLCJvZmZzZXQiLCJndXR0ZXIiLCJndXR0ZXJTdHlsZSIsInJlcXVpcmUiLCJoYXNHdXR0ZXIiLCJSb3ciLCJwcm9wIiwibWFyZ2luIiwic2lnbiIsInRlc3QiLCJJbnB1dCIsImRlZmF1bHRWYWx1ZSIsInJlYWRvbmx5Iiwicm93cyIsInNwZWxsY2hlY2siLCJhdXRvV2lkdGgiLCJmbHVpZCIsIl9hZGp1c3RXaWR0aCIsIndpZHRoIiwiZmFrZSIsImlucHV0IiwiU3RyaW5nIiwicHJlcGVuZCIsInByZWZpeCIsInJlZHVjZSIsIm1lbW8iLCJfcHJveHlFdmVudCIsIndyYXBwZXJFdmVudHMiLCJfb25JbnB1dCIsImNsZWFyIiwibWVzc2FnZXMiLCJpZCIsIk1lc3NhZ2UiLCJkdXJhdGlvbiIsImNsb3NhYmxlIiwiX2lzSW5zdGFuY2UiLCJhcmdzIiwicGFyZW50RG9tIiwiY3JlYXRlQ29tbWVudCIsIk1lc3NhZ2VBbmltYXRlIiwibm90aWNlIiwiZGVsZXRlIiwiTWVzc2FnZXMiLCJfbW91bnQiLCJfaXNWdWUiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwidXBkYXRlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiTW92ZVdyYXBwZXIiLCJhdXRvRGVzdHJveSIsImNvbnRhaW5lciIsIlR5cGVzIiwiQ29tcG9uZW50Q2xhc3NPckluc3RhbmNlIiwicmVtb3ZlIiwiX2Rlc3Ryb3kiLCJvZmYiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhYnMiLCJySG9yaXpvbnRhbCIsInJWZXJ0aWNhbCIsInJPZmZzZXQiLCJyUG9zaXRpb24iLCJyUGVyY2VudCIsImVsZW0iLCJvcHRpb25zIiwiZ2V0RGltZW5zaW9ucyIsInRhcmdldFdpZHRoIiwidGFyZ2V0SGVpZ2h0IiwiaGVpZ2h0IiwidGFyZ2V0T2Zmc2V0IiwiYmFzZVBvc2l0aW9uIiwiY29sbGlzaW9uIiwic3BsaXQiLCJvZmZzZXRzIiwiZm9yRWFjaCIsInBvcyIsImNvbmNhdCIsImhvcml6b250YWxPZmZzZXQiLCJleGVjIiwidmVydGljYWxPZmZzZXQiLCJhdE9mZnNldCIsImdldE9mZnNldHMiLCJlbGVtV2lkdGgiLCJlbGVtSGVpZ2h0IiwibXlPZmZzZXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxlbVBvc2l0aW9uIiwidXNpbmciLCJyaWdodCIsImJvdHRvbSIsImZlZWRiYWNrIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiaW1wb3J0YW50Iiwibm9kZVR5cGUiLCJkIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsInBhZ2VZIiwicGFnZVgiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwicGFyc2VGbG9hdCIsIlNjcm9sbFNlbGVjdCIsImNvdW50IiwiX2xpc3QiLCJfdHJhbnNsYXRlIiwiX21hcmdpblRvcCIsIl9zZXRMaXN0IiwidG90YWxIZWlnaHQiLCJ3cmFwcGVyIiwiX2RlbHRhWSIsImZsb29yIiwiaGFsZiIsIml0ZW1IZWlnaHQiLCJfaW5pdFkiLCJfaXRlbUhlaWdodCIsImRlbHRhWSIsIm9mZnNldEluZGV4IiwiX3NldEJ5UmVsYXRpdmVJbmRleCIsImlzU2V0VHJhbnNsYXRlIiwiZmluZEluZGV4IiwibCIsInRyYW5zZm9ybSIsIm1hcmdpblRvcCIsIl9vbldoZWVsIiwiX3NlbGVjdCIsIlRhYnMiLCJocmVmIiwiVGFiIiwiX2NoYW5nZVRhYiIsInRleHQiLCJfdmFsdWUiLCJfcGFyZW50IiwiVG9vbHRpcCIsIlRvb2x0aXBDb250ZW50IiwiSW50YWN0IiwiY2FuSG92ZXIiLCJzaG93QXJyb3ciLCJwb3NpdG9uIiwidHJhbnNpdGlvbiIsIl9mZWVkYmFjayIsIl9hZGREb2N1bWVudENsaWNrIiwiX3JlbW92ZURvY3VtZW50Q2xpY2siLCJfY29udGV4dCIsImNvbnRlbnRWTm9kZSIsIkRlbW8iLCJkZWZhdWx0Iiwic2V0dGluZyIsImNvbnRlbnRzIiwiaGlnaGxpZ2h0ZWQiLCJmaWxlIiwibGFuZ3VhZ2UiLCJfX2MiLCJfX24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU9BLE8sR0FBVyxpQkFBT0MsR0FBUCxDQUFXQyxLLENBQXRCRixPO0lBRWNHLFE7Ozs7Ozs7Ozs7O21DQUdOO0FBQ1AsbUJBQU87QUFDSEMsMEJBQVUsS0FEUDtBQUVIQyx1QkFBTyxLQUZKO0FBR0hDLDJCQUFXLElBSFI7QUFJSEMsNEJBQVk7QUFKVCxhQUFQO0FBTUg7Ozs7O0FBTUQ7bUNBQ1c7QUFDUCxnQkFBSUYsUUFBUSxLQUFLRyxHQUFMLENBQVMsT0FBVCxDQUFaO0FBQ0EsZ0JBQU1GLFlBQVksS0FBS0UsR0FBTCxDQUFTLFdBQVQsQ0FBbEI7QUFDQSxnQkFBSSxLQUFLQyxTQUFMLEVBQUosRUFBc0I7QUFDbEIsb0JBQUlULFFBQVFLLEtBQVIsQ0FBSixFQUFvQjtBQUNoQkEsNEJBQVFBLE1BQU1LLEtBQU4sQ0FBWSxDQUFaLENBQVI7QUFDQSx3QkFBTUMsUUFBUU4sTUFBTU8sT0FBTixDQUFjTixTQUFkLENBQWQ7QUFDQUQsMEJBQU1RLE1BQU4sQ0FBYUYsS0FBYixFQUFvQixDQUFwQjtBQUNBLHlCQUFLRyxHQUFMLENBQVMsT0FBVCxFQUFrQlQsS0FBbEI7QUFDSCxpQkFMRCxNQUtPO0FBQ0gseUJBQUtTLEdBQUwsQ0FBUyxPQUFULEVBQWtCLEtBQUtOLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQ0g7QUFDSjtBQUNKOzs7b0NBRVc7QUFDUixnQkFBTUgsUUFBUSxLQUFLRyxHQUFMLENBQVMsT0FBVCxDQUFkO0FBQ0EsZ0JBQU1GLFlBQVksS0FBS0Us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LE1BSGtOLENBRjhHLENBQWYsRUFLdlMsY0FMdVMsQ0FBaFcsQ0FBZixFQUswRjNCLFdBQVcsWUFBVztBQUFDLGdFQUFJO0FBQUMsK0VBQU8sb0JBQWtCNFosS0FBSzdZLElBQUwsQ0FBVXBDLEtBQTVCLEVBQXNDLENBQXRDLENBQVA7QUFBZ0QsNkRBQXJELENBQXNELE9BQU0rQyxDQUFOLEVBQVM7QUFBQzVCLDJFQUFHNEIsQ0FBSDtBQUFNO0FBQUMsaURBQW5GLENBQW9GQyxJQUFwRixPQUFYLENBTDFGLENBQVA7QUFNSCxxQ0FQaUwsQ0FBRCxFQU81SyxDQVA0SyxDQUFQO0FBT2xLLHlCQVA2SixDQU81SixPQUFNRCxDQUFOLEVBQVM7QUFBQzVCLHVDQUFHNEIsQ0FBSDtBQUFNO0FBQUMsYUFQK0gsQ0FPOUhDLElBUDhILENBT3pILElBUHlILENBQXBDLEVBTzlFLFFBUDhFLENBQWYsRUFPcEQsSUFQb0QsRUFPOUMsT0FQOEMsQ0FBdkYsR0FPb0RHLFNBUHJELEVBT2dFekMsRUFBRSxLQUFGLEVBQVMsRUFBQyxhQUFhLFlBQVc7QUFBQyx3Q0FBSTtBQUFDLHVEQUFPLENBQUN5QixLQUFLdEMsR0FBTCxDQUFTLFVBQVQsQ0FBRCxFQUF3QixDQUF4QixDQUFQO0FBQWtDLHFDQUF2QyxDQUF3QyxPQUFNa0QsQ0FBTixFQUFTO0FBQUM1QixtREFBRzRCLENBQUg7QUFBTTtBQUFDLHlCQUFyRSxDQUFzRUMsSUFBdEUsQ0FBMkUsSUFBM0UsQ0FBZCxFQUFULEVBQTBHLElBQTFHLEVBQWdILEtBQWhILEVBQXVILFVBQXZILENBUGhFLENBQWYsRUFPb04sVUFQcE4sQ0FBUDtBQVFDLEM7O0FBdEJEIiwiZmlsZSI6InN0YXRpYy9jaHVuay8yYWYwZDQ1Y2Y1MGVjMDI3M2U5Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmNvbnN0IHtpc0FycmF5fSA9IEludGFjdC5WZHQudXRpbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW50YWN0IHtcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICB0cnVlVmFsdWU6IHRydWUsXG4gICAgICAgICAgICBmYWxzZVZhbHVlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWUgdG8gZmFsc2VWYWx1ZSB3aGVuIGRlc3Ryb3lcbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHRydWVWYWx1ZSA9IHRoaXMuZ2V0KCd0cnVlVmFsdWUnKTtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGVja2VkKCkpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5pbmRleE9mKHRydWVWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHRoaXMuZ2V0KCdmYWxzZVZhbHVlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNDaGVja2VkKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KCd2YWx1ZScpO1xuICAgICAgICBjb25zdCB0cnVlVmFsdWUgPSB0aGlzLmdldCgndHJ1ZVZhbHVlJyk7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IFxuICAgICAgICAgICAgdmFsdWUuaW5kZXhPZih0cnVlVmFsdWUpID4gLTEgOiBcbiAgICAgICAgICAgIHZhbHVlID09PSB0cnVlVmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQge0NoZWNrYm94fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NoZWNrYm94L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9jaGVja2JveC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGZhbHNlVmFsdWUsIFxuICAgIGNoaWxkcmVuLCB2YWx1ZSwgdHJ1ZVZhbHVlLCBzdHlsZSxcbiAgICByZWYsIGtleSwgLi4ucmVzdFxufSA9IHNlbGYuZ2V0KCk7XG5cblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgICdrLWNoZWNrYm94JzogdHJ1ZSxcbiAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICdrLWNoZWNrZWQnOiBzZWxmLmlzQ2hlY2tlZCgpLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG59O1xuXG5yZXR1cm4gaCgnbGFiZWwnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbaCgnc3BhbicsIG51bGwsIGgoJ2lucHV0Jywgeyd0eXBlJzogJ2NoZWNrYm94JywgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlVmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Jlc3QgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgY2hlY2tlZDogX2RldGVjdENoZWNrYm94Q2hlY2tlZChzZWxmLCAndmFsdWUnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZVZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnZXYtY2hhbmdlJzogZnVuY3Rpb24oX19lKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zZXRDaGVja2JveE1vZGVsKHNlbGYsICd2YWx1ZScsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlVmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlVmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX19lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KSwgJ2std3JhcHBlcicpLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ3NwYW4nLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stdGV4dCcpIDogdW5kZWZpbmVkXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCB7c3RyUGFkfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVwaWNrZXIgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgbWF4RGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWluRGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5pel5pyfXCIsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZERhdGUoZGF0ZSkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsIC8vIGRhdGUgfCBkYXRldGltZVxuXG4gICAgICAgICAgICBfc2hvd0RhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9ub3c6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBfaXNTaG93WWVhclBpY2tlcjogZmFsc2UsXG4gICAgICAgICAgICBfaXNTZWxlY3RUaW1lOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdCh2YWx1ZSwgZSkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0RGF0ZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldCgndHlwZScpO1xuICAgICAgICBpZiAoIXRoaXMuZ2V0KCdtdWx0aXBsZScpKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2RhdGV0aW1lJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcy5jYWxlbmRhci5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUuX3Jhd0V2ZW50Ll9kcm9wZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoJ19pc1NlbGVjdFRpbWUnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGF0ZVN0cmluZyhkYXRlKSB7XG4gICAgICAgIGNvbnN0IF9kYXRlID0gW1xuICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgc3RyUGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLFxuICAgICAgICAgICAgc3RyUGFkKGRhdGUuZ2V0RGF0ZSgpLCAyKVxuICAgICAgICBdLmpvaW4oJy0nKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCd0eXBlJykgIT09ICdkYXRldGltZScpIHtcbiAgICAgICAgICAgIHJldHVybiBfZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBfdGltZSA9IFtcbiAgICAgICAgICAgIHN0clBhZChkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgICAgICAgICAgc3RyUGFkKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICAgICAgICAgIHN0clBhZChkYXRlLmdldFNlY29uZHMoKSwgMilcbiAgICAgICAgXS5qb2luKCc6Jyk7XG4gICAgICAgIHJldHVybiBgJHtfZGF0ZX0gJHtfdGltZX1gO1xuICAgIH1cblxuICAgIGlzRXF1YWwoYSwgYikge1xuICAgICAgICBpZiAoYSAmJiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5nZXRGdWxsWWVhcigpID09PSBiLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgICBhLmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICAgIGEuZ2V0RGF0ZSgpID09PSBiLmdldERhdGUoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0xUKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICAgICAgY29uc3QgYVllYXIgPSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBiWWVhciA9IGIuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGlmIChhWWVhciA8IGJZZWFyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFZZWFyID4gYlllYXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFNb250aCA9IGEuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGJNb250aCA9IGIuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGlmIChhTW9udGggPCBiTW9udGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYU1vbnRoID4gYk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhRGF5ID0gYS5nZXREYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBiRGF5ID0gYi5nZXREYXRlKCk7XG4gICAgICAgICAgICBpZiAoYURheSA8IGJEYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYURheSA+IGJEYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNHVChhLCBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTFQoYiwgYSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBvbkNsZWFyKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBwcmV2TW9udGgoKSB7XG4gICAgICAgIHRoaXMuc2V0UmVsYXRpdmVNb250aCgtMSk7XG4gICAgfVxuXG4gICAgbmV4dE1vbnRoKCkge1xuICAgICAgICB0aGlzLnNldFJlbGF0aXZlTW9udGgoMSk7XG4gICAgfVxuXG4gICAgcHJldlllYXIoKSB7XG4gICAgICAgIHRoaXMuc2V0UmVsYXRpdmVZZWFyKC0xKTtcbiAgICB9XG5cbiAgICBuZXh0WWVhcigpIHtcbiAgICAgICAgdGhpcy5zZXRSZWxhdGl2ZVllYXIoMSk7XG4gICAgfVxuXG4gICAgc2V0UmVsYXRpdmVNb250aChtb250aCkge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5nZXRTaG93RGF0ZSgpO1xuICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIG1vbnRoKTtcbiAgICAgICAgdGhpcy5zZXQoJ19zaG93RGF0ZScsIGRhdGUpO1xuICAgIH1cblxuICAgIHNldFJlbGF0aXZlWWVhcih5ZWFyKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldFNob3dEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgeWVhcik7XG4gICAgICAgIHRoaXMuc2V0KCdfc2hvd0RhdGUnLCBkYXRlKTtcbiAgICB9XG5cbiAgICBzZXRNb250aChtb250aCkge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5nZXRTaG93RGF0ZSgpO1xuICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICAgICAgdGhpcy5zZXQoJ19zaG93RGF0ZScsIGRhdGUpO1xuICAgIH1cblxuICAgIHNldFllYXIoeWVhcikge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5nZXRTaG93RGF0ZSgpO1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgICB0aGlzLnNldCgnX3Nob3dEYXRlJywgZGF0ZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VZZWFyKGMsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0WWVhcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VNb250aChjLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldE1vbnRoKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRTaG93RGF0ZSgpIHtcbiAgICAgICAgY29uc3Qge19zaG93RGF0ZSwgdmFsdWUsIF9ub3csIG11bHRpcGxlfSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IG11bHRpcGxlID8gdmFsdWUgfHwgW10gOiBbdmFsdWVdO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoX3Nob3dEYXRlIHx8IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gfHwgX25vdyk7XG4gICAgfVxuXG4gICAgb25IaWRlKCkge1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAnX3Nob3dEYXRlJzogdW5kZWZpbmVkLFxuICAgICAgICAgICAgJ19pc1Nob3dZZWFyUGlja2VyJzogZmFsc2UsXG4gICAgICAgICAgICAnX2lzU2VsZWN0VGltZSc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkJlZm9yZVNob3coKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfbm93JywgbmV3IERhdGUoKSk7XG4gICAgfVxuXG4gICAgc2hvd1llYXJQaWNrZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfaXNTaG93WWVhclBpY2tlcicsICF0aGlzLmdldCgnX2lzU2hvd1llYXJQaWNrZXInKSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VUaW1lKHR5cGUsIGMsIHYpIHtcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBfbm93fSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlRGF0ZSA9IG5ldyBEYXRlKHZhbHVlIHx8IF9ub3cpO1xuICAgICAgICB2YWx1ZURhdGVbJ3NldCcgKyB0eXBlXSh2KTtcbiAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy5nZXREYXRlU3RyaW5nKHZhbHVlRGF0ZSkpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMucmVmcy5jYWxlbmRhci5oaWRlKCk7XG4gICAgfVxuXG4gICAgY2FuY2VsKGUpIHtcbiAgICAgICAgZS5fcmF3RXZlbnQuX2Ryb3Bkb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXQoJ19pc1NlbGVjdFRpbWUnLCBmYWxzZSk7XG4gICAgfVxufVxuXG5leHBvcnQge0RhdGVwaWNrZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0JztpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7aW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vdG9vbHRpcCc7aW1wb3J0IFNjcm9sbFNlbGVjdCBmcm9tICcuLi9zY3JvbGxTZWxlY3QnO2ltcG9ydCB7Um93LCBDb2x9IGZyb20gJy4uL2dyaWQnO2ltcG9ydCB7cmFuZ2UsIHN0clBhZH0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cblxuXG5cblxuXG5jb25zdCB7XG4gICAgdmFsdWUsIGNsZWFyYWJsZSwgY2xhc3NOYW1lLCBzdHlsZSxcbiAgICBuYW1lLCBfc2hvd0RhdGUsIF9ub3csIG1heERhdGUsIG1pbkRhdGUsXG4gICAgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCBkaXNhYmxlZERhdGUsXG4gICAgbXVsdGlwbGUsIHNpemUsIF9pc1Nob3dZZWFyUGlja2VyLFxuICAgIF9pc1NlbGVjdFRpbWUsIHR5cGVcbn0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stZGF0ZXBpY2tlcic6IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxufVxuXG5jb25zdCB2YWx1ZXMgPSBtdWx0aXBsZSA/IHZhbHVlIHx8IFtdIDogW3ZhbHVlXTtcblxuY29uc3QgdmFsdWVEYXRlID0gbmV3IERhdGUodmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSB8fCBfbm93KTtcbmNvbnN0IHNob3dEYXRlID0gbmV3IERhdGUoX3Nob3dEYXRlIHx8IHZhbHVlRGF0ZSk7XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBoKFRvb2x0aXAsIHsnY2xhc3NOYW1lJzogJ2stZGF0ZXBpY2tlci1jb250ZW50JywgJ3Bvc2l0aW9uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tteTogJ2xlZnQgdG9wJywgYXQ6ICdsZWZ0IGJvdHRvbSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0cmlnZ2VyJzogJ2NsaWNrJywgJ3Nob3dBcnJvdyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmYWxzZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHJhbnNpdGlvbic6ICdkcm9wZG93bicsICdldi1oaWRlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25IaWRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1iZWZvcmVTaG93JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25CZWZvcmVTaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKElucHV0LCB7J3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdyZWFkb25seSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlcy5qb2luKCcsICcpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGVhcmFibGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1jbGVhcic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uQ2xlYXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGlzYWJsZWQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGlzYWJsZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3NpemUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2l6ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5zdWZmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gaCgnaScsIG51bGwsIG51bGwsICdpb24taW9zLWNhbGVuZGFyLW91dGxpbmUnKTt9KSAmJiAoX19ibG9ja3Muc3VmZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLnN1ZmZpeCA/IGJsb2Nrcy5zdWZmaXguY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnN1ZmZpeC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3Muc3VmZml4LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0pLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5jb250ZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshX2lzU2VsZWN0VGltZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIFtoKEJ1dHRvbiwgeydpY29uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdub25lJywgJ3NpemUnOiAnc21hbGwnLCAnY2xhc3NOYW1lJzogJ2stcHJldicsICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLnByZXZZZWFyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24taW9zLWFycm93LWxlZnQnKSwgaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWlvcy1hcnJvdy1sZWZ0JyldLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoQnV0dG9uLCB7J2ljb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0eXBlJzogJ25vbmUnLCAnc2l6ZSc6ICdzbWFsbCcsICdjbGFzc05hbWUnOiAnay1wcmV2JywgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYucHJldk1vbnRoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1pb3MtYXJyb3ctbGVmdCcpLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoJ3NwYW4nLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuc2hvd1llYXJQaWNrZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93RGF0ZS5nZXRGdWxsWWVhcigpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICflubQnXSwgJ2stdGV4dCcpLCBoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93RGF0ZS5nZXRNb250aCgpICsgMSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAn5pyIJ10sICdrLXRleHQnKV0sICdrLXRleHQtd3JhcHBlcicpLCBoKEJ1dHRvbiwgeydpY29uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdub25lJywgJ3NpemUnOiAnc21hbGwnLCAnY2xhc3NOYW1lJzogJ2stbmV4dCcsICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm5leHRZZWFyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFtoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24taW9zLWFycm93LXJpZ2h0JyksIGgoJ2knLCBudWxsLCBudWxsLCAnay1pY29uIGlvbi1pb3MtYXJyb3ctcmlnaHQnKV0sICdfY29udGV4dCc6IHRoaXN9KSwgaChCdXR0b24sIHsnaWNvbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0cnVlXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3R5cGUnOiAnbm9uZScsICdzaXplJzogJ3NtYWxsJywgJ2NsYXNzTmFtZSc6ICdrLW5leHQnLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5uZXh0TW9udGggXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogaCgnaScsIG51bGwsIG51bGwsICdrLWljb24gaW9uLWlvcy1hcnJvdy1yaWdodCcpLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnay1tb250aCBjLWNsZWFyZml4JyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshX2lzU2hvd1llYXJQaWNrZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIF9WZHQudXRpbHMubWFwKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbnJldHVybiBoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2std2Vla2RheScpO1xufSwgdGhpcyksICdrLXdlZWtkYXlzJykgOiB1bmRlZmluZWQsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFshX2lzU2hvd1llYXJQaWNrZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIFsnXFxuICAgICAgICAgICAgICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHNob3dEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gc3RhcnQuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LnNldERhdGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFdlZWtkYXkgPSBzdGFydC5nZXREYXkoKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydC5zZXREYXRlKDEgLSBzdGFydFdlZWtkYXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfZGF0ZSA9IHN0YXJ0LmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfbW9udGggPSBzdGFydC5nZXRNb250aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gc2VsZi5pc0dUKHN0YXJ0LCBuZXcgRGF0ZShtYXhEYXRlKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0xUKHN0YXJ0LCBuZXcgRGF0ZShtaW5EYXRlKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlLmNhbGwoc2VsZiwgc2VsZi5nZXREYXRlU3RyaW5nKHN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgoJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbIWRpc2FibGVkICYmIHNlbGYuc2VsZWN0LmJpbmQoc2VsZiwgbmV3IERhdGUoc3RhcnQpKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19kYXRlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImstZGF5XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrLW91dFwiOiBfbW9udGggIT09IG1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiay1hY3RpdmVcIjogdmFsdWVzLmZpbmQodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pc0VxdWFsKG5ldyBEYXRlKHZhbHVlKSwgc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiay10b2RheVwiOiBzZWxmLmlzRXF1YWwoX25vdywgc3RhcnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiay1kaXNhYmxlZFwiOiBkaXNhYmxlZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQuc2V0RGF0ZShzdGFydC5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmV0LnNsaWNlKDcgKiBpLCA3ICogKGkgKyAxKSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgICAgICAgICAnXSwgJ2stY2FsZW5kYXInKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19pc1Nob3dZZWFyUGlja2VyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKFJvdywgeydjbGFzc05hbWUnOiAnay15ZWFyLXBpY2tlcicsICdjaGlsZHJlbic6IFtoKENvbCwgeydzcGFuJzogJzEyJywgJ2NoaWxkcmVuJzogaChTY3JvbGxTZWxlY3QsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlKHZhbHVlIC0gNSwgdmFsdWUgKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93RGF0ZS5nZXRGdWxsWWVhcigpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25DaGFuZ2VZZWFyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKENvbCwgeydzcGFuJzogJzEyJywgJ2NoaWxkcmVuJzogaChTY3JvbGxTZWxlY3QsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyYW5nZSgwLCAxMSkubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2xhYmVsOiBgJHtpICsgMX3mnIhgLCB2YWx1ZTogaX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3dEYXRlLmdldE1vbnRoKCkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LSRjaGFuZ2U6dmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbkNoYW5nZU1vbnRoIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pIDogdW5kZWZpbmVkXSkgOiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgWydcXG4gICAgICAgICAgICAgICAgICAgICcsIGhjKCc8QnV0dG9uIHR5cGU9XFxcIm5vbmVcXFwiIHNpemU9XFxcInNtYWxsXFxcIiBjbGFzcz1cXFwiay1wcmV2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2LWNsaWNrPXt7IHNlbGYuY2FuY2VsLmJpbmQoc2VsZikgfX1cXG4gICAgICAgICAgICAgICAgICAgID7lj5bmtog8L0J1dHRvbj4nKSwgaCgnc3BhbicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jYW5jZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93RGF0ZS5nZXRGdWxsWWVhcigpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICflubQnXSwgJ2stdGV4dCcpLCBoKCdzcGFuJywgbnVsbCwgW2Z1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93RGF0ZS5nZXRNb250aCgpICsgMSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAn5pyIJ10sICdrLXRleHQnKV0sICdrLXRleHQtd3JhcHBlcicpLCAnXFxuICAgICAgICAgICAgICAgICAgICAnLCBoYygnPEJ1dHRvbiB0eXBlPVxcXCJub25lXFxcIiBzaXplPVxcXCJzbWFsbFxcXCIgY2xhc3M9XFxcImstbmV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBldi1jbGljaz17eyBzZWxmLmNvbmZpcm0uYmluZChzZWxmKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgPuehruiupDwvQnV0dG9uPicpXSwgJ2stbW9udGggYy1jbGVhcmZpeCcpLCBoKFJvdywgeydjaGlsZHJlbic6IFtoKENvbCwgeydzcGFuJzogJzgnLCAnY2hpbGRyZW4nOiBoKFNjcm9sbFNlbGVjdCwgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JhbmdlKDAsIDIzKS5tYXAodiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7bGFiZWw6IHN0clBhZCh2LCAyKSwgdmFsdWU6IHZ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZURhdGUuZ2V0SG91cnMoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uQ2hhbmdlVGltZS5iaW5kKHNlbGYsICdIb3VycycpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiAnOic7fSkgJiYgKF9fYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5hcHBlbmQgPyBibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5hcHBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcztcbn0uY2FsbCh0aGlzLCB7fSl9KSwgJ19jb250ZXh0JzogdGhpc30pLCBoKENvbCwgeydzcGFuJzogJzgnLCAnY2hpbGRyZW4nOiBoKFNjcm9sbFNlbGVjdCwgeydkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3JhbmdlKDAsIDU5KS5tYXAodiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7bGFiZWw6IHN0clBhZCh2LCAyKSwgdmFsdWU6IHZ9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZURhdGUuZ2V0TWludXRlcygpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi0kY2hhbmdlOnZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYub25DaGFuZ2VUaW1lLmJpbmQoc2VsZiwgJ01pbnV0ZXMnKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gJzonO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSksICdfY29udGV4dCc6IHRoaXN9KSwgaChDb2wsIHsnc3Bhbic6ICc4JywgJ2NoaWxkcmVuJzogaChTY3JvbGxTZWxlY3QsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyYW5nZSgwLCA1OSkubWFwKHYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2xhYmVsOiBzdHJQYWQodiwgMiksIHZhbHVlOiB2fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWVEYXRlLmdldFNlY29uZHMoKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9uQ2hhbmdlVGltZS5iaW5kKHNlbGYsICdTZWNvbmRzJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnay10aW1lLXBpY2tlcicsICd0aW1lJyk7fSkgJiYgKF9fYmxvY2tzLmNvbnRlbnQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuY29udGVudCA/IGJsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5jb250ZW50LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5jb250ZW50LmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzO1xufS5jYWxsKHRoaXMsIHt9KX0sIG51bGwsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydjYWxlbmRhciddID0gaX0pLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kYXRlcGlja2VyL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnLi4vbW92ZVdyYXBwZXIvcG9zaXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdmFsdWU6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgfTtcblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0IHwgc21hbGxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgb2tUZXh0OiAn56Gu6K6kJyxcbiAgICAgICAgICAgIGNhbmNlbFRleHQ6ICflj5bmtognLFxuXG4gICAgICAgICAgICBfZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgKGMsIGlzU2hvdykgPT4ge1xuICAgICAgICAgICAgaWYgKGlzU2hvdykgdGhpcy5fY2VudGVyKCk7XG4gICAgICAgIH0pOyBcbiAgICB9XG5cbiAgICBfY3JlYXRlKCkge1xuICAgICAgICAvLyB1c2UgYXMgY29tcG9uZW50XG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VBc0NvbXBvbmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbW91bnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgLy8gZm9yIGRlYnVnXG4gICAgICAgIHdpbmRvdy5fX2RpYWxvZyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fY2VudGVyKCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2VzY0Nsb3NlKTtcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoaWRlTG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ2xvYWRpbmcnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjYW5jZWwnLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvaygpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ29rJywgdGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCd2YWx1ZScpKSByZXR1cm47XG4gICAgICAgIC8vIHVzZSBhcyBjb21wb25lbnRcbiAgICAgICAgaWYgKHRoaXMuX3VzZUFzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ3ZhbHVlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXNlIGFzIGluc3RhbmNlXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7IFxuICAgICAgICAgICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgICAgIHNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbignJGluaXRlZCcsIHNob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2VzY0Nsb3NlKGUpIHtcbiAgICAgICAgLy8gRXNjXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgX2xlYXZlRW5kKCkge1xuICAgICAgICAvLyB1c2UgYXMgaW5zdGFuY2Ugb3IgdXNlIGFzIGNvbXBvbmVudCBidXQgaXQgaGFzIGJlIGRlc3Ryb3llZFxuICAgICAgICAvLyB0aGVuIHJlbW92ZSB0aGUgZWxlbWVudFxuICAgICAgICBpZiAoIXRoaXMuX3VzZUFzQ29tcG9uZW50IHx8IHRoaXMuX3VzZUFzQ29tcG9uZW50ICYmIHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLnZkdC52Tm9kZS5jaGlsZHJlbi5fJGRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jZW50ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3VudGVkIHx8ICF0aGlzLmdldCgndmFsdWUnKSkgcmV0dXJuO1xuICAgICAgICAvLyBtb3ZlIHRvIGNlbnRlclxuICAgICAgICBwb3NpdGlvbih0aGlzLmRpYWxvZyk7XG4gICAgfVxuXG4gICAgX2RyYWdTdGFydChlKSB7XG4gICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgIGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZXQoJ19kcmFnZ2luZycsIHRydWUpO1xuICAgICAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZztcbiAgICAgICAgdGhpcy5feCA9IGRpYWxvZy5vZmZzZXRMZWZ0IC0gZS5jbGllbnRYO1xuICAgICAgICB0aGlzLl95ID0gZGlhbG9nLm9mZnNldFRvcCAtIGUuY2xpZW50WTtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBkaWFsb2cub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGRpYWxvZy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kcmFnRW5kKTtcbiAgICB9XG5cbiAgICBfbW92ZShlKSB7XG4gICAgICAgIC8vIFRPRE87IGRyYWcgb3V0IG9mIHNjcmVlblxuICAgICAgICBpZiAodGhpcy5nZXQoJ19kcmFnZ2luZycpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZGlhbG9nLnN0eWxlO1xuICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5feCArIGUuY2xpZW50WCwgMCksXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoYm9keS5zY3JvbGxXaWR0aCAtIHRoaXMuX3dpZHRoLCAwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuX3kgKyBlLmNsaWVudFksIDApLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5faGVpZ2h0LCAwKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgICAgIHN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZHJhZ0VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdfZHJhZ2dpbmcnKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ19kcmFnZ2luZycsIGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3koLi4uYXJncykge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fZXNjQ2xvc2UpO1xuICAgICAgICBpZiAodGhpcy5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmR0LnZOb2RlLmNoaWxkcmVuLl8kZGVzdHJveSguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmFnRW5kKCk7XG4gICAgfVxufVxuXG5leHBvcnQge0RpYWxvZ307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2RpYWxvZy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9kaWFsb2cvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7aW1wb3J0IE1vdmVXcmFwcGVyIGZyb20gJy4uL21vdmVXcmFwcGVyJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiBoKE1vdmVXcmFwcGVyLCB7J2F1dG9EZXN0cm95JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2ZhbHNlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ3ZhbHVlJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQW5pbWF0ZSwgeydjbGFzc05hbWUnOiAnay1vdmVybGF5JywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pIDogdW5kZWZpbmVkLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ3ZhbHVlJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQW5pbWF0ZSwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgXCJrLWRpYWxvZ1wiOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAnay1kcmFnZ2luZyc6IHNlbGYuZ2V0KCdfZHJhZ2dpbmcnKSxcbiAgICAgICAgICAgICAgICBcImstc21hbGxcIjogc2VsZi5nZXQoJ3NpemUnKSA9PT0gJ3NtYWxsJyxcbiAgICAgICAgICAgICAgICBbc2VsZi5nZXQoJ2NsYXNzTmFtZScpXTogc2VsZi5nZXQoJ2NsYXNzTmFtZScpLFxuICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSwgJ3JlZic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpID0+IHNlbGYuZGlhbG9nID0gaSA/IGkuZWxlbWVudCA6IG51bGwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWE6bGVhdmVFbmQnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fbGVhdmVFbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goJ2RpdicsIHsnZXYtbW91c2Vkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgWyhfYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdzcGFuJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCd0aXRsZScpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrLXRpdGxlJyk7fSkgJiYgKF9fYmxvY2tzLmhlYWRlciA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5oZWFkZXIgPyBibG9ja3MuaGVhZGVyLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5oZWFkZXIuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLmhlYWRlci5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5oZWFkZXIuY2FsbCh0aGlzKSwgaChCdXR0b24sIHsndHlwZSc6ICdub25lJywgJ2ljb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJ1ZV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICd0aXRsZSc6ICflhbPpl60nLCAnY2xhc3NOYW1lJzogJ2stY2xvc2UnLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbG9zZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24taW9zLWNsb3NlLWVtcHR5JyksICdfY29udGV4dCc6IHRoaXN9KV0sICdrLWhlYWRlcicpLCBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrcy5ib2R5ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmdldCgnY2hpbGRyZW4nKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpO30pICYmIChfX2Jsb2Nrcy5ib2R5ID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmJvZHkgPyBibG9ja3MuYm9keS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYm9keS5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuYm9keS5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5ib2R5LmNhbGwodGhpcyksICdrLWJvZHknKSwgaCgnZGl2JywgbnVsbCwgKF9ibG9ja3MuZm9vdGVyID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIFtoKEJ1dHRvbiwgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmNhbmNlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2NhbmNlbFRleHQnKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoQnV0dG9uLCB7J3R5cGUnOiAncHJpbWFyeScsICdldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLm9rIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdsb2FkaW5nJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdsb2FkaW5nJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdva1RleHQnKSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnX2NvbnRleHQnOiB0aGlzfSldO30pICYmIChfX2Jsb2Nrcy5mb290ZXIgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuZm9vdGVyID8gYmxvY2tzLmZvb3Rlci5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuZm9vdGVyLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5mb290ZXIuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3MuZm9vdGVyLmNhbGwodGhpcyksICdrLWZvb3RlcicpXSwgJ19jb250ZXh0JzogdGhpc30pIDogdW5kZWZpbmVkXSwgJ2stZGlhbG9nLXdyYXBwZXInLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZG9tID0+IHNlbGYuJGVsZW1lbnQgPSBkb20gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdfY29udGV4dCc6IHRoaXN9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB7aXNUZXh0Vk5vZGUsIGZpbmRQYXJlbnRDb21wb25lbnR9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEuZ2V0KCdjaGlsZHJlbicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLl9zYXZlT3JpZ2luYWxFdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTpjaGlsZHJlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVPcmlnaW5hbEV2ZW50cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2F2ZU9yaWdpbmFsRXZlbnRzKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCB0cmlnZ2VyLCBjbGFzc05hbWUsIC4uLnJlc3R9ID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuWzBdO1xuICAgICAgICB9IFxuICAgICAgICBpZiAoaXNUZXh0Vk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGgoJ3NwYW4nLCByZXN0LCBjaGlsZHJlbiwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgIGNvbnN0IG9yaWdpblByb3BzID0gY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIGlmICghY2hpbGRyZW4uX2hhc1NhdmVkKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5fZXZDbGljayA9IG9yaWdpblByb3BzWydldi1jbGljayddO1xuICAgICAgICAgICAgY2hpbGRyZW4uX2V2TW91c2VFbnRlciA9IG9yaWdpblByb3BzWydldi1tb3VzZWVudGVyJ107XG4gICAgICAgICAgICBjaGlsZHJlbi5fZXZNb3VzZUxlYXZlID0gb3JpZ2luUHJvcHNbJ2V2LW1vdXNlbGVhdmUnXTtcbiAgICAgICAgICAgIGNoaWxkcmVuLl9oYXNTYXZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHByb3BzWydldi1jbGljayddID0gdGhpcy5zaG93LmJpbmQodGhpcywgY2hpbGRyZW4uX2V2Q2xpY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlZW50ZXInXSA9IHRoaXMuc2hvdy5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgcHJvcHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHRoaXMuaGlkZS5iaW5kKHRoaXMsIGNoaWxkcmVuLl9ldk1vdXNlTGVhdmUpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuLnByb3BzID0gey4uLmNoaWxkcmVuLnByb3BzLCAuLi5wcm9wc307XG4gICAgICAgIHRoaXMuc2V0KCdjaGlsZHJlbicsIGNoaWxkcmVuLCB7c2lsZW50OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICB0aGlzLmdldCgnbWVudScpLmNoaWxkcmVuLmRyb3Bkb3duID0gdGhpcztcbiAgICB9XG5cbiAgICBzaG93KGZuLCBlLCBpc0ZvY3VzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIGZuKGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSB0aGlzLmdldCgnbWVudScpLmNoaWxkcmVuO1xuICAgICAgICBtZW51LnNob3coKTtcblxuICAgICAgICBpZiAoaXNGb2N1cykge1xuICAgICAgICAgICAgbWVudS5mb2N1c0l0ZW1CeUluZGV4KDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShmbiwgZSwgaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgZm4oZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbWVudSA9IHRoaXMuZ2V0KCdtZW51JykuY2hpbGRyZW47XG4gICAgICAgIG1lbnUuaGlkZShpbW1lZGlhdGVseSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBEcm9wZG93bkl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcblxuY29uc3QgaCA9IEludGFjdC5WZHQubWlzcy5oO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzLCBpblZ1ZSkge1xuICAgIGxldCB7XG4gICAgICAgIGNoaWxkcmVuLCBwb3NpdGlvbiwga2V5LFxuICAgICAgICByZWYsIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRyZW5bMF07XG4gICAgY29uc3QgbWVudSA9IGNoaWxkcmVuWzFdO1xuXG4gICAgbWVudS5wcm9wcyA9IHtcbiAgICAgICAgcG9zaXRpb24sIFxuICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS5tZW51YCxcbiAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgLi4ubWVudS5wcm9wcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuICFpblZ1ZSA/IFxuICAgICAgICBbXG4gICAgICAgICAgICBoKERyb3Bkb3duLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgPT0gbnVsbCA/IGtleSA6IGAke2tleX0udHJpZ2dlcmAsXG4gICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGVsZW1lbnQsIFxuICAgICAgICAgICAgICAgIG1lbnU6IG1lbnUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtZW51XG4gICAgICAgIF0gOlxuICAgICAgICBoKFZ1ZVdyYXBwZXIsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgaChEcm9wZG93biwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSA9PSBudWxsID8ga2V5IDogYCR7a2V5fS50cmlnZ2VyYCxcbiAgICAgICAgICAgICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbZWxlbWVudF0sIFxuICAgICAgICAgICAgICAgICAgICBtZW51OiBtZW51LFxuICAgICAgICAgICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbn1cblxuLy8gVnVlIG9ubHkgc3VwcG9ydCByZXR1cm4gb25lIGVsZW1lbnQgZnJvbSBmdW5jdGlvbmFsIGNvbXBvbmVudCxcbi8vIHNvIHdlIHdyYXAgdGhlbS4gVGhpcyB3aWxsIGxlYWQgdG8gZGFtYWdlIHRoZSBkb20gc3RydWN0aW9uLFxuLy8gYmVjYXVzZSB3ZSBtdXN0IHdyYXAgdGhlbSB3aXRoIGEgZGl2XG5jbGFzcyBWdWVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCBudWxsLCBkYXRhLmdldCgnY2hpbGRyZW4nKSwgJ2stZHJvcGRvd24nKTtcbiAgICB9XG59XG5cbmNvbnN0IF9XcmFwcGVyID0gSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyID9cbiAgICBJbnRhY3QuZnVuY3Rpb25hbFdyYXBwZXIoV3JhcHBlcikgOiBXcmFwcGVyO1xuXG5leHBvcnQgZGVmYXVsdCBfV3JhcHBlcjtcblxuZXhwb3J0IHtfV3JhcHBlciBhcyBEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaXRlbS52ZHQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtmaW5kUGFyZW50Q29tcG9uZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duSXRlbSBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgaGlkZU9uU2VsZWN0OiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPblNlbGVjdDogdHJ1ZSxcblxuICAgICAgICAgICAgX2lzRm9jdXM6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICAvLyBpZiBzZWxlY3RlZCBoaWRlIGFsbCBkcm9wZG93biBtZW51XG4gICAgICAgIHRoaXMub24oJ3NlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnaGlkZU9uU2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMuX2ZpbmRBbmNlc3RvckRyb3Bkb3duTWVudSgpO1xuICAgICAgICAgICAgICAgIGFuY2VzdG9yLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnQgPSB0aGlzLl9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUodHJ1ZSk7XG4gICAgICAgIHBhcmVudC5pdGVtcy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNsaWNrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGUpO1xuXG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZOb2RlLnRhZyAhPT0gRHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcywgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25Nb3VzZUVudGVyKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdtb3VzZWVudGVyJywgZSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuZm9jdXNJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbk1vdXNlTGVhdmUoZSkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoJ21vdXNlbGVhdmUnLCBlKTtcbiAgICB9XG5cbiAgICBzZWxlY3QoKSB7XG4gICAgICAgIC8vIGlzIG5vdCBhIHN1YiBkcm9wZG93biB0cmlnZ2VyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmICghZHJvcGRvd24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc2VsZWN0JywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcm9wZG93bi5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdW5Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19pc0ZvY3VzJywgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uaGlkZShudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNZW51QW5kRm9jdXMoKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5faXNTdWJNZW51KCk7XG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgZHJvcGRvd24uc2hvdyhudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVNZW51KCkge1xuICAgICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2lzU3ViTWVudSgpO1xuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaXNTdWJNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRWTm9kZS50YWcgPT09IERyb3Bkb3duKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9maW5kQW5jZXN0b3JEcm9wZG93bk1lbnUoaXNGaXJzdCkge1xuICAgICAgICByZXR1cm4gZmluZFBhcmVudENvbXBvbmVudChEcm9wZG93bk1lbnUsIHRoaXMsIGlzRmlyc3QpO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucGFyZW50Lml0ZW1zO1xuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kcm9wZG93bi9pdGVtLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG4vKiBpbXBvcnQge3Byb3h5RXZlbnR9IGZyb20gJy4uL3V0aWxzJzsgKi9cblxuY29uc3Qge2NoaWxkcmVuLCBkaXNhYmxlZCwgY2xhc3NOYW1lLCBfaXNGb2N1c30gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2staXRlbSc6IHRydWUsXG4gICAgJ2stZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICdrLWhvdmVyJzogX2lzRm9jdXMsXG59XG5cbnJldHVybiBoKCdkaXYnLCB7J2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uQ2xpY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlZW50ZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25Nb3VzZUVudGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1tb3VzZWxlYXZlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uTW91c2VMZWF2ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Ryb3Bkb3duL2l0ZW0udmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbWVudS52ZHQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJy4uL21vdmVXcmFwcGVyL3Bvc2l0aW9uJztcbmltcG9ydCB7ZmluZFBhcmVudENvbXBvbmVudH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICAgICAgICBwb3NpdGlvbjoge30sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViRHJvcGRvd25zID0gW107XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbignJGNoYW5nZWQ6c2hvdycsIChjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX29uRG9jdW1lbnRDbGljayA9IHRoaXMuX29uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9vbktleWRvd24gPSB0aGlzLl9vbktleWRvd24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKHBhcmVudCkgcGFyZW50LnN1YkRyb3Bkb3ducy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldCgnc2hvdycpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGREb2N1bWVudEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKSB7XG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50Q29tcG9uZW50KERyb3Bkb3duTWVudSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsIHRydWUpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICghaW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3Nob3cnLCAhdGhpcy5nZXQoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgcG9zaXRpb24oKSB7XG4gICAgICAgIHBvc2l0aW9uKHRoaXMucmVmcy5tZW51LmVsZW1lbnQsIHtcbiAgICAgICAgICAgIG15OiAnY2VudGVyIHRvcCs1JywgXG4gICAgICAgICAgICBhdDogJ2NlbnRlciBib3R0b20nLCBcbiAgICAgICAgICAgIG9mOiB0aGlzLmRyb3Bkb3duLmVsZW1lbnQsXG4gICAgICAgICAgICAuLi50aGlzLmdldCgncG9zaXRpb24nKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYWRkRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2ZpbmRQYXJlbnREcm9wZG93bk1lbnUoKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgndHJpZ2dlcicpID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bik7XG4gICAgfVxuXG4gICAgX29uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51ID0gdGhpcy5yZWZzLm1lbnUuZWxlbWVudDtcblxuICAgICAgICAvLyBpcyBhIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgaWYgKG1lbnUgPT09IHRhcmdldCB8fCBtZW51LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcbiAgICAgICAgLy8gaXMgY2xpY2sgb24gc3ViIG1lbnVcbiAgICAgICAgaWYgKHRoaXMuX2lzQ2xpY2tTdWJNZW51KHRhcmdldCwgdGhpcy5zdWJEcm9wZG93bnMpKSByZXR1cm47XG4gICAgICAgIC8vIGN1c3RvbSBmbGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIGV2ZW50IGRvZXMgbm90IGxlYWQgdG8gY2xvc2UgbWVudVxuICAgICAgICBpZiAoZS5fZHJvcGRvd24pIHJldHVybjtcblxuICAgICAgICB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgX29uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzTmV4dEl0ZW0oZSk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNQcmV2SXRlbShlKTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByaWdodFxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3ViTWVudShlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZVN1Yk1lbnUoZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBlbnRlclxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RJdGVtKGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZvY3VzTmV4dEl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCArIDEsICdkb3duJyk7XG4gICAgfVxuXG4gICAgX2ZvY3VzUHJldkl0ZW0oZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdGhpcy5mb2N1c0luZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KHRoaXMuZm9jdXNJbmRleCAtIDEsICd1cCcpO1xuICAgIH1cblxuICAgIGZvY3VzSXRlbUJ5SW5kZXgoaW5kZXgsIGRpcmVjdGlvbiA9ICdkb3duJykge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGNvbnN0IG1heCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IG9sZEluZGV4ID0gdGhpcy5mb2N1c0luZGV4O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpeEluZGV4KGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBtYXgpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSBmaXhJbmRleChpbmRleCk7XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8PSBtYXggJiYgaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZml4SW5kZXgoZGlyZWN0aW9uID09PSAnZG93bicgPyBpbmRleCArIDEgOiBpbmRleCAtIDEpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIGl0ZW1zIGFyZSBkaXNhYmxlZFxuICAgICAgICBpZiAoaSA+IG1heCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZm9jdXNJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmIChvbGRJbmRleCA+IC0xICYmIGl0ZW1zW29sZEluZGV4XSkge1xuICAgICAgICAgICAgaXRlbXNbb2xkSW5kZXhdLnVuRm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgIH1cblxuICAgIF9zZWxlY3RJdGVtKGUpIHtcbiAgICAgICAgdGhpcy5fc2hvd1N1Yk1lbnUoZSk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dTdWJNZW51KGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZmluZFBhcmVudERyb3Bkb3duTWVudSgpO1xuICAgICAgICBpZiAoIXBhcmVudCAmJiB0aGlzLmZvY3VzSW5kZXggPCAwKSByZXR1cm47XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAocGFyZW50ICYmIHRoaXMuZm9jdXNJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNJdGVtQnlJbmRleCgwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLnNob3dNZW51QW5kRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlU3ViTWVudShlKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmZvY3VzSW5kZXhdLmhpZGVNZW51KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGZpbmRQYXJlbnRDb21wb25lbnQoRHJvcGRvd25NZW51LCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUobnVsbCwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb2N1c0l0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW1CeUluZGV4KGluZGV4KTtcbiAgICB9XG5cbiAgICBfaXNDbGlja1N1Yk1lbnUodGFyZ2V0LCBzdWJNZW51cykge1xuICAgICAgICBsZXQgcmV0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTWVudXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBzdWJNZW51c1tpXS5yZWZzLm1lbnU7XG4gICAgICAgICAgICBpZiAoc3ViTWVudSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHN1Yk1lbnUuZWxlbWVudCB8fCBzdWJNZW51LmVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0aGlzLl9pc0NsaWNrU3ViTWVudSh0YXJnZXQsIHN1Yk1lbnVzW2ldLnN1YkRyb3Bkb3ducyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9maW5kUGFyZW50RHJvcGRvd25NZW51KCk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRyb3Bkb3ducyA9IHBhcmVudC5zdWJEcm9wZG93bnM7XG4gICAgICAgICAgICBzdWJEcm9wZG93bnMuc3BsaWNlKHN1YkRyb3Bkb3ducy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgfSBcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLl9yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS5qcyIsImltcG9ydCBNb3ZlV3JhcHBlciBmcm9tICcuLi9tb3ZlV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge2NoaWxkcmVuLCBzaG93LCB0cmlnZ2VyLCBjbGFzc05hbWV9ID0gc2VsZi5nZXQoKTtcblxuY29uc3QgZXZlbnRzID0ge307XG4vLyBubyBtYXR0ZXIgd2hhdCB0aGUgdHJpZ2dlciBpcywgd2Ugc2hvdWxkIHNob3cgbWVudSB3aGVuIGVudGVyIGl0LlxuLy8gZm9yIHRoZSBjYXNlOiBob3ZlciB0cmlnZ2VyIG5lc3RzIGNsaWNrIHRyaWdnZXJcbmV2ZW50c1snZXYtbW91c2VlbnRlciddID0gc2VsZi5zaG93O1xuaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICBldmVudHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHNlbGYuaGlkZS5iaW5kKHNlbGYsIGZhbHNlKTtcbn1cblxucmV0dXJuIGgoTW92ZVdyYXBwZXIsIHsnX3BhcmVudCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzaG93IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKEFuaW1hdGUsIHsnY2xhc3NOYW1lJzogX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1wiay1kcm9wZG93bi1tZW51XCI6IHRydWUsIFtjbGFzc05hbWVdOiBjbGFzc05hbWV9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnYTp0cmFuc2l0aW9uJzogJ2Ryb3Bkb3duJywgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnYTpkZWxheURlc3Ryb3knOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZmFsc2UgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NoaWxkcmVuIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdfY29udGV4dCc6IHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snbWVudSddID0gaX0pIDogdW5kZWZpbmVkLCAnX2NvbnRleHQnOiB0aGlzfSwgbnVsbCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ3dyYXBwZXInXSA9IGl9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZHJvcGRvd24vbWVudS52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jb2wudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBnZXQgdGVtcGxhdGUoKSB7IHJldHVybiB0ZW1wbGF0ZTsgfVxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFuOiAyNCxcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGd1dHRlcjogMCxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dyaWQvY29sLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCBndXR0ZXJTdHlsZSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubGV0IHtjaGlsZHJlbiwgc3BhbiwgY2xhc3NOYW1lLCBzdHlsZSwgZ3V0dGVyLCBvZmZzZXR9ID0gc2VsZi5nZXQoKTtcblxubGV0IGhhc0d1dHRlciA9IGd1dHRlciA+IDA7XG5pZiAoaGFzR3V0dGVyKSB7XG4gICAgc3R5bGUgPSBndXR0ZXJTdHlsZShndXR0ZXIsIHN0eWxlLCAncGFkZGluZycpO1xufVxuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgLyogJ2stY29sJzogdHJ1ZSwgKi9cbiAgICBbYGstJHtzcGFufWBdOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgJiYgIWhhc0d1dHRlcixcbiAgICBbYGstb2Zmc2V0LSR7b2Zmc2V0fWBdOiBvZmZzZXQgPiAwLFxufTtcblxuXG5yZXR1cm4gaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzdHlsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2hhc0d1dHRlciA/XG4gICAgICAgIGgoJ2RpdicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjaGlsZHJlbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDpcbiAgICAgICAgY2hpbGRyZW5cbl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dyaWQvY29sLnZkdCIsImltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO1xuaW1wb3J0IENvbCBmcm9tICcuL2NvbCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCB7Um93LCBDb2x9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ncmlkL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9ncmlkL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9ncmlkL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm93LnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdyBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgZ2V0IHRlbXBsYXRlKCkgeyByZXR1cm4gdGVtcGxhdGU7IH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3V0dGVyOiAwXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dyaWQvcm93LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCBndXR0ZXJTdHlsZSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubGV0IHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSwgZ3V0dGVyfSA9IHNlbGYuZ2V0KCk7XG5cbmxldCBoYXNHdXR0ZXIgPSBndXR0ZXIgPiAwO1xuaWYgKGhhc0d1dHRlcikge1xuICAgIHN0eWxlID0gZ3V0dGVyU3R5bGUoZ3V0dGVyLCBzdHlsZSk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1yb3cnOiB0cnVlLFxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUsXG4gICAgJ2stZ3V0dGVyJzogaGFzR3V0dGVyLFxufTtcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtoYXNHdXR0ZXIgPyBcbiAgICBjaGlsZHJlbi5tYXAodk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUpIHtcbiAgICAgICAgICAgIHZOb2RlLnByb3BzLmd1dHRlciA9IGd1dHRlcjtcbiAgICAgICAgICAgIHJldHVybiB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH0pIDpcbiAgICBjaGlsZHJlbiBcbl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2NsYXNzTmFtZU9iaiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dyaWQvcm93LnZkdCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGd1dHRlclN0eWxlKGd1dHRlciwgc3R5bGUsIHByb3AgPSAnbWFyZ2luJykge1xuICAgIGxldCBtYXJnaW4gPSBndXR0ZXIgLyAyO1xuICAgIGxldCBzaWduID0gcHJvcCA9PT0gJ21hcmdpbicgPyAnLScgOiAnJztcbiAgICBpZiAoIXN0eWxlKSBzdHlsZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0eWxlID0gYCR7c3R5bGV9JHshc3R5bGUgfHwgLztcXHMqJC8udGVzdChzdHlsZSkgPyAnJyA6ICc7J30ke3Byb3B9LWxlZnQ6ICR7c2lnbn0ke21hcmdpbn1weDsgJHtwcm9wfS1yaWdodDogJHtzaWdufSR7bWFyZ2lufXB4O2BcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIFtgJHtwcm9wfUxlZnRgXTogYCR7c2lnbn0ke21hcmdpbn1weGAsXG4gICAgICAgICAgICBbYCR7cHJvcH1SaWdodGBdOiBgJHtzaWdufSR7bWFyZ2lufXB4YCxcbiAgICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZ3JpZC91dGlscy5qcyIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBjbGVhcmFibGU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBmbHVpZDogQm9vbGVhbixcbiAgICB9O1xuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsIC8vIHRleHQgfCB0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICByb3dzOiAyLFxuICAgICAgICAgICAgc3BlbGxjaGVjazogZmFsc2UsXG4gICAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnZhbHVlJywgdGhpcy5fYWRqdXN0V2lkdGgpO1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlZDpwbGFjZWhvbGRlcicsIHRoaXMuX2FkanVzdFdpZHRoKTtcbiAgICB9XG5cbiAgICBfbW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdFdpZHRoKCk7XG4gICAgfVxuXG4gICAgX2FkanVzdFdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ2F1dG9XaWR0aCcpKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucmVmcy5mYWtlLm9mZnNldFdpZHRoIHx8IDE7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW5wdXQuc3R5bGUud2lkdGggPSBgJHt3aWR0aCArIDF9cHhgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoZSkge1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCAnJyk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGVhcicsIGUpO1xuICAgIH1cblxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5yZWZzLmlucHV0LnNlbGVjdCgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBfb25JbnB1dChlKSB7XG4gICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdpbnB1dCcsIGUpO1xuICAgIH1cblxuICAgIF9wcm94eUV2ZW50KG5hbWUsIGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKG5hbWUsIGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtJbnB1dH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9pbnB1dC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcbmNvbnN0IHtcbiAgICB0eXBlLCBuYW1lLCB2YWx1ZSwgcGxhY2Vob2xkZXIsXG4gICAgcmVhZG9ubHksIGNsZWFyYWJsZSwgZGlzYWJsZWQsIHNpemUsIFxuICAgIHJvd3MsIHNwZWxsY2hlY2ssIGRlZmF1bHRWYWx1ZSwgc3R5bGUsXG4gICAgY2xhc3NOYW1lLCBhdXRvV2lkdGgsIGZsdWlkLFxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGNsYXNzTmFtZU9iaiA9IHtcbiAgICAnay1pbnB1dCc6IHRydWUsXG4gICAgW2BrLSR7c2l6ZX1gXTogc2l6ZSAhPT0gJ2RlZmF1bHQnLFxuICAgICdrLWdyb3VwJzogYmxvY2tzLnByZXBlbmQgfHwgYmxvY2tzLmFwcGVuZCxcbiAgICAnay1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICdrLXdpdGgtcHJlZml4JzogYmxvY2tzLnByZWZpeCxcbiAgICAnay13aXRoLXN1ZmZpeCc6IGJsb2Nrcy5zdWZmaXgsXG4gICAgJ2stY2xlYXJhYmxlJzogY2xlYXJhYmxlLFxuICAgICdrLWF1dG8td2lkdGgnOiBhdXRvV2lkdGgsXG4gICAgJ2stZmx1aWQnOiBmbHVpZCxcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxufVxuXG5jb25zdCBldmVudHMgPSBbXG4gICAgJ2tleWRvd24nLCAna2V5dXAnLCAnY2hhbmdlJyxcbiAgICAna2V5cHJlc3MnLCAnZm9jdXMnLCAnYmx1cicsIC8qICdpbnB1dCcgKi9cbl0ucmVkdWNlKChtZW1vLCBuYW1lKSA9PiB7XG4gICAgbWVtb1tgZXYtJHtuYW1lfWBdID0gc2VsZi5fcHJveHlFdmVudC5iaW5kKHNlbGYsIG5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xufSwge30pO1xuXG5jb25zdCB3cmFwcGVyRXZlbnRzID0gW1xuICAgICdjbGljaycsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnXG5dLnJlZHVjZSgobWVtbywgbmFtZSkgPT4ge1xuICAgIG1lbW9bYGV2LSR7bmFtZX1gXSA9IHNlbGYuX3Byb3h5RXZlbnQuYmluZChzZWxmLCBuYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbn0sIHt9KTtcblxucmV0dXJuIGgoJ2RpdicsIHsnc3R5bGUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc3R5bGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3dyYXBwZXJFdmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZXBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzLnByZXBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3MucHJlcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5wcmVwZW5kID8gYmxvY2tzLnByZXBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLnByZXBlbmQuY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLnByZXBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3MucHJlcGVuZC5jYWxsKHRoaXMpLCAnay1wcmVwZW5kJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnByZWZpeCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgKF9ibG9ja3MucHJlZml4ID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIG51bGw7fSkgJiYgKF9fYmxvY2tzLnByZWZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge1xudmFyIHNlbGYgPSB0aGlzO1xucmV0dXJuIGJsb2Nrcy5wcmVmaXggPyBibG9ja3MucHJlZml4LmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5wcmVmaXguY2FsbChzZWxmLCBwYXJlbnQpO1xufSkgOiBfYmxvY2tzLnByZWZpeC5jYWxsKHRoaXMsIHBhcmVudCk7XG59KSAmJiBfX2Jsb2Nrcy5wcmVmaXguY2FsbCh0aGlzKSwgJ2stcHJlZml4JykgOiB1bmRlZmluZWQsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlICE9PSAndGV4dGFyZWEnIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdpbnB1dCcsIHsndHlwZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICduYW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW25hbWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3ZhbHVlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdldi1pbnB1dCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLl9vbklucHV0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkZWZhdWx0VmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGVmYXVsdFZhbHVlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdyZWFkT25seSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyZWFkb25seSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncGxhY2Vob2xkZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcGxhY2Vob2xkZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2Rpc2FibGVkJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Rpc2FibGVkIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIC4uLmZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtldmVudHMgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIG51bGwsICdrLWlubmVyJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2lucHV0J10gPSBpfSkgOiBoKCd0ZXh0YXJlYScsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWlucHV0JzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX29uSW5wdXQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RlZmF1bHRWYWx1ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkZWZhdWx0VmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ25hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbbmFtZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncmVhZE9ubHknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbcmVhZG9ubHkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ3BsYWNlaG9sZGVyJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3BsYWNlaG9sZGVyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkaXNhYmxlZCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkaXNhYmxlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAncm93cyc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtyb3dzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdzcGVsbGNoZWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NwZWxsY2hlY2sgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgLi4uZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2V2ZW50cyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgbnVsbCwgJ2staW5uZXIgay10ZXh0YXJlYScsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWydpbnB1dCddID0gaX0pLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYmxvY2tzLnN1ZmZpeCB8fCBjbGVhcmFibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIFtmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xlYXJhYmxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdpJywgeydldi1jbGljayc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtzZWxmLmNsZWFyIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgICAgIFwiay1jbGVhciBrLWljb24gaW9uLWlvcy1jbG9zZVwiOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgXCJrLXNob3dcIjogdmFsdWUsXG4gICAgICAgICAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSkgOiB1bmRlZmluZWQsIChfYmxvY2tzLnN1ZmZpeCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrcy5zdWZmaXggPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3Muc3VmZml4ID8gYmxvY2tzLnN1ZmZpeC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3Muc3VmZml4LmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5zdWZmaXguY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3Muc3VmZml4LmNhbGwodGhpcyldLCAnay1zdWZmaXgnKSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2F1dG9XaWR0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3ZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnID8gcGxhY2Vob2xkZXIgOiB2YWx1ZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnay1mYWtlJywgbnVsbCwgZnVuY3Rpb24oaSkge3dpZGdldHNbJ2Zha2UnXSA9IGl9KSA6IHVuZGVmaW5lZF0sICdrLXdyYXBwZXInKSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Jsb2Nrcy5hcHBlbmQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoJ2RpdicsIG51bGwsIChfYmxvY2tzLmFwcGVuZCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBudWxsO30pICYmIChfX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3MuYXBwZW5kID8gYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3MuYXBwZW5kLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3MuYXBwZW5kLmNhbGwodGhpcyksICdrLWFwcGVuZCcpIDogdW5kZWZpbmVkXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xhc3NOYW1lT2JqIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudmR0IiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vbWVzc2FnZS52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuXG5sZXQgbWVzc2FnZXM7XG5sZXQgaWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSBtZXNzYWdlO1xuXG4gICAgc3RhdGljIG5vdGljZShjb250ZW50LCBkdXJhdGlvbiA9IDUwMDAsIHR5cGUgPSAnaW5mbycpIHtcbiAgICAgICAgaWYgKCFtZXNzYWdlcykge1xuICAgICAgICAgICAgbWVzc2FnZXMgPSBJbnRhY3QubW91bnQoTWVzc2FnZXMsIGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRlbnQgIT09IG51bGwgJiYgdHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmICFjb250ZW50LnRhZykge1xuICAgICAgICAgICAgY29udGVudCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRlbnQsIHt0eXBlfSk7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudCA9IHtjb250ZW50LCBkdXJhdGlvbiwgdHlwZX07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uoe1xuICAgICAgICAgICAgLi4uY29udGVudCxcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgX2lzSW5zdGFuY2U6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lc3NhZ2VzLm5vdGljZShtZXNzYWdlKTsgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5mbyA9IChjb250ZW50LCBkdXJhdGlvbikgPT4ge1xuICAgICAgICBNZXNzYWdlLm5vdGljZShjb250ZW50LCBkdXJhdGlvbiwgJ2luZm8nKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZXJyb3IgPSAoY29udGVudCwgZHVyYXRpb24pID0+IHtcbiAgICAgICAgTWVzc2FnZS5ub3RpY2UoY29udGVudCwgZHVyYXRpb24sICdkYW5nZXInKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3VjY2VzcyA9IChjb250ZW50LCBkdXJhdGlvbikgPT4ge1xuICAgICAgICBNZXNzYWdlLm5vdGljZShjb250ZW50LCBkdXJhdGlvbiwgJ3N1Y2Nlc3MnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgd2FybmluZyA9IChjb250ZW50LCBkdXJhdGlvbikgPT4ge1xuICAgICAgICBNZXNzYWdlLm5vdGljZShjb250ZW50LCBkdXJhdGlvbiwgJ3dhcm5pbmcnKTtcbiAgICB9XG5cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICBrZXk6IGlkKyssXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBjb21wb25lbnQgaXMgdXNlZCBhcyBpbnN0YW5jZSBvciBub3RcbiAgICAgICAgICAgIF9pc0luc3RhbmNlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldCgndmFsdWUnKSkge1xuICAgICAgICAgICAgLy8gd2hlbiB1c2UgYXMgY29tcG9uZW50LCByZW5kZXIgdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgLy8gYnV0IGRvbid0IGFwcGVuZCBpdCB0byBwYXJlbnREb20sIHVzZSBhXG4gICAgICAgICAgICAvLyBwbGFjZWhvbGRlciBpbnN0ZWFkIG9mXG4gICAgICAgICAgICB0aGlzLnBhcmVudERvbSA9IG51bGw7XG4gICAgICAgICAgICBzdXBlci5pbml0KC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwibWVzc2FnZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE1lc3NhZ2VzIHJlbmRlciB0aGlzIGNvbXBvbmVudCwgcmV0dXJuIHRoZSBcbiAgICAgICAgICAgIC8vIG9yaWdpbmFsIGRvbVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBoeWRyYXRlKHZOb2RlKSB7XG4gICAgICAgIC8vIGRvbid0IGh5ZHJhdGUgaXQsIGJ1dCBpbml0aWFsaXplIGl0XG4gICAgICAgIHRoaXMuaW5pdChudWxsLCB2Tm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbWVzc2FnZScpO1xuICAgIH1cblxuICAgIHVwZGF0ZShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyB3aGVuIHRoaXMgdXBkYXRpbmcgaXMgZnJvbSBvcmlnaW5hbCBwYXJlbnQsXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgb3JpZ2luYWwgZG9tLCBidXQgcmV0dXJuIHRoZSBwbGFjZWhvbGRlcixcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHJldHVybiB0aGUgb3JpZ2luYWwgZG9tIHdoaWNoIGhhcyBiZWVuIHVwZGF0ZWRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWxhc3RWTm9kZSB8fCBcbiAgICAgICAgICAgIC8vIGl0IG1heSBoYXZlIG5vdCBwYXJlbnRWTm9kZSBpbiB2dWVcbiAgICAgICAgICAgIChsYXN0Vk5vZGUucGFyZW50Vk5vZGUgJiYgbGFzdFZOb2RlLnBhcmVudFZOb2RlLnRhZyA9PT0gTWVzc2FnZUFuaW1hdGUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBwbGFjZWhvbGRlciBzdHJpbmcgZm9yIHNzclxuICAgICAgICByZXR1cm4gJzwhLS1tZXNzYWdlLS0+JztcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbignJGNoYW5nZTp2YWx1ZScsIChjLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMubm90aWNlKHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5kZWxldGUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jcmVhdGUoKSB7XG4gICAgICAgIGlmICghbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzID0gSW50YWN0Lm1vdW50KE1lc3NhZ2VzLCBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9tb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdldCgndmFsdWUnKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5nZXQoJ2R1cmF0aW9uJyk7XG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIGlmICghdGhpcy5nZXQoJ19pc0luc3RhbmNlJykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLmRlbGV0ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLl9tb3VudCgpO1xuICAgIH1cblxuICAgIGRlc3Ryb3kodk5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVnVlICYmICF2Tm9kZSkge1xuICAgICAgICAgICAgbWVzc2FnZXMuZGVsZXRlKHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZOb2RlLnBhcmVudFZOb2RlLnRhZyA9PT0gTWVzc2FnZUFuaW1hdGUgJiYgIXRoaXMuZ2V0KCdfaXNJbnN0YW5jZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAodk5vZGUucGFyZW50Vk5vZGUudGFnICE9PSBNZXNzYWdlQW5pbWF0ZSkge1xuICAgICAgICAgICAgbWVzc2FnZXMuZGVsZXRlKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSh2Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuXG4gICAgZGVmYXVsdHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuTWVzc2FnZUFuaW1hdGUgPSBNZXNzYWdlQW5pbWF0ZTtcbiAgICB9XG5cbiAgICBub3RpY2UobWVzc2FnZSkge1xuICAgICAgICB0aGlzLmdldCgnbWVzc2FnZXMnKS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGRlbGV0ZShtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5nZXQoJ21lc3NhZ2VzJyk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKTtcbiAgICAgICAgaWYgKH5pbmRleCkge1xuICAgICAgICAgICAgbWVzc2FnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1lc3NhZ2VBbmlhbXRlIHR5cGUgZm9yIHR5cGUgY2hlY2tpbmdcbmNsYXNzIE1lc3NhZ2VBbmltYXRlIGV4dGVuZHMgSW50YWN0LkFuaW1hdGUgeyAgfVxuXG5leHBvcnQge01lc3NhZ2V9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCBNZXNzYWdlQW5pbWF0ZSA9IHNlbGYuTWVzc2FnZUFuaW1hdGU7XG5cbnJldHVybiBoKEFuaW1hdGUsIHsnY2xhc3NOYW1lJzogJ2stbWVzc2FnZXMnLCAnY2hpbGRyZW4nOiBfVmR0LnV0aWxzLm1hcChmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ21lc3NhZ2VzJykgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xucmV0dXJuIGgoTWVzc2FnZUFuaW1hdGUsIHsnYTp0YWcnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2tleSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS5nZXQoJ2tleScpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KTtcbn0sIHRoaXMpLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lc3NhZ2UvaW5kZXgudmR0IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO2ltcG9ydCBNb3ZlV3JhcHBlciBmcm9tICcuLi9tb3ZlV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuXG5jb25zdCB7dHlwZSwgY29udGVudCwgY2hpbGRyZW4sIGNsb3NhYmxlfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCB7J2V2LW1vdXNlZW50ZXInOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbk1vdXNlRW50ZXIgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LW1vdXNlbGVhdmUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5vbk1vdXNlTGVhdmUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGgoJ2RpdicsIG51bGwsIFtoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24taW9zLWluZm9ybWF0aW9uJyksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNvbnRlbnQgPT09ICdudW1iZXInIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCB7J2lubmVySFRNTCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjb250ZW50IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnay1jb250ZW50JykgOiBoKCdkaXYnLCBudWxsLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2stY29udGVudCcpLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2xvc2FibGUgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQnV0dG9uLCB7J3R5cGUnOiAnbm9uZScsICdpY29uJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3RydWVdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2xhc3NOYW1lJzogJ2stY2xvc2UnLCAnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5jbG9zZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBoKCdpJywgbnVsbCwgbnVsbCwgJ2staWNvbiBpb24taW9zLWNsb3NlLWVtcHR5JyksICdfY29udGV4dCc6IHRoaXN9KSA6IHVuZGVmaW5lZF0sICdrLWNvbnRhaW5lcicpLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XCJrLW1lc3NhZ2VcIjogdHJ1ZSwgW2BrLSR7dHlwZX1gXTogdHlwZSAhPT0gJ2luZm8nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShzZWxmLCBWZHQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmdldCgnY2hpbGRyZW4nKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuIHx8IFZkdC5taXNzLmhjKCdNb3ZlV3JhcHBlcicpO1xuICAgIH1cblxuICAgIGRlZmF1bHRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b0Rlc3Ryb3k6IHRydWUsIFxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwicGxhY2Vob2xkZXJcIik7XG4gICAgfVxuXG4gICAgaHlkcmF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLmh5ZHJhdGUoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgncGxhY2Vob2xkZXInKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnYXV0b0Rlc3Ryb3knKSkge1xuICAgICAgICAgICAgdGhpcy5fJGRlc3Ryb3koLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiBAYnJpZWYgb3ZlcnJpZGUgc3VwZXIgZGVzdHJveSBcbiAgICAgKlxuICAgICAqIE1vdmVXcmFwZXIgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSBkb20gc3RydWN0aW9uLlxuICAgICAqIEl0IGlzIGFsd2F5cyB0aGUgdG9wIGxldmVsIGRvbSwgc28gd2Ugc2hvdWxkIFxuICAgICAqIHJlbW92ZSBpdCBmcm9tIHBhcmVudCBkb20uIEJ5IHBhc3NpbmcgdGhlIGNvbnRhaW5lclxuICAgICAqIHRvIHJlbW92ZSBmdW5jdGlvbiBjYW4gZG8gdGhpcy4gV2UgY2FuJ3QgcmVtb3ZlIGl0XG4gICAgICogZGlyZWN0bHkgYnkgY2FsbGluZyByZW1vdmVDaGlsZCBtZXRob2QsIGJlYWNhdXNlIGl0XG4gICAgICogbWF5YmUgaGF2ZSBsZWF2ZSBhbmltYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gLi4uYXJnc1xuICAgICAqL1xuICAgIF8kZGVzdHJveShsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICAvLyBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25zb2xlLndhcm4oJ2Rlc3Ryb3llZCBtdWx0aXBsZSB0aW1lcycpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkICYmIFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICFuZXh0Vk5vZGUgfHxcbiAgICAgICAgICAgICAgICAhKG5leHRWTm9kZS50eXBlICYgSW50YWN0LlZkdC5taXNzLlR5cGVzLkNvbXBvbmVudENsYXNzT3JJbnN0YW5jZSkgfHxcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUua2V5ICE9PSBsYXN0Vk5vZGUua2V5XG4gICAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgICAgSW50YWN0LlZkdC5taXNzLnJlbW92ZSh0aGlzLnZkdC52Tm9kZSwgdGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignJGRlc3Ryb3llZCcsIHRoaXMpO1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgIH1cblxuICAgIF9tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmdldCgnY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtNb3ZlV3JhcHBlcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21vdmVXcmFwcGVyL2luZGV4LmpzIiwiY29uc3QgbWF4ID0gTWF0aC5tYXg7XG5jb25zdCBhYnMgPSBNYXRoLmFicztcbmNvbnN0IHJIb3Jpem9udGFsID0gL2xlZnR8Y2VudGVyfHJpZ2h0LztcbmNvbnN0IHJWZXJ0aWNhbCA9IC90b3B8Y2VudGVyfGJvdHRvbS87XG5jb25zdCByT2Zmc2V0ID0gL1tcXCtcXC1dXFxkKyhcXC5bXFxkXSspPyU/LztcbmNvbnN0IHJQb3NpdGlvbiA9IC9eXFx3Ky87XG5jb25zdCByUGVyY2VudCA9IC8lJC87XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvc2l0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLm9mIHx8IHdpbmRvdztcbiAgICAvLyBjb25zdCBkaW1lbnNpb25zID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGlmICh0YXJnZXQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgb3B0aW9ucy5hdCA9IFwibGVmdCB0b3BcIjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgICB3aWR0aDogdGFyZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0LCBcbiAgICAgICAgb2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9ID0gZ2V0RGltZW5zaW9ucyh0YXJnZXQpO1xuICAgIGNvbnN0IGJhc2VQb3NpdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldE9mZnNldCk7XG4gICAgY29uc3QgY29sbGlzaW9uID0gKG9wdGlvbnMuY29sbGlzaW9uIHx8ICdmbGlwJykuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBvZmZzZXRzID0ge307XG5cbiAgICBbJ215JywgJ2F0J10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IHBvcyA9IChvcHRpb25zW2l0ZW1dIHx8ICcnKS5zcGxpdCgnICcpO1xuXG4gICAgICAgIGlmIChwb3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBwb3MgPSBySG9yaXpvbnRhbC50ZXN0KHBvc1swXSkgP1xuICAgICAgICAgICAgICAgIHBvcy5jb25jYXQoWydjZW50ZXInXSkgOlxuICAgICAgICAgICAgICAgIHJWZXJ0aWNhbC50ZXN0KHBvc1swXSkgP1xuICAgICAgICAgICAgICAgICAgICBbJ2NlbnRlciddLmNvbmNhdChwb3MpIDpcbiAgICAgICAgICAgICAgICAgICAgWydjZW50ZXInLCAnY2VudGVyJ107XG4gICAgICAgIH1cbiAgICAgICAgcG9zWzBdID0gckhvcml6b250YWwudGVzdChwb3NbMF0pID8gcG9zWzBdIDogJ2NlbnRlcic7XG4gICAgICAgIHBvc1sxXSA9IHJWZXJ0aWNhbC50ZXN0KHBvc1sxXSkgPyBwb3NbMV0gOiAnY2VudGVyJztcblxuICAgICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gck9mZnNldC5leGVjKHBvc1swXSk7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsT2Zmc2V0ID0gck9mZnNldC5leGVjKHBvc1sxXSk7XG4gICAgICAgIG9mZnNldHNbaXRlbV0gPSBbXG4gICAgICAgICAgICBob3Jpem9udGFsT2Zmc2V0ID8gaG9yaXpvbnRhbE9mZnNldFswXSA6IDAsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA/IHZlcnRpY2FsT2Zmc2V0WzBdIDogMFxuICAgICAgICBdO1xuXG4gICAgICAgIG9wdGlvbnNbaXRlbV0gPSBbXG4gICAgICAgICAgICByUG9zaXRpb24uZXhlYyhwb3NbMF0pWzBdLFxuICAgICAgICAgICAgclBvc2l0aW9uLmV4ZWMocG9zWzFdKVswXVxuICAgICAgICBdO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbGxpc2lvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29sbGlzaW9uWzFdID0gY29sbGlzaW9uWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGF0ID0gb3B0aW9ucy5hdDtcbiAgICBpZiAoYXRbMF0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLmxlZnQgKz0gdGFyZ2V0V2lkdGg7XG4gICAgfSBlbHNlIGlmIChhdFswXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgYmFzZVBvc2l0aW9uLmxlZnQgKz0gdGFyZ2V0V2lkdGggLyAyO1xuICAgIH1cbiAgICBpZiAoYXRbMV0gPT09ICdib3R0b20nKSB7XG4gICAgICAgIGJhc2VQb3NpdGlvbi50b3AgKz0gdGFyZ2V0SGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYXRbMV0gPT09ICdjZW50ZXInKSB7XG4gICAgICAgIGJhc2VQb3NpdGlvbi50b3AgKz0gdGFyZ2V0SGVpZ2h0IC8gMjtcbiAgICB9XG5cbiAgICBjb25zdCBhdE9mZnNldCA9IGdldE9mZnNldHMob2Zmc2V0cy5hdCwgdGFyZ2V0V2lkdGgsIHRhcmdldEhlaWdodCk7XG4gICAgYmFzZVBvc2l0aW9uLmxlZnQgKz0gYXRPZmZzZXRbMF07XG4gICAgYmFzZVBvc2l0aW9uLnRvcCArPSBhdE9mZnNldFsxXTtcblxuICAgIGNvbnN0IGVsZW1XaWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgZWxlbUhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZVBvc2l0aW9uKTtcbiAgICBjb25zdCBteU9mZnNldCA9IGdldE9mZnNldHMob2Zmc2V0cy5teSwgZWxlbVdpZHRoLCBlbGVtSGVpZ2h0KTtcblxuICAgIGNvbnN0IG15ID0gb3B0aW9ucy5teTtcbiAgICBpZiAobXlbMF0gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcG9zaXRpb24ubGVmdCAtPSBlbGVtV2lkdGg7XG4gICAgfSBlbHNlIGlmIChteVswXSA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24ubGVmdCAtPSBlbGVtV2lkdGggLyAyO1xuICAgIH1cbiAgICBpZiAobXlbMV0gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHBvc2l0aW9uLnRvcCAtPSBlbGVtSGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAobXlbMV0gPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHBvc2l0aW9uLnRvcCAtPSBlbGVtSGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgcG9zaXRpb24ubGVmdCArPSBteU9mZnNldFswXTtcbiAgICBwb3NpdGlvbi50b3AgKz0gbXlPZmZzZXRbMV07XG5cbiAgICBjb25zdCBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgY29uc3Qge2VsZW1Qb3NpdGlvbn0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICBpZiAoZWxlbVBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICAgIHN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICBzdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyAncHgnO1xuXG4gICAgaWYgKG9wdGlvbnMudXNpbmcpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhcmdldE9mZnNldC5sZWZ0IC0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgdGFyZ2V0V2lkdGggLSBlbGVtV2lkdGg7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldE9mZnNldC50b3AgLSBwb3NpdGlvbi50b3A7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIHRhcmdldEhlaWdodCAtIGVsZW1IZWlnaHQ7XG4gICAgICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogcmlnaHQgPCAwID8gJ2xlZnQnIDogbGVmdCA+IDAgPyAncmlnaHQnIDogJ2NlbnRlcicsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogYm90dG9tIDwgMCA/ICd0b3AnIDogdG9wID4gMCA/ICdib3R0b20nIDogJ21pZGRsZScsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXRXaWR0aCA8IGVsZW1XaWR0aCAmJiBhYnMobGVmdCArIHJpZ2h0KSA8IHRhcmdldFdpZHRoKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ob3Jpem9udGFsID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldEhlaWdodCA8IGVsZW1IZWlnaHQgJiYgYWJzKHRvcCArIGJvdHRvbSkgPCB0YXJnZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnZlcnRpY2FsID0gJ21pZGRsZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heChhYnMobGVmdCksIGFicyhyaWdodCkpID4gbWF4KGFicyh0b3ApLCBhYnMoYm90dG9tKSkpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmltcG9ydGFudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51c2luZyhmZWVkYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb25zKGVsZW0pIHtcbiAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgICAgICAvLyBkb2N1bWVudFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGVsZW0ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGVsZW0ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGVsZW0gPT09IHdpbmRvdykge1xuICAgICAgICBsZXQgZCA9IGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdG9wOiBlbGVtLnBhZ2VZT2Zmc2V0IHx8IGQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGVsZW0ucGFnZVhPZmZzZXQgfHwgZC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChlbGVtLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIC8vIGV2ZW50XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHRvcDogZWxlbS5wYWdlWSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBlbGVtLnBhZ2VYXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIGRvbVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGQgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIGQucGFnZVlPZmZzZXQsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkLnBhZ2VYT2Zmc2V0XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRzKG9mZnNldHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMF0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1swXSkgPyB3aWR0aCAvIDEwMCA6IDEpLFxuICAgICAgICBwYXJzZUZsb2F0KG9mZnNldHNbMV0pICogKHJQZXJjZW50LnRlc3Qob2Zmc2V0c1sxXSkgPyBoZWlnaHQgLyAxMDAgOiAxKSxcbiAgICBdO1xufVxuXG5leHBvcnQge3Bvc2l0aW9ufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbW92ZVdyYXBwZXIvcG9zaXRpb24uanMiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xuaW1wb3J0ICcuL2luZGV4LnN0eWwnO1xuaW1wb3J0IHtpc1N0cmluZ09yTnVtYmVyfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFNlbGVjdCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGNvdW50OiAxOSxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuXG4gICAgICAgICAgICBfbGlzdDogW10sXG4gICAgICAgICAgICBfdHJhbnNsYXRlOiAwLFxuICAgICAgICAgICAgX21hcmdpblRvcDogMCxcbiAgICAgICAgICAgIF9kcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuX3NldExpc3QoKTtcblxuICAgICAgICBbJ2RhdGEnLCAndmFsdWUnLCAnY291bnQnXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5vbihgJGNoYW5nZToke2l0ZW19YCwgdGhpcy5fc2V0TGlzdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21vdmUgPSB0aGlzLl9tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLl9kcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRoaXMucmVmcy53cmFwcGVyLm9mZnNldEhlaWdodDsgXG4gICAgICAgIHRoaXMuX2RlbHRhWSA9IC1NYXRoLmZsb29yKCh0b3RhbEhlaWdodCAtIGhlaWdodCkgLyAyKTtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgX3RyYW5zbGF0ZTogdGhpcy5fZGVsdGFZIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2VsZWN0KGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHtjb3VudCwgX3RyYW5zbGF0ZSwgX21hcmdpblRvcH0gPSB0aGlzLmdldCgpO1xuICAgICAgICBjb25zdCBoYWxmID0gTWF0aC5mbG9vcihjb3VudCAvIDIpO1xuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5yZWZzLml0ZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgIF90cmFuc2xhdGU6IF90cmFuc2xhdGUgLSBpdGVtSGVpZ2h0ICogKGluZGV4IC0gaGFsZiksXG4gICAgICAgICAgICBfbWFyZ2luVG9wOiBfbWFyZ2luVG9wICsgaXRlbUhlaWdodCAqIChpbmRleCAtIGhhbGYpLFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRMaXN0KCkge1xuICAgICAgICBsZXQge2RhdGEsIHZhbHVlLCBjb3VudH0gPSB0aGlzLmdldCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEodmFsdWUpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBkYXRhID0gZGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHt2YWx1ZTogaXRlbSwgbGFiZWw6IGl0ZW19O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghfmluZGV4KSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCBkYXRhWzBdLnZhbHVlLCB7c2lsZW50OiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFsZiA9IE1hdGguZmxvb3IoY291bnQgLyAyKTtcbiAgICAgICAgY29uc3QgX2xpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBfbGlzdC5wdXNoKGRhdGFbKCgoaW5kZXggLSBoYWxmICsgaSkgJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0KCdfbGlzdCcsIF9saXN0LCB7c2lsZW50OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX2RyYWdTdGFydChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZXQoJ19kcmFnZ2luZycsIHRydWUpO1xuICAgICAgICB0aGlzLl95ID0gZS5jbGllbnRZO1xuICAgICAgICB0aGlzLl9pbml0WSA9IGUuY2xpZW50WTtcbiAgICAgICAgdGhpcy5faXRlbUhlaWdodCA9IHRoaXMucmVmcy5pdGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgIH1cblxuICAgIF9tb3ZlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdfZHJhZ2dpbmcnKSkge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gZS5jbGllbnRZIC0gdGhpcy5feTtcbiAgICAgICAgICAgIHRoaXMuX3kgPSBlLmNsaWVudFk7XG4gICAgICAgICAgICBjb25zdCB7X3RyYW5zbGF0ZX0gPSB0aGlzLmdldCgpO1xuXG4gICAgICAgICAgICBjb25zdCBfZGVsdGFZID0gdGhpcy5feSAtIHRoaXMuX2luaXRZO1xuICAgICAgICAgICAgbGV0IG9mZnNldEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicyhfZGVsdGFZKSAvIHRoaXMuX2l0ZW1IZWlnaHQpO1xuICAgICAgICAgICAgaWYgKG9mZnNldEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kZWx0YVkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEluZGV4ID0gLW9mZnNldEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRCeVJlbGF0aXZlSW5kZXgoLW9mZnNldEluZGV4LCAtX2RlbHRhWSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFkgPSB0aGlzLl95O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXQoJ190cmFuc2xhdGUnLCBfdHJhbnNsYXRlICsgZGVsdGFZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zZXRCeVJlbGF0aXZlSW5kZXgoaW5kZXgsIGRlbHRhWSwgaXNTZXRUcmFuc2xhdGUpIHtcbiAgICAgICAgY29uc3Qge19saXN0LCB2YWx1ZSwgX21hcmdpblRvcH0gID0gdGhpcy5nZXQoKTtcblxuICAgICAgICBjb25zdCBpID0gX2xpc3QuZmluZEluZGV4KHYgPT4gdi52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgICBjb25zdCBsID0gX2xpc3QubGVuZ3RoO1xuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5faXRlbUhlaWdodDtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICAndmFsdWUnOiBfbGlzdFsobCArIGkgKyBpbmRleCkgJSBsXS52YWx1ZSxcbiAgICAgICAgICAgIF9tYXJnaW5Ub3A6IF9tYXJnaW5Ub3AgKyAoZGVsdGFZIHx8IGluZGV4ICogaXRlbUhlaWdodCksXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc1NldFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgcHJvcHMuX3RyYW5zbGF0ZSA9IHRoaXMuZ2V0KCdfdHJhbnNsYXRlJykgLSBpdGVtSGVpZ2h0ICogaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgIH1cblxuICAgIF9kcmFnRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCdfZHJhZ2dpbmcnKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ19kcmFnZ2luZycsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBfdHJhbnNsYXRlOiAtdGhpcy5nZXQoJ19tYXJnaW5Ub3AnKSArIHRoaXMuX2RlbHRhWVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kcmFnRW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbldoZWVsKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9pdGVtSGVpZ2h0ID0gdGhpcy5yZWZzLml0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBpZiAoZS5fcmF3RXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgLy8gZG93blxuICAgICAgICAgICAgdGhpcy5fc2V0QnlSZWxhdGl2ZUluZGV4KDEsIG51bGwsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0QnlSZWxhdGl2ZUluZGV4KC0xLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RyYWdFbmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtTY3JvbGxTZWxlY3R9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zY3JvbGxTZWxlY3QvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3Njcm9sbFNlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL2NvbXBvbmVudHMvc2Nyb2xsU2VsZWN0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5jb25zdCB7XG4gICAgdmFsdWUsIF9saXN0LFxuICAgIF90cmFuc2xhdGUsIF9tYXJnaW5Ub3AsIF9kcmFnZ2luZ1xufSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgeydzdHlsZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7X3RyYW5zbGF0ZX1weClgLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBgJHtfbWFyZ2luVG9wfXB4YCxcbiAgICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtbW91c2Vkb3duJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2RyYWdTdGFydCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZXYtd2hlZWwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fb25XaGVlbCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW19saXN0IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIGZ1bmN0aW9uKGl0ZW0sIGtleSkge1xucmV0dXJuIGgoJ2RpdicsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fc2VsZWN0LmJpbmQoc2VsZiwgaXRlbSwga2V5KSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0ubGFiZWwgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe1xuICAgICAgICAgICAgICAgIFwiay1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJrLWFjdGl2ZVwiOiBpdGVtLnZhbHVlID09PSB2YWx1ZSxcbiAgICAgICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLmtleSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBba2V5ID09PSAwID8gKGRvbSkgPT4gc2VsZi5yZWZzLml0ZW0gPSBkb20gOiB1bmRlZmluZWQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSk7XG59LCB0aGlzKSwgJ2std3JhcHBlcicsIG51bGwsIGZ1bmN0aW9uKGkpIHt3aWRnZXRzWyd3cmFwcGVyJ10gPSBpfSksIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtibG9ja3MuYXBwZW5kIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykgPyBoKCdkaXYnLCBudWxsLCAoX2Jsb2Nrcy5hcHBlbmQgPSBmdW5jdGlvbihwYXJlbnQpIHtyZXR1cm4gbnVsbDt9KSAmJiAoX19ibG9ja3MuYXBwZW5kID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmFwcGVuZCA/IGJsb2Nrcy5hcHBlbmQuY2FsbCh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBfYmxvY2tzLmFwcGVuZC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MuYXBwZW5kLmNhbGwodGhpcywgcGFyZW50KTtcbn0pICYmIF9fYmxvY2tzLmFwcGVuZC5jYWxsKHRoaXMpLCAnay1hcHBlbmQnKSA6IHVuZGVmaW5lZF0sIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcImstc2Nyb2xsLXNlbGVjdFwiOiB0cnVlLCBcImstZHJhZ2dpbmdcIjogX2RyYWdnaW5nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Njcm9sbFNlbGVjdC9pbmRleC52ZHQiLCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XG5pbXBvcnQgVGFiIGZyb20gJy4vdGFiJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtLmhyZWYpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIGl0ZW0udmFsdWUpO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuZXhwb3J0IHtUYWJzLCBUYWJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJzL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy90YWJzL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vY29tcG9uZW50cy90YWJzL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IFRhYiBmcm9tICcuL3RhYic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cblxuY29uc3Qge2NsYXNzTmFtZSwgZGF0YSwgdmFsdWUsIGNoaWxkcmVuLCBzdHlsZX0gPSBzZWxmLmdldCgpO1xuXG5jb25zdCBjbGFzc05hbWVPYmogPSB7XG4gICAgJ2stdGFicyc6IHRydWUsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn07XG5cbnJldHVybiBoKCdkaXYnLCB7J3N0eWxlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3N0eWxlIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBbX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG5yZXR1cm4gaCgnYScsIHsnZXYtY2xpY2snOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5fY2hhbmdlVGFiLmJpbmQoc2VsZiwgaXRlbSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKX0sIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLnRleHQgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbeydrLXRhYic6IHRydWUsICdrLWFjdGl2ZSc6IGl0ZW0udmFsdWUgPT09IHZhbHVlfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSk7XG59LCB0aGlzKSwgJ1xcbiAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbX191Lm1hcChjaGlsZHJlbiA/IChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXSkgOiBjaGlsZHJlbiwgdk5vZGUgPT4ge1xuICAgICAgICBpZiAodk5vZGUudGFnID09PSBUYWIpIHtcbiAgICAgICAgICAgIHZOb2RlLnByb3BzID0gey4uLnZOb2RlLnByb3BzLCBfdmFsdWU6IHZhbHVlLCBfcGFyZW50OiBzZWxmfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdk5vZGU7XG4gICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiddLCBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJzL2luZGV4LnZkdCIsImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RhYi52ZHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlOyB9XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBocmVmOiB1bmRlZmluZWQsXG5cbiAgICAgICAgICAgIC8vIHBhc3NlZCBieSBwYXJlbnRcbiAgICAgICAgICAgIF92YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgX3BhcmVudDogdW5kZWZpbmVkLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2lzQWN0aXZlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KCd2YWx1ZScpO1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA9PT0gdGhpcy5nZXQoJ192YWx1ZScpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIoZSkge1xuICAgICAgICB0aGlzLmdldCgnX3BhcmVudCcpLl9jaGFuZ2VUYWIodGhpcy5nZXQoKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJzL3RhYi5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuY29uc3Qge3ZhbHVlLCBocmVmLCBjaGlsZHJlbiwgX3ZhbHVlfSA9IHNlbGYuZ2V0KCk7XG5cbnJldHVybiBoKCdhJywgeydocmVmJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2hyZWYgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2V2LWNsaWNrJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuX2NoYW5nZVRhYiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpfSwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdjaGlsZHJlbicpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgJ2stdGFiJzogdHJ1ZSwgXG4gICAgICAgICdrLWFjdGl2ZSc6IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgPT09IF92YWx1ZSwgXG4gICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYnMvdGFiLnZkdCIsIi8qKlxuICogQ3JlYXRlZCBieSBzeWx2aWEgb24gMjAxNy8xMC8zMS5cbiAqL1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2Ryb3Bkb3duL2Ryb3Bkb3duJztcbmltcG9ydCBwb3NpdGlvbiBmcm9tICcuLi9tb3ZlV3JhcHBlci9wb3NpdGlvbidcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCdcblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIERyb3Bkb3duIHtcblxufVxuXG5jbGFzcyBUb29sdGlwQ29udGVudCBleHRlbmRzIEludGFjdCB7XG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuICAgICAgICBjYW5Ib3ZlcjogQm9vbGVhbixcbiAgICAgICAgc2hvd0Fycm93OiBCb29sZWFuLFxuICAgIH07XG5cbiAgICBkZWZhdWx0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcbiAgICAgICAgICAgIGNhbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dBcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0b246IHt9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2ZhZGUnLFxuXG4gICAgICAgICAgICBfZmVlZGJhY2s6IHt9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLm9uKCckY2hhbmdlOnNob3cnLCAoYywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcih2YWx1ZSA/ICdiZWZvcmVTaG93JyA6ICdiZWZvcmVIaWRlJywgdGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oJyRjaGFuZ2VkOnNob3cnLCAoYywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZERvY3VtZW50Q2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdzaG93JywgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZURvY3VtZW50Q2xpY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2hpZGUnLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fb25Eb2N1bWVudENsaWNrID0gdGhpcy5fb25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX21vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ3Nob3cnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRG9jdW1lbnRDbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnNldCgnc2hvdycsIHRydWUpOyBcbiAgICB9XG5cbiAgICBoaWRlKGltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmICghaW1tZWRpYXRlbHkgJiYgdGhpcy5nZXQoJ2NhbkhvdmVyJykpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnc2hvdycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXQoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIGlmICh0eXBlb2YgcG9zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3dpdGNoIChwb3MpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zID0ge215OiAncmlnaHQtMTAgY2VudGVyJywgYXQ6ICdsZWZ0IGNlbnRlcid9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICBwb3MgPSB7bXk6ICdjZW50ZXIgdG9wKzEwJywgYXQ6ICdjZW50ZXIgYm90dG9tJ307XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zID0ge215OiAnbGVmdCsxMCBjZW50ZXInLCBhdDogJ3JpZ2h0IGNlbnRlcid9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBwb3MgPSB7bXk6ICdjZW50ZXIgYm90dG9tLTEwJywgYXQ6ICdjZW50ZXIgdG9wJ307XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJlZnMuY29udGVudC5lbGVtZW50O1xuICAgICAgICBwb3NpdGlvbihlbGVtZW50LCB7XG4gICAgICAgICAgICBteTogJ2NlbnRlciBib3R0b20tMTAnLCBcbiAgICAgICAgICAgIGF0OiAnY2VudGVyIHRvcCcsIFxuICAgICAgICAgICAgb2Y6IHRoaXMuZHJvcGRvd24uZWxlbWVudCxcbiAgICAgICAgICAgIHVzaW5nOiAoZmVlZGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgnX2ZlZWRiYWNrJywgZmVlZGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLnBvc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYWRkRG9jdW1lbnRDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCd0cmlnZ2VyJykgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25Eb2N1bWVudENsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW1vdmVEb2N1bWVudENsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5nZXQoJ3RyaWdnZXInKSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yZWZzLmNvbnRlbnQuZWxlbWVudDtcblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGFyZ2V0IHx8IGVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkgcmV0dXJuO1xuICAgICAgICBpZiAoZS5fZHJvcGRvd24pIHJldHVybjsgXG5cbiAgICAgICAgdGhpcy5oaWRlKHRydWUpO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuX3JlbW92ZURvY3VtZW50Q2xpY2soKTtcbiAgICB9XG59XG5cbmNvbnN0IGggPSBJbnRhY3QuVmR0Lm1pc3MuaDtcblxuZnVuY3Rpb24gV3JhcHBlcihwcm9wcywgaW5WdWUpIHtcbiAgICBsZXQge2NoaWxkcmVuLCBjb250ZW50LCBfYmxvY2tzLCBfY29udGV4dCwgcmVmLCAuLi5yZXN0fSA9IHByb3BzO1xuXG4gICAgaWYgKF9ibG9ja3MgJiYgX2Jsb2Nrcy5jb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQgPSBfYmxvY2tzLmNvbnRlbnQuY2FsbChfY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudFZOb2RlID0gaChUb29sdGlwQ29udGVudCwge1xuICAgICAgICBfY29udGV4dCxcbiAgICAgICAgY2hpbGRyZW46IGNvbnRlbnQsXG4gICAgICAgIHJlZixcbiAgICAgICAgLi4ucmVzdFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICFpblZ1ZSA/IFxuICAgICAgICBbXG4gICAgICAgICAgICBoKFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgICAgICBtZW51OiBjb250ZW50Vk5vZGUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdrLXRvb2x0aXAnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb250ZW50Vk5vZGVcbiAgICAgICAgXSA6XG4gICAgICAgIGgoVnVlV3JhcHBlciwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBoKFRvb2x0aXAsIHtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgICAgICAgICAgICAgICAgbWVudTogY29udGVudFZOb2RlLFxuICAgICAgICAgICAgICAgICAgICAuLi4ocHJvcHMudHJpZ2dlciA/IHt0cmlnZ2VyOiBwcm9wcy50cmlnZ2VyfSA6IHt9KSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjb250ZW50Vk5vZGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAuLi5yZXN0XG4gICAgICAgIH0pO1xufVxuXG4vLyBmb3IgdnVlIEJvb2xlYW4gY2FzdFxuV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gICAgY2FuSG92ZXI6IEJvb2xlYW4sXG59O1xuXG5jbGFzcyBWdWVXcmFwcGVyIGV4dGVuZHMgSW50YWN0IHtcbiAgICB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0fSA9IGRhdGEuZ2V0KCk7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCByZXN0LCBjaGlsZHJlbiwgSW50YWN0LlZkdC51dGlscy5jbGFzc05hbWUoe1xuICAgICAgICAgICAgJ2stdG9vbHRpcCc6IHRydWUsXG4gICAgICAgICAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lLFxuICAgICAgICB9KSk7XG4gICAgfVxufVxuXG5jb25zdCBfV3JhcHBlciA9IEludGFjdC5mdW5jdGlvbmFsV3JhcHBlciA/XG4gICAgSW50YWN0LmZ1bmN0aW9uYWxXcmFwcGVyKFdyYXBwZXIpIDogV3JhcHBlcjtcblxuZXhwb3J0IGRlZmF1bHQgX1dyYXBwZXI7XG5cbmV4cG9ydCB7X1dyYXBwZXIgYXMgVG9vbHRpcH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgTW92ZVdyYXBwZXIgZnJvbSAnLi4vbW92ZVdyYXBwZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbmNvbnN0IHtcbiAgICBjaGlsZHJlbiwgc2hvdywgdHJpZ2dlciwgc2hvd0Fycm93LFxuICAgIGNhbkhvdmVyLCBjbGFzc05hbWUsIF9mZWVkYmFjaywgdHJhbnNpdGlvblxufSA9IHNlbGYuZ2V0KCk7XG5cbmNvbnN0IGV2ZW50cyA9IHt9O1xuaWYgKGNhbkhvdmVyICYmIHRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICBldmVudHNbJ2V2LW1vdXNlZW50ZXInXSA9IHNlbGYuc2hvdztcbiAgICBldmVudHNbJ2V2LW1vdXNlbGVhdmUnXSA9IHNlbGYuaGlkZS5iaW5kKHNlbGYsIGZhbHNlKTtcbn1cblxuY29uc3QgY2xhc3NOYW1lT2JqID0ge1xuICAgIFwiay10b29sdGlwLWNvbnRlbnRcIjogdHJ1ZSwgXG4gICAgJ2stY2Fubm90LWhvdmVyJzogdHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhY2FuSG92ZXIsXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcbn07XG5cbnJldHVybiBoKE1vdmVXcmFwcGVyLCB7J2NoaWxkcmVuJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3cgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSA/IGgoQW5pbWF0ZSwgeydjbGFzc05hbWUnOiBfY2xhc3NOYW1lKGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtjbGFzc05hbWVPYmogXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSksICdhOnRyYW5zaXRpb24nOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdHJhbnNpdGlvbiBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAuLi5mdW5jdGlvbigpIHt0cnkge3JldHVybiBbZXZlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdhOmRlbGF5RGVzdHJveSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmYWxzZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnY2hpbGRyZW4nOiBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3Nob3dBcnJvdyBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnaScsIG51bGwsIG51bGwsIF9jbGFzc05hbWUoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgIFwiay1hcnJvd1wiOiB0cnVlLFxuICAgICAgICAgICAgW2BrLSR7X2ZlZWRiYWNrLnZlcnRpY2FsfWBdOiBfZmVlZGJhY2sudmVydGljYWwsXG4gICAgICAgICAgICBbYGstJHtfZmVlZGJhY2suaG9yaXpvbnRhbH1gXTogX2ZlZWRiYWNrLmhvcml6b250YWwsXG4gICAgICAgIH0gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSkpIDogdW5kZWZpbmVkLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbY2hpbGRyZW4gXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKV0sICdfY29udGV4dCc6IHRoaXN9LCBudWxsLCBudWxsLCBudWxsLCBmdW5jdGlvbihpKSB7d2lkZ2V0c1snY29udGVudCddID0gaX0pIDogdW5kZWZpbmVkLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXgudmR0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmstY2hlY2tib3gge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uay1jaGVja2JveCAuay13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstY2hlY2tib3ggLmstd3JhcHBlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIGhlaWdodDogMC41NzE0Mjg1NzE0Mjg1NzFyZW07XFxuICB0b3A6IDAuMDcxNDI4NTcxNDI4NTcxcmVtO1xcbiAgbGVmdDogMC4yODU3MTQyODU3MTQyODZyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5rLWNoZWNrYm94IGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmstY2hlY2tib3ggLmstdGV4dCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNTcxNDI4NTcxNDI4NTcxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5rLWNoZWNrYm94LmstY2hlY2tlZCAuay13cmFwcGVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzBhNWVlZTtcXG4gIGJhY2tncm91bmQ6ICMwYTVlZWU7XFxufVxcbi5rLWNoZWNrYm94LmstY2hlY2tlZCAuay13cmFwcGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XFxufVxcbi5rLWNoZWNrYm94LmstZGlzYWJsZWQge1xcbiAgY29sb3I6ICM5OTk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uay1jaGVja2JveC5rLWRpc2FibGVkIC5rLXdyYXBwZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG59XFxuLmstY2hlY2tib3guay1kaXNhYmxlZCAuay13cmFwcGVyOmJlZm9yZSB7XFxuICBib3JkZXItY29sb3I6ICM5OTk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9jaGVja2JveC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvY2hlY2tib3gvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1kYXRlcGlja2VyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmstZGF0ZXBpY2tlciAuay1pbm5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiAwLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgxOTEsMTkxLDE5MSwwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDE5MSwxOTEsMTkxLDAuNSk7XFxuICBjb2xvcjogIzU5NTk1OTtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLWRheSxcXG4uay1kYXRlcGlja2VyLWNvbnRlbnQgLmstd2Vla2RheSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMi41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuMDgzMzMzMzMzMzMzMzMzZW0gMC4xNjY2NjY2NjY2NjY2NjdlbTtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLWRheSB7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMi41ZW0gLSAycHgpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay1kYXk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLWRheS5rLW91dCB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLWRheS5rLXRvZGF5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWQwZGQ7XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay1kYXkuay1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzBhNWVlZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uay1kYXRlcGlja2VyLWNvbnRlbnQgLmstZGF5LmstYWN0aXZlLmstdG9kYXkge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLWRheS5rLWRpc2FibGVkIHtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLWRheS5rLWRpc2FibGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay13ZWVrZGF5IHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4uay1kYXRlcGlja2VyLWNvbnRlbnQgLmstbW9udGgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMCAwIDAuNDE2NjY2NjY2NjY2NjY3ZW07XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay1tb250aCAuay10ZXh0IHtcXG4gIG1hcmdpbjogMCAwLjI1ZW07XFxuICBsaW5lLWhlaWdodDogMi41ZW07XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay1tb250aCAuay1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4xNjY2NjY2NjY2NjY2NjdlbTtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLW1vbnRoIC5rLXByZXYge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay1tb250aCAuay1uZXh0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmstZGF0ZXBpY2tlci1jb250ZW50IC5rLW1vbnRoIC5rLXRleHQtd3JhcHBlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay15ZWFyLXBpY2tlciB7XFxuICB3aWR0aDogMTkuODMzMzMzMzMzMzMzMzMyZW07XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay10aW1lLXBpY2tlciB7XFxuICB3aWR0aDogMTkuODMzMzMzMzMzMzMzMzMyZW07XFxufVxcbi5rLWRhdGVwaWNrZXItY29udGVudCAuay1zY3JvbGwtc2VsZWN0IHtcXG4gIGhlaWdodDogMTcuNWVtO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLWRpYWxvZy13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uay1kaWFsb2ctd3JhcHBlciAuay1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uay1kaWFsb2ctd3JhcHBlciAuay1vdmVybGF5LmFuaW1hdGUtZW50ZXIsXFxuLmstZGlhbG9nLXdyYXBwZXIgLmstb3ZlcmxheS5hbmltYXRlLWxlYXZlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5rLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDcuODU3MTQyODU3MTQyODU0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMC44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBjb2xvcjogIzU5NTk1OTtcXG59XFxuLmstZGlhbG9nIC5rLWhlYWRlciB7XFxuICBwYWRkaW5nOiAwIDIuMTQyODU3MTQyODU3MTQzcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWQwZGQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5rLWRpYWxvZyAuay10aXRsZSB7XFxuICBoZWlnaHQ6IDQuMjg1NzE0Mjg1NzE0Mjg2ZW07XFxuICBsaW5lLWhlaWdodDogNC4yODU3MTQyODU3MTQyODZlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjNDA0MDQwO1xcbn1cXG4uay1kaWFsb2cgLmstY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuMzU3MTQyODU3MTQyODU3ZW07XFxuICB0b3A6IDAuNzE0Mjg1NzE0Mjg1NzE0ZW07XFxufVxcbi5rLWRpYWxvZyAuay1jbG9zZS5rLWJ0biAuay1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMi4yODU3MTQyODU3MTQyODZlbTtcXG59XFxuLmstZGlhbG9nIC5rLWJvZHkge1xcbiAgcGFkZGluZzogMS4yODU3MTQyODU3MTQyODZyZW0gMi4xNDI4NTcxNDI4NTcxNDNyZW07XFxufVxcbi5rLWRpYWxvZyAuay1mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiAxLjcxNDI4NTcxNDI4NTcxNHJlbSAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstZGlhbG9nIC5rLWZvb3RlciAuay1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1kaWFsb2cuay1kcmFnZ2luZyB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uay1kaWFsb2cuYW5pbWF0ZS1lbnRlci1hY3RpdmUsXFxuLmstZGlhbG9nLmFuaW1hdGUtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uay1kaWFsb2cuYW5pbWF0ZS1lbnRlcixcXG4uay1kaWFsb2cuYW5pbWF0ZS1sZWF2ZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4wNSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4wNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoMS4wNSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uay1kaWFsb2cuay1zbWFsbCB7XFxuICB3aWR0aDogMzIuMTQyODU3MTQyODU3MTQ2cmVtO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9kaWFsb2cvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1kcm9wZG93biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5rLWRyb3Bkb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLXdpZHRoOiA3LjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgxOTEsMTkxLDE5MSwwLjUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDE5MSwxOTEsMTkxLDAuNSk7XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5rLWRyb3Bkb3duLW1lbnUgLmstZHJvcGRvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5rLWRyb3Bkb3duLW1lbnUgLmstaXRlbSB7XFxuICBwYWRkaW5nOiAwLjY2NjY2NjY2NjY2NjY2N2VtIDEuMzMzMzMzMzMzMzMzMzMzZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5rLWRyb3Bkb3duLW1lbnUgLmstaXRlbS5rLWhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwYTVlZWU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmstZHJvcGRvd24tbWVudSAuay1pdGVtOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNDI4NTcxNDI4NTcxNDNyZW0gMC4xNDI4NTcxNDI4NTcxNDNyZW0gMCAwO1xcbn1cXG4uay1kcm9wZG93bi1tZW51IC5rLWl0ZW06bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjE0Mjg1NzE0Mjg1NzE0M3JlbSAwLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstZHJvcGRvd24tbWVudSAuay1pdGVtLmstZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGNvbG9yOiAjOTk5O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmstZHJvcGRvd24tbWVudS5kcm9wZG93bi1sZWF2ZS1hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9kcm9wZG93bi9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvZHJvcGRvd24vaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1yb3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB6b29tOiAxO1xcbn1cXG4uay1yb3c6YWZ0ZXIge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uay0xIHtcXG4gIHdpZHRoOiA0LjE2NjY2NjY2NjY2NjY2NiU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDQuMTY2NjY2NjY2NjY2NjY2JTtcXG59XFxuLmstMiB7XFxuICB3aWR0aDogOC4zMzMzMzMzMzMzMzMzMzIlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLW9mZnNldC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMzMzMzMiU7XFxufVxcbi5rLTMge1xcbiAgd2lkdGg6IDEyLjUlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLW9mZnNldC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMi41JTtcXG59XFxuLmstNCB7XFxuICB3aWR0aDogMTYuNjY2NjY2NjY2NjY2NjY0JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtNCB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NjY2NjY0JTtcXG59XFxuLmstNSB7XFxuICB3aWR0aDogMjAuODMzMzMzMzMzMzMzMzM2JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogMjAuODMzMzMzMzMzMzMzMzM2JTtcXG59XFxuLmstNiB7XFxuICB3aWR0aDogMjUlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLW9mZnNldC02IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5rLTcge1xcbiAgd2lkdGg6IDI5LjE2NjY2NjY2NjY2NjY2OCU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTcge1xcbiAgbWFyZ2luLWxlZnQ6IDI5LjE2NjY2NjY2NjY2NjY2OCU7XFxufVxcbi5rLTgge1xcbiAgd2lkdGg6IDMzLjMzMzMzMzMzMzMzMzMzJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtOCB7XFxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMzMzMzMlO1xcbn1cXG4uay05IHtcXG4gIHdpZHRoOiAzNy41JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtOSB7XFxuICBtYXJnaW4tbGVmdDogMzcuNSU7XFxufVxcbi5rLTEwIHtcXG4gIHdpZHRoOiA0MS42NjY2NjY2NjY2NjY2NyU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY2NjY2NyU7XFxufVxcbi5rLTExIHtcXG4gIHdpZHRoOiA0NS44MzMzMzMzMzMzMzMzMyU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTExIHtcXG4gIG1hcmdpbi1sZWZ0OiA0NS44MzMzMzMzMzMzMzMzMyU7XFxufVxcbi5rLTEyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi5rLTEzIHtcXG4gIHdpZHRoOiA1NC4xNjY2NjY2NjY2NjY2NjQlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLW9mZnNldC0xMyB7XFxuICBtYXJnaW4tbGVmdDogNTQuMTY2NjY2NjY2NjY2NjY0JTtcXG59XFxuLmstMTQge1xcbiAgd2lkdGg6IDU4LjMzMzMzMzMzMzMzMzMzNiU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTE0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzMzMzMzYlO1xcbn1cXG4uay0xNSB7XFxuICB3aWR0aDogNjIuNSU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG59XFxuLmstMTYge1xcbiAgd2lkdGg6IDY2LjY2NjY2NjY2NjY2NjY2JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY2NjY2NjY2JTtcXG59XFxuLmstMTcge1xcbiAgd2lkdGg6IDcwLjgzMzMzMzMzMzMzMzM0JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtMTcge1xcbiAgbWFyZ2luLWxlZnQ6IDcwLjgzMzMzMzMzMzMzMzM0JTtcXG59XFxuLmstMTgge1xcbiAgd2lkdGg6IDc1JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtMTgge1xcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLmstMTkge1xcbiAgd2lkdGg6IDc5LjE2NjY2NjY2NjY2NjY2JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtMTkge1xcbiAgbWFyZ2luLWxlZnQ6IDc5LjE2NjY2NjY2NjY2NjY2JTtcXG59XFxuLmstMjAge1xcbiAgd2lkdGg6IDgzLjMzMzMzMzMzMzMzMzM0JTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uay1vZmZzZXQtMjAge1xcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMzMzM0JTtcXG59XFxuLmstMjEge1xcbiAgd2lkdGg6IDg3LjUlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLW9mZnNldC0yMSB7XFxuICBtYXJnaW4tbGVmdDogODcuNSU7XFxufVxcbi5rLTIyIHtcXG4gIHdpZHRoOiA5MS42NjY2NjY2NjY2NjY2NiU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTIyIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY2NjY2NiU7XFxufVxcbi5rLTIzIHtcXG4gIHdpZHRoOiA5NS44MzMzMzMzMzMzMzMzNCU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmstb2Zmc2V0LTIzIHtcXG4gIG1hcmdpbi1sZWZ0OiA5NS44MzMzMzMzMzMzMzMzNCU7XFxufVxcbi5rLTI0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5rLW9mZnNldC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL2dyaWQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL2dyaWQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuay1pbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjEuNDI4NTcxNDI4NTcxNDI3cmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmstaW5wdXQgLmstd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmstaW5wdXQgLmstaW5uZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IDIuNTcxNDI4NTcxNDI4NTcycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhZDBkZDtcXG4gIHBhZGRpbmc6IDAgMC43MTQyODU3MTQyODU3MTRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMC4yNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjI1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwLjI1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMjVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uay1pbnB1dCAuay1pbm5lcjpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGE1ZWVlO1xcbn1cXG4uay1pbnB1dC5rLWZsdWlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uay1pbnB1dCAuay10ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjM1NzE0Mjg1NzE0Mjg1N3JlbSAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5rLWlucHV0Lmstd2l0aC1wcmVmaXggLmstaW5uZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstaW5wdXQuay13aXRoLXN1ZmZpeCAuay1pbm5lcixcXG4uay1pbnB1dC5rLWNsZWFyYWJsZSAuay1pbm5lciB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyLjE0Mjg1NzE0Mjg1NzE0M3JlbTtcXG59XFxuLmstaW5wdXQgLmstcHJlZml4LFxcbi5rLWlucHV0IC5rLXN1ZmZpeCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmstaW5wdXQgLmstcHJlZml4IHtcXG4gIGxlZnQ6IDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1pbnB1dCAuay1zdWZmaXgge1xcbiAgcmlnaHQ6IDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1pbnB1dCAuay1jbGVhciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uay1pbnB1dCAuay1jbGVhcjpob3ZlciB7XFxuICBjb2xvcjogIzBhNWVlZTtcXG59XFxuLmstaW5wdXQuay13aXRoLXN1ZmZpeCAuay1jbGVhciB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMzU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1pbnB1dC5rLXdpdGgtc3VmZml4LmstY2xlYXJhYmxlIC5rLWlubmVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMuMjE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1pbnB1dCAuay1pbm5lcjpmb2N1cyArIC5rLXN1ZmZpeCAuay1jbGVhci5rLXNob3csXFxuLmstaW5wdXQ6aG92ZXIgLmstY2xlYXIuay1zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4uay1pbnB1dC5rLWdyb3VwIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uay1pbnB1dCAuay1wcmVwZW5kLFxcbi5rLWlucHV0IC5rLWFwcGVuZCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgd2lkdGg6IDFweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWQwZGQ7XFxufVxcbi5rLWlucHV0IC5rLXByZXBlbmQgLmstYnRuLFxcbi5rLWlucHV0IC5rLWFwcGVuZCAuay1idG4ge1xcbiAgbWFyZ2luOiAtMXB4IC0wLjU3MTQyODU3MTQyODU3MWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmstaW5wdXQgLmstcHJlcGVuZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5rLWlucHV0IC5rLWFwcGVuZCB7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuLmstaW5wdXQuay1kaXNhYmxlZCB7XFxuICBjb2xvcjogIzk5OTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5rLWlucHV0LmstZGlzYWJsZWQgLmstaW5uZXIge1xcbiAgY29sb3I6ICM5OTk7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmstaW5wdXQuay1zbWFsbCB7XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1pbnB1dC5rLXNtYWxsIC5rLWlubmVyIHtcXG4gIGhlaWdodDogMi4xNDI4NTcxNDI4NTcxNDNyZW07XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1pbnB1dC5rLW1pbmkge1xcbiAgZm9udC1zaXplOiAwLjg1NzE0Mjg1NzE0Mjg1N3JlbTtcXG59XFxuLmstaW5wdXQuay1taW5pIC5rLWlubmVyIHtcXG4gIGhlaWdodDogMS44NTcxNDI4NTcxNDI4NTdyZW07XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbn1cXG4uay1pbnB1dCAuay1mYWtlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRvcDogMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5rLWlucHV0LmstYXV0by13aWR0aCB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmstaW5wdXQuay1hdXRvLXdpZHRoIC5rLWlubmVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInVybFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYj97XCJwbHVnaW5zXCI6W251bGxdfSEuL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyP3tcImluY2x1ZGUgY3NzXCI6dHJ1ZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmstbWVzc2FnZXMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwLjcxNDI4NTcxNDI4NTcxNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG4uay1tZXNzYWdlcyAuYW5pbWF0ZS1lbnRlcixcXG4uay1tZXNzYWdlcyAuYW5pbWF0ZS1sZWF2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNXJlbSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pO1xcbn1cXG4uay1tZXNzYWdlcyAuYW5pbWF0ZS1lbnRlci1hY3RpdmUsXFxuLmstbWVzc2FnZXMgLmFuaW1hdGUtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uay1tZXNzYWdlcyAuYW5pbWF0ZS1tb3ZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5rLW1lc3NhZ2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5rLW1lc3NhZ2UgPiAuay1jb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDE5MSwxOTEsMTkxLDAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMTkxLDE5MSwxOTEsMC41KTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuLmstbWVzc2FnZSA+IC5rLWNvbnRhaW5lciA+IC5rLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmctbGVmdDogMC43MTQyODU3MTQyODU3MTRyZW07XFxuICBjb2xvcjogIzBhNWVlZTtcXG59XFxuLmstbWVzc2FnZSA+IC5rLWNvbnRhaW5lciA+IC5rLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMS4yODU3MTQyODU3MTQyODZyZW07XFxufVxcbi5rLW1lc3NhZ2UgPiAuay1jb250YWluZXIgPiAuay1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmstbWVzc2FnZSA+IC5rLWNvbnRhaW5lciA+IC5rLWNsb3NlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5rLW1lc3NhZ2UgPiAuay1jb250YWluZXIgPiAuay1jbG9zZSAuay1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDEuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbn1cXG4uay1tZXNzYWdlLmstZGFuZ2VyID4gLmstY29udGFpbmVyID4gLmstaWNvbiB7XFxuICBjb2xvcjogI2RiMjgyODtcXG59XFxuLmstbWVzc2FnZS5rLXN1Y2Nlc3MgPiAuay1jb250YWluZXIgPiAuay1pY29uIHtcXG4gIGNvbG9yOiAjNGRiNTAwO1xcbn1cXG4uay1tZXNzYWdlLmstd2FybmluZyA+IC5rLWNvbnRhaW5lciA+IC5rLWljb24ge1xcbiAgY29sb3I6ICNmZjhhMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9tZXNzYWdlL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmstc2Nyb2xsLXNlbGVjdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogOC45Mjg1NzE0Mjg1NzE0MjlyZW07XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uay1zY3JvbGwtc2VsZWN0IC5rLXdyYXBwZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuLmstc2Nyb2xsLXNlbGVjdC5rLWRyYWdnaW5nIC5rLXdyYXBwZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuLmstc2Nyb2xsLXNlbGVjdCAuay1pdGVtIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc4NTcxNDI4NTcxNDI4NnJlbTtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uay1zY3JvbGwtc2VsZWN0IC5rLWl0ZW0uay1hY3RpdmUge1xcbiAgY29sb3I6ICMwYTVlZWU7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG4uay1zY3JvbGwtc2VsZWN0ID4gLmstYXBwZW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy9zY3JvbGxTZWxlY3QvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3Njcm9sbFNlbGVjdC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5rLXRhYnMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWQwZGQ7XFxufVxcbi5rLXRhYnMgLmstdGFiIHtcXG4gIGhlaWdodDogNC4yMTQyODU3MTQyODU3MTRyZW07XFxuICBsaW5lLWhlaWdodDogY2FsYyg0LjIxNDI4NTcxNDI4NTcxNHJlbSAtIDJweCk7XFxuICBwYWRkaW5nOiAwIDAuNTcxNDI4NTcxNDI4NTcxcmVtO1xcbiAgbWFyZ2luOiAwIDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM1OTU5NTk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uay10YWJzIC5rLXRhYi5rLWFjdGl2ZSB7XFxuICBjb2xvcjogIzBhNWVlZTtcXG59XFxuLmstdGFicyAuay10YWIuay1hY3RpdmU6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMC4xNDI4NTcxNDI4NTcxNDNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwYTVlZWU7XFxuICBtYXJnaW4tbGVmdDogLTAuNTcxNDI4NTcxNDI4NTcxcmVtO1xcbiAgYm90dG9tOiAtMC4wNzE0Mjg1NzE0Mjg1NzFyZW07XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXI/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy90YWJzL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vY29tcG9uZW50cy90YWJzL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmstdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDE5MSwxOTEsMTkxLDAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMTkxLDE5MSwxOTEsMC41KTtcXG4gIHBhZGRpbmc6IDAuMzU3MTQyODU3MTQyODU3cmVtIDAuNzE0Mjg1NzE0Mjg1NzE0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNDI4NTcxNDI4NTcxNDNyZW07XFxuICBmb250LXNpemU6IDAuODU3MTQyODU3MTQyODU3cmVtO1xcbiAgY29sb3I6ICMwYTVlZWU7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3c6YmVmb3JlLFxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93OmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstY2VudGVyIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xcbn1cXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLXRvcDpiZWZvcmUsXFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1ib3R0b206YmVmb3JlLFxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstdG9wLFxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstYm90dG9tIHtcXG4gIGJvcmRlci13aWR0aDogOHB4IDZweDtcXG59XFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay10b3A6YmVmb3JlLFxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstYm90dG9tOmJlZm9yZSB7XFxuICBsZWZ0OiAtNnB4O1xcbn1cXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLXRvcCB7XFxuICB0b3A6IC0xNnB4O1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgxOTEsMTkxLDE5MSwwLjIpO1xcbn1cXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLXRvcDpiZWZvcmUge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG4gIHRvcDogLTdweDtcXG59XFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1ib3R0b20ge1xcbiAgYm90dG9tOiAtMTZweDtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMTkxLDE5MSwxOTEsMC4yKTtcXG59XFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1ib3R0b206YmVmb3JlIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxuICBib3R0b206IC03cHg7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstbWlkZGxlIHtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTZweDtcXG59XFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1sZWZ0OmJlZm9yZSxcXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLXJpZ2h0OmJlZm9yZSxcXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLWxlZnQsXFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1yaWdodCB7XFxuICBib3JkZXItd2lkdGg6IDZweCA4cHg7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstbGVmdDpiZWZvcmUsXFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1yaWdodDpiZWZvcmUge1xcbiAgdG9wOiAtNnB4O1xcbn1cXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLWxlZnQge1xcbiAgbGVmdDogLTE2cHg7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMTkxLDE5MSwxOTEsMC4yKTtcXG59XFxuLmstdG9vbHRpcC1jb250ZW50ID4gLmstYXJyb3cuay1sZWZ0OmJlZm9yZSB7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XFxuICBsZWZ0OiAtN3B4O1xcbn1cXG4uay10b29sdGlwLWNvbnRlbnQgPiAuay1hcnJvdy5rLXJpZ2h0IHtcXG4gIHJpZ2h0OiAtMTZweDtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDE5MSwxOTEsMTkxLDAuMik7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudCA+IC5rLWFycm93LmstcmlnaHQ6YmVmb3JlIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xcbiAgcmlnaHQ6IC03cHg7XFxufVxcbi5rLXRvb2x0aXAtY29udGVudC5rLWNhbm5vdC1ob3ZlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9jb21wb25lbnRzL3Rvb2x0aXAvaW5kZXguc3R5bFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi5Z+656GA55So5rOVXCIsXCJvcmRlclwiOjB9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCLpgJrov4fmt7vliqA8Y29kZT50bzwvY29kZT7lsZ7mgKfvvIzmnaXlsZXnpLrotoXpk77mjqVcIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCB7QnJlYWRjcnVtYiwgQnJlYWRjcnVtYkl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2JyZWFkY3J1bWInO1xcblxcbjxCcmVhZGNydW1iPlxcbiAgICA8QnJlYWRjcnVtYkl0ZW0gdG89XFxcIi9cXFwiPml0ZW0gMTwvQnJlYWRjcnVtYkl0ZW0+XFxuICAgIDxCcmVhZGNydW1iSXRlbSB0bz1cXFwiL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9cXFwiPml0ZW0gMjwvQnJlYWRjcnVtYkl0ZW0+XFxuICAgIDxCcmVhZGNydW1iSXRlbT5pdGVtIDM8L0JyZWFkY3J1bWJJdGVtPlxcbjwvQnJlYWRjcnVtYj5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MCxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHtCcmVhZGNydW1iLCBCcmVhZGNydW1iSXRlbX0gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnJlYWRjcnVtYic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJyZWFkY3J1bWI8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnJlYWRjcnVtYkl0ZW08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnRvPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCIvXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMTxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CcmVhZGNydW1iSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CcmVhZGNydW1iSXRlbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dG88L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcIi9jb21wb25lbnRzL2JyZWFkY3J1bWIvXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CcmVhZGNydW1iSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CcmVhZGNydW1iSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CcmVhZGNydW1iSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CcmVhZGNydW1iPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvZGVtb3MvYmFzaWMvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLmjInpkq7nsbvlnotcIixcIm9yZGVyXCI6MH0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIuacieWmguS4i+WHoOenjeexu+Wei++8mum7mOiupOaMiemSru+8jOS4u+aMiemSru+8jOitpuWRiuaMiemSru+8jOWNsemZqeaMiemSru+8jOaWh+Wtl+aMiemSruOAglwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcblxcbjxkaXY+XFxuICAgIDxCdXR0b24+ZGVmYXVsdDwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiPnByaW1heTwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIHR5cGU9XFxcIndhcm5pbmdcXFwiPndhcm5pbmc8L0J1dHRvbj5cXG4gICAgPEJ1dHRvbiB0eXBlPVxcXCJkYW5nZXJcXFwiPmRhbmdlcjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIHR5cGU9XFxcIm5vbmVcXFwiPm5vbmU8L0J1dHRvbj5cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIi5rLWJ0blxcbiAgICBtYXJnaW4tcmlnaHQgMjBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifSx7XCJsYW5ndWFnZVwiOlwidnVlXCIsXCJjb250ZW50XCI6XCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8QnV0dG9uPmRlZmF1bHQ8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCI+cHJpbWF5PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcIndhcm5pbmdcXFwiPndhcm5pbmc8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwiZGFuZ2VyXFxcIj5kYW5nZXI8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwibm9uZVxcXCI+bm9uZTwvQnV0dG9uPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZSBzcmM9XFxcIi4vaW5kZXguc3R5bFxcXCIgbGFuZz1cXFwic3R5bHVzXFxcIj48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgQnV0dG9uXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XCJ9XSxcImluZGV4XCI6MixcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEJ1dHRvbiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9idXR0b24nPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+ZGVmYXVsdDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPnByaW1heTxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJ3YXJuaW5nXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPndhcm5pbmc8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiZGFuZ2VyXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmRhbmdlcjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJub25lXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPm5vbmU8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1idG48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwidnVlXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGh0bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnRlbXBsYXRlPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+ZGVmYXVsdDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5wcmltYXk8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcIndhcm5pbmdcXFwiPC9zcGFuPiZndDs8L3NwYW4+d2FybmluZzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiZGFuZ2VyXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmRhbmdlcjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwibm9uZVxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5ub25lPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnRlbXBsYXRlPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3R5bGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNyYzwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiLi9pbmRleC5zdHlsXFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bGFuZzwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic3R5bHVzXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ1bmRlZmluZWRcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3R5bGU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5zY3JpcHQ8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiamF2YXNjcmlwdFxcXCI+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBCdXR0b24gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiB7XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNvbXBvbmVudHM8L3NwYW4+OiB7XFxuICAgICAgICBCdXR0b25cXG4gICAgfVxcbn1cXG48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnNjcmlwdDwvc3Bhbj4mZ3Q7PC9zcGFuPjwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvYmFzaWMvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi56aB55So54q25oCBXCIsXCJvcmRlclwiOjV9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCLmt7vliqA8Y29kZT5kaXNhYmxlZDwvY29kZT7lsZ7mgKfvvIzlj6/ku6XnpoHnlKjmjInpkq5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcXG5cXG48ZGl2PlxcbiAgICA8QnV0dG9uIGRpc2FibGVkPmRpc2FibGVkPC9CdXR0b24+XFxuICAgIDxCdXR0b24gZGlzYWJsZWQgdHlwZT1cXFwibm9uZVxcXCI+ZGlzYWJsZWQgdGV4dDwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIGRpc2FibGVkIGljb24gY2lyY2xlPjxpIGNsYXNzPVxcXCJrLWljb24gaW9uLWlvcy1zZWFyY2hcXFwiPjwvaT48L0J1dHRvbj5cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MyxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEJ1dHRvbiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9idXR0b24nPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5kaXNhYmxlZDwvc3Bhbj4mZ3Q7PC9zcGFuPmRpc2FibGVkPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmRpc2FibGVkPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJub25lXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmRpc2FibGVkIHRleHQ8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZGlzYWJsZWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmljb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNpcmNsZTwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWlvcy1zZWFyY2hcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvZGlzYWJsZWQvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2Rpc2FibGVkL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuaMiemSrue7hFwiLFwib3JkZXJcIjoxfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5bCGPGNvZGU+QnV0dG9uPC9jb2RlPuS9nOS4ujxjb2RlPkJ1dHRvbkdyb3VwPC9jb2RlPueahOWtkOWFg+e0oO+8jOWPr+S7peWxleekuuaMiemSrue7hOOAgue7mTxjb2RlPkJ1dHRvbkdyb3VwPC9jb2RlPua3u+WKoDxjb2RlPnZlcnRpY2FsPC9jb2RlPuWxnuaAp++8jOWPr+S7peaYr+aMiemSrue7hOe6teWQkeaOkuWIl+OAgue7mTxjb2RlPkJ1dHRvbkdyb3VwPC9jb2RlPua3u+WKoDxjb2RlPnJhZGlvPC9jb2RlPuWxnuaAp++8jOWPr+S7peS9v+aMiemSrue7hOaLpeacieexu+S8vHJhZGlv55qE5Y2V6YCJ6IO95Yqb44CCXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQge0J1dHRvbiwgQnV0dG9uR3JvdXB9IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XFxuXFxuPGRpdj5cXG4gICAgPEJ1dHRvbkdyb3VwPlxcbiAgICAgICAgPEJ1dHRvbj7lvIDmnLo8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24+5YWz5py6PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uPumHjeWQrzwvQnV0dG9uPlxcbiAgICA8L0J1dHRvbkdyb3VwPlxcbiAgICA8QnV0dG9uR3JvdXA+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiIHNpemU9XFxcInNtYWxsXFxcIj7lvIDmnLo8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPuWFs+acujwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIiBzaXplPVxcXCJzbWFsbFxcXCI+6YeN5ZCvPC9CdXR0b24+XFxuICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgIDxCdXR0b25Hcm91cD5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJrLWljb24gaW9uLWlvcy1hcnJvdy1sZWZ0XFxcIj48L2k+5LiK5LiA6aG1XFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPlxcbiAgICAgICAgICAgIOS4i+S4gOmhtTxpIGNsYXNzPVxcXCJrLWljb24gaW9uLWlvcy1hcnJvdy1yaWdodFxcXCI+PC9pPlxcbiAgICAgICAgPC9CdXR0b24+XFxuICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgIDxiciAvPjxiciAvPlxcbiAgICA8cD7nurXlkJHmjInpkq7nu4Q8L3A+XFxuICAgIDxCdXR0b25Hcm91cCB2ZXJ0aWNhbD5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPuW8gOacujwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIiBzaXplPVxcXCJzbWFsbFxcXCI+5YWz5py6PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiIHNpemU9XFxcInNtYWxsXFxcIj7ph43lkK88L0J1dHRvbj5cXG4gICAgPC9CdXR0b25Hcm91cD5cXG4gICAgPGJyIC8+PGJyIC8+XFxuICAgIDxwPnJhZGlv5oyJ6ZKu57uEPC9wPlxcbiAgICA8QnV0dG9uR3JvdXAgcmFkaW8gdi1tb2RlbD1cXFwiY2l0eVxcXCI+XFxuICAgICAgICA8QnV0dG9uIHZhbHVlPVxcXCJiZWlqaW5nXFxcIiB0eXBlPVxcXCJzbWFsbFxcXCI+5YyX5LqsPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHZhbHVlPVxcXCJzaGFuZ2hhaVxcXCIgdHlwZT1cXFwic21hbGxcXFwiPuS4iua1tzwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB2YWx1ZT1cXFwiZ3Vhbmd6aG91XFxcIiB0eXBlPVxcXCJzbWFsbFxcXCI+5bm/5beePC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHZhbHVlPVxcXCJzaGVuemhlblxcXCIgdHlwZT1cXFwic21hbGxcXFwiPua3seWcszwvQnV0dG9uPlxcbiAgICA8L0J1dHRvbkdyb3VwPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstYnRuc1xcbiAgICBtYXJnaW4tcmlnaHQgMjBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIGRlZmF1bHRzKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjaXR5OiAnYmVpamluZydcXG4gICAgICAgIH07XFxuICAgIH1cXG59XCJ9LHtcImxhbmd1YWdlXCI6XCJ2dWVcIixcImNvbnRlbnRcIjpcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxCdXR0b25Hcm91cD5cXG4gICAgICAgICAgICA8QnV0dG9uPuW8gOacujwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24+5YWz5py6PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbj7ph43lkK88L0J1dHRvbj5cXG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XFxuICAgICAgICA8QnV0dG9uR3JvdXA+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIiBzaXplPVxcXCJzbWFsbFxcXCI+5byA5py6PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIiBzaXplPVxcXCJzbWFsbFxcXCI+5YWz5py6PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIiBzaXplPVxcXCJzbWFsbFxcXCI+6YeN5ZCvPC9CdXR0b24+XFxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxcbiAgICAgICAgPEJ1dHRvbkdyb3VwIHZlcnRpY2FsPlxcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPuW8gOacujwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPuWFs+acujwvQnV0dG9uPlxcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgc2l6ZT1cXFwic21hbGxcXFwiPumHjeWQrzwvQnV0dG9uPlxcbiAgICAgICAgPC9CdXR0b25Hcm91cD5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG48c3R5bGUgc3JjPVxcXCIuL2luZGV4LnN0eWxcXFwiIGxhbmc9XFxcInN0eWx1c1xcXCI+PC9zdHlsZT5cXG48c2NyaXB0PlxcbmltcG9ydCB7QnV0dG9uLCBCdXR0b25Hcm91cH0gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIEJ1dHRvbiwgQnV0dG9uR3JvdXBcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cIn1dLFwiaW5kZXhcIjo0LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4ge0J1dHRvbiwgQnV0dG9uR3JvdXB9IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2J1dHRvbic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+5byA5py6PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+5YWz5py6PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+6YeN5ZCvPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uR3JvdXA8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uR3JvdXA8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNpemU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPuW8gOacujxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNpemU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPuWFs+acujxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNpemU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPumHjeWQrzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbkdyb3VwPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbkdyb3VwPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jbGFzczwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiay1pY29uIGlvbi1pb3MtYXJyb3ctbGVmdFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPuS4iuS4gOmhtVxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2l6ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic21hbGxcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAg5LiL5LiA6aG1PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24taW9zLWFycm93LXJpZ2h0XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5icjwvc3Bhbj4gLyZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+YnI8L3NwYW4+IC8mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5wPC9zcGFuPiZndDs8L3NwYW4+57q15ZCR5oyJ6ZKu57uEPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnA8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uR3JvdXA8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnZlcnRpY2FsPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7lvIDmnLo8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7lhbPmnLo8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7ph43lkK88c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5icjwvc3Bhbj4gLyZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+YnI8L3NwYW4+IC8mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5wPC9zcGFuPiZndDs8L3NwYW4+cmFkaW/mjInpkq7nu4Q8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+cmFkaW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImNpdHlcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnZhbHVlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJiZWlqaW5nXFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic21hbGxcXFwiPC9zcGFuPiZndDs8L3NwYW4+5YyX5LqsPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj52YWx1ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic2hhbmdoYWlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7kuIrmtbc8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnZhbHVlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJndWFuZ3pob3VcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7lub/lt548c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnZhbHVlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzaGVuemhlblxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPua3seWcszxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbkdyb3VwPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1idG5zPC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyaWJ1dGVcXFwiPm1hcmdpbi1yaWdodDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtbnVtYmVyXFxcIj4yMHB4PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnN0eWwnPC9zcGFuPjsgXFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIGRlZmF1bHRzKCkge1xcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+cmV0dXJuPC9zcGFuPiB7XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2l0eTwvc3Bhbj46IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2JlaWppbmcnPC9zcGFuPlxcbiAgICAgICAgfTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJ2dWVcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMgaHRtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+dGVtcGxhdGU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPuW8gOacujxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj7lhbPmnLo8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+6YeN5ZCvPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbkdyb3VwPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNpemU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPuW8gOacujxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7lhbPmnLo8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2l6ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic21hbGxcXFwiPC9zcGFuPiZndDs8L3NwYW4+6YeN5ZCvPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbkdyb3VwPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dmVydGljYWw8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7lvIDmnLo8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2l6ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic21hbGxcXFwiPC9zcGFuPiZndDs8L3NwYW4+5YWz5py6PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNpemU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPumHjeWQrzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b25Hcm91cDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnRlbXBsYXRlPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3R5bGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNyYzwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiLi9pbmRleC5zdHlsXFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bGFuZzwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwic3R5bHVzXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ1bmRlZmluZWRcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3R5bGU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5zY3JpcHQ8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiamF2YXNjcmlwdFxcXCI+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB7QnV0dG9uLCBCdXR0b25Hcm91cH0gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiB7XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNvbXBvbmVudHM8L3NwYW4+OiB7XFxuICAgICAgICBCdXR0b24sIEJ1dHRvbkdyb3VwXFxuICAgIH1cXG59XFxuPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5zY3JpcHQ8L3NwYW4+Jmd0Ozwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvZ3JvdXAvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL2dyb3VwL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuWbvuagh+aMiemSrlwiLFwib3JkZXJcIjoxfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi57uZPGNvZGU+QnV0dG9uPC9jb2RlPua3u+WKoDxjb2RlPmljb248L2NvZGU+5bGe5oCn77yM5Y+v5Lul5bGV56S65Zu+5qCH5oyJ6ZKu44CC5Zu+5qCH5oyJ6ZKu5LuF5LuF5piv5L2/5oyJ6ZKu55qE5a696auY55u4562J77yM5q2k5pe25L2g5Y+v5Lul5bCG5Lu75oSP5Zu+5qCH5YWD57Sg5L2c5Li65a6D55qE5a2Q5YWD57Sg44CCPGNvZGU+Y2lyY2xlPC9jb2RlPuWxnuaAp+WPr+S7peWxleekuuWchuW9ouWbvuagh+OAguWmguaenOS9oOS4jemcgOimgeWuvemrmOebuOetieeahOWbvuagh+aMiemSru+8jOiAjOS7heS7heaYr+W4puWbvuagh+eahOaWh+Wtl+aMiemSru+8jOWOu+aOiTxjb2RlPmljb248L2NvZGU+5bGe5oCn5Y2z5Y+v44CCPGJsb2NrcXVvdGU+XFxu6K+357uZ5Zu+5qCH5YWD57Sg5re75YqgPGNvZGU+ay1pY29uPC9jb2RlPuexu+WQje+8jOeUqOS6juWumuS9jeWbvuagh+WFg+e0oO+8jOS7peS+v+aMiemSruWPmOS4ujxjb2RlPmxvYWRpbmc8L2NvZGU+54q25oCB5pe26IO95aSf5bCG5a6D5pu/5o2i5Li6bG9hZGluZ+WbvuaghzwvYmxvY2txdW90ZT5cXG5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcXG5cXG48ZGl2PlxcbiAgICA8QnV0dG9uIGljb24+PGkgY2xhc3M9XFxcImlvbi1pb3Mtc2VhcmNoXFxcIj48L2k+PC9CdXR0b24+XFxuICAgIDxCdXR0b24gaWNvbiBjaXJjbGU+PGkgY2xhc3M9XFxcImlvbi1pb3Mtc2VhcmNoXFxcIj48L2k+PC9CdXR0b24+XFxuICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCI+PGkgY2xhc3M9XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI+PC9pPuaQnOe0ojwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIGNpcmNsZSB0eXBlPSdwcmltYXJ5Jz48aSBjbGFzcz1cXFwiay1pY29uIGlvbi1pb3Mtc2VhcmNoXFxcIj48L2k+5pCc57SiPC9CdXR0b24+XFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCIuay1idG5cXG4gICAgbWFyZ2luLXJpZ2h0IDIwcHhcIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjo1LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gQnV0dG9uIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2J1dHRvbic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmljb248L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jbGFzczwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiaW9uLWlvcy1zZWFyY2hcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+aWNvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2lyY2xlPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImlvbi1pb3Mtc2VhcmNoXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPuaQnOe0ojxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jaXJjbGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J3ByaW1hcnknPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPuaQnOe0ojxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMgc3R5bFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtc2VsZWN0b3ItY2xhc3NcXFwiPi5rLWJ0bjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0cmlidXRlXFxcIj5tYXJnaW4tcmlnaHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLW51bWJlclxcXCI+MjBweDwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC5zdHlsJzwvc3Bhbj47IFxcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvaWNvbi9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvaWNvbi9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLliqDovb3nirbmgIHmjInpkq5cIixcIm9yZGVyXCI6Mn0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIua3u+WKoDxjb2RlPmxvYWRpbmc8L2NvZGU+5bGe5oCn77yM5Y+v5Lul5bCG5oyJ6ZKu6K6+5Li65Yqg6L2954q25oCB77yM5q2k5pe25oyJ6ZKu5LiN5Y+v54K544CCXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQgQnV0dG9uIGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XFxuXFxuPGRpdj5cXG4gICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIiBsb2FkaW5nPuehruiupDwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIGljb24gY2lyY2xlIGxvYWRpbmc+PGkgY2xhc3M9XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI+PC9pPjwvQnV0dG9uPlxcbiAgICA8YnIgLz4gPGJyIC8+XFxuICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgXFxuICAgICAgICBsb2FkaW5nPXt7IHNlbGYuZ2V0KCdsb2FkaW5nMScpIH19XFxuICAgICAgICBldi1jbGljaz17eyBzZWxmLm9uQ2xpY2suYmluZChzZWxmLCAnbG9hZGluZzEnKSB9fVxcbiAgICA+54K55Ye75Yqg6L29PC9CdXR0b24+XFxuICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCIgXFxuICAgICAgICBsb2FkaW5nPXt7IHNlbGYuZ2V0KCdsb2FkaW5nMicpIH19XFxuICAgICAgICBldi1jbGljaz17eyBzZWxmLm9uQ2xpY2suYmluZChzZWxmLCAnbG9hZGluZzInKSB9fVxcbiAgICA+PGkgY2xhc3M9XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI+PC9pPueCueWHu+WKoOi9vTwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIGljb24gY2lyY2xlXFxuICAgICAgICBsb2FkaW5nPXt7IHNlbGYuZ2V0KCdsb2FkaW5nMycpIH19XFxuICAgICAgICBldi1jbGljaz17eyBzZWxmLm9uQ2xpY2suYmluZChzZWxmLCAnbG9hZGluZzMnKSB9fVxcbiAgICA+PGkgY2xhc3M9XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI+PC9pPjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiIFxcbiAgICAgICAgbG9hZGluZz17eyBzZWxmLmdldCgnbG9hZGluZzQnKSB9fVxcbiAgICAgICAgZXYtY2xpY2s9e3sgc2VsZi5vbkNsaWNrLmJpbmQoc2VsZiwgJ2xvYWRpbmc0JykgfX1cXG4gICAgPuWbvuagh+WcqOWPs+S+pzxpIGNsYXNzPVxcXCJrLWljb24gaW9uLWlvcy1zZWFyY2hcXFwiPjwvaT48L0J1dHRvbj5cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIi5rLWJ0blxcbiAgICBtYXJnaW4tcmlnaHQgMjBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIG9uQ2xpY2sobmFtZSkge1xcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgdHJ1ZSk7XFxuICAgIH1cXG59XCJ9XSxcImluZGV4XCI6NixcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEJ1dHRvbiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9idXR0b24nPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bG9hZGluZzwvc3Bhbj4mZ3Q7PC9zcGFuPuehruiupDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5pY29uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jaXJjbGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxvYWRpbmc8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jbGFzczwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiay1pY29uIGlvbi1pb3Mtc2VhcmNoXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5icjwvc3Bhbj4gLyZndDs8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmJyPC9zcGFuPiAvJmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4gXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5sb2FkaW5nPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmLmdldDwvc3Bhbj4oJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxvYWRpbmcxPC9zcGFuPicpIH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5ldi1jbGljazwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZi5vbkNsaWNrLmJpbmQ8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGY8L3NwYW4+LCAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bG9hZGluZzE8L3NwYW4+JykgfX1cXG4gICAgJmd0Ozwvc3Bhbj7ngrnlh7vliqDovb08c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+IFxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bG9hZGluZzwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZi5nZXQ8L3NwYW4+KCc8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5sb2FkaW5nMjwvc3Bhbj4nKSB9fVxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZXYtY2xpY2s8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e3s8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGYub25DbGljay5iaW5kPC9zcGFuPig8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmPC9zcGFuPiwgJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxvYWRpbmcyPC9zcGFuPicpIH19XFxuICAgICZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPueCueWHu+WKoOi9vTxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5pY29uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jaXJjbGU8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5sb2FkaW5nPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmLmdldDwvc3Bhbj4oJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxvYWRpbmczPC9zcGFuPicpIH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5ldi1jbGljazwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZi5vbkNsaWNrLmJpbmQ8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGY8L3NwYW4+LCAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bG9hZGluZzM8L3NwYW4+JykgfX1cXG4gICAgJmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jbGFzczwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiay1pY29uIGlvbi1pb3Mtc2VhcmNoXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiBcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxvYWRpbmc8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e3s8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGYuZ2V0PC9zcGFuPignPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bG9hZGluZzQ8L3NwYW4+JykgfX1cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmV2LWNsaWNrPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmLm9uQ2xpY2suYmluZDwvc3Bhbj4oPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZjwvc3Bhbj4sICc8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5sb2FkaW5nNDwvc3Bhbj4nKSB9fVxcbiAgICAmZ3Q7PC9zcGFuPuWbvuagh+WcqOWPs+S+pzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWlvcy1zZWFyY2hcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1idG48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG5cXG4gICAgb25DbGljayhuYW1lKSB7XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj50aGlzPC9zcGFuPi5zZXQobmFtZSwgPHNwYW4gY2xhc3M9XFxcImhsanMtbGl0ZXJhbFxcXCI+dHJ1ZTwvc3Bhbj4pO1xcbiAgICB9XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9sb2FkaW5nL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2J1dHRvbi9kZW1vcy9sb2FkaW5nL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuaMiemSruWwuuWvuFwiLFwib3JkZXJcIjo0fSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5oyJ6ZKu5pyJ5LiJ56eN5bC65a+477yaPGNvZGU+ZGVmYXVsdDwvY29kZT4sPGNvZGU+c21hbGw8L2NvZGU+LCA8Y29kZT5taW5pPC9jb2RlPuOAglwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcblxcbjxkaXY+XFxuICAgIDxCdXR0b24+ZGVmYXVsdDwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIHR5cGU9XFxcInNtYWxsXFxcIj5zbWFsbDwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIHR5cGU9XFxcIm1pbmlcXFwiPm1pbmk8L0J1dHRvbj5cXG4gICAgPGJyIC8+PGJyIC8+XFxuICAgIDxCdXR0b24gaWNvbiBjaXJjbGU+PGkgY2xhc3M9XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI+PC9pPjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uIGljb24gY2lyY2xlIHNpemU9XFxcInNtYWxsXFxcIj48aSBjbGFzcz1cXFwiay1pY29uIGlvbi1pb3Mtc2VhcmNoXFxcIj48L2k+PC9CdXR0b24+XFxuICAgIDxCdXR0b24gaWNvbiBjaXJjbGUgc2l6ZT1cXFwibWluaVxcXCI+PGkgY2xhc3M9XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI+PC9pPjwvQnV0dG9uPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstYnRuXFxuICAgIG1hcmdpbi1yaWdodCAyMHB4XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6NyxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEJ1dHRvbiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9idXR0b24nPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+ZGVmYXVsdDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzbWFsbFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5zbWFsbDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJtaW5pXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPm1pbmk8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmJyPC9zcGFuPiAvJmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5icjwvc3Bhbj4gLyZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+aWNvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2lyY2xlPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24taW9zLXNlYXJjaFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5pY29uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jaXJjbGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNpemU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNtYWxsXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWlvcy1zZWFyY2hcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+aWNvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2lyY2xlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zaXplPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJtaW5pXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWlvcy1zZWFyY2hcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1idG48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL3NpemUvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvYnV0dG9uL2RlbW9zL3NpemUvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi5oyH5a6a5oyJ6ZKudGFnTmFtZVwiLFwib3JkZXJcIjo1fSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwiPGNvZGU+QnV0dG9uPC9jb2RlPum7mOiupOa4suafk+aIkDxjb2RlPmJ1dHRvbjwvY29kZT7lhYPntKDvvIzpgJrov4c8Y29kZT50YWdOYW1lPC9jb2RlPu+8jOaIkeS7rOWPr+S7pea4suafk+aIkOS7u+aEj+WFg+e0oOaIlue7hOS7tuOAguatpOaXtu+8jOaIkeS7rOWPr+S7pemAmui/hzxjb2RlPnRhZ1Byb3BzPC9jb2RlPuWxnuaAp++8jOe7meaMh+WumueahDxjb2RlPnRhZ05hbWU8L2NvZGU+5Lyg6YCS5LiOPGNvZGU+QnV0dG9uPC9jb2RlPuWxnuaAp+WQjeebuOWGsueqgeeahOWxnuaAp+OAgjxibG9ja3F1b3RlPlxcbuW9k+e7mTxjb2RlPkJ1dHRvbjwvY29kZT7mjIflrpo8Y29kZT5ocmVmPC9jb2RlPuWxnuaAp+aXtu+8jOWImeWug+S8muW8uuWItua4suafk+aIkDxjb2RlPmE8L2NvZGU+5qCH562+PC9ibG9ja3F1b3RlPlxcblwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcblxcbjxkaXY+XFxuICAgIDxCdXR0b24gdGFnTmFtZT1cXFwiZGl2XFxcIiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5kaXblhYPntKDmjInpkq48L0J1dHRvbj5cXG4gICAgPEJ1dHRvbiBocmVmPVxcXCJodHRwczovL3d3dy5rc3l1bi5jb21cXFwiIFxcbiAgICAgICAgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiAyMHB4O1xcXCJcXG4gICAgICAgIHRhcmdldD1cXFwiX2JsYW5rXFxcIlxcbiAgICA+6LaF6ZO+5o6l5oyJ6ZKuPC9CdXR0b24+XFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjgsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBCdXR0b24gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcInhtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dGFnTmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiZGl2XFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwicHJpbWFyeVxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5kaXblhYPntKDmjInpkq48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+aHJlZjwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiaHR0cHM6Ly93d3cua3N5dW4uY29tXFxcIjwvc3Bhbj4gXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwibWFyZ2luLWxlZnQ6IDIwcHg7XFxcIjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnRhcmdldDwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiX2JsYW5rXFxcIjwvc3Bhbj5cXG4gICAgJmd0Ozwvc3Bhbj7otoXpk77mjqXmjInpkq48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvdGFnTmFtZS9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9idXR0b24vZGVtb3MvdGFnTmFtZS9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLln7rmnKznlKjms5VcIixcIm9yZGVyXCI6MH0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxjb2RlPkNoZWNrYm94PC9jb2RlPueahOWfuuacrOeUqOazle+8jOWPiuemgeeUqOeKtuaAgVwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IENoZWNrYm94IGZyb20gJ2twYy9jb21wb25lbnRzL2NoZWNrYm94JztcXG5cXG48ZGl2PlxcbiAgICA8Q2hlY2tib3g+Y2hlY2tib3g8L0NoZWNrYm94PlxcbiAgICA8Q2hlY2tib3ggZGlzYWJsZWQ+ZGlzYWJsZWQgY2hlY2tib3g8L0NoZWNrYm94PlxcbiAgICA8Q2hlY2tib3ggdmFsdWU9e3sgdHJ1ZSB9fSBkaXNhYmxlZD5kaXNhYmxlZCBjaGVja2VkIGNoZWNrYm94PC9DaGVja2JveD5cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIi5rLWNoZWNrYm94XFxuICAgIG1hcmdpbi1yaWdodCAyMHB4XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MTAsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBDaGVja2JveCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9jaGVja2JveCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5DaGVja2JveDwvc3Bhbj4mZ3Q7PC9zcGFuPmNoZWNrYm94PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5kaXNhYmxlZDwvc3Bhbj4mZ3Q7PC9zcGFuPmRpc2FibGVkIGNoZWNrYm94PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj52YWx1ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHJ1ZTwvc3Bhbj4gfX0gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZGlzYWJsZWQ8L3NwYW4+Jmd0Ozwvc3Bhbj5kaXNhYmxlZCBjaGVja2VkIGNoZWNrYm94PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1jaGVja2JveDwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0cmlidXRlXFxcIj5tYXJnaW4tcmlnaHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLW51bWJlclxcXCI+MjBweDwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC5zdHlsJzwvc3Bhbj47IFxcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCJDaGVja2JveOe7hFwiLFwib3JkZXJcIjoxfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5ZKM5rWP6KeI5Zmo5Y6f55Sf6KGM5Li65LiA5qC377yM57uZPGNvZGU+Q2hlY2tib3g8L2NvZGU+5oyH5a6a55u45ZCM55qEPGNvZGU+bmFtZTwvY29kZT7vvIzlroPku6zkvr/nu4TmiJDkuoblpI3pgInmoYbnu4TjgII8YmxvY2txdW90ZT5cXG7mraTml7blv4XpobvliJ3lp4vljJbnu5HlrprnmoTlsZ7mgKfkuLrmlbDnu4TvvIzlkKbliJk8Y29kZT5DaGVja2JveDwvY29kZT7lsIbnsbvkvLw8Y29kZT5yYWRpbzwvY29kZT7kuIDmoLflj6rog73ljZXpgIk8L2Jsb2NrcXVvdGU+XFxuXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQgQ2hlY2tib3ggZnJvbSAna3BjL2NvbXBvbmVudHMvY2hlY2tib3gnO1xcblxcbjxkaXY+XFxuICAgIDxDaGVja2JveCBuYW1lPVxcXCJsYW5ndWFnZXNcXFwiIHRydWVWYWx1ZT1cXFwiSmF2YXNjcmlwdFxcXCIgdi1tb2RlbD1cXFwibGFuZ3VhZ2VzXFxcIj5KYXZhc2NyaXB0PC9DaGVja2JveD5cXG4gICAgPENoZWNrYm94IG5hbWU9XFxcImxhbmd1YWdlc1xcXCIgdHJ1ZVZhbHVlPVxcXCJDKytcXFwiIHYtbW9kZWw9XFxcImxhbmd1YWdlc1xcXCI+QysrPC9DaGVja2JveD5cXG4gICAgPENoZWNrYm94IG5hbWU9XFxcImxhbmd1YWdlc1xcXCIgdHJ1ZVZhbHVlPVxcXCJQSFBcXFwiIHYtbW9kZWw9XFxcImxhbmd1YWdlc1xcXCI+UEhQPC9DaGVja2JveD5cXG4gICAgWW91ciBzZWxlY3RlZDoge3sgSlNPTi5zdHJpbmdpZnkoc2VsZi5nZXQoJ2xhbmd1YWdlcycpKSB9fVxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstY2hlY2tib3hcXG4gICAgbWFyZ2luLXJpZ2h0IDIwcHhcIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcblxcbiAgICBkZWZhdWx0cygpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgLy8g5b+F6aG75Yid5aeL5YyW5Li65pWw57uEXFxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbXVxcbiAgICAgICAgfTtcXG4gICAgfVxcbn1cIn1dLFwiaW5kZXhcIjoxMSxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IENoZWNrYm94IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2NoZWNrYm94Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcInhtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5uYW1lPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJsYW5ndWFnZXNcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50cnVlVmFsdWU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcIkphdmFzY3JpcHRcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj52LW1vZGVsPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJsYW5ndWFnZXNcXFwiPC9zcGFuPiZndDs8L3NwYW4+SmF2YXNjcmlwdDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5DaGVja2JveDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5DaGVja2JveDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bmFtZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwibGFuZ3VhZ2VzXFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHJ1ZVZhbHVlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJDKytcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj52LW1vZGVsPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJsYW5ndWFnZXNcXFwiPC9zcGFuPiZndDs8L3NwYW4+QysrPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkNoZWNrYm94PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5uYW1lPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJsYW5ndWFnZXNcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50cnVlVmFsdWU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcIlBIUFxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImxhbmd1YWdlc1xcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5QSFA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+Q2hlY2tib3g8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgWW91ciBzZWxlY3RlZDoge3sgSlNPTi5zdHJpbmdpZnkoc2VsZi5nZXQoJ2xhbmd1YWdlcycpKSB9fVxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBzdHlsXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1zZWxlY3Rvci1jbGFzc1xcXCI+LmstY2hlY2tib3g8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG5cXG4gICAgZGVmYXVsdHMoKSB7XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5yZXR1cm48L3NwYW4+IHtcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jb21tZW50XFxcIj4vLyDlv4XpobvliJ3lp4vljJbkuLrmlbDnu4Q8L3NwYW4+XFxuICAgICAgICAgICAgbGFuZ3VhZ2VzOiBbXVxcbiAgICAgICAgfTtcXG4gICAgfVxcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9ncm91cC9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9jaGVja2JveC9kZW1vcy9ncm91cC9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLmjIflrprpgInkuK3lkozpnZ7pgInkuK3nmoTlj5blgLxcIixcIm9yZGVyXCI6MX0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxjb2RlPkNoZWNrYm94PC9jb2RlPum7mOiupOmAieS4reeahOWAvOS4ujxjb2RlPnRydWU8L2NvZGU+77yM6Z2e6YCJ5Lit55qE5YC85Li6PGNvZGU+ZmFsc2U8L2NvZGU+77yM6YCa6L+HPGNvZGU+dHJ1ZVZhbHVlPC9jb2RlPuWSjDxjb2RlPmZhbHNlVmFsdWU8L2NvZGU+5bGe5oCn77yM5oiR5Lus5Y+v5Lul5oyH5a6a6YCJ5Lit5ZKM6Z2e6YCJ5Lit55qE5YC844CCPGJsb2NrcXVvdGU+XFxu5b2T5oyH5a6a5YC85Li65a+56LGh5pe277yM5LiN6KaB5Zyo5qih5p2/5Lit55u05o6l5a6a5LmJ5a+56LGh5a2X6Z2i6YeP77yI5aaC77yadHJ1ZVZhbHVlPXt7IHthOiAxfSB9fe+8ie+8jOWboOS4uuWcqOaooeadv+S4reWIm+W7uueahOWvueixoeavj+asoeaJp+ihjOaooeadv+mDveS8mueUn+aIkOS4gOS7veaWsOaVsOaNru+8jOS9v+WFqOetieWIpOaWrSg8Y29kZT49PT08L2NvZGU+KeWkseaViOOAguatpOaXtuW6lOivpeWcqGpz5Lit5a6a5LmJ6K+l5a+56LGh77yM54S25ZCO5qih5p2/5Lit5byV55So5a6D44CCPC9ibG9ja3F1b3RlPlxcblwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IENoZWNrYm94IGZyb20gJ2twYy9jb21wb25lbnRzL2NoZWNrYm94JztcXG5cXG48ZGl2PlxcbiAgICA8Q2hlY2tib3ggdi1tb2RlbD1cXFwidmFsdWUxXFxcIj7pu5jorqTlgLw6IHt7IEpTT04uc3RyaW5naWZ5KHNlbGYuZ2V0KCd2YWx1ZTEnKSkgfX08L0NoZWNrYm94PlxcbiAgICA8Q2hlY2tib3ggdi1tb2RlbD1cXFwidmFsdWUyXFxcIiB0cnVlVmFsdWU9XFxcImNoZWNrZWRcXFwiPlxcbiAgICAgICAg5oyH5a6a6YCJ5Lit5pe25Y+W5YC85Li6XFxcImNoZWNrZWRcXFwiOiB7eyBKU09OLnN0cmluZ2lmeShzZWxmLmdldCgndmFsdWUyJykpIH19XFxuICAgIDwvQ2hlY2tib3g+XFxuICAgIDxDaGVja2JveCB2LW1vZGVsPVxcXCJ2YWx1ZTNcXFwiIHRydWVWYWx1ZT17eyAwIH19IGZhbHNlVmFsdWU9e3sgc2VsZi5nZXQoXFxcInVuY2hlY2tlZFZhbHVlXFxcIikgfX0+XFxuICAgICAgICDmjIflrprpnZ7pgInkuK3ml7blj5blgLzkuLrlr7nosaHvvJp7eyBKU09OLnN0cmluZ2lmeShzZWxmLmdldCgndmFsdWUzJykpIH19XFxuICAgIDwvQ2hlY2tib3g+XFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCIuay1jaGVja2JveFxcbiAgICBtYXJnaW4tcmlnaHQgMjBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIGRlZmF1bHRzKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICB1bmNoZWNrZWRWYWx1ZToge1xcbiAgICAgICAgICAgICAgICB1bmNoZWNrZWQ6IHRydWVcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICB9XFxufVwifV0sXCJpbmRleFwiOjEyLFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gQ2hlY2tib3ggPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvY2hlY2tib3gnPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+Q2hlY2tib3g8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInZhbHVlMVxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj7pu5jorqTlgLw6IHt7IEpTT04uc3RyaW5naWZ5KHNlbGYuZ2V0KCd2YWx1ZTEnKSkgfX08c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+Q2hlY2tib3g8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+Q2hlY2tib3g8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInZhbHVlMlxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnRydWVWYWx1ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiY2hlY2tlZFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIOaMh+WumumAieS4reaXtuWPluWAvOS4ulxcXCJjaGVja2VkXFxcIjoge3sgSlNPTi5zdHJpbmdpZnkoc2VsZi5nZXQoJ3ZhbHVlMicpKSB9fVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+Q2hlY2tib3g8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+Q2hlY2tib3g8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInZhbHVlM1xcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnRydWVWYWx1ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+MDwvc3Bhbj4gfX0gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZmFsc2VWYWx1ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZi5nZXQ8L3NwYW4+KFxcXCI8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj51bmNoZWNrZWRWYWx1ZTwvc3Bhbj5cXFwiKSB9fSZndDs8L3NwYW4+XFxuICAgICAgICDmjIflrprpnZ7pgInkuK3ml7blj5blgLzkuLrlr7nosaHvvJp7eyBKU09OLnN0cmluZ2lmeShzZWxmLmdldCgndmFsdWUzJykpIH19XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5DaGVja2JveDwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBzdHlsXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1zZWxlY3Rvci1jbGFzc1xcXCI+LmstY2hlY2tib3g8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG5cXG4gICAgZGVmYXVsdHMoKSB7XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5yZXR1cm48L3NwYW4+IHtcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj51bmNoZWNrZWRWYWx1ZTwvc3Bhbj46IHtcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dW5jaGVja2VkPC9zcGFuPjogPHNwYW4gY2xhc3M9XFxcImhsanMtbGl0ZXJhbFxcXCI+dHJ1ZTwvc3Bhbj5cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9O1xcbiAgICB9XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL3ZhbHVlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2NoZWNrYm94L2RlbW9zL3ZhbHVlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuWfuuacrOeUqOazlVwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5Z+65pys55So5rOV5ZKM56aB55So54q25oCBXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICdrcGMvY29tcG9uZW50cy9kYXRlcGlja2VyJztcXG5cXG48ZGl2PlxcbiAgICA8RGF0ZXBpY2tlciB2LW1vZGVsPVxcXCJkYXRlXFxcIiAvPlxcbiAgICA8RGF0ZXBpY2tlciBkaXNhYmxlZCB2YWx1ZT1cXFwiMjAxOC0wMS0wMVxcXCIvPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstZGF0ZXBpY2tlclxcbiAgICBtYXJnaW4tcmlnaHQgMjBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjE0LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gRGF0ZXBpY2tlciA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9kYXRlcGlja2VyJzwvc3Bhbj47XFxuXFxuJmx0O2RpdiZndDtcXG4gICAgJmx0O0RhdGVwaWNrZXIgdi1tb2RlbD1cXFwiZGF0ZVxcXCIgLyZndDtcXG4gICAgJmx0O0RhdGVwaWNrZXIgZGlzYWJsZWQgdmFsdWU9XFxcIjIwMTgtMDEtMDFcXFwiLyZndDtcXG4mbHQ7L2RpdiZndDs8L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1kYXRlcGlja2VyPC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyaWJ1dGVcXFwiPm1hcmdpbi1yaWdodDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtbnVtYmVyXFxcIj4yMHB4PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnN0eWwnPC9zcGFuPjsgXFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvYmFzaWMvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLlj6/muIXnqbpcIixcIm9yZGVyXCI6MX0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIua3u+WKoDxjb2RlPmNsZWFyYWJsZTwvY29kZT7lsZ7mgKfvvIzlj6/ku6XmuIXnqbrlvZPliY3ml6XmnJ/jgIJcIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBEYXRlcGlja2VyIGZyb20gJ2twYy9jb21wb25lbnRzL2RhdGVwaWNrZXInO1xcblxcbjxEYXRlcGlja2VyIGNsZWFyYWJsZSB2LW1vZGVsPVxcXCJkYXRlXFxcIiAvPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjoxNSxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IERhdGVwaWNrZXIgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvZGF0ZXBpY2tlcic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRhdGVwaWNrZXI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsZWFyYWJsZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+di1tb2RlbDwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiZGF0ZVxcXCI8L3NwYW4+IC8mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL2NsZWFyYWJsZS9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLpgInmi6nml7bpl7RcIixcIm9yZGVyXCI6NX0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIuWwhjxjb2RlPnR5cGU8L2NvZGU+5bGe5oCn5oyH5a6a5Li6PGNvZGU+ZGF0ZXRpbWU8L2NvZGU+77yM5Y2z5Y+v6K6p5pel5pyf5pSv5oyB6YCJ5oup5pe26Ze044CCXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICdrcGMvY29tcG9uZW50cy9kYXRlcGlja2VyJztcXG5cXG48RGF0ZXBpY2tlciB0eXBlPVxcXCJkYXRldGltZVxcXCIgdi1tb2RlbD1cXFwiZGF0ZXRpbWVcXFwiIC8+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjE2LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gRGF0ZXBpY2tlciA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9kYXRlcGlja2VyJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcInhtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RGF0ZXBpY2tlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHlwZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiZGF0ZXRpbWVcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj52LW1vZGVsPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJkYXRldGltZVxcXCI8L3NwYW4+IC8mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL2RhdGV0aW1lL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGF0ZXRpbWUvaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi56aB55So5oyH5a6a5pel5pyfXCIsXCJvcmRlclwiOjN9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCLpgJrov4c8Y29kZT5kaXNhYmxlZERhdGU8L2NvZGU+5bGe5oCn77yM5Y+v5Lul5a6a5LmJ5Liq5pa55rOV77yM5p2l5oyH5a6a5ZOq5Lqb5pel5pyf6KKr56aB5q2i6YCJ5oup44CC57uE5Lu25Lya5bCG5LiA5Liq5pel5pyf5a2X56ym5Liy5L2c5Li65pa55rOV55qE5Y+C5pWw77yM5aaC5p6c5pa55rOV6L+U5Zue4oCc55yf4oCd5YiZ56aB55So5o6J6K+l5pel5pyf77yM5ZCm5YiZ5LiN56aB55So44CCXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQgRGF0ZXBpY2tlciBmcm9tICdrcGMvY29tcG9uZW50cy9kYXRlcGlja2VyJztcXG5cXG48RGF0ZXBpY2tlciBkaXNhYmxlZERhdGU9e3sgKGRhdGUpID0+IHtcXG4gICAgLy8g56aB55So5o6JMjAxOC0wMi0wNeWSjDIwMTgtMDMtMDVcXG4gICAgcmV0dXJuIH5bJzIwMTgtMDItMDUnLCAnMjAxOC0wMy0wNSddLmluZGV4T2YoZGF0ZSk7XFxufSB9fSAvPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjoxNyxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IERhdGVwaWNrZXIgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvZGF0ZXBpY2tlcic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRhdGVwaWNrZXI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmRpc2FibGVkRGF0ZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gKDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmRhdGU8L3NwYW4+KSA9Jmd0Ozwvc3Bhbj4ge1xcbiAgICAvLyDnpoHnlKjmjokyMDE4LTAyLTA15ZKMMjAxOC0wMy0wNVxcbiAgICByZXR1cm4gflsnMjAxOC0wMi0wNScsICcyMDE4LTAzLTA1J10uaW5kZXhPZihkYXRlKTtcXG59IH19IC8mZ3Q7PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGlzYWJsZWREYXRlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGVtb3MvZGlzYWJsZWREYXRlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuacgOWkp+WSjOacgOWwj+aXpeacn1wiLFwib3JkZXJcIjoyfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi6YCa6L+HPGNvZGU+bWF4RGF0ZTwvY29kZT7lkow8Y29kZT5taW5EYXRlPC9jb2RlPuWPr+S7pee7mee7hOS7tuaMh+WumuacgOWkp+WSjOacgOWwj+mAieaLqeaXpeacn+OAglwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAna3BjL2NvbXBvbmVudHMvZGF0ZXBpY2tlcic7XFxuXFxuPGRpdj5cXG4gICAgPERhdGVwaWNrZXIgdi1tb2RlbD1cXFwiZnJvbVxcXCIgcGxhY2Vob2xkZXI9XFxcIuW8gOWni+aXpeacn1xcXCJcXG4gICAgICAgIG1heERhdGU9e3sgc2VsZi5nZXQoJ3RvJykgfX1cXG4gICAgICAgIG1pbkRhdGU9e3sgbmV3IERhdGUoKSB9fVxcbiAgICAvPlxcbiAgICA8RGF0ZXBpY2tlciB2LW1vZGVsPVxcXCJ0b1xcXCIgcGxhY2Vob2xkZXI9XFxcIue7k+adn+aXpeacn1xcXCJcXG4gICAgICAgIG1pbkRhdGU9e3sgc2VsZi5nZXQoJ2Zyb20nKSB9fVxcbiAgICAvPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstZGF0ZXBpY2tlclxcbiAgICBtYXJnaW4tcmlnaHQgMTBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjE4LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gRGF0ZXBpY2tlciA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9kYXRlcGlja2VyJzwvc3Bhbj47XFxuXFxuJmx0O2RpdiZndDtcXG4gICAgJmx0O0RhdGVwaWNrZXIgdi1tb2RlbD1cXFwiZnJvbVxcXCIgcGxhY2Vob2xkZXI9XFxcIuW8gOWni+aXpeacn1xcXCJcXG4gICAgICAgIG1heERhdGU9e3sgc2VsZi5nZXQoJ3RvJykgfX1cXG4gICAgICAgIG1pbkRhdGU9e3sgbmV3IERhdGUoKSB9fVxcbiAgICAvJmd0O1xcbiAgICAmbHQ7RGF0ZXBpY2tlciB2LW1vZGVsPVxcXCJ0b1xcXCIgcGxhY2Vob2xkZXI9XFxcIue7k+adn+aXpeacn1xcXCJcXG4gICAgICAgIG1pbkRhdGU9e3sgc2VsZi5nZXQoJ2Zyb20nKSB9fVxcbiAgICAvJmd0O1xcbiZsdDsvZGl2Jmd0OzwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMgc3R5bFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtc2VsZWN0b3ItY2xhc3NcXFwiPi5rLWRhdGVwaWNrZXI8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjEwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9tYXhNaW4vaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9tYXhNaW4vaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi5pel5pyf5aSa6YCJXCIsXCJvcmRlclwiOjR9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCLmt7vliqA8Y29kZT5tdWx0aXBsZTwvY29kZT7lsZ7mgKfvvIzljbPlj6/mlK/mjIHml6XmnJ/lpJrpgInjgIJcIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBEYXRlcGlja2VyIGZyb20gJ2twYy9jb21wb25lbnRzL2RhdGVwaWNrZXInO1xcblxcbjxkaXY+XFxuICAgIDxEYXRlcGlja2VyIG11bHRpcGxlIHYtbW9kZWw9XFxcImRhdGVcXFwiIC8+XFxuICAgIFlvdSBzZWxlY3RlZDoge3sgSlNPTi5zdHJpbmdpZnkoc2VsZi5nZXQoJ2RhdGUnKSkgfX1cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MTksXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBEYXRlcGlja2VyIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2RhdGVwaWNrZXInPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RGF0ZXBpY2tlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bXVsdGlwbGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImRhdGVcXFwiPC9zcGFuPiAvJmd0Ozwvc3Bhbj5cXG4gICAgWW91IHNlbGVjdGVkOiB7eyBKU09OLnN0cmluZ2lmeShzZWxmLmdldCgnZGF0ZScpKSB9fVxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kZW1vcy9tdWx0aXBsZS9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kYXRlcGlja2VyL2RlbW9zL211bHRpcGxlL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuWfuuacrOeUqOazlVwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5a6a5LmJ5LiA5Liq5by556qX77yM54S25ZCO6YCa6L+HPGNvZGU+di1tb2RlbDwvY29kZT7lu7rnq4vnu5HlrprvvIzlvZPor6Xnu5HlrprnmoTlgLzkuLo8Y29kZT50cnVlPC9jb2RlPuaXtu+8jOWxleekuuW8ueeql+OAglwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcbmltcG9ydCBEaWFsb2cgZnJvbSAna3BjL2NvbXBvbmVudHMvZGlhbG9nJztcXG5cXG48ZGl2PlxcbiAgICA8QnV0dG9uIGV2LWNsaWNrPXt7IHNlbGYuc2V0LmJpbmQoc2VsZiwgJ3Nob3cnLCB0cnVlKSB9fVxcbiAgICAgICAgdHlwZT1cXFwicHJpbWFyeVxcXCJcXG4gICAgPlNob3cgRGlhbG9nPC9CdXR0b24+XFxuICAgIDxEaWFsb2cgdi1tb2RlbD1cXFwic2hvd1xcXCIgdGl0bGU9XFxcIkRpYWxvZyBUaXRsZVxcXCI+XFxuICAgICAgICBEaWFsb2cgQm9keSBcXG4gICAgPC9EaWFsb2c+XFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjIxLFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gQnV0dG9uIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2J1dHRvbic8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gRGlhbG9nIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2RpYWxvZyc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmV2LWNsaWNrPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmLnNldC5iaW5kPC9zcGFuPig8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmPC9zcGFuPiwgJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNob3c8L3NwYW4+JywgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHJ1ZTwvc3Bhbj4pIH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj5cXG4gICAgJmd0Ozwvc3Bhbj5TaG93IERpYWxvZzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RGlhbG9nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj52LW1vZGVsPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJzaG93XFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dGl0bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcIkRpYWxvZyBUaXRsZVxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIERpYWxvZyBCb2R5IFxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RGlhbG9nPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmFzaWMvaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuiHquWumuS5ieWktOmDqOWSjOW6lemDqFwiLFwib3JkZXJcIjoyfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi57uE5Lu25o+Q5L6b5LqGPGNvZGU+aGVhZGVyPC9jb2RlPuWSjDxjb2RlPmZvb3RlcjwvY29kZT7mianlsZXngrnvvIhibG9ja++8ie+8jOmAmui/h+Wug+S7rOWPr+S7peiHquWumuS5ieWktOmDqOWSjOW6lemDqOOAgjxibG9ja3F1b3RlPlxcbuWPr+S7pemAmui/hzxjb2RlPnBhcmVudCgpPC9jb2RlPuW8leeUqOWIsOe7hOS7tuWumuS5ieeahOm7mOiupOWGheWuuTwvYmxvY2txdW90ZT5cXG5cIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcXG5pbXBvcnQgRGlhbG9nIGZyb20gJ2twYy9jb21wb25lbnRzL2RpYWxvZyc7XFxuXFxuPGRpdj5cXG4gICAgPEJ1dHRvbiBldi1jbGljaz17eyBzZWxmLnNldC5iaW5kKHNlbGYsICdzaG93JywgdHJ1ZSkgfX1cXG4gICAgICAgIHR5cGU9XFxcInByaW1hcnlcXFwiXFxuICAgID5TaG93IERpYWxvZzwvQnV0dG9uPlxcbiAgICA8RGlhbG9nIHYtbW9kZWw9XFxcInNob3dcXFwiPlxcbiAgICAgICAgPGI6aGVhZGVyPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImstdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaW9uLXBlcnNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICBDdXN0b20gSGVhZGVyXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2I6aGVhZGVyPlxcblxcbiAgICAgICAgRGlhbG9nIEJvZHkgXFxuXFxuICAgICAgICA8Yjpmb290ZXI+XFxuICAgICAgICAgICAgQ3VzdG9tIEZvb3RlclxcbiAgICAgICAgICAgIHt7IHBhcmVudCgpIH19XFxuICAgICAgICA8L2I6Zm9vdGVyPlxcbiAgICA8L0RpYWxvZz5cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MjIsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBCdXR0b24gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBEaWFsb2cgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvZGlhbG9nJzwvc3Bhbj47XFxuXFxuJmx0O2RpdiZndDtcXG4gICAgJmx0O0J1dHRvbiBldi1jbGljaz17eyBzZWxmLnNldC5iaW5kKHNlbGYsICdzaG93JywgdHJ1ZSkgfX1cXG4gICAgICAgIHR5cGU9XFxcInByaW1hcnlcXFwiXFxuICAgICZndDtTaG93IERpYWxvZyZsdDsvQnV0dG9uJmd0O1xcbiAgICAmbHQ7RGlhbG9nIHYtbW9kZWw9XFxcInNob3dcXFwiJmd0O1xcbiAgICAgICAgJmx0O2I6aGVhZGVyJmd0O1xcbiAgICAgICAgICAgICZsdDtkaXYgY2xhc3M9XFxcImstdGl0bGVcXFwiJmd0O1xcbiAgICAgICAgICAgICAgICAmbHQ7aSBjbGFzcz1cXFwiaW9uLXBlcnNvblxcXCImZ3Q7Jmx0Oy9pJmd0O1xcbiAgICAgICAgICAgICAgICBDdXN0b20gSGVhZGVyXFxuICAgICAgICAgICAgJmx0Oy9kaXYmZ3Q7XFxuICAgICAgICAmbHQ7L2I6aGVhZGVyJmd0O1xcblxcbiAgICAgICAgRGlhbG9nIEJvZHkgXFxuXFxuICAgICAgICAmbHQ7Yjpmb290ZXImZ3Q7XFxuICAgICAgICAgICAgQ3VzdG9tIEZvb3RlclxcbiAgICAgICAgICAgIHt7IHBhcmVudCgpIH19XFxuICAgICAgICAmbHQ7L2I6Zm9vdGVyJmd0O1xcbiAgICAmbHQ7L0RpYWxvZyZndDtcXG4mbHQ7L2RpdiZndDs8L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvYmxvY2svaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2Jsb2NrL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuS6i+S7tuWbnuiwg1wiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5by556qX54K55Ye74oCc56Gu6K6k4oCd5ZKM4oCc5Y+W5raI4oCd5pe277yM5YiG5Yir5Lya5rS+5Y+R5Ye6PGNvZGU+b2s8L2NvZGU+5ZKMPGNvZGU+Y2FuY2VsPC9jb2RlPuS6i+S7tu+8jOmAmui/h+Wug+S7rOWPr+S7peaJp+ihjOebuOW6lOeahOWbnuiwg+mAu+i+keOAglwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcbmltcG9ydCBEaWFsb2cgZnJvbSAna3BjL2NvbXBvbmVudHMvZGlhbG9nJztcXG5cXG48ZGl2PlxcbiAgICA8QnV0dG9uIGV2LWNsaWNrPXt7IHNlbGYuc2V0LmJpbmQoc2VsZiwgJ3Nob3cnLCB0cnVlKSB9fVxcbiAgICAgICAgdHlwZT1cXFwicHJpbWFyeVxcXCJcXG4gICAgPlNob3cgRGlhbG9nPC9CdXR0b24+XFxuICAgIDxEaWFsb2cgdi1tb2RlbD1cXFwic2hvd1xcXCIgdGl0bGU9XFxcIkRpYWxvZyBUaXRsZVxcXCJcXG4gICAgICAgIGV2LW9rPXt7IHNlbGYub25PayB9fVxcbiAgICAgICAgZXYtY2FuY2VsPXt7IHNlbGYub25DYW5jZWwgfX1cXG4gICAgPkRpYWxvZyBCb2R5PC9EaWFsb2c+XFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuXFxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAna3BjL2NvbXBvbmVudHMvbWVzc2FnZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIG9uT2soKSB7XFxuICAgICAgICBNZXNzYWdlLnN1Y2Nlc3MoJ1lvdSBjbGlja2VkIG9rIGJ1dHRvbi4nKTtcXG4gICAgfVxcblxcbiAgICBvbkNhbmNlbCgpIHtcXG4gICAgICAgIE1lc3NhZ2UuZXJyb3IoJ1lvdSBjbGlja2VkIGNhbmNlbCBidXR0b24uJyk7XFxuICAgIH1cXG59XCJ9XSxcImluZGV4XCI6MjMsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBCdXR0b24gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBEaWFsb2cgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvZGlhbG9nJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcInhtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZXYtY2xpY2s8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e3s8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGYuc2V0LmJpbmQ8L3NwYW4+KDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGY8L3NwYW4+LCAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2hvdzwvc3Bhbj4nLCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50cnVlPC9zcGFuPikgfX1cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPlxcbiAgICAmZ3Q7PC9zcGFuPlNob3cgRGlhbG9nPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5EaWFsb2c8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnYtbW9kZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInNob3dcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50aXRsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiRGlhbG9nIFRpdGxlXFxcIjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmV2LW9rPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zZWxmLm9uT2s8L3NwYW4+IH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5ldi1jYW5jZWw8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+e3s8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnNlbGYub25DYW5jZWw8L3NwYW4+IH19XFxuICAgICZndDs8L3NwYW4+RGlhbG9nIEJvZHk8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RGlhbG9nPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gTWVzc2FnZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9tZXNzYWdlJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5JbnRhY3Q8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIG9uT2soKSB7XFxuICAgICAgICBNZXNzYWdlLnN1Y2Nlc3MoPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nWW91IGNsaWNrZWQgb2sgYnV0dG9uLic8L3NwYW4+KTtcXG4gICAgfVxcblxcbiAgICBvbkNhbmNlbCgpIHtcXG4gICAgICAgIE1lc3NhZ2UuZXJyb3IoPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nWW91IGNsaWNrZWQgY2FuY2VsIGJ1dHRvbi4nPC9zcGFuPik7XFxuICAgIH1cXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZGlhbG9nL2RlbW9zL2V2ZW50cy9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kaWFsb2cvZGVtb3MvZXZlbnRzL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIue7p+aJv+W8ueeql1wiLFwib3JkZXJcIjozfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5Zyo5a6e6ZmF5bqU55So5Lit77yM5by556qX55qE6YC76L6R5LiA6Iis6YO95b6I5aSN5p2C77yM6YCa6L+H57un5om/77yM5oiR5Lus5Y+v5Lul5o6n5Yi25by556qX55qE5ZCE5Liq57uG6IqC77yM5L6L5aaC77ya54K55Ye756Gu5a6a5pe26L+b6KGM6KGo5Y2V6aqM6K+B77yM5Y+R6YCB6K+35rGC77yM5bu26L+f5YWz6Zet562J562J44CC5bCG6L+Z5Lqb5Lia5Yqh6YC76L6R5bCB6KOF5Zyo5Y2V54us55qE5qih5Z2X5Lit77yM5piv5o6o6I2Q55qE5YGa5rOV44CCXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8dDpwYXJlbnQ+XFxuICAgIDxiOmJvZHk+XFxuICAgICAgICBIZWxsb1xcbiAgICA8L2I6Ym9keT5cXG48L3Q6cGFyZW50PlwiLFwiZmlsZVwiOlwiZGlhbG9nLnZkdFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBEaWFsb2cgZnJvbSAna3BjL2NvbXBvbmVudHMvZGlhbG9nJztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9kaWFsb2cudmR0JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIERpYWxvZyB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG5cXG4gICAgZGVmYXVsdHMoKSB7XFxuICAgICAgICByZXR1cm4gey4uLnN1cGVyLmRlZmF1bHRzKCksIHRpdGxlOiAnRXh0ZW5kcyBEaWFsb2cnfTtcXG4gICAgfVxcblxcbiAgICBvaygpIHtcXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoXFxcIm9rXFxcIiwgJ3Rlc3QnKTtcXG4gICAgICAgIH0sIDIwMDApO1xcbiAgICB9XFxufVwiLFwiZmlsZVwiOlwiZGlhbG9nLmpzXCJ9LHtcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcXG5cXG48QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiIGV2LWNsaWNrPXt7IHNlbGYuc2hvd0RpYWxvZyB9fT5TaG93IERpYWxvZzwvQnV0dG9uPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9kaWFsb2cnO1xcbmltcG9ydCBNZXNzYWdlIGZyb20gJ2twYy9jb21wb25lbnRzL21lc3NhZ2UnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcblxcbiAgICBzaG93RGlhbG9nKCkge1xcbiAgICAgICAgY29uc3QgZGlhbG9nID0gbmV3IERpYWxvZygpO1xcbiAgICAgICAgZGlhbG9nLnNob3coKTtcXG4gICAgICAgIGRpYWxvZy5vbignb2snLCAoZGF0YSkgPT4ge1xcbiAgICAgICAgICAgIE1lc3NhZ2UuaW5mbyhgZGF0YSBmcm9tIGRpYWxvZzogJHtkYXRhfWApO1xcbiAgICAgICAgfSk7XFxuICAgIH1cXG59XCJ9XSxcImluZGV4XCI6MjQsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+Jmx0O3Q6cGFyZW50Jmd0O1xcbiAgICA8c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5iOmJvZHk8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIEhlbGxvXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5iOmJvZHk8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+dDpwYXJlbnQ8L3NwYW4+Jmd0Ozwvc3Bhbj48L3NwYW4+PC9jb2RlPjwvcHJlPlwiLFwiZmlsZVwiOlwiZGlhbG9nLnZkdFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gRGlhbG9nIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2RpYWxvZyc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9kaWFsb2cudmR0Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXhwb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5kZWZhdWx0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1jbGFzc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y2xhc3M8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4dGVuZHM8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXRpdGxlXFxcIj5EaWFsb2c8L3NwYW4+IDwvc3Bhbj57XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5zdGF0aWM8L3NwYW4+IHRlbXBsYXRlID0gdGVtcGxhdGU7XFxuXFxuICAgIGRlZmF1bHRzKCkge1xcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+cmV0dXJuPC9zcGFuPiB7Li4uc3VwZXIuZGVmYXVsdHMoKSwgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dGl0bGU8L3NwYW4+OiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidFeHRlbmRzIERpYWxvZyc8L3NwYW4+fTtcXG4gICAgfVxcblxcbiAgICBvaygpIHtcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnRoaXM8L3NwYW4+LnNob3dMb2FkaW5nKCk7XFxuICAgICAgICBzZXRUaW1lb3V0KDxzcGFuIGNsYXNzPVxcXCJobGpzLWZ1bmN0aW9uXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1wYXJhbXNcXFwiPigpPC9zcGFuPiA9Jmd0Ozwvc3Bhbj4ge1xcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnRoaXM8L3NwYW4+LmNsb3NlKCk7XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+dGhpczwvc3Bhbj4udHJpZ2dlcig8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJva1xcXCI8L3NwYW4+LCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPid0ZXN0Jzwvc3Bhbj4pO1xcbiAgICAgICAgfSwgPHNwYW4gY2xhc3M9XFxcImhsanMtbnVtYmVyXFxcIj4yMDAwPC9zcGFuPik7XFxuICAgIH1cXG59PC9jb2RlPjwvcHJlPlwiLFwiZmlsZVwiOlwiZGlhbG9nLmpzXCJ9LHtcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEJ1dHRvbiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9idXR0b24nPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5ldi1jbGljazwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c2VsZi5zaG93RGlhbG9nPC9zcGFuPiB9fSZndDs8L3NwYW4+U2hvdyBEaWFsb2c8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEludGFjdCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidpbnRhY3QnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHRlbXBsYXRlIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXgudmR0Jzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBEaWFsb2cgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9kaWFsb2cnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IE1lc3NhZ2UgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvbWVzc2FnZSc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcblxcbiAgICBzaG93RGlhbG9nKCkge1xcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+Y29uc3Q8L3NwYW4+IGRpYWxvZyA9IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPm5ldzwvc3Bhbj4gRGlhbG9nKCk7XFxuICAgICAgICBkaWFsb2cuc2hvdygpO1xcbiAgICAgICAgZGlhbG9nLm9uKDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J29rJzwvc3Bhbj4sIChkYXRhKSA9Jmd0OyB7XFxuICAgICAgICAgICAgTWVzc2FnZS5pbmZvKDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+YGRhdGEgZnJvbSBkaWFsb2c6IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN1YnN0XFxcIj4ke2RhdGF9PC9zcGFuPmA8L3NwYW4+KTtcXG4gICAgICAgIH0pO1xcbiAgICB9XFxufTwvY29kZT48L3ByZT5cIn1dfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9kZW1vcy9leHRlbmRzL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2RpYWxvZy9kZW1vcy9leHRlbmRzL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuWfuuehgOeUqOazlVwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwi5LiA5Liq5a6M5pW055qE6I+c5Y2V6ZyA6KaB55So5YiwPGNvZGU+RHJvcGRvd248L2NvZGU+77yMPGNvZGU+RHJvcGRvd25NZW51PC9jb2RlPuWSjDxjb2RlPkRyb3Bkb3duSXRlbTwvY29kZT7kuInkuKrnu4Tku7bjgII8Y29kZT5Ecm9wZG93bjwvY29kZT7kvJrlsIbnrKzkuIDkuKrlrZDlhYPntKDkvZzkuLrop6blj5HlmajvvIznrKzkuozkuKrlhYPntKDkuLroj5zljZU8Y29kZT5Ecm9wZG93bk1lbnU8L2NvZGU+44CCPGJsb2NrcXVvdGU+XFxuPGNvZGU+RHJvcGRvd248L2NvZGU+5Lya6L+U5Zue5Lik5Liq5YWD57Sg77yI6Kem5Y+R5Zmo5ZKM6I+c5Y2V77yJ77yM6ICM5LiN5piv5bCG5a6D5Lus5YyF6KO56LW35p2l77yM5L2c5Li65LiA5Liq5YWD57Sg6L+U5Zue5omA5Lul5LiN6KaB5bCG5a6D5L2c5Li65qih5p2/55qE6aG257qn5YWD57Sg77yM5L6L5aaC5pys5L6L5Lit77yM55SoPGNvZGU+Jmx0O2RpdiZndDs8L2NvZGU+5bCG5LmL5YyF6KO56LW35p2l5omN6IO95L2c5Li65qih5p2/5YWD57Sg6L+U5Zue44CCPC9ibG9ja3F1b3RlPlxcblwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJztcXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XFxuXFxuPGRpdj5cXG4gICAgPERyb3Bkb3duPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICBob3ZlciA8aSBjbGFzcz1cXFwiay1pY29uIGlvbi1hcnJvdy1kb3duLWJcXFwiPjwvaT5cXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgICAgPERyb3Bkb3duTWVudT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMTwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAyPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDM8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxcbiAgICA8L0Ryb3Bkb3duPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjoyNixcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBCdXR0b24gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcInhtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgaG92ZXIgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLnpoHnlKjoj5zljZXvvIjpobnvvIlcIixcIm9yZGVyXCI6M30sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIumAmui/h+e7mTxjb2RlPkRyb3Bkb3duPC9jb2RlPuWSjDxjb2RlPkRyb3Bkb3duSXRlbTwvY29kZT7mt7vliqA8Y29kZT5kaXNhYmxlZDwvY29kZT7lsZ7mgKfvvIzlj6/ku6XliIbliKvnpoHnlKjoj5zljZXlkozoj5zljZXpobnjgIJcIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCB7RHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfSBmcm9tICdrcGMvY29tcG9uZW50cy9kcm9wZG93bic7XFxuaW1wb3J0IEJ1dHRvbiBmcm9tICdrcGMvY29tcG9uZW50cy9idXR0b24nO1xcblxcbjxkaXY+XFxuICAgIDxEcm9wZG93biBkaXNhYmxlZD5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgZGlzYWJsZWQgPGkgY2xhc3M9XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIj48L2k+XFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDE8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMjwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAzPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cXG4gICAgPC9Ecm9wZG93bj5cXG5cXG4gICAgPERyb3Bkb3duPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICBkaXNhYmxlZCBpdGVtPGkgY2xhc3M9XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIj48L2k+XFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDE8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpc2FibGVkPml0ZW0gMjwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAzPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cXG4gICAgPC9Ecm9wZG93bj5cXG48L2Rpdj5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIi5rLWJ0blxcbiAgICBtYXJnaW4tcmlnaHQgMjBweFwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9pbmRleC52ZHQnO1xcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgc3RhdGljIHRlbXBsYXRlID0gdGVtcGxhdGU7XFxufVwifV0sXCJpbmRleFwiOjI3LFwiaGlnaGxpZ2h0ZWRcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc3hcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4ge0Ryb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvZHJvcGRvd24nPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IEJ1dHRvbiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9idXR0b24nPC9zcGFuPjtcXG5cXG48c3BhbiBjbGFzcz1cXFwieG1sXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5kaXY8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmRpc2FibGVkPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgZGlzYWJsZWQgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgZGlzYWJsZWQgaXRlbTxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWFycm93LWRvd24tYlxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAxPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+ZGlzYWJsZWQ8L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDI8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAzPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duTWVudTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMgc3R5bFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtc2VsZWN0b3ItY2xhc3NcXFwiPi5rLWJ0bjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0cmlidXRlXFxcIj5tYXJnaW4tcmlnaHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLW51bWJlclxcXCI+MjBweDwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiPHByZT48Y29kZSBjbGFzcz1cXFwiaGxqcyBqc1xcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBJbnRhY3QgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4naW50YWN0Jzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB0ZW1wbGF0ZSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPicuL2luZGV4LnZkdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC5zdHlsJzwvc3Bhbj47IFxcblxcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmV4cG9ydDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZGVmYXVsdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtY2xhc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmNsYXNzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHRlbmRzPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy10aXRsZVxcXCI+SW50YWN0PC9zcGFuPiA8L3NwYW4+e1xcbiAgICBASW50YWN0LnRlbXBsYXRlKClcXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+c3RhdGljPC9zcGFuPiB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn08L2NvZGU+PC9wcmU+XCJ9XX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy9kaXNhYmxlZC9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLltYzlpZfoj5zljZVcIixcIm9yZGVyXCI6NH0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIjxjb2RlPkRyb3Bkb3duPC9jb2RlPuWPr+S7peW1jOWll+S9v+eUqO+8jOWunueOsOe6p+iBlOiPnOWNleOAguWtkOiPnOWNlemcgOimgeaMh+WumuWxleekuueahOS9jee9rjxjb2RlPnBvc2l0aW9uPC9jb2RlPuOAguaIkeS7rOi/mOWPr+S7pemAmui/hzxjb2RlPnRyaWdnZXI8L2NvZGU+5Y2V54us5a2Q6I+c5Y2V6Kem5Y+R5pa55byP44CCXCIsXCJjb2Rlc1wiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCJpbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duSXRlbX0gZnJvbSAna3BjL2NvbXBvbmVudHMvZHJvcGRvd24nO1xcbmltcG9ydCBCdXR0b24gZnJvbSAna3BjL2NvbXBvbmVudHMvYnV0dG9uJztcXG5cXG48ZGl2PlxcbiAgICA8RHJvcGRvd24+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgIGhvdmVyIDxpIGNsYXNzPVxcXCJrLWljb24gaW9uLWFycm93LWRvd24tYlxcXCI+PC9pPlxcbiAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICA8RHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAxPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDI8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMzwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93biBwb3NpdGlvbj17eyB7bXk6ICdsZWZ0IHRvcCcsIGF0OiAncmlnaHQgdG9wJ30gfX0+XFxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYy1taWRkbGVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDEwcHhcXFwiPmhvdmVyPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImMtbWlkZGxlIGlvbi1pb3MtYXJyb3ctcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gcG9zaXRpb249e3sge215OiAnbGVmdCB0b3AnLCBhdDogJ3JpZ2h0IHRvcCd9IH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjLW1pZGRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogMTBweFxcXCI+aG92ZXI8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJjLW1pZGRsZSBpb24taW9zLWFycm93LXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDE8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDI8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XFxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMTwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cXG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxcbiAgICAgICAgICAgIDxEcm9wZG93biB0cmlnZ2VyPVxcXCJjbGlja1xcXCIgcG9zaXRpb249e3sge215OiAnbGVmdCB0b3AnLCBhdDogJ3JpZ2h0IHRvcCd9IH19PlxcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImMtbWlkZGxlXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiAxMHB4XFxcIj5jbGljazwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJjLW1pZGRsZSBpb24taW9zLWFycm93LXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIHRyaWdnZXI9XFxcImNsaWNrXFxcIiBwb3NpdGlvbj17eyB7bXk6ICdsZWZ0IHRvcCcsIGF0OiAncmlnaHQgdG9wJ30gfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImMtbWlkZGxlXFxcIiBzdHlsZT1cXFwibWFyZ2luLXJpZ2h0OiAxMHB4XFxcIj5jbGljazwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImMtbWlkZGxlIGlvbi1pb3MtYXJyb3ctcmlnaHRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMTwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMjwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAxPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgIDwvRHJvcGRvd24+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDM8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxcbiAgICA8L0Ryb3Bkb3duPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmlvbi1pb3MtYXJyb3ctcmlnaHRcXG4gICAgZmxvYXQgcmlnaHRcXG4gICAgJjpiZWZvcmVcXG4gICAgICAgIGZvbnQtc2l6ZSBpbmhlcml0XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MjgsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB7RHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9kcm9wZG93bic8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gQnV0dG9uIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2J1dHRvbic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIGhvdmVyIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWFycm93LWRvd24tYlxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAxPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDM8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnBvc2l0aW9uPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiB7PHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bXk6PC9zcGFuPiAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bGVmdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dG9wPC9zcGFuPicsIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmF0Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50b3A8L3NwYW4+J30gfX0mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnNwYW48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJjLW1pZGRsZVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJtYXJnaW4tcmlnaHQ6IDEwcHhcXFwiPC9zcGFuPiZndDs8L3NwYW4+aG92ZXI8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3Bhbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImMtbWlkZGxlIGlvbi1pb3MtYXJyb3ctcmlnaHRcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5wb3NpdGlvbjwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gezxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPm15Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxlZnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnRvcDwvc3Bhbj4nLCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5hdDo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5yaWdodDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dG9wPC9zcGFuPid9IH19Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3Bhbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImMtbWlkZGxlXFxcIjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+c3R5bGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcIm1hcmdpbi1yaWdodDogMTBweFxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj5ob3ZlcjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5zcGFuPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJjLW1pZGRsZSBpb24taW9zLWFycm93LXJpZ2h0XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duTWVudTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMTxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duTWVudTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJjbGlja1xcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnBvc2l0aW9uPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiB7PHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bXk6PC9zcGFuPiAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bGVmdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dG9wPC9zcGFuPicsIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmF0Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50b3A8L3NwYW4+J30gfX0mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnNwYW48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJjLW1pZGRsZVxcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnN0eWxlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJtYXJnaW4tcmlnaHQ6IDEwcHhcXFwiPC9zcGFuPiZndDs8L3NwYW4+Y2xpY2s8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+c3Bhbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImMtbWlkZGxlIGlvbi1pb3MtYXJyb3ctcmlnaHRcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50cmlnZ2VyPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJjbGlja1xcXCI8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnBvc2l0aW9uPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPnt7PC9zcGFuPiB7PHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bXk6PC9zcGFuPiAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+bGVmdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dG9wPC9zcGFuPicsIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmF0Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50b3A8L3NwYW4+J30gfX0mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5zcGFuPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5jbGFzczwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiYy1taWRkbGVcXFwiPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5zdHlsZTwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwibWFyZ2luLXJpZ2h0OiAxMHB4XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPmNsaWNrPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPnNwYW48L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImMtbWlkZGxlIGlvbi1pb3MtYXJyb3ctcmlnaHRcXFwiPC9zcGFuPiZndDs8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMTxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAxPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAzPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duTWVudTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd248L3NwYW4+Jmd0Ozwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+PC9zcGFuPjwvY29kZT48L3ByZT5cIn0se1wibGFuZ3VhZ2VcIjpcInN0eWxcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMgc3R5bFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtc2VsZWN0b3ItY2xhc3NcXFwiPi5pb24taW9zLWFycm93LXJpZ2h0PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyaWJ1dGVcXFwiPmZsb2F0PC9zcGFuPiByaWdodFxcbiAgICAmYW1wOzpiZWZvcmVcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+Zm9udC1zaXplPC9zcGFuPiBpbmhlcml0PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvbmVzdGVkL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW9zL25lc3RlZC9pbmRleC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0ge1wic2V0dGluZ1wiOntcInRpdGxlXCI6XCLoj5zljZXkvY3nva5cIixcIm9yZGVyXCI6Mn0sXCJjYXRhbG9nc1wiOltdLFwiY29udGVudHNcIjpcIumAmui/hzxjb2RlPnBvc2l0aW9uPC9jb2RlPuWxnuaAp++8jOWPr+S7peWumuS5ieiPnOWNleebuOWvueinpuWPkeWZqOeahOS9jee9ruOAguS9jee9ruWvueixoeS4rTxjb2RlPm15PC9jb2RlPuaMh+iPnOWNle+8jDxjb2RlPmF0PC9jb2RlPuaMh+inpuWPkeWZqFwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJztcXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XFxuXFxuPGRpdj5cXG4gICAgPERyb3Bkb3duIHBvc2l0aW9uPXt7IHtteTogJ2xlZnQgdG9wJywgYXQ6ICdsZWZ0IGJvdHRvbSs1J30gfX0+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgIGxlZnQgPGkgY2xhc3M9XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIj48L2k+XFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDE8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMjwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAzPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cXG4gICAgPC9Ecm9wZG93bj5cXG5cXG4gICAgPERyb3Bkb3duIHBvc2l0aW9uPXt7IHtteTogJ3JpZ2h0IHRvcCcsIGF0OiAncmlnaHQgYm90dG9tKzUnfSB9fT5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgcmlnaHQgPGkgY2xhc3M9XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIj48L2k+XFxuICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDE8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMjwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAzPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cXG4gICAgPC9Ecm9wZG93bj5cXG5cXG4gICAgPERyb3Bkb3duIHBvc2l0aW9uPXt7IHtteTogJ2NlbnRlciBib3R0b20tNScsIGF0OiAnY2VudGVyIHRvcCd9IH19PlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICB0b3AgY2VudGVyIDxpIGNsYXNzPVxcXCJrLWljb24gaW9uLWFycm93LWRvd24tYlxcXCI+PC9pPlxcbiAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICA8RHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAxPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDI8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMzwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XFxuICAgIDwvRHJvcGRvd24+XFxuPC9kaXY+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCIuay1idG5cXG4gICAgbWFyZ2luLXJpZ2h0IDIwcHhcIn0se1wibGFuZ3VhZ2VcIjpcImpzXCIsXCJjb250ZW50XCI6XCJpbXBvcnQgSW50YWN0IGZyb20gJ2ludGFjdCc7XFxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcXG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7IFxcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xcbn1cIn1dLFwiaW5kZXhcIjoyOSxcImhpZ2hsaWdodGVkXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganN4XFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJzwvc3Bhbj47XFxuPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBCdXR0b24gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4na3BjL2NvbXBvbmVudHMvYnV0dG9uJzwvc3Bhbj47XFxuXFxuPHNwYW4gY2xhc3M9XFxcInhtbFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+ZGl2PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5wb3NpdGlvbjwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gezxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPm15Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmxlZnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnRvcDwvc3Bhbj4nLCA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5hdDo8L3NwYW4+ICc8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5sZWZ0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5ib3R0b208L3NwYW4+KzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPjU8L3NwYW4+J30gfX0mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIGxlZnQgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5wb3NpdGlvbjwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gezxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPm15Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50b3A8L3NwYW4+JywgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+YXQ6PC9zcGFuPiAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+cmlnaHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmJvdHRvbTwvc3Bhbj4rPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+NTwvc3Bhbj4nfSB9fSZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgcmlnaHQgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj5wb3NpdGlvbjwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj57ezwvc3Bhbj4gezxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPm15Ojwvc3Bhbj4gJzxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNlbnRlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Ym90dG9tLTU8L3NwYW4+JywgPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+YXQ6PC9zcGFuPiAnPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2VudGVyPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50b3A8L3NwYW4+J30gfX0mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIHRvcCBjZW50ZXIgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1idG48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvcG9zaXRpb24vaW5kZXguanNvblxuLy8gbW9kdWxlIGlkID0gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvcG9zaXRpb24vaW5kZXguanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInNldHRpbmdcIjp7XCJ0aXRsZVwiOlwi6Kem5Y+R5pa55byPXCIsXCJvcmRlclwiOjB9LFwiY2F0YWxvZ3NcIjpbXSxcImNvbnRlbnRzXCI6XCI8Y29kZT5Ecm9wZG93bjwvY29kZT7mj5DkvpvkuobkuKTnp43op6blj5HmlrnlvI/mnaXlvLnnqpfoj5zljZXvvIw8Y29kZT5ob3ZlcjwvY29kZT7mgqzlgZzop6blj5HvvIjpu5jorqTvvInvvIw8Y29kZT5jbGljazwvY29kZT7ngrnlh7vop6blj5HjgILpgJrov4c8Y29kZT50cmlnZ2VyPC9jb2RlPuWxnuaAp+adpeaMh+WumuWug+S7rOOAglwiLFwiY29kZXNcIjpbe1wibGFuZ3VhZ2VcIjpcInZkdFwiLFwiY29udGVudFwiOlwiaW1wb3J0IHtEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Ryb3Bkb3duJztcXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7XFxuXFxuPGRpdj5cXG4gICAgPERyb3Bkb3duPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICBob3ZlciA8aSBjbGFzcz1cXFwiay1pY29uIGlvbi1hcnJvdy1kb3duLWJcXFwiPjwvaT5cXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgICAgPERyb3Bkb3duTWVudT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMTwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAyPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDM8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxcbiAgICA8L0Ryb3Bkb3duPlxcblxcbiAgICA8RHJvcGRvd24gdHJpZ2dlcj1cXFwiY2xpY2tcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICBjbGljayA8aSBjbGFzcz1cXFwiay1pY29uIGlvbi1hcnJvdy1kb3duLWJcXFwiPjwvaT5cXG4gICAgICAgIDwvQnV0dG9uPlxcbiAgICAgICAgPERyb3Bkb3duTWVudT5cXG4gICAgICAgICAgICA8RHJvcGRvd25JdGVtPml0ZW0gMTwvRHJvcGRvd25JdGVtPlxcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+aXRlbSAyPC9Ecm9wZG93bkl0ZW0+XFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5pdGVtIDM8L0Ryb3Bkb3duSXRlbT5cXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxcbiAgICA8L0Ryb3Bkb3duPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstYnRuXFxuICAgIG1hcmdpbi1yaWdodCAyMHB4XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MzAsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiB7RHJvcGRvd24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtfSA8c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5mcm9tPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPidrcGMvY29tcG9uZW50cy9kcm9wZG93bic8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gQnV0dG9uIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL2J1dHRvbic8L3NwYW4+O1xcblxcbjxzcGFuIGNsYXNzPVxcXCJ4bWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyXFxcIj50eXBlPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJwcmltYXJ5XFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIGhvdmVyIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPmNsYXNzPC9zcGFuPj08c3BhbiBjbGFzcz1cXFwiaGxqcy1zdHJpbmdcXFwiPlxcXCJrLWljb24gaW9uLWFycm93LWRvd24tYlxcXCI8L3NwYW4+Jmd0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkJ1dHRvbjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAxPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDM8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25NZW51PC9zcGFuPiZndDs8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bjwvc3Bhbj4mZ3Q7PC9zcGFuPlxcblxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+dHJpZ2dlcjwvc3Bhbj49PHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj5cXFwiY2xpY2tcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5CdXR0b248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJcXFwiPnR5cGU8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcInByaW1hcnlcXFwiPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgY2xpY2sgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+aTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtYXR0clxcXCI+Y2xhc3M8L3NwYW4+PTxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+XFxcImstaWNvbiBpb24tYXJyb3ctZG93bi1iXFxcIjwvc3Bhbj4mZ3Q7PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5pPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+QnV0dG9uPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDs8c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5pdGVtIDE8c3BhbiBjbGFzcz1cXFwiaGxqcy10YWdcXFwiPiZsdDsvPHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7PHNwYW4gY2xhc3M9XFxcImhsanMtbmFtZVxcXCI+RHJvcGRvd25JdGVtPC9zcGFuPiZndDs8L3NwYW4+aXRlbSAyPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0OzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duSXRlbTwvc3Bhbj4mZ3Q7PC9zcGFuPml0ZW0gMzxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bkl0ZW08L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLXRhZ1xcXCI+Jmx0Oy88c3BhbiBjbGFzcz1cXFwiaGxqcy1uYW1lXFxcIj5Ecm9wZG93bk1lbnU8L3NwYW4+Jmd0Ozwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPkRyb3Bkb3duPC9zcGFuPiZndDs8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcImhsanMtdGFnXFxcIj4mbHQ7LzxzcGFuIGNsYXNzPVxcXCJobGpzLW5hbWVcXFwiPmRpdjwvc3Bhbj4mZ3Q7PC9zcGFuPjwvc3Bhbj48L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1idG48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWF0dHJpYnV0ZVxcXCI+bWFyZ2luLXJpZ2h0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjIwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtb3MvdHJpZ2dlci9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vcy90cmlnZ2VyL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJzZXR0aW5nXCI6e1widGl0bGVcIjpcIuWfuuacrOeUqOazlVwiLFwib3JkZXJcIjowfSxcImNhdGFsb2dzXCI6W10sXCJjb250ZW50c1wiOlwiPGNvZGU+UGFnaW5hdGlvbjwvY29kZT4gc2l6ZeeUqOazle+8mm1pbmnvvIxzbWFsbO+8jGRlZmF1bHRcIixcImNvZGVzXCI6W3tcImxhbmd1YWdlXCI6XCJ2ZHRcIixcImNvbnRlbnRcIjpcImltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ2twYy9jb21wb25lbnRzL3BhZ2luYXRpb24nO1xcblxcbjxkaXY+XFxuICAgIDxQYWdpbmF0aW9uIHRvdGFsPXt7IDIwMSB9fSBjdXJyZW50PXt7IDIgfX0gc2hvd0dvdG8gLz5cXG4gICAgPFBhZ2luYXRpb24gdG90YWw9e3sgMjAxIH19IGN1cnJlbnQ9e3sgMiB9fSBzaXplPVxcXCJzbWFsbFxcXCIgLz5cXG4gICAgPFBhZ2luYXRpb24gdG90YWw9e3sgMjAxIH19IGN1cnJlbnQ9e3sgMiB9fSBzaXplPVxcXCJtaW5pXFxcIiAvPlxcbjwvZGl2PlwifSx7XCJsYW5ndWFnZVwiOlwic3R5bFwiLFwiY29udGVudFwiOlwiLmstcGFnaW5hdGlvblxcbiAgICBtYXJnaW4gMzBweCAzMHB4XCJ9LHtcImxhbmd1YWdlXCI6XCJqc1wiLFwiY29udGVudFwiOlwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XFxuaW1wb3J0ICcuL2luZGV4LnN0eWwnOyBcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEludGFjdCB7XFxuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59XCJ9XSxcImluZGV4XCI6MzIsXCJoaWdobGlnaHRlZFwiOlt7XCJsYW5ndWFnZVwiOlwidmR0XCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIGpzeFxcXCI+PHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+aW1wb3J0PC9zcGFuPiBQYWdpbmF0aW9uIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2twYy9jb21wb25lbnRzL3BhZ2luYXRpb24nPC9zcGFuPjtcXG5cXG4mbHQ7ZGl2Jmd0O1xcbiAgICAmbHQ7UGFnaW5hdGlvbiB0b3RhbD17eyAyMDEgfX0gY3VycmVudD17eyAyIH19IHNob3dHb3RvIC8mZ3Q7XFxuICAgICZsdDtQYWdpbmF0aW9uIHRvdGFsPXt7IDIwMSB9fSBjdXJyZW50PXt7IDIgfX0gc2l6ZT1cXFwic21hbGxcXFwiIC8mZ3Q7XFxuICAgICZsdDtQYWdpbmF0aW9uIHRvdGFsPXt7IDIwMSB9fSBjdXJyZW50PXt7IDIgfX0gc2l6ZT1cXFwibWluaVxcXCIgLyZndDtcXG4mbHQ7L2RpdiZndDs8L2NvZGU+PC9wcmU+XCJ9LHtcImxhbmd1YWdlXCI6XCJzdHlsXCIsXCJjb250ZW50XCI6XCI8cHJlPjxjb2RlIGNsYXNzPVxcXCJobGpzIHN0eWxcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLXNlbGVjdG9yLWNsYXNzXFxcIj4uay1wYWdpbmF0aW9uPC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaGxqcy1hdHRyaWJ1dGVcXFwiPm1hcmdpbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtbnVtYmVyXFxcIj4zMHB4PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGxqcy1udW1iZXJcXFwiPjMwcHg8L3NwYW4+PC9jb2RlPjwvcHJlPlwifSx7XCJsYW5ndWFnZVwiOlwianNcIixcImNvbnRlbnRcIjpcIjxwcmU+PGNvZGUgY2xhc3M9XFxcImhsanMganNcXFwiPjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gSW50YWN0IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmZyb208L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+J2ludGFjdCc8L3NwYW4+O1xcbjxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmltcG9ydDwvc3Bhbj4gdGVtcGxhdGUgPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZnJvbTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtc3RyaW5nXFxcIj4nLi9pbmRleC52ZHQnPC9zcGFuPjtcXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5pbXBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLXN0cmluZ1xcXCI+Jy4vaW5kZXguc3R5bCc8L3NwYW4+OyBcXG5cXG48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5leHBvcnQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPmRlZmF1bHQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJobGpzLWNsYXNzXFxcIj48c3BhbiBjbGFzcz1cXFwiaGxqcy1rZXl3b3JkXFxcIj5jbGFzczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMta2V5d29yZFxcXCI+ZXh0ZW5kczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhsanMtdGl0bGVcXFwiPkludGFjdDwvc3Bhbj4gPC9zcGFuPntcXG4gICAgQEludGFjdC50ZW1wbGF0ZSgpXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJobGpzLWtleXdvcmRcXFwiPnN0YXRpYzwvc3Bhbj4gdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcXG59PC9jb2RlPjwvcHJlPlwifV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vcy9iYXNpYy9pbmRleC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW9zL2Jhc2ljL2luZGV4Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvY29tcG9uZW50cy9hcnRpY2xlL2luZGV4LmpzIiwiaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gJ2twYy9jb21wb25lbnRzL3RhYnMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG5cbnJldHVybiBoKCdkaXYnLCBudWxsLCBbZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdkZW1vcycpLmxlbmd0aCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpID8gaCgnZGl2JywgbnVsbCwgW2goJ2gxJywgbnVsbCwgJ+ekuuS+iycpLCAnXFxuICAgICAgICAnLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2VsZi5nZXQoJ2RlbW9zJykubWFwKERlbW8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBoKERlbW8uZGVmYXVsdCwgeydjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgJ2V4YW1wbGUtb3BlcmEnKSwgaCgnZGl2JywgbnVsbCwgW2goJ2RpdicsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtEZW1vLmRhdGEuc2V0dGluZy50aXRsZSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndGl0bGUnKSwgaCgnZGl2Jywgeydpbm5lckhUTUwnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbRGVtby5kYXRhLmNvbnRlbnRzIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnZGVzYycpXSwgJ2V4YW1wbGUtZGVzYycpLCBoKCdkaXYnLCBudWxsLCBbaChUYWJzLCB7J2NoaWxkcmVuJzogX1ZkdC51dGlscy5tYXAoZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW0RlbW8uZGF0YS5oaWdobGlnaHRlZCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5yZXR1cm4gaChUYWIsIHsndmFsdWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbdmFsdWUuZmlsZSA/IHZhbHVlLmZpbGUgOiBgaW5kZXguJHt2YWx1ZS5sYW5ndWFnZX1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IFsnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFt2YWx1ZS5maWxlID8gdmFsdWUuZmlsZSA6IGBpbmRleC4ke3ZhbHVlLmxhbmd1YWdlfWAgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICddLCAnX2NvbnRleHQnOiB0aGlzfSk7XG59LCB0aGlzKSwgJ19jb250ZXh0JzogdGhpcywgdmFsdWU6IF9nZXRNb2RlbChzZWxmLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYGZpbGUke0RlbW8uZGF0YS5pbmRleH1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpLCAnZXYtJGNoYW5nZTp2YWx1ZSc6IGZ1bmN0aW9uKF9fYywgX19uKSB7IF9zZXRNb2RlbChzZWxmLCBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYGZpbGUke0RlbW8uZGF0YS5pbmRleH1gIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksIF9fbikgfX0pLCBoKCdkaXYnLCB7J2lubmVySFRNTCc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFsoRGVtby5kYXRhLmhpZ2hsaWdodGVkLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5maWxlID8gaXRlbS5maWxlIDogYGluZGV4LiR7aXRlbS5sYW5ndWFnZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUgPT09IHNlbGYuZ2V0KCdmaWxlJyArIERlbW8uZGF0YS5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0pIHx8IHt9KS5jb250ZW50IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnY29kZScpXSwgJ2V4YW1wbGUtY29kZScpXSwgX2NsYXNzTmFtZShmdW5jdGlvbigpIHt0cnkge3JldHVybiBbYGV4YW1wbGUgaW5kZXgtJHtEZW1vLmRhdGEuaW5kZXh9YCBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKSlcbiAgICAgICAgfSkgXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ1xcbiAgICAnXSwgbnVsbCwgJ2RlbW9zJykgOiB1bmRlZmluZWQsIGgoJ2RpdicsIHsnaW5uZXJIVE1MJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3NlbGYuZ2V0KCdjb250ZW50cycpIF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyl9LCBudWxsLCAnYXBpJywgJ2NvbnRlbnRzJyldLCAnY29udGVudHMnKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL2NvbXBvbmVudHMvYXJ0aWNsZS9pbmRleC52ZHQiXSwic291cmNlUm9vdCI6IiJ9