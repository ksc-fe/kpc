import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { getRestProps } from '../utils';
import BreadcrumbItem from './item';
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
      separator = _self$get.separator,
      className = _self$get.className;

  var classNameObj = (_classNameObj = {
    'k-breadcrumb': true
  }, _classNameObj[className] = className, _classNameObj);

  var _children = children ? _Array$isArray(children) ? children : [children] : children;

  var _separator = (_blocks['separator'] = function (parent) {
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
  }) && __blocks['separator'].apply($this, [__noop]); // maybe the last BreadcrumbItem is not the last vNode


  var lastItem;

  var vNodes = _mapInstanceProperty(__u).call(__u, _children, function (vNode, index) {
    if (vNode.tag === BreadcrumbItem) {
      var props;

      if (_separator != null && vNode.props.separator == null) {
        props = {
          separator: _separator
        };
      }

      lastItem = _Vdt.miss.clone(vNode, props);
      return lastItem;
    }

    return vNode;
  });

  if (lastItem) {
    lastItem.props = _Object$assign({}, lastItem.props, {
      separator: null
    });
  }

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