import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { getRestProps } from '../utils';
export default function (obj, _Vdt, blocks, $callee) {
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
  /* import {proxyEvent} from '../utils'; */


  var _self$get = self.get(),
      children = _self$get.children,
      disabled = _self$get.disabled,
      className = _self$get.className,
      _isFocus = _self$get._isFocus,
      hideOnSelect = _self$get.hideOnSelect;

  var classNameObj = (_classNameObj = {
    'k-item': true,
    'k-disabled': disabled
  }, _classNameObj[className] = className, _classNameObj['k-hover'] = _isFocus, _classNameObj['k-no-padding'] = children && (children.tag === Checkbox || children.tag === Radio), _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
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
    }.call($this),
    'ev-mouseenter': function () {
      try {
        return self._onMouseEnter;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseleave': function () {
      try {
        return self._onMouseLeave;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}