import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
import Icon from '../icon';
import { getRestProps } from '../utils';
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
      type = _self$get.type,
      content = _self$get.content,
      children = _self$get.children,
      closable = _self$get.closable,
      hideIcon = _self$get.hideIcon;

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-mouseenter': function () {
      try {
        return self.onMouseEnter;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseleave': function () {
      try {
        return self.onMouseLeave;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h('div', null, [h('div', null, [function () {
    try {
      return !hideIcon;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Icon, {
    'className': _className(function () {
      try {
        return {
          "k-icon-information": type === 'info',
          "k-icon-alert": type === 'warning',
          "k-icon-truth-circled": type === 'success',
          "k-icon-fault": type === 'danger',
          "k-message-icon": true
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    '_context': $this
  }) : undefined, function () {
    try {
      return typeof content === 'string' || typeof content === 'number';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'innerHTML': function () {
      try {
        return content;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'k-content') : h('div', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-content')], _className(function () {
    try {
      return {
        "k-wrapper": true,
        "k-with-icon": !hideIcon
      };
    } catch (e) {
      _e(e);
    }
  }.call($this))), function () {
    try {
      return closable;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Button, {
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': 'k-close',
    'children': h(Icon, {
      'className': 'ion-ios-close-empty',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self.close;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], 'k-container'), _className(function () {
    try {
      var _ref;

      return _ref = {
        "k-message": true
      }, _ref["k-" + type] = type !== 'info', _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}