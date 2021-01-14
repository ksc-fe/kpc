import "core-js/modules/es.array.join";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.to-fixed";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.replace";
import "core-js/modules/es.string.split";
import _parseInt from "@babel/runtime-corejs3/core-js/parse-int";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _entriesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/entries";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js/instance/trim";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js/instance/every";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _Object$keys from "@babel/runtime-corejs3/core-js/object/keys";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import Intact from 'intact-vue';
var utils = Intact.utils;
var get = utils.get,
    isNullOrUndefined = utils.isNullOrUndefined,
    isObject = utils.isObject,
    isFunction = utils.isFunction,
    noop = utils.noop,
    extend = utils.extend,
    hasOwn = utils.hasOwn;
var Types = Intact.Vdt.miss.Types;
export { get, isNullOrUndefined, isObject, isFunction, noop, hasOwn };
export function addStyle(style, extra) {
  if (!style) return extra;
  if (!extra) return style;

  if (typeof style === 'string') {
    var _context;

    extra = _mapInstanceProperty(_context = _Object$keys(extra)).call(_context, function (key) {
      return kebabCase(key) + ": " + extra[key];
    }).join(';');
    style = "" + style + (!style || /;\s*$/.test(style) ? '' : ';') + extra;
  } else {
    style = _Object$assign({}, style, {}, extra);
  }

  return style;
}
var _cache = {};
var uppercasePattern = /[A-Z]/g;
export function kebabCase(word) {
  if (!_cache[word]) {
    _cache[word] = word.replace(uppercasePattern, function (item) {
      return "-" + item.toLowerCase();
    });
  }

  return _cache[word];
}
export function proxyEvent(component, name) {
  return function (e) {
    return component.trigger(name, e);
  };
}
export function isStringOrNumber(o) {
  var type = typeof o;
  return type === 'string' || type === 'number';
}
export function isTextChildren(o) {
  if (isStringOrNumber(o)) return true;

  if (_Array$isArray(o)) {
    return _everyInstanceProperty(o).call(o, function (item) {
      return isTextChildren(item);
    });
  }

  return isTextVNode(o);
}
export function isTextVNode(o) {
  return o && o.type === Types.Text;
} // for detect if it is a text node in Angular

export function isTextBlock(o) {
  return isTextChildren(o) || o && o.tag && o.tag.$id === 'AngularBlockWrapper' && o.props.isText;
}
export function isStringOrNumberNotEmpty(o) {
  var type = typeof o;
  return type === 'string' && !/^\s+$/.test(o) || type === 'number';
}
export function getTextByChildren(children) {
  var ret = '';

  if (_Array$isArray(children)) {
    _forEachInstanceProperty(children).call(children, function (vNode) {
      ret += getTextByChildren(vNode);
    });
  } else if (isStringOrNumber(children)) {
    ret += children;
  } else if (isTextVNode(children)) {
    ret += children.children;
  }

  return _trimInstanceProperty(ret).call(ret);
}
export function findParentComponent(Component, instance, isUntil) {
  var ret;
  var parent = instance.parentVNode;

  while (parent) {
    var tag = parent.tag;

    if (tag && (tag === Component || tag.prototype instanceof Component)) {
      ret = parent.children;
      if (isUntil) break;
    }

    parent = parent.parentVNode;
  }

  return ret;
}
/**
 * @brief find the router instance
 *
 * in React, find the history of router
 * for react-router@5, we need get the history from providers
 * as it use the new context api of React
 *
 * in Vue, find the $router
 *
 * @param instance
 *
 * @return
 */

