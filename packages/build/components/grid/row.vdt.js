'use strict';

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
    var gutterStyle = require('./utils');

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
    }, _classNameObj[className] = className, _classNameObj['k-gutter'] = hasGutter, _classNameObj);

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