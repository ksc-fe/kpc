import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Icon from '../icon';
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
      _value = _self$get._value,
      count = _self$get.count,
      className = _self$get.className,
      disabled = _self$get.disabled,
      half = _self$get.half;

  var classNameObj = (_classNameObj = {
    'k-rate': true,
    'k-disabled': disabled
  }, _classNameObj[className] = className, _classNameObj);

  var icon = (_blocks['icon'] = function (parent) {
    return h(Icon, {
      'className': 'ion-android-star',
      '_context': $this
    });
  }) && (__blocks['icon'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['icon'] ? blocks['icon'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['icon'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['icon'].apply($this, args);
  }) && __blocks['icon'].apply($this, [__noop]);

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-mouseleave': function () {
      try {
        return self.onMouseLeaveComponent;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return function () {
        var ret = [];

        var _loop = function _loop(i) {
          var className = _value >= i + 1 ? 'k-full' : _value === i + 0.5 ? 'k-half' : null;
          var halfStep = half ? i + 0.5 : i + 1;
          ret.push(h('div', null, [h('div', {
            'ev-click': function () {
              try {
                var _context2;

                return _bindInstanceProperty(_context2 = self.onClick).call(_context2, self, halfStep);
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'ev-mouseenter': function () {
              try {
                var _context3;

                return _bindInstanceProperty(_context3 = self.onMouseEnter).call(_context3, self, halfStep);
              } catch (e) {
                _e(e);
              }
            }.call($this)
          }, function () {
            try {
              return icon;
            } catch (e) {
              _e(e);
            }
          }.call($this), 'k-first'), h('div', {
            'ev-click': function () {
              try {
                var _context4;

                return _bindInstanceProperty(_context4 = self.onClick).call(_context4, self, i + 1);
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'ev-mouseenter': function () {
              try {
                var _context5;

                return _bindInstanceProperty(_context5 = self.onMouseEnter).call(_context5, self, i + 1);
              } catch (e) {
                _e(e);
              }
            }.call($this)
          }, function () {
            try {
              return icon;
            } catch (e) {
              _e(e);
            }
          }.call($this), 'k-second')], _className(function () {
            try {
              var _ref;

              return _ref = {
                "k-item": true
              }, _ref[className] = className, _ref;
            } catch (e) {
              _e(e);
            }
          }.call($this))));
        };

        for (var i = 0; i < count; i++) {
          _loop(i);
        }

        return ret;
      }();
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