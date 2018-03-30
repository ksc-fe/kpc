'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

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
        children = _self$get.children,
        separator = _self$get.separator,
        className = _self$get.className,
        style = _self$get.style;

    var classNameObj = (_classNameObj = {
        'k-breadcrumb': true
    }, _classNameObj[className] = className, _classNameObj);

    var _children = children ? Array.isArray(children) ? children : [children] : children;

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, ['\n    ', function () {
        try {
            return [__u.map(_children, function (vNode, index) {
                if (vNode.tag === _item2.default) {
                    vNode.props = (0, _extends3.default)({}, vNode.props);
                    if (separator != null && vNode.props.separator == null) {
                        vNode.props.separator = separator;
                    }
                    if (index === _children.length - 1) {
                        vNode.props.separator = null;
                    }
                }
                return vNode;
            })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), ' \n'], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};