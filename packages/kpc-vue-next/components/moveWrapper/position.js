import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import "core-js/modules/esnext.string.at";
import _atInstanceProperty from "@babel/runtime-corejs3/core-js/instance/at";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _parseInt from "@babel/runtime-corejs3/core-js/parse-int";
import _parseFloat from "@babel/runtime-corejs3/core-js/parse-float";
var max = Math.max;
var abs = Math.abs;
var rHorizontal = /left|center|right/;
var rVertical = /top|center|bottom/;
var rOffset = /[\+\-]\d+(\.[\d]+)?%?/;
var rPosition = /^\w+/;
var rPercent = /%$/;

function getDimensions(elem) {
  if (elem.nodeType === 9) {
    // document
    var _getDocumentOrWindowR = getDocumentOrWindowRect(elem),
        width = _getDocumentOrWindowR.width,
        height = _getDocumentOrWindowR.height;

    return {
      width: width,
      height: height,
      offset: {
        top: 0,
        left: 0
      }
    };
  } else if (elem === window) {
    var _getDocumentOrWindowR2 = getDocumentOrWindowRect(elem),
        _width = _getDocumentOrWindowR2.width,
        _height = _getDocumentOrWindowR2.height;

    return {
      width: _width,
      height: _height,
      offset: {
        top: elem.pageYOffset,
        left: elem.pageXOffset
      }
    };
  } else if (elem.preventDefault) {
    // event
    return {
      width: 0,
      height: 0,
      offset: {
        top: elem.pageY,
        left: elem.pageX
      }
    };
  } // dom


  var rect = elem.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    offset: {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    },
    rect: rect
  };
}

export function getDocumentOrWindowRect(elem) {
  if (elem === window) {
    var _d = elem.document.documentElement;
    return {
      width: _d.clientWidth,
      height: _d.clientHeight
    };
  }

  var d = elem.documentElement;
  var b = elem.body;
  return {
    width: max(b.scrollWidth, d.scrollWidth, b.offsetWidth, d.offsetWidth, d.clientWidth),
    height: max(b.scrollHeight, d.scrollHeight, b.offsetHeight, d.offsetHeight, d.clientHeight)
  };
}

function getOffsets(offsets, width, height) {
  return [_parseFloat(offsets[0]) * (rPercent.test(offsets[0]) ? width / 100 : 1), _parseFloat(offsets[1]) * (rPercent.test(offsets[1]) ? height / 100 : 1)];
} // reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript


var _scrollBarWidth;

export function scrollbarWidth() {
  if (_scrollBarWidth !== undefined) {
    return _scrollBarWidth;
  }

  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth; // force scrollbars

  outer.style.overflow = "scroll"; // add innerdiv

  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth; // remove divs

  outer.parentNode.removeChild(outer);
  return _scrollBarWidth = widthNoScroll - widthWithScroll;
}

function getScrollInfo(within) {
  var overflowX = within.isWindow || within.isDocument ? '' : within.element.style.overflowX;
  var overflowY = within.isWindow || within.isDocument ? '' : within.element.style.overflowY;
  var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element.scrollWidth;
  var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element.scrollHeight;
  return {
    width: hasOverflowY ? scrollbarWidth() : 0,
    height: hasOverflowX ? scrollbarWidth() : 0
  };
}

