'use strict';

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _moveWrapper = require('../moveWrapper');

var _moveWrapper2 = _interopRequireDefault(_moveWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (obj, _Vdt, blocks, $callee) {

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

                return h(_moveWrapper2.default, { 'autoDestroy': function () {
                                                try {
                                                                return [false][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this), 'children': h('div', null, [function () {
                                                try {
                                                                return [self.get('value')][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this) ? h(Animate, { 'className': 'k-overlay', 'key': 'overlay', 'children': null, '_context': $this }) : undefined, function () {
                                                try {
                                                                return [self.get('value')][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this) ? h(Animate, { 'className': _className(function () {
                                                                try {
                                                                                var _ref;

                                                                                return [(_ref = {
                                                                                                "k-dialog": true,
                                                                                                'k-dragging': self.get('_dragging'),
                                                                                                "k-small": self.get('size') === 'small'
                                                                                }, _ref[self.get('className')] = self.get('className'), _ref)][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this)), 'ref': function () {
                                                                try {
                                                                                return [function (i) {
                                                                                                return self.dialog = i ? i.element : null;
                                                                                }][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this), 'ev-a:leaveEnd': function () {
                                                                try {
                                                                                return [self._leaveEnd][0];
                                                                } catch (e) {
                                                                                _e(e);
                                                                }
                                                }.call(this), 'key': 'dialog', 'children': [h('div', { 'ev-mousedown': function () {
                                                                                try {
                                                                                                return [self._dragStart][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this) }, [(_blocks["header"] = function (parent) {
                                                                return h('span', null, function () {
                                                                                try {
                                                                                                return [self.get('title')][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'k-title');
                                                }) && (__blocks["header"] = function (parent) {
                                                                var self = this;
                                                                return blocks["header"] ? blocks["header"].call(this, function () {
                                                                                return _blocks["header"].call(self, parent);
                                                                }) : _blocks["header"].call(this, parent);
                                                }) && __blocks["header"].call(this), h(_button2.default, { 'type': 'none', 'icon': function () {
                                                                                try {
                                                                                                return [true][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'title': '关闭', 'className': 'k-close', 'ev-click': function () {
                                                                                try {
                                                                                                return [self.close][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this), 'children': h('i', null, null, 'k-icon ion-ios-close-empty'), '_context': $this })], 'k-header'), h('div', null, (_blocks["body"] = function (parent) {
                                                                return function () {
                                                                                try {
                                                                                                return [self.get('children')][0];
                                                                                } catch (e) {
                                                                                                _e(e);
                                                                                }
                                                                }.call(this);
                                                }) && (__blocks["body"] = function (parent) {
                                                                var self = this;
                                                                return blocks["body"] ? blocks["body"].call(this, function () {
                                                                                return _blocks["body"].call(self, parent);
                                                                }) : _blocks["body"].call(this, parent);
                                                }) && __blocks["body"].call(this), 'k-body'), h('div', null, (_blocks["footer"] = function (parent) {
                                                                return [h(_button2.default, { 'ev-click': function () {
                                                                                                try {
                                                                                                                return [self.cancel][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'children': function () {
                                                                                                try {
                                                                                                                return [self.get('cancelText')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), '_context': $this }), h(_button2.default, { 'type': 'primary', 'ev-click': function () {
                                                                                                try {
                                                                                                                return [self.ok][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'loading': function () {
                                                                                                try {
                                                                                                                return [self.get('loading')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'disabled': function () {
                                                                                                try {
                                                                                                                return [self.get('disabledOk')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), 'children': function () {
                                                                                                try {
                                                                                                                return [self.get('okText')][0];
                                                                                                } catch (e) {
                                                                                                                _e(e);
                                                                                                }
                                                                                }.call(this), '_context': $this })];
                                                }) && (__blocks["footer"] = function (parent) {
                                                                var self = this;
                                                                return blocks["footer"] ? blocks["footer"].call(this, function () {
                                                                                return _blocks["footer"].call(self, parent);
                                                                }) : _blocks["footer"].call(this, parent);
                                                }) && __blocks["footer"].call(this), 'k-footer')], '_context': $this }) : undefined], 'k-dialog-wrapper', null, function () {
                                                try {
                                                                return [function (dom) {
                                                                                return self.$element = dom;
                                                                }][0];
                                                } catch (e) {
                                                                _e(e);
                                                }
                                }.call(this)), '_context': $this });
};