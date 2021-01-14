import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Icon from '../icon';
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
      type = _self$get.type,
      className = _self$get.className,
      percent = _self$get.percent,
      status = _self$get._status,
      size = _self$get.size,
      isOuterText = _self$get.isOuterText,
      isInnerText = _self$get.isInnerText,
      strokeWidth = _self$get.strokeWidth,
      children = _self$get.children;

  var classNameObj = (_classNameObj = {
    'k-progress': true
  }, _classNameObj["k-" + type] = type, _classNameObj[className] = className, _classNameObj["k-" + status] = status !== 'normal', _classNameObj["k-" + size] = size !== 'default', _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return type === 'bar';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, h('div', null, h('div', {
    'style': function () {
      try {
        return {
          width: percent + '%'
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return isInnerText;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [function () {
    try {
      return percent;
    } catch (e) {
      _e(e);
    }
  }.call($this), ' %\n                '], 'k-inner-text') : undefined, 'k-bg'), 'k-content'), 'k-container') : undefined, function () {
    try {
      return type === 'circle';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('svg', {
    'viewBox': '0 0 120 120'
  }, function () {
    try {
      var r, circumference;
      return r = (120 - strokeWidth) / 2, circumference = 2 * Math.PI * r, [h('circle', {
        'cx': '60',
        'cy': '60',
        'r': function () {
          try {
            return r;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-width': function () {
          try {
            return strokeWidth;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, null, 'k-meter'), h('circle', {
        'cx': '60',
        'cy': '60',
        'r': function () {
          try {
            return r;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-dashoffset': function () {
          try {
            return circumference * (1 - percent / 100);
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-dasharray': function () {
          try {
            return circumference;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-width': function () {
          try {
            return strokeWidth;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, null, 'k-value'), function () {
        try {
          return status === 'active';
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('circle', {
        'cx': '60',
        'cy': '60',
        'r': function () {
          try {
            return r;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-width': function () {
          try {
            return strokeWidth;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-dasharray': function () {
          try {
            return circumference;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'stroke-dashoffset': function () {
          try {
            return circumference;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, [h('animate', {
        'attributeName': 'stroke-dashoffset',
        'begin': '0s',
        'dur': '2s',
        'repeatCount': 'indefinite',
        'from': function () {
          try {
            return circumference;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'to': function () {
          try {
            return circumference * (1 - percent / 100);
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }), h('animate', {
        'attributeName': 'opacity',
        'begin': '0s',
        'dur': '2s',
        'repeatCount': 'indefinite',
        'from': '0.2',
        'to': '0'
      })], 'k-animate') : undefined];
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-canvas') : undefined, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-text') : function () {
    try {
      return isOuterText;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return status !== 'success' && status !== 'error';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, [function () {
    try {
      return percent;
    } catch (e) {
      _e(e);
    }
  }.call($this), '%']) : function () {
    try {
      return status === 'success';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, h(Icon, {
    'className': 'k-icon-truth',
    '_context': $this
  })) : function () {
    try {
      return status === 'error';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('span', null, h(Icon, {
    'className': 'k-icon-fault',
    '_context': $this
  })) : undefined, 'k-text') : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}