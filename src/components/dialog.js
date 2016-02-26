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
            if (!_.isEmpty(buttons)) {
                for (var i=0 ;i < buttons.length; i++){
                    if(buttons[i]["text"] == "确定") {
                        buttons[i].click = this.get('ok');
                    }else if(buttons[i]["text"] == "确定" || buttons[i]["text"] == "关闭") {
                        buttons[i].click = this.get('cancel');
                    }
                }
            }
        },

        _create: function() {
            var self = this;
            setTimeout(function() {
                var $element = $(self.element).dialog(self.get());
                if (self.get('destroyOnClose')) {
                    $element.on('dialogclose', function() {
                        self.destroy();
                    })
                }
                self.trigger('created');
            })
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

        close: function() {
            $(this.element).dialog("close");
        },

        destroy: function() {
            $(this.element).dialog("destroy");
        },

        disable: function(num) {
            jQuery('.ui-dialog button:nth-child('+num+')').button('disable');
        },

        enable: function(num) {
            jQuery('.ui-dialog button:nth-child('+num+')').button('enable');
        }

    });
});
