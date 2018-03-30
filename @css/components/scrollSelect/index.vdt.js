"use strict";

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
        _list = _self$get._list,
        disabled = _self$get.disabled,
        _translate = _self$get._translate,
        _marginTop = _self$get._marginTop,
        _dragging = _self$get._dragging;

    var classNameObj = {
        "k-scroll-select": true,
        "k-dragging": _dragging,
        "k-disabled": disabled
    };

    return h('div', null, [h('div', { 'style': function () {
            try {
                return [{
                    transform: "translateY(" + _translate + "px)",
                    marginTop: _marginTop + "px"
                }][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-mousedown': function () {
            try {
                return [!disabled ? self._dragStart : undefined][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-wheel': function () {
            try {
                return [!disabled ? self._onWheel : undefined][0];
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
                    return [!disabled ? self._select.bind(self, item, key) : undefined][0];
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
    }.call(this) ? h('div', null, (_blocks["append"] = function (parent) {
        return null;
    }) && (__blocks["append"] = function (parent) {
        var self = this;
        return blocks["append"] ? blocks["append"].call(this, function () {
            return _blocks["append"].call(self, parent);
        }) : _blocks["append"].call(this, parent);
    }) && __blocks["append"].call(this), 'k-append') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};