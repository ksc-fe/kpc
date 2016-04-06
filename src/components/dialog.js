define(function() {
    var map = {};
    return Intact.extend({
        defaults: {
            width: 872,
            title: '提示',
            modal: true,
            closeText: '关闭',
            autoOpen: false,
            buttons: [
                {
                    text: "确定",
                    'class': 'c-btn c-btn-light-blue ok',
                    'disabled' : false
                },
                {
                    text: "取消",
                    'class': 'c-btn c-btn-blue-border cancel',
                    'disabled' : false
                }
            ],
            show: {
                effect: "drop",
                direction: 'up',
                duration: 300,
                distance: 20
            },
            hide: {
                effect: 'drop',
                direction: 'up',
                duration: 300,
                distance: 20
            },

            destroyOnClose: true,
            ok: function() {
                $(this).dialog('close');
            },
            cancel: function() {
                $(this).dialog('close');
            }
        },

        template: Vdt.compile('<div>{{ self.get("children") }}</div>'),

        _init: function() {
            var buttons = this.get('buttons');
            _.each(buttons, function(button, i) {
                if (i === 0) {
                    button.click = this.ok ? _.bind(this.ok, this) : this.get('ok');
                } else {
                    button.click = this.cancel ? _.bind(this.cancel, this) : this.get('cancel');
                }
            }, this);
        },

        _create: function() {
            var self = this;
            var $element = $(self.element).dialog(self.get());
            if (self.get('destroyOnClose')) {
                $element.on('dialogclose', function() {
                    self.destroy();
                });
            }
            this.$dialog = $element.dialog('widget');
            self.trigger('created');
        },

        show: function() {
            if (this.get('key')) {
                if (map[this.get('key')]) return;
                map[this.get('key')] = true;
            }
            function show() {
                $(this.element).dialog("open");
            }
            if (this.rendered) {
                show.call(this);
            } else {
                this.on('created', show);
                if (this.inited) {
                    this.init();
                } else {
                    this.on('inited', function() { this.init(); });
                }
            }
        },

        close: function() {
            $(this.element).dialog("close");
        },

        _destroy: function() {
            $(this.element).dialog("destroy");
            if (this.get('key')) {
                map[this.get('key')] = false;
            }
        },

        disable: function(num, showLoading) {
            this.$dialog.find('.ui-dialog-buttonset button').eq(num - 1).button('disable', showLoading);
        },

        enable: function(num) {
            this.$dialog.find('.ui-dialog-buttonset button').eq(num - 1).button('enable');
        },

        widget: function() {
            return $(this.element).dialog('widget');
        }
    });
});
