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

    var _self$get = self.get(),
        className = _self$get.className,
        children = _self$get.children,
        label = _self$get.label,
        style = _self$get.style,
        isValid = _self$get.isValid,
        isDirty = _self$get.isDirty,
        hideLabel = _self$get.hideLabel,
        htmlFor = _self$get.htmlFor,
        errorClassName = _self$get.errorClassName;

    var classNameObj = (_classNameObj = {
        'k-form-item': true,
        'k-invalid': isDirty && !isValid,
        'k-valid': isDirty && isValid
    }, _classNameObj[className] = className, _classNameObj);

    // vdt does not support return `v-if & v-else` element in root,
    // like: 
    //     '<div v-if={{ true }}>true</div>'
    //     '<label v-else>false</label>'
    // so wrap it.
    // const Wrapper = (props) => {
    //     return h(props._tagName, props, props.children); 
    // }

    return h('div', { 'style': function () {
            try {
                return [style][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-change': function () {
            try {
                return [self._dirty][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), 'ev-focusout': function () {
            try {
                return [self._dirty][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, [function () {
        try {
            return [!hideLabel][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h('label', { 'htmlFor': function () {
            try {
                return [htmlFor][0];
            } catch (e) {
                _e(e);
            }
        }.call(this) }, (_blocks["label"] = function (parent) {
        return function () {
            try {
                return [label][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks["label"] = function (parent) {
        var self = this;
        return blocks["label"] ? blocks["label"].call(this, function () {
            return _blocks["label"].call(self, parent);
        }) : _blocks["label"].call(this, parent);
    }) && __blocks["label"].call(this), 'k-label') : undefined, h('div', null, [(_blocks["content"] = function (parent) {
        return function () {
            try {
                return [children][0];
            } catch (e) {
                _e(e);
            }
        }.call(this);
    }) && (__blocks["content"] = function (parent) {
        var self = this;
        return blocks["content"] ? blocks["content"].call(this, function () {
            return _blocks["content"].call(self, parent);
        }) : _blocks["content"].call(this, parent);
    }) && __blocks["content"].call(this), function () {
        try {
            return [self.get('isValid') === false][0];
        } catch (e) {
            _e(e);
        }
    }.call(this) ? h(Animate, { 'className': _className(function () {
            try {
                var _ref;

                return [(_ref = { "k-error": true }, _ref[errorClassName] = errorClassName, _ref)][0];
            } catch (e) {
                _e(e);
            }
        }.call(this)), 'a:transition': 'fade', 'children': function () {
            try {
                return [self.get('message')][0];
            } catch (e) {
                _e(e);
            }
        }.call(this), '_context': $this }) : undefined], 'k-content'), function () {
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