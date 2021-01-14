import "core-js/modules/es.function.name";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { addStyle, getRestProps } from '../utils';
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
      className = _self$get.className,
      style = _self$get.style,
      name = _self$get.name,
      on = _self$get.on,
      off = _self$get.off,
      value = _self$get.value,
      trueValue = _self$get.trueValue,
      falseValue = _self$get.falseValue,
      width = _self$get.width,
      height = _self$get.height,
      size = _self$get.size,
      disabled = _self$get.disabled,
      _dragging = _self$get._dragging;

  var classNameObj = (_classNameObj = {
    'k-switch': true
  }, _classNameObj[className] = className, _classNameObj['k-checked'] = value === trueValue, _classNameObj["k-" + size] = true, _classNameObj['k-disabled'] = disabled, _classNameObj['k-dragging'] = _dragging, _classNameObj);
  var onStyle;
  var offStyle;
  var barStyle;

  if (width || height) {
    var _style = {};
    onStyle = {};
    offStyle = {};

    if (width) {
      _style.width = width + "px";
      onStyle.width = _style.width;
      offStyle.width = _style.width;
    }

    if (height) {
      _style.height = height + "px";

      _Object$assign(onStyle, {
        height: _style.height,
        lineHeight: _style.height,
        padding: "0 " + _style.height + " 0 " + height / 3 + "px"
      });

      _Object$assign(offStyle, {
        height: _style.height,
        lineHeight: _style.height,
        padding: "0 " + height / 3 + "px 0 " + _style.height
      });

      barStyle = {
        width: value === trueValue ? '100%' : height + "px"
      };
    }

    style = addStyle(style, _style);
  }

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
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
        return disabled ? "-1" : "0";
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-click': function () {
      try {
        return self._onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keypress': function () {
      try {
        return self._onKeypress;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h('input', {
    'type': 'checkbox',
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
    'tabindex': '-1',
    'checked': _getModel(self, 'value') === function () {
      try {
        return trueValue;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-change': function evChange(__e) {
      _setModel(self, 'value', __e.target.checked ? function () {
        try {
          return trueValue;
        } catch (e) {
          _e(e);
        }
      }.call($this) : function () {
        try {
          return falseValue;
        } catch (e) {
          _e(e);
        }
      }.call($this), $this);
    }
  }, null, null, null, function (i) {
    widgets['input'] = i;
  }), function () {
    try {
      return off || blocks.off;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'style': function () {
      try {
        return offStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, (_blocks['off'] = function (parent) {
    return function () {
      try {
        return off;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['off'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['off'] ? blocks['off'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['off'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['off'].apply($this, args);
  }) && __blocks['off'].apply($this, [__noop]), 'k-off') : undefined, h('div', {
    'style': function () {
      try {
        return barStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [function () {
    try {
      return on || blocks.on;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'style': function () {
      try {
        return onStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, (_blocks['on'] = function (parent) {
    return function () {
      try {
        return on;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['on'] = function (parent) {
    var _context2;

    var args = arguments;
    return blocks['on'] ? blocks['on'].apply($this, _concatInstanceProperty(_context2 = [function () {
      return _blocks['on'].apply($this, args);
    }]).call(_context2, __slice.call(args, 1))) : _blocks['on'].apply($this, args);
  }) && __blocks['on'].apply($this, [__noop]), 'k-on') : undefined, h('div', null, h('div', {
    'ev-click': function () {
      try {
        return self._handleClick;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mousedown': function () {
      try {
        return self._dragStart;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, h('img', {
    'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }), 'k-handle', null, function (i) {
    widgets['handle'] = i;
  }), 'k-wrapper')], 'k-bar', null, function (i) {
    widgets['bar'] = i;
  })], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}