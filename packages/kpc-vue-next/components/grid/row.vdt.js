import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Col from './col';
import { mapChildren, getRestProps } from '../utils';
import gutterStyle from './utils';
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
      className = _self$get.className,
      style = _self$get.style,
      justify = _self$get.justify,
      align = _self$get.align;

  var useFlex = self.useFlex;

  var gutter = self._getGutter();

  var hasGutter = gutter > 0;

  if (hasGutter) {
    style = gutterStyle(gutter, style);
  }

  var classNameObj = (_classNameObj = {
    'k-row': true
  }, _classNameObj[className] = className, _classNameObj['k-gutter'] = hasGutter, _classNameObj['k-flex'] = useFlex, _classNameObj["k-justify-" + justify] = justify, _classNameObj["k-align-" + align] = align, _classNameObj);
  /* if (Array.isArray(children)) { */

  /* // order the children by order property like flex's order */

  /* children.sort((a, b) => { */

  /* return (a && a.props && a.props.order || 0) -  */

  /* (b && b.props && b.props.order || 0); */

  /* }); */

  /* } */

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return style;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), function () {
    try {
      return mapChildren(children, function (vNode) {
        if (vNode && vNode.tag === Col) {
          vNode.props = _Object$assign({}, vNode.props, {
            gutter: gutter
          }); // make it clone

          vNode.$ = true;
          /* return _Vdt.miss.clone(vNode, {gutter}); */
        }

        return vNode;
      });
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