function getWithinInfo(element) {
  element || (element = window);
  var isWindow = element === window;
  var isDocument = element.nodeType === 9;
  var hasOffset = !isWindow && !isDocument;
  var ret = {
    element: element,
    isWindow: isWindow,
    isDocument: isDocument
  };

  if (hasOffset) {
    var rect = element.getBoundingClientRect();
    ret.offset = {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
    ret.width = rect.width;
    ret.height = rect.height;
    ret.scrollLeft = element.scrollLeft;
    ret.scrollTop = element.scrollTop;
  } else {
    ret.offset = {
      top: 0,
      left: 0
    };

    var _rect = getDocumentOrWindowRect(element);

    ret.width = _rect.width;
    ret.height = _rect.height;
    ret.scrollLeft = window.pageXOffset;
    ret.scrollTop = window.pageYOffset;
  }

  return ret;
}

function parseCss(style, property) {
  return _parseInt(style[property], 10) || 0;
}

function isInViewport(rect) {
  if (!rect) return true;
  var top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  return top <= windowHeight && bottom >= 0 && left <= windowWidth && right >= 0;
}

export default function position(elem, options) {
  var _context;

  options = _Object$assign({}, options);
  var target = options.of || window;

  if (target.preventDefault) {
    options.at = "left top";
  }

  var _getDimensions = getDimensions(target),
      targetWidth = _getDimensions.width,
      targetHeight = _getDimensions.height,
      targetOffset = _getDimensions.offset,
      targetRect = _getDimensions.rect;

  var basePosition = _Object$assign({}, targetOffset); // don't detect collison if the target is not in viewport


  var collision = isInViewport(targetRect) ? (options.collision || 'flip').split(' ') : ['none', 'none'];
  var offsets = {};
  var within = getWithinInfo(options.within);
  var scrollInfo = getScrollInfo(within);

  _forEachInstanceProperty(_context = ['my', 'at']).call(_context, function (item) {
    var pos = (options[item] || '').split(' ');

    if (pos.length === 1) {
      var _context2;

      pos = rHorizontal.test(pos[0]) ? _concatInstanceProperty(pos).call(pos, ['center']) : rVertical.test(pos[0]) ? _concatInstanceProperty(_context2 = ['center']).call(_context2, pos) : ['center', 'center'];
    }

    pos[0] = rHorizontal.test(pos[0]) ? pos[0] : 'center';
    pos[1] = rVertical.test(pos[1]) ? pos[1] : 'center';
    var horizontalOffset = rOffset.exec(pos[0]);
    var verticalOffset = rOffset.exec(pos[1]);
    offsets[item] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
    options[item] = [rPosition.exec(pos[0])[0], rPosition.exec(pos[1])[0]];
  });

  if (collision.length === 1) {
    collision[1] = collision[0];
  }

  var at = _atInstanceProperty(options);

  if (at[0] === 'right') {
    basePosition.left += targetWidth;
  } else if (at[0] === 'center') {
    basePosition.left += targetWidth / 2;
  }

  if (at[1] === 'bottom') {
    basePosition.top += targetHeight;
  } else if (at[1] === 'center') {
    basePosition.top += targetHeight / 2;
  }

  var atOffset = getOffsets(_atInstanceProperty(offsets), targetWidth, targetHeight);
  basePosition.left += atOffset[0];
  basePosition.top += atOffset[1]; // maybe it has scaled, so we use getBoundingClientRect

  var _elem$getBoundingClie = elem.getBoundingClientRect(),
      elemWidth = _elem$getBoundingClie.width,
      elemHeight = _elem$getBoundingClie.height; // const elemWidth = elem.offsetWidth;
  // const elemHeight = elem.offsetHeight;


  var position = _Object$assign({}, basePosition);

  var myOffset = getOffsets(offsets.my, elemWidth, elemHeight);
  var computedStyle = window.getComputedStyle(elem);
  var marginLeft = parseCss(computedStyle, 'marginLeft');
  var marginTop = parseCss(computedStyle, 'marginTop');
  var collisionWidth = elemWidth + marginLeft + parseCss(computedStyle, 'marginRight') + scrollInfo.width;
  var collisionHeight = elemHeight + marginTop + parseCss(computedStyle, 'marginBottom') + scrollInfo.height;
  var collisionPosition = {
    marginLeft: marginLeft,
    marginTop: marginTop
  };
  var my = options.my;

  if (my[0] === 'right') {
    position.left -= elemWidth;
  } else if (my[0] === 'center') {
    position.left -= elemWidth / 2;
  }

  if (my[1] === 'bottom') {
    position.top -= elemHeight;
  } else if (my[1] === 'center') {
    position.top -= elemHeight / 2;
  }

  position.left += myOffset[0];
  position.top += myOffset[1];
  var collisionDirection = options.collisionDirection || ['left', 'top'];

  _forEachInstanceProperty(collisionDirection).call(collisionDirection, function (dir, i) {
    var coll = collision[i];

    if (rules[coll]) {
      rules[coll][dir](position, {
        targetWidth: targetWidth,
        targetHeight: targetHeight,
        elemWidth: elemWidth,
        elemHeight: elemHeight,
        collisionPosition: collisionPosition,
        collisionWidth: collisionWidth,
        collisionHeight: collisionHeight,
        offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
        my: options.my,
        at: _atInstanceProperty(options),
        within: within,
        elem: elem
      });
    }
  });

  if (options.using) {
    var left = targetOffset.left - position.left;
    var right = left + targetWidth - elemWidth;
    var top = targetOffset.top - position.top;
    var bottom = top + targetHeight - elemHeight;
    var feedback = {
      target: {
        element: target,
        left: targetOffset.left,
        top: targetOffset.top,
        width: targetWidth,
        height: targetHeight
      },
      element: {
        element: elem,
        left: position.left,
        top: position.top,
        width: elemWidth,
        height: elemHeight
      },
      horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
      vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
    };

    if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
      feedback.horizontal = 'center';
    }

    if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
      feedback.vertical = 'middle';
    }

    if (position.top + elemHeight <= targetOffset.top || position.top >= targetOffset.top + targetHeight) {
      feedback.important = 'vertical';
    } else if (position.left + elemWidth <= targetOffset.left || position.left >= targetOffset.left + targetWidth) {
      feedback.important = 'horizontal';
    } else if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
      feedback.important = 'horizontal';
    } else {
      feedback.important = 'vertical';
    }

    options.using(feedback, position);
  }

  var style = elem.style;

  if (computedStyle.position === 'static') {
    style.position = 'relative';
  }

  var curOffset = getDimensions(elem).offset;
  var curCSSTop = computedStyle.top;
  var curCSSLeft = computedStyle.left;
  style.left = position.left - curOffset.left + (_parseFloat(curCSSLeft) || 0) + 'px';
  style.top = position.top - curOffset.top + (_parseFloat(curCSSTop) || 0) + 'px';
}
var rules = {
  fit: {
    left: function left(position, data) {
      var within = data.within;
      var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
      var outerWidth = within.width;
      var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
      var overLeft = withinOffset - collisionPosLeft;
      var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
      var newOverRight;

      if (data.collisionWidth > outerWidth) {
        if (overLeft > 0 && overRight <= 0) {
          newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
          position.left += overLeft - newOverRight;
        } else if (overRight > 0 && overLeft <= 0) {
          position.left = withinOffset;
        } else if (overLeft > overRight) {
          position.left = withinOffset + outerWidth - data.collisionWidth;
        } else {
          position.left = withinOffset;
        }
      } else if (overLeft > 0) {
        position.left += overLeft;
      } else if (overRight > 0) {
        position.left -= overRight;
      } else {
        position.left = max(position.left - collisionPosLeft, position.left);
      }
    },
    top: function top(position, data) {
      var within = data.within;
      var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
      var outerHeight = data.within.height;
      var collisionPosTop = position.top - data.collisionPosition.marginTop;
      var overTop = withinOffset - collisionPosTop;
      var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
      var newOverBottom;

      if (data.collisionHeight > outerHeight) {
        if (overTop > 0 && overBottom <= 0) {
          newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
          position.top += overTop - newOverBottom;
        } else if (overBottom > 0 && overTop <= 0) {
          position.top = withinOffset;
        } else if (overTop > overBottom) {
          position.top = withinOffset + outerHeight - data.collisionHeight;
        } else {
          position.top = withinOffset;
        }
      } else if (overTop > 0) {
        position.top += overTop;
      } else if (overBottom > 0) {
        position.top -= overBottom;
      } else {
        position.top = max(position.top - collisionPosTop, position.top);
      }
    }
  },
  flip: {
    left: function left(position, data) {
      var within = data.within;
      var withinOffset = within.offset.left + within.scrollLeft;
      var outerWidth = within.width;
      var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
      var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
      var overLeft = collisionPosLeft - offsetLeft;
      var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
      var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
      var atOffset = _atInstanceProperty(data)[0] === 'left' ? data.targetWidth : _atInstanceProperty(data)[0] === 'right' ? -data.targetWidth : 0;
      var offset = -2 * data.offset[0];
      var newOverRight;
      var newOverLeft;

      if (overLeft < 0) {
        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;

        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
          position.left += myOffset + atOffset + offset;
        }
      } else if (overRight > 0) {
        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft; // the same to top
        // if (newOverLeft > 0 || abs(newOverLeft) < overRight) {

        if (newOverLeft > 0) {
          position.left += myOffset + atOffset + offset;
        }
      }
    },
    top: function top(position, data) {
      var within = data.within;
      var withinOffset = within.offset.top + within.scrollTop;
      var outerHeight = within.height;
      var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
      var collisionPosTop = position.top - data.collisionPosition.marginTop;
      var overTop = collisionPosTop - offsetTop;
      var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
      var myOffset = data.my[1] === 'top' ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
      var atOffset = _atInstanceProperty(data)[1] === 'top' ? data.targetHeight : _atInstanceProperty(data)[1] === 'bottom' ? -data.targetHeight : 0;
      var offset = -2 * data.offset[1];
      var newOverTop;
      var newOverBottom;

      if (overTop < 0) {
        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;

        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
          position.top += myOffset + atOffset + offset;
        }
      } else if (overBottom > 0) {
        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop; // because window can scroll down, when it beyond the top border,
        // we can not scroll it to view. Don't flip it in this case
        // if (newOverTop > 0 || abs(newOverTop) < overBottom) {

        if (newOverTop > 0) {
          position.top += myOffset + atOffset + offset;
        }
      }
    }
  },
  flipfit: {
    left: function left() {
      var _rules$flip, _rules$fit;

      (_rules$flip = rules.flip).left.apply(_rules$flip, arguments);

      (_rules$fit = rules.fit).left.apply(_rules$fit, arguments);
    },
    top: function top() {
      var _rules$flip2, _rules$fit2;

      (_rules$flip2 = rules.flip).top.apply(_rules$flip2, arguments);

      (_rules$fit2 = rules.fit).top.apply(_rules$fit2, arguments);
    }
  }
};
export { position };