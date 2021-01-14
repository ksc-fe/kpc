import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.to-fixed";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Spinner from '../spinner';
import Tooltip from '../tooltip';
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
      value = _self$get.value,
      min = _self$get.min,
      max = _self$get.max,
      className = _self$get.className,
      disabled = _self$get.disabled,
      isRange = _self$get.isRange,
      animate = _self$get.animate,
      isShowInput = _self$get.isShowInput,
      isShowEnd = _self$get.isShowEnd,
      unit = _self$get.unit,
      step = _self$get.step,
      _isDragging = _self$get._isDragging,
      _isFirst = _self$get._isFirst,
      _isSecond = _self$get._isSecond,
      _sliderValue = _self$get._sliderValue,
      always = _self$get.always,
      isShowStop = _self$get.isShowStop,
      marks = _self$get.marks,
      showTooltip = _self$get.showTooltip,
      tooltipProps = _self$get.tooltipProps;

  var classNameObj = (_classNameObj = {
    'k-slider': true,
    'k-disabled': disabled
  }, _classNameObj[className] = className, _classNameObj['k-dragging'] = _isDragging || !animate, _classNameObj['k-show-input'] = isShowInput && !isRange, _classNameObj['k-show-end'] = isShowEnd, _classNameObj);
  var sliderWidth = max - min;

  var toPercent = function toPercent(value) {
    return value / sliderWidth * 100 + '%';
  };

  var barStyle;
  var handleStartStyle;
  var handleEndStyle;

  if (sliderWidth) {
    if (isRange) {
      barStyle = {
        width: toPercent(Math.abs(_sliderValue[1] - _sliderValue[0])),
        left: toPercent(Math.min(_sliderValue[0], _sliderValue[1]) - min)
      };
      handleStartStyle = {
        left: toPercent(_sliderValue[0] - min)
      };
      handleEndStyle = {
        left: toPercent(_sliderValue[1] - min)
      };
    } else {
      barStyle = {
        width: toPercent(_sliderValue - min)
      };
      handleStartStyle = {
        left: toPercent(_sliderValue - min)
      };
    }
  } else {
    barStyle = {
      width: '100%',
      left: '0'
    };
    handleStartStyle = {
      left: '100%'
    };
    handleEndStyle = {
      left: '0'
    };
  }

  var tooltip = function tooltip(value) {
    var _context2;

    return (_blocks['tooltip'] = function (parent) {
      return function () {
        try {
          return value;
        } catch (e) {
          _e(e);
        }
      }.call($this);
    }) && (__blocks['tooltip'] = function (parent) {
      var _context;

      var args = arguments;
      return blocks['tooltip'] ? blocks['tooltip'].apply($this, _concatInstanceProperty(_context = [function () {
        return _blocks['tooltip'].apply($this, args);
      }]).call(_context, __slice.call(args, 1))) : _blocks['tooltip'].apply($this, args);
    }) && __blocks['tooltip'].apply($this, _concatInstanceProperty(_context2 = [__noop]).call(_context2, function () {
      try {
        return [value];
      } catch (e) {
        _e(e);
      }
    }.call($this)));
  };

  var _tooltipProps = _Object$assign({
    container: function container(dom) {
      return dom.parentElement;
    },
    canHover: true,
    always: always
  }, tooltipProps);

  if (always) {
    _tooltipProps.value = true;
  }

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', null, [h('div', {
    'ev-click': function () {
      try {
        return self._clickWrapper;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, h('div', null, [h('div', {
    'style': function () {
      try {
        return barStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'k-bar'), h('div', {
    'style': function () {
      try {
        return handleStartStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, h(Tooltip, _Object$assign({
    'ref': function ref(i) {
      widgets['tooltip1'] = i;
    },
    'disabled': function () {
      try {
        return !showTooltip;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return _tooltipProps;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'children': h('div', {
      'tabindex': function () {
        try {
          return disabled ? "-1" : "0";
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-mousedown': function () {
        try {
          var _context3, _context4;

          return isRange ? _bindInstanceProperty(_context3 = self._onDrag).call(_context3, self, '_isFirst') : _bindInstanceProperty(_context4 = self._onDrag).call(_context4, self, undefined);
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-click': function () {
        try {
          return self._stopPropagation;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-keydown': function () {
        try {
          var _context5, _context6;

          return isRange ? _bindInstanceProperty(_context5 = self._onKeydown).call(_context5, self, '_isFirst') : _bindInstanceProperty(_context6 = self._onKeydown).call(_context6, self, undefined);
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-keyup': function () {
        try {
          return self._onKeyUp;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-focusin': function () {
        try {
          var _context7;

          return _bindInstanceProperty(_context7 = self._onFocusin).call(_context7, self, '_isFirst');
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-focusout': function () {
        try {
          var _context8;

          return _bindInstanceProperty(_context8 = self._onFocusout).call(_context8, self, '_isFirst');
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, null, _className(function () {
      try {
        return {
          "k-handle": true,
          "k-active": _isFirst && _sliderValue[1] === self._max || _isSecond && value[0] !== self._min
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)), null, function () {
      try {
        return function (dom) {
          return self.$sliderFirstBtn = dom;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    '_context': $this,
    '_blocks': function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['content'] = function (parent) {
        return function () {
          try {
            return tooltip(isRange ? value[0] : value);
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['content'] = function (parent) {
        var _context9;

        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context9 = [function () {
          return _blocks['content'].apply($this, args);
        }]).call(_context9, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, {})
  })), 'k-handle-wrapper'), function () {
    try {
      return isRange;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'style': function () {
      try {
        return handleEndStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, h(Tooltip, _Object$assign({
    'ref': function ref(i) {
      widgets['tooltip2'] = i;
    },
    'disabled': function () {
      try {
        return !showTooltip;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return _tooltipProps;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'children': h('div', {
      'tabindex': function () {
        try {
          return disabled ? "-1" : "0";
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-mousedown': function () {
        try {
          var _context10;

          return _bindInstanceProperty(_context10 = self._onDrag).call(_context10, self, "_isSecond");
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-keydown': function () {
        try {
          var _context11;

          return _bindInstanceProperty(_context11 = self._onKeydown).call(_context11, self, '_isSecond');
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-focusin': function () {
        try {
          var _context12;

          return _bindInstanceProperty(_context12 = self._onFocusin).call(_context12, self, '_isSecond');
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-focusout': function () {
        try {
          var _context13;

          return _bindInstanceProperty(_context13 = self._onFocusout).call(_context13, self, '_isSecond');
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-click': function () {
        try {
          return self._stopPropagation;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, null, _className(function () {
      try {
        return {
          "k-handle": true,
          "k-active": _isSecond && _sliderValue[0] === self._min || _isFirst && _sliderValue[1] !== self._max
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)), null, function () {
      try {
        return function (dom) {
          return self.$sliderSecondBtn = dom;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    '_context': $this,
    '_blocks': function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['content'] = function (parent) {
        return function () {
          try {
            return tooltip(value[1]);
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['content'] = function (parent) {
        var _context14;

        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context14 = [function () {
          return _blocks['content'].apply($this, args);
        }]).call(_context14, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, {})
  })), 'k-handle-wrapper') : undefined, function () {
    try {
      return function () {
        if (isShowStop && step) {
          var _ret = function () {
            var ret = [];
            var total = max - min;
            var i = min;

            while (true) {
              var _self$_getStep = self._getStep(i, 'increase'),
                  _step = _self$_getStep[0];

              i = i + _step;

              if (Number(i.toFixed(10)) >= max) {
                break;
              }

              ret.push(h('i', {
                'style': function () {
                  try {
                    return {
                      left: (i - min) / total * 100 + '%'
                    };
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              }, null, 'k-point'));
            }

            return {
              v: ret
            };
          }();

          if (typeof _ret === "object") return _ret.v;
        }
      }();
    } catch (e) {
      _e(e);
    }
  }.call($this)], 'k-wrapper', null, function () {
    try {
      return function (dom) {
        return self.$slider = dom;
      };
    } catch (e) {
      _e(e);
    }
  }.call($this)), 'k-bar-wrapper'), function () {
    try {
      return isShowEnd && !marks;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [h('span', {
    'ev-click': function () {
      try {
        var _context15;

        return _bindInstanceProperty(_context15 = self._setOneValue).call(_context15, self, min);
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return min + unit;
    } catch (e) {
      _e(e);
    }
  }.call($this)), h('span', {
    'ev-click': function () {
      try {
        var _context16;

        return _bindInstanceProperty(_context16 = self._setOneValue).call(_context16, self, max);
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return max + unit;
    } catch (e) {
      _e(e);
    }
  }.call($this))], 'k-box') : undefined, function () {
    try {
      return marks;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return function () {
        // const counts = step ? Math.floor((max - min) / step) : (max - min);
        var ret = [];

        var _loop = function _loop(key) {
          var mark = marks[key];
          var isActive = !isRange ? key == value : _findInstanceProperty(value).call(value, function (v) {
            return v == key;
          }) !== undefined;
          var text = mark;

          if (_Array$isArray(mark)) {
            text = isActive && mark[1] ? mark[1] : mark[0];
          }

          ret.push(h('span', {
            'style': function () {
              try {
                return {
                  left: (key - min) / (max - min) * 100 + '%'
                };
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'ev-click': function () {
              try {
                var _context17;

                return _bindInstanceProperty(_context17 = self._setOneValue).call(_context17, self, key);
              } catch (e) {
                _e(e);
              }
            }.call($this)
          }, function () {
            try {
              return text;
            } catch (e) {
              _e(e);
            }
          }.call($this), _className(function () {
            try {
              return {
                'k-active': isActive
              };
            } catch (e) {
              _e(e);
            }
          }.call($this))));
        };

        for (var key in marks) {
          _loop(key);
        }

        return ret;
      }();
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-marks') : undefined], 'k-slider-wrapper'), function () {
    try {
      return isShowInput && !isRange;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, h(Spinner, {
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'max': function () {
      try {
        return max;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'min': function () {
      try {
        return min;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'step': function () {
      try {
        return step || 0.01;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['spinner'] = i;
    },
    'vertical': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    'value': _getModel(self, '_inputValue'),
    'ev-change': function () {
      try {
        return self._onChange;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, '_inputValue', __n, $this);
    }
  }), 'k-spinner-wrapper') : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}