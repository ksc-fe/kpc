import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
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
      value = _self$get.value,
      _list = _self$get._list,
      disabled = _self$get.disabled,
      disable = _self$get.disable,
      _translate = _self$get._translate,
      _marginTop = _self$get._marginTop,
      _dragging = _self$get._dragging;

  var classNameObj = {
    "k-scroll-select": true,
    "k-dragging": _dragging,
    "k-disabled": disabled
  };
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', {
    'style': function () {
      try {
        return {
          transform: "translateY(" + _translate + "px)",
          marginTop: _marginTop + "px"
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mousedown': function () {
      try {
        return !disabled ? self._dragStart : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-wheel': function () {
      try {
        return !disabled ? self._onWheel : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, __m(function () {
    try {
      return _list;
    } catch (e) {
      _e(e);
    }
  }.call($this), function (item, key) {
    return h('div', {
      'ev-click': function () {
        try {
          var _context;

          return !disabled ? _bindInstanceProperty(_context = self._select).call(_context, self, item, key) : undefined;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, function () {
      try {
        return item.label;
      } catch (e) {
        _e(e);
      }
    }.call($this), _className(function () {
      try {
        return {
          "k-scroll-item": true,
          "k-active": item.value === value,
          "k-disabled": disabled || disable && disable.call(self, item.value)
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)), function () {
      try {
        return item.key;
      } catch (e) {
        _e(e);
      }
    }.call($this), function () {
      try {
        return key === 0 ? function (dom) {
          return self.refs.item = dom;
        } : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this));
  }, $this), 'k-wrapper', null, function (i) {
    widgets['wrapper'] = i;
  }), function () {
    try {
      return blocks.append;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['append'] = function (parent) {
    return null;
  }) && (__blocks['append'] = function (parent) {
    var _context2;

    var args = arguments;
    return blocks['append'] ? blocks['append'].apply($this, _concatInstanceProperty(_context2 = [function () {
      return _blocks['append'].apply($this, args);
    }]).call(_context2, __slice.call(args, 1))) : _blocks['append'].apply($this, args);
  }) && __blocks['append'].apply($this, [__noop]), 'k-append') : undefined, h('div', null, null, 'k-border')], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}