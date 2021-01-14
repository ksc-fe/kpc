import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
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

  return function () {
    var _obj = {
      'className': _className(function () {
        try {
          var _ref;

          return _ref = {
            'k-drawer': true
          }, _ref["k-" + self.get('placement')] = true, _ref;
        } catch (e) {
          _e(e);
        }
      }.call($this))
    };
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['content'] = function (parent) {
        return h('div', null, function () {
          try {
            return parent();
          } catch (e) {
            _e(e);
          }
        }.call($this), 'k-drawer-content');
      }) && (__blocks['content'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['content'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, blocks), parent);
  }.call($this);
}