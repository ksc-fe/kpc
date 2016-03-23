(function(factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory(require('vdt'), require('underscore'));
    } else if (typeof define === 'function' && define.amd) {
        define(['vdt', 'underscore'], factory);
    } else {
        this.Intact = this.VdWidget = factory(Vdt, _);
    }
})(function(Vdt, _) {
    /**
     * inherit
     * @param Parent
     * @param prototype
     * @returns {Function}
     */
    function inherit(Parent, prototype) {
        var Child = function() {
            if (!(this instanceof Child || this.prototype instanceof Child)) {
                return Parent.apply(Child, arguments);
            }
            return Parent.apply(this, arguments);
        };

        Child.prototype = _.create(Parent.prototype);
        _.each(prototype, function(proto, name) {
            if (name === 'displayName') {
                Child.displayName = proto;
            }
            if (!_.isFunction(proto) || name === 'template') {
                return Child.prototype[name] = proto;
            }
            Child.prototype[name] = (function() {
                var _super = function() {
                        return Parent.prototype[name].apply(this, arguments);
                    },
                    _superApply = function(args) {
                        return Parent.prototype[name].apply(this, args);
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = proto.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        Child.__super = Parent.prototype;
        Child.prototype.constructor = Child;

        _.extend(Child, Parent);

        return Child;
    }

    /**
     * 用于包装widget的thunk
     * @param Widget
     * @param attributes
     * @param contextWidget
     * @constructor
     */
    var Thunk = function(Widget, attributes, contextWidget) {
        this.Widget = Widget;
        this.attributes = attributes || {};
        this.key = this.attributes.key;
        this.contextWidget = contextWidget;
    };
    Thunk.prototype.type = 'Thunk';
    Thunk.prototype.render = function(previous) {
        if (!previous || previous.Widget !== this.Widget || previous.key !== this.key) {
            this.widget = new this.Widget(this.attributes, this.contextWidget);
        } else if (previous.Widget === this.Widget) {
            var widget = this.widget = previous.widget;
            widget.children = this.attributes.children;
            delete this.attributes.children;
            widget._removeEvents();
            widget.set(this.attributes, {global: false});
            widget._addEvents();
        }
        return this.widget;
    };

    var Intact = function(attributes, /*for private*/contextWidgets) {
        if (!(this instanceof Intact)) {
            return new Thunk(this, attributes, contextWidgets);
        }
        var attrs = attributes || {};
        attrs = _.extend({
            children: null
        }, _.result(this, 'defaults'), attrs);

        this._events = {};
        this.attributes = {};

        this.vdt = Vdt(this.template);
        this.set(attrs, {silent: true});
        this.key = attrs.key;

        this.widgets = {};

        this.inited = false;
        this.rendered = false;
        this._hasCalledInit = false;

        this._contextWidgets = contextWidgets || {};
        this._widget = this.attributes.widget || _.uniqueId('widget');

        // for debug
        this.displayName = this.displayName;

        this._constructor();
    };

    Intact.prototype = {
        constructor: Intact,

        type: 'Widget',

        _constructor: function() {
            var self = this;
            this._addEvents(); 
            this.children = this.get('children');
            delete this.attributes.children;
            // 存在widget名称引用属性，则注入所处上下文的widgets中
            this._contextWidgets[this._widget] = this;
            // 如果存在arguments属性，则将其拆开赋给attributes
            if (this.attributes.arguments) {
                _.extend(this.attributes, _.result(this.attributes, 'arguments'));
                delete this.attributes.arguments;
            }

            // 注入组件，在模板中可以直接使用
            this.Animate = Animate;

            // change事件，自动更新
            this.on('change', function() { self.update(); });

            var ret = this._init();
            // support promise
            function inited() {
                self.inited = true;
                self.trigger('inited', self);
            }
            if (ret && ret.then) {
                ret.then(inited);
            } else {
                inited();
            }
        },

        _init: function() {},

        _create: function() {},

        _beforeUpdate: function(prevWidget, domNode) {},

        _update: function(prevWidget, domNode) {},

        _destroy: function(domNode) {},

        _removeEvents: function() {
            // 解绑所有事件
            var self = this;
            _.each(this.attributes, function(value, key) {
                if (key.substring(0, 3) === 'ev-' && _.isFunction(value)) {
                    self.off(key.substring(3), value);
                    delete self.attributes[key];
                }
            });
        },

        _addEvents: function() {
            // 所有以'ev-'开头的属性，都转化为事件
            var self = this;
            _.each(this.attributes, function(value, key) {
                if (key.substring(0, 3) === 'ev-' && _.isFunction(value)) {
                    self.on(key.substring(3), value);
                }
            });
        },

        init: function() {
            this.element = this.vdt.render(this);
            this.rendered = true;
            this._hasCalledInit = true;
            this.trigger('rendered', this);
            this._create();
            return this.element;
        },

        update: function(prevWidget, domNode) {
            if (!this.vdt.node && (!prevWidget || !prevWidget.vdt.node)) return;
            this._beforeUpdate(prevWidget, domNode);
            if (prevWidget && domNode) {
                this.vdt.node = domNode;
                this.vdt.tree = prevWidget.vdt.tree;
            }
            this.prevWidget = prevWidget;
            this.element = this.vdt.update(this);
            if (!this._hasCalledInit) {
                this.rendered = true;
                this._hasCalledInit = true;
                this.trigger('rendered', this);
                this._create();
            }
            this._update(prevWidget, domNode);
            return this.element;
        },

        destroy: function(domNode) {
            delete this._contextWidgets[this._widget];
            this.off();
            function destroy(children) {
                _.each(children, function(child) {
                    if (child.hasThunks) {
                        destroy(child.children);
                    } else if (child.type === 'Thunk') {
                        child.widget.destroy();
                    }
                });
            }
            destroy([this.vdt.tree]);
            this._destroy(domNode);
        },

        get: function(attr) {
            // @deprecated for v0.0.1 compatibility, use this.children instead of
            if (attr === 'children') {
                return this.attributes.children || this.children;
            }
            return arguments.length === 0 ? this.attributes : this.attributes[attr];
        },

        set: function(key, val, options) {
            if (key == null) return this;

            var attrs;
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }

            options = _.extend({
                silent: false,
                global: true
            }, options);

            var current = this.attributes,
                changes = [];

            for (var attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val)) {
                    changes.push(attr);
                }
                current[attr] = val;
            }

            if (changes.length) {
                var eventName;
                for (var i = 0, l = changes.length; i < l; i++) {
                    eventName = 'change:' + changes[i];
                    options[eventName] && options[eventName].call(this, current[changes[i]]);
                    !options.silent && this.trigger(eventName, this, current[changes[i]]);
                }

                options.change && options.change.call(this);
                !options.silent && options.global && this.trigger('change', this);
            }

            return this;
        },

        on: function(name, callback) {
            (this._events[name] || (this._events[name] = [])).push(callback);

            return this;
        },

        off: function(name, callback) {
            if (!arguments.length) {
                this._events = {};
                return this;
            }

            var callbacks = this._events[name];
            if (!callbacks) return this;

            if (arguments.length === 1) {
                delete this._events[name];
                return this;
            }

            var cb;
            for (var i = 0; i < callbacks.length; i++) {
                cb = callbacks[i];
                if (cb === callback) {
                    callbacks.splice(i, 1);
                    i--;
                }
            }

            return this;
        },

        trigger: function(name) {
            var args = [].slice.call(arguments, 1),
                callbacks = this._events[name];

            if (callbacks) {
                for (var i = 0, l = callbacks.length; i < l; i++) {
                    callbacks[i].apply(this, args);
                }
            }

            return this;
        }
    };

    /**
     * 继承
     * @param prototype
     * @returns {Function}
     */
    Intact.extend = function(prototype) {
        _.defaults(prototype.defaults, this.prototype.defaults);
        return inherit(this, prototype);
    };

    /**
     * 挂载组件到dom中
     * @param widget {Intact} Intact类或子类，也可以是实例化的对象
     * @param node {Node} html节点
     */
    Intact.mount = function(widget, node) {
        if (widget.prototype && (widget.prototype instanceof Intact || widget === Intact)) {
            widget = new widget();
        }
        if (widget.rendered) {
            node.appendChild(widget.element);
        } else if (widget.inited) {
            node.appendChild(widget.init()); 
        } else {
            widget.on('inited', function() {
                node.appendChild(widget.init());
            });
        }
        return widget;
    };

    /**
     * 将子元素数组转为map
     * @param children
     * @param ret
     * @param index
     * @returns {*}
     */
    function getChildMap(children, ret, index) {
        if (!children) {
            return children;
        }
        ret = ret || {};
        index = index || '$0';
        _.each(children, function(child, _index) {
            _index = '$' + _index;
            if (child && (child.type === 'Widget' || child.type === 'Thunk')) {
                ret[child.key || _index] = child;
            //} else if (child && child.type === 'Thunk') {
            //    ret[child.key] = child;
            } else if (_.isArray(child)) {
                getChildMap(child, ret, index + _index);
            } else {
                ret[index + _index] = child;
            }
        });
        return ret;
    }

    /**
     * 合并两个子元素map
     * @param prev
     * @param next
     * @returns {*|{}}
     */
    function mergeChildren(prev, next) {
        prev = prev || {};
        next = next || {};

        function getValueForKey(key) {
            if (next.hasOwnProperty(key)) {
                return next[key];
            } else {
                return prev[key];
            }
        }

        // For each key of `next`, the list of keys to insert before that key in
        // the combined list
        var nextKeysPending = {};

        var pendingKeys = [];
        for (var prevKey in prev) {
            if (next.hasOwnProperty(prevKey)) {
                if (pendingKeys.length) {
                    nextKeysPending[prevKey] = pendingKeys;
                    pendingKeys = [];
                }
            } else {
                pendingKeys.push(prevKey);
            }
        }

        var i;
        var childMapping = {};
        for (var nextKey in next) {
            if (nextKeysPending.hasOwnProperty(nextKey)) {
                for (i = 0; i < nextKeysPending[nextKey].length; i++) {
                    var pendingNextKey = nextKeysPending[nextKey][i];
                    var value = getValueForKey(pendingNextKey);
                    childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
                        pendingNextKey
                    );
                }
            }
            childMapping[nextKey] = getValueForKey(nextKey);
        }

        // Finally, add the keys which didn't appear before any key in `next`
        for (i = 0; i < pendingKeys.length; i++) {
            childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
        }

        return childMapping;
    }

    function addClass(element, className) {
        if (className) {
            if (element.classList) {
                element.classList.add(className);
            } else if (!hasClass(element, className)) {
                element.className += ' ' + className;
            }
        }
        return element;
    }

    function hasClass(element, className) {
        if (element.classList) {
            return !!className && element.className.contains(className);
        }
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function removeClass(element, className) {
        if (className) {
            if (element.classList) {
                element.classList.remove(className);
            } else if (hasClass(element, className)) {
                element.className = element.className
                    .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ') // multiple spaces to one
                    .replace(/^\s*|\s*$/g, ''); // trim the ends
            }
        }
    }

    var EVENT_NAME_MAP = {
        transitionend: {
            'transition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'mozTransitionEnd',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd'
        },

        animationend: {
            'animation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd',
            'MozAnimation': 'mozAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd'
        }
    };

    var endEvents = [];

    function detectEvents() {
        var testEl = document.createElement('div');
        var style = testEl.style;

        // On some platforms, in particular some releases of Android 4.x,
        // the un-prefixed "animation" and "transition" properties are defined on the
        // style object but the events that fire will still be prefixed, so we need
        // to check if the un-prefixed events are useable, and if not remove them
        // from the map
        if (!('AnimationEvent' in window)) {
            delete EVENT_NAME_MAP.animationend.animation;
        }

        if (!('TransitionEvent' in window)) {
            delete EVENT_NAME_MAP.transitionend.transition;
        }

        for (var baseEventName in EVENT_NAME_MAP) {
            var baseEvents = EVENT_NAME_MAP[baseEventName];
            for (var styleName in baseEvents) {
                if (styleName in style) {
                    endEvents.push(baseEvents[styleName]);
                    break;
                }
            }
        }
    }

    detectEvents();

    function addEventListener(node, eventName, eventListener) {
        node.addEventListener(eventName, eventListener, false);
    }

    function removeEventListener(node, eventName, eventListener) {
        node.removeEventListener(eventName, eventListener, false);
    }

    var TransitionEvents = {
        on: function(node, eventListener) {
            if (endEvents.length === 0) {
                // If CSS transitions are not supported, trigger an "end animation"
                // event immediately.
                window.setTimeout(eventListener, 0);
                return;
            }
            endEvents.forEach(function(endEvent) {
                addEventListener(node, endEvent, eventListener);
            });
        },

        off: function(node, eventListener) {
            if (endEvents.length === 0) {
                return;
            }
            endEvents.forEach(function(endEvent) {
                removeEventListener(node, endEvent, eventListener);
            });
        },

        one: function(node, eventListener) {
            var listener = function() {
                eventListener.apply(this, arguments);
                TransitionEvents.off(node, listener);
            };
            TransitionEvents.on(node, listener);
        }
    };

    // Animate Widget for animation
    var Animate = Intact.extend({
        displayName: 'Animate',

        defaults: {
            tagName: 'div',
            transition: 'animate'
        },

        template: Vdt.compile('return h(this.get("tagName"), _.extend({}, this.get()), _.values(this.childrenMap))', {autoReturn: false}),

        _init: function() {
            this._ = _;
            this.key = this.get('key');
            this.childrenMap = getChildMap(this.children);
            this.currentKeys = {};
            this.keysToEnter = [];
            this.keysToLeave = [];
        },

        _beforeUpdate: function(prevWidget) {
            if (!prevWidget) return;

            var nextMap = getChildMap(this.children);
                prevMap = prevWidget.childrenMap;
            this.childrenMap = mergeChildren(prevMap, nextMap);

            _.each(nextMap, function(value, key) {
                if (nextMap[key] && !prevMap.hasOwnProperty(key) && !this.currentKeys[key]) {
                    this.keysToEnter.push(key);
                }
            }, this);

            _.each(prevMap, function(value, key) {
                if (prevMap[key] && !nextMap.hasOwnProperty(key) && !this.currentKeys[key]) {
                    this.keysToLeave.push(key);
                }
            }, this);
        },

        _update: function(prevWidget) {
            if (!prevWidget) return;

            var keysToEnter = this.keysToEnter;
            this.keysToEnter = [];
            keysToEnter.forEach(this.performEnter, this);

            var keysToLeave = this.keysToLeave;
            this.keysToLeave = [];
            keysToLeave.forEach(this.performLeave, this);
        },

        performEnter: function(key) {
            var widget = this.childrenMap[key].widget;
            this.currentKeys[key] = true;
            if (widget && widget.enter) {
                widget.enter(_.bind(this._doneEntering, this, key));
            } else {
                this._doneEntering(key);
            }
        },

        performLeave: function(key) {
            var widget = this.childrenMap[key].widget;
            this.currentKeys[key] = true;
            if (widget && widget.leave) {
                widget.leave(_.bind(this._doneLeaving, this, key));
            } else {
                this._doneLeaving(key);
            }
        },

        _doneEntering: function(key) {
            delete this.currentKeys[key];
            var map = getChildMap(this.children);
            if (!map[key]) {
                this.performLeave(key);
            }
        },

        _doneLeaving: function(key) {
            delete this.currentKeys[key];
            var map = getChildMap(this.children);
            if (map && map[key]) {
                this.performEnter(key);
            } else {
                delete this.childrenMap[key];
                this.vdt.update();
            }
        },

        enter: function(done) {
            var transition = this.get('transition'),
                element = this.element;

            addClass(element, transition + '-enter');
            TransitionEvents.one(element, function(e) {
                e.stopPropagation();
                removeClass(element, transition + '-enter');
                removeClass(element, transition + '-enter-active');
                done();
            });
            element.offsetWidth = element.offsetWidth;
            addClass(element, transition + '-enter-active');
        },

        leave: function(done) {
            var transition = this.get('transition'),
                element = this.element;

            addClass(element, transition +'-leave');
            TransitionEvents.one(element, function(e) {
                e.stopPropagation();
                removeClass(element, transition + '-leave');
                removeClass(element, transition + '-leave-active');
                done();
            });
            element.offsetWidth = element.offsetWidth;
            addClass(element, transition + '-leave-active');
        }
    });

    return Intact;
});
