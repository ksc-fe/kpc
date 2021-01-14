import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
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
      to = _self$get.to,
      separator = _self$get.separator,
      children = _self$get.children,
      className = _self$get.className;

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return to;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('a', {
    'ev-click': function () {
      try {
        return self.onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-item-link') : h('span', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-item-link'), function () {
    try {
      return separator != null;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, (_blocks['separator'] = function (parent) {
    return function () {
      try {
        return separator;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['separator'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['separator'] ? blocks['separator'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['separator'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['separator'].apply($this, args);
  }) && __blocks['separator'].apply($this, [__noop]), 'k-separator') : undefined], _className(function () {
    try {
      var _ref;

      return _ref = {
        "k-item": true
      }, _ref[className] = className, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}