import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Tooltip from '../tooltip';
import Panel from './panel';
import { getRestProps } from '../utils';
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
      className = _self$get.className,
      transition = _self$get.transition,
      presets = _self$get.presets,
      value = _self$get.value,
      size = _self$get.size,
      style = _self$get.style,
      disabled = _self$get.disabled;

  var classNameObj = (_classNameObj = {
    'k-colorpicker': true
  }, _classNameObj[className] = className, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-disabled'] = disabled, _classNameObj);
  return h('div', _Object$assign({
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), h(Tooltip, {
    'className': 'k-colorpicker-content',
    'position': function () {
      try {
        return {
          my: 'left top+8',
          at: 'left bottom',
          collision: 'flip'
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'trigger': 'click',
    'showArrow': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'theme': 'light',
    'transition': function () {
      try {
        return transition;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('div', null, h('div', {
      'style': function () {
        try {
          return {
            backgroundColor: value
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, null, 'k-inner'), 'k-color'),
    '_context': $this,
    '_blocks': function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['content'] = function (parent) {
        return h(Panel, {
          'presets': function () {
            try {
              return presets;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'value': _getModel(self, 'value'),
          'ev-$change:value': function ev$changeValue(__c, __n) {
            _setModel(self, 'value', __n, $this);
          }
        });
      }) && (__blocks['content'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['content'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, {}),
    'ev-show': function () {
      try {
        return self._onShow;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}