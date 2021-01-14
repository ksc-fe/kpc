import "core-js/modules/es.array.filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
var uniqueId = 0;
var prefix = '__$_';

var Node = /*#__PURE__*/function () {
  function Node(data, checked, parent, key, tree) {
    this.checked = checked;
    this.indeterminate = false;
    this.data = data;
    this.parent = parent;
    this.key = key;
    this.children = undefined;
    this.tree = tree;
    this.loaded = data.loaded === undefined && data.children && data.children.length ? true : data.loaded;
    this.filter = true;
  }

  var _proto = Node.prototype;

  _proto.updateDownward = function updateDownward(checked) {
    this.checked = checked;
    this.indeterminate = false;

    this.tree._updateCheckedKeys(this);

    if (this.tree.get('uncorrelated')) return;
    var children = this.children;

    if (children) {
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.data.disabled) continue;
        child.updateDownward(checked);
      }
    }
  };

  _proto.updateUpward = function updateUpward() {
    if (this.tree.get('uncorrelated')) return;
    var parent = this.parent;
    if (!parent || parent === this.tree.root) return;
    var checkedCount = 0;
    var count = 0;
    var indeterminate;
    var children = parent.children;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.data.disabled) continue;

      if (child.checked) {
        checkedCount++;
      } else if (child.indeterminate) {
        indeterminate = true;
      }

      count++;
    }

    if (!indeterminate) {
      indeterminate = !!(checkedCount && checkedCount < count);
    }

    parent.checked = !!(checkedCount && checkedCount === count);
    parent.indeterminate = indeterminate;

    this.tree._updateCheckedKeys(parent);

    parent.updateUpward();
  };

  _proto.updateFilterUpward = function updateFilterUpward() {
    var parent = this.parent;
    if (!parent || parent === this.tree.root || _filterInstanceProperty(parent)) return;
    parent.filter = true; // auto expand parent

    this.tree.expandedKeys.add(parent.key);
    parent.updateFilterUpward();
  };

  _proto.append = function append(data) {
    var _this = this;

    if (!_Array$isArray(data)) {
      data = [data];
    }

    var children = this.children || (this.children = []);
    var originChildren = this.data.children || (this.data.children = []);
    var needRecheckNodes = [];

    _forEachInstanceProperty(data).call(data, function (item) {
      var node = Node.createNode(item, _this, _this.tree, needRecheckNodes);
      children.push(node);
      originChildren.push(item);
    });

    this.tree.expand(this.key, false);
    this.tree.update();
  };

  _proto.remove = function remove(noUpdate) {
    var siblings = this.parent.children;
    var originSiblings = this.parent.data.children;

    var index = _indexOfInstanceProperty(siblings).call(siblings, this);

    if (!~index) {
      return;
    }

    _spliceInstanceProperty(siblings).call(siblings, index, 1);

    _spliceInstanceProperty(originSiblings).call(originSiblings, index, 1);

    if (noUpdate) return;
    this.updateUpward();
    this.tree.update();
  };

  _proto._insert = function _insert(node, index) {
    var siblings = node.parent.children;
    var originSiblings = node.parent.data.children;
    index = _indexOfInstanceProperty(siblings).call(siblings, node) + index;

    _spliceInstanceProperty(siblings).call(siblings, index, 0, this);

    _spliceInstanceProperty(originSiblings).call(originSiblings, index, 0, this.data);

    this.parent = node.parent;
    this.updateUpward();
    this.tree.update();
  };

  _proto.insertBefore = function insertBefore(node) {
    this._insert(node, 0);
  };

  _proto.insertAfter = function insertAfter(node) {
    this._insert(node, 1);
  };

  _proto.appendTo = function appendTo(node) {
    this.parent = node;
    var children = node.children || (node.children = []);
    var originChildren = node.data.children || (node.data.children = []);
    children.push(this);
    originChildren.push(this.data);
    this.tree.expand(node.key, false);
    this.tree.update();
  };

  return Node;
}();

_defineProperty(Node, "createNode", function (data, parent, tree, needRecheckNodes) {
  var key = data.key == null ? "" + prefix + uniqueId++ : data.key; // if the node has been set to checked
  // we should set its children to checked
  // and recheck the parent to set to checked or indeterminate

  var checkedKeys = tree.checkedKeys;
  var checked = checkedKeys.has(key);
  var needRecheck = false;

  if (parent && !tree.get('uncorrelated')) {
    if (checked && !parent.checked) {
      // need look back
      needRecheck = true;
    } else if (!data.disabled) {
      checked = parent.checked;
    }
  }

  var node = new Node(data, checked, parent, key, tree);

  var _tree$get = tree.get(),
      filter = _filterInstanceProperty(_tree$get);

  if (parent && filter) {
    if (filter.call(tree, data, node)) {
      node.filter = true;
      node.updateFilterUpward();
    } else {
      node.filter = false;
    }
  }

  if (data.children) {
    node.children = Node.createNodes(data.children, node, tree, needRecheckNodes);
  }

  if (needRecheck) {
    needRecheckNodes.push(node);
  }

  return node;
});

_defineProperty(Node, "createNodes", function (data, parent, tree, needRecheckNodes) {
  return _mapInstanceProperty(data).call(data, function (data) {
    return Node.createNode(data, parent, tree, needRecheckNodes);
  });
});

export { Node as default };