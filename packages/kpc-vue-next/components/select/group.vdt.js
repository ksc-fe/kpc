import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
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
      children = _self$get.children,
      label = _self$get.label,
      _card = _self$get._card,
      className = _self$get.className,
      key = _self$get.key,
      ref = _self$get.ref,
      rest = _objectWithoutPropertiesLoose(_self$get, ["children", "label", "_card", "className", "key", "ref"]);

  return h('div', _Object$assign({}, function () {
    try {
      return rest;
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return !_card;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['label'] = function (parent) {
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
  }) && __blocks['label'].apply($this, [__noop]), 'k-label') : undefined, function () {
    try {
      return children;
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      var _ref;

      return _ref = {
        "k-group": true
      }, _ref[className] = className, _ref;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}