'use strict';

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

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
        editing = _self$get.editing,
        value = _self$get.value,
        validate = _self$get.validate,
        disabled = _self$get.disabled,
        style = _self$get.style,
        tip = _self$get.tip,
        children = _self$get.children,
        invalid = _self$get.invalid;

    var classNameObj = {
        'k-editable': true,
        'k-editing': editing,
        'k-disabled': disabled,
        'k-invalid': invalid
    };

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [!disabled && !editing][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('i', { 'title': function () {
            try {
                return [tip][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-click': function () {
            try {
                return [self._edit][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, null, 'ion-edit k-edit') : undefined, function () {
        try {
            return [value || editing][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('div', null, ['\n        ', function () {
        try {
            return [!editing ? children : h(_input2.default, { 'size': 'small', 'defaultValue': function () {
                    try {
                        return [value][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-blur': function () {
                    try {
                        return [self._onBlur][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'ev-keydown': function () {
                    try {
                        return [self._onKeydown][0];
                    } catch (e) {
                        _e(e);
                    }
                }.call(this), 'children': null, '_context': $this }, null, null, null, function (i) {
                widgets['input'] = i;
            })][0];
        } catch (e) {
            _e(e);
        }
    }.call(this), '\n    '], 'c-ellipsis') : undefined], _className(function () {
        try {
            return [classNameObj][0];
        } catch (e) {
            _e(e);
        }
    }.call(this)));
};