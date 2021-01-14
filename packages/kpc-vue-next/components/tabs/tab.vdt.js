import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
import { getRestProps } from '../utils';
export default function (obj, _Vdt, blocks, $callee) {
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
      value = _self$get.value,
      children = _self$get.children,
      _value = _self$get._value,
      className = _self$get.className,
      disabled = _self$get.disabled,
      _parent = _self$get._parent,
      closable = _self$get.closable;

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-click': function () {
      try {
        return self._changeTab;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return closable == null ? _parent.get('closable') : closable;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Button, {
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'size': 'mini',
    'className': 'k-close',
    'children': h('i', null, null, 'k-icon ion-ios-close-empty'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._remove;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], _className(function () {
    try {
      var _ref;

      return _ref = {
        'k-tab': true,
        'k-active': value !== undefined && value === _value
      }, _ref[className] = className, _ref['k-disabled'] = disabled, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}