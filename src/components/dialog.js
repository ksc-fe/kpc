define(function() {
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
                    click: function() {

                    },
                    'class': 'c-btn c-btn-light-blue ok'
                },
                {
                    text: "取消",
                    click: function() {

                    },
                    'class': 'c-btn c-btn-blue-border cancel'
                }
            ]
        },

        template: Vdt.compile('<div>{{ self.get("children") }}</div>'),

        _create: function() {
            var self = this;
            setTimeout(function() {
                $(self.element).dialog(self.get());
                self.trigger('created');
            })
        },

        _update: function() {

        },

        show: function() {
            function show() {
                $(this.element).dialog("open");
            }
            if (this.rendered) {
                show.call(this);
            } else {
                this.off('created', show).on('created', show);
                this.init();
            }
        },

        destroy: function() {
            $(this.element).dialog("destroy");
        }

    });
});
