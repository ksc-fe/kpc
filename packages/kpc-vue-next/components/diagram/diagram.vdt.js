import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { mapChildren } from '../utils';
import { DShape } from './shapes/shape';
import { DLayout } from './layouts/layout';
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
      children = _self$get.children,
      className = _self$get.className,
      style = _self$get.style;

  return h('div', _Object$assign({
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', null, function () {
    try {
      return mapChildren(children, function (vNode) {
        if (vNode.tag) {
          var proto = vNode.tag.prototype;

          if (proto instanceof DShape || proto instanceof DLayout) {
            vNode.props = _Object$assign({}, vNode.props, {
              _diagram: self,
              _parent: self
            });
          }
        }

        return vNode;
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-scheme', 'scheme'), h('div', null, null, 'k-canvas', 'canvas', function (i) {
    widgets['canvas'] = i;
  })], _className(function () {
    try {
      var _ref;

      return _ref = {
        "k-diagram": true
      }, _ref[className] = className, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}