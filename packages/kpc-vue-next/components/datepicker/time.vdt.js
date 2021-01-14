import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { Row, Col } from '../grid';
import ScrollSelect from '../scrollSelect';
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
      data = _self$get.data,
      _value = _self$get._value,
      value = _self$get.value,
      disabledItems = _self$get.disabledItems;

  var span = data.length ? 24 / data.length : 0;

  var append = (_blocks['append'] = function (parent) {
    return null;
  }) && (__blocks['append'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['append'] ? blocks['append'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['append'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['append'].apply($this, args);
  }) && __blocks['append'].apply($this, [__noop]);

  return h(Row, {
    'className': 'k-scroll-select-group',
    'children': __m(function () {
      try {
        return data;
      } catch (e) {
        _e(e);
      }
    }.call($this), function (item, key) {
      return h(Col, {
        'span': function () {
          try {
            return span;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'children': h(ScrollSelect, {
          'data': function () {
            try {
              return item;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'value': function () {
            try {
              return value && value[key];
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'disable': function () {
            try {
              var _context2;

              return _bindInstanceProperty(_context2 = self._disable).call(_context2, self, key);
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'disabled': function () {
            try {
              return disabledItems[key];
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          '_blocks': function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);

            return function () {
              try {
                return key !== data.length - 1;
              } catch (e) {
                _e(e);
              }
            }.call($this) ? (_blocks['append'] = function (parent) {
              return function () {
                try {
                  return append;
                } catch (e) {
                  _e(e);
                }
              }.call($this);
            }) && (__blocks['append'] = function (parent) {
              var _context3;

              var args = arguments;
              return blocks['append'] ? blocks['append'].apply($this, _concatInstanceProperty(_context3 = [function () {
                return _blocks['append'].apply($this, args);
              }]).call(_context3, __slice.call(args, 1))) : _blocks['append'].apply($this, args);
            }) : undefined, __blocks;
          }.call($this, {}),
          'ev-$change:_value': function () {
            try {
              var _context4;

              return _bindInstanceProperty(_context4 = self._onChangeValue).call(_context4, self, key);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }),
        '_context': $this
      });
    }, $this),
    '_context': $this
  });
}