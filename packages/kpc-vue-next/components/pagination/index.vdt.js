import _Object$assign from "@babel/runtime-corejs3/core-js/object/assign";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js/instance/slice";
import Select from '../select';
import Input from '../input';
import { ButtonGroup, Button } from '../button';
import { _$, getRestProps } from '../utils';
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
      total = _self$get.total,
      current = _self$get.current,
      limit = _self$get.limit,
      limits = _self$get.limits,
      className = _self$get.className,
      showTotal = _self$get.showTotal,
      showGoto = _self$get.showGoto,
      counts = _self$get.counts,
      size = _self$get.size,
      noBorder = _self$get.noBorder,
      simple = _self$get.simple,
      showLimits = _self$get.showLimits;

  if (!total) return hc(' pagination ');
  var classNameObj = (_classNameObj = {
    'k-pagination': true
  }, _classNameObj[className] = className, _classNameObj["k-" + size] = size !== 'default', _classNameObj['k-no-border'] = noBorder, _classNameObj['k-simple'] = simple, _classNameObj);
  var type = 'default';

  if (noBorder || simple) {
    type = 'none';
  }

  var totalPages = Math.ceil(total / limit) || 0;

  var paginationButton = function paginationButton(page) {
    return h(Button, {
      'type': function () {
        try {
          return type;
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
      'icon': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'value': function () {
        try {
          return page;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': function () {
        try {
          return page;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      '_context': $this
    });
  };

  var paginationDot = function paginationDot(callback) {
    return h(Button, {
      'type': function () {
        try {
          return type;
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
      'icon': function () {
        try {
          return true;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'className': 'k-ellipsis',
      'children': '...',
      '_context': $this,
      'ev-click': function () {
        try {
          return callback;
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
  }.call($this)), [h(ButtonGroup, {
    'checkType': 'radio',
    'children': [h(Button, {
      'icon': function () {
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
      'disabled': function () {
        try {
          return current <= 1;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'type': function () {
        try {
          return type;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': h(Icon, {
        'className': 'ion-ios-arrow-left',
        '_context': $this
      }),
      '_context': $this,
      'ev-click': function () {
        try {
          return self.prev;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    }), function () {
      try {
        return function () {
          var items = [];
          var minCount = Math.ceil(counts / 2);
          var maxCount = totalPages - minCount;
          var prevPage = current - 1;
          var nextPage = current + 1;

          if (!simple) {
            if (totalPages > counts) {
              if (current <= minCount) {
                var max = counts - 2;

                for (var i = 1; i <= max; i++) {
                  items.push(paginationButton(i));
                }

                items.push(paginationDot(self.fastNext));
                items.push(paginationButton(totalPages));
              } else if (current > minCount && current <= maxCount) {
                items.push(paginationButton(1));
                items.push(paginationDot(self.fastPrev));
                var midCount = counts - 4;
                var mid = Math.floor(midCount / 2);
                var min = current - mid;

                var _max = midCount % 2 === 1 ? current + mid : current + mid - 1;

                for (var _i = min; _i <= _max; _i++) {
                  items.push(paginationButton(_i));
                }

                items.push(paginationDot(self.fastNext));
                items.push(paginationButton(totalPages));
              } else {
                items.push(paginationButton(1));
                items.push(paginationDot(self.fastPrev));

                var _min = totalPages - counts + 3;

                for (var _i2 = _min; _i2 <= totalPages; _i2++) {
                  items.push(paginationButton(_i2));
                }
              }
            } else {
              for (var _i3 = 1; _i3 <= totalPages; _i3++) {
                items.push(paginationButton(_i3));
              }
            }
          } else {
            items = [h(Input, {
              'size': function () {
                try {
                  return size === 'mini' || size === 'small' ? 'mini' : 'small';
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'autoWidth': function () {
                try {
                  return true;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              'value': function () {
                try {
                  return current;
                } catch (e) {
                  _e(e);
                }
              }.call($this),
              '_context': $this,
              'ev-change': function () {
                try {
                  return self._goto;
                } catch (e) {
                  _e(e);
                }
              }.call($this)
            }), h('span', null, [' / ', function () {
              try {
                return totalPages;
              } catch (e) {
                _e(e);
              }
            }.call($this)], 'k-text')];
          }

          return items;
        }();
      } catch (e) {
        _e(e);
      }
    }.call($this), h(Button, {
      'icon': function () {
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
      'disabled': function () {
        try {
          return current >= totalPages;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'type': function () {
        try {
          return type;
        } catch (e) {
          _e(e);
        }
      }.call($this),
      'children': h(Icon, {
        'className': 'ion-ios-arrow-right',
        '_context': $this
      }),
      '_context': $this,
      'ev-click': function () {
        try {
          return self.next;
        } catch (e) {
          _e(e);
        }
      }.call($this)
    })],
    '_context': $this,
    'value': _getModel(self, 'current'),
    'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'current', __n, $this);
    }
  }), function () {
    try {
      return !simple;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? [function () {
    try {
      return showLimits;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, h(Select, {
    'allowUnmatch': function () {
      try {
        return true;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'data': function () {
      try {
        return _mapInstanceProperty(limits).call(limits, function (item) {
          return {
            'value': item,
            'label': _$('{n} 条 / 页', {
              n: item
            })
          };
        });
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
    'value': _getModel(self, 'limit'),
    'ev-$change:value': function ev$changeValue(__c, __n) {
      _setModel(self, 'limit', __n, $this);
    }
  }), 'k-limits') : undefined, function () {
    try {
      return showGoto;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, [h('span', null, function () {
    try {
      return _$('跳至');
    } catch (e) {
      _e(e);
    }
  }.call($this), 'c-middle'), h(Input, {
    'size': function () {
      try {
        return size;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    'value': function () {
      try {
        return current;
      } catch (e) {
        _e(e);
      }
    }.call($this),
    '_context': $this,
    'ev-change': function () {
      try {
        return self._goto;
      } catch (e) {
        _e(e);
      }
    }.call($this)
  }), h('span', null, function () {
    try {
      return _$('页');
    } catch (e) {
      _e(e);
    }
  }.call($this), 'c-middle')], 'k-goto') : undefined, function () {
    try {
      return showTotal;
    } catch (e) {
      _e(e);
    }
  }.call($this) ? h('div', null, function () {
    try {
      return _$('共 {n} 条', {
        n: total
      });
    } catch (e) {
      _e(e);
    }
  }.call($this), 'k-total') : undefined] : undefined], _className(function () {
    try {
      return classNameObj;
    } catch (e) {
      _e(e);
    }
  }.call($this)));
}