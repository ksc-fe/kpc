'use strict';

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
        selected = _self$get.selected,
        done = _self$get.done,
        title = _self$get.title,
        index = _self$get.index,
        width = _self$get.width,
        error = _self$get.error;

    var classNameObj = {
        'k-step': true,
        'k-active': selected,
        'k-done': done,
        'k-error': error
    };

    return h('div', { 'style': function () {
            try {
                return [{ width: width }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h('div', null, null, 'k-tail'), h('div', null, h('div', null, function () {
        try {
            return [done][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', null, null, 'ion-ios-checkmark-empty k-icon') : function () {
        try {
            return [error][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', null, null, 'ion-ios-close-empty k-icon') : h('span', null, function () {
        try {
            return [index][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)), 'k-inner'), 'k-head'), h('div', null, [h('div', null, function () {
        try {
            return [title][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-title'), h('div', null, function () {
        try {
            return [children][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), 'k-content')], 'k-main')], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};