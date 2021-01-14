import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Input from '../input';
import { getRestProps } from '../utils';
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
      editing = _self$get.editing,
      value = _self$get.value,
      validate = _self$get.validate,
      disabled = _self$get.disabled,
      style = _self$get.style,
      tip = _self$get.tip,
      children = _self$get.children,
      invalid = _self$get.invalid,
      className = _self$get.className;

  var classNameObj = (_classNameObj = {
    'k-editable': true,
    'k-editing': editing,
    'k-disabled': disabled,
    'k-invalid': invalid
  }, _classNameObj[className] = className, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return !disabled && !editing;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Icon, {
    'className': 'k-icon-edit k-edit',
    'title': function () {
      try {
        return tip;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._edit;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined, h('div', null, function () {
    try {
      return !editing ? children : h(Input, {
        'size': 'small',
        'defaultValue': function () {
          try {
            return value;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ref': function ref(i) {
          widgets['input'] = i;
        },
        '_context': $this,
        'ev-blur': function () {
          try {
            return self._onBlur;
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
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), 'c-ellipsis')], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}