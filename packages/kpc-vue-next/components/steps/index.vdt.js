import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Step from './step';
import { getRestProps } from '../utils';
export default function (obj, _Vdt, blocks, $callee) {
  var _classNameObj, _context;

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
      value = _self$get.value,
      style = _self$get.style,
      status = _self$get.status,
      type = _self$get.type,
      clickable = _self$get.clickable;

  var classNameObj = (_classNameObj = {
    'k-steps c-clearfix': true
  }, _classNameObj["k-" + type] = true, _classNameObj['k-clickable'] = clickable, _classNameObj);
  var stepIndex = 0;

  var steps = _filterInstanceProperty(_context = _Array$isArray(children) ? children : [children]).call(_context, function (vNode) {
    if (vNode && vNode.tag === Step) {
      var props = vNode.props = _Object$assign({}, vNode.props, {
        index: stepIndex
      });

      if (value == stepIndex) {
        props.selected = true;

        if (status === 'error') {
          props.error = true;
        }
      } else if (value > stepIndex) {
        var _context2;

        props.done = true;
        props['ev-click'] = _bindInstanceProperty(_context2 = self._changeIndex).call(_context2, self, stepIndex);
      }

      stepIndex++;
      vNode.$ = true;
      return true;
    }

    return false;
  }); // add width


  steps = _mapInstanceProperty(steps).call(steps, function (vNode) {
    vNode.props.width = 100 / stepIndex + '%';
    return vNode;
  });
  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), function () {
    try {
      return steps;
    } catch (e) {
      _e(e);
    }
  }.call($this), _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}