'use strict';

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      type = _self$get.type,
      content = _self$get.content,
      children = _self$get.children,
      closable = _self$get.closable;

  return h('div', { 'ev-mouseenter': function () {
      try {
        return [self.onMouseEnter][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'ev-mouseleave': function () {
      try {
        return [self.onMouseLeave][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, h('div', null, [h('i', null, null, 'k-icon ion-ios-information'), function () {
    try {
      return [typeof content === 'string' || typeof content === 'number'][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h('div', { 'innerHTML': function () {
      try {
        return [content][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }, null, 'k-content') : h('div', null, function () {
    try {
      return [children][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), 'k-content'), function () {
    try {
      return [closable][0];
    } catch (e) {
      _e(e);
    }
  }.call(this) ? h(_button2.default, { 'type': 'none', 'icon': function () {
      try {
        return [true][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'className': 'k-close', 'ev-click': function () {
      try {
        return [self.close][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-close-empty'), '_context': $this }) : undefined], 'k-container'), _className(function () {
    try {
      var _ref;

      return [(_ref = { "k-message": true }, _ref['k-' + type] = type !== 'info', _ref)][0];
    } catch (e) {
      _e(e);
    }
  }.call(this)));
};