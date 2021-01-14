import "core-js/modules/es.string.fixed";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { mapChildren, getRestProps } from '../utils';
import { Menu } from '../menu';
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
      className = _self$get.className,
      children = _self$get.children,
      style = _self$get.style,
      collapse = _self$get.collapse,
      fixed = _self$get.fixed,
      size = _self$get.size;

  var vNodes = mapChildren(children, function (vNode) {
    if (vNode.tag === Menu) {
      vNode = _Vdt.miss.clone(vNode, {
        collapse: collapse,
        size: size
      });
      return h('div', null, function () {
        try {
          return vNode;
        } catch (e) {
          _e(e);
        }
      }.call($this), 'k-wrapper');
    }

    return vNode;
  });
  var classNameObj = (_classNameObj = {
    'k-aside': true,
    'k-collapsed': collapse,
    'k-fixed': fixed
  }, _classNameObj["k-" + size] = size !== 'default', _classNameObj[className] = className, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), function () {
    try {
      return vNodes;
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