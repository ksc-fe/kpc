define(['node_modules/kpc/src/views/components/button'], function(template) {
    return Intact.extend({
        defaults: {
            type:'white',
            className:'',
            href:'',
            attributes:'',
            icon:'',
            text:'这是一个按钮',
            disabled: false,
            showLoading: false
        },

        template: template,

        /**
         * @brief 
         *
         * @param showLoading 是否disable时展示loading动画
         *
         * @return 
         */
        disable: function(showLoading) {
            this.set({disabled: true, showLoading: !!showLoading});
        },

        enable: function() {
            this.set('disabled', false);
        },

        _click: function(e) {
            // disabled状态不触发click事件
            if (!this.get('disabled')) {
                this.trigger('click', e);
            }
        }
    });
});
