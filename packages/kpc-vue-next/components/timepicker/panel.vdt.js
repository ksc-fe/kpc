import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Time from './time';
import { _$ } from '../utils';
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
      _id = _self$get._id,
      _options = _self$get._options,
      multiple = _self$get.multiple,
      value = _self$get.value,
      _now = _self$get._now,
      _parent = _self$get._parent;

  var values = value ? multiple ? value : [value] : [];
  var valueDate = values[self._index] || _now;
  return function () {
    var _obj = null;
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['time-head'] = function (parent) {
        return null;
      }) && (__blocks['time-head'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['time-head'] ? blocks['time-head'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['time-head'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['time-head'].apply($this, args);
      }) && (_blocks['title'] = function (parent) {
        return function () {
          try {
            return _id === '0';
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h('div', null, function () {
          try {
            return _$('开始时间');
          } catch (e) {
            _e(e);
          }
        }.call($this), 'k-title') : function () {
          try {
            return _id === '1';
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h('div', null, function () {
          try {
            return _$('结束时间');
          } catch (e) {
            _e(e);
          }
        }.call($this), 'k-title') : undefined;
      }) && (__blocks['title'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['title'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
      }) && function () {
        try {
          return _options;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? (_blocks['time-body'] = function (parent) {
        return h(Time, {
          'data': function () {
            try {
              return [_options];
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'value': function () {
            try {
              return [_parent._dateToString(valueDate)];
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'min': function () {
            try {
              return self._getMinDate();
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'max': function () {
            try {
              return self._getMaxDate();
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'date': function () {
            try {
              return valueDate;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_parent': function () {
            try {
              return _parent;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'isDisabledTime': function () {
            try {
              return self._isDisabledTime;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-change': function () {
            try {
              return self.changeTimeByStep;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        });
      }) && (__blocks['time-body'] = function (parent) {
        var _context3;

        var args = arguments;
        return blocks['time-body'] ? blocks['time-body'].apply($this, _concatInstanceProperty(_context3 = [function () {
          return _blocks['time-body'].apply($this, args);
        }]).call(_context3, __slice.call(args, 1))) : _blocks['time-body'].apply($this, args);
      }) : undefined, __blocks;
    }.call($this, blocks), parent);
  }.call($this);
}