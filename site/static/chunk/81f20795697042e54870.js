webpackJsonp([88],{

/***/ "./site/components/form/demos/label/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/form/demos/label/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/form/demos/label/index.vdt");

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

/***/ "./site/components/form/demos/label/index.vdt":
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

    return h(_form.Form, { 'children': [h(_form.FormItem, { 'children': h(_input.Input, { 'children': null, '_context': this }), '_context': this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.label = function (parent) {
                    return [h('i', { 'style': 'color: red' }, '*'), ' 姓名'];
                }) && (__blocks.label = function (parent) {
                    var self = this;
                    return blocks.label ? blocks.label.call(this, function () {
                        return _blocks.label.call(self, parent);
                    }) : _blocks.label.call(this, parent);
                }) && __blocks;
            }.call(this, {}) }), h(_form.FormItem, { 'children': h(_input.Input, { 'children': null, '_context': this }), '_context': this, '_blocks': function (blocks) {
                var _blocks = {},
                    __blocks = extend({}, blocks);
                return (_blocks.label = function (parent) {
                    return [h('i', null, null, 'ion-person'), ' 姓名'];
                }) && (__blocks.label = function (parent) {
                    var self = this;
                    return blocks.label ? blocks.label.call(this, function () {
                        return _blocks.label.call(self, parent);
                    }) : _blocks.label.call(this, parent);
                }) && __blocks;
            }.call(this, {}) })], '_context': this });
};

var _form = __webpack_require__("./components/form/index.js");

