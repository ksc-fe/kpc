define(['node_modules/kpc/src/views/components/dialog'], function(template) {
    return Intact.extend({
        defaults: {

        },

        template: template,

        _create: function() {
            var self = this;
            $(this.element).dialog({width:500,height:500});
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
