import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _Array$from from "@babel/runtime-corejs3/core-js/array/from";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js/instance/find";
import _Set from "@babel/runtime-corejs3/core-js/set";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _applyDecoratedDescriptor from "@babel/runtime-corejs3/helpers/applyDecoratedDescriptor";

var _dec, _class, _init, _class2, _temp;

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';
import template from './index.vdt';
import '../../styles/kpc.css';
import './index.css';
import Node from './node';
import { debounce, expandAnimationCallbacks } from '../utils';
import { BEFORE, AFTER, INNER, RANGE } from './constants';
var Tree = (_dec = Intact.template(), (_class = (_temp = _class2 = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(Tree, _Intact);

  var _super = _createSuper(Tree);

  function Tree() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = Tree.prototype;

  _proto.defaults = function defaults() {
    return {
      data: undefined,
      expandedKeys: undefined,
      checkbox: false,
      checkedKeys: undefined,
      load: undefined,
      filter: undefined,
      selectedKeys: undefined,
      multiple: false,
      draggable: false,
      allowDrag: undefined,
      allowDrop: undefined,
      uncorrelated: false,
      selectable: true,
      defaultExpandAll: false
    };
  };

  _proto._init = function _init() {
    var _this = this;

    this.checkedKeys = new _Set();
    this.expandedKeys = new _Set();
    this.selectedKeys = new _Set();
    this.root = Node.createNode({
      children: this.get('data')
    }, null, this);
    this.on('$receive:checkedKeys', function () {
      _this.checkedKeys = new _Set(_this.get('checkedKeys'));
    });
    this.on('$receive:expandedKeys', function () {
      _this.expandedKeys = new _Set(_this.get('expandedKeys'));
    });
    this.on('$receive:selectedKeys', function () {
      _this.selectedKeys = new _Set(_this.get('selectedKeys'));
    }); // re-mapping keys

    var keys = ['checkedKeys', 'data', 'filter', 'uncorrelated'];
    this.on('$receive', function (c, changedKeys) {
      if (_findInstanceProperty(keys).call(keys, function (key) {
        return _indexOfInstanceProperty(changedKeys).call(changedKeys, key) > -1;
      })) {
        _this._mappingKeys();
      }

      if (!_this.rendered && _this.get('defaultExpandAll') && _indexOfInstanceProperty(changedKeys).call(changedKeys, 'data') > -1) {
        _this.expandAll();
      }
    });
    this._handleDragOver = debounce(this._handleDragOver, 300); // add transitionEnd event

    this.expandAnimationCallbacks = _Object$assign({}, expandAnimationCallbacks);
    var leaveEnd = expandAnimationCallbacks['ev-a:leaveEnd'];
    var enterEnd = expandAnimationCallbacks['ev-a:enterEnd'];

    this.expandAnimationCallbacks['ev-a:leaveEnd'] = function (el, isCancel) {
      _this.trigger('transitionEnd');

      leaveEnd(el, isCancel);
    };

    this.expandAnimationCallbacks['ev-a:enterEnd'] = function (el, isCancel) {
      enterEnd(el, isCancel);

      _this.trigger('transitionEnd');
    };
  };

  _proto.expandAll = function expandAll() {
    var _this$get = this.get(),
        load = _this$get.load;

    var keys = [];

    var loop = function loop(children) {
      for (var i = 0; i < children.length; i++) {
        var node = children[i];

        if (!load || node.loaded) {
          keys.push(node.key);
        }

        if (node.children) {
          loop(node.children);
        }
      }
    };

    loop(this.root.children);
    this.set('expandedKeys', keys);
    this.expandedKeys = new _Set(keys);
  };

  _proto._mappingKeys = function _mappingKeys() {
    var needRecheckNodes = [];
    this.root.children = Node.createNodes(this.get('data'), this.root, this, needRecheckNodes);

    _forEachInstanceProperty(needRecheckNodes).call(needRecheckNodes, function (node) {
      return node.updateUpward();
    });
  };

  _proto._toggleExpand = /*#__PURE__*/function () {
    var _toggleExpand2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(node, expanded, e) {
      var _this$get2, load, children;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // we can also expand or shrink disabled node
              // if (node.data.disabled) return;
              _this$get2 = this.get(), load = _this$get2.load;

              if (!(load && !expanded && !node.loaded)) {
                _context.next = 9;
                break;
              }

              node.loaded = false;
              this.update();
              _context.next = 6;
              return load(node);

            case 6:
              children = _context.sent;
              node.loaded = true;

              if (children) {
                node.append(children);
              }

            case 9:
              if (expanded) {
                this.shrink(node.key);
              } else {
                this.expand(node.key);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _toggleExpand(_x, _x2, _x3) {
      return _toggleExpand2.apply(this, arguments);
    }

    return _toggleExpand;
  }();

  _proto._toggleCheck = function _toggleCheck(node, e) {
    e.preventDefault();
    e.stopPropagation();
    node.updateDownward(!node.checked);
    node.updateUpward();
    this.set('checkedKeys', _Array$from(this.checkedKeys));
  };

  _proto.toggleSelect = function toggleSelect(key) {
    var selectedKeys = this.selectedKeys;
    var multiple = this.get('multiple');

    if (selectedKeys.has(key)) {
      selectedKeys.delete(key);
    } else {
      if (!multiple) {
        selectedKeys.clear();
      }

      selectedKeys.add(key);
    }

    this.set('selectedKeys', _Array$from(selectedKeys));
  };

  _proto._updateCheckedKeys = function _updateCheckedKeys(node) {
    var checkedKeys = this.checkedKeys;

    if (node.checked) {
      checkedKeys.add(node.key);
    } else {
      checkedKeys.delete(node.key);
    }
  };

  _proto.expand = function expand(key, update) {
    if (update === void 0) {
      update = true;
    }

    if (key === this.root.key) return;
    var expandedKeys = this.expandedKeys;
    expandedKeys.add(key); // babel can not spread Set by `...` syntax in loose mode
    // use Array.from instead of

    this.set('expandedKeys', _Array$from(expandedKeys), {
      update: update
    });
  };

  _proto.shrink = function shrink(key, update) {
    if (update === void 0) {
      update = true;
    }

    if (key === this.root.key) return;
    var expandedKeys = this.expandedKeys;
    expandedKeys.delete(key);
    this.set('expandedKeys', _Array$from(expandedKeys), {
      update: update
    });
  };

  _proto.getCheckedData = function getCheckedData(leafOnly) {
    var data = [];

    var loop = function loop(children) {
      for (var i = 0; i < children.length; i++) {
        var node = children[i];

        if (node.checked && (!leafOnly || !node.children)) {
          data.push(node.data);
        }

        if (node.children) {
          loop(node.children);
        }
      }
    };

    loop(this.root.children);
    return data;
  };

  _proto.getSelectedData = function getSelectedData() {
    var data = [];
    var selectedKeys = this.selectedKeys;
    var size = selectedKeys.size;
    if (!size) return data;
    var count = 0;

    var loop = function loop(children) {
      for (var i = 0; i < children.length; i++) {
        var node = children[i];

        if (selectedKeys.has(node.key)) {
          data.push(node.data);
          count++;
        }

        if (count === size) return;

        if (node.children) {
          loop(node.children);
        }
      }
    };

    loop(this.root.children);
    return data;
  };

  _proto._onClick = function _onClick(node, e) {
    if (node.data.disabled) return;

    if (this.get('selectable')) {
      this.toggleSelect(node.key);
    }

    this.trigger('click:node', node, e);
  };

  _proto._onRightClick = function _onRightClick(node, e) {
    if (node.data.disabled) return;
    this.trigger('rightclick:node', node, e);
  };

  _proto._beforeUpdate = function _beforeUpdate(lastVNode, nextVNode) {
    // if there is filter method, we should re-mapping the data
    // to check the filter status
    if (!this.get('filter')) return;
    if (!lastVNode || !nextVNode) return;
    var lastProps = lastVNode.props;
    var nextProps = nextVNode.props; // these props will re-mapping in $receive callback

    if ( // lastProps.data !== nextProps.data ||
    // lastProps.checkedKeys !== nextProps.checkedKeys ||
    _filterInstanceProperty(lastProps) !== _filterInstanceProperty(nextProps) || lastProps.expandedKeys !== nextProps.expandedKeys || lastProps.uncorrelated !== nextProps.uncorrelated) return;

    this._mappingKeys();
  };

  _proto._onDragStart = function _onDragStart(event) {
    event.stopPropagation();
    var node = this._draggingNode;

    var _this$get3 = this.get(),
        allowDrag = _this$get3.allowDrag;

    if (node.data.disabled || allowDrag && !allowDrag(node)) {
      this.trigger('denydrag', node);
      return event.preventDefault();
    } // this.shrink(node.key, false);


    this.set({
      '_draggingNode': node
    });

    try {
      // ie throw error
      // firefox-need-it
      event.dataTransfer.setData('text/plain', '');
    } catch (error) {// empty
    }

    event.dataTransfer.setDragImage(this._draggingDOM, 0, 0);
  };

  _proto._onMouseDown = function _onMouseDown(node, event) {
    // dragend is not dispatched if the source node was moved or removed
    // during the drag session
    // https://bugzilla.mozilla.org/show_bug.cgi?id=460801
    // we can not use mouseup instead, because the event does not trigger
    this._draggingNode = node;
    this._draggingDOM = event.currentTarget;
  };

  _proto._onDragOver = function _onDragOver(node, event) {
    event.preventDefault(); // if the mouse does not move, do nothing

    var clientX = event.clientX,
        clientY = event.clientY;
    var _clientX = this._clientX,
        _clientY = this._clientY;
    if (clientX === _clientX && clientY === _clientY) return;
    this._clientX = clientX;
    this._clientY = clientY; // when use debounce, the currentTarget will be missing when disable delegate
    // so we pass it as parameter

    this._handleDragOver(node, event, event.currentTarget);
  };

  _proto._handleDragOver = function _handleDragOver(node, event, currentTarget) {
    var draggingNode = this.get('_draggingNode'); // maybe it is end

    if (!draggingNode) return;
    var parentNode = node;

    do {
      if (parentNode.key === draggingNode.key) return;
    } while (parentNode = parentNode.parent);

    var _node = this._node,
        _mode = this._mode;

    var mode = this._calcInsertMode(event, currentTarget);

    if (_mode !== mode || _node !== node) {
      this._mode = mode;
      this._node = node; // if this node does not allow drop, prevent to insert the dragging node inner it

      if (mode === INNER) {
        var _this$get4 = this.get(),
            allowDrop = _this$get4.allowDrop;

        if (node.data.disabled || allowDrop && !allowDrop(node)) {
          return this.trigger('denydrop', node);
        }
      }

      this._lastValidNode = node;
      draggingNode.remove(true);

      this._insertNode(node, draggingNode, mode);
    }
  };

  _proto._calcInsertMode = function _calcInsertMode(event, currentTarget) {
    var clientY = event.clientY;

    var _currentTarget$getBou = currentTarget.getBoundingClientRect(),
        top = _currentTarget$getBou.top,
        bottom = _currentTarget$getBou.bottom,
        height = _currentTarget$getBou.height;

    var des = height * RANGE;
    if (clientY <= top + des) return BEFORE;else if (clientY >= bottom - des) return AFTER;
    return INNER;
  };

  _proto._insertNode = function _insertNode(node, draggingNode, mode) {
    switch (mode) {
      case BEFORE:
        draggingNode.insertBefore(node);
        break;

      case AFTER:
        draggingNode.insertAfter(node);
        break;

      default:
        draggingNode.appendTo(node);
        break;
    }
  };

  _proto._onDragEnd = function _onDragEnd() {
    var _this$get5 = this.get(),
        _draggingNode = _this$get5._draggingNode;

    if (this._lastValidNode) {
      this.trigger('dragend', {
        tree: this.root,
        srcNode: _draggingNode,
        toNode: this._lastValidNode,
        mode: this._mode
      });
    }

    this._draggingDOM = null;
    this._draggingNode = null;
    this._node = null;
    this._mode = null;
    this._lastValidNode = null;
    this.set('_draggingNode', undefined);
  };

  return Tree;
}(Intact), _defineProperty(_class2, "template", template), _defineProperty(_class2, "blocks", ['label']), _defineProperty(_class2, "propTypes", {
  data: Array,
  expandedKeys: Array,
  checkedKeys: Array,
  checkbox: Boolean,
  load: Function,
  filter: Function,
  selectedKeys: Array,
  multiple: Boolean,
  draggable: Boolean,
  allowDrag: Function,
  allowDrop: Function,
  uncorrelated: Boolean,
  selectable: Boolean,
  defaultExpandAll: Boolean
}), _defineProperty(_class2, "events", {
  'rightclick:node': true,
  'click:node': true,
  'denydrag': true,
  'denydrop': true,
  'dragend': true,
  'transitionEnd': true
}), _temp), (_applyDecoratedDescriptor(_class, "template", [_dec], (_init = _Object$getOwnPropertyDescriptor(_class, "template"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class)), _class));
export { Tree as default };
export { Tree };