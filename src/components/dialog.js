define(function() {
    return Intact.extend({
        defaults: {
            width: 872,
            title: '提示',
            modal: true,
            closeText: '关闭',
            
        },

        template: Vdt.compile('<div></div>'),

        _create: function() {
            var self = this;
            $(this.element).dialog(this.get());
            this.show();
        },

        _update: function() {

        },

        show:function(){
            $(this.element).dialog("open");
            return "show method";
        },

        destroy:function(){
            $(this.element).dialog("destroy");
        }

    });
});
