define(function() {
    var cache = {};
    var App = Intact.extend({
        defaults: {
            view: '',
            loading: true
        },

        template: Vdt.compile('<Animate>{{ this.get("view") }}{{ this.get("loading") ? <Animate class="c-loading" key="loading" widget="test"></Animate> : undefined }}</Animate>'),

        load: function(page, data) {
            var self = this;
            this.set('loading', true);
            require(['static/js/pages/' + page], this._current = function callee(Widget) {
                if (callee !== self._current) return;
                var widget = new Widget(data);
                if (widget.inited) {
                    self.set({'view': widget, 'loading': false});
                } else {
                    widget.on('inited', function() {
                        if (callee === self._current) {
                            self.set({'view': widget, 'loading': false});
                        }
                    });
                }

                if (cache[page]) {
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
                cache[page] = true;
            });
            return this;
        }
    });

    return Intact.mount(App, $('#container')[0]);
});
