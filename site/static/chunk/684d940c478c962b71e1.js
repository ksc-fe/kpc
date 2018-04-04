webpackJsonp([28],{

/***/ "./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/table/demos/checkedKey_s/index.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example.index-93 .no-data-template {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n}\n.example.index-93 .no-data-template .k-table-wrapper {\n  margin-left: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./site/components/table/demos/checkedKey_s/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.data = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _init, _class2, _temp;

var _index = __webpack_require__("./site/components/table/demos/checkedKey_s/index.json");

Object.defineProperty(exports, 'data', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_index).default;
    }
});

var _intact = __webpack_require__("./node_modules/intact-vue/src/index.js");

var _intact2 = _interopRequireDefault(_intact);

var _index2 = __webpack_require__("./site/components/table/demos/checkedKey_s/index.vdt");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__("./site/components/table/demos/checkedKey_s/index.styl");

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

    _createClass(_default, [{
        key: 'alertSome',
        value: function alertSome(widget) {
            alert(widget.get('checkedKey'));
        }
    }]);

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

/***/ "./site/components/table/demos/checkedKey_s/index.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/table/demos/checkedKey_s/index.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/table/demos/checkedKey_s/index.styl", function() {
			var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"url\":true}!./node_modules/postcss-loader/lib/index.js?{\"plugins\":[null]}!./node_modules/stylus-loader/index.js?{\"include css\":true,\"sourceMap\":false}!./site/components/table/demos/checkedKey_s/index.styl");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./site/components/table/demos/checkedKey_s/index.vdt":
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

  var data1 = [{ a: '赋默认值选中' }, { a: '不选中' }];
  var data2 = [{ a: { text: '选中', id: 0 } }, { a: { text: '不选中', id: 1 } }];

  return h('div', null, [h('div', null, [h(_table2.default, { 'scheme': function () {
      try {
        return [{ a: 'radio不指定rowKey' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data1][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'checkedKey': function () {
      try {
        return [0][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'checkType': 'radio', 'children': null, '_context': this }), h(_table2.default, { 'scheme': function () {
      try {
        return [{ a: 'radio' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'checkType': 'radio', 'children': null, '_context': this })], 'no-data-template'), h('div', null, [h(_table2.default, { 'scheme': function () {
      try {
        return [{ a: 'checkbox' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data1][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'checkedKey': function () {
      try {
        return [0][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this }), h(_table2.default, { 'scheme': function () {
      try {
        return [{ a: 'checkbox' }][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'data': function () {
      try {
        return [data2][0];
      } catch (e) {
        _e(e);
      }
    }.call(this), 'children': null, '_context': this })], 'no-data-template')]);
};

var _table = __webpack_require__("./components/table/index.js");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvY2hlY2tlZEtleV9zL2luZGV4LnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2NoZWNrZWRLZXlfcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvY2hlY2tlZEtleV9zL2luZGV4LnN0eWw/Y2U3YSIsIndlYnBhY2s6Ly8vLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvY2hlY2tlZEtleV9zL2luZGV4LnZkdCJdLCJuYW1lcyI6WyJkZWZhdWx0IiwidGVtcGxhdGUiLCJ3aWRnZXQiLCJhbGVydCIsImdldCIsIm9iaiIsIl9WZHQiLCJibG9ja3MiLCIkY2FsbGVlIiwiVmR0IiwiaCIsIm1pc3MiLCJoYyIsImh1Iiwid2lkZ2V0cyIsIl9ibG9ja3MiLCJfX2Jsb2NrcyIsIl9fdSIsInV0aWxzIiwiZXh0ZW5kIiwiX2UiLCJlcnJvciIsIl9jbGFzc05hbWUiLCJjbGFzc05hbWUiLCJfX28iLCJPcHRpb25zIiwiX2dldE1vZGVsIiwiZ2V0TW9kZWwiLCJfc2V0TW9kZWwiLCJzZXRNb2RlbCIsIl9zZXRDaGVja2JveE1vZGVsIiwic2V0Q2hlY2tib3hNb2RlbCIsIl9kZXRlY3RDaGVja2JveENoZWNrZWQiLCJkZXRlY3RDaGVja2JveENoZWNrZWQiLCJfc2V0U2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsInNlbGYiLCJkYXRhIiwic2NvcGUiLCJBbmltYXRlIiwicGFyZW50IiwiX3N1cGVyIiwiZGF0YTEiLCJhIiwiZGF0YTIiLCJ0ZXh0IiwiaWQiLCJlIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLDhEQUErRCx5QkFBeUIseUJBQXlCLGtCQUFrQix3QkFBd0IsR0FBRyx3REFBd0Qsc0JBQXNCLEdBQUc7O0FBRS9POzs7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQUNOLEtBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsT0FBdkIsQ0FBd0IsT0FBTUssQ0FBTixFQUFTO0FBQUMzQixXQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQWhHLEVBQWtLLGNBQWMsWUFBVztBQUFDLFVBQUk7QUFBQyxlQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUDtBQUFjLE9BQW5CLENBQW9CLE9BQU1ELENBQU4sRUFBUztBQUFDM0IsV0FBRzJCLENBQUg7QUFBTTtBQUFDLEtBQWpELENBQWtEQyxJQUFsRCxDQUF1RCxJQUF2RCxDQUFoTCxFQUE4TyxZQUFZLElBQTFQLEVBQWdRLFlBQVksSUFBNVEsRUFBVCxDQUFELEVBQThSdEMsbUJBQVMsRUFBQyxVQUFVLFlBQVc7QUFBQyxVQUFJO0FBQUMsZUFBTyxDQUFDLEVBQUNpQyxHQUFHLFVBQUosRUFBRCxFQUFtQixDQUFuQixDQUFQO0FBQTZCLE9BQWxDLENBQW1DLE9BQU1JLENBQU4sRUFBUztBQUFDM0IsV0FBRzJCLENBQUg7QUFBTTtBQUFDLEtBQWhFLENBQWlFQyxJQUFqRSxDQUFzRSxJQUF0RSxDQUFYLEVBQXdGLFFBQVEsWUFBVztBQUFDLFVBQUk7QUFBQyxlQUFPLENBQUNKLEtBQUQsRUFBUSxDQUFSLENBQVA7QUFBa0IsT0FBdkIsQ0FBd0IsT0FBTUcsQ0FBTixFQUFTO0FBQUMzQixXQUFHMkIsQ0FBSDtBQUFNO0FBQUMsS0FBckQsQ0FBc0RDLElBQXRELENBQTJELElBQTNELENBQWhHLEVBQWtLLFlBQVksSUFBOUssRUFBb0wsWUFBWSxJQUFoTSxFQUFULENBQTlSLENBQWYsRUFBK2Ysa0JBQS9mLENBQXBrQixDQUFmLENBQVA7QUFDQyxDOztBQWpCRCIsImZpbGUiOiJzdGF0aWMvY2h1bmsvNjg0ZDk0MGM0NzhjOTYyYjcxZTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5leGFtcGxlLmluZGV4LTkzIC5uby1kYXRhLXRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmV4YW1wbGUuaW5kZXgtOTMgLm5vLWRhdGEtdGVtcGxhdGUgLmstdGFibGUtd3JhcHBlciB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJ1cmxcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wicGx1Z2luc1wiOltudWxsXX0hLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlcj97XCJpbmNsdWRlIGNzc1wiOnRydWUsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvY2hlY2tlZEtleV9zL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1widXJsXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzP3tcInBsdWdpbnNcIjpbbnVsbF19IS4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/e1wiaW5jbHVkZSBjc3NcIjp0cnVlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2NoZWNrZWRLZXlfcy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNCAyOCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkYXRhfSBmcm9tICcuL2luZGV4Lmpzb24nO1xuaW1wb3J0IEludGFjdCBmcm9tICdpbnRhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaW5kZXgudmR0JztcbmltcG9ydCAnLi9pbmRleC5zdHlsJzsgXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBJbnRhY3Qge1xuICAgIEBJbnRhY3QudGVtcGxhdGUoKVxuICAgIHN0YXRpYyB0ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgYWxlcnRTb21lKHdpZGdldCkge1xuICAgICAgICBhbGVydCh3aWRnZXQuZ2V0KCdjaGVja2VkS2V5JykpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NpdGUvY29tcG9uZW50cy90YWJsZS9kZW1vcy9jaGVja2VkS2V5X3MvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMyEuL2luZGV4LnN0eWxcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTMhLi9pbmRleC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0zIS4vaW5kZXguc3R5bFwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaXRlL2NvbXBvbmVudHMvdGFibGUvZGVtb3MvY2hlY2tlZEtleV9zL2luZGV4LnN0eWxcbi8vIG1vZHVsZSBpZCA9IC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2NoZWNrZWRLZXlfcy9pbmRleC5zdHlsXG4vLyBtb2R1bGUgY2h1bmtzID0gNCAyOCIsImltcG9ydCBUYWJsZSBmcm9tICdrcGMvY29tcG9uZW50cy90YWJsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmosIF9WZHQsIGJsb2NrcywgJGNhbGxlZSkge1xuXG5fVmR0IHx8IChfVmR0ID0gVmR0KTtcbm9iaiB8fCAob2JqID0ge30pO1xuYmxvY2tzIHx8IChibG9ja3MgPSB7fSk7XG52YXIgaCA9IF9WZHQubWlzcy5oLCBoYyA9IF9WZHQubWlzcy5oYywgaHUgPSBfVmR0Lm1pc3MuaHUsIHdpZGdldHMgPSB0aGlzICYmIHRoaXMud2lkZ2V0cyB8fCB7fSwgX2Jsb2NrcyA9IHt9LCBfX2Jsb2NrcyA9IHt9LFxuX191ID0gX1ZkdC51dGlscywgZXh0ZW5kID0gX191LmV4dGVuZCwgX2UgPSBfX3UuZXJyb3IsIF9jbGFzc05hbWUgPSBfX3UuY2xhc3NOYW1lLFxuX19vID0gX191Lk9wdGlvbnMsIF9nZXRNb2RlbCA9IF9fby5nZXRNb2RlbCwgX3NldE1vZGVsID0gX19vLnNldE1vZGVsLFxuX3NldENoZWNrYm94TW9kZWwgPSBfX3Uuc2V0Q2hlY2tib3hNb2RlbCwgX2RldGVjdENoZWNrYm94Q2hlY2tlZCA9IF9fdS5kZXRlY3RDaGVja2JveENoZWNrZWQsXG5fc2V0U2VsZWN0TW9kZWwgPSBfX3Uuc2V0U2VsZWN0TW9kZWwsXG5zZWxmID0gdGhpcy5kYXRhLCBzY29wZSA9IG9iaiwgQW5pbWF0ZSA9IHNlbGYgJiYgc2VsZi5BbmltYXRlLCBwYXJlbnQgPSAoJGNhbGxlZSB8fCB7fSkuX3N1cGVyXG5cbnZhciBkYXRhMSA9IFt7YTogJ+i1i+m7mOiupOWAvOmAieS4rSd9LCB7YTogJ+S4jemAieS4rSd9XTtcbnZhciBkYXRhMiA9IFt7YToge3RleHQ6ICfpgInkuK0nLCBpZDogMH19LCB7YToge3RleHQ6ICfkuI3pgInkuK0nLCBpZDogMX19XTtcblxucmV0dXJuIGgoJ2RpdicsIG51bGwsIFtoKCdkaXYnLCBudWxsLCBbaChUYWJsZSwgeydzY2hlbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe2E6ICdyYWRpb+S4jeaMh+WumnJvd0tleSd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGExXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoZWNrZWRLZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja1R5cGUnOiAncmFkaW8nLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSksIGgoVGFibGUsIHsnc2NoZW1lJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW3thOiAncmFkaW8nfSBdWzBdfSBjYXRjaChlKSB7X2UoZSl9fS5jYWxsKHRoaXMpLCAnZGF0YSc6IGZ1bmN0aW9uKCkge3RyeSB7cmV0dXJuIFtkYXRhMl1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGVja1R5cGUnOiAncmFkaW8nLCAnY2hpbGRyZW4nOiBudWxsLCAnX2NvbnRleHQnOiB0aGlzfSldLCAnbm8tZGF0YS10ZW1wbGF0ZScpLCBoKCdkaXYnLCBudWxsLCBbaChUYWJsZSwgeydzY2hlbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe2E6ICdjaGVja2JveCd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGExXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoZWNrZWRLZXknOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbMF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdjaGlsZHJlbic6IG51bGwsICdfY29udGV4dCc6IHRoaXN9KSwgaChUYWJsZSwgeydzY2hlbWUnOiBmdW5jdGlvbigpIHt0cnkge3JldHVybiBbe2E6ICdjaGVja2JveCd9IF1bMF19IGNhdGNoKGUpIHtfZShlKX19LmNhbGwodGhpcyksICdkYXRhJzogZnVuY3Rpb24oKSB7dHJ5IHtyZXR1cm4gW2RhdGEyXVswXX0gY2F0Y2goZSkge19lKGUpfX0uY2FsbCh0aGlzKSwgJ2NoaWxkcmVuJzogbnVsbCwgJ19jb250ZXh0JzogdGhpc30pXSwgJ25vLWRhdGEtdGVtcGxhdGUnKV0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2l0ZS9jb21wb25lbnRzL3RhYmxlL2RlbW9zL2NoZWNrZWRLZXlfcy9pbmRleC52ZHQiXSwic291cmNlUm9vdCI6IiJ9