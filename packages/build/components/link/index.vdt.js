'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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
      name = _self$get.name,
      isReplace = _self$get.isReplace,
      rest = (0, _objectWithoutProperties3.default)(_self$get, ['name', 'isReplace']);

  return h('a', (0, _extends3.default)({}, function () {
    try {
      return [rest][0];
    } catch (e) {
      _e(e);
    }
  }.call(this), { 'ev-click': function () {
      try {
        return [self.to][0];
      } catch (e) {
        _e(e);
      }
    }.call(this) }), function () {
    try {
      return [self.get('children')][0];
    } catch (e) {
      _e(e);
    }
  }.call(this));
};