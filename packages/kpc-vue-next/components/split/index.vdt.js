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
      mode = _self$get.mode,
      className = _self$get.className,
      firstSize = _self$get.firstSize,
      lastSize = _self$get.lastSize,
      _resizing = _self$get._resizing;

  var classNameObj = (_classNameObj = {
    'k-split': true
  }, _classNameObj["k-" + mode] = true, _classNameObj[className] = className, _classNameObj['k-first-auto'] = firstSize === 'auto', _classNameObj['k-last-auto'] = lastSize === 'auto', _classNameObj['k-resizing'] = _resizing, _classNameObj);
  var stylePropName = mode === 'horizontal' ? 'width' : 'height';
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', {
    'style': function () {
      try {
        var _ref;

        return _ref = {}, _ref[stylePropName] = firstSize, _ref;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, (_blocks['first'] = function (parent) {
    return null;
  }) && (__blocks['first'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['first'] ? blocks['first'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['first'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['first'].apply($this, args);
  }) && __blocks['first'].apply($this, [__noop]), 'k-first', null, function (i) {
    widgets['first'] = i;
  }), h('div', {
    'ev-mousedown': function () {
      try {
        return self._onMoveStart;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, (_blocks['drag'] = function (parent) {
    return h('div', null, h('div', null, null, 'k-drag-lines'), 'k-line');
  }) && (__blocks['drag'] = function (parent) {
    var _context2;

    var args = arguments;
    return blocks['drag'] ? blocks['drag'].apply($this, _concatInstanceProperty(_context2 = [function () {
      return _blocks['drag'].apply($this, args);
    }]).call(_context2, __slice.call(args, 1))) : _blocks['drag'].apply($this, args);
  }) && __blocks['drag'].apply($this, [__noop]), 'k-line-wrapper'), h('div', {
    'style': function () {
      try {
        var _ref2;

        return _ref2 = {}, _ref2[stylePropName] = lastSize, _ref2;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, (_blocks['last'] = function (parent) {
    return null;
  }) && (__blocks['last'] = function (parent) {
    var _context3;

    var args = arguments;
    return blocks['last'] ? blocks['last'].apply($this, _concatInstanceProperty(_context3 = [function () {
      return _blocks['last'].apply($this, args);
    }]).call(_context3, __slice.call(args, 1))) : _blocks['last'].apply($this, args);
  }) && __blocks['last'].apply($this, [__noop]), 'k-last', null, function (i) {
    widgets['last'] = i;
  })], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}