export function findRouter(instance) {
  var Component = instance.constructor;

  if (Component.$$cid === 'IntactReact') {
    // in React
    var parentVNode = instance.vNode;

    while (parentVNode) {
      var i = void 0;

      if (parentVNode.type === Types.ComponentClass && (i = parentVNode.children.context)) {
        if (i = i.router) {
          return i.history;
        } else if (i = parentVNode.children.__providers) {
          // for react-router@5
          var iter = _entriesInstanceProperty(i).call(i);

          while (i = iter.next().value) {
            if (i[0]._context.displayName === 'Router' && (i = i[1]).history) {
              return i.history;
            }
          }
        }

        break;
      }

      parentVNode = parentVNode.parentVNode;
    }
  } else if (Component.cid === 'IntactVue') {
    return instance.get('_context').data.$router;
  }
}
export function strPad(str, length, pad) {
  str = str.toString();
  pad = pad === undefined ? '0' : pad;
  var l = str.length;

  if (l < length) {
    str = new Array(length - l + 1).join(pad) + str;
  }

  return str;
}
export function range(start, end) {
  var _context2;

  return _mapInstanceProperty(_context2 = Array.apply(null, {
    length: end - start + 1
  })).call(_context2, function (v, i) {
    return i + start;
  });
}
export function selectInput(input) {
  if (input.select) {
    input.select();
  } else if (input.setSelectionRange) {
    // mobile safari
    input.focus();
    input.setSelectionRange(0, input.value.length);
  }
}
var valueRegexp = /\{([^\}\s]+)\}/g;
export function createLocalize() {
  var i18n = {};
  return {
    _$: function _$(key, data) {
      var value = get(i18n, key);

      if (isNullOrUndefined(value)) {
        value = key;
      }

      if (data) {
        value = value.replace(valueRegexp, function (nouse, variable) {
          var suffix;

          var index = _indexOfInstanceProperty(variable).call(variable, ':');

          if (index > 0) {
            suffix = variable.substr(0, index);
            suffix = suffix.split('|');
            variable = variable.substr(index + 1);
            variable = get(data, variable);

            if (variable > 1) {
              return suffix.length > 1 ? suffix[1] : suffix[0];
            } else {
              return suffix.length > 1 ? suffix[0] : '';
            }
          } else {
            variable = get(data, variable);
            return isNullOrUndefined(variable) ? nouse : variable;
          }
        });
      }

      return value;
    },
    localize: function localize(data) {
      if (!isObject(data)) {
        throw new Error("expect a object but got " + data);
      }

      i18n = data;
    }
  };
}

var _createLocalize = createLocalize(),
    _$ = _createLocalize._$,
    localize = _createLocalize.localize;

export { _$, localize };
export function getTransition(feedback) {
  var horizontal = feedback.horizontal;
  var vertical = feedback.vertical;

  if (feedback.important === 'horizontal') {
    if (horizontal === 'left') {
      return 'c-slideright';
    } else if (horizontal === 'right') {
      return 'c-slideleft';
    } else if (vertical === 'bottom') {
      return 'c-slideup';
    } else if (vertical === 'top') {
      return 'c-slidedown';
    }
  } else {
    if (vertical === 'bottom') {
      return 'c-slideup';
    } else if (vertical === 'top') {
      return 'c-slidedown';
    } else if (horizontal === 'left') {
      return 'c-slideright';
    } else if (horizontal === 'right') {
      return 'c-slideleft';
    }
  }

  return 'c-slidedown';
}
export function mapChildren(children, callback) {
  var vNodes = [];

  function map(children) {
    if (!children) return;

    if (!_Array$isArray(children)) {
      return vNodes.push(callback(children));
    }

    _forEachInstanceProperty(children).call(children, function (vNode) {
      if (_Array$isArray(vNode)) {
        map(vNode);
      } else if (vNode) {
        vNodes.push(callback(vNode));
      }
    });
  }

  map(children);
  return vNodes;
}
export var expandAnimationCallbacks = {
  'a:transition': 'c-expand',
  'ev-a:leaveStart': function evALeaveStart(el) {
    el._height || (el._height = el.clientHeight + 'px');
    el.style.height = el._height;
  },
  'ev-a:leave': function evALeave(el) {
    return el.style.height = 0;
  },
  'ev-a:leaveEnd': function evALeaveEnd(el, isCancel) {
    // 保持动画的连贯性，可能在leave动画被enter动画cancel
    // 此时el._height存在，不要在start中去获取，否则会重绘
    // 导致多个动画时，动画时长不一致
    if (!isCancel) {
      el.style.height = '';
      el._height = null;
    }
  },
  'ev-a:enterStart': function evAEnterStart(el) {
    el._height || (el._height = el.clientHeight + 'px');
    el.style.height = 0;
  },
  'ev-a:enter': function evAEnter(el) {
    return el.style.height = el._height;
  },
  'ev-a:enterEnd': function evAEnterEnd(el, isCancel) {
    if (!isCancel) {
      el.style.height = '';
      el._height = null;
    }
  }
};
export function toggleArray(arr, value) {
  if (!_Array$isArray(arr)) {
    return [value];
  } else {
    arr = _sliceInstanceProperty(arr).call(arr, 0);

    var index = _indexOfInstanceProperty(arr).call(arr, value);

    if (~index) {
      _spliceInstanceProperty(arr).call(arr, index, 1);
    } else {
      arr.push(value);
    }

    return arr;
  }
}
export function isNumber(n) {
  return typeof n === 'number';
}
export var hasWindow = typeof window !== 'undefined';
var raf;

