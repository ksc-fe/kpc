import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Menu from './menu';
import { mapChildren, expandAnimationCallbacks, isStringOrNumberNotEmpty, getRestProps } from '../utils';
import Dropdown from '../dropdown';
import { Tooltip } from '../tooltip';
import Icon from '../icon';
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
      key = _self$get.key,
      className = _self$get.className,
      dot = _self$get.dot,
      disabled = _self$get.disabled,
      _root = _self$get._root,
      _isFirstFloorChildren = _self$get._isFirstFloorChildren,
      _isFocus = _self$get._isFocus,
      _show = _self$get._show,
      _active = _self$get._active,
      _highlighted = _self$get._highlighted,
      _parentMenu = _self$get._parentMenu;

  var Wrapper = self.Wrapper;
  var subMenuVNode;
  var tooltipContents = [];
  var titleVNodes = mapChildren(children, function (vNode) {
    if (vNode.tag === Menu) {
      // clone it
      subMenuVNode = _Vdt.miss.clone(vNode, {
        _isSubMenu: true,
        _root: _root,
        _isFirstFloorChildren: _isFirstFloorChildren,
        'ev-$change:value': self._onDropdownShowChange,
        _parent: self
      }, true);
    } else if (vNode.type === 1 || isStringOrNumberNotEmpty(vNode)) {
      tooltipContents.push(vNode);
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

  var isExpanded = subMenuVNode && _root.isExpanded(key);

  if (isExpanded) {
    _parentMenu._expandedKeys.add(key);
  }

  var classNameObj = (_classNameObj = {
    'k-menu-item': true,
    'k-expanded': isExpanded,
    'k-active': _root.isSelected(key),
    'k-disabled': disabled
  }, _classNameObj[className] = className, _classNameObj['k-hover'] = _isFocus, _classNameObj['k-show'] = _show, _classNameObj['k-highlighted'] = _root.isHighlighted(key), _classNameObj);
  var title = h('div', {
    'ev-click': function () {
      try {
        var _context;

        return _bindInstanceProperty(_context = self._onClick).call(_context, self, subMenuVNode);
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [function () {
    try {
      return dot;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Icon, {
    'className': 'k-dot ion-record',
    '_context': $this
  }) : undefined, function () {
    try {
      return titleVNodes;
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return subMenuVNode;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('i', null, null, 'k-arrow ion-ios-arrow-down') : undefined, function () {
    try {
      return null;
    } catch (e) {
      _e(e);
    }
  }.call($this)], 'k-title');
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'ev-mouseenter': function () {
      try {
        return self._onMouseEnter;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseleave': function () {
      try {
        return self._onMouseLeave;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return !Menu.showAsDropdown(_root);
    } catch (e) {
      _e(e);
    }
  }.call($this) ? [h(Wrapper, {
    'children': function () {
      try {
        return title
        /* use a Wrapper to wrap it to make it does not be removed when it collapse */
        ;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  }), function () {
    try {
      return subMenuVNode;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Animate, _Object$assign({
    'a:show': function () {
      try {
        return isExpanded;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:move': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, function () {
    try {
      return expandAnimationCallbacks;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'key': 'submenu',
    'children': function () {
      try {
        return subMenuVNode;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  })) : undefined] : function () {
    try {
      return !subMenuVNode;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? function () {
    try {
      return _isFirstFloorChildren && _root.get('type') !== 'horizontal';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Tooltip, {
    'position': 'right',
    'children': function () {
      try {
        return title;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    '_blocks': function (blocks) {
      var _blocks = {},
          __blocks = extend({}, blocks);

      return (_blocks['content'] = function (parent) {
        return function () {
          try {
            return tooltipContents;
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['content'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['content'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
      }), __blocks;
    }.call($this, {})
  }) : function () {
    try {
      return title;
    } catch (e) {
      _e(e);
    }
  }.call($this) : h(Dropdown, {
    'position': function () {
      try {
        return _root.get('type') !== 'horizontal' || !_isFirstFloorChildren ? {
          my: 'left top',
          at: 'right+5 top'
        } : {
          my: 'left top',
          at: 'left bottom+5'
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'className': _className(function () {
      try {
        var _ref;

        return _ref = {
          "k-menu": true
        }, _ref["k-" + (_root.get('theme') || 'dark')] = true, _ref;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'children': [function () {
      try {
        return title;
      } catch (e) {
        _e(e);
      }
    }.call($this), function () {
      try {
        return subMenuVNode;
      } catch (e) {
        _e(e);
      }
    }.call($this)],
    '_context': $this
  }), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}