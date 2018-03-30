'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (obj, _Vdt, blocks, $callee) {
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
        rest = (0, _objectWithoutProperties3.default)(_self$get, ['className', 'disabled', 'trueValue', 'style', 'children', 'value', 'ref', 'key']);

    var classNameObj = (_classNameObj = {
        'k-radio': true,
        'k-disabled': disabled,
        'k-checked': self.isChecked()
    }, _classNameObj[className] = className, _classNameObj);

    return h('label', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('span', null, h('input', (0, _extends3.default)({ 'type': 'radio', 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'v-model': 'value', 'value': function () {
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
    }.call(this), { checked: _getModel(self, 'value') === function () {
            try {
                return [trueValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function evChange(__e) {
            _setModel(self, 'value', __e.target.checked ? function () {
                try {
                    return [trueValue][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this) : false);
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