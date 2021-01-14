import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { getRestProps, mapChildren } from '../utils';
import CarouselItem from './item';
import Button from '../button';
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
      arrow = _self$get.arrow,
      effect = _self$get.effect,
      _translate = _self$get._translate,
      _stopTransition = _self$get._stopTransition,
      clonedAmount = _self$get.clonedAmount;

  var classNameObj = (_classNameObj = {
    'k-carousel': true
  }, _classNameObj[className] = className, _classNameObj["k-" + arrow] = true, _classNameObj['k-stop'] = _stopTransition, _classNameObj["k-" + effect] = true, _classNameObj);
  self._values = [];
  var index = 0;
  var _children = [];
  mapChildren(children, function (vNode) {
    if (vNode.tag === CarouselItem) {
      var props = vNode.props;
      var _props = {
        _parent: self
      };

      if (props.value == null) {
        _props.value = "$" + index++;
      }

      vNode.props = _Object$assign({}, props, {}, _props);
      var value = vNode.props.value;

      if (props.key == null) {
        vNode.props.key = value;
      }

      self._values.push(value);

      vNode.$ = true;

      _children.push(vNode);
    }
  });

  var isSlide = self._isSlide();

  var l = _children.length;

  if (isSlide && l) {
    // clone first and last vNode for loop
    var clone = function clone(vNode, props, index) {
      return _Vdt.miss.clone(vNode, _Object$assign({
        _isCloned: true,
        key: "$cloned:" + vNode.props.key + ":" + index
      }, props), true);
    };

    var firstVNodes = [];
    var lastVNodes = [];

    for (var i = 0; i < clonedAmount; i++) {
      firstVNodes.push(clone(_children[i % l], {
        _isFirst: i === 0
      }, i));
      lastVNodes.unshift(clone(_children[((l - i - 1) % l + l) % l], {
        _isLast: i === 0
      }, i));
    }

    _children.push.apply(_children, firstVNodes);

    _children.unshift.apply(_children, lastVNodes);
  }

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', {
    'style': function () {
      try {
        return {
          transform: isSlide ? "translate3d(" + _translate + "px, 0, 0)" : undefined
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return _children;
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-wrapper'), h(Button, {
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'circle': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': 'large',
    'className': 'k-prev',
    'children': h(Icon, {
      'className': 'ion-ios-arrow-left',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._prev;
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
    'circle': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'none',
    'size': 'large',
    'className': 'k-next',
    'children': h(Icon, {
      'className': 'ion-ios-arrow-right',
      '_context': $this
    }),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._next;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h('div', null, __m(function () {
    try {
      return self._values;
    } catch (e) {
      _e(e);
    }
  }.call($this), function (value, key) {
    return h('div', {
      'ev-click': function () {
        try {
          var _context;

          return _bindInstanceProperty(_context = self._setIndex).call(_context, self, key, false);
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, null, _className(function () {
      try {
        return {
          'k-dot': true,
          'k-active': self._isActive(value)
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)));
  }, $this), 'k-indicator c-clearfix')], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}