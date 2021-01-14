import "core-js/modules/es.array.join";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _valuesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/values";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Input from '../input';
import Dropdown, { DropdownItem, DropdownMenu } from '../dropdown';
export default function (obj, _Vdt, blocks, $callee) {
  var _context7;

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
      style = _self$get.style,
      value = _self$get.value,
      trigger = _self$get.trigger,
      changeOnSelect = _self$get.changeOnSelect,
      format = _self$get.format,
      filterable = _self$get.filterable,
      keywords = _self$get.keywords,
      _show = _self$get._show;

  var labelObj = {
    label: null,
    labels: [],
    values: []
  };
  var hasData = false;

  var Options = function Options(props) {
    var data = props.data || [];
    var level = props.level;
    var parentShowed = props.parentShowed;
    var ret = []; // show loading

    if (!data.length) {
      if (!props.loaded) {
        return h('i', null, null, 'ion-load-c icon-loading');
      } else {
        return h('div', null, '无数据', 'k-no-data');
      }
    }

    _forEachInstanceProperty(data).call(data, function (item, index) {
      var _self$handleProps = self.handleProps(item, labelObj, level),
          active = _self$handleProps.active,
          selected = _self$handleProps.selected;

      var Item = function Item() {
        var _context;

        var events = {};
        events['ev-click'] = _bindInstanceProperty(_context = self._onClick).call(_context, self, item, level);

        if (trigger === 'hover') {
          var _context2;

          events['ev-mouseenter'] = _bindInstanceProperty(_context2 = self._onClick).call(_context2, self, item, level);
        }

        if (!changeOnSelect) {
          events['ev-select'] = self._onSelect;
        }

        return h(DropdownItem, _Object$assign({
          'disabled': function () {
            try {
              return item.disabled;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'className': _className(function () {
            try {
              return {
                'k-active': active
              };
            } catch (e) {
              _e(e);
            }
          }.call($this))
        }, function () {
          try {
            return events;
          } catch (e) {
            _e(e);
          }
        }.call($this), {
          'children': [function () {
            try {
              return item.template ? item.template(item, index) : item.label;
            } catch (e) {
              _e(e);
            }
          }.call($this), function () {
            try {
              return item.children;
            } catch (e) {
              _e(e);
            }
          }.call($this) ? h('i', null, null, 'k-arrow ion-ios-arrow-right') : undefined],
          '_context': $this
        }));
      };

      var show = parentShowed && active;
      ret.push(!item.children ? h(Item, {
        '_context': $this
      }) : h(Dropdown, {
        'position': function () {
          try {
            return {
              my: 'left top',
              at: 'right top',
              collisionDirection: ['left']
            };
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'of': 'parent',
        'disabled': function () {
          try {
            return item.disabled;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'trigger': function () {
          try {
            return trigger;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'value': function () {
          try {
            return show;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'children': [h(Item, {
          '_context': $this
        }), h(DropdownMenu, {
          'className': _className(function () {
            try {
              return {
                "k-select-dropdown": true,
                "k-cascader-dropdown": true
              };
            } catch (e) {
              _e(e);
            }
          }.call($this)),
          'children': function () {
            try {
              return show || selected;
            } catch (e) {
              _e(e);
            }
          }.call($this) ? h(Options, {
            'data': function () {
              try {
                return item.children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'level': function () {
              try {
                return level + 1;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'parentShowed': function () {
              try {
                return show;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'loaded': function () {
              try {
                return item.loaded;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          }) : undefined,
          '_context': $this,
          'ev-show': function () {
            try {
              var _context3;

              return _bindInstanceProperty(_context3 = self._onSubMenuShow).call(_context3, self, item);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        })],
        '_context': $this
      }));
    });

    return ret;
  };

  var Menu;

  if (!filterable || !keywords) {
    Menu = h(DropdownMenu, {
      'ref': function ref(i) {
        widgets['cascader'] = i;
      },
      'className': _className(function () {
        try {
          return {
            "k-select-dropdown": true,
            "k-cascader-dropdown": true
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'key': 'cascader',
      'children': h(Options, {
        'data': function () {
          try {
            return data;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'level': function () {
          try {
            return 0;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'parentShowed': function () {
          try {
            return _show;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'loaded': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this
      }),
      '_context': $this,
      'ev-$change:value': function () {
        try {
          return self._onChangeShow;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    });
  } else {
    Menu = h(DropdownMenu, {
      'ref': function ref(i) {
        widgets['menu'] = i;
      },
      'className': _className(function () {
        try {
          return {
            "k-select-dropdown": true,
            "k-cascader-filterable-dropdown": true
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'key': 'filterable',
      'children': function () {
        try {
          return function () {
            var items = self._filter();

            if (!items.length) return h('div', null, '无匹配数据', 'k-no-data');
            return __m(function () {
              try {
                return items;
              } catch (e) {
                _e(e);
              }
            }.call($this), function (value, key) {
              return h(DropdownItem, {
                'disabled': function () {
                  try {
                    return value.disabled;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'children': function () {
                  try {
                    var label, labels, length;
                    return label = _mapInstanceProperty(value).call(value, function (item) {
                      return item.label;
                    }).join(' / '), labels = label.split(keywords), length = labels.length, _mapInstanceProperty(labels).call(labels, function (item, index) {
                      var ret = [item];

                      if (index !== length - 1) {
                        ret.push(h('em', null, function () {
                          try {
                            return keywords;
                          } catch (e) {
                            _e(e);
                          }
                        }.call($this)));
                      }

                      return ret;
                    });
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-select': function () {
                  try {
                    var _context4;

                    return _bindInstanceProperty(_context4 = self._selectByFilter).call(_context4, self, value);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              });
            }, $this);
          }();
        } catch (e) {
          _e(e);
        }
      }.call($this),
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
  }

  labelObj.label = blocks.format ? (_blocks['format'] = function (parent) {
    return function () {
      try {
        var _context5;

        return _mapInstanceProperty(_context5 = _valuesInstanceProperty(labelObj)).call(_context5, function (value) {
          return value.label;
        }).join(' / ');
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['format'] = function (parent) {
    var _context6;

    var args = arguments;
    return blocks['format'] ? blocks['format'].apply($this, _concatInstanceProperty(_context6 = [function () {
      return _blocks['format'].apply($this, args);
    }]).call(_context6, __slice.call(args, 1))) : _blocks['format'].apply($this, args);
  }) && __blocks['format'].apply($this, _concatInstanceProperty(_context7 = [__noop]).call(_context7, function () {
    try {
      return [_valuesInstanceProperty(labelObj)];
    } catch (e) {
      _e(e);
    }
  }.call($this))) : format.call(this, _valuesInstanceProperty(labelObj));
  return function () {
    var _obj = {
      'Menu': function () {
        try {
          return Menu;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': 'k-cascader',
      'labelObj': function () {
        try {
          return labelObj;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    };
    return parent.call($this, _obj, _Vdt, blocks, parent);
  }.call($this);
}