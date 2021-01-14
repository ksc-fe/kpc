import "core-js/modules/es.number.to-fixed";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { _$ } from '../utils';
import Slider from '../slider';
import Input from '../input';
import { Row, Col } from '../grid';
import Drag from './drag';
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
      presets = _self$get.presets,
      _mode = _self$get._mode;

  var hex = self._hex,
      rgb = self._rgb,
      hsv = self._hsv,
      hsl = self._hsl;
  var alpha = +(rgb.a * 100).toFixed(5);
  return h('div', null, [h('div', {
    'style': function () {
      try {
        return {
          backgroundColor: "hsl(" + hsl.h + ", 100%, 50%)"
        };
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
  }, [h('div', null, null, 'k-white'), h('div', null, null, 'k-black'), h('div', {
    'style': function () {
      try {
        return {
          left: hsv.s * 100 + "%",
          top: -hsv.v * 100 + 100 + "%"
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, h('div', null, null, 'k-circle'), 'k-pointer')], 'k-saturation', null, function (i) {
    widgets['saturation'] = i;
  }), h('div', null, [h('div', null, [h(Slider, {
    'className': 'k-hue',
    'isShowInput': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'isShowEnd': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return hsl.h;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'step': function () {
      try {
        return 0;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'max': function () {
      try {
        return 360;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['hueSlider'] = i;
    },
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeHue;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(Slider, {
    'className': 'k-alpha',
    'isShowInput': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'isShowEnd': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return rgb.a;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'step': function () {
      try {
        return 0;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'max': function () {
      try {
        return 1;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['alphaSlider'] = i;
    },
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeAlpha;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  })], 'k-sliders'), h('div', null, h('div', {
    'style': function () {
      try {
        return {
          backgroundColor: value
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'k-color'), 'k-color-wrapper k-alpha-bg')], 'k-controls'), h(Row, {
    'gutter': '6',
    'children': [h(Col, {
      'span': '8',
      'children': [h(Input, {
        'fluid': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'size': 'small',
        'value': function () {
          try {
            return hex;
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
        '_context': $this,
        'ev-input': function () {
          try {
            return self._onInputHex;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-change': function () {
          try {
            return self._forceUpdate;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }), h('div', null, 'Hex', 'k-text')],
      '_context': $this
    }), function () {
      try {
        return function () {
          var params;
          var color;
          var method;
          var max;

          if (_mode === 'rgb') {
            params = ['r', 'g', 'b'];
            color = rgb;
            method = self._changeRgb;
            max = 255;
          } else {
            params = ['h', 's', 'v'];
            color = {
              h: hsv.h,
              s: hsv.s * 100,
              v: hsv.v * 100
            };
            method = self._changeHsv;
            max = 100;
          }

          return _mapInstanceProperty(params).call(params, function (value) {
            var v = Math.round(color[value]);
            return h(Col, {
              'span': '4',
              'children': [h(Input, {
                'fluid': function () {
                  try {
                    return true;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'size': 'small',
                'value': function () {
                  try {
                    return v;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-input': function () {
                  try {
                    return _bindInstanceProperty(method).call(method, self, value);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'ev-change': function () {
                  try {
                    return self._forceUpdate;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              }), h(Drag, {
                'className': 'k-text',
                'max': function () {
                  try {
                    return value === 'h' ? 359 : max;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'value': function () {
                  try {
                    return v;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'children': function () {
                  try {
                    return value.toUpperCase();
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-dragStart': function () {
                  try {
                    return self._onDragStart;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'ev-$change:value': function () {
                  try {
                    return function (c, v) {
                      self._setValue(value, _mode !== 'rgb' && value !== 'h' ? v / 100 : v);
                    };
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'ev-dragEnd': function () {
                  try {
                    return self._onDragEnd;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'ev-click': function () {
                  try {
                    return self._changeMode;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              })],
              '_context': $this
            });
          });
        }();
      } catch (e) {
        _e(e);
      }
    }.call($this), h(Col, {
      'span': '4',
      'children': [h(Input, {
        'fluid': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'size': 'small',
        'value': function () {
          try {
            return alpha;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'ev-input': function () {
          try {
            return self._changeAlpha;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-change': function () {
          try {
            return self._forceUpdate;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }), h(Drag, {
        'className': 'k-text',
        'max': function () {
          try {
            return 100;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'value': function () {
          try {
            return alpha;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'children': 'A',
        '_context': $this,
        'ev-dragStart': function () {
          try {
            return self._onDragStart;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-$change:value': function () {
          try {
            return function (c, v) {
              return self._setValue('a', v / 100);
            };
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-dragEnd': function () {
          try {
            return self._onDragEnd;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      })],
      '_context': $this
    })],
    '_context': $this
  }), function () {
    try {
      return presets && presets.length;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, __m(function () {
    try {
      return presets;
    } catch (e) {
      _e(e);
    }
  }.call($this), function (value, key) {
    return h('div', {
      'ev-click': function () {
        try {
          var _context;

          return _bindInstanceProperty(_context = self.set).call(_context, self, 'value', value);
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, h('div', {
      'style': function () {
        try {
          return {
            backgroundColor: value
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, null, 'k-color-item'), 'k-color k-alpha-bg');
  }, $this), 'k-presets') : undefined], 'k-color-panel');
}