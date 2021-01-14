import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Input from './';
import Icon from '../icon';
import Button from '../button';
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
      className = _self$get.className,
      _open = _self$get._open,
      placeholder = _self$get.placeholder,
      value = _self$get.value,
      type = _self$get.type,
      size = _self$get.size;

  var classNameObj = (_classNameObj = {
    'k-search': true
  }, _classNameObj[className] = className, _classNameObj['k-open'] = _open, _classNameObj['k-hide'] = !_open, _classNameObj["k-" + type] = type !== 'default', _classNameObj);
  return h('form', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-submit': function () {
      try {
        return self._onSubmit;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [h(Input, {
    'clearable': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['input'] = i;
    },
    'placeholder': function () {
      try {
        return _open ? placeholder : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return _open ? value : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'readonly': function () {
      try {
        return !_open;
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
    'className': 'k-with-suffix',
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeValue;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(Icon, {
      'className': 'k-icon-search k-search-icon',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._onClickBtn;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  })], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}