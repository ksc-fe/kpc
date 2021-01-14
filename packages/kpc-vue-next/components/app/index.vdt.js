import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Spin from '../spin';
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

  return h('div', null, [function () {
    try {
      return self.get('view');
    } catch (e) {
      _e(e);
    }
  }.call($this), (_blocks['loading'] = function (parent) {
    return function () {
      try {
        return self.get('loading');
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(Spin, {
      'key': 'loading',
      'center': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'size': 'large',
      '_context': $this
    }) : undefined;
  }) && (__blocks['loading'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['loading'] ? blocks['loading'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['loading'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['loading'].apply($this, args);
  }) && __blocks['loading'].apply($this, [__noop])], 'k-app');
}