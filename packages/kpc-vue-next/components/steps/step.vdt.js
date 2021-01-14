import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { addStyle, getRestProps } from '../utils';
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

  var _self$get = self.get(),
      children = _self$get.children,
      selected = _self$get.selected,
      done = _self$get.done,
      title = _self$get.title,
      index = _self$get.index,
      width = _self$get.width,
      error = _self$get.error,
      className = _self$get.className,
      style = _self$get.style;

  var classNameObj = (_classNameObj = {
    'k-step': true,
    'k-active': selected,
    'k-done': done,
    'k-error': error
  }, _classNameObj[className] = className, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return addStyle(style, {
          width: width
        });
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h('div', null, null, 'k-tail'), h('div', null, [h('div', null, h('div', null, [function () {
    try {
      return null;
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return error;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('i', null, null, 'ion-ios-close-empty k-icon') : h('span', null, function () {
    try {
      return index + 1;
    } catch (e) {
      _e(e);
    }
  }.call($this))], 'k-inner'), 'k-head'), h('div', null, [h('div', null, function () {
    try {
      return title;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-title'), h('div', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-content')], 'k-main')], 'k-wrapper')], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}