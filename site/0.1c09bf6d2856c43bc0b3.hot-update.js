webpackHotUpdate(0,{

/***/ "./site/pages recursive ^\\.\\/\\.\\..*\\/index\\.json$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./site/pages recursive ^\\.\\/\\.\\..*\\/index\\.json$";

/***/ }),

/***/ "./site/pages/document/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _layout = __webpack_require__("./site/pages/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _index = __webpack_require__("./site/pages/document/index.vdt");

var _index2 = _interopRequireDefault(_index);

__webpack_require__("./site/pages/document/index.styl");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

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

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    _inherits(_default, _Layout);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: '_init',
        value: function _init() {
            if (process.node) {
                var data = !(function webpackMissingModule() { var e = new Error("Cannot find module \"..\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            } else {
                return _axios2.default.get(this.get('path') + 'index.json').then(function (_ref) {
                    var data = _ref.data;

                    console.log(data);
                });
            }
        }
    }]);

    return _default;
}(_layout2.default), _class2.template = _index2.default, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = Object.getOwnPropertyDescriptor(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));

exports.default = _default;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzIF5cXC5cXC9cXC5cXC4uKlxcL2luZGV4XFwuanNvbiQiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlcy9kb2N1bWVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsInByb2Nlc3MiLCJub2RlIiwiZGF0YSIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSxrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFHSyxpQkFBT0EsUUFBUCxFOzs7Ozs7Ozs7OztnQ0FHTztBQUNKLGdCQUFJQyxRQUFRQyxJQUFaLEVBQWtCO0FBQ2Qsb0JBQU1DLE9BQU8sOEhBQWI7QUFDSCxhQUZELE1BRU87QUFDSCx1QkFBTyxnQkFBTUMsR0FBTixDQUFhLEtBQUtBLEdBQUwsQ0FBUyxNQUFULENBQWIsaUJBQTJDQyxJQUEzQyxDQUFnRCxnQkFBWTtBQUFBLHdCQUFWRixJQUFVLFFBQVZBLElBQVU7O0FBQy9ERyw0QkFBUUMsR0FBUixDQUFZSixJQUFaO0FBQ0gsaUJBRk0sQ0FBUDtBQUdIO0FBQ0o7Ozs7NkJBVk1ILFEiLCJmaWxlIjoiMC4xYzA5YmY2ZDI4NTZjNDNiYzBiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc2l0ZS9wYWdlcyByZWN1cnNpdmUgXlxcXFwuXFxcXC9cXFxcLlxcXFwuLipcXFxcL2luZGV4XFxcXC5qc29uJFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2l0ZS9wYWdlcyBeXFwuXFwvXFwuXFwuLipcXC9pbmRleFxcLmpzb24kXG4vLyBtb2R1bGUgaWQgPSAuL3NpdGUvcGFnZXMgcmVjdXJzaXZlIF5cXC5cXC9cXC5cXC4uKlxcL2luZGV4XFwuanNvbiRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIF9pbml0KCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5ub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZShgLi4vLi4ke3RoaXMuZ2V0KCdwYXRoJyl9L2luZGV4Lmpzb25gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7dGhpcy5nZXQoJ3BhdGgnKX1pbmRleC5qc29uYCkudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9