if (hasWindow) {
  var _context3;

  raf = window.requestAnimationFrame ? _bindInstanceProperty(_context3 = window.requestAnimationFrame).call(_context3, window) : _setTimeout;
}

export function nextFrame(fn) {
  raf(function () {
    return raf(fn);
  });
}
export function debounce(fn, delay) {
  var timer;
  return function () {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = _setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
export function throttle(fn, delay) {
  var lock = false;
  return function () {
    if (lock) return;
    lock = true;
    var args = arguments;
    var context = this;

    var timer = _setTimeout(function () {
      fn.apply(context, args);
      lock = false;
    }, delay);
  };
}
export var browser = {};

if (typeof navigator !== 'undefined') {
  var ua = navigator.userAgent.toLowerCase();

  var index = _indexOfInstanceProperty(ua).call(ua, 'msie ');

  if (~index) {
    browser.isIE = true;

    var version = _parseInt(ua.substring(index + 5, _indexOfInstanceProperty(ua).call(ua, '.', index)), 10);

    browser.version = version;
    browser.isIE8 = version === 8;
  } else if (~_indexOfInstanceProperty(ua).call(ua, 'trident/')) {
    browser.isIE = true;

    var rv = _indexOfInstanceProperty(ua).call(ua, 'rv:');

    browser.version = _parseInt(ua.substring(rv + 3, _indexOfInstanceProperty(ua).call(ua, '.', rv)), 10);
  } else if (~_indexOfInstanceProperty(ua).call(ua, 'edge')) {
    browser.isEdge = true;
  } else if (~_indexOfInstanceProperty(ua).call(ua, 'safari')) {
    if (~_indexOfInstanceProperty(ua).call(ua, 'chrome')) {
      browser.isChrome = true;
    } else {
      browser.isSafari = true;
    }
  }
}

var externalLinkReg = /^(https?:)?\/\//;
export function isExternalLink(to) {
  if (typeof to !== 'string') return false;
  return externalLinkReg.test(to);
}
export function getRestProps(instance, props) {
  if (props === void 0) {
    props = instance.get();
  }

  var selfProps = instance.defaults() || {};
  var events = instance.constructor.events || {};
  var ret = {};

  for (var key in props) {
    if (key === 'key' || key === 'ref' || key === 'className' || key === 'children' || key === 'v-model' || key[0] === '_' || key in selfProps || key.substring(3) in events || // ev-$change / $destroy
    key.substring(0, 4) === 'ev-$') continue;
    ret[key] = props[key];
  }

  return ret;
}
export var config = {
  useWrapper: false,
  onDialogOpen: null,
  onDialogClose: null
};
export function configure(options) {
  extend(config, options);
}
/**
 * return max min or multiple by step
 */

export function minMaxStep(value, min, max, step) {
  if (value >= max) return max;
  if (value <= min) return min;

  if (step) {
    value = Number((Math.round((value - min) / step) * step + min).toFixed(10)); // value = Number((Math.round(value / step) * step).toFixed(10))

    return minMaxStep(value, min, max);
  }

  return value;
}
export function clamp(number, lower, upper) {
  return Math.min(Math.max(number, lower), upper);
}
export function stopPropagation(e) {
  e.stopPropagation();
}