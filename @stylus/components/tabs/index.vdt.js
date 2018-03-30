'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

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
        data = _self$get.data,
        value = _self$get.value,
        children = _self$get.children,
        style = _self$get.style;

    var classNameObj = (_classNameObj = {
        'k-tabs': true
    }, _classNameObj[className] = className, _classNameObj);

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
                    vNode.props = (0, _extends3.default)({}, vNode.props, { _value: value, _parent: self });
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