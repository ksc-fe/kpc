import "core-js/modules/es.function.name";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import { isStringOrNumberNotEmpty } from '../utils';
import Icon from '../icon';
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
      type = _self$get.type,
      className = _self$get.className,
      size = _self$get.size,
      icon = _self$get.icon,
      circle = _self$get.circle,
      ref = _self$get.ref,
      key = _self$get.key,
      tabindex = _self$get.tabindex,
      tagName = _self$get.tagName,
      htmlType = _self$get.htmlType,
      fluid = _self$get.fluid,
      children = _self$get.children,
      loading = _self$get.loading,
      disabled = _self$get.disabled,
      value = _self$get.value,
      _value = _self$get._value,
      name = _self$get.name,
      tagProps = _self$get.tagProps,
      _checkType = _self$get._checkType,
      ghost = _self$get.ghost,
      rest = _objectWithoutPropertiesLoose(_self$get, ["type", "className", "size", "icon", "circle", "ref", "key", "tabindex", "tagName", "htmlType", "fluid", "children", "loading", "disabled", "value", "_value", "name", "tagProps", "_checkType", "ghost"]);

  var checked = value !== undefined ? _checkType === 'radio' ? value === _value : _checkType === 'checkbox' ? _Array$isArray(_value) && !!~_indexOfInstanceProperty(_value).call(_value, value) : false : false;
  var classNameObj = (_classNameObj = {
    'k-btn': true
  }, _classNameObj["k-" + type] = type, _classNameObj['k-btn-icon'] = icon, _classNameObj[className] = className, _classNameObj['k-circle'] = circle, _classNameObj['k-loading'] = loading, _classNameObj['k-fluid'] = fluid, _classNameObj['k-active'] = checked, _classNameObj['k-disabled'] = disabled || loading, _classNameObj['k-ghost'] = ghost, _classNameObj); // type and size may both be default

  if (size !== 'default') classNameObj["k-" + size] = true;

  var Button = function Button(props) {
    if (props.href && tagName === 'button') {
      tagName = 'a';
    }

    if (tagName === 'button') {
      // set type of html button
      props.type = htmlType;
    } // disable button when loading

    /* if (loading) props.disabled = true; */


    return h(tagName, props, props.children);
  }; // hack for loading transition of width


  if (!icon && _Array$isArray(children)) {
    _forEachInstanceProperty(children).call(children, function (child, index) {
      if (child) {
        if (child.type === 1 || isStringOrNumberNotEmpty(child)) {
          // is a text node
          // wrap text node with span
          children[index] = h('span', null, function () {
            try {
              return child;
            } catch (e) {
              _e(e);
            }
          }.call($this));
        } // whether the icon is on the left side or right


        if (index === 0) {
          var _context;

          if (child.tag === Icon || child.className && _indexOfInstanceProperty(_context = child.className).call(_context, 'icon') > -1) {
            classNameObj['k-btn-icon-left'] = true;
          }
        } else if (index === children.length - 1) {
          var _context2;

          if (child.tag === Icon || child.className && _indexOfInstanceProperty(_context2 = child.className).call(_context2, 'icon') > -1) {
            classNameObj['k-btn-icon-right'] = true;
          }
        }
      }
    });
  } else if (isStringOrNumberNotEmpty(children) || children && children.type === 1) {
    // wrap text node with span
    children = h('span', null, function () {
      try {
        return children;
      } catch (e) {
        _e(e);
      }
    }.call($this));
  }
  /* const loadingSizeMap = { */

  /* 'large': 'default', */

  /* 'default': 'small', */

  /* 'small': 'mini', */

  /* 'mini': 'mini' */

  /* }; */


  var loadingIcon = h(Icon, {
    'className': 'ion-load-c icon-loading',
    'size': function () {
      try {
        return size
        /*loadingSizeMap[size]*/
        ;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'k-loading',
    '_context': $this
  });
  return h(Button, _Object$assign({
    'className': _className(function () {
      try {
        return classNameObj;
      } catch (e) {
        _e(e);
      }
    }.call($this))
  }, function () {
    try {
      return rest;
    } catch (e) {
      _e(e);
    }
  }.call($this), {}, function () {
    try {
      return tagProps;
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'tabindex': function () {
      try {
        return disabled || loading ? "-1" : tabindex;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [function () {
      try {
        return loading ? classNameObj['k-btn-icon-right'] ? [children, loadingIcon] : [loadingIcon, children] : children;
      } catch (e) {
        _e(e);
      }
    }.call($this), function () {
      try {
        return _checkType !== 'none';
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('input', {
      'type': function () {
        try {
          return _checkType;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'name': function () {
        try {
          return name;
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
      'tabindex': '-1'
    }) : undefined],
    '_context': $this,
    'ev-click': function () {
      try {
        return self._onClick;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mouseup': function () {
      try {
        return self._onMouseUp;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }));
}