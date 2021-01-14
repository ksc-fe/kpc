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

  var _self$get = self.get(),
      children = _self$get.children;

  return function () {
    var _obj = {
      'className': 'k-component-tip'
    };
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['body'] = function (parent) {
        return [function () {
          try {
            return blocks.title;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h('div', null, (_blocks['title'] = function (parent) {
          return null;
        }) && (__blocks['title'] = function (parent) {
          var _context;

          var args = arguments;
          return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context = [function () {
            return _blocks['title'].apply($this, args);
          }]).call(_context, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
        }) && __blocks['title'].apply($this, [__noop]), 'k-title') : undefined, function () {
          try {
            return children;
          } catch (e) {
            _e(e);
          }
        }.call($this)];
      }) && (__blocks['body'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['body'] ? blocks['body'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['body'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['body'].apply($this, args);
      }), __blocks;
    }.call($this, blocks), parent);
  }.call($this);
}