var _input = __webpack_require__("./components/input/index.js");

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC52ZHQiXSwibmFtZXMiOlsiZGVmYXVsdCIsInRlbXBsYXRlIiwib2JqIiwiX1ZkdCIsImJsb2NrcyIsIiRjYWxsZWUiLCJWZHQiLCJoIiwibWlzcyIsImhjIiwiaHUiLCJ3aWRnZXRzIiwiX2Jsb2NrcyIsIl9fYmxvY2tzIiwiX191IiwidXRpbHMiLCJleHRlbmQiLCJfZSIsImVycm9yIiwiX2NsYXNzTmFtZSIsImNsYXNzTmFtZSIsIl9fbyIsIk9wdGlvbnMiLCJfZ2V0TW9kZWwiLCJnZXRNb2RlbCIsIl9zZXRNb2RlbCIsInNldE1vZGVsIiwiX3NldENoZWNrYm94TW9kZWwiLCJzZXRDaGVja2JveE1vZGVsIiwiX2RldGVjdENoZWNrYm94Q2hlY2tlZCIsImRldGVjdENoZWNrYm94Q2hlY2tlZCIsIl9zZXRTZWxlY3RNb2RlbCIsInNldFNlbGVjdE1vZGVsIiwic2VsZiIsImRhdGEiLCJzY29wZSIsIkFuaW1hdGUiLCJwYXJlbnQiLCJfc3VwZXIiLCJsYWJlbCIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUFRQSxPOzs7O0FBQ1I7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBR0ssaUJBQU9DLFFBQVAsRTs7Ozs7Ozs7Ozs2QkFDTUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDTEksVUFBU0MsR0FBVCxFQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBcUM7O0FBRXBERixhQUFTQSxPQUFPRyxHQUFoQjtBQUNBSixZQUFRQSxNQUFNLEVBQWQ7QUFDQUUsZUFBV0EsU0FBUyxFQUFwQjtBQUNBLFFBQUlHLElBQUlKLEtBQUtLLElBQUwsQ0FBVUQsQ0FBbEI7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QWFDLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsWUFBVztBQUN6RCwrQkFBTzVCLFFBQVEyQixLQUFSLENBQWNDLElBQWQsQ0FBbUJQLElBQW5CLEVBQXlCSSxNQUF6QixDQUFQO0FBQ0MscUJBRnFCLENBQWYsR0FFRnpCLFFBQVEyQixLQUFSLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUJILE1BQXpCLENBRkw7QUFHQyxpQkFMVSxLQUtMeEIsUUFMRjtBQU1ILGFBUnlILENBUXhIMkIsSUFSd0gsQ0FRbkgsSUFSbUgsRUFRN0csRUFSNkcsQ0FBMUYsRUFBWixDQVJRLENBQWIsRUFnQk0sWUFBWSxJQWhCbEIsRUFBUixDQUFQO0FBaUJDLEM7O0FBaENEOztBQUFtRCIsImZpbGUiOiJzdGF0aWMvY2h1bmsvODFmMjA3OTU2OTcwNDJlNTQ4NzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2RlZmF1bHQgYXMgZGF0YX0gZnJvbSAnLi9pbmRleC5qc29uJztcbmltcG9ydCBJbnRhY3QgZnJvbSAnaW50YWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2luZGV4LnZkdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSW50YWN0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC5qcyIsImltcG9ydCB7Rm9ybSwgRm9ybUl0ZW19IGZyb20gJ2twYy9jb21wb25lbnRzL2Zvcm0nO2ltcG9ydCB7SW5wdXR9IGZyb20gJ2twYy9jb21wb25lbnRzL2lucHV0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iaiwgX1ZkdCwgYmxvY2tzLCAkY2FsbGVlKSB7XG5cbl9WZHQgfHwgKF9WZHQgPSBWZHQpO1xub2JqIHx8IChvYmogPSB7fSk7XG5ibG9ja3MgfHwgKGJsb2NrcyA9IHt9KTtcbnZhciBoID0gX1ZkdC5taXNzLmgsIGhjID0gX1ZkdC5taXNzLmhjLCBodSA9IF9WZHQubWlzcy5odSwgd2lkZ2V0cyA9IHRoaXMgJiYgdGhpcy53aWRnZXRzIHx8IHt9LCBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0ge30sXG5fX3UgPSBfVmR0LnV0aWxzLCBleHRlbmQgPSBfX3UuZXh0ZW5kLCBfZSA9IF9fdS5lcnJvciwgX2NsYXNzTmFtZSA9IF9fdS5jbGFzc05hbWUsXG5fX28gPSBfX3UuT3B0aW9ucywgX2dldE1vZGVsID0gX19vLmdldE1vZGVsLCBfc2V0TW9kZWwgPSBfX28uc2V0TW9kZWwsXG5fc2V0Q2hlY2tib3hNb2RlbCA9IF9fdS5zZXRDaGVja2JveE1vZGVsLCBfZGV0ZWN0Q2hlY2tib3hDaGVja2VkID0gX191LmRldGVjdENoZWNrYm94Q2hlY2tlZCxcbl9zZXRTZWxlY3RNb2RlbCA9IF9fdS5zZXRTZWxlY3RNb2RlbCxcbnNlbGYgPSB0aGlzLmRhdGEsIHNjb3BlID0gb2JqLCBBbmltYXRlID0gc2VsZiAmJiBzZWxmLkFuaW1hdGUsIHBhcmVudCA9ICgkY2FsbGVlIHx8IHt9KS5fc3VwZXJcblxuXG5cbnJldHVybiBoKEZvcm0sIHsnY2hpbGRyZW4nOiBbaChGb3JtSXRlbSwgeydjaGlsZHJlbic6IGgoSW5wdXQsIHsnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksICdfY29udGV4dCc6IHRoaXMsICdfYmxvY2tzJzogZnVuY3Rpb24oYmxvY2tzKSB7XG4gICAgdmFyIF9ibG9ja3MgPSB7fSwgX19ibG9ja3MgPSBleHRlbmQoe30sIGJsb2Nrcyk7XG4gICAgcmV0dXJuIChfYmxvY2tzLmxhYmVsID0gZnVuY3Rpb24ocGFyZW50KSB7cmV0dXJuIFtoKCdpJywgeydzdHlsZSc6ICdjb2xvcjogcmVkJ30sICcqJyksICcg5aeT5ZCNJ107fSkgJiYgKF9fYmxvY2tzLmxhYmVsID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmxhYmVsID8gYmxvY2tzLmxhYmVsLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5sYWJlbC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MubGFiZWwuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSksIGgoRm9ybUl0ZW0sIHsnY2hpbGRyZW4nOiBoKElucHV0LCB7J2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pLCAnX2NvbnRleHQnOiB0aGlzLCAnX2Jsb2Nrcyc6IGZ1bmN0aW9uKGJsb2Nrcykge1xuICAgIHZhciBfYmxvY2tzID0ge30sIF9fYmxvY2tzID0gZXh0ZW5kKHt9LCBibG9ja3MpO1xuICAgIHJldHVybiAoX2Jsb2Nrcy5sYWJlbCA9IGZ1bmN0aW9uKHBhcmVudCkge3JldHVybiBbaCgnaScsIG51bGwsIG51bGwsICdpb24tcGVyc29uJyksICcg5aeT5ZCNJ107fSkgJiYgKF9fYmxvY2tzLmxhYmVsID0gZnVuY3Rpb24ocGFyZW50KSB7XG52YXIgc2VsZiA9IHRoaXM7XG5yZXR1cm4gYmxvY2tzLmxhYmVsID8gYmxvY2tzLmxhYmVsLmNhbGwodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gX2Jsb2Nrcy5sYWJlbC5jYWxsKHNlbGYsIHBhcmVudCk7XG59KSA6IF9ibG9ja3MubGFiZWwuY2FsbCh0aGlzLCBwYXJlbnQpO1xufSkgJiYgX19ibG9ja3M7XG59LmNhbGwodGhpcywge30pfSldLCAnX2NvbnRleHQnOiB0aGlzfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaXRlL2NvbXBvbmVudHMvZm9ybS9kZW1vcy9sYWJlbC9pbmRleC52ZHQiXSwic291cmNlUm9vdCI6IiJ9