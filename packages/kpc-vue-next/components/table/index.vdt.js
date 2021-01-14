import "core-js/modules/es.string.fixed";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js/object/define-property";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js/instance/sort";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Checkbox from '../checkbox';
import Radio from '../radio';
import Row from './row';
import Intact from 'intact-vue';
import Column from './column';
import { noop, isStringOrNumber, getTextByChildren, getRestProps, mapChildren } from '../utils';
import Spin from '../spin';
import Affix from '../affix';
import Tooltip from '../tooltip';
import Icon from '../icon';
import Button from '../button';
import { isInvisible } from './utils';
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

  var normalize = Intact.normalize;

  var _self$get = self.get(),
      checkType = _self$get.checkType,
      scheme = _self$get.scheme,
      checkedKeys = _self$get.checkedKeys,
      data = _self$get.data,
      rowKey = _self$get.rowKey,
      className = _self$get.className,
      fixHeader = _self$get.fixHeader,
      noDataTemplate = _self$get.noDataTemplate,
      disableRow = _self$get.disableRow,
      resizable = _self$get.resizable,
      expandedKeys = _self$get.expandedKeys,
      type = _self$get.type,
      _isSticky = _self$get._isSticky,
      stickHeader = _self$get.stickHeader,
      stripe = _self$get.stripe,
      style = _self$get.style,
      rowClassName = _self$get.rowClassName,
      children = _self$get.children,
      sort = _sortInstanceProperty(_self$get),
      group = _self$get.group,
      _scrollBarWidth = _self$get._scrollBarWidth,
      _scrollPosition = _self$get._scrollPosition,
      _hoverIndex = _self$get._hoverIndex,
      tooltipPosition = _self$get.tooltipPosition,
      _paddingBottom = _self$get._paddingBottom,
      _isStickyScrollbar = _self$get._isStickyScrollbar,
      stickScrollbar = _self$get.stickScrollbar,
      loading = _self$get.loading,
      _isShowLeftRightMiddle = _self$get._isShowLeftRightMiddle,
      merge = _self$get.merge,
      childrenKey = _self$get.childrenKey,
      indent = _self$get.indent,
      draggable = _self$get.draggable,
      _dragKey = _self$get._dragKey;

  var cols;
  var currentVNode;

  var _scheme;

  var maxRows = 0;
  var maxCols = 0;
  var hasFixedLeft;
  var hasFixedRight;
  self.leftColumns = [];
  self.rightColumns = [];

  var TheadCreator = function TheadCreator(_ref) {
    var onlyLeft = _ref.onlyLeft,
        onlyRight = _ref.onlyRight,
        refContainer = _ref.refContainer,
        style = _ref.style;
    var keys = {};

    var refLeftElement = function refLeftElement(i) {
      return i && self.leftColumns.push(i);
    };

    var refLeft = function refLeft(i) {
      return i && self.leftColumns.push(i.element);
    };

    var refRight = function refRight(i) {
      return i && self.rightColumns.push(i.element);
    };

    var ref = onlyLeft ? refLeft : onlyRight ? refRight : undefined;
    var tableColumns = [];
    cols = [];
    _scheme = {};
    var checkVNode;

    if (checkType === 'checkbox' || checkType === 'radio') {
      maxCols++;
      cols.push(h('col', {
        'style': function () {
          try {
            return {
              width: self._getHeaderWidth('_$checked')
            };
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, null, 'k-th-check'));
      checkVNode = currentVNode = h('th', {
        'minWidth': function () {
          try {
            return 40;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, function () {
        try {
          return checkType === 'checkbox';
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Checkbox, {
        'value': function () {
          try {
            return self.isCheckAll();
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'ev-click': function () {
          try {
            return self._toggleCheckAll;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }) : undefined, _className(function () {
        try {
          return {
            'k-invisible': onlyRight
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)), '_$checked', function () {
        try {
          return onlyLeft ? refLeftElement : undefined;
        } catch (e) {
          _e(e);
        }
      }.call($this));
      tableColumns[0] = [checkVNode];
    }

    var beforeLoop = function beforeLoop(layer) {
      if (layer + 1 > maxRows) maxRows = layer + 1;
      if (!tableColumns[layer]) tableColumns[layer] = [];
    };

    var loop = function loop(item, key, parent, layer, fixed, loopRecursiveCallback) {
      if (!__u.isObject(item) || item.type
      /* is vNode */
      ) {
          item = {
            title: item
          };
        }

      item.key = key; // if parent fixed, fix children

      if (fixed) {
        item.fixed = fixed;
      }

      var dragStart = self._dragStart;

      if (item.fixed === 'left') {
        hasFixedLeft = true;
      } else if (item.fixed === 'right') {
        hasFixedRight = true;
      }

      var invisible = isInvisible(onlyLeft, onlyRight, item);
      var vNode = h(Column, _Object$assign({}, function () {
        try {
          return item;
        } catch (e) {
          _e(e);
        }
      }.call($this), {
        '$parent': function () {
          try {
            return self;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'value': function () {
          try {
            return self.get("group." + key);
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'invisible': function () {
          try {
            return invisible;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'className': _className(function () {
          try {
            return item.className;
          } catch (e) {
            _e(e);
          }
        }.call($this)),
        'ref': function () {
          try {
            return !invisible ? ref : undefined;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'prevVNode': function () {
          try {
            return currentVNode;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'cols': function () {
          try {
            return 0;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'ev-click': function () {
          try {
            var _context;

            return item.sortable ? _bindInstanceProperty(_context = self._sort).call(_context, self, key, item) : undefined;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-dragStart': function () {
          try {
            return dragStart;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-$change:value': function () {
          try {
            var _context2;

            return _bindInstanceProperty(_context2 = self._onChangeGroup).call(_context2, self, key);
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }));
      tableColumns[layer].push(vNode);
      var props = vNode.props;

      if (loopRecursiveCallback(item, props, layer + 1, item.fixed)) {
        props.rows = 1;
      } else {
        currentVNode = vNode;

        if (/^\d+$/.test(key)) {
          // avoid digital key
          _e(new Error("don't use digits as key: " + key + "."));
        } else if (_scheme[key]) {
          _e(new Error("reduplicated key: " + key));
        }

        cols.push(h('col', {
          'width': function () {
            try {
              return item.width;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'style': function () {
            try {
              return {
                width: self._getHeaderWidth(key)
              };
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }, null, _className(function () {
          try {
            var _ref2;

            return _ref2 = {}, _ref2[item.className] = item.className, _ref2;
          } catch (e) {
            _e(e);
          }
        }.call($this))));
        props.cols = 1;
        maxCols++;

        _Object$defineProperty(props, 'rows', {
          get: function get() {
            return maxRows - layer;
          },
          enumerable: true
        }); // add leaf node to _scheme


        _scheme[key] = props; // add to _columns to check width of column

        var oRef = vNode.ref;

        vNode.ref = function (i) {
          if (i) {
            self._columns[key] = i;
          } else {
            delete self._columns[key];
          }

          oRef && oRef(i);
        };
      }

      if (parent) {
        parent.cols += props.cols; // if child fixed and it will not be invisible
        // parent must not be invisible too

        if (!props.invisible) {
          parent.invisible = false;
        }
      }
    };

    var loopScheme = function loopScheme(scheme, parent, layer, fixed) {
      var ret = false;
      beforeLoop(layer);

      _mapInstanceProperty(__u).call(__u, scheme, function (item, key) {
        ret = true;
        loop(item, key, parent, layer, fixed, function (item, props, layer, fixed) {
          if (item.scheme) {
            return loopScheme(item.scheme, props, layer, fixed);
          }

          return false;
        });
      });

      return ret;
    };

    var loopColumn = function loopColumn(children, parent, layer, fixed) {
      // add a flag, when we enter to the map callback set it to true
      // because it may have children but is not Column
      var ret = false;
      var beforeLoopDone = false;
      mapChildren(children, function (vNode) {
        if (vNode.tag === Column) {
          if (!beforeLoopDone) {
            beforeLoop(layer);
            beforeLoopDone = true;
          }

          ret = true;
          var props = vNode.props;
          var blockFn = props._blocks && (props._blocks.default || props._blocks.template);

          var _props = _Object$assign({}, props, {
            template: props.template,
            blockFn: blockFn
          });

          loop(_props, props.key, parent, layer, fixed, function (item, props, layer, fixed) {
            if (item.children) {
              return loopColumn(item.children, props, layer, fixed);
            }

            return false;
          });
        }
      });
      return ret;
    };

    loopScheme(scheme, null, 0); // for using TableColumn as children

    loopColumn(children, null, 0); // set checkVNode's rowspan

    if (maxRows > 1 && checkVNode) {
      checkVNode.props.rowspan = maxRows;
    }

    var thead = h('div', {
      'style': function () {
        try {
          return onlyLeft ? {
            width: self.get('_leftWidth') + 'px'
          } : onlyRight ? {
            width: self.get('_rightWidth') + 'px'
          } : void 0;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, h('div', {
      'style': function () {
        try {
          return {
            paddingRight: self.get('_padding') + 'px'
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, h('table', {
      'style': function () {
        try {
          return style;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, [h('colgroup', null, function () {
      try {
        return cols;
      } catch (e) {
        _e(e);
      }
    }.call($this)), h('thead', null, __m(function () {
      try {
        return tableColumns;
      } catch (e) {
        _e(e);
      }
    }.call($this), function (value, key) {
      return h('tr', null, function () {
        try {
          return value;
        } catch (e) {
          _e(e);
        }
      }.call($this));
    }, $this))]), 'k-thead-wrapper'), 'k-thead', null, function () {
      try {
        return refContainer;
      } catch (e) {
        _e(e);
      }
    }.call($this));
    return _isSticky ? h(Affix, {
      'top': function () {
        try {
          return stickHeader === true ? 0 : +stickHeader;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'exclude': function () {
        try {
          return self._excludeStickHeader;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': function () {
        try {
          return thead;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    }) : thead;
  };

  var TbodyCreator = function TbodyCreator(_ref3) {
    var onlyLeft = _ref3.onlyLeft,
        onlyRight = _ref3.onlyRight,
        refContainer = _ref3.refContainer,
        refTable = _ref3.refTable,
        style = _ref3.style;
    // save the rowspan and colspan information
    var grid = [];
    var rows;

    if (!data || !data.length) {
      rows = h('tr', null, h('td', {
        'colspan': function () {
          try {
            return maxCols;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, (_blocks['no-data'] = function (parent) {
        return function () {
          try {
            return normalize ? normalize(noDataTemplate) : noDataTemplate;
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['no-data'] = function (parent) {
        var _context3;

        var args = arguments;
        return blocks['no-data'] ? blocks['no-data'].apply($this, _concatInstanceProperty(_context3 = [function () {
          return _blocks['no-data'].apply($this, args);
        }]).call(_context3, __slice.call(args, 1))) : _blocks['no-data'].apply($this, args);
      }) && __blocks['no-data'].apply($this, [__noop]), 'k-no-data'), null, 'table_no_data');
    } else {
      var index = 0;
      rows = [];

      var loop = function loop(data, level, hidden) {
        _forEachInstanceProperty(data).call(data, function (value) {
          var children = childrenKey && _Array$isArray(value[childrenKey]) ? value[childrenKey] : null;
          var key = rowKey.call(self, value, index);
          var disabled = disableRow.call(self, value, index, key);
          var className = rowClassName.call(self, value, index, key);
          var spreaded = self.isSpreaded(key);
          var checked = self.isChecked(key);
          var tr = h(Animate, {
            'a:tag': function () {
              try {
                return Row;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'a:transition': 'c-fade',
            'a:disabled': function () {
              try {
                return !draggable;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'key': function () {
              try {
                return key;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'rowKey': function () {
              try {
                return key;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'value': function () {
              try {
                return value;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'index': function () {
              try {
                return index;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'className': _className(function () {
              try {
                var _ref4;

                return _ref4 = {
                  'k-disabled': disabled
                }, _ref4[className] = className, _ref4['k-checked'] = checked, _ref4['k-hover'] = _hoverIndex === index, _ref4['k-selected'] = !disabled && self.isSelected(key), _ref4['k-spread'] = spreaded, _ref4['k-hidden'] = hidden, _ref4;
              } catch (e) {
                _e(e);
              }
            }.call($this)),
            'onClick': function () {
              try {
                return self._clickRow;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onDestroy': function () {
              try {
                return self._onRowDestroyed;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onRowEnter': function () {
              try {
                return self._onRowEnter;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onRowLeave': function () {
              try {
                return self._onRowLeave;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onRowDragStart': function () {
              try {
                return self._onRowDragStart;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onRowDragEnd': function () {
              try {
                return self._onRowDragEnd;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onRowDragOver': function () {
              try {
                return self._onRowDragOver;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onToggleSpreadRow': function () {
              try {
                return self._toggleSpreadRow;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onChangeChecked': function () {
              try {
                return self._onChangeChecked;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'checkType': function () {
              try {
                return checkType;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onlyRight': function () {
              try {
                return onlyRight;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'onlyLeft': function () {
              try {
                return onlyLeft;
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
            'scheme': function () {
              try {
                return _scheme;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'merge': function () {
              try {
                return merge;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'level': function () {
              try {
                return level;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'indent': function () {
              try {
                return indent;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'children': function () {
              try {
                return children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'grid': function () {
              try {
                return grid;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'checked': function () {
              try {
                return checked;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'draggable': function () {
              try {
                return draggable;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'dragKey': function () {
              try {
                return _dragKey;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          }); // add tooltip

          if (blocks.tooltip) {
            var _context5;

            var content = (_blocks['tooltip'] = function (parent) {
              return null;
            }) && (__blocks['tooltip'] = function (parent) {
              var _context4;

              var args = arguments;
              return blocks['tooltip'] ? blocks['tooltip'].apply($this, _concatInstanceProperty(_context4 = [function () {
                return _blocks['tooltip'].apply($this, args);
              }]).call(_context4, __slice.call(args, 1))) : _blocks['tooltip'].apply($this, args);
            }) && __blocks['tooltip'].apply($this, _concatInstanceProperty(_context5 = [__noop]).call(_context5, function () {
              try {
                return [value, index];
              } catch (e) {
                _e(e);
              }
            }.call($this)));

            tr = h(Tooltip, {
              'position': function () {
                try {
                  return tooltipPosition;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'children': function () {
                try {
                  return tr;
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
                      return content;
                    } catch (e) {
                      _e(e);
                    }
                  }.call($this);
                }) && (__blocks['content'] = function (parent) {
                  var _context6;

                  var args = arguments;
                  return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context6 = [function () {
                    return _blocks['content'].apply($this, args);
                  }]).call(_context6, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
                }), __blocks;
              }.call($this, {})
            });
          }

          if (blocks.expand && _indexOfInstanceProperty(expandedKeys).call(expandedKeys, key) > -1) {
            var _context8;

            tr = [tr, h('tr', null, h('td', {
              'colspan': function () {
                try {
                  return maxCols;
                } catch (e) {
                  _e(e);
                }
              }.call($this)
            }, (_blocks['expand'] = function (parent) {
              return null;
            }) && (__blocks['expand'] = function (parent) {
              var _context7;

              var args = arguments;
              return blocks['expand'] ? blocks['expand'].apply($this, _concatInstanceProperty(_context7 = [function () {
                return _blocks['expand'].apply($this, args);
              }]).call(_context7, __slice.call(args, 1))) : _blocks['expand'].apply($this, args);
            }) && __blocks['expand'].apply($this, _concatInstanceProperty(_context8 = [__noop]).call(_context8, function () {
              try {
                return [value, index];
              } catch (e) {
                _e(e);
              }
            }.call($this)))), 'k-expand', function () {
              try {
                return key + ".expand";
              } catch (e) {
                _e(e);
              }
            }.call($this))];
          }

          index++;
          rows.push(tr); // for tree table

          if (children) {
            loop(value[childrenKey], level + 1, hidden || !spreaded);
          }
        });
      };

      loop(data, 0, false);
    }

    var tbody = h(Animate, {
      'a:tag': 'tbody',
      'a:disabled': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': function () {
        try {
          return rows;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    });
    return h('div', {
      'style': function () {
        try {
          var _style;

          return !_isSticky && (typeof fixHeader === 'number' || typeof fixHeader === 'string') ? _style = {
            maxHeight: fixHeader - (onlyLeft || onlyRight ? _paddingBottom : 0) + "px"
          } : void 0, _style;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-scroll': function () {
        try {
          return self._onTBodyScroll;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, h('table', {
      'style': function () {
        try {
          return style;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, [h('colgroup', null, function () {
      try {
        return cols;
      } catch (e) {
        _e(e);
      }
    }.call($this)), function () {
      try {
        return tbody;
      } catch (e) {
        _e(e);
      }
    }.call($this)], null, null, function () {
      try {
        return refTable;
      } catch (e) {
        _e(e);
      }
    }.call($this)), 'k-tbody', null, function () {
      try {
        return refContainer;
      } catch (e) {
        _e(e);
      }
    }.call($this));
  };

  var table = h('div', null, [h(TheadCreator, {
    'refContainer': function () {
      try {
        return function (dom) {
          return self.header = dom;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'style': function () {
      try {
        return {
          width: self.tableWidth
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  }), h(TbodyCreator, {
    'refContainer': function () {
      try {
        return function (dom) {
          return self.scroll = dom;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'refTable': function () {
      try {
        return function (dom) {
          return self.table = dom;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'style': function () {
      try {
        return {
          width: self.tableWidth
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  })], 'k-table-wrapper');

  var FixedTable = function FixedTable(_ref5) {
    var _props2;

    var position = _ref5.position;
    var tableWidth = self.get('_tableWidth') + 'px';
    var props = (_props2 = {}, _props2[position === 'left' ? 'onlyLeft' : 'onlyRight'] = true, _props2);
    var style = {
      width: self.get("_" + position + "Width") + 'px'
    };

    if (!_isSticky && fixHeader === true) {
      style.maxHeight = "calc(100% - " + _paddingBottom + "px)";
    }

    return h('div', {
      'style': function () {
        try {
          return style;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, [h(TheadCreator, _Object$assign({}, function () {
      try {
        return props;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'style': function () {
        try {
          return {
            width: tableWidth
          };
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    })), h(TbodyCreator, _Object$assign({}, function () {
      try {
        return props;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'style': function () {
        try {
          return {
            width: tableWidth
          };
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'refContainer': function () {
        try {
          return function (i) {
            return self[position + "FixedScroll"] = i;
          };
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    }))], _className(function () {
      try {
        return "k-table-wrapper k-fixed-" + position;
      } catch (e) {
        _e(e);
      }
    }.call($this)));
  };

  self.hasFixedLeft = hasFixedLeft;
  self.hasFixedRight = hasFixedRight;
  var classNameObj = (_classNameObj = {
    'k-table': true
  }, _classNameObj[className] = className, _classNameObj["k-" + type] = type !== 'default', _classNameObj['k-sticky'] = _isSticky, _classNameObj["k-scroll-" + _scrollPosition] = _isShowLeftRightMiddle, _classNameObj['k-sticky-scrollbar'] = _isStickyScrollbar, _classNameObj['k-stripe'] = stripe, _classNameObj['k-fluid-height'] = fixHeader === true, _classNameObj['k-draggable'] = draggable, _classNameObj);
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [function () {
    try {
      return table;
    } catch (e) {
      _e(e);
    }
  }.call($this), function () {
    try {
      return hasFixedLeft;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(FixedTable, {
    'position': 'left',
    '_context': $this
  }) : undefined, function () {
    try {
      return hasFixedRight;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(FixedTable, {
    'position': 'right',
    '_context': $this
  }) : undefined, function () {
    try {
      return _isStickyScrollbar;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Affix, {
    'bottom': function () {
      try {
        return stickScrollbar === true ? 0 : +stickScrollbar;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'shouldFix': function () {
      try {
        return self._shouldStickScrollbar;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'style': function () {
      try {
        return self.get('_stickyScrollbarStyle');
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('div', {
      'ev-scroll': function () {
        try {
          return self._onTBodyScroll;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, h('div', {
      'style': function () {
        try {
          return {
            width: self.get('_tableWidth') + 'px'
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, null, 'k-inner'), 'k-scrollbar', null, function (i) {
      widgets['scrollbar'] = i;
    }),
    '_context': $this
  }) : undefined, function () {
    try {
      return loading;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Spin, {
    'overlay': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'size': 'small',
    '_context': $this
  }) : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}