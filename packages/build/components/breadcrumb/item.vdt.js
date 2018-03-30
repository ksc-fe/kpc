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

  var _self$get = self.get(),
      to = _self$get.to,
      separator = _self$get.separator,
      children = _self$get.children;

  return h('div', null, [function () {
    try {
      return [to][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('a', { 'ev-click': function () {
      try {
        return [self.onClick][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-item-link') : h('span', null, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-item-link'), function () {
    try {
      return [separator != null][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('span', { 'innerHTML': function () {
      try {
        return [separator][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, null, 'k-separator') : undefined], 'k-item');
};