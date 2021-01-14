import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.split";
import _Reflect$construct from "@babel/runtime-corejs3/core-js/reflect/construct";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inheritsLoose from "../../inheritsLoose";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_Reflect$construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Intact from 'intact-vue';

var MoveWrapper = /*#__PURE__*/function (_Intact) {
  _inheritsLoose(MoveWrapper, _Intact);

  var _super = _createSuper(MoveWrapper);

  function MoveWrapper() {
    return _Intact.apply(this, arguments) || this;
  }

  var _proto = MoveWrapper.prototype;

  _proto.template = function template(self, Vdt) {
    var children = self.get('children');
    return children || Vdt.miss.hc('MoveWrapper');
  };

  _proto.defaults = function defaults() {
    return {
      autoDestroy: true,
      container: undefined
    };
  };

  _proto.init = function init() {
    // we must append the element before _mount lifecycles of children are called
    this.mountedQueue.push(this._appendElement); // super.init(...args);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Intact.prototype.init.apply(this, args);
    return this.placeholder = document.createComment("placeholder");
  };

  _proto.hydrate = function hydrate(vNode) {
    return this.init(null, vNode);
  };

  _proto.update = function update(lastVNode, nextVNode) {
    _Intact.prototype.update.call(this, lastVNode, nextVNode);

    return this.placeholder;
  };

  _proto.destroy = function destroy() {
    if (this.get('autoDestroy')) {
      this._$destroy.apply(this, arguments);
    }
  };

  _proto.toString = function toString() {
    return '<!--placeholder-->';
  }
  /**
   * @brief override super destroy
   *
   * MoveWraper component has changed the dom struction.
   * It is always the top level dom, so we should
   * remove it from parent dom. By passing the container
   * to remove function can do this. We can't remove it
   * directly by calling removeChild method, beacause it
   * maybe have leave animation.
   *
   * @param ...args
   */
  ;

  _proto._$destroy = function _$destroy(lastVNode, nextVNode) {
    // if (this.destroyed) {
    // return console.warn('destroyed multiple times');
    // }
    if (this.rendered && (!nextVNode || !(nextVNode.type & Intact.Vdt.miss.Types.ComponentClassOrInstance) || nextVNode.key !== lastVNode.key)) {
      Intact.Vdt.miss.remove(this.vdt.vNode, this.container);
    }

    this._destroy(lastVNode, nextVNode);

    this.destroyed = true;
    this.trigger('$destroyed', this);
    this.off();
  };

  _proto._appendElement = function _appendElement() {
    var container = this.get('container');

    if (container) {
      if (typeof container === 'string') {
        this.container = document.querySelector(container);
      } else {
        this.container = container(this.placeholder);
      }
    }

    if (!this.container) {
      // find the closest dialog if exists
      var dom = this.placeholder;
      var found;

      while ((dom = dom.parentNode) && dom.nodeType === 1) {
        // dom maybe a foreignObject, and its className is an object
        if (typeof dom.className === 'string') {
          var _context;

          if (_indexOfInstanceProperty(_context = dom.className.split(' ')).call(_context, 'k-dialog') > -1) {
            found = dom;
            break;
          }
        }
      }

      this.container = found || document.body;
    }

    this.container.appendChild(this.element);
    this.trigger('appended');
  };

  return MoveWrapper;
}(Intact);

_defineProperty(MoveWrapper, "propTypes", {
  autoDestroy: Boolean,
  container: [Function, String]
});

export { MoveWrapper as default };
export { MoveWrapper };