import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
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

  var _self$get = self.get(),
      size = _self$get.size,
      center = _self$get.center,
      className = _self$get.className,
      overlay = _self$get.overlay;

  var classNameObj = (_classNameObj = {
    'k-spin': true
  }, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-center'] = !overlay && center, _classNameObj[className] = className, _classNameObj['k-overlay'] = overlay, _classNameObj);
  var canvas = h('div', null, (_blocks['canvas'] = function (parent) {
    return h('svg', {
      'viewBox': '0 0 120 120'
    }, h('circle', {
      'cx': '60',
      'cy': '60',
      'r': '57'
    }, null, 'k-circle'));
  }) && (__blocks['canvas'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['canvas'] ? blocks['canvas'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['canvas'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['canvas'].apply($this, args);
  }) && __blocks['canvas'].apply($this, [__noop]), 'k-canvas');
  return h(Animate, _Object$assign({
    'className': _className(function () {
      try {
        return classNameObj;
      } catch (e) {
        _e(e);
      }
    }.call($this))
  }, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'a:transition': 'c-fade',
    'children': function () {
      try {
        return overlay;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, function () {
      try {
        return canvas;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-wrapper') : function () {
      try {
        return canvas;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  }));
}