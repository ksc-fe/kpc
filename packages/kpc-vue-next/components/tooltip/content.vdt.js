import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import MoveWrapper from '../moveWrapper';
import Button from '../button';
export default function (obj, _Vdt, blocks, $callee) {
  var _classNameObj;

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
      value = _self$get.value,
      trigger = _self$get.trigger,
      showArrow = _self$get.showArrow,
      confirm = _self$get.confirm,
      canHover = _self$get.canHover,
      className = _self$get.className,
      _feedback = _self$get._feedback,
      transition = _self$get.transition,
      container = _self$get.container,
      theme = _self$get.theme,
      disabled = _self$get.disabled,
      always = _self$get.always,
      size = _self$get.size;

  var events = {};

  if ((canHover || confirm) && trigger === 'hover' && !always) {
    var _context;

    events['ev-mouseenter'] = self.show;
    events['ev-mouseleave'] = _bindInstanceProperty(_context = self.hide).call(_context, self, false);
  }

  var classNameObj = (_classNameObj = {
    "k-dropdown-menu": true,
    "k-tooltip-content": true,
    'k-cannot-hover': trigger === 'hover' && !canHover && !confirm
  }, _classNameObj[className] = className, _classNameObj["k-" + theme] = true, _classNameObj["k-" + size] = size !== 'default', _classNameObj);
  return h(MoveWrapper, {
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(Animate, _Object$assign({
      'a:show': function () {
        try {
          return value && !disabled && !self.isEmptyChildren;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': _className(function () {
        try {
          return classNameObj;
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'a:transition': function () {
        try {
          return transition;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ref': function ref(i) {
        widgets['menu'] = i;
      }
    }, function () {
      try {
        return events;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'a:delayDestroy': function () {
        try {
          return false;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'a:enterStart': function () {
        try {
          return self._onShow;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': [function () {
        try {
          return showArrow;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('i', null, null, _className(function () {
        try {
          var _ref;

          return _ref = {
            "k-arrow": true
          }, _ref["k-" + _feedback[_feedback.important]] = _feedback.important, _ref;
        } catch (e) {
          _e(e);
        }
      }.call($this)), null, function (i) {
        widgets['arrow'] = i;
      }) : undefined, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), function () {
        try {
          return confirm;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('div', null, (_blocks['buttons'] = function (parent) {
        return [h(Button, {
          'size': 'small',
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
              return self._cancel;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }), h(Button, {
          'type': 'primary',
          'size': 'small',
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
              return self._ok;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        })];
      }) && (__blocks['buttons'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['buttons'] ? blocks['buttons'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['buttons'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['buttons'].apply($this, args);
      }) && __blocks['buttons'].apply($this, [__noop]), 'k-buttons') : undefined],
      '_context': $this,
      'ev-a:leaveStart': function () {
        try {
          return self._removeDocumentEvents;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-mousedown': function () {
        try {
          return self._onMouseDown;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })),
    '_context': $this
  });
}