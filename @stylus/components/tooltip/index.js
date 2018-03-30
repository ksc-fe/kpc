'use strict';

exports.__esModule = true;
exports.Tooltip = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _desc, _value, _class, _init, _class2, _temp; /**
                                                         * Created by sylvia on 2017/10/31.
                                                         */


var _intact = require('intact');

var _intact2 = _interopRequireDefault(_intact);

var _dropdown = require('../dropdown/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _position2 = require('../moveWrapper/position');

var _position3 = _interopRequireDefault(_position2);

var _index = require('./index.vdt');

var _index2 = _interopRequireDefault(_index);

require('../../styles/kpc.styl');

require('./index.styl');

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

var Tooltip = function (_Dropdown) {
    (0, _inherits3.default)(Tooltip, _Dropdown);

    function Tooltip() {
        (0, _classCallCheck3.default)(this, Tooltip);
        return (0, _possibleConstructorReturn3.default)(this, _Dropdown.apply(this, arguments));
    }

    return Tooltip;
}(_dropdown2.default);

var TooltipContent = (_dec = _intact2.default.template(), (_class = (_temp = _class2 = function (_Intact) {
    (0, _inherits3.default)(TooltipContent, _Intact);

    function TooltipContent() {
        (0, _classCallCheck3.default)(this, TooltipContent);
        return (0, _possibleConstructorReturn3.default)(this, _Intact.apply(this, arguments));
    }

    TooltipContent.prototype.defaults = function defaults() {
        return {
            show: false,
            trigger: 'hover',
            canHover: false,
            showArrow: true,
            positon: {},
            transition: 'fade',

            _feedback: {}
        };
    };

    TooltipContent.prototype._init = function _init() {
        var _this3 = this;

        this.on('$change:show', function (c, value) {
            _this3.trigger(value ? 'beforeShow' : 'beforeHide', _this3);
        });

        this.on('$changed:show', function (c, value) {
            if (value) {
                _this3._addDocumentClick();
                _this3.position();
                _this3.trigger('show', _this3);
            } else {
                _this3._removeDocumentClick();
                _this3.trigger('hide', _this3);
            }
        });

        this._onDocumentClick = this._onDocumentClick.bind(this);
    };

    TooltipContent.prototype._mount = function _mount() {
        if (this.get('show')) {
            this._addDocumentClick();
        }
    };

    TooltipContent.prototype.show = function show() {
        clearTimeout(this.timer);
        this.set('show', true);
    };

    TooltipContent.prototype.hide = function hide(immediately) {
        var _this4 = this;

        if (!immediately && this.get('canHover')) {
            this.timer = setTimeout(function () {
                _this4.set('show', false);
            }, 200);
        } else {
            this.set('show', false);
        }
    };

    TooltipContent.prototype.position = function position() {
        var _this5 = this;

        var pos = this.get('position');
        if (typeof pos === 'string') {
            switch (pos) {
                case 'left':
                    pos = { my: 'right-10 center', at: 'left center' };
                    break;
                case 'bottom':
                    pos = { my: 'center top+10', at: 'center bottom' };
                    break;
                case 'right':
                    pos = { my: 'left+10 center', at: 'right center' };
                    break;
                default:
                    pos = { my: 'center bottom-10', at: 'center top' };
                    break;
            }
        }
        var element = this.refs.content.element;
        (0, _position3.default)(element, (0, _extends3.default)({
            my: 'center bottom-10',
            at: 'center top',
            of: this.dropdown.element,
            using: function using(feedback) {
                _this5.set('_feedback', feedback);
            }
        }, pos));
    };

    TooltipContent.prototype._addDocumentClick = function _addDocumentClick() {
        if (this.get('trigger') === 'click') {
            document.addEventListener('click', this._onDocumentClick);
        }
    };

    TooltipContent.prototype._removeDocumentClick = function _removeDocumentClick() {
        if (this.get('trigger') === 'click') {
            document.removeEventListener('click', this._onDocumentClick);
        }
    };

    TooltipContent.prototype._onDocumentClick = function _onDocumentClick(e) {
        var target = e.target;
        var element = this.refs.content.element;

        if (element === target || element.contains(target)) return;
        if (e._dropdown) return;

        this.hide(true);
    };

    TooltipContent.prototype._destroy = function _destroy() {
        clearTimeout(this.timer);
        this._removeDocumentClick();
    };

    return TooltipContent;
}(_intact2.default), _class2.template = _index2.default, _class2.propTypes = {
    show: Boolean,
    canHover: Boolean,
    showArrow: Boolean
}, _temp), (_applyDecoratedDescriptor(_class, 'template', [_dec], (_init = (0, _getOwnPropertyDescriptor2.default)(_class, 'template'), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function initializer() {
        return _init;
    }
}), _class)), _class));


var h = _intact2.default.Vdt.miss.h;

function Wrapper(props, inVue) {
    var children = props.children,
        content = props.content,
        _blocks = props._blocks,
        _context = props._context,
        ref = props.ref,
        rest = (0, _objectWithoutProperties3.default)(props, ['children', 'content', '_blocks', '_context', 'ref']);


    if (_blocks && _blocks.content) {
        content = _blocks.content.call(_context);
    }

    var contentVNode = h(TooltipContent, (0, _extends3.default)({
        _context: _context,
        children: content,
        ref: ref
    }, rest));

    return !inVue ? [h(Tooltip, (0, _extends3.default)({
        _context: _context,
        children: children,
        menu: contentVNode
    }, rest, {
        className: 'k-tooltip'
    })), contentVNode] : h(VueWrapper, (0, _extends3.default)({
        children: [h(Tooltip, (0, _extends3.default)({
            _context: _context,
            children: children,
            menu: contentVNode
        }, props.trigger ? { trigger: props.trigger } : {})), contentVNode]
    }, rest));
}

// for vue Boolean cast
Wrapper.propTypes = {
    canHover: Boolean
};

var VueWrapper = function (_Intact2) {
    (0, _inherits3.default)(VueWrapper, _Intact2);

    function VueWrapper() {
        (0, _classCallCheck3.default)(this, VueWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _Intact2.apply(this, arguments));
    }

    VueWrapper.prototype.template = function template(data) {
        var _Intact$Vdt$utils$cla;

        var _data$get = data.get(),
            className = _data$get.className,
            children = _data$get.children,
            rest = (0, _objectWithoutProperties3.default)(_data$get, ['className', 'children']);

        return h('div', rest, children, _intact2.default.Vdt.utils.className((_Intact$Vdt$utils$cla = {
            'k-tooltip': true
        }, _Intact$Vdt$utils$cla[className] = className, _Intact$Vdt$utils$cla)));
    };

    return VueWrapper;
}(_intact2.default);

var _Wrapper = _intact2.default.functionalWrapper ? _intact2.default.functionalWrapper(Wrapper) : Wrapper;

exports.default = _Wrapper;
exports.Tooltip = _Wrapper;