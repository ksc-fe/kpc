import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
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
      className = _self$get.className,
      children = _self$get.children,
      type = _self$get.type,
      size = _self$get.size;

  var classNameObj = (_classNameObj = {
    'k-item': true
  }, _classNameObj[className] = className, _classNameObj["k-" + type] = true, _classNameObj["k-" + size] = size !== 'default', _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', null, [h('div', null, (_blocks['dot'] = function (parent) {
    return h('div', null, null, 'k-circle');
  }) && (__blocks['dot'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['dot'] ? blocks['dot'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['dot'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['dot'].apply($this, args);
  }) && __blocks['dot'].apply($this, [__noop]), 'k-dot'), h('div', null, null, 'k-line')], 'k-indicator'), h('div', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-content')], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}