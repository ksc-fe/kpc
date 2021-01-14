import "core-js/modules/es.function.name";
import _bindInstanceProperty from "@babel/runtime-corejs3/core-js/instance/bind";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js/instance/concat";
import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Button from '../button';
import Progress from '../progress';
import Dialog from '../dialog';
import { expandAnimationCallbacks, _$, getRestProps } from '../utils';
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
      className = _self$get.className,
      accept = _self$get.accept,
      multiple = _self$get.multiple,
      limit = _self$get.limit,
      files = _self$get.files,
      children = _self$get.children,
      type = _self$get.type,
      _dragOver = _self$get._dragOver,
      directory = _self$get.directory;

  var classNameObj = (_classNameObj = {
    'k-upload': true
  }, _classNameObj[className] = className, _classNameObj['k-drag'] = type === 'drag', _classNameObj['k-dragover'] = _dragOver, _classNameObj['k-gallery'] = type === 'gallery', _classNameObj);
  var events = {
    'ev-click': self._selectFile
  };

  if (type === 'drag') {
    events['ev-dragover'] = self._preventDefault;
    events['ev-dragenter'] = self._onDragEnter;
    events['ev-dragleave'] = self._onDragLeave;
    events['ev-drop'] = self._onDrop;
  }

  var handle = h('div', _Object$assign({}, function () {
    try {
      return events;
    } catch (e) {
      _e(e);
    }
  }.call($this)), (_blocks['content'] = function (parent) {
    return function () {
      try {
        return children;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? (_blocks['children'] = function (parent) {
      return function () {
        try {
          return children;
        } catch (e) {
          _e(e);
        }
      }.call($this);
    }) && (__blocks['children'] = function (parent) {
      var _context;

      var args = arguments;
      return blocks['children'] ? blocks['children'].apply($this, _concatInstanceProperty(_context = [function () {
        return _blocks['children'].apply($this, args);
      }]).call(_context, __slice.call(args, 1))) : _blocks['children'].apply($this, args);
    }) && __blocks['children'].apply($this, [__noop]) : function () {
      try {
        return type !== 'gallery';
      } catch (e) {
        _e(e);
      }
    }.call($this) ? (_blocks['_list'] = function (parent) {
      return function () {
        try {
          return type === 'select';
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Button, {
        'type': 'primary',
        'children': function () {
          try {
            return _$('点击上传');
          } catch (e) {
            _e(e);
          }
        }.call($this),
        '_context': $this
      }) : h('div', null, [h('i', null, null, 'k-icon ion-upload'), h('div', null, function () {
        try {
          return _$('将文件拖到此处，或点击上传');
        } catch (e) {
          _e(e);
        }
      }.call($this))], 'k-area');
    }) && (__blocks['_list'] = function (parent) {
      var _context2;

      var args = arguments;
      return blocks['_list'] ? blocks['_list'].apply($this, _concatInstanceProperty(_context2 = [function () {
        return _blocks['_list'].apply($this, args);
      }]).call(_context2, __slice.call(args, 1))) : _blocks['_list'].apply($this, args);
    }) && __blocks['_list'].apply($this, [__noop]) : (_blocks['_list'] = function (parent) {
      return h('i', null, null, 'k-picture-card k-add ion-ios-plus-empty');
    }) && (__blocks['_list'] = function (parent) {
      var _context3;

      var args = arguments;
      return blocks['_list'] ? blocks['_list'].apply($this, _concatInstanceProperty(_context3 = [function () {
        return _blocks['_list'].apply($this, args);
      }]).call(_context3, __slice.call(args, 1))) : _blocks['_list'].apply($this, args);
    }) && __blocks['_list'].apply($this, [__noop]);
  }) && (__blocks['content'] = function (parent) {
    var _context4;

    var args = arguments;
    return blocks['content'] ? blocks['content'].apply($this, _concatInstanceProperty(_context4 = [function () {
      return _blocks['content'].apply($this, args);
    }]).call(_context4, __slice.call(args, 1))) : _blocks['content'].apply($this, args);
  }) && __blocks['content'].apply($this, [__noop]), 'k-handle', null, function (i) {
    widgets['handle'] = i;
  });

  var CloseBtn = function CloseBtn(props) {
    return h(Button, {
      'type': 'none',
      'icon': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'size': 'mini',
      'className': 'k-close',
      'children': h('i', null, null, _className(function () {
        try {
          return "k-icon " + props.icon;
        } catch (e) {
          _e(e);
        }
      }.call($this))),
      '_context': $this,
      'ev-click': function () {
        try {
          var _context5;

          return _bindInstanceProperty(_context5 = self._removeFile).call(_context5, self, props.value, props.index);
        } catch (e) {
          _e(e);
        }
      }.call($this)
    });
  };

  return h('div', _Object$assign({}, function () {
    try {
      return getRestProps(self);
    } catch (e) {
      _e(e);
    }
  }.call($this)), [h('input', {
    'type': 'file',
    'accept': function () {
      try {
        return accept;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'multiple': function () {
      try {
        return multiple;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'directory': function () {
      try {
        return directory ? '' : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'webkitdirectory': function () {
      try {
        return directory ? '' : undefined;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'ev-change': function () {
      try {
        return self._onInputChange;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }, null, 'c-hidden', null, function (i) {
    widgets['input'] = i;
  }), function () {
    try {
      return type === 'gallery';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h(Animate, {
    'className': 'k-pictures',
    'key': 'pictures',
    'a:disabled': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'children': [__m(function () {
      try {
        return files;
      } catch (e) {
        _e(e);
      }
    }.call($this), function (value, key) {
      return h(Animate, {
        'className': _className(function () {
          try {
            return {
              "k-picture k-picture-card": true,
              'k-error': value.status === 'error'
            };
          } catch (e) {
            _e(e);
          }
        }.call($this)),
        'key': function () {
          try {
            return value.uid;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'a:transition': 'c-dropdown',
        'children': [h('img', {
          'src': function () {
            try {
              return value.url;
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }), function () {
          try {
            return value.status === 'ready' || value.status === 'uploading';
          } catch (e) {
            _e(e);
          }
        }.call($this) ? h(Animate, {
          'className': 'k-overlap',
          'a:transition': 'c-fade',
          'key': 'overlap',
          'children': h(Progress, {
            'percent': function () {
              try {
                return value.percent;
              } catch (e) {
                _e(e);
              }
            }.call($this),
            'size': 'mini',
            '_context': $this
          }),
          '_context': $this
        }) : h('div', {
          'ev-click': function () {
            try {
              var _context6;

              return _bindInstanceProperty(_context6 = self._showImage).call(_context6, self, value);
            } catch (e) {
              _e(e);
            }
          }.call($this)
        }, h('i', null, null, 'k-zoom ion-ios-eye-outline'), 'k-overlap k-icons'), h(CloseBtn, {
          'value': function () {
            try {
              return value;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'index': function () {
            try {
              return key;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'icon': 'ion-ios-close',
          '_context': $this
        })],
        '_context': $this
      });
    }, $this), function () {
      try {
        return !limit || files.length < limit;
      } catch (e) {
        _e(e);
      }
    }.call($this) ? h(Animate, {
      'key': 'handle',
      'a:transition': 'c-dropdown',
      'className': 'c-middle',
      'children': function () {
        try {
          return handle;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    }) : undefined],
    '_context': $this
  }) : (_blocks['_handle'] = function (parent) {
    return function () {
      try {
        return handle;
      } catch (e) {
        _e(e);
      }
    }.call($this);
  }) && (__blocks['_handle'] = function (parent) {
    var _context7;

    var args = arguments;
    return blocks['_handle'] ? blocks['_handle'].apply($this, _concatInstanceProperty(_context7 = [function () {
      return _blocks['_handle'].apply($this, args);
    }]).call(_context7, __slice.call(args, 1))) : _blocks['_handle'].apply($this, args);
  }) && __blocks['_handle'].apply($this, [__noop]), function () {
    try {
      return blocks.tip;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, (_blocks['tip'] = function (parent) {
    return null;
  }) && (__blocks['tip'] = function (parent) {
    var _context8;

    var args = arguments;
    return blocks['tip'] ? blocks['tip'].apply($this, _concatInstanceProperty(_context8 = [function () {
      return _blocks['tip'].apply($this, args);
    }]).call(_context8, __slice.call(args, 1))) : _blocks['tip'].apply($this, args);
  }) && __blocks['tip'].apply($this, [__noop]), 'k-tip') : undefined, function () {
    try {
      return type !== 'gallery';
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, __m(function () {
    try {
      return files;
    } catch (e) {
      _e(e);
    }
  }.call($this), function (value, key) {
    return h(Animate, _Object$assign({
      'className': _className(function () {
        try {
          return {
            "k-file": true,
            'k-error': value.status === 'error'
          };
        } catch (e) {
          _e(e);
        }
      }.call($this)),
      'key': function () {
        try {
          return value.uid;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }, function () {
      try {
        return expandAnimationCallbacks;
      } catch (e) {
        _e(e);
      }
    }.call($this), {
      'children': h('div', null, [h('div', null, [h('i', null, null, 'k-file-icon ion-document'), function () {
        try {
          return value.name;
        } catch (e) {
          _e(e);
        }
      }.call($this), h('div', null, [h(CloseBtn, {
        'value': function () {
          try {
            return value;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'index': function () {
          try {
            return key;
          } catch (e) {
            _e(e);
          }
        }.call($this),
        'icon': 'ion-ios-close-empty',
        '_context': $this
      }), function () {
        try {
          return value.status === 'done';
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('i', null, null, 'k-status-icon ion-ios-checkmark-outline') : undefined, function () {
        try {
          return value.status === 'error';
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h('i', null, null, 'k-status-icon ion-ios-close-outline') : undefined], 'k-icons')], 'k-name c-ellipsis'), function () {
        try {
          return value.status === 'ready' || value.status === 'uploading';
        } catch (e) {
          _e(e);
        }
      }.call($this) ? h(Animate, _Object$assign({
        'key': 'progress'
      }, function () {
        try {
          return expandAnimationCallbacks;
        } catch (e) {
          _e(e);
        }
      }.call($this), {
        'children': h(Progress, {
          'percent': function () {
            try {
              return value.percent;
            } catch (e) {
              _e(e);
            }
          }.call($this),
          'size': 'mini',
          '_context': $this
        }),
        '_context': $this
      })) : undefined], 'k-wrapper'),
      '_context': $this
    }));
  }, $this), 'k-files') : undefined, h(Dialog, {
    'title': function () {
      try {
        return _$("查看图片");
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'key': 'dialog',
    'className': 'k-upload-dialog',
    'children': h('a', {
      'href': function () {
        try {
          return self.get('_showedFile.url');
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'target': '_blank'
    }, h('img', {
      'src': function () {
        try {
          return self.get('_showedFile.url');
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })),
    '_context': $this,
    'value': _getModel(self, '_showImage'),
    'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, '_showImage', __n, $this);
    }
  })], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}