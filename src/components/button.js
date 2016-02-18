define(['node_modules/kpc/src/views/components/button'], function(template) {
    return Intact.extend({
        defaults: {
            type:'white',
            className:'',
            href:'',
            attributes:'',
            icon:'',
            text:'这是一个按钮',
            disabled: false
        },

        template: template,

        disable: function() {
            this.set('disabled', true);
        },

        enable: function() {
            this.set('disabled', false);
        },

        _click: function(e) {
            // disabled状态不触发click事件
            if (!self.get('disabled')) {
                this.trigger('click', e);
            }
        }
    });
});
