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
            value = _self$get.value,
            children = _self$get.children,
            _value = _self$get._value;

        return h('a', { 'ev-click': function () {
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