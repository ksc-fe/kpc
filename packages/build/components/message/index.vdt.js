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
  var MessageAnimate = self.MessageAnimate;

  // we must add key for k-messages, 
  // beacase it may reuse other MoveWrapper Animate dom
  // the key will prevent this case.
  return h(Animate, { 'className': 'k-messages', 'key': 'k-messages', 'children': _Vdt.utils.map(function () {
      try {
        return [self.get('messages')][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), function (value, key) {
      return h(MessageAnimate, { 'a:tag': function () {
          try {
            return [value][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'key': function () {
          try {
            return [value.get('key')][0];
          } catch (e) {
            _e(e);
          }
        }.call(this), 'children': null, '_context': $this });
    }, this), '_context': $this });
};