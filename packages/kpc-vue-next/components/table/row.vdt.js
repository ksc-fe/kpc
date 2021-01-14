import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Checkbox from '../checkbox';
import Radio from '../radio';
import Intact from 'intact-vue';
import { noop, isStringOrNumber, getTextByChildren, getRestProps, mapChildren } from '../utils';
import { isInvisible } from './utils';
import Button from '../button';
import Icon from '../icon';
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
      className = _self$get.className,
      checkType = _self$get.checkType,
      rowKey = _self$get.rowKey,
      disabled = _self$get.disabled,
      onlyRight = _self$get.onlyRight,
      scheme = _self$get.scheme,
      value = _self$get.value,
      onlyLeft = _self$get.onlyLeft,
      index = _self$get.index,
      merge = _self$get.merge,
      level = _self$get.level,
      indent = _self$get.indent,
      children = _self$get.children,
      grid = _self$get.grid,
      checked = _self$get.checked,
      draggable = _self$get.draggable,
      dragKey = _self$get.dragKey;

  var normalize = Intact.normalize;
  var rowInGrid = self.rowInGrid = [];

  if (merge) {
    grid.push(rowInGrid);
  }

  var columnIndex = -1;
  return h('tr', {
    'draggable': function () {
      try {
        return draggable ? true : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-click': function () {
      try {
        return self._onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this),
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
    }.call($this),
    'ev-dragstart': function () {
      try {
        return self._onDragStart;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-dragend': function () {
      try {
        return self._onDragEnd;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-dragover': function () {
      try {
        return self._onDragOver;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [function () {
    try {
      return checkType === 'checkbox';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('td', null, h(Checkbox, {
    'name': 'k-table-checkbox',
    'value': function () {
      try {
        return checked;
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
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeChecked;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), _className(function () {
    try {
      return {
        "k-th-check": true,
        'k-invisible': onlyRight
      };
    } catch (e) {
      _e(e);
    }
  }.call($this))) : function () {
    try {
      return checkType === 'radio';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('td', null, h(Radio, {
    'name': 'k-table-radio',
    'value': function () {
      try {
        return checked;
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
    '_context': $this,
    'ev-$change:value': function () {
      try {
        return self._onChangeChecked;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), _className(function () {
    try {
      return {
        "k-th-check": true,
        'k-invisible': onlyRight
      };
    } catch (e) {
      _e(e);
    }
  }.call($this))) : undefined, function () {
    try {
      return _mapInstanceProperty(__u).call(__u, scheme, function (item, schemeKey) {
        columnIndex++;
        var spans;

        if (merge) {
          if (columnIndex > 0) {
            var prevCell = rowInGrid[columnIndex - 1];

            if (prevCell && prevCell.colspan > 1) {
              var current = {
                rowspan: prevCell.rowspan,
                colspan: prevCell.colspan - 1
              };
              rowInGrid.push(current);
              return;
            }
          }

          if (index > 0) {
            var prevRow = grid[index - 1];
            var aboveCell = prevRow[columnIndex];

            if (aboveCell && aboveCell.rowspan > 1) {
              var _current = {
                rowspan: aboveCell.rowspan - 1,
                colspan: aboveCell.colspan
              };
              rowInGrid.push(_current);
              return;
            }
          }

          spans = merge.call(self, value, item, index, columnIndex);
          rowInGrid.push(spans);
        }

        var td;

        if (item.template) {
          if (typeof item.template === 'function') {
            td = item.template.call(self, value, index); // for Intact-Vue

            if (normalize) {
              td = normalize(td);
            }
          } else {
            td = item.template;
          }
        } else if (item.blockFn) {
          td = item.blockFn.call(self, noop, value, index);
        } else if (value[schemeKey] !== undefined) {
          td = value[schemeKey];
        } else {
          var _obj = value,
              keys = schemeKey.split('.'),
              i = 0;

          while (_obj != null && i < keys.length) {
            _obj = _obj[keys[i++]];
          }

          td = i && i === keys.length ? _obj : null;
        }

        return h('td', _Object$assign({
          'title': function () {
            try {
              return getTextByChildren(td) || undefined;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'data-ignore': function () {
            try {
              return item.ignore ? '' : undefined;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }, function () {
          try {
            return spans;
          } catch (e) {
            _e(e);
          }
        }.call($this), {
          'style': function () {
            try {
              return {
                paddingLeft: columnIndex === 0 && level ? level * indent + 'px' : undefined
              };
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }), [function () {
          try {
            return columnIndex === 0 && children;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Button, {
          'type': 'none',
          'icon': function () {
            try {
              return true;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'circle': function () {
            try {
              return true;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'size': 'mini',
          'className': 'k-table-arrow',
          'children': h(Icon, {
            'className': 'ion-ios-arrow-right',
            'size': 'small',
            '_context': $this
          }),
          '_context': $this,
          'ev-click': function () {
            try {
              return self._onToggleSpreadRow;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }) : undefined, function () {
          try {
            return typeof td === 'boolean' ? String(td) : td;
          } catch (e) {
            _e(e);
          }
        }.call($this)], _className(function () {
          try {
            var _ref;

            return _ref = {
              'k-invisible': isInvisible(onlyLeft, onlyRight, item)
            }, _ref["k-" + item.align] = item.align, _ref[item.className] = item.className, _ref;
          } catch (e) {
            _e(e);
          }
        }.call($this)), function () {
          try {
            return schemeKey;
          } catch (e) {
            _e(e);
          }
        }.call($this));
      });
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      var _ref2;

      return _ref2 = {}, _ref2[className] = className, _ref2['k-dragging'] = dragKey === rowKey, _ref2;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}