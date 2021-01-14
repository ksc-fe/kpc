import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Checkbox from '../checkbox';
import { getRestProps } from '../utils';
import { BEFORE, AFTER, INNER } from './constants';
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

  var _self$get = self.get(),
      checkbox = _self$get.checkbox,
      load = _self$get.load,
      className = _self$get.className,
      draggable = _self$get.draggable,
      _draggingNode = _self$get._draggingNode,
      selectable = _self$get.selectable;

  var expandedKeys = self.expandedKeys,
      selectedKeys = self.selectedKeys,
      _node = self._node,
      _mode = self._mode,
      expandAnimationCallbacks = self.expandAnimationCallbacks;
  var useMoveAnimation = !!_draggingNode;

  var TreeNodes = function TreeNodes(_ref) {
    var data = _ref.data;
    return _mapInstanceProperty(__u).call(__u, data, function (value) {
      var _context8;

      if (!_filterInstanceProperty(value)) return;
      var key = value.key;
      var expanded = expandedKeys.has(key);
      var selected = selectable && selectedKeys.has(key);
      var disabled = value.data.disabled;
      return h(Animate, _Object$assign({
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
        'className': _className(function () {
          try {
            return {
              "k-node": true,
              "k-expanded": expanded,
              "k-disabled": disabled,
              "k-selected": selected,
              "k-dragging": _draggingNode && _draggingNode.key === key
            };
          } catch (e) {
            _e(e);
          }
        }.call($this)),
        'key': function () {
          try {
            return key;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'children': [h('div', {
          'ev-mousedown': function () {
            try {
              var _context;

              return _bindInstanceProperty(_context = self._onMouseDown).call(_context, self, value);
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'ev-dragover': function () {
            try {
              var _context2;

              return _bindInstanceProperty(_context2 = self._onDragOver).call(_context2, self, value);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }, [function () {
          try {
            return value.children && value.loaded !== false;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h('i', {
          'ev-click': function () {
            try {
              var _context3;

              return _bindInstanceProperty(_context3 = self._toggleExpand).call(_context3, self, value, expanded);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }, null, 'k-icon ion-android-arrow-dropdown') : undefined, function () {
          try {
            return value.loaded === false;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h('i', null, null, 'k-icon ion-load-c icon-loading') : undefined, function () {
          try {
            return checkbox;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Checkbox, {
          'disabled': function () {
            try {
              return value.data.disabled;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'value': function () {
            try {
              return value.checked;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'indeterminate': function () {
            try {
              return value.indeterminate;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-click': function () {
            try {
              var _context4;

              return _bindInstanceProperty(_context4 = self._toggleCheck).call(_context4, self, value);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }) : undefined, (_blocks['label'] = function (parent) {
          return h('span', {
            'ev-click': function () {
              try {
                var _context5;

                return _bindInstanceProperty(_context5 = self._onClick).call(_context5, self, value);
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'ev-contextmenu': function () {
              try {
                var _context6;

                return _bindInstanceProperty(_context6 = self._onRightClick).call(_context6, self, value);
              } catch (e) {
                _e(e);
              }
            }.call($this)
          }, function () {
            try {
              return value.data.label;
            } catch (e) {
              _e(e);
            }
          }.call($this), 'k-text');
        }) && (__blocks['label'] = function (parent) {
          var _context7;

          var args = arguments;
          return blocks['label'] ? blocks['label'].apply($this, _concatInstanceProperty(_context7 = [function () {
            return _blocks['label'].apply($this, args);
          }]).call(_context7, __slice.call(args, 1))) : _blocks['label'].apply($this, args);
        }) && __blocks['label'].apply($this, _concatInstanceProperty(_context8 = [__noop]).call(_context8, function () {
          try {
            return [value.data, value];
          } catch (e) {
            _e(e);
          }
        }.call($this)))], _className(function () {
          try {
            return {
              "k-label": true,
              "k-leaf": !value.children,
              "k-insert-before": _node && _node.key === key && _mode === BEFORE,
              "k-insert-after": _node && _node.key === key && _mode === AFTER,
              "k-insert-inner": _node && _node.key === key && _mode === INNER
            };
          } catch (e) {
            _e(e);
          }
        }.call($this))), function () {
          try {
            return expanded;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Animate, _Object$assign({
          'a:move': function () {
            try {
              return useMoveAnimation;
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
          'className': 'k-tree',
          'key': 'tree',
          'children': h(TreeNodes, {
            'data': function () {
              try {
                return value.children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          }),
          '_context': $this
        })) : undefined],
        '_context': $this
      }));
    });
  };

  return h(Animate, _Object$assign({
    'className': _className(function () {
      try {
        var _ref2;

        return _ref2 = {
          "k-tree": true
        }, _ref2[className] = className, _ref2;
      } catch (e) {
        _e(e);
      }
    }.call($this))
  }, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'draggable': function () {
      try {
        return draggable ? "true" : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:disabled': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:move': function () {
      try {
        return useMoveAnimation;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h(TreeNodes, {
      'data': function () {
        try {
          return self.root.children;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    }),
    '_context': $this,
    'ev-dragstart': function () {
      try {
        return draggable && self._onDragStart;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-dragend': function () {
      try {
        return draggable && self._onDragEnd;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }));
}