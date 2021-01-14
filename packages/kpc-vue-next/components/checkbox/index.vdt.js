import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/reduce";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { getRestProps } from '../utils';
export default function (obj, _Vdt, blocks, $callee) {
  var _classNameObj, _context;

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
      __slice = _sliceInstanceProperty(__u),
      __noop = __u.noop,
      __m = _mapInstanceProperty(__u),
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
      falseValue = _self$get.falseValue,
      children = _self$get.children,
      value = _self$get.value,
      trueValue = _self$get.trueValue,
      style = _self$get.style,
      ref = _self$get.ref,
      key = _self$get.key,
      indeterminate = _self$get.indeterminate,
      title = _self$get.title,
      rest = _objectWithoutPropertiesLoose(_self$get, ["className", "disabled", "falseValue", "children", "value", "trueValue", "style", "ref", "key", "indeterminate", "title"]);

  var classNameObj = (_classNameObj = {
    'k-checkbox': true,
    'k-disabled': disabled,
    'k-checked': self.isChecked()
  }, _classNameObj[className] = className, _classNameObj['k-indeterminate'] = indeterminate, _classNameObj); // let evClick;

  var events = _reduceInstanceProperty(_context = ['ev-click', 'ev-change', 'ev-mouseenter', 'ev-mouseleave']).call(_context, function (memo, name) {
    if (rest[name]) {
      if (name === 'ev-click' || name === 'ev-change') {// do not bind click to label, otherwise it will trigger click event twice
        // don't bind change to input, use click instead of, #448
        // evClick = rest[name];
      } else {
        memo[name] = rest[name];
      }

      delete rest[name];
    }

    return memo;
  }, {});

  return h('label', _Object$assign({
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return disabled ? null : "0";
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return events;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'title': function () {
      try {
        return title;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keypress': function () {
      try {
        return self._onKeypress;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-click': function () {
      try {
        return self._fixClick;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h('span', null, h('input', _Object$assign({
    'type': 'checkbox',
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'checked': function () {
      try {
        return _detectCheckboxChecked(self, 'value', trueValue);
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return trueValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': '-1'
  }, function () {
    try {
      return getRestProps(self, rest);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-click': function () {
      try {
        return self._onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), null, null, null, function (i) {
    widgets['input'] = i;
  }), 'k-wrapper'), function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-text') : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}