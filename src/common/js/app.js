define(function() {
    var isFirst = true;
    var App = Intact.extend({
        defaults: {
            view: '',
            loading: true
        },

        template: Vdt.compile('<Animate><div key="view">{{ this.get("view") }}</div>{{ this.get("loading") ? <Animate class="c-loading" key="loading"></Animate> : undefined }}</Animate>'),

        _init: function() {
            // 一个全局对象，用于存放全局数据
            this.locals = {};
        },

        load: function(page, data) {
            var self = this;
            this.set('loading', true);
            require(['static/js/pages/' + page], this._current = function callee(Widget) {
                if (callee !== self._current) return;
                if (self.get('view')) self.get('view')._destroy();
                var widget = new Widget(data);
                // for debug
                window.__widget__ = widget;
                if (widget.inited) {
                    self.set({'view': widget, 'loading': false});
                } else {
                    widget.on('inited', function() {
                        if (callee === self._current) {
                            self.set({'view': widget, 'loading': false});
                        }
                    });
                }

                if (!isFirst) {
                    // 强制页面进入时调用_create方法
                    if (widget.rendered) {
                        widget._create();
                    } else {
                        widget.on('rendered', function() {
                            if (callee === self._current) {
                                widget._create();
                            }
                        });
                    }
                }
                isFirst = false;
            });
            return this;
        },

        showLoading: function() {
            this.set('loading', true);
        },

        hideLoading: function() {
            this.set('loading', false);
        },

        notFound: function() {
            this.set('loading', false);
            this.set('view', new (Intact.extend({
                template: '<div style={{ {fontSize: "80px", textAlign: "center"} }}>404</div>'
            })));
        }
    });

    return window.App = Intact.mount(App, $('#container')[0]);
});
