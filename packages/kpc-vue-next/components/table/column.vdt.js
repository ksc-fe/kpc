import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js/instance/sort";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { Dropdown, DropdownMenu, DropdownItem } from '../dropdown';
import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { isStringOrNumber, getRestProps } from '../utils';
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
      title = _self$get.title,
      key = _self$get.key,
      group = _self$get.group,
      multiple = _self$get.multiple,
      ignore = _self$get.ignore,
      sortable = _self$get.sortable,
      $parent = _self$get.$parent,
      _show = _self$get._show,
      className = _self$get.className,
      align = _self$get.align,
      cols = _self$get.cols,
      rows = _self$get.rows,
      invisible = _self$get.invisible,
      exportTitle = _self$get.exportTitle;

  var width = self.width;

  var _$parent$get = $parent.get(),
      sort = _sortInstanceProperty(_$parent$get),
      resizable = _$parent$get.resizable,
      container = _$parent$get.container;

  var groupText = group && self._getGroupText() || '';
  var thTitle = isStringOrNumber(title) ? title + groupText : undefined;
  title = normalize ? normalize(title) : title;
  return h('th', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'title': function () {
      try {
        return thTitle;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'data-ignore': function () {
      try {
        return ignore ? '' : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'colspan': function () {
      try {
        return cols && cols > 1 && cols || undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'rowspan': function () {
      try {
        return rows && rows > 1 && rows || undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-click': function () {
      try {
        return self.onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), [function () {
    try {
      return resizable;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', {
    'data-text': function () {
      try {
        return exportTitle;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mousedown': function () {
      try {
        return self.onDragStart;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-click': function () {
      try {
        return self._stopPropagation;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'k-resize') : undefined, h('div', {
    'data-text': function () {
      try {
        return !resizable ? exportTitle : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, [function () {
    try {
      return !group;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['title'] = function (parent) {
    return function () {
      try {
        return title;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['title'] = function (parent) {
    var _context;

    var args = arguments;
    return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context = [function () {
      return _blocks['title'].apply($this, args);
    }]).call(_context, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
  }) && __blocks['title'].apply($this, [__noop]), 'c-ellipsis') : undefined, function () {
    try {
      return group;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [h(Dropdown, {
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [h('i', null, null, 'k-arrow ion-ios-arrow-down'), h(DropdownMenu, {
      'className': _className(function () {
        try {
          return {
            'k-table-dropdown': true,
            'k-multiple': multiple
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'children': __m(function () {
        try {
          return group;
        } catch (e) {
          _e(e);
        }
      }.call($this), function (value, key) {
        return h(DropdownItem, {
          'className': _className(function () {
            try {
              return {
                'k-active': self._isChecked(value.value)
              };
            } catch (e) {
              _e(e);
            }
          }.call($this)),
          'hideOnSelect': function () {
            try {
              return !multiple;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'children': function () {
            try {
              return multiple;
            } catch (e) {
              _e(e);
            }
          }.call($this) ? h(Checkbox, {
            'name': 'key',
            'value': function () {
              try {
                return self._isChecked(value.value);
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'children': function () {
              try {
                return value.label;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          }) : h('span', null, function () {
            try {
              return value.label;
            } catch (e) {
              _e(e);
            }
          }.call($this)),
          '_context': $this,
          'ev-select': function () {
            try {
              var _context2;

              return _bindInstanceProperty(_context2 = self._onSelect).call(_context2, self, value.value);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        });
      }, $this),
      '_context': $this,
      'ev-$change:value': function () {
        try {
          return self._onChangeShow;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })],
    '_context': $this
  }), h('div', null, [(_blocks['title'] = function (parent) {
    return function () {
      try {
        return title;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['title'] = function (parent) {
    var _context3;

    var args = arguments;
    return blocks['title'] ? blocks['title'].apply($this, _concatInstanceProperty(_context3 = [function () {
      return _blocks['title'].apply($this, args);
    }]).call(_context3, __slice.call(args, 1))) : _blocks['title'].apply($this, args);
  }) && __blocks['title'].apply($this, [__noop]), function () {
    try {
      return groupText;
    } catch (e) {
      _e(e);
    }
  }.call($this)], 'c-ellipsis')], 'k-group') : undefined, function () {
    try {
      var type;
      return sortable ? (type = key === sort.key ? sort.type : '', h('div', null, h('i', null, null, _className(function () {
        try {
          var _ref;

          return _ref = {
            'k-icon': true
          }, _ref["icon-" + type] = type, _ref['icon-sortable'] = !type, _ref;
        } catch (e) {
          _e(e);
        }
      }.call($this))), _className(function () {
        try {
          var _ref2;

          return _ref2 = {
            'k-sort': true
          }, _ref2["k-" + type] = type, _ref2;
        } catch (e) {
          _e(e);
        }
      }.call($this)))) : void 0;
    } catch (e) {
      _e(e);
    }
  }.call($this)], _className(function () {
    try {
      return {
        "k-th": true,
        "k-group-show": _show
      };
    } catch (e) {
      _e(e);
    }
  }.call($this)))], _className(function () {
    try {
      var _ref3;

      return _ref3 = {
        'k-sortable': sortable
      }, _ref3[className] = className, _ref3["k-" + align] = align, _ref3['k-invisible'] = invisible, _ref3;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}