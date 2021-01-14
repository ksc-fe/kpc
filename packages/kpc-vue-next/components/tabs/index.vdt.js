import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Tab from './tab';
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
      data = _self$get.data,
      value = _self$get.value,
      children = _self$get.children,
      vertical = _self$get.vertical,
      size = _self$get.size,
      type = _self$get.type,
      _activeBarStyle = _self$get._activeBarStyle,
      _scroll = _self$get._scroll,
      _left = _self$get._left,
      _prev = _self$get._prev,
      _next = _self$get._next;

  var classNameObj = (_classNameObj = {
    'k-tabs': true
  }, _classNameObj[className] = className, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-vertical'] = vertical, _classNameObj['k-tabs-card'] = type === 'no-border-card', _classNameObj["k-tabs-" + type] = type !== 'default', _classNameObj["k-is-scroll"] = _scroll, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return _scroll;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Button, {
    'className': 'k-prev',
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'prev',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return !_prev;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('i', null, null, 'ion-ios-arrow-left'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._prev;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined, h('div', null, h('div', {
    'style': function () {
      try {
        return {
          transform: "translateX(" + _left + "px)"
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [__m(function () {
    try {
      return data;
    } catch (e) {
      _e(e);
    }
  }.call($this), function (item, key) {
    return h('a', {
      'ev-click': function () {
        try {
          var _context;

          return _bindInstanceProperty(_context = self._changeTab).call(_context, self, item);
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, function () {
      try {
        return item.text;
      } catch (e) {
        _e(e);
      }
    }.call($this), _className(function () {
      try {
        return {
          'k-tab': true,
          'k-active': item.value === value
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)));
  }, $this), function () {
    try {
      return _mapInstanceProperty(__u).call(__u, children ? _Array$isArray(children) ? children : [children] : children, function (vNode) {
        if (vNode.tag === Tab) {
          vNode.props = _Object$assign({}, vNode.props, {
            _value: value,
            _parent: self
          });
          vNode.$ = true;
        }

        return vNode;
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), h('div', {
    'style': function () {
      try {
        return _activeBarStyle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'k-active-bar')], 'k-wrapper', null, function (i) {
    widgets['wrapper'] = i;
  }), 'k-scroll c-clearfix', null, function (i) {
    widgets['scroll'] = i;
  }), function () {
    try {
      return _scroll;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Button, {
    'className': 'k-next',
    'type': 'none',
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'next',
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return !_next;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('i', null, null, 'ion-ios-arrow-right'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._next;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}