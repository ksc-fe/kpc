define(function() {
    return Intact.extend({
        defaults: {
            width: 872,
            title: '提示',
            modal: true,
            closeText: '关闭',
            buttons: [
                {
                    text: "确定",
                    'class': 'c-btn c-btn-light-blue ok'
                },
                {
                    text: "取消",
                    'class': 'c-btn c-btn-blue-border cancel'
                }
            ]
            
        },

        template: Vdt.compile('<div></div>'),

        _create: function() {
            var self = this;
            $(this.element).dialog(this.get());
            this.show();
        },

        _update: function() {

        },

        show: function() {
            $(this.element).dialog("open");
        },

        destroy: function() {
            $(this.element).dialog("destroy");
        }

    });
});
