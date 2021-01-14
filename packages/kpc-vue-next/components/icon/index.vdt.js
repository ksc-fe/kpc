import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { addStyle, getRestProps } from '../utils';
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
      style = _self$get.style,
      size = _self$get.size,
      color = _self$get.color;

  var classNameObj = (_classNameObj = {
    "k-icon": true
  }, _classNameObj[className] = className, _classNameObj);
  var _style = {};

  if (/^\d+$/.test(size)) {
    _style.fontSize = size + 'px';
  } else if (size !== 'default') {
    classNameObj["k-" + size] = true;
  }

  if (_indexOfInstanceProperty(_context = self.colors).call(_context, color) > -1) {
    classNameObj["k-color-" + color] = color !== 'default';
  } else if (color) {
    _style.color = color;
  }

  return h('i', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return addStyle(style, _style);
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), null, _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}