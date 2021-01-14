import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _valuesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/values";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
import ScrollSelect from '../scrollSelect';
import Time from './time';
import { Row, Col } from '../grid';
import { strPad, _$ } from '../utils';
import { isEqual, isLT, isGT, getDateString, getTimeString, createDate, yearArray, monthArray } from './utils';
import { Tabs, Tab } from '../tabs';
import Icon from '../icon';
import dayjs from 'dayjs';
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
      dayClassNames = _self$get.dayClassNames,
      multiple = _self$get.multiple,
      onMouseEnterDay = _self$get.onMouseEnterDay,
      type = _self$get.type,
      hours = _self$get.hours,
      minutes = _self$get.minutes,
      seconds = _self$get.seconds,
      disabledHours = _self$get.disabledHours,
      disabledMinutes = _self$get.disabledMinutes,
      disabledSeconds = _self$get.disabledSeconds,
      _isShowYearPicker = _self$get._isShowYearPicker,
      _isSelectTime = _self$get._isSelectTime,
      _now = _self$get._now,
      _showDate = _self$get._showDate,
      _focusDate = _self$get._focusDate,
      _id = _self$get._id;

  var _self$_getRealValue = self._getRealValue(),
      value = _self$_getRealValue.value,
      values = _valuesInstanceProperty(_self$_getRealValue);

  var valueDate = value || _now;
  var showDate = _showDate || valueDate;

  var yearMonthFormat = _$('yearMonthFormat');

  if (yearMonthFormat === 'yearMonthFormat') {
    yearMonthFormat = 'YYYY MM';
  }

  var format = yearMonthFormat.split(' ');
  var map = {
    'MM': h('span', null, function () {
      try {
        return _$(showDate.get('month') + 1 + "\u6708");
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-text'),
    'YYYY': h('span', null, function () {
      try {
        return _$("{n}\u5E74", {
          n: showDate.get('year')
        });
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-text')
  };
  var panel = type === 'year' ? map.YYYY : _mapInstanceProperty(format).call(format, function (item) {
    return map[item];
  });

  var isYearOrMonth = self._isYearOrMonth();

  return h('div', {
    'tabindex': '0',
    'ev-keydown': function () {
      try {
        return self._onKeydown;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [(_blocks['title'] = function (parent) {
    return null;
  }) && (__blocks['title'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['title'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
  }) && __blocks['title'].apply($this, [__noop]), function () {
    try {
      return type === 'datetime';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Tabs, {
    'type': 'border-card',
    'value': function () {
      try {
        return _isSelectTime ? "time" : "date";
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [h(Tab, {
      'value': 'date',
      'children': function () {
        try {
          return value ? getDateString(valueDate.toDate()) : '0000-00-00';
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    }), h(Tab, {
      'value': 'time',
      'children': function () {
        try {
          return value ? getTimeString(valueDate.toDate()) : '00:00:00';
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    })],
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeTab;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined, function () {
    try {
      return !_isSelectTime;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [h('div', null, [h('div', null, [h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': 'small',
    'className': 'k-prev',
    'tagName': 'div',
    'tabindex': function () {
      try {
        return null;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [h(Icon, {
      'className': 'ion-ios-arrow-left',
      'size': 'small',
      '_context': $this
    }), h(Icon, {
      'className': 'ion-ios-arrow-left',
      'size': 'small',
      '_context': $this
    })],
    '_context': $this,
    'ev-click': function () {
      try {
        return self.prevYear;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return type !== 'year';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': 'small',
    'className': 'k-prev',
    'tagName': 'div',
    'tabindex': function () {
      try {
        return null;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(Icon, {
      'className': 'ion-ios-arrow-left',
      'size': 'small',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self.prevMonth;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], 'k-left-btns'), h('div', null, [h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': 'small',
    'className': 'k-next',
    'tagName': 'div',
    'tabindex': function () {
      try {
        return null;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [h(Icon, {
      'className': 'ion-ios-arrow-right',
      'size': 'small',
      '_context': $this
    }), h(Icon, {
      'className': 'ion-ios-arrow-right',
      'size': 'small',
      '_context': $this
    })],
    '_context': $this,
    'ev-click': function () {
      try {
        return self.nextYear;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return type !== 'year';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': 'small',
    'className': 'k-next',
    'tagName': 'div',
    'tabindex': function () {
      try {
        return null;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(Icon, {
      'className': 'ion-ios-arrow-right',
      'size': 'small',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self.nextMonth;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], 'k-right-btns'), h('div', {
    'ev-click': function () {
      try {
        return isYearOrMonth ? undefined : self.showYearPicker;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [h(Animate, {
    'a:show': function () {
      try {
        return !isYearOrMonth && _isShowYearPicker;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:transition': 'c-fade',
    'a:tag': function () {
      try {
        return Icon;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': 'ion-ios-undo',
    'key': 'undo',
    '_context': $this
  }), function () {
    try {
      return panel;
    } catch (e) {
      _e(e);
    }
  }.call($this)], 'k-text-wrapper')], 'k-month c-clearfix'), function () {
    try {
      return !_isShowYearPicker;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, __m(function () {
    try {
      return [_$('日'), _$('一'), _$('二'), _$('三'), _$('四'), _$('五'), _$('六')];
    } catch (e) {
      _e(e);
    }
  }.call($this), function (value, key) {
    return h('div', null, function () {
      try {
        return value;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-weekday');
  }, $this), 'k-weekdays') : undefined, function () {
    try {
      return !_isShowYearPicker;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'ev-mouseleave': function () {
      try {
        return self._onMouseLeaveDays;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return function () {
        var ret = []; // dayjs is immutable, so we use js Date

        var start = showDate.toDate();
        var month = start.getMonth();
        start.setDate(1);
        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);
        var startWeekday = start.getDay();
        start.setDate(1 - startWeekday);

        var _loop = function _loop(i) {
          var dayjsDate = dayjs(start);

          var _date = start.getDate();

          var _month = start.getMonth();

          var disabled = self._isDisabledDate(dayjsDate);

          var isOut = _month !== month;
          var classNames = dayClassNames ? dayClassNames.call(self, dayjsDate, isOut) : null;
          ret.push(h('div', {
            'ev-click': function () {
              try {
                var _context2;

                return !disabled && _bindInstanceProperty(_context2 = self.select).call(_context2, self, dayjsDate);
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'ev-mouseenter': function () {
              try {
                var _context3;

                return _bindInstanceProperty(_context3 = self._onMouseEnter).call(_context3, self, dayjsDate, isOut);
              } catch (e) {
                _e(e);
              }
            }.call($this)
          }, function () {
            try {
              return _date;
            } catch (e) {
              _e(e);
            }
          }.call($this), _className(function () {
            try {
              return _Object$assign({
                "k-day": true,
                "k-out": isOut,
                "k-active": !isOut && _findInstanceProperty(values).call(values, function (value) {
                  return isEqual(value, dayjsDate);
                }),
                "k-today": isEqual(_now, dayjsDate),
                "k-disabled": disabled,
                "k-hover": isEqual(_focusDate, dayjsDate)
              }, classNames);
            } catch (e) {
              _e(e);
            }
          }.call($this))));
          start.setDate(start.getDate() + 1);
        };

        for (var i = 0; i < 42; i++) {
          _loop(i);
        }

        var result = [];

        var _loop2 = function _loop2(_i) {
          result.push(h('div', null, function () {
            try {
              return _sliceInstanceProperty(ret).call(ret, 7 * _i, 7 * (_i + 1));
            } catch (e) {
              _e(e);
            }
          }.call($this)));
        };

        for (var _i = 0; _i < 6; _i++) {
          _loop2(_i);
        }

        return result;
      }();
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-calendar') : undefined, function () {
    try {
      return _isShowYearPicker;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Row, {
    'className': 'k-year-picker',
    'children': function () {
      try {
        var span, _map;

        return span = type === 'year' ? 24 : 12, _map = {
          MM: h(Col, {
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
                  return monthArray;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'value': function () {
                try {
                  return showDate.month();
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'disable': function () {
                try {
                  return self._isDisabledMonth;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              '_context': $this,
              'ev-$change:value': function () {
                try {
                  return self.onChangeMonth;
                } catch (e) {
                  _e(e);
                }
              }.call($this)
            }),
            '_context': $this
          }),
          YYYY: h(Col, {
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
                  return yearArray;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'value': function () {
                try {
                  return showDate.year();
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'disable': function () {
                try {
                  return self._isDisabledYear;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              '_context': $this,
              'ev-$change:value': function () {
                try {
                  return self.onChangeYear;
                } catch (e) {
                  _e(e);
                }
              }.call($this)
            }),
            '_context': $this
          })
        }, type === 'year' ? _map.YYYY : _mapInstanceProperty(format).call(format, function (item) {
          return _map[item];
        });
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  }) : undefined], 'k-date-picker') : h('div', {
    'ev-wheel': function () {
      try {
        return self._onWheel;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, (_blocks['time-body'] = function (parent) {
    return h(Time, {
      'data': function () {
        try {
          return [_mapInstanceProperty(hours).call(hours, function (v) {
            return strPad(v, 2);
          }), _mapInstanceProperty(minutes).call(minutes, function (v) {
            return strPad(v, 2);
          }), _mapInstanceProperty(seconds).call(seconds, function (v) {
            return strPad(v, 2);
          })];
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'value': function () {
        try {
          return value || // if exists _id, it indicate that this is a range time selection of Timepicker
          // we don't let Time to trigger $change:value in initial
          // otherwise the start time will be disabled due to the end time is 00:00:00
          // #119
          self.get('_id') ? [strPad(valueDate.hour(), 2), strPad(valueDate.minute(), 2), strPad(valueDate.second(), 2)] : ['', '', ''];
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'disabledItems': function () {
        try {
          return [disabledHours, disabledMinutes, disabledSeconds];
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
          return scope.date || valueDate;
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
      '_blocks': function (blocks) {
        var _blocks = {},
            __blocks = extend({}, blocks);

        return (_blocks['append'] = function (parent) {
          return ':';
        }) && (__blocks['append'] = function (parent) {
          var _context4;

          var args = arguments;
          return blocks['append'] ? blocks['append'].apply($this, _concatInstanceProperty(_context4 = [function () {
            return _blocks['append'].apply($this, args);
          }]).call(_context4, __slice.call(args, 1))) : _blocks['append'].apply($this, args);
        }), __blocks;
      }.call($this, {}),
      'ev-change': function () {
        try {
          return self.onChangeTime;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    });
  }) && (__blocks['time-body'] = function (parent) {
    var _context5;

    var args = arguments;
    return blocks['time-body'] ? blocks['time-body'].apply($this, _concatInstanceProperty(_context5 = [function () {
      return _blocks['time-body'].apply($this, args);
    }]).call(_context5, __slice.call(args, 1))) : _blocks['time-body'].apply($this, args);
  }) && __blocks['time-body'].apply($this, [__noop]), 'k-time-picker', 'time')], _className(function () {
    try {
      return {
        "k-calendar-wrapper": true,
        "k-datetime": type === 'datetime'
      };
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}