import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
import Checkbox from '../checkbox';
import Input from '../input';
import { _$, getRestProps } from '../utils';
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
      data = _self$get.data,
      className = _self$get.className,
      value = _self$get.value,
      keyName = _self$get.keyName,
      leftChecked = _self$get.leftChecked,
      rightChecked = _self$get.rightChecked,
      filterable = _self$get.filterable,
      batchable = _self$get.batchable,
      filter = _filterInstanceProperty(_self$get),
      label = _self$get.label,
      placeholder = _self$get.placeholder,
      leftTitle = _self$get.leftTitle,
      rightTitle = _self$get.rightTitle,
      selectedKeys = _self$get.selectedKeys,
      enableAdd = _self$get.enableAdd,
      enableRemove = _self$get.enableRemove;

  var classNameObj = (_classNameObj = {
    'k-transfer': true
  }, _classNameObj[className] = className, _classNameObj);

  var Panel = function Panel(props) {
    var _context, _context4, _context7, _context12;

    var keywords = self.get(props.model + "Keywords");
    var data = keywords ? _filterInstanceProperty(_context = props.data).call(_context, function (item) {
      return filter(item, keywords);
    }) : props.data;
    return h('div', null, [h('div', null, (_blocks['header'] = function (parent) {
      return [h('div', null, [function () {
        try {
          return self.get(props.model + "Checked.length");
        } catch (e) {
          _e(e);
        }
      }.call($this), ' /\n                    ', function () {
        try {
          return data.length;
        } catch (e) {
          _e(e);
        }
      }.call($this)], 'k-count'), h(Checkbox, {
        'className': 'c-ellipsis',
        'value': function () {
          try {
            return self._isCheckAll(props.model);
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'children': function () {
          try {
            return props.title;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'ev-click': function () {
          try {
            var _context2;

            return _bindInstanceProperty(_context2 = self._toggleCheckAll).call(_context2, self, props.model);
          } catch (e) {
            _e(e);
          }
        }.call($this)
      })];
    }) && (__blocks['header'] = function (parent) {
      var _context3;

      var args = arguments;
      return blocks['header'] ? blocks['header'].apply($this, _concatInstanceProperty(_context3 = [function () {
        return _blocks['header'].apply($this, args);
      }]).call(_context3, __slice.call(args, 1))) : _blocks['header'].apply($this, args);
    }) && __blocks['header'].apply($this, _concatInstanceProperty(_context4 = [__noop]).call(_context4, function () {
      try {
        return [props.model];
      } catch (e) {
        _e(e);
      }
    }.call($this))), 'k-title'), function () {
      try {
        return filterable;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? (_blocks['filter'] = function (parent) {
      return h(Input, {
        'placeholder': function () {
          try {
            return placeholder;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'clearable': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'size': 'small',
        '_context': $this,
        '_blocks': function (blocks) {
          var _blocks = {},
              __blocks = extend({}, blocks);

          return (_blocks['prefix'] = function (parent) {
            return h('i', null, null, 'ion-ios-search');
          }) && (__blocks['prefix'] = function (parent) {
            var _context5;

            var args = arguments;
            return blocks['prefix'] ? blocks['prefix'].apply($this, _concatInstanceProperty(_context5 = [function () {
              return _blocks['prefix'].apply($this, args);
            }]).call(_context5, __slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
          }), __blocks;
        }.call($this, {}),
        'value': _getModel(self, function () {
          try {
            return props.model + "Keywords";
          } catch (e) {
            _e(e);
          }
        }.call($this)),
        'ev-$change:value': function ev$changeValue(__c, __n) {
          _setModel(self, function () {
            try {
              return props.model + "Keywords";
            } catch (e) {
              _e(e);
            }
          }.call($this), __n, $this);
        }
      });
    }) && (__blocks['filter'] = function (parent) {
      var _context6;

      var args = arguments;
      return _filterInstanceProperty(blocks) ? _filterInstanceProperty(blocks).apply($this, _concatInstanceProperty(_context6 = [function () {
        return _filterInstanceProperty(_blocks).apply($this, args);
      }]).call(_context6, __slice.call(args, 1))) : _filterInstanceProperty(_blocks).apply($this, args);
    }) && _filterInstanceProperty(__blocks).apply($this, _concatInstanceProperty(_context7 = [__noop]).call(_context7, function () {
      try {
        return [props.model];
      } catch (e) {
        _e(e);
      }
    }.call($this))) : undefined, h(Animate, {
      'className': 'k-list',
      'disabled': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': (_blocks['list'] = function (parent) {
        return __m(function () {
          try {
            return data;
          } catch (e) {
            _e(e);
          }
        }.call($this), function (value, key) {
          var _context9;

          return h(Animate, {
            'className': _className(function () {
              try {
                return {
                  "k-item": true,
                  "k-disabled": value.disabled
                };
              } catch (e) {
                _e(e);
              }
            }.call($this)),
            'key': function () {
              try {
                return value[keyName] || value.label || value;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'a:transition': 'c-fade',
            'children': h(Checkbox, {
              'name': function () {
                try {
                  return props.model;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'trueValue': function () {
                try {
                  return value[keyName];
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'disabled': function () {
                try {
                  return value.disabled;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'children': (_blocks['label'] = function (parent) {
                return function () {
                  try {
                    return label.call(self, value, key, props.model);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this);
              }) && (__blocks['label'] = function (parent) {
                var _context8;

                var args = arguments;
                return blocks['label'] ? blocks['label'].apply($this, _concatInstanceProperty(_context8 = [function () {
                  return _blocks['label'].apply($this, args);
                }]).call(_context8, __slice.call(args, 1))) : _blocks['label'].apply($this, args);
              }) && __blocks['label'].apply($this, _concatInstanceProperty(_context9 = [__noop]).call(_context9, function () {
                try {
                  return [value, key, props.model];
                } catch (e) {
                  _e(e);
                }
              }.call($this))),
              '_context': $this,
              'value': _getModel(self, function () {
                try {
                  return props.model + "CheckedKeys";
                } catch (e) {
                  _e(e);
                }
              }.call($this)),
              'ev-click': function () {
                try {
                  var _context10;

                  return _bindInstanceProperty(_context10 = self._onCheckboxChange).call(_context10, self, props.model, key);
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'ev-$change:value': function ev$changeValue(__c, __n) {
                _setModel(self, function () {
                  try {
                    return props.model + "CheckedKeys";
                  } catch (e) {
                    _e(e);
                  }
                }.call($this), __n, $this);
              }
            }),
            '_context': $this
          });
        }, $this);
      }) && (__blocks['list'] = function (parent) {
        var _context11;

        var args = arguments;
        return blocks['list'] ? blocks['list'].apply($this, _concatInstanceProperty(_context11 = [function () {
          return _blocks['list'].apply($this, args);
        }]).call(_context11, __slice.call(args, 1))) : _blocks['list'].apply($this, args);
      }) && __blocks['list'].apply($this, _concatInstanceProperty(_context12 = [__noop]).call(_context12, function () {
        try {
          return [props.model];
        } catch (e) {
          _e(e);
        }
      }.call($this))),
      '_context': $this
    })], 'k-panel');
  };

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h(Panel, {
    'data': function () {
      try {
        return _filterInstanceProperty(data).call(data, function (item) {
          return !~_indexOfInstanceProperty(selectedKeys).call(selectedKeys, item[keyName]);
        });
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'model': 'left',
    'title': function () {
      try {
        return leftTitle;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  }), h('div', null, [h(Button, {
    'circle': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return !enableRemove();
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'primary',
    'size': 'large',
    'children': h('i', null, null, 'k-icon ion-ios-arrow-left'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._remove;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(Button, {
    'circle': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'icon': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'disabled': function () {
      try {
        return !enableAdd();
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'type': 'primary',
    'size': 'large',
    'children': h('i', null, null, 'k-icon ion-ios-arrow-right'),
    '_context': $this,
    'ev-click': function () {
      try {
        return self._add;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  })], 'k-arrows'), h(Panel, {
    'data': function () {
      try {
        return value;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'model': 'right',
    'title': function () {
      try {
        return rightTitle;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this
  })], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}