'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _moveWrapper = require('../moveWrapper');

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

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

    var classNameObj = (_classNameObj = {
        "k-tooltip-content": true,
        'k-cannot-hover': trigger === 'hover' && !canHover
    }, _classNameObj[className] = className, _classNameObj);

    return h(_moveWrapper2.default, { 'children': function () {
            try {
                return [show][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) ? h(Animate, (0, _extends3.default)({ 'className': _className(function () {
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
                    }, _ref['k-' + _feedback.vertical] = _feedback.vertical, _ref['k-' + _feedback.horizontal] = _feedback.horizontal, _ref)][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this))) : undefined, function () {
                try {
                    return [children][0];
                } catch (e) {
                    _e(e);
                }
            }.call(this)], '_context': $this }), null, null, null, function (i) {
            widgets['content'] = i;
        }) : undefined, '_context': $this });
};