import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { addStyle, getRestProps } from '../utils';
import Spin from '../spin';
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
      width = _self$get.width,
      height = _self$get.height,
      className = _self$get.className,
      style = _self$get.style,
      loading = _self$get.loading;

  var classNameObj = (_classNameObj = {
    'k-code': true
  }, _classNameObj[className] = className, _classNameObj);

  if (width || height) {
    var _style = {};

    if (width) {
      _style.width = width;
    }

    if (height) {
      _style.height = height;
    }

    style = addStyle(style, _style);
  }

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return loading;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Spin, {
    'center': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'overlay': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'size': 'small',
    '_context': $this
  }) : undefined, _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}