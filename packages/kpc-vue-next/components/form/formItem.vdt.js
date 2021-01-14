import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { getRestProps } from '../utils';
import Tooltip from '../tooltip';
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
      className = _self$get.className,
      children = _self$get.children,
      label = _self$get.label,
      isValid = _self$get.isValid,
      isDirty = _self$get.isDirty,
      hideLabel = _self$get.hideLabel,
      htmlFor = _self$get.htmlFor,
      errorClassName = _self$get.errorClassName,
      rules = _self$get.rules,
      fluid = _self$get.fluid,
      _ellipsis = _self$get._ellipsis;

  var classNameObj = (_classNameObj = {
    'k-form-item': true,
    'k-invalid': isDirty && isValid === false,
    'k-valid': isDirty && isValid === true
  }, _classNameObj[className] = className, _classNameObj['k-fluid'] = fluid, _classNameObj);
  var labelWidth = self.form && self.form.get('labelWidth');
  var labelStyle;

  if (labelWidth != null) {
    if (/^\d+$/.test(labelWidth)) {
      labelStyle = {
        width: labelWidth + 'px'
      };
    } else {
      labelStyle = {
        width: labelWidth
      };
    }
  }

  var starOnRequired = self.form && self.form.get('starOnRequired');
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-change': function () {
      try {
        return self._onChange;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-focusout': function () {
      try {
        return self._onFocusout;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [function () {
    try {
      return !hideLabel;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('label', {
    'htmlFor': function () {
      try {
        return htmlFor;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'style': function () {
      try {
        return labelStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [function () {
    try {
      return starOnRequired && rules && rules.required;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, '*', 'k-star') : undefined, (_blocks['label'] = function (parent) {
    return function () {
      try {
        return label;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['label'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['label'] ? blocks['label'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['label'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['label'].apply($this, args);
  }) && __blocks['label'].apply($this, [__noop])], 'k-label') : undefined, h('div', null, [(_blocks['content'] = function (parent) {
    return function () {
      try {
        return children;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['content'] = function (parent) {
    var _context2;

    var args = arguments;
    return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context2 = [function () {
      return _blocks['content'].apply($this, args);
    }]).call(_context2, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
  }) && __blocks['content'].apply($this, [__noop]), function () {
    try {
      return self.get('isValid') === false;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Animate, {
    'key': 'form-item-animate',
    'className': _className(function () {
      try {
        var _ref;

        return _ref = {
          "k-error": true
        }, _ref[errorClassName] = errorClassName, _ref['k-ellipsis'] = _ellipsis, _ref;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'a:transition': 'c-fade',
    'children': [h('div', null, function () {
      try {
        return self.get('message');
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-error-message c-ellipsis', null, function (i) {
      widgets['error'] = i;
    }), h(Tooltip, {
      'canHover': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'position': 'bottom',
      'children': h(Icon, {
        'className': 'ion-ios-information-outline k-error-more',
        'size': 'small',
        '_context': $this
      }),
      '_context': $this,
      '_blocks': function (blocks) {
        var _blocks = {},
            __blocks = extend({}, blocks);

        return (_blocks['content'] = function (parent) {
          return function () {
            try {
              return self.get('message');
            } catch (e) {
              _e(e);
            }
          }.call($this);
        }) && (__blocks['content'] = function (parent) {
          var _context3;

          var args = arguments;
          return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context3 = [function () {
            return _blocks['content'].apply($this, args);
          }]).call(_context3, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
        }), __blocks;
      }.call($this, {})
    })],
    '_context': $this
  }) : undefined], 'k-content'), function () {
    try {
      return blocks.append;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['append'] = function (parent) {
    return null;
  }) && (__blocks['append'] = function (parent) {
    var _context4;

    var args = arguments;
    return blocks['append'] ? blocks['append'].apply($this, _concatInstanceProperty(_context4 = [function () {
      return _blocks['append'].apply($this, args);
    }]).call(_context4, __slice.call(args, 1))) : _blocks['append'].apply($this, args);
  }) && __blocks['append'].apply($this, [__noop]), 'k-append') : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}