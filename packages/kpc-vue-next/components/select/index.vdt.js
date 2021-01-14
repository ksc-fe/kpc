import "core-js/modules/es.function.name";
import "core-js/modules/es.object.to-string";
import _valuesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/values";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Input from '../input';
import Dropdown, { DropdownItem, DropdownMenu } from '../dropdown';
import { isStringOrNumber, getTextByChildren, addStyle, _$, getRestProps, noop } from '../utils';
import Option from './option';
import OptionGroup from './group';
import { Tabs, Tab } from '../tabs';
import Icon from '../icon';
import Button from '../button';
import Checkbox from '../checkbox';
export default function (obj, _Vdt, blocks, $callee) {
  var _classNameObj, _context10, _context15;

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
      className = _self$get.className,
      clearable = _self$get.clearable,
      data = _self$get.data,
      value = _self$get.value,
      disabled = _self$get.disabled,
      filterable = _self$get.filterable,
      keywords = _self$get.keywords,
      _show = _self$get._show,
      placeholder = _self$get.placeholder,
      size = _self$get.size,
      style = _self$get.style,
      name = _self$get.name,
      children = _self$get.children,
      fluid = _self$get.fluid,
      width = _self$get.width,
      allowUnmatch = _self$get.allowUnmatch,
      card = _self$get.card,
      hideIcon = _self$get.hideIcon,
      container = _self$get.container,
      inline = _self$get.inline,
      loading = _self$get.loading,
      position = _self$get.position,
      searchable = _self$get.searchable;
  /* istanbul ignore if */


  if (filterable && blocks.value) {
    _e(new Error("You can't specify \"value\" extension point with 'filterable'."));
  }

  var multiple = self._isMultiple();

  var _activeLabel = self.get('_activeLabel');

  var _placeholder = placeholder == null ? allowUnmatch && filterable ? _$('请输入或选择') : _$('请选择') : placeholder;

  var classNameObj = (_classNameObj = {
    'k-select': true
  }, _classNameObj[className] = className, _classNameObj[scope.className] = scope.className, _classNameObj['k-disabled'] = disabled, _classNameObj['k-show'] = _show, _classNameObj['k-clearable'] = clearable, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-fluid'] = fluid, _classNameObj['k-with-prefix'] = blocks.prefix, _classNameObj['k-with-suffix'] = !hideIcon || loading || blocks.suffix, _classNameObj['k-inline'] = inline, _classNameObj);
  var hasValue = value != null && (!multiple && value !== '' || multiple && value.length);

  var isGroup = _Array$isArray(self.get('data.0.data'));

  var labelObj = scope.labelObj || {
    // only show value as label when allowUnmatch or loading is true, #40 #529
    label: (loading || allowUnmatch) && isStringOrNumber(value) ? value : null,
    labels: loading && multiple && _Array$isArray(value) ? value : []
  };
  var groupIndex = 0;
  var hasData = isGroup;
  var allShowedValues = [];

  var WrapCheckbox = function WrapCheckbox(props) {
    return h(Checkbox, {
      'trueValue': function () {
        try {
          return props.value;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': function () {
        try {
          return props.children;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this,
      'value': _getModel(self, '_checkedKeys'),
      'ev-$change:value': function ev$changeValue(__c, __n) {
        _setModel(self, '_checkedKeys', __n, $this);
      }
    });
  };

  var Options = function Options(props) {
    var data = props.data;
    var ret = [];

    _forEachInstanceProperty(data).call(data, function (item, index) {
      // deprecate text, use label instead of
      if (item.text) item.label = item.text;

      var _self$handleProps = self.handleProps(item, labelObj),
          valid = _self$handleProps.valid,
          active = _self$handleProps.active;

      if (valid) {
        var _children2 = item.template ? item.template(item, index) : item.label;

        if (searchable && multiple) {
          _children2 = h(WrapCheckbox, {
            'value': function () {
              try {
                return item.value;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'children': function () {
              try {
                return _children2;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          });
        }

        ret.push(h(DropdownItem, {
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
          }.call($this)),
          'hideOnSelect': function () {
            try {
              return !multiple;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'children': function () {
            try {
              return _children2;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-select': function () {
            try {
              var _context;

              return _bindInstanceProperty(_context = self._onSelect).call(_context, self, item.value);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        })); // for card type groups, we need to highlight the parent label

        if (active && card) {
          if (_activeLabel == null && _show) {
            _activeLabel = groupIndex;

            self._setActiveLabelSilent(_activeLabel);
          }
        }

        hasData = true;
        allShowedValues.push(item.value);
      }
    });

    return ret;
  };

  var OptionsVNodes = function OptionsVNodes(_ref) {
    var children = _ref.children;
    return _mapInstanceProperty(__u).call(__u, children ? _Array$isArray(children) ? children : [children] : children, function (vNode) {
      if (vNode.tag === Option) {
        var _context2, _className2;

        var props = vNode.props;
        props = _Object$assign({}, props, {
          'ev-select': _bindInstanceProperty(_context2 = self._onSelect).call(_context2, self, props.value),
          hideOnSelect: !multiple,
          label: props.label || getTextByChildren(props.children),
          children: props.children || props.label
        });

        var _self$handleProps2 = self.handleProps(props, labelObj),
            active = _self$handleProps2.active,
            valid = _self$handleProps2.valid;

        if (!valid) {
          return hc('', vNode.key);
        }

        props.className = _className((_className2 = {}, _className2[props.className] = props.className, _className2['k-active'] = active, _className2));
        hasData = true;
        allShowedValues.push(props.value); // for card type groups, we need to highlight the parent label

        if (active && card) {
          if (_activeLabel == null && _show) {
            _activeLabel = groupIndex;

            self._setActiveLabelSilent(_activeLabel);
          }
        } // if the multiple select option is active
        // add a √ icon


        if (active && multiple && !searchable) {
          props.children = [props.children, h('i', null, null, 'k-checkmark ion-ios-checkmark-empty')];
        } // if show search input in menu and support multiple selections, wrap Option by Checkbox


        if (searchable && multiple) {
          props.children = h(WrapCheckbox, {
            'value': function () {
              try {
                return props.value;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'children': function () {
              try {
                return props.children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          });
        } // return the cloned vNode


        vNode = _Vdt.miss.clone(vNode);
        vNode.props = props;
      } else if (vNode.tag === OptionGroup) {
        hasData = true;
        var _props = vNode.props;
        _props = _Object$assign({}, _props, {
          children: h(OptionsVNodes, {
            'children': function () {
              try {
                return _props.children;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            '_context': $this
          })
        });
        vNode = _Vdt.miss.clone(vNode);
        vNode.props = _props;
        groupIndex++;
      }

      return vNode;
    });
  };

  var labelList = [];
  var Menu = scope.Menu || h(DropdownMenu, {
    'ref': function ref(i) {
      widgets['menu'] = i;
    },
    'className': _className(function () {
      try {
        var _ref2;

        return _ref2 = {
          "k-select-dropdown": true,
          "k-card": card
        }, _ref2[className] = className, _ref2['k-searchable'] = searchable, _ref2;
      } catch (e) {
        _e(e);
      }
    }.call($this)),
    'children': (_blocks['menu'] = function (parent) {
      return function () {
        try {
          return function () {
            var _children = [];

            if (!isGroup) {
              _children.push(h(Options, {
                'data': function () {
                  try {
                    return data;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this
              }));
            } else {
              _children.push(__m(function () {
                try {
                  return data;
                } catch (e) {
                  _e(e);
                }
              }.call($this), function (value, key) {
                return h(OptionGroup, {
                  'label': function () {
                    try {
                      return value.label;
                    } catch (e) {
                      _e(e);
                    }
                  }.call($this),
                  'children': h(Options, {
                    'data': function () {
                      try {
                        return value.data;
                      } catch (e) {
                        _e(e);
                      }
                    }.call($this),
                    'parentLabel': function () {
                      try {
                        return value.label;
                      } catch (e) {
                        _e(e);
                      }
                    }.call($this),
                    '_context': $this
                  }),
                  '_context': $this
                });
              }, $this));
            }

            _children.push(h(OptionsVNodes, {
              'children': function () {
                try {
                  return children;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              '_context': $this
            })); // if it is card type group, we extract the label as navBar


            if (card) {
              var flattenEach = function flattenEach(children) {
                _forEachInstanceProperty(children).call(children, function (vNode) {
                  if (_Array$isArray(vNode)) {
                    flattenEach(vNode);
                  } else if (vNode) {
                    if (vNode.tag === OptionGroup) {
                      var props = vNode.props;
                      var label = (props._blocks || {}).label || props.label;
                      labelList.push({
                        label: label
                      });
                      vNode.props = _Object$assign({}, props, {
                        _card: true
                      }); // if the _activeLabel is undefined
                      // we active the first label

                      if (_activeLabel == null && _show) {
                        _activeLabel = index;

                        self._setActiveLabelSilent(index);
                      } // only render the active options


                      if (_activeLabel === index) {
                        vNodes.push(vNode);
                      }

                      index++;
                    } else {
                      vNodes.push(vNode);
                    }
                  }
                });
              };

              var vNodes = [];
              var index = 0;
              flattenEach(_children);
              _children = [h(Tabs, {
                'vertical': function () {
                  try {
                    return true;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'type': 'border-card',
                'children': __m(function () {
                  try {
                    return labelList;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this), function (value, key) {
                  return h(Tab, {
                    'value': function () {
                      try {
                        return key;
                      } catch (e) {
                        _e(e);
                      }
                    }.call($this),
                    'children': function () {
                      try {
                        return typeof value.label === 'function' ? // pass by block
                        value.label(noop) : // pass by property
                        value.label;
                      } catch (e) {
                        _e(e);
                      }
                    }.call($this),
                    '_context': $this
                  });
                }, $this),
                '_context': $this,
                'value': _getModel(self, '_activeLabel'),
                'ev-$change:value': function ev$changeValue(__c, __n) {
                  _setModel(self, '_activeLabel', __n, $this);
                }
              }), h('div', null, function () {
                try {
                  return vNodes;
                } catch (e) {
                  _e(e);
                }
              }.call($this), 'k-groups')];
            }

            if (!hasData) {
              _children = h('div', null, function () {
                try {
                  return _$('无数据');
                } catch (e) {
                  _e(e);
                }
              }.call($this), 'k-no-data');
            } // if searchable, add a search input to menu


            if (searchable) {
              _children = [h('div', null, [h(Input, {
                'fluid': function () {
                  try {
                    return true;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                'size': 'small',
                'placeholder': function () {
                  try {
                    return _$('请输入关键字');
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
                '_context': $this,
                '_blocks': function (blocks) {
                  var _blocks = {},
                      __blocks = extend({}, blocks);

                  return (_blocks['suffix'] = function (parent) {
                    return h(Icon, {
                      'className': 'ion-ios-search',
                      '_context': $this
                    });
                  }) && (__blocks['suffix'] = function (parent) {
                    var _context3;

                    var args = arguments;
                    return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context3 = [function () {
                      return _blocks['suffix'].apply($this, args);
                    }]).call(_context3, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
                  }), __blocks;
                }.call($this, {}),
                'value': _getModel(self, 'keywords'),
                'ev-$change:value': function ev$changeValue(__c, __n) {
                  _setModel(self, 'keywords', __n, $this);
                }
              }), function () {
                try {
                  return multiple;
                } catch (e) {
                  _e(e);
                }
              }.call($this) ? h('div', null, [h(Button, {
                'type': 'link',
                'size': 'small',
                'children': function () {
                  try {
                    return _$('全选');
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-click': function () {
                  try {
                    var _context4;

                    return _bindInstanceProperty(_context4 = self._selectAll).call(_context4, self, allShowedValues);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              }), h(Button, {
                'type': 'link',
                'size': 'small',
                'children': function () {
                  try {
                    return _$('反选');
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-click': function () {
                  try {
                    var _context5;

                    return _bindInstanceProperty(_context5 = self._toggleSelect).call(_context5, self, allShowedValues);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              }), h(Button, {
                'type': 'link',
                'size': 'small',
                'children': function () {
                  try {
                    return _$('清空');
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-click': function () {
                  try {
                    var _context6;

                    return _bindInstanceProperty(_context6 = self._unselectAll).call(_context6, self, allShowedValues);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              })], 'k-select-op') : undefined], 'k-select-header'), h('div', null, function () {
                try {
                  return _children;
                } catch (e) {
                  _e(e);
                }
              }.call($this), 'k-select-body'), function () {
                try {
                  return multiple;
                } catch (e) {
                  _e(e);
                }
              }.call($this) ? h('div', null, [h(Button, {
                'type': 'primary',
                'size': 'small',
                'children': function () {
                  try {
                    return _$('确定');
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-click': function () {
                  try {
                    return self._confirm;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              }), h(Button, {
                'size': 'small',
                'children': function () {
                  try {
                    return _$('取消');
                  } catch (e) {
                    _e(e);
                  }
                }.call($this),
                '_context': $this,
                'ev-click': function () {
                  try {
                    return self.hide;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              })], 'k-select-footer') : undefined];
            }

            return _children;
          }();
        } catch (e) {
          _e(e);
        }
      }.call($this);
    }) && (__blocks['menu'] = function (parent) {
      var _context7;

      var args = arguments;
      return blocks['menu'] ? blocks['menu'].apply($this, _concatInstanceProperty(_context7 = [function () {
        return _blocks['menu'].apply($this, args);
      }]).call(_context7, __slice.call(args, 1))) : _blocks['menu'].apply($this, args);
    }) && __blocks['menu'].apply($this, [__noop]),
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
  }); // if the value is not in options, then set hasValue to false

  if (hasValue && !allowUnmatch && labelObj.label == null && !labelObj.labels.length && !loading) {
    hasValue = false; // if this is a value, but the value does not exist in options
    // we set it to empty, #41

    self._clearValue();
  }

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this), {
    'style': function () {
      try {
        return width != null ? addStyle(style, {
          width: width + "px"
        }) : style;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'tabindex': function () {
      try {
        return disabled ? "-1" : "0";
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keypress': function () {
      try {
        return self._onKeypress;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-keydown': function () {
      try {
        return self._onKeydown;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-focusout': function () {
      try {
        return self._onInputFocusOut;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h(Dropdown, {
    'position': function () {
      try {
        return position;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'trigger': 'click',
    'disabled': function () {
      try {
        return disabled;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ref': function ref(i) {
      widgets['dropdown'] = i;
    },
    'container': function () {
      try {
        return container;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [h('div', {
      'tabindex': '-1',
      'ev-click': function () {
        try {
          return self._focusInput;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, [function () {
      try {
        return blocks.prefix;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('div', null, (_blocks['prefix'] = function (parent) {
      return null;
    }) && (__blocks['prefix'] = function (parent) {
      var _context8;

      var args = arguments;
      return blocks['prefix'] ? blocks['prefix'].apply($this, _concatInstanceProperty(_context8 = [function () {
        return _blocks['prefix'].apply($this, args);
      }]).call(_context8, __slice.call(args, 1))) : _blocks['prefix'].apply($this, args);
    }) && __blocks['prefix'].apply($this, [__noop]), 'k-prefix') : undefined, h(Animate, {
      'a:disabled': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': 'k-main',
      'children': [h('input', {
        'type': 'hidden',
        'value': function () {
          try {
            return value;
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
        }.call($this)
      }), function () {
        try {
          return !multiple && filterable;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Input, {
        'value': function () {
          try {
            return keywords == null ? labelObj.label : keywords;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'disabled': function () {
          try {
            return disabled;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'placeholder': function () {
          try {
            return _placeholder;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ref': function ref(i) {
          widgets['input'] = i;
        },
        'size': function () {
          try {
            return size;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'fluid': function () {
          try {
            return true;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this,
        'ev-input': function () {
          try {
            return self._onSearch;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'ev-focus': function () {
          try {
            return self._selectInput;
          } catch (e) {
            _e(e);
          }
        }.call($this)
      }) : function () {
        try {
          return !filterable && !hasValue;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('span', null, function () {
        try {
          return _placeholder;
        } catch (e) {
          _e(e);
        }
      }.call($this), 'k-placeholder c-ellipsis') : function () {
        try {
          return !multiple;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('span', null, (_blocks['value'] = function (parent) {
        return function () {
          try {
            return labelObj.label;
          } catch (e) {
            _e(e);
          }
        }.call($this);
      }) && (__blocks['value'] = function (parent) {
        var _context9;

        var args = arguments;
        return blocks['value'] ? blocks['value'].apply($this, _concatInstanceProperty(_context9 = [function () {
          return _blocks['value'].apply($this, args);
        }]).call(_context9, __slice.call(args, 1))) : _blocks['value'].apply($this, args);
      }) && __blocks['value'].apply($this, _concatInstanceProperty(_context10 = [__noop]).call(_context10, function () {
        try {
          return [value, labelObj.label];
        } catch (e) {
          _e(e);
        }
      }.call($this))), 'k-value c-ellipsis') : h(Animate, {
        'a:tag': 'span',
        'a:transition': 'c-fade',
        'className': _className(function () {
          try {
            return {
              "k-values": true,
              "k-with-values": _valuesInstanceProperty(blocks)
            };
          } catch (e) {
            _e(e);
          }
        }.call($this)),
        'children': [(_blocks['values'] = function (parent) {
          return __m(function () {
            try {
              return labelObj.labels;
            } catch (e) {
              _e(e);
            }
          }.call($this), function (item, index) {
            var _context12;

            return h(Animate, {
              'a:tag': 'span',
              'className': 'k-select-tag',
              'key': function () {
                try {
                  return value[index];
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'a:transition': 'c-fade',
              'children': [h('span', null, (_blocks['value'] = function (parent) {
                return function () {
                  try {
                    return item;
                  } catch (e) {
                    _e(e);
                  }
                }.call($this);
              }) && (__blocks['value'] = function (parent) {
                var _context11;

                var args = arguments;
                return blocks['value'] ? blocks['value'].apply($this, _concatInstanceProperty(_context11 = [function () {
                  return _blocks['value'].apply($this, args);
                }]).call(_context11, __slice.call(args, 1))) : _blocks['value'].apply($this, args);
              }) && __blocks['value'].apply($this, _concatInstanceProperty(_context12 = [__noop]).call(_context12, function () {
                try {
                  return [value[index], item];
                } catch (e) {
                  _e(e);
                }
              }.call($this))), 'k-text'), h(Icon, {
                'className': 'ion-ios-close-empty k-close',
                '_context': $this,
                'ev-click': function () {
                  try {
                    var _context13;

                    return _bindInstanceProperty(_context13 = self._delete).call(_context13, self, value[index]);
                  } catch (e) {
                    _e(e);
                  }
                }.call($this)
              })],
              '_context': $this
            });
          }, $this);
        }) && (__blocks['values'] = function (parent) {
          var _context14;

          var args = arguments;
          return _valuesInstanceProperty(blocks) ? _valuesInstanceProperty(blocks).apply($this, _concatInstanceProperty(_context14 = [function () {
            return _valuesInstanceProperty(_blocks).apply($this, args);
          }]).call(_context14, __slice.call(args, 1))) : _valuesInstanceProperty(_blocks).apply($this, args);
        }) && _valuesInstanceProperty(__blocks).apply($this, _concatInstanceProperty(_context15 = [__noop]).call(_context15, function () {
          try {
            return [value, labelObj.labels];
          } catch (e) {
            _e(e);
          }
        }.call($this))), function () {
          try {
            return filterable;
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Input, {
          'value': function () {
            try {
              return keywords;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'disabled': function () {
            try {
              return disabled;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'placeholder': function () {
            try {
              return !hasValue ? _placeholder : '';
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'ref': function ref(i) {
            widgets['input'] = i;
          },
          'autoWidth': function () {
            try {
              return true;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'size': function () {
            try {
              return size;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          '_context': $this,
          'ev-input': function () {
            try {
              return self._onSearch;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }) : undefined],
        '_context': $this
      })],
      '_context': $this
    }), function () {
      try {
        return !hideIcon || clearable || loading || blocks.suffix;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h('span', null, [function () {
      try {
        return clearable;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(Icon, {
      'className': _className(function () {
        try {
          return {
            "k-clear ion-ios-close": true,
            "k-show": hasValue
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      '_context': $this,
      'ev-click': function () {
        try {
          return self._onClear;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }) : undefined, h('span', null, (_blocks['suffix'] = function (parent) {
      return function () {
        try {
          return loading;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Icon, {
        'className': 'ion-load-c icon-loading',
        '_context': $this
      }) : function () {
        try {
          return !hideIcon;
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('i', null, null, 'k-arrow ion-arrow-down-b') : undefined;
    }) && (__blocks['suffix'] = function (parent) {
      var _context16;

      var args = arguments;
      return blocks['suffix'] ? blocks['suffix'].apply($this, _concatInstanceProperty(_context16 = [function () {
        return _blocks['suffix'].apply($this, args);
      }]).call(_context16, __slice.call(args, 1))) : _blocks['suffix'].apply($this, args);
    }) && __blocks['suffix'].apply($this, [__noop]), 'k-suffix-icon')], 'k-suffix') : undefined], 'k-wrapper', null, function (i) {
      widgets['wrapper'] = i;
    }), function () {
      try {
        return Menu;
      } catch (e) {
        _e(e);
      }
    }.call($this)],
    '_context': $this,
    'ev-hide': function () {
      try {
        return self._onHide;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), _className(function () {
    try {
      return _Object$assign({}, classNameObj, {
        'k-has-value': hasValue
      });
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}