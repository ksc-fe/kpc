import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
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
      disabled = _self$get.disabled,
      closable = _self$get.closable,
      closed = _self$get.closed,
      size = _self$get.size;

  if (closed) return;
  var classNameObj = (_classNameObj = {
    'k-tag': true
  }, _classNameObj[className] = className, _classNameObj["k-" + type] = type !== 'default', _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-disabled'] = disabled, _classNameObj['k-closable'] = closable, _classNameObj[scope.className] = scope.className, _classNameObj);
  return h(Animate, _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'a:disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:transition': 'c-fade',
    'className': _className(function () {
      try {
        return classNameObj;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'children': [(_blocks['body'] = function (parent) {
      return function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this);
    }) && (__blocks['body'] = function (parent) {
      var _context;

      var args = arguments;
      return blocks['body'] ? blocks['body'].apply($this, _concatInstanceProperty(_context = [function () {
        return _blocks['body'].apply($this, args);
      }]).call(_context, __slice.call(args, 1))) : _blocks['body'].apply($this, args);
    }) && __blocks['body'].apply($this, [__noop]), function () {
      try {
        return closable;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(Button, {
      'type': 'none',
      'icon': function () {
        try {
          return !blocks.close;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': _className(function () {
        try {
          return {
            "k-close": true,
            "k-custom": blocks.close
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'disabled': function () {
        try {
          return disabled;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'size': function () {
        try {
          return size;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': (_blocks['close'] = function (parent) {
        return h('i', null, null, 'k-icon ion-ios-close-empty');
      }) && (__blocks['close'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['close'] ? blocks['close'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['close'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['close'].apply($this, args);
      }) && __blocks['close'].apply($this, [__noop]),
      '_context': $this,
      'ev-click': function () {
        try {
          return self._close;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }) : undefined],
    '_context': $this
  }));
}