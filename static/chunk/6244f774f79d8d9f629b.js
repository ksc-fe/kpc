webpackJsonp([3],{

/***/ "./site/src/pages/index/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _getOwnPropertyDescriptor = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/dist/intact.vue.js");

var _intact2 = _interopRequireDefault(_intact);

var _index = __webpack_require__("./site/src/pages/index/index.vdt");

var _index2 = _interopRequireDefault(_index);

var _layout = __webpack_require__("./site/src/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

__webpack_require__("./site/src/pages/index/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    (0, _inherits3.default)(_default, _Layout);

    function _default() {
        (0, _classCallCheck3.default)(this, _default);
        return (0, _possibleConstructorReturn3.default)(this, _Layout.apply(this, arguments));
    }

    return _default;
}(_layout2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];

/***/ }),

/***/ "./site/src/pages/index/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1527754406569
      var cssReload = require("!../../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./site/src/pages/index/index.vdt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

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
        $this = this,
        scope = obj,
        Animate = self && self.Animate,
        parent = ($callee || {})._super;

    return function () {
        var _obj = { 'className': 'index-page', 'children': null };
        if (_obj.hasOwnProperty("arguments")) {
            extend(_obj, _obj.arguments === true ? obj : _obj.arguments);
            delete _obj.arguments;
        }
        return parent.call(this, _obj, _Vdt, function (blocks) {
            var _blocks = {},
                __blocks = extend({}, blocks);
            return (_blocks["content"] = function (parent) {
                return h('article', null, ['\n			', hc(' <img src=\"images/logo.png\" /> '), h('h1', null, 'KPC'), h('p', null, '支持多框架的前端高质量组件库'), h('div', null, [h(_button.Button, { 'tagName': function () {
                        try {
                            return [_link.Link][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'type': 'primary', 'tagProps': function () {
                        try {
                            return [{
                                href: "/kpc" + '/docs/getting-started/'
                            }][0];
                        } catch (e) {
                            _e(e);
                        }
                    }.call(this), 'className': 'button', 'children': '开始', '_context': $this }), h(_button.Button, { 'href': 'https://github.com/ksc-fe/kpc', 'className': 'button', 'target': '_blank', 'children': 'GitHub', '_context': $this })], 'actions'), h('div', null, [h('div', null, [h('h2', null, '支持多框架', 'blue'), h('div', null, '\n                        同时支持Intact和Vue框架\n					')], 'feature'), h('div', null, [h('h2', null, '忠于原生，增强原生', 'yellow'), h('div', null, '\n                        在保持浏览器原生特性的基础上，增强交互能力\n					')], 'feature'), h('div', null, [h('h2', null, '便捷开发', 'red'), h('div', null, '\n                        支持按需加载，主题定制，国际化等特性。并且提供了配套的脚手架方便快速初始化项目\n					')], 'feature')], 'features')], 'home-header');
            }) && (__blocks["content"] = function (parent) {
                var self = this;
                return blocks["content"] ? blocks["content"].call(this, function () {
                    return _blocks["content"].call(self, parent);
                }) : _blocks["content"].call(this, parent);
            }), __blocks;
        }.call(this, blocks), parent);
    }.call(this);
};

var _button = __webpack_require__("./components/button/index.js");

var _link = __webpack_require__("./components/link/index.js");

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsIiwid2VicGFjazovLy8uL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnZkdCJdLCJuYW1lcyI6WyJJbnRhY3QiLCJ0ZW1wbGF0ZSIsIkxheW91dCIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwiJHRoaXMiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJfb2JqIiwiaGFzT3duUHJvcGVydHkiLCJhcmd1bWVudHMiLCJjYWxsIiwiQnV0dG9uIiwiTGluayIsImUiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0tBLGlCQUFPQyxRQUFQLEU7Ozs7Ozs7OztFQUR3QkMsZ0IsV0FFbEJELFEsR0FBV0EsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdEI7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLFlBQVksU0FBUyxFQUFFO0FBQ3JJO0FBQ0E7QUFDQTs7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QnVDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCLFlBQVc7QUFDbkUsMkJBQU8vQixRQUFRLFNBQVIsRUFBbUIrQixJQUFuQixDQUF3QlYsSUFBeEIsRUFBOEJLLE1BQTlCLENBQVA7QUFDQyxpQkFGMEIsQ0FBcEIsR0FFRjFCLFFBQVEsU0FBUixFQUFtQitCLElBQW5CLENBQXdCLElBQXhCLEVBQThCTCxNQUE5QixDQUZMO0FBR0MsYUFQVyxHQU9SekIsUUFQQTtBQVFILFNBVndDLENBVXZDOEIsSUFWdUMsQ0FVbEMsSUFWa0MsRUFVNUJ2QyxNQVY0QixDQUE5QixFQVVXa0MsTUFWWCxDQUFQO0FBV0gsS0FqQk0sQ0FpQkpLLElBakJJLENBaUJDLElBakJELENBQVA7QUFrQkMsQzs7QUFoQ0Q7O0FBQTZDIiwiZmlsZSI6InN0YXRpYy9jaHVuay82MjQ0Zjc3NGY3OWQ4ZDlmNjI5Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgJy4vaW5kZXguc3R5bCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTI3NzU0NDA2NTY5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL3NyYy9wYWdlcy9pbmRleC9pbmRleC5zdHlsXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnN0eWxcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHtCdXR0b259IGZyb20gJ2twYy9jb21wb25lbnRzL2J1dHRvbic7aW1wb3J0IHtMaW5rfSBmcm9tICdrcGMvY29tcG9uZW50cy9saW5rJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCAkdGhpcyA9IHRoaXMsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9vYmogPSB7J2NsYXNzTmFtZSc6ICdpbmRleC1wYWdlJywgJ2NoaWxkcmVuJzogbnVsbH07XG4gICAgaWYgKF9vYmouaGFzT3duUHJvcGVydHkoXCJhcmd1bWVudHNcIikpIHtcbiAgICAgICAgZXh0ZW5kKF9vYmosIF9vYmouYXJndW1lbnRzID09PSB0cnVlID8gb2JqIDogX29iai5hcmd1bWVudHMpO1xuICAgICAgICBkZWxldGUgX29iai5hcmd1bWVudHM7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQuY2FsbCh0aGlzLCBfb2JqLCBfVmR0LCBmdW5jdGlvbihibG9ja3MpIHtcbiAgICB2YXIgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IGV4dGVuZCh7fSwgYmxvY2tzKTtcbiAgICByZXR1cm4gKChfYmxvY2tzW1wiY29udGVudFwiXSA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBoKCdhcnRpY2xlJywgbnVsbCwgWydcXG5cdFx0XHQnLCBoYygnIDxpbWcgc3JjPVxcXCJpbWFnZXMvbG9nby5wbmdcXFwiIC8+ICcpLCBoKCdoMScsIG51bGwsICdLUEMnKSwgaCgncCcsIG51bGwsICfmlK/mjIHlpJrmoYbmnrbnmoTliY3nq6/pq5jotKjph4/nu4Tku7blupMnKSwgaCgnZGl2JywgbnVsbCwgW2goQnV0dG9uLCB7J3RhZ05hbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbTGluayBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAndHlwZSc6ICdwcmltYXJ5JywgJ3RhZ1Byb3BzJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke3Byb2Nlc3MuVVJMX1BSRUZJWH0vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvYFxuICAgICAgICAgICAgICAgICAgICB9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjbGFzc05hbWUnOiAnYnV0dG9uJywgJ2NoaWxkcmVuJzogJ+W8gOWniycsICdfY29udGV4dCc6ICR0aGlzfSksIGgoQnV0dG9uLCB7J2hyZWYnOiAnaHR0cHM6Ly9naXRodWIuY29tL2tzYy1mZS9rcGMnLCAnY2xhc3NOYW1lJzogJ2J1dHRvbicsICd0YXJnZXQnOiAnX2JsYW5rJywgJ2NoaWxkcmVuJzogJ0dpdEh1YicsICdfY29udGV4dCc6ICR0aGlzfSldLCAnYWN0aW9ucycpLCBoKCdkaXYnLCBudWxsLCBbaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+aUr+aMgeWkmuahhuaeticsICdibHVlJyksIGgoJ2RpdicsIG51bGwsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICDlkIzml7bmlK/mjIFJbnRhY3TlkoxWdWXmoYbmnrZcXG5cdFx0XHRcdFx0JyldLCAnZmVhdHVyZScpLCBoKCdkaXYnLCBudWxsLCBbaCgnaDInLCBudWxsLCAn5b+g5LqO5Y6f55Sf77yM5aKe5by65Y6f55SfJywgJ3llbGxvdycpLCBoKCdkaXYnLCBudWxsLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAg5Zyo5L+d5oyB5rWP6KeI5Zmo5Y6f55Sf54m55oCn55qE5Z+656GA5LiK77yM5aKe5by65Lqk5LqS6IO95YqbXFxuXHRcdFx0XHRcdCcpXSwgJ2ZlYXR1cmUnKSwgaCgnZGl2JywgbnVsbCwgW2goJ2gyJywgbnVsbCwgJ+S+v+aNt+W8gOWPkScsICdyZWQnKSwgaCgnZGl2JywgbnVsbCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIOaUr+aMgeaMiemcgOWKoOi9ve+8jOS4u+mimOWumuWItu+8jOWbvemZheWMluetieeJueaAp+OAguW5tuS4lOaPkOS+m+S6humFjeWll+eahOiEmuaJi+aetuaWueS+v+W/q+mAn+WIneWni+WMlumhueebrlxcblx0XHRcdFx0XHQnKV0sICdmZWF0dXJlJyldLCAnZmVhdHVyZXMnKV0sICdob21lLWhlYWRlcicpO30pICYmIChfX2Jsb2Nrc1tcImNvbnRlbnRcIl0gPSBmdW5jdGlvbihwYXJlbnQpIHtcbnZhciBzZWxmID0gdGhpcztcbnJldHVybiBibG9ja3NbXCJjb250ZW50XCJdID8gYmxvY2tzW1wiY29udGVudFwiXS5jYWxsKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIF9ibG9ja3NbXCJjb250ZW50XCJdLmNhbGwoc2VsZiwgcGFyZW50KTtcbn0pIDogX2Jsb2Nrc1tcImNvbnRlbnRcIl0uY2FsbCh0aGlzLCBwYXJlbnQpO1xufSksIF9fYmxvY2tzKTtcbn0uY2FsbCh0aGlzLCBibG9ja3MpLCBwYXJlbnQpXG59KS5jYWxsKHRoaXMpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudmR0Il0sInNvdXJjZVJvb3QiOiIifQ==