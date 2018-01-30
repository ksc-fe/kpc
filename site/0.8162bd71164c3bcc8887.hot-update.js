webpackHotUpdate(0,{

/***/ "./site/pages/document/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

// import axios from 'axios';

var _default = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Layout) {
    _inherits(_default, _Layout);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: '_init',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var path, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                path = this.get('path');

                                path = path.slice(1, -1);
                                console.log('../../' + path + '/index.json');
                                _context.next = 5;
                                return __webpack_require__("./site lazy recursive ^\\.\\/.*\\/index\\.json$")("./" + path + '/index.json');

                            case 5:
                                data = _context.sent;

                                console.log(data);
                                this.set(data);

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _init() {
                return _ref.apply(this, arguments);
            }

            return _init;
        }()
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL3BhZ2VzL2RvY3VtZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbInRlbXBsYXRlIiwicGF0aCIsImdldCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O3VCQUdLLGlCQUFPQSxRQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPQyxvQyxHQUFPLEtBQUtDLEdBQUwsQ0FBUyxNQUFULEM7O0FBQ1hELHVDQUFPQSxLQUFLRSxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFQO0FBQ0FDLHdDQUFRQyxHQUFSLFlBQXFCSixJQUFyQjs7dUNBQ21CLDhFQUFnQkEsSUFBaEIsaUI7OztBQUFiSyxvQzs7QUFDTkYsd0NBQVFDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBLHFDQUFLQyxHQUFMLENBQVNELElBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBUkdOLFEiLCJmaWxlIjoiMC44MTYyYmQ3MTE2NGMzYmNjODg4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgTGF5b3V0IHtcbiAgICBASW50YWN0LnRlbXBsYXRlKClcbiAgICBzdGF0aWMgdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGFzeW5jIF9pbml0KCkge1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuZ2V0KCdwYXRoJyk7XG4gICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDEsIC0xKTtcbiAgICAgICAgY29uc29sZS5sb2coYC4uLy4uLyR7cGF0aH0vaW5kZXguanNvbmApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgaW1wb3J0KGAuLi8uLi8ke3BhdGh9L2luZGV4Lmpzb25gKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvcGFnZXMvZG9jdW1lbnQvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9