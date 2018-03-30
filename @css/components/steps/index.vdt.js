'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _step = require('./step');

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (obj, _Vdt, blocks, $callee) {

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
        value = _self$get.value,
        style = _self$get.style,
        status = _self$get.status;

    var classNameObj = {
        'k-steps c-clearfix': true
    };

    var stepIndex = 0;
    var steps = (Array.isArray(children) ? children : [children]).filter(function (vNode) {
        if (vNode && vNode.tag === _step2.default) {
            vNode.props = (0, _extends3.default)({}, vNode.props, { index: stepIndex });
            if (value == stepIndex) {
                vNode.props.selected = true;
                if (status === 'error') {
                    vNode.props.error = true;
                }
            } else if (value > stepIndex) {
                vNode.props.done = true;
            }
            stepIndex++;
            return true;
        }
        return false;
    });

    // add width
    steps = steps.map(function (vNode) {
        vNode.props.width = 100 / stepIndex + '%';
        return vNode;
    });

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, function () {
        try {
            return [steps][0];
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