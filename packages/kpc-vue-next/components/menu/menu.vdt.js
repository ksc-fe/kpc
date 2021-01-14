import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Item from './item';
import { mapChildren, isStringOrNumberNotEmpty, getRestProps } from '../utils';
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
      className = _self$get.className,
      collapse = _self$get.collapse,
      dot = _self$get.dot,
      theme = _self$get.theme,
      type = _self$get.type,
      size = _self$get.size,
      _isSubMenu = _self$get._isSubMenu,
      _root = _self$get._root,
      _parent = _self$get._parent;

  var classNameObj = (_classNameObj = {
    'k-menu': true
  }, _classNameObj[className] = className, _classNameObj["k-" + theme] = !_root && theme, _classNameObj["k-" + size] = !_root && size && size !== 'default', _classNameObj['k-collapsed'] = collapse, _classNameObj["k-" + type] = type, _classNameObj);

  var _children = mapChildren(children, function (vNode) {
    if (vNode.tag === Item) {
      vNode = _Vdt.miss.clone(vNode, null, true);
      vNode.props = _Object$assign({
        dot: dot
      }, vNode.props, {
        _root: _root || self,
        _isFirstFloorChildren: !_root,
        _parentItem: _parent,
        _parentMenu: self
      });
    }

    return vNode;
  });

  var header = function () {
    try {
      return blocks.header;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return mapChildren((_blocks['header'] = function (parent) {
        return null;
      }) && (__blocks['header'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['header'] ? blocks['header'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['header'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['header'].apply($this, args);
      }) && __blocks['header'].apply($this, [__noop]), function (vNode) {
        if (vNode.type === 1 || isStringOrNumberNotEmpty(vNode)) {
          return h('span', null, function () {
            try {
              return vNode;
            } catch (e) {
              _e(e);
            }
          }.call($this));
        } else {
          return vNode;
        }
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-header') : undefined;
  return function () {
    try {
      return !self._isDropdownMenu();
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return header;
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return _children;
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this))) : function () {
    var _obj = null;
    return parent.call($this, _obj, _Vdt, function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['children'] = function (parent) {
        return [function () {
          try {
            return header;
          } catch (e) {
            _e(e);
          }
        }.call($this), function () {
          try {
            return _children;
          } catch (e) {
            _e(e);
          }
        }.call($this)];
      }) && (__blocks['children'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['children'] ? blocks['children'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['children'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['children'].apply($this, args);
      }), __blocks;
    }.call($this, {}), parent);
  }.call($this);
}