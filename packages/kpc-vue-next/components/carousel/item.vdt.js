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
      value = _self$get.value,
      _parent = _self$get._parent,
      _isCloned = _self$get._isCloned;

  var active = _parent._isActive(value);

  var classNameObj = (_classNameObj = {
    'k-carousel-item': true
  }, _classNameObj[className] = className, _classNameObj['k-active'] = active, _classNameObj['k-cloned'] = _isCloned, _classNameObj);

  var isSlide = _parent._isSlide();

  return h(Animate, _Object$assign({
    'className': _className(function () {
      try {
        return classNameObj;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'a:show': function () {
      try {
        return isSlide || active;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:disabled': function () {
      try {
        return isSlide;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:transition': 'k-fade',
    'a:continuity': function () {
      try {
        return false;
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
  }.call($this), {
    'children': (_blocks['children'] = function (parent) {
      return function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this);
    }) && (__blocks['children'] = function (parent) {
      var _context;

      var args = arguments;
      return blocks['children'] ? blocks['children'].apply($this, _concatInstanceProperty(_context = [function () {
        return _blocks['children'].apply($this, args);
      }]).call(_context, __slice.call(args, 1))) : _blocks['children'].apply($this, args);
    }) && __blocks['children'].apply($this, [__noop]),
    '_context': $this
  }));
}