'use strict';

var _button = require('../button');

var _input = require('../input');

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
        max = _self$get.max,
        min = _self$get.min,
        step = _self$get.step,
        children = _self$get.children,
        value = _self$get.value,
        style = _self$get.style,
        size = _self$get.size;

    var classNameObj = (_classNameObj = {
        'k-spinner': true,
        'k-disabled': disabled
    }, _classNameObj['k-' + size] = size !== 'default', _classNameObj[className] = className, _classNameObj);

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [h(_button.Button, { 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._decrease][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [self._disableDecrease()][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-left', 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': '-', '_context': $this }), h(_input.Input, { 'disabled': function () {
            try {
                return [disabled][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._changeValue][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'v-model': 'value', 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': null, '_context': $this, value: _getModel(self, 'value'), 'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, 'value', __n);
        } }), h(_button.Button, { 'icon': function () {
            try {
                return [true][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._increase][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'disabled': function () {
            try {
                return [self._disableIncrease()][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'className': 'k-right', 'size': function () {
            try {
                return [size][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'children': '+', '_context': $this })], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};