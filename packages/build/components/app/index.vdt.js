'use strict';

module.exports = function (obj, _Vdt, blocks, $callee) {

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
  return h('div', null, ['\n    ', function () {
    try {
      return [self.get('view')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), '\n    ', (_blocks["loading"] = function (parent) {
    return function () {
      try {
        return [self.get('loading')][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) ? h(Animate, { 'key': 'loading', 'a:transition': 'fade', 'className': 'k-app-loading', 'children': null, '_context': $this }) : undefined;
  }) && (__blocks["loading"] = function (parent) {
    var self = this;
    return blocks["loading"] ? blocks["loading"].call(this, function () {
      return _blocks["loading"].call(self, parent);
    }) : _blocks["loading"].call(this, parent);
  }) && __blocks["loading"].call(this)], 'k-app');
};