import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { getRestProps } from '../utils';
import Column from './column';
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
      className = _self$get.className,
      title = _self$get.title,
      type = _self$get.type;

  var hasHeader = blocks.header || blocks.title || title || blocks.extra;
  var hasColumn = false;

  if (children && children.length) {
    for (var i = 0; i < children.length; i++) {
      var vNode = children[i];

      if (vNode && vNode.tag === Column) {
        hasColumn = true;
        break;
      }
    }
  }

  var classNameObj = (_classNameObj = {
    'k-card': true,
    'k-shadow': type === 'shadow',
    'k-border': type === 'border',
    'k-none': type === 'none',
    'k-no-header': !hasHeader,
    'k-card-grid': hasColumn
  }, _classNameObj[className] = className, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return hasHeader;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['header'] = function (parent) {
    return [h('div', null, (_blocks['title'] = function (parent) {
      return function () {
        try {
          return title;
        } catch (e) {
          _e(e);
        }
      }.call($this);
    }) && (__blocks['title'] = function (parent) {
      var _context;

      var args = arguments;
      return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context = [function () {
        return _blocks['title'].apply($this, args);
      }]).call(_context, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
    }) && __blocks['title'].apply($this, [__noop]), 'k-title'), function () {
      try {
        return blocks.extra;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, (_blocks['extra'] = function (parent) {
      return null;
    }) && (__blocks['extra'] = function (parent) {
      var _context2;

      var args = arguments;
      return blocks['extra'] ? blocks['extra'].apply($this, _concatInstanceProperty(_context2 = [function () {
        return _blocks['extra'].apply($this, args);
      }]).call(_context2, __slice.call(args, 1))) : _blocks['extra'].apply($this, args);
    }) && __blocks['extra'].apply($this, [__noop]), 'k-extra') : undefined];
  }) && (__blocks['header'] = function (parent) {
    var _context3;

    var args = arguments;
    return blocks['header'] ? blocks['header'].apply($this, _concatInstanceProperty(_context3 = [function () {
      return _blocks['header'].apply($this, args);
    }]).call(_context3, __slice.call(args, 1))) : _blocks['header'].apply($this, args);
  }) && __blocks['header'].apply($this, [__noop]), 'k-header c-clearfix') : undefined, h('div', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-body')], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}