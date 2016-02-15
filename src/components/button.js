define(['node_modules/kpc/src/views/components/button'], function(template) {
    return Intact.extend({
        defaults: {
            type:'white',
            className:'',
            href:'',
            attributes:'',
            icon:'',
            text:'这是一个按钮'

        },

        template: template,

        _create: function() {
            var self = this;
            //$(this.element).find('select')
        },

        _update: function() {

        },

        btnDisable:function(){
            this.set("className","c-button-disabled");
        },

        btnEnable:function(){
            this.set("className"," ");
        }
    });
});
