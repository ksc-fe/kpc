import "core-js/modules/es.function.name";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Input from '../input';
import Tooltip from '../tooltip';
import { _$, isFunction, getRestProps } from '../utils';
import Calendar from './calendar';
import Button from '../button';
import Icon from '../icon';
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
      value = _self$get.value,
      clearable = _self$get.clearable,
      className = _self$get.className,
      style = _self$get.style,
      _isShow = _self$get._isShow,
      name = _self$get.name,
      disabled = _self$get.disabled,
      placeholder = _self$get.placeholder,
      size = _self$get.size,
      transition = _self$get.transition,
      _value = _self$get._value,
      range = _self$get.range,
      type = _self$get.type,
      ref = _self$get.ref,
      key = _self$get.key,
      shortcuts = _self$get.shortcuts,
      container = _self$get.container,
      maxDate = _self$get.maxDate,
      minDate = _self$get.minDate,
      rest = _objectWithoutPropertiesLoose(_self$get, ["value", "clearable", "className", "style", "_isShow", "name", "disabled", "placeholder", "size", "transition", "_value", "range", "type", "ref", "key", "shortcuts", "container", "maxDate", "minDate"]); // pass the rest props to Calendar, except events


  var _rest = {};
  var _events = {};

  for (var _key in rest) {
    if (_key.substring(0, 3) !== 'ev-') {
      _rest[_key] = rest[_key];
    } else {
      _events[_key] = rest[_key];
    }
  }

  var classNameObj = (_classNameObj = {
    'k-datepicker': true,
    'k-disabled': disabled,
    'k-show': _isShow
  }, _classNameObj[className] = className, _classNameObj['k-range'] = range, _classNameObj[scope.className] = scope.className, _classNameObj);
  var hasShortcuts = shortcuts && shortcuts.length;

  var _placeholder = placeholder || scope.placeholder;

  if (_placeholder == null) {
    if (type === 'datetime') {
      if (range) {
        _placeholder = _$('开始时间 ~ 结束时间');
      } else {
        _placeholder = _$('请选择日期和时间');
      }
    } else if (type === 'year') {
      _placeholder = _$('请选择年份');
    } else if (type === 'month') {
      _placeholder = _$('请选择月份');
    } else {
      if (range) {
        _placeholder = _$('开始日期 ~ 结束日期');
      } else {
        _placeholder = _$('请选择日期');
      }
    }
  }

  var Panel = scope.Panel || Calendar;

  var _maxDate = maxDate && self._createDate(maxDate);

  var _minDate = minDate && self._createDate(minDate);

  var panelProps;

  if (range) {
    panelProps = {
      value: _value,
      type: type,
      dayClassNames: self._checkDateInRange,
      onMouseEnterDay: self._highlightRangeDays,
      multiple: true,
      range: true,
      autoChangeToTimePicker: false,
      maxDate: _maxDate,
      minDate: _minDate,
      _parent: self,
      'ev-$change:value': self._onChangeValueForRange,
      'ev-hide': self._hide,
      'ev-$change:_showDate': self._onChangeShowDate,
      'ev-wheel': self._onWheel
    };
  }

  var content = (_blocks['content'] = function (parent) {
    return [function () {
      try {
        return hasShortcuts;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, __m(function () {
      try {
        return shortcuts;
      } catch (e) {
        _e(e);
      }
    }.call($this), function (value, key) {
      return h('div', {
        'ev-click': function () {
          try {
            var _context;

            return _bindInstanceProperty(_context = self._setValue).call(_context, self, value.value());
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, function () {
        try {
          return isFunction(value.label) ? value.label() : value.label;
        } catch (e) {
          _e(e);
        }
      }.call($this), 'k-item c-ellipsis');
    }, $this), 'k-shortcuts') : undefined, function () {
      try {
        return !range;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? (_blocks['singe-panel'] = function (parent) {
      return h(Panel, _Object$assign({}, function () {
        try {
          return _rest;
        } catch (e) {
          _e(e);
        }
      }.call($this), {
        'type': function () {
          try {
            return type;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ref': function ref(i) {
          widgets['begin'] = i;
        },
        'maxDate': function () {
          try {
            return _maxDate;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'minDate': function () {
          try {
            return _minDate;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'value': _getModel(self, '_value'),
        'ev-hide': function () {
          try {
            return self._hide;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-enter:select': function () {
          try {
            return self._focus;
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
        }.call($this),
        'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, '_value', __n, $this);
        }
      }));
    }) && (__blocks['singe-panel'] = function (parent) {
      var _context2;

      var args = arguments;
      return blocks['singe-panel'] ? blocks['singe-panel'].apply($this, _concatInstanceProperty(_context2 = [function () {
        return _blocks['singe-panel'].apply($this, args);
      }]).call(_context2, __slice.call(args, 1))) : _blocks['singe-panel'].apply($this, args);
    }) && __blocks['singe-panel'].apply($this, [__noop]) : h('div', {
      'ev-mouseleave': function () {
        try {
          return self._clearRangeEndDate;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, [h(Panel, _Object$assign({}, function () {
      try {
        return _rest;
      } catch (e) {
        _e(e);
      }
    }.call($this), {}, function () {
      try {
        return panelProps;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'ref': function ref(i) {
        widgets['begin'] = i;
      },
      '_index': function () {
        try {
          return 0;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_id': '0',
      '_context': $this,
      'ev-$inited': function () {
        try {
          return self._setBeginShowDate;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })), h(Panel, _Object$assign({}, function () {
      try {
        return _rest;
      } catch (e) {
        _e(e);
      }
    }.call($this), {}, function () {
      try {
        return panelProps;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'ref': function ref(i) {
        widgets['end'] = i;
      },
      '_index': function () {
        try {
          return 1;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_id': '1',
      '_context': $this,
      'ev-$inited': function () {
        try {
          return self._setEndShowDate;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }))], 'k-range c-clearfix'), function () {
      try {
        return type === 'datetime' || type === 'year' || type === 'month' || scope.showFooter;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, h(Button, {
      'type': 'primary',
      'size': 'small',
      'disabled': function () {
        try {
          return !value;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': function () {
        try {
          return _$('确定');
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this,
      'ev-click': function () {
        try {
          return self._confirm;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }), 'k-footer') : undefined];
  }) && (__blocks['content'] = function (parent) {
    var _context3;

    var args = arguments;
    return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context3 = [function () {
      return _blocks['content'].apply($this, args);
    }]).call(_context3, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
  }) && __blocks['content'].apply($this, [__noop]);

  var suffix = (_blocks['suffix'] = function (parent) {
    return h(Icon, {
      'className': 'k-icon-calendar',
      '_context': $this
    });
  }) && (__blocks['suffix'] = function (parent) {
    var _context4;

    var args = arguments;
    return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context4 = [function () {
      return _blocks['suffix'].apply($this, args);
    }]).call(_context4, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
  }) && __blocks['suffix'].apply($this, [__noop]);

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self, _events);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return disabled ? '-1' : '0';
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keydown': function () {
      try {
        return self._onKeydown;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(Tooltip, {
    'className': _className(function () {
      try {
        var _ref;

        return _ref = {
          "k-datepicker-content": true,
          'k-with-shortcuts': hasShortcuts
        }, _ref[scope.className] = scope.className, _ref;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'position': function () {
      try {
        return {
          my: 'left top+8',
          at: 'left bottom',
          collision: 'flip'
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'trigger': 'click',
    'showArrow': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'transition': function () {
      try {
        return transition;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['calendar'] = i;
    },
    'disabled': function () {
      try {
        return disabled;
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
    'theme': 'light',
    'children': h(Input, {
      'placeholder': function () {
        try {
          return _placeholder;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'value': function () {
        try {
          return self._format();
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
      'name': function () {
        try {
          return name;
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
      'ref': function ref(i) {
        widgets['input'] = i;
      },
      'tabindex': '-1',
      'stackClearIcon': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'frozenOnInput': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'fluid': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this,
      '_blocks': function (blocks) {
        var _blocks = {},
            __blocks = extend({}, blocks);

        return (_blocks['suffix'] = function (parent) {
          return function () {
            try {
              return suffix;
            } catch (e) {
              _e(e);
            }
          }.call($this);
        }) && (__blocks['suffix'] = function (parent) {
          var _context5;

          var args = arguments;
          return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context5 = [function () {
            return _blocks['suffix'].apply($this, args);
          }]).call(_context5, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
        }), __blocks;
      }.call($this, {}),
      'ev-clear': function () {
        try {
          return self.onClear;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-blur': function () {
        try {
          return self.onInputFocusOut;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-input': function () {
        try {
          return self._onInput;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-change': function () {
        try {
          return self._onChange;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-focus': function () {
        try {
          return self._onFocus;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }),
    '_context': $this,
    '_blocks': function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['content'] = function (parent) {
        return function () {
          try {
            return content;
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['content'] = function (parent) {
        var _context6;

        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context6 = [function () {
          return _blocks['content'].apply($this, args);
        }]).call(_context6, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, {}),
    'ev-show': function () {
      try {
        return self._onShow;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-hide': function () {
      try {
        return self._onHide;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-$changed:value': function () {
      try {
        return self._onChangeShow;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}