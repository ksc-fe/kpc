import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import TimePanel from './panel';
import { _$, getRestProps } from '../utils';
import { Select, Option } from '../select';
import Icon from '../icon';
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
      range = _self$get.range,
      multiple = _self$get.multiple,
      _options = _self$get._options,
      size = _self$get.size,
      clearable = _self$get.clearable,
      placeholder = _self$get.placeholder,
      disabled = _self$get.disabled,
      className = _self$get.className,
      container = _self$get.container,
      _value = _self$get._value,
      maxDate = _self$get.maxDate,
      minDate = _self$get.minDate;

  var _placeholder = range ? _$('开始时间 ~ 结束时间') : _$('请选择时间');

  return function () {
    try {
      return !_options || range;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? function () {
    var _obj = {
      'placeholder': function () {
        try {
          return _placeholder;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': _className(function () {
        try {
          return {
            "k-time-picker": true
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'Panel': function () {
        try {
          return TimePanel;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'showFooter': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    };
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['suffix'] = function (parent) {
        return h(Icon, {
          'className': 'k-icon-time',
          '_context': $this
        });
      }) && (__blocks['suffix'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['suffix'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
      }) && (_blocks['singe-panel'] = function (parent) {
        return h(TimePanel, {
          'value': function () {
            try {
              return _value;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'ref': function ref(i) {
            widgets['begin'] = i;
          },
          'multiple': function () {
            try {
              return multiple;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'maxDate': function () {
            try {
              return maxDate;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'minDate': function () {
            try {
              return minDate;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-$change:value': function () {
            try {
              return self._onChangeValue;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'ev-hide': function () {
            try {
              return self._hide;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'ev-wheel': function () {
            try {
              return self._onWheel;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        });
      }) && (__blocks['singe-panel'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['singe-panel'] ? blocks['singe-panel'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['singe-panel'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['singe-panel'].apply($this, args);
      }), __blocks;
    }.call($this, {}), parent);
  }.call($this) : h(Select, _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'multiple': function () {
      try {
        return multiple;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'placeholder': function () {
      try {
        return placeholder || _placeholder;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'hideIcon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'clearable': function () {
      try {
        return clearable;
      } catch (e) {
        _e(e);
      }
    }.call($this),
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
    'filterable': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': _className(function () {
      try {
        var _ref;

        return _ref = {
          'k-datepicker': true
        }, _ref[className] = className, _ref;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'data': function () {
      try {
        return _options;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    '_blocks': function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['suffix'] = function (parent) {
        return h(Icon, {
          'className': 'k-icon-time',
          '_context': $this
        });
      }) && (__blocks['suffix'] = function (parent) {
        var _context3;

        var args = arguments;
        return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context3 = [function () {
          return _blocks['suffix'].apply($this, args);
        }]).call(_context3, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
      }), __blocks;
    }.call($this, {}),
    'value': _getModel(self, 'value'),
    'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'value', __n, $this);
    }
  }));
}