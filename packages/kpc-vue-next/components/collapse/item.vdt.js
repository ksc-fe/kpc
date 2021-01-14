import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { expandAnimationCallbacks } from '../utils';
/* import VShow from '../menu/vShow'; */

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
      value = _self$get.value,
      children = _self$get.children,
      title = _self$get.title,
      _parent = _self$get._parent,
      disabled = _self$get.disabled,
      key = _self$get.key,
      ref = _self$get.ref,
      rest = _objectWithoutPropertiesLoose(_self$get, ["className", "value", "children", "title", "_parent", "disabled", "key", "ref"]);

  var active = _parent._isActive(value);

  var classNameObj = (_classNameObj = {
    'k-collapse-item': true
  }, _classNameObj[className] = className, _classNameObj['k-active'] = active, _classNameObj['k-disabled'] = disabled, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return rest;
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('div', {
    'ev-click': function () {
      try {
        return self._toggle;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [(_blocks['title'] = function (parent) {
    return function () {
      try {
        return title;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['title'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['title'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
  }) && __blocks['title'].apply($this, [__noop]), h('i', null, null, 'k-arrow ion-ios-arrow-right')], 'k-title'), h(Animate, _Object$assign({
    'className': 'k-content',
    'a:show': function () {
      try {
        return active;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return expandAnimationCallbacks;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'children': h('div', null, function () {
      try {
        return children;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-wrapper'),
    '_context': $this,
    'ev-a:enterStart': function () {
      try {
        return [self._onShow, expandAnimationCallbacks['ev-a:enterStart']];
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-a:leaveStart': function () {
      try {
        return [self._onHide, expandAnimationCallbacks['ev-a:leaveStart']];
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }))], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}