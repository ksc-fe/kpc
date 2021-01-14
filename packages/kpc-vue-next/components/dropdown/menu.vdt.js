import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import MoveWrapper from '../moveWrapper';
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
      value = _self$get.value,
      trigger = _self$get.trigger,
      className = _self$get.className,
      transition = _self$get.transition,
      container = _self$get.container;

  var events = {}; // no matter what the trigger is, we should show menu when enter it.
  // for this case: hover trigger nests click trigger

  events['ev-mouseenter'] = self.show;

  if (trigger === 'hover') {
    var _context;

    events['ev-mouseleave'] = _bindInstanceProperty(_context = self.hide).call(_context, self, false);
  }

  return h(MoveWrapper, {
    'ref': function ref(i) {
      widgets['wrapper'] = i;
    },
    '_parent': function () {
      try {
        return self;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(Animate, _Object$assign({
      'a:show': function () {
        try {
          return value;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': _className(function () {
        try {
          var _ref;

          return _ref = {
            "k-dropdown-menu": true
          }, _ref[className] = className, _ref;
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'a:transition': function () {
        try {
          return transition;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'a:appear': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ref': function ref(i) {
        widgets['menu'] = i;
      }
    }, function () {
      try {
        return events;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'a:delayDestroy': function () {
        try {
          return false;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'a:enterStart': function () {
        try {
          return self._onShow;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': (_blocks['children'] = function (parent) {
        return function () {
          try {
            return children;
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['children'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['children'] ? blocks['children'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['children'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['children'].apply($this, args);
      }) && __blocks['children'].apply($this, [__noop]),
      '_context': $this,
      'ev-a:leaveStart': function () {
        try {
          return self._removeDocumentEvents;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-mousedown': function () {
        try {
          return self._onMouseDown;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })),
    '_context': $this
  });
}