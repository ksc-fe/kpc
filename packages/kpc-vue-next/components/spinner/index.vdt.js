import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { Button } from '../button';
import { Input } from '../input';
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
      disabled = _self$get.disabled,
      max = _self$get.max,
      min = _self$get.min,
      style = _self$get.style,
      size = _self$get.size,
      vertical = _self$get.vertical,
      _value = _self$get._value,
      width = _self$get.width;

  var classNameObj = (_classNameObj = {
    'k-spinner': true,
    'k-disabled': disabled
  }, _classNameObj["k-" + size] = size !== 'default', _classNameObj[className] = className, _classNameObj['k-vertical'] = vertical, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return self._disableDecrease();
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': 'k-left',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': function () {
      try {
        return !vertical;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('i', null, null, 'k-icon ion-ios-minus-empty') : h('i', null, null, 'ion-ios-arrow-down'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._decrease;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(Input, {
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return _value;
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
    'width': function () {
      try {
        return width;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    'ev-change': function () {
      try {
        return self._changeValue;
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
    'ev-focus': function () {
      try {
        return self._onFocus;
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
    'disabled': function () {
      try {
        return self._disableIncrease();
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': 'k-right',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': function () {
      try {
        return !vertical;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('i', null, null, 'k-icon ion-ios-plus-empty') : h('i', null, null, 'ion-ios-arrow-up'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._increase;
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