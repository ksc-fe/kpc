import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.join";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.replace";
import "core-js/modules/web.dom-collections.iterator";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/reduce";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _JSON$stringify from "@babel/runtime-corejs3/core-js/json/stringify";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";

var _dec, _class, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import { _$, debounce, browser, toggleArray } from '../utils';
import { scrollbarWidth } from '../moveWrapper/position';
import ResizeObserver from 'resize-observer-polyfill';
import TooltipContent from '../tooltip/content';

var slice = _sliceInstanceProperty(Array.prototype);

var _Intact$Vdt$utils = Intact.Vdt.utils,
    each = _Intact$Vdt$utils.each,
    className = _Intact$Vdt$utils.className;
var hasLocalStorage = typeof localStorage !== 'undefined';
var BaseTable = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(BaseTable, _Intact);

  var _super = _createSuper(BaseTable);

  function BaseTable() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = BaseTable.prototype;

  _proto.defaults = function defaults() {
    return {
      data: [],
      scheme: {},
      checkType: 'checkbox',
      // radio | none
      rowKey: function rowKey(value, index) {
        return index;
      },
      rowClassName: function rowClassName(value, index) {},
      // add className for tr
      checkedKeys: [],
      // for checkbox
      checkedKey: undefined,
      // for radio
      rowCheckable: true,
      // click row to check
      rowExpandable: true,
      // click row to expand
      noDataTemplate: _$('/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~'),
      disableRow: function disableRow(data, index) {
        return false;
      },
      sort: {},
      group: {},
      resizable: false,
      expandedKeys: [],
      type: 'default',
      // default border
      fixHeader: false,
      minColWidth: 40,
      stickHeader: false,
      stickScrollbar: false,
      loading: false,
      container: undefined,
      stripe: false,
      rowSelectable: false,
      selectedKeys: [],
      defaultWidthMap: {},
      defaultWidth: undefined,
      storeWidth: undefined,
      merge: undefined,
      tooltipPosition: 'top',
      childrenKey: 'children',
      indent: 32,
      spreadKeys: [],
      draggable: false,
      removeCheckedKeyOnRowDestroyed: true,
      _padding: 0,
      _paddingBottom: 0,
      _isShowLeftRightMiddle: false,
      _disabledKeys: [],
      _enabledKeys: [],
      _isSticky: false,
      _leftWidth: 0,
      _rightWidth: 0,
      _scrollBarWidth: 0,
      _scrollPosition: 'left',
      _hoverIndex: undefined
    };
  };

  _proto._init = function _init() {
    var _this = this,
        _context,
        _context2;

    this._columns = {}; // save the width of header cell

    this._initWidth(); // save the destroyed rows


    this._allDestroyedRows = [];
    this.scrollLeft = 0; // keep the event consistent

    this.on('$change:checkedKeys', function (c, newValue, oldValue) {
      _this.trigger('$change:checked', c, newValue, oldValue);
    });
    this.on('$change:checkedKey', function (c, newValue, oldValue) {
      _this.trigger('$change:checked', c, [newValue], [oldValue]);
    }); // calculate padding of header when some props have changed
    // #310

    this.on('$changed:data', this._calcHeaderPadding); // update disabled keys when some props have changed

    _forEachInstanceProperty(_context = ['data', 'disableRow']).call(_context, function (item) {
      _this.on("$change:" + item, _this._updateDisabledKeys);
    });

    _forEachInstanceProperty(_context2 = ['fixHeader', 'scheme', 'children']).call(_context2, function (item) {
      _this.on("$changed:" + item, _this._setFixedColumnWidth);
    });

    this.on('$receive:stickHeader', function (c, v) {
      _this.set('_isSticky', v != null && v !== false);
    });
    this.on('$receive:stickScrollbar', function (c, v) {
      _this.set('_isStickyScrollbar', v != null && v !== false);
    });

    this._updateDisabledKeys();
  };

  _proto._initWidth = function _initWidth() {
    var _this$get = this.get(),
        defaultWidthMap = _this$get.defaultWidthMap,
        defaultWidth = _this$get.defaultWidth;

    this.headerWidthMap = defaultWidthMap || {};
    this.tableWidth = defaultWidth;
    if (this.headerWidthMap && this.tableWidth) return; // if exist storeWidth we get the width from localStorage

    var storeWidth = this.get('storeWidth');

    if (storeWidth && hasLocalStorage) {
      var storage = localStorage.getItem(storeWidth);

      if (storage) {
        try {
          var _JSON$parse = JSON.parse(storage),
              map = _mapInstanceProperty(_JSON$parse),
              width = _JSON$parse.width;

          if (map && !defaultWidth) {
            this.headerWidthMap = map;
          }

          if (width && !defaultWidth) {
            this.tableWidth = width;
          }
        } catch (e) {}
      }
    }
  };

  _proto._storeWidth = function _storeWidth() {
    var storeWidth = this.get('storeWidth');

    if (storeWidth && hasLocalStorage) {
      localStorage.setItem(storeWidth, _JSON$stringify({
        map: this.headerWidthMap,
        width: this.tableWidth
      }));
    }

    this.trigger('changeWidth', this.headerWidthMap, this.tableWidth);
  };

  _proto._mount = function _mount() {
    var _this2 = this;

    this.set('_scrollBarWidth', scrollbarWidth(), {
      silent: true
    });

    this._calcHeaderPadding();

    this._checkTableWidth(true);

    window.addEventListener('resize', this._onWindowResize);

    this._setFixedColumnWidth(); // use debounce instead of throttle, because if there is
    // transition on parent container, the width is weired
    // #342


    var ro = this.ro = new ResizeObserver(debounce(function () {
      if (_this2.destroyed) return;

      _this2._calcHeaderPadding();

      _this2._checkTableWidth();
    }, 100));
    ro.observe(this.element);
  };

  _proto.get = function get(key, defaultValue) {
    if (key === 'data' && !_Array$isArray(_Intact.prototype.get.call(this, 'data', defaultValue))) {
      return [];
    }

    return _Intact.prototype.get.call(this, key, defaultValue);
  };

  _proto.refreshHeader = function refreshHeader() {
    this._calcHeaderPadding();
  };

  _proto.isCheckAll = function isCheckAll() {
    var _this$get2 = this.get(),
        checkedKeys = _this$get2.checkedKeys,
        _enabledKeys = _this$get2._enabledKeys;

    return _enabledKeys.length && _everyInstanceProperty(_enabledKeys).call(_enabledKeys, function (key) {
      return _includesInstanceProperty(checkedKeys).call(checkedKeys, key);
    });
  };

  _proto.isChecked = function isChecked(key) {
    var _this$get3 = this.get(),
        checkType = _this$get3.checkType,
        checkedKey = _this$get3.checkedKey,
        checkedKeys = _this$get3.checkedKeys;

    if (checkType === 'checkbox') {
      return !!~_indexOfInstanceProperty(checkedKeys).call(checkedKeys, key);
    } else if (checkType === 'radio') {
      return checkedKey === key;
    }

    return false;
  };

  _proto.isSelected = function isSelected(key) {
    var _this$get4 = this.get(),
        rowSelectable = _this$get4.rowSelectable,
        selectedKeys = _this$get4.selectedKeys;

    if (rowSelectable) {
      return ~_indexOfInstanceProperty(selectedKeys).call(selectedKeys, key);
    }

    return false;
  };

  _proto.isSpreaded = function isSpreaded(key) {
    var _this$get5 = this.get(),
        spreadKeys = _this$get5.spreadKeys;

    return ~_indexOfInstanceProperty(spreadKeys).call(spreadKeys, key);
  };

  _proto.checkAll = function checkAll() {
    // const start = performance.now();
    this.set('checkedKeys', this._getCheckUnCheckAllkeys(true)); // console.log('checkAll: ', performance.now() - start);
  };

  _proto.uncheckAll = function uncheckAll() {
    this.set({
      checkedKeys: this._getCheckUnCheckAllkeys(false),
      checkedKey: undefined
    });
  };

  _proto._getCheckUnCheckAllkeys = function _getCheckUnCheckAllkeys(isCheck) {
    var _this$get6 = this.get(),
        checkedKeys = _this$get6.checkedKeys,
        _enabledKeys = _this$get6._enabledKeys;

    checkedKeys = _sliceInstanceProperty(checkedKeys).call(checkedKeys, 0);

    _forEachInstanceProperty(_enabledKeys).call(_enabledKeys, function (key) {
      var index = _indexOfInstanceProperty(checkedKeys).call(checkedKeys, key);

      if (isCheck) {
        if (index < 0) {
          checkedKeys.push(key);
        }
      } else {
        /* istanbul ignore else */
        if (index > -1) {
          _spliceInstanceProperty(checkedKeys).call(checkedKeys, index, 1);
        }
      }
    });

    return checkedKeys;
  };

  _proto.checkRow = function checkRow(key) {
    this._checkUncheckRows([key], true, false);
  };

  _proto.uncheckRow = function uncheckRow(key) {
    this._checkUncheckRows([key], false, false);
  };

  _proto.uncheckRows = function uncheckRows(keys) {
    this._checkUncheckRows(keys, false, false);
  };

  _proto.shrinkRow = function shrinkRow(key) {
    this._expandShrinkRows([key], false, false);
  };

  _proto.shrinkRows = function shrinkRows(keys) {
    this._expandShrinkRows(keys, false, false);
  };

  _proto.expandRow = function expandRow(key) {
    this._expandShrinkRows([key], true, false);
  };

  _proto.selectRow = function selectRow(key) {
    this._selectUnselectRows([key], true, false);
  };

  _proto.unselectRow = function unselectRow(key) {
    this._selectUnselectRows([key], false, false);
  };

  _proto.unselectRows = function unselectRows(keys) {
    this._selectUnselectRows(keys, false, false);
  }
  /**
   * @brief get the checked data
   * @return {Array}
   */
  ;

  _proto.getCheckedData = function getCheckedData() {
    var _this3 = this;

    var rowKey = this.get('rowKey');
    var checkType = this.get('checkType');
    var ret = [];

    if (checkType === 'checkbox') {
      var checkedKeys = this.get('checkedKeys');
      var checkedKeysMap = {};

      _forEachInstanceProperty(checkedKeys).call(checkedKeys, function (item) {
        checkedKeysMap[item] = true;
      });

      this._breakForEach(function (value, index) {
        var key = rowKey.call(_this3, value, index);

        if (checkedKeysMap[key]) {
          ret.push(value);
        }
      });
    } else if (checkType === 'radio') {
      var checkedKey = this.get('checkedKey');

      this._breakForEach(function (value, index) {
        var key = rowKey.call(_this3, value, index);

        if (key === checkedKey) {
          ret.push(value);
          return true;
        }
      });
    }

    return ret;
  };

  _proto.getSelectedData = function getSelectedData() {
    var _this4 = this;

    var _this$get7 = this.get(),
        rowKey = _this$get7.rowKey,
        rowSelectable = _this$get7.rowSelectable,
        selectedKeys = _this$get7.selectedKeys;

    var ret = [];

    if (rowSelectable) {
      var map = {};

      _forEachInstanceProperty(selectedKeys).call(selectedKeys, function (key) {
        return map[key] = true;
      });

      this._breakForEach(function (value, index) {
        if (map[rowKey.call(_this4, value, index)]) {
          ret.push(value);
        }
      });
    }

    return ret;
  };

  _proto.exportTable = /*#__PURE__*/function () {
    var _exportTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(data, filename) {
      var _this5 = this,
          _context4;

      var instance, download, collection, ignoreCheck, push, content;
      return _regeneratorRuntime.wrap(function _callee$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (filename === void 0) {
                filename = 'table';
              }

              instance = this;

              if (data) {
                instance = new this.constructor(_Object$assign({}, this.get(), {
                  data: data
                }));

                instance._initMountedQueue();

                instance.init(null, this.vNode);

                instance._triggerMountedQueue();
              } // in webpack 1, it doesn't support dynamic import
              // we must handle this file by babel-loader and sepcify plugin `dynamic-webpack-import`
              // #304


              _context5.next = 5;
              return import('downloadjs');

            case 5:
              download = _context5.sent;

              // in webpack 4, we need to access the default property to get the value of module.exports
              if (download.default) {
                download = download.default;
              }

              collection = [];
              ignoreCheck = instance.get('checkType') !== 'none';

              push = function push(item) {
                // ignore non-element node
                if (item.nodeType !== 1) return; // ignore expand row

                if (item.className === 'k-expand') return;
                var row = [];
                var children = item.children;
                var length = children.length;

                for (var i = 0; i < length; i++) {
                  // ignore check column
                  if (ignoreCheck && i === 0) continue;
                  var child = children[i]; // ignore the ignored column

                  if (child.dataset.ignore !== undefined) continue;
                  var text = void 0; // find the firstChild's dataset.text as text

                  var firstChild = child.firstChild;

                  if (firstChild && firstChild.tagName === 'INTACT-CONTENT') {
                    // for angular
                    firstChild = firstChild.firstChild;
                  }

                  while (firstChild) {
                    if (firstChild.nodeType === 1) break;
                    firstChild = firstChild.nextSibling;
                  }

                  if (firstChild) {
                    text = firstChild.dataset.text;
                  }

                  if (!text) {
                    var _context3;

                    text = _trimInstanceProperty(_context3 = child.textContent).call(_context3);
                  }

                  row.push(_this5._escapeCSV(text));
                }

                collection.push(row.join(','));
              };

              _forEachInstanceProperty(_context4 = instance.header.querySelectorAll('tr')).call(_context4, push); // ignore nested table


              each(instance.table.children[1].children, push);
              content = collection.join('\r\n');
              download("\uFEFF" + content, filename + '.csv', 'text/comma-separated-values;charset=utf-8');

              if (data) {
                instance.destroy();
              }

              return _context5.abrupt("return", content);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee, this);
    }));

    function exportTable(_x, _x2) {
      return _exportTable.apply(this, arguments);
    }

    return exportTable;
  }()
  /**
   * @brief scroll to the row by index
   *
   * @param index
   */
  ;

  _proto.scrollToRowByIndex = function scrollToRowByIndex(index) {
    var _this6 = this;

    var trs = this.element.querySelectorAll(".k-tbody tr:nth-child(" + (index + 1) + ")");

    if (trs.length) {
      this._lockScrollEvent = true;
      var promises = [];

      var _loop = function _loop(i) {
        promises.push(new _Promise(function (resolve) {
          var elem = trs[i];
          var parent = elem.closest('.k-tbody'); // we can not use scrollIntoView with smooth, because if can only operate one element
          // at the same time
          // elem.scrollIntoView({behavior: 'smooth'});

          var scrollTop = parent.scrollTop;
          var offsetTop = elem.offsetTop + 1;
          var top = offsetTop - scrollTop;
          var topOneFrame = top / 60 / (100 / 1000);

          var step = function step() {
            scrollTop = Math[topOneFrame < 0 ? 'max' : 'min'](scrollTop + topOneFrame, offsetTop);
            parent.scrollTop = scrollTop;

            if (!_this6.destroyed && scrollTop !== offsetTop) {
              requestAnimationFrame(step);
            } else {
              resolve();
            }
          };

          requestAnimationFrame(step);
        }));
      };

      for (var i = 0; i < trs.length; i++) {
        _loop(i);
      }

      _Promise.all(promises).then(function () {
        _this6._lockScrollEvent = false;
      });
    }
  }
  /**
   * @brief scroll to the row by key
   *
   * @param key
   */
  ;

  _proto.scrollToRowByKey = function scrollToRowByKey(key) {
    var _this7 = this;

    var _this$get8 = this.get(),
        rowKey = _this$get8.rowKey;

    this._breakForEach(function (value, index) {
      if (rowKey.call(_this7, value, index) === key) {
        _this7.scrollToRowByIndex(index);

        return true;
      }
    });
  };

  _proto._escapeCSV = function _escapeCSV(str) {
    return '"' + String(str).replace(/"/g, '""') + '"';
  };

  _proto._breakForEach = function _breakForEach(cb) {
    var childrenKey = this.get('childrenKey');
    var data = this.get('data');

    if (!childrenKey) {
      return _findInstanceProperty(data).call(data, cb);
    }

    var index = -1;

    var loop = function loop(data) {
      _findInstanceProperty(data).call(data, function (value) {
        index++;
        var ret = cb(value, index);
        if (ret === true) return true;

        if (_Array$isArray(value[childrenKey])) {
          loop(value[childrenKey]);
        }
      });
    };

    loop(data);
  };

  _proto._toggleSpreadRow = function _toggleSpreadRow(key, e) {
    e.stopPropagation();
    var spreadKeys = toggleArray(this.get('spreadKeys'), key);
    this.set({
      spreadKeys: spreadKeys
    });
  };

  _proto._calcHeaderPadding = function _calcHeaderPadding() {
    if (this.get('fixHeader')) {
      var tableHeight = this.table.offsetHeight;
      var containerHeight = this.scroll.offsetHeight;
      this.set('_padding', tableHeight > containerHeight ? this.get('_scrollBarWidth') : 0);
    }
  };

  _proto._checkTableWidth = function _checkTableWidth(isMount) {
    this._checkTableColumnMinWidth();

    if (this.get('resizable')) {
      var tableWidth = this.table.offsetWidth;
      var containerWidth = this.scroll.clientWidth;

      if (tableWidth < containerWidth) {
        // this.tableWidth = containerWidth + 'px';
        this.tableWidth = isMount ? '100%' : containerWidth + 'px';
        this.update();

        this._storeWidth();
      }
    }
  };

  _proto._checkTableColumnMinWidth = function _checkTableColumnMinWidth(isStop) {
    // TODO: check width when table expands
    var shouldUpdate = false;

    for (var key in this._columns) {
      var column = this._columns[key];
      var minWidth = column.get('minWidth');

      if (minWidth) {
        var width = column.element.offsetWidth;

        if (width < minWidth) {
          this.headerWidthMap[key] = minWidth;
          shouldUpdate = true;
        }
      }
    }

    if (shouldUpdate) {
      this.update(); // check again because it may affect other columns

      if (!isStop) {
        // only check one more time, because sometimes we can not fix the width of column, #473
        this._checkTableColumnMinWidth(true);
      }
    }
  };

  _proto._excludeStickHeader = function _excludeStickHeader(_ref) {
    var offsetTop = _ref.offsetTop;

    var _this$element$getBoun = this.element.getBoundingClientRect(),
        bottom = _this$element$getBoun.bottom;

    return bottom <= offsetTop;
  };

  _proto._shouldStickScrollbar = function _shouldStickScrollbar(_ref2) {
    var offsetBottom = _ref2.offsetBottom,
        viewportHeight = _ref2.viewportHeight;

    var _this$element$getBoun2 = this.element.getBoundingClientRect(),
        top = _this$element$getBoun2.top,
        bottom = _this$element$getBoun2.bottom;

    var p = viewportHeight - offsetBottom;

    if (bottom >= p && top < p) {
      this.set('_stickyScrollbarStyle', undefined); // update scrollLeft, because it can not be updated when it is hidden

      this.refs.scrollbar.scrollLeft = this.scrollLeft;
      return true;
    } else {
      this.set('_stickyScrollbarStyle', {
        display: 'none'
      });
      return false;
    }
  };

  _proto._setFixedColumnWidth = function _setFixedColumnWidth() {
    var hasFixed = this.hasFixedLeft || this.hasFixedRight; // when stick scrollbar, we also update the _tableWidth

    if (hasFixed || this.get('_isStickyScrollbar')) {
      var data = {};
      var tableWidth = this.table.offsetWidth; // update table width firstly

      this.set('_tableWidth', tableWidth);

      if (hasFixed) {
        var type = this.get('type');
        var borderWidth = 0;

        if (type === 'border' || type === 'grid') {
          borderWidth = 1;
        }

        if (this.hasFixedLeft) {
          var _context6;

          var width = _reduceInstanceProperty(_context6 = this.leftColumns).call(_context6, function (memo, elem) {
            return memo + elem.offsetWidth + borderWidth;
          }, 0);

          data._leftWidth = width;
        }

        if (this.hasFixedRight) {
          var _context7;

          var _width = _reduceInstanceProperty(_context7 = this.rightColumns).call(_context7, function (memo, elem) {
            return memo + elem.offsetWidth + borderWidth;
          }, 0);

          data._rightWidth = _width + this.get('_padding');
        } // calculate the horizontal scroll bar


        var paddingBottom = 0;
        var isShowLeftRightMiddle = false;

        if (this.element.offsetWidth < tableWidth + this.get('_padding')) {
          paddingBottom = this.get('_scrollBarWidth');
          isShowLeftRightMiddle = true;
        }

        data._paddingBottom = paddingBottom;
        data._isShowLeftRightMiddle = isShowLeftRightMiddle;
        this.set(data);
      }
    }
  };

  _proto._updateDisabledKeys = function _updateDisabledKeys() {
    var _this8 = this;

    var disabledKeys = [];
    var enabledKeys = [];

    var _this$get9 = this.get(),
        disableRow = _this$get9.disableRow,
        rowKey = _this$get9.rowKey;

    this._breakForEach(function (item, index) {
      var key = rowKey.call(_this8, item, index);

      if (disableRow.call(_this8, item, index)) {
        disabledKeys.push(key);
      } else {
        enabledKeys.push(key);
      }
    });

    this.set({
      _disabledKeys: disabledKeys,
      _enabledKeys: enabledKeys
    }, {
      silent: true
    });
  };

  _proto._toggleCheckAll = function _toggleCheckAll(e) {
    if (e.target.checked) {
      this.checkAll();
    } else {
      this.uncheckAll();
    }
  };

  _proto._clickRow = function _clickRow(value, index, key, e) {
    // if is from checkbox or radio then do nothing
    if (e.target.tagName.toLowerCase() === 'input') return; // in chrome of macos, the target is input's parent element
    // maybe beacause input's opacity is 0

    var children = e.target.children;
    if (children[0] && children[0].tagName.toLowerCase() === 'input') return;
    if (this.get('disableRow').call(this, value, index)) return;

    if (this.get('rowCheckable')) {
      this._checkUncheckRows([key]);
    }

    if (this.get('rowExpandable')) {
      this._expandShrinkRows([key]);
    }

    if (this.get('rowSelectable')) {
      this._selectUnselectRows([key]);
    }

    this.trigger('click:row', value, index, key, e);
  };

  _proto._checkUncheckRows = function _checkUncheckRows(keys, isCheck, isToggle) {
    if (isCheck === void 0) {
      isCheck = false;
    }

    if (isToggle === void 0) {
      isToggle = true;
    }

    var checkType = this.get('checkType');

    if (checkType === 'checkbox') {
      var checkedKeys = this.get('checkedKeys'); // .slice(0);

      var shouldSet = false;

      _forEachInstanceProperty(keys).call(keys, function (key) {
        var i = _indexOfInstanceProperty(checkedKeys).call(checkedKeys, key);

        if ((!isCheck || isToggle) && i > -1) {
          if (!shouldSet) checkedKeys = _sliceInstanceProperty(checkedKeys).call(checkedKeys, 0);

          _spliceInstanceProperty(checkedKeys).call(checkedKeys, i, 1);

          shouldSet = true;
        } else if ((isCheck || isToggle) && i < 0) {
          if (!shouldSet) checkedKeys = _sliceInstanceProperty(checkedKeys).call(checkedKeys, 0);
          checkedKeys.push(key);
          shouldSet = true;
        }
      });

      if (shouldSet) {
        this.set('checkedKeys', checkedKeys);
      }
    } else if (checkType === 'radio') {
      var key = keys[0];

      if (!isToggle) {
        // isToggle is false means call this by checkRow & uncheckRow
        if (isCheck) {
          this.set('checkedKey', key);
        } else if (this.get('checkedKey') === key) {
          // only change it when we uncheck the checked row
          this.set('checkedKey', undefined);
        }
      } else {
        this.set('checkedKey', key);
      }
    }
  };

  _proto._expandShrinkRows = function _expandShrinkRows(keys, isExpand, isToggle) {
    var _context8;

    if (isExpand === void 0) {
      isExpand = false;
    }

    if (isToggle === void 0) {
      isToggle = true;
    }

    if (!this.get('_blocks.expand')) return;

    var expandedKeys = _sliceInstanceProperty(_context8 = this.get('expandedKeys')).call(_context8, 0);

    var shouldSet = false;

    _forEachInstanceProperty(keys).call(keys, function (key) {
      var i = _indexOfInstanceProperty(expandedKeys).call(expandedKeys, key);

      if ((!isExpand || isToggle) && i > -1) {
        _spliceInstanceProperty(expandedKeys).call(expandedKeys, i, 1);

        shouldSet = true;
      } else if (isExpand || isToggle) {
        expandedKeys.push(key);
        shouldSet = true;
      }
    });

    if (shouldSet) {
      this.set('expandedKeys', expandedKeys);
    }
  };

  _proto._selectUnselectRows = function _selectUnselectRows(keys, isSelect, isToggle) {
    var _context9;

    if (isSelect === void 0) {
      isSelect = false;
    }

    if (isToggle === void 0) {
      isToggle = true;
    }

    var selectedKeys = _sliceInstanceProperty(_context9 = this.get('selectedKeys')).call(_context9, 0);

    var rowSelectable = this.get('rowSelectable');
    var shouldSet = false;

    _forEachInstanceProperty(keys).call(keys, function (key) {
      var i = _indexOfInstanceProperty(selectedKeys).call(selectedKeys, key);

      if (rowSelectable === 'multiple') {
        if ((!isSelect || isToggle) && i > -1) {
          _spliceInstanceProperty(selectedKeys).call(selectedKeys, i, 1);

          shouldSet = true;
        } else if (isSelect || isToggle) {
          selectedKeys.push(key);
          shouldSet = true;
        }
      } else if (rowSelectable) {
        if ((!isSelect || isToggle) && i > -1) {
          selectedKeys = [];
          shouldSet = true;
        } else if (isSelect || isToggle) {
          selectedKeys = [key];
          shouldSet = true;
        }
      }
    });

    if (shouldSet) {
      this.set({
        selectedKeys: selectedKeys
      });
    }
  }
  /**
   * //-
   * if update, the Row may be destroyed, and it will update table on each Row destroyed
   * so we collect all the Rows and do it once. #407
   */
  ;

  _proto._onRowDestroyed = function _onRowDestroyed(key) {
    if (this._willDestroy) return;

    this._allDestroyedRows.push(key);
  };

  _proto._update = function _update() {
    var keys = this._allDestroyedRows;

    if (keys.length) {
      this.shrinkRows(keys);

      if (this.get('removeCheckedKeyOnRowDestroyed')) {
        this.uncheckRows(keys);
      }

      this.unselectRows(keys);
      this._allDestroyedRows = [];
    }
  }
  /* -// */
  ;

  _proto._sort = function _sort(key, value) {
    var sort = _Object$assign({}, this.get('sort'));

    sort.key = key;
    sort.type = sort.type === 'desc' ? 'asc' : 'desc';
    this.set('sort', sort);
  };

  _proto._dragStart = function _dragStart(vNode, e) {
    // left mouse key
    if (e.which !== 1) return;
    this._resizing = true;
    this._containerWidth = this.scroll.clientWidth; // element.offsetWidth;

    this._x = e.clientX; // find previous node but it is not hidden, #467

    var prevVNode = vNode;
    var prevTh;

    do {
      prevVNode = prevVNode.props.prevVNode;
      prevTh = prevVNode.dom;
    } while (window.getComputedStyle(prevTh).display === 'none');

    var prevProps = prevVNode.props;
    this._minWidth = prevProps.minWidth || this.get('minColWidth');
    var currentTh = vNode.dom;
    this._currentTh = currentTh;
    this._prevTh = prevTh;
    this._currentVNode = vNode;
    this._prevVNode = prevVNode; // this._isLastTh = !currentTh.nextElementSibling;

    document.addEventListener('mousemove', this._move);
    document.addEventListener('mouseup', this._dragEnd);
  };

  _proto._move = function _move(e) {
    e.preventDefault();
    this._dragged = true;

    if (this._resizing) {
      var delX = e.clientX - this._x;
      if (delX === 0) return;
      var prevWidth = this._prevTh.offsetWidth + delX;
      var currentWidth = this._currentTh.offsetWidth - delX;
      var tableWidth = this.table.offsetWidth + delX;

      var _padding = this.get('_padding');

      if (prevWidth < this._minWidth && delX < 0) return;
      var currentKey = this._currentVNode.key;
      var prevKey = this._prevVNode.key;
      this.headerWidthMap[prevKey] = prevWidth;
      this._x = e.clientX;

      if (this._containerWidth > tableWidth + _padding) {
        // if (this._isLastTh) {
        // this.headerWidthMap[currentKey] = 'auto';
        // } else {
        this.headerWidthMap[currentKey] = currentWidth; // }
        // } else if (this._containerWidth === tableWidth + _padding) {
        // this.tableWidth = '100%';
      } else {
        this.tableWidth = tableWidth + 'px';
      }

      this.update(); // should update fixed column table's width

      this._setFixedColumnWidth();
    }
  };

  _proto._dragEnd = function _dragEnd(e) {
    if (this._resizing) {
      this._resizing = false;
      document.removeEventListener('mousemove', this._move);
      document.removeEventListener('mouseup', this._dragEnd);

      this._storeWidth();
    }
  };

  _proto._onWindowResize = function _onWindowResize() {
    // this._resizeTableWhenDragable();
    this._setFixedColumnWidth();
  } // _resizeTableWhenDragable() {
  // if (!this._dragged) return;
  // this._containerWidth = this.element.offsetWidth;
  // this._tables = [this.table];
  // if (this.get('fixHeader')) {
  // this._tables = [this.header, this.scroll];
  // }
  // const tableWidth = this._tables[0].offsetWidth;
  // if (this._containerWidth > tableWidth) {
  // this._tables.forEach(table => {
  // table.style.width = '100%';
  // });
  // }
  // }
  ;

  _proto._getHeaderWidth = function _getHeaderWidth(key) {
    var width = this.headerWidthMap[key];
    if (width === 'auto') return width;
    if (width) return width + 'px';
  };

  _proto._onTBodyScroll = function _onTBodyScroll(e) {
    if (this._lockScrollEvent) return;
    var target = e.target;
    var hasFixed = this.hasFixedLeft || this.hasFixedRight;
    var isScroll;
    var isScrollbar;

    if ((isScroll = target === this.scroll) || (isScrollbar = target === this.refs.scrollbar)) {
      var oldScrollLeft = this.scrollLeft;
      var newScrollLeft = target.scrollLeft;

      if (newScrollLeft !== oldScrollLeft) {
        this.scrollLeft = newScrollLeft; // handle the header scrollLeft directly for performace

        this.header.scrollLeft = newScrollLeft;

        if (isScroll) {
          if (this.refs.scrollbar) {
            this.refs.scrollbar.scrollLeft = newScrollLeft;
          }
        } else {
          this.scroll.scrollLeft = newScrollLeft;
        }

        if (!hasFixed) return;
        var maxScroll = target.scrollWidth - target.offsetWidth;
        return this.set({
          '_scrollPosition': newScrollLeft === 0 ? 'left' : newScrollLeft >= maxScroll ? 'right' : 'middle'
        });
      }
    }

    if (!hasFixed) return;
    var oldScrollTop = this.scrollTop;
    var newScrollTop = target.scrollTop;

    if (oldScrollTop !== newScrollTop) {
      this.scrollTop = newScrollTop;
      var tables = [this.scroll];

      if (this.hasFixedLeft) {
        tables.push(this.leftFixedScroll);
      }

      if (this.hasFixedRight) {
        tables.push(this.rightFixedScroll);
      }

      _forEachInstanceProperty(tables).call(tables, function (table) {
        if (table !== target) {
          table.scrollTop = newScrollTop;
        }
      });
    }
  }
  /**
   * handle dom directly for performance, #310
   *
   * @modify
   * We can not handle dom directly, because it may be wrapped with Tooltip
   * and it will modify className when the tip layer shows or hides. This will
   * overwrite the className
   */
  ;

  _proto._onRowEnter = function _onRowEnter(index, e) {
    // const start = performance.now();
    this.set('_hoverIndex', index); // console.log('hover: ', performance.now() - start);
  };

  _proto._onRowLeave = function _onRowLeave(e) {
    this.set('_hoverIndex', undefined);
  };

  _proto._onChangeChecked = function _onChangeChecked(key, value) {
    this._checkUncheckRows([key], value, false);
  };

  _proto._onChangeGroup = function _onChangeGroup(key, c, v) {
    var _Object$assign2;

    var group = this.get('group') || {};
    group = _Object$assign({}, group, (_Object$assign2 = {}, _Object$assign2[key] = v, _Object$assign2));
    this.set({
      group: group
    });
  };

  _proto._destroy = function _destroy() {
    this._dragEnd();

    window.removeEventListener('resize', this._onWindowResize);

    if (this.ro) {
      this.ro.disconnect();
    }
  };

  _proto.destroy = function destroy() {
    var _Intact$prototype$des, _context10;

    this._willDestroy = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Intact$prototype$des = _Intact.prototype.destroy).call.apply(_Intact$prototype$des, _concatInstanceProperty(_context10 = [this]).call(_context10, args));
  };

  _createClass(BaseTable, [{
    key: "template",
    get: function get() {
      return template;
    }
  }]);

  return BaseTable;
}(Intact), _defineProperty(_class2, "blocks", ['no-data', 'expand', 'tooltip']), _defineProperty(_class2, "propTypes", {
  data: Array,
  scheme: Object,
  checkType: ['checkbox', 'radio', 'none'],
  noDataTemplate: [String, Intact.VNode, Object],
  fixHeader: [Boolean, String, Number],
  stickHeader: [Boolean, String, Number],
  stickScrollbar: [Boolean, String, Number],
  rowKey: Function,
  checkedKeys: Array,
  checkedKey: [String, Number],
  resizable: Boolean,
  rowCheckable: Boolean,
  rowClassName: Function,
  disableRow: Function,
  rowExpandable: Boolean,
  expandedKeys: Array,
  type: ['default', 'border', 'grid'],
  sort: Object,
  group: Object,
  minColWidth: Number,
  loading: Boolean,
  container: [Function, String],
  stripe: Boolean,
  rowSelectable: [Boolean, 'single', 'multiple'],
  selectedKeys: Array,
  defaultWidth: String,
  defaultWidthMap: Object,
  storeWidth: String,
  merge: Function,
  tooltipPosition: TooltipContent.propTypes.position,
  childrenKey: String,
  indent: Number,
  spreadKeys: Array,
  draggable: Boolean,
  removeCheckedKeyOnRowDestroyed: Boolean
}), _defineProperty(_class2, "events", {
  'click:row': true,
  changeWidth: true
}), _temp), (_applyDecoratedDescriptor(_class.prototype, "template", [_dec], _Object$getOwnPropertyDescriptor(_class.prototype, "template"), _class.prototype)), _class));
export { BaseTable as default };