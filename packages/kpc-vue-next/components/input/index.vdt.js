import "core-js/modules/es.function.name";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/reduce";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Icon from '../icon';
import { addStyle, isTextBlock, getRestProps } from '../utils';
export default function (obj, _Vdt, blocks, $callee) {
  var _classNameObj, _context, _context3;

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
      type = _self$get.type,
      name = _self$get.name,
      value = _self$get.value,
      placeholder = _self$get.placeholder,
      tabindex = _self$get.tabindex,
      readonly = _self$get.readonly,
      clearable = _self$get.clearable,
      disabled = _self$get.disabled,
      size = _self$get.size,
      nativeProps = _self$get.nativeProps,
      rows = _self$get.rows,
      spellcheck = _self$get.spellcheck,
      defaultValue = _self$get.defaultValue,
      style = _self$get.style,
      _width = _self$get._width,
      className = _self$get.className,
      autoWidth = _self$get.autoWidth,
      fluid = _self$get.fluid,
      width = _self$get.width,
      autocomplete = _self$get.autocomplete,
      stackClearIcon = _self$get.stackClearIcon,
      frozenOnInput = _self$get.frozenOnInput,
      _inputing = _self$get._inputing,
      _originalValue = _self$get._originalValue;

  var inputValue = frozenOnInput && _inputing ? _originalValue : value;
  var classNameObj = (_classNameObj = {
    'k-input': true
  }, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-group'] = blocks.prepend || blocks.append, _classNameObj['k-disabled'] = disabled, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = blocks.suffix, _classNameObj['k-clearable'] = clearable, _classNameObj['k-auto-width'] = autoWidth, _classNameObj['k-fluid'] = fluid, _classNameObj['k-stack-clear'] = stackClearIcon, _classNameObj[className] = className, _classNameObj);

  var events = _reduceInstanceProperty(_context = ['keydown', 'keyup', 'change', 'keypress'
  /* 'focus', 'blur', */

  /* 'input' */
  ]).call(_context, function (memo, name) {
    var _context2;

    memo["ev-" + name] = _bindInstanceProperty(_context2 = self._proxyEvent).call(_context2, self, name);
    return memo;
  }, {});

  var wrapperEvents = _reduceInstanceProperty(_context3 = ['click', 'mouseenter', 'mouseleave']).call(_context3, function (memo, name) {
    var _context4;

    memo["ev-" + name] = _bindInstanceProperty(_context4 = self._proxyEvent).call(_context4, self, name);
    return memo;
  }, {});

  return h('div', _Object$assign({
    'style': function () {
      try {
        return width != null ? addStyle(style, {
          width: width + "px"
        }) : style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return wrapperEvents;
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      var children;
      return blocks.prepend ? (children = blocks.prepend.call(this, function () {}), h('div', null, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), _className(function () {
        try {
          return {
            "k-prepend": true,
            "k-padding": isTextBlock(children)
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)))) : void 0;
    } catch (e) {
      _e(e);
    }
  }.call($this), h('div', null, [function () {
    try {
      return blocks.prefix;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['prefix'] = function (parent) {
    return null;
  }) && (__blocks['prefix'] = function (parent) {
    var _context5;

    var args = arguments;
    return blocks['prefix'] ? blocks['prefix'].apply($this, _concatInstanceProperty(_context5 = [function () {
      return _blocks['prefix'].apply($this, args);
    }]).call(_context5, __slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
  }) && __blocks['prefix'].apply($this, [__noop]), 'k-prefix') : undefined, function () {
    try {
      return type !== 'textarea';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('input', _Object$assign({}, function () {
    try {
      return nativeProps || {};
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
    'name': function () {
      try {
        return name;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return inputValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'defaultValue': function () {
      try {
        return defaultValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'readOnly': function () {
      try {
        return readonly;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'placeholder': function () {
      try {
        return placeholder;
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
    'tabindex': function () {
      try {
        return tabindex;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'autocomplete': function () {
      try {
        return autocomplete;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return events;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return autoWidth ? {
          width: _width + 'px'
        } : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-focus': function () {
      try {
        return self._startInput;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-blur': function () {
      try {
        return self._endInput;
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
    }.call($this)
  }), null, 'k-inner', null, function (i) {
    widgets['input'] = i;
  }) : h('textarea', _Object$assign({}, function () {
    try {
      return nativeProps || {};
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'value': function () {
      try {
        return inputValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'defaultValue': function () {
      try {
        return defaultValue;
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
    'readOnly': function () {
      try {
        return readonly;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'placeholder': function () {
      try {
        return placeholder;
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
    'rows': function () {
      try {
        return rows;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'spellcheck': function () {
      try {
        return spellcheck;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return tabindex;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return events;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-focus': function () {
      try {
        return self._startInput;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-blur': function () {
      try {
        return self._endInput;
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
    }.call($this)
  }), null, 'k-inner k-textarea', null, function (i) {
    widgets['input'] = i;
  }), function () {
    try {
      return blocks.suffix || clearable && !disabled;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [function () {
    try {
      return clearable && !disabled;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Icon, {
    'className': _className(function () {
      try {
        return {
          "k-clear ion-ios-close": true,
          "k-show": value
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    '_context': $this,
    'ev-click': function () {
      try {
        return self.clear;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined, function () {
    try {
      return ' ';
    } catch (e) {
      _e(e);
    }
  }.call($this), (_blocks['suffix'] = function (parent) {
    return null;
  }) && (__blocks['suffix'] = function (parent) {
    var _context6;

    var args = arguments;
    return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context6 = [function () {
      return _blocks['suffix'].apply($this, args);
    }]).call(_context6, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
  }) && __blocks['suffix'].apply($this, [__noop])], 'k-suffix') : undefined, function () {
    try {
      return autoWidth;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return value == null || value === '' ? placeholder : value;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-fake', null, function (i) {
    widgets['fake'] = i;
  }) : undefined], 'k-wrapper'), function () {
    try {
      var children;
      return blocks.append ? (children = blocks.append.call(this, function () {}), h('div', null, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), _className(function () {
        try {
          return {
            "k-append": true,
            "k-padding": isTextBlock(children)
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)))) : void 0;
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}