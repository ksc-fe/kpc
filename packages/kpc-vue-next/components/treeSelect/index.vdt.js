import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Tree from '../tree';
import { DropdownMenu } from '../dropdown';
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
      data = _self$get.data,
      value = _self$get.value,
      multiple = _self$get.multiple,
      checkbox = _self$get.checkbox,
      _treeCheckedKeys = _self$get._treeCheckedKeys,
      load = _self$get.load,
      filterable = _self$get.filterable,
      defaultExpandAll = _self$get.defaultExpandAll,
      uncorrelated = _self$get.uncorrelated;

  self._initLabels();

  var label = self.label,
      labels = self.labels;
  var Menu = h(DropdownMenu, {
    'ref': function ref(i) {
      widgets['menu'] = i;
    },
    'className': _className(function () {
      try {
        return {
          'k-select-dropdown': true,
          'k-tree-select-dropdown': true
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'children': h(Tree, {
      'data': function () {
        try {
          return data;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'defaultExpandAll': function () {
        try {
          return defaultExpandAll;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'uncorrelated': function () {
        try {
          return uncorrelated;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'checkedKeys': function () {
        try {
          return _treeCheckedKeys;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'multiple': function () {
        try {
          return multiple;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'checkbox': function () {
        try {
          return checkbox;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'selectable': function () {
        try {
          return !checkbox;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ref': function ref(i) {
        widgets['tree'] = i;
      },
      'load': function () {
        try {
          return load;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'filter': function () {
        try {
          return filterable ? self._filter : undefined;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this,
      'selectedKeys': _getModel(self, '_selectedKeys'),
      'ev-$changed:checkedKeys': function () {
        try {
          return self._onCheckedKeysChange;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-click:node': function () {
        try {
          return self._select;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-transitionEnd': function () {
        try {
          return self._refreshPosition;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'ev-$change:selectedKeys': function ev$changeSelectedKeys(__c, __n) {
        _setModel(self, '_selectedKeys', __n, $this);
      }
    }),
    '_context': $this,
    'ev-$changed:value': function () {
      try {
        return self._position;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-$change:value': function () {
      try {
        return self._onChangeShow;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  });
  return function () {
    var _obj = {
      'Menu': function () {
        try {
          return Menu;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'labelObj': function () {
        try {
          return {
            label: label,
            labels: labels
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)
    };
    return parent.call($this, _obj, _Vdt, blocks, parent);
  }.call($this);
}