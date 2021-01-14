import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
import MoveWrapper from '../moveWrapper';
import { _$, stopPropagation } from '../utils';
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
      size = _self$get.size,
      container = _self$get.container,
      hideClose = _self$get.hideClose,
      overlay = _self$get.overlay,
      value = _self$get.value,
      width = _self$get.width,
      mode = _self$get.mode;

  var isHide = mode === 'hide';
  var dialog = function () {
    try {
      return isHide ? true : value;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Animate, {
    'className': _className(function () {
      try {
        var _ref;

        return _ref = {
          "k-dialog": true,
          'k-dragging': self.get('_dragging')
        }, _ref["k-" + size] = size !== 'default', _ref;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'ref': function () {
      try {
        return function (i) {
          return self.dialog = i ? i.element : null;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:show': function () {
      try {
        return value;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'a:appear': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'dialog',
    'style': function () {
      try {
        return {
          width: typeof width === 'number' ? width + "px" : width
        };
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': (_blocks['content'] = function (parent) {
      return [h('div', {
        'ev-mousedown': function () {
          try {
            return self._dragStart;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }, [(_blocks['header'] = function (parent) {
        return h('span', null, function () {
          try {
            return self.get('title');
          } catch (e) {
            _e(e);
          }
        }.call($this), 'k-title');
      }) && (__blocks['header'] = function (parent) {
        var _context;

        var args = arguments;
        return blocks['header'] ? blocks['header'].apply($this, _concatInstanceProperty(_context = [function () {
          return _blocks['header'].apply($this, args);
        }]).call(_context, __slice.call(args, 1))) : _blocks['header'].apply($this, args);
      }) && __blocks['header'].apply($this, [__noop]), function () {
        try {
          return !hideClose && !scope.hideClose;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Button, {
        'type': 'none',
        'icon': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'title': function () {
          try {
            return _$("关闭");
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'className': 'k-close',
        'children': h('i', null, null, 'k-icon ion-ios-close-empty'),
        '_context': $this,
        'ev-click': function () {
          try {
            return self._terminate;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-mousedown': function () {
          try {
            return stopPropagation;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }) : undefined], 'k-header k-dialog-header'), h('div', null, (_blocks['body'] = function (parent) {
        return function () {
          try {
            return self.get('children');
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['body'] = function (parent) {
        var _context2;

        var args = arguments;
        return blocks['body'] ? blocks['body'].apply($this, _concatInstanceProperty(_context2 = [function () {
          return _blocks['body'].apply($this, args);
        }]).call(_context2, __slice.call(args, 1))) : _blocks['body'].apply($this, args);
      }) && __blocks['body'].apply($this, [__noop]), 'k-body k-dialog-body'), (_blocks['footer-wrapper'] = function (parent) {
        return h('div', null, (_blocks['footer'] = function (parent) {
          return [h(Button, {
            'className': 'k-cancel',
            'children': function () {
              try {
                return self.get('cancelText');
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this,
            'ev-click': function () {
              try {
                return self.cancel;
              } catch (e) {
                _e(e);
              }
            }.call($this)
          }), h(Button, {
            'className': 'k-ok',
            'type': 'primary',
            'loading': function () {
              try {
                return self.get('loading');
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'disabled': function () {
              try {
                return self.get('disabledOk');
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'children': function () {
              try {
                return self.get('okText');
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this,
            'ev-click': function () {
              try {
                return self.ok;
              } catch (e) {
                _e(e);
              }
            }.call($this)
          })];
        }) && (__blocks['footer'] = function (parent) {
          var _context3;

          var args = arguments;
          return blocks['footer'] ? blocks['footer'].apply($this, _concatInstanceProperty(_context3 = [function () {
            return _blocks['footer'].apply($this, args);
          }]).call(_context3, __slice.call(args, 1))) : _blocks['footer'].apply($this, args);
        }) && __blocks['footer'].apply($this, [__noop]), 'k-footer c-clearfix k-dialog-footer');
      }) && (__blocks['footer-wrapper'] = function (parent) {
        var _context4;

        var args = arguments;
        return blocks['footer-wrapper'] ? blocks['footer-wrapper'].apply($this, _concatInstanceProperty(_context4 = [function () {
          return _blocks['footer-wrapper'].apply($this, args);
        }]).call(_context4, __slice.call(args, 1))) : _blocks['footer-wrapper'].apply($this, args);
      }) && __blocks['footer-wrapper'].apply($this, [__noop])];
    }) && (__blocks['content'] = function (parent) {
      var _context5;

      var args = arguments;
      return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context5 = [function () {
        return _blocks['content'].apply($this, args);
      }]).call(_context5, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
    }) && __blocks['content'].apply($this, [__noop]),
    '_context': $this,
    'ev-a:leaveEnd': function () {
      try {
        return self._leaveEnd;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-mousedown': function () {
      try {
        return self._onMouseDown;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }) : undefined;
  return h(MoveWrapper, {
    'autoDestroy': function () {
      try {
        return false;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': h('div', null, [(_blocks['overlay'] = function (parent) {
      return function () {
        try {
          return isHide ? true : overlay ? value : false;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Animate, {
        'className': 'k-overlay',
        'a:show': function () {
          try {
            return overlay ? value : false;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'key': 'overlay',
        'a:appear': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'a:transition': 'c-fade',
        '_context': $this,
        'ev-click': function () {
          try {
            return self._onClickOverlay;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }) : undefined;
    }) && (__blocks['overlay'] = function (parent) {
      var _context6;

      var args = arguments;
      return blocks['overlay'] ? blocks['overlay'].apply($this, _concatInstanceProperty(_context6 = [function () {
        return _blocks['overlay'].apply($this, args);
      }]).call(_context6, __slice.call(args, 1))) : _blocks['overlay'].apply($this, args);
    }) && __blocks['overlay'].apply($this, [__noop]), function () {
      try {
        return overlay;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', {
      'ev-click': function () {
        try {
          return self._onClickWrapper;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, function () {
      try {
        return dialog;
      } catch (e) {
        _e(e);
      }
    }.call($this), 'k-wrapper', 'wrapper', function (i) {
      widgets['wrapper'] = i;
    }) : function () {
      try {
        return dialog;
      } catch (e) {
        _e(e);
      }
    }.call($this)], _className(function () {
      try {
        var _ref2;

        return _ref2 = {
          "k-dialog-wrapper": true
        }, _ref2[self.get('className')] = self.get('className'), _ref2[scope.className] = scope.className, _ref2['k-open'] = value, _ref2;
      } catch (e) {
        _e(e);
      }
    }.call($this)), null, function () {
      try {
        return function (dom) {
          return self.$element = dom;
        };
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    '_context': $this,
    'ev-appended': function () {
      try {
        return self._onAppended;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  });
}