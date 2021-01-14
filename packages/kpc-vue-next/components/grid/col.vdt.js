import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import gutterStyle, { breakpoints } from './utils';
import { isNullOrUndefined, getRestProps } from '../utils';
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
      span = _self$get.span,
      className = _self$get.className,
      order = _self$get.order,
      gutter = _self$get.gutter,
      offset = _self$get.offset,
      push = _self$get.push,
      pull = _self$get.pull,
      style = _self$get.style;

  var xs = self.xs,
      sm = self.sm,
      md = self.md,
      lg = self.lg,
      xl = self.xl;
  var hasGutter = gutter > 0;

  if (hasGutter) {
    style = gutterStyle(gutter, style, 'padding');
  }

  var classNameObj = (_classNameObj = {
    'k-col': true
  }, _classNameObj["k-" + span] = span, _classNameObj[className] = className && !hasGutter, _classNameObj["k-offset-" + offset] = offset > 0, _classNameObj["k-pull-" + pull] = pull, _classNameObj["k-push-" + push] = push, _classNameObj["k-order-" + order] = order, _classNameObj); // add responsive class

  _forEachInstanceProperty(breakpoints).call(breakpoints, function (item) {
    var _context;

    var obj = self[item];
    if (!obj) return;
    var prefix = item === 'xs' ? 'k-' : "k-" + item + "-";

    if (!isNullOrUndefined(obj.span)) {
      classNameObj["" + prefix + obj.span] = true;
    }

    _forEachInstanceProperty(_context = ['order', 'offset', 'pull', 'push']).call(_context, function (prop) {
      if (!isNullOrUndefined(obj[prop])) {
        classNameObj["" + prefix + prop + "-" + obj[prop]] = true;
      }
    });
  });

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
      return hasGutter ? h('div', null, function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this), _className(function () {
        try {
          return className;
        } catch (e) {
          _e(e);
        }
      }.call($this))) : children;
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