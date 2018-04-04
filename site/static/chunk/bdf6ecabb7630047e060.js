webpackJsonp([25],{

/***/ "./site/components/table/demos/scheme/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/table/demos/scheme/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/table/demos/scheme/index.vdt");

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    _inherits(_default, _Intact);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    return _default;
}(_intact2.default), _class2.template = _index3.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;

/***/ }),

/***/ "./site/components/table/demos/scheme/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function (obj, _Vdt, blocks, $callee) {

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
       __o = __u.Options,
       _getModel = __o.getModel,
       _setModel = __o.setModel,
       _setCheckboxModel = __u.setCheckboxModel,
       _detectCheckboxChecked = __u.detectCheckboxChecked,
       _setSelectModel = __u.setSelectModel,
       self = this.data,
       scope = obj,
       Animate = self && self.Animate,
       parent = ($callee || {})._super;

   var data = [{ a: '虚拟DOM', b: '获取到了item.b', c: { c1: 'item.c.c1' }, e: '值形式' }];
   var scheme = {
      a: {
         title: 'a只是个id',
         template: function template(item) {
            return h('a', null, function () {
               try {
                  return [item.a][0];
               } catch (e) {
                  _e(e);
               }
            }.call(this));
         }
      },
      e: {
         title: 'e也只是个id',
         template: function template(item) {
            return item.e;
         }
      },
      b: 'key-{String}形式',
      'c.c1': 'key为一个连续获取的字符串',
      'd.d1': '没有这个key'
   };

   return h('div', null, [h('p', null, '{key: value}形式:'), h(_table2.default, { 'scheme': function () {
         try {
            return [scheme][0];
         } catch (e) {
            _e(e);
         }
      }.call(this), 'data': function () {
         try {
            return [data][0];
         } catch (e) {
            _e(e);
         }
      }.call(this), 'children': null, '_context': this }), h('p', null, '标签形式:'), h(_table2.default, { 'data': function () {
         try {
            return [data][0];
         } catch (e) {
            _e(e);
         }
      }.call(this), 'children': [h(_table.TableColumn, { 'title': 'a', 'template': function () {
            try {
               return [function (item) {
                  return h('a', null, function () {
                     try {
                        return [item.a][0];
                     } catch (e) {
                        _e(e);
                     }
                  }.call(this));
               }][0];
            } catch (e) {
               _e(e);
            }
         }.call(this), 'key': '', 'children': null, '_context': this }), h(_table.TableColumn, { 'title': 'a', 'template': function () {
            try {
               return [function (item) {
                  return h('a', null, function () {
                     try {
                        return [item.a][0];
                     } catch (e) {
                        _e(e);
                     }
                  }.call(this));
               }][0];
            } catch (e) {
               _e(e);
            }
         }.call(this), 'key': '', 'children': null, '_context': this })], '_context': this })]);
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3Mvc2NoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9zY2hlbWUvaW5kZXgudmR0Il0sIm5hbWVzIjpbImRlZmF1bHQiLCJ0ZW1wbGF0ZSIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiYSIsImIiLCJjIiwiYzEiLCJlIiwic2NoZW1lIiwidGl0bGUiLCJpdGVtIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBQVFBLE87Ozs7QUFDUjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHSyxpQkFBT0MsUUFBUCxFOzs7Ozs7Ozs7OzZCQUNNQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNMSSxVQUFTQyxHQUFULEVBQWNDLElBQWQsRUFBb0JDLE1BQXBCLEVBQTRCQyxPQUE1QixFQUFxQzs7QUFFcERGLFlBQVNBLE9BQU9HLEdBQWhCO0FBQ0FKLFdBQVFBLE1BQU0sRUFBZDtBQUNBRSxjQUFXQSxTQUFTLEVBQXBC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d0osRUFFckosQ0FGcUosQ0FBUDtBQUUzSSxhQUZzSSxDQUVySSxPQUFNSixDQUFOLEVBQVM7QUFBQzFCLGtCQUFHMEIsQ0FBSDtBQUFNO0FBQUMsVUFGd0csQ0FFdkdJLElBRnVHLENBRWxHLElBRmtHLENBQTNCLEVBRWhFLE9BQU8sRUFGeUQsRUFFckQsWUFBWSxJQUZ5QyxFQUVuQyxZQUFZLElBRnVCLEVBQWYsQ0FGdVIsQ0FBdEYsRUFJaE0sWUFBWSxJQUpvTCxFQUFULENBQS9QLENBQWYsQ0FBUDtBQUtDLEM7O0FBdENEIiwiZmlsZSI6InN0YXRpYy9jaHVuay9iZGY2ZWNhYmI3NjMwMDQ3ZTA2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9zY2hlbWUvaW5kZXguanMiLCJpbXBvcnQgVGFibGUsIHtUYWJsZUNvbHVtbn0gZnJvbSAna3BjL2NvbXBvbmVudHMvdGFibGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqLCBfVmR0LCBibG9ja3MsICRjYWxsZWUpIHtcblxuX1ZkdCB8fCAoX1ZkdCA9IFZkdCk7XG5vYmogfHwgKG9iaiA9IHt9KTtcbmJsb2NrcyB8fCAoYmxvY2tzID0ge30pO1xudmFyIGggPSBfVmR0Lm1pc3MuaCwgaGMgPSBfVmR0Lm1pc3MuaGMsIGh1ID0gX1ZkdC5taXNzLmh1LCB3aWRnZXRzID0gdGhpcyAmJiB0aGlzLndpZGdldHMgfHwge30sIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSB7fSxcbl9fdSA9IF9WZHQudXRpbHMsIGV4dGVuZCA9IF9fdS5leHRlbmQsIF9lID0gX191LmVycm9yLCBfY2xhc3NOYW1lID0gX191LmNsYXNzTmFtZSxcbl9fbyA9IF9fdS5PcHRpb25zLCBfZ2V0TW9kZWwgPSBfX28uZ2V0TW9kZWwsIF9zZXRNb2RlbCA9IF9fby5zZXRNb2RlbCxcbl9zZXRDaGVja2JveE1vZGVsID0gX191LnNldENoZWNrYm94TW9kZWwsIF9kZXRlY3RDaGVja2JveENoZWNrZWQgPSBfX3UuZGV0ZWN0Q2hlY2tib3hDaGVja2VkLFxuX3NldFNlbGVjdE1vZGVsID0gX191LnNldFNlbGVjdE1vZGVsLFxuc2VsZiA9IHRoaXMuZGF0YSwgc2NvcGUgPSBvYmosIEFuaW1hdGUgPSBzZWxmICYmIHNlbGYuQW5pbWF0ZSwgcGFyZW50ID0gKCRjYWxsZWUgfHwge30pLl9zdXBlclxuXG52YXIgZGF0YSA9IFt7YTogJ+iZmuaLn0RPTScsIGI6ICfojrflj5bliLDkuoZpdGVtLmInLCBjOiB7YzE6ICdpdGVtLmMuYzEnfSwgZTogJ+WAvOW9ouW8jyd9XTtcbnZhciBzY2hlbWUgPSB7XG4gICAgYToge1xuICAgICAgICB0aXRsZTogJ2Hlj6rmmK/kuKppZCcsXG4gICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgIHJldHVybiBoKCdhJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uYV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGU6IHtcbiAgICAgICAgdGl0bGU6ICdl5Lmf5Y+q5piv5LiqaWQnLFxuICAgICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICByZXR1cm4gaXRlbS5lO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiOiAna2V5LXtTdHJpbmd95b2i5byPJyxcbiAgICAnYy5jMSc6ICdrZXnkuLrkuIDkuKrov57nu63ojrflj5bnmoTlrZfnrKbkuLInLFxuICAgICdkLmQxJzogJ+ayoeaciei/meS4qmtleSdcbn07XG5cblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdwJywgbnVsbCwgJ3trZXk6IHZhbHVlfeW9ouW8jzonKSwgaChUYWJsZSwgeydzY2hlbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbc2NoZW1lXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2RhdGEnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbZGF0YV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaCgncCcsIG51bGwsICfmoIfnrb7lvaLlvI86JyksIGgoVGFibGUsIHsnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogW2goVGFibGVDb2x1bW4sIHsndGl0bGUnOiAnYScsICd0ZW1wbGF0ZSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICByZXR1cm4gaCgnYScsIG51bGwsIGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtpdGVtLmFdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpKVxuICAgICAgfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAna2V5JzogJycsICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaChUYWJsZUNvbHVtbiwgeyd0aXRsZSc6ICdhJywgJ3RlbXBsYXRlJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2Z1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgIHJldHVybiBoKCdhJywgbnVsbCwgZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2l0ZW0uYV1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcykpXG4gICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdrZXknOiAnJywgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXSwgJ19jb250ZXh0JzogdGhpc30pXSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3Mvc2NoZW1lL2luZGV4LnZkdCJdLCJzb3VyY2VSb290IjoiIn0=