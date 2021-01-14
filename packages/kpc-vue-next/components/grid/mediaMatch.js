import "core-js/modules/es.number.constructor";
import "core-js/modules/es.number.to-fixed";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.match";
import "core-js/modules/es.string.split";
import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/splice";
import _setTimeout from "@babel/runtime-corejs3/core-js/set-timeout";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";

/*! MediaMatch v.2.0.3 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */
export default function () {
  'use strict';
  /* istanbul ignore else */

  if (window.matchMedia) {
    return window.matchMedia;
  } else {
    // Internal globals
    var win = window,
        _doc = win.document,
        _viewport = _doc.documentElement,
        _queries = [],
        _queryID = 0,
        _type = '',
        _features = {},
        // only screen
    // only screen and
    // not screen
    // not screen and
    // screen
    // screen and
    _typeExpr = /\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,
        // (-vendor-min-width: 300px)
    // (min-width: 300px)
    // (width: 300px)
    // (width)
    // (orientation: portrait|landscape)
    _mediaExpr = /^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,
        _timer = 0,
        // Helper methods

    /*
        _matches
     */
    _matches = function _matches(media) {
      // screen and (min-width: 400px), screen and (max-width: 500px)
      var mql = _indexOfInstanceProperty(media).call(media, ',') !== -1 && media.split(',') || [media],
          mqIndex = mql.length - 1,
          mqLength = mqIndex,
          mq = null,
          // not screen, screen
      negateType = null,
          negateTypeFound = '',
          negateTypeIndex = 0,
          negate = false,
          type = '',
          // (min-width: 400px), (min-width)
      exprListStr = '',
          exprList = null,
          exprIndex = 0,
          exprLength = 0,
          expr = null,
          prefix = '',
          length = '',
          unit = '',
          value = '',
          feature = '',
          match = false;

      if (media === '') {
        return true;
      }

      do {
        var _context;

        mq = mql[mqLength - mqIndex];
        negate = false;
        negateType = mq.match(_typeExpr);

        if (negateType) {
          negateTypeFound = negateType[0];
          negateTypeIndex = negateType.index;
        }

        if (!negateType || _indexOfInstanceProperty(_context = mq.substring(0, negateTypeIndex)).call(_context, '(') === -1 && (negateTypeIndex || !negateType[3] && negateTypeFound !== negateType.input)) {
          match = false;
          continue;
        }

        exprListStr = mq;
        negate = negateType[1] === 'not';

        if (!negateTypeIndex) {
          type = negateType[2];
          exprListStr = mq.substring(negateTypeFound.length);
        } // Test media type
        // Test type against this device or if 'all' or empty ''


        match = type === _type || type === 'all' || type === '';
        exprList = _indexOfInstanceProperty(exprListStr).call(exprListStr, ' and ') !== -1 && exprListStr.split(' and ') || [exprListStr];
        exprIndex = exprList.length - 1;
        exprLength = exprIndex;

        if (match && exprIndex >= 0 && exprListStr !== '') {
          do {
            expr = exprList[exprIndex].match(_mediaExpr);

            if (!expr || !_features[expr[3]]) {
              match = false;
              break;
            }

            prefix = expr[2];
            length = expr[5];
            value = length;
            unit = expr[7];
            feature = _features[expr[3]]; // Convert unit types

            if (unit) {
              if (unit === 'px') {
                // If unit is px
                value = Number(length);
              } else if (unit === 'em' || unit === 'rem') {
                // Convert relative length unit to pixels
                // Assumed base font size is 16px
                value = 16 * length;
              } else if (expr[8]) {
                // Convert aspect ratio to decimal
                value = (length / expr[8]).toFixed(2);
              } else if (unit === 'dppx') {
                // Convert resolution dppx unit to pixels
                value = length * 96;
              } else if (unit === 'dpcm') {
                // Convert resolution dpcm unit to pixels
                value = length * 0.3937;
              } else {
                // default
                value = Number(length);
              }
            } // Test for prefix min or max
            // Test value against feature


            if (prefix === 'min-' && value) {
              match = feature >= value;
            } else if (prefix === 'max-' && value) {
              match = feature <= value;
            } else if (value) {
              match = feature === value;
            } else {
              match = !!feature;
            } // If 'match' is false, break loop
            // Continue main loop through query list


            if (!match) {
              break;
            }
          } while (exprIndex--);
        } // If match is true, break loop
        // Once matched, no need to check other queries


        if (match) {
          break;
        }
      } while (mqIndex--);

      return negate ? !match : match;
    },

    /*
        _setFeature
     */
    _setFeature = function _setFeature() {
      // Sets properties of '_features' that change on resize and/or orientation.
      var w = win.innerWidth || _viewport.clientWidth,
          h = win.innerHeight || _viewport.clientHeight,
          dw = win.screen.width,
          dh = win.screen.height,
          c = win.screen.colorDepth,
          x = win.devicePixelRatio;
      _features.width = w;
      _features.height = h;
      _features['aspect-ratio'] = (w / h).toFixed(2);
      _features['device-width'] = dw;
      _features['device-height'] = dh;
      _features['device-aspect-ratio'] = (dw / dh).toFixed(2);
      _features.color = c;
      _features['color-index'] = Math.pow(2, c);
      _features.orientation = h >= w ? 'portrait' : 'landscape';
      _features.resolution = x && x * 96 || win.screen.deviceXDPI || 96;
      _features['device-pixel-ratio'] = x || 1;
    },

    /*
        _watch
     */
    _watch = function _watch() {
      clearTimeout(_timer);
      _timer = _setTimeout(function () {
        var query = null,
            qIndex = _queryID - 1,
            qLength = qIndex,
            match = false;

        if (qIndex >= 0) {
          _setFeature();

          do {
            query = _queries[qLength - qIndex];

            if (query) {
              match = _matches(query.mql.media);

              if (match && !query.mql.matches || !match && query.mql.matches) {
                query.mql.matches = match;

                if (query.listeners) {
                  for (var i = 0, il = query.listeners.length; i < il; i++) {
                    if (query.listeners[i]) {
                      query.listeners[i].call(win, query.mql);
                    }
                  }
                }
              }
            }
          } while (qIndex--);
        }
      }, 10);
    },

    /*
        _init
     */
    _init = function _init() {
      var head = _doc.getElementsByTagName('head')[0],
          style = _doc.createElement('style'),
          info = null,
          typeList = ['screen', 'print', 'speech', 'projection', 'handheld', 'tv', 'braille', 'embossed', 'tty'],
          typeIndex = 0,
          typeLength = typeList.length,
          cssText = '#mediamatchjs { position: relative; z-index: 0; }',
          eventPrefix = '',
          addEvent = win.addEventListener || (eventPrefix = 'on') && win.attachEvent;

      style.type = 'text/css';
      style.id = 'mediamatchjs';
      head.appendChild(style); // Must be placed after style is inserted into the DOM for IE

      info = win.getComputedStyle && win.getComputedStyle(style) || style.currentStyle; // Create media blocks to test for media type

      for (; typeIndex < typeLength; typeIndex++) {
        cssText += '@media ' + typeList[typeIndex] + ' { #mediamatchjs { position: relative; z-index: ' + typeIndex + ' } }';
      } // Add rules to style element


      if (style.styleSheet) {
        style.styleSheet.cssText = cssText;
      } else {
        style.textContent = cssText;
      } // Get media type


      _type = typeList[info.zIndex * 1 || 0];
      head.removeChild(style);

      _setFeature(); // Set up listeners


      addEvent(eventPrefix + 'resize', _watch, false);
      addEvent(eventPrefix + 'orientationchange', _watch, false);
    };

    _init();
    /*
        A list of parsed media queries, ex. screen and (max-width: 400px), screen and (max-width: 800px)
    */


    return function (media) {
      var id = _queryID,
          mql = {
        matches: false,
        media: media,
        addListener: function addListener(listener) {
          _queries[id].listeners || (_queries[id].listeners = []);
          listener && _queries[id].listeners.push(listener);
        },
        removeListener: function removeListener(listener) {
          var query = _queries[id],
              i = 0,
              il = 0;

          if (!query) {
            return;
          }

          il = query.listeners.length;

          for (; i < il; i++) {
            if (query.listeners[i] === listener) {
              var _context2;

              _spliceInstanceProperty(_context2 = query.listeners).call(_context2, i, 1);
            }
          }
        }
      };

      if (media === '') {
        mql.matches = true;
        return mql;
      }

      mql.matches = _matches(media);
      _queryID = _queries.push({
        mql: mql,
        listeners: null
      });
      return mql;
    };
  }
}