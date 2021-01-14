import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Icon from '../icon';
import Button from '../button';
import Intact from 'intact-vue';
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

  var normalize = Intact.normalize;

  var _self$get = self.get(),
      type = _self$get.type,
      content = _self$get.content,
      hideIcon = _self$get.hideIcon,
      hideFooter = _self$get.hideFooter,
      showClose = _self$get.showClose,
      _title = _self$get._title;

  if (normalize) {
    content = normalize(content);
  }

  return function () {
    var _obj = {
      'className': _className(function () {
        try {
          var _ref;

          return _ref = {}, _ref["k-" + type] = true, _ref['k-alert-dialog'] = true, _ref['k-with-title'] = _title, _ref;
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'hideClose': function () {
        try {
          return !showClose;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    };
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['body'] = function (parent) {
        return [h('div', null, function () {
          try {
            return !hideIcon;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Icon, {
          'className': _className(function () {
            try {
              return {
                "ion-ios-checkmark": type === 'success',
                "ion-ios-information": type === 'warning',
                "ion-ios-close": type === 'error',
                "ion-ios-help": type === 'confirm'
              };
            } catch (e) {
              _e(e);
            }
          }.call($this)),
          '_context': $this
        }) : undefined, 'k-tip-icon'), h('div', null, [function () {
          try {
            return _title;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h('div', null, function () {
          try {
            return _title;
          } catch (e) {
            _e(e);
          }
        }.call($this), 'k-title') : undefined, function () {
          try {
            return content;
          } catch (e) {
            _e(e);
          }
        }.call($this)], 'k-content-wrapper')];
      }) && (__blocks['body'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['body'] ? blocks['body'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['body'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['body'].apply($this, args);
      }) && (_blocks['footer'] = function (parent) {
        return [function () {
          try {
            return type === 'confirm' && !hideFooter;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Button, {
          'className': 'k-cancel',
          'children': function () {
            try {
              return self.get('cancelText');
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-click': function () {
            try {
              return self.cancel;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }) : undefined, function () {
          try {
            return !hideFooter;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Button, {
          'className': 'k-ok',
          'type': 'primary',
          'loading': function () {
            try {
              return self.get('loading');
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'disabled': function () {
            try {
              return self.get('disabledOk');
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'children': function () {
            try {
              return self.get('okText');
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-click': function () {
            try {
              return self.ok;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }) : undefined];
      }) && (__blocks['footer'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['footer'] ? blocks['footer'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['footer'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['footer'].apply($this, args);
      }), __blocks;
    }.call($this, blocks), parent);
  }.call($this);
}