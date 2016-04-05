define(['node_modules/kpc/src/common/js/lib/bootstrap-switch'], function() {
    return Intact.extend({
        defaults: {
            state: true,
            name: undefined,
            size: 'mini',
            onText: undefined,
            offText: undefined,
            disabled: false,
            readonly: false 
        },

        template: Vdt.compile('<div><input type="checkbox" name={{ self.get("name") }}/></div>'),

        _init: function() {
            this.on('change:state', function(component, state) {
                this.method('state', state);
            });
            this.on('change:disabled', function(component, disabled) {
                this.method('disabled', disabled);
            });
        },

        _create: function() {
            var self = this;
            // _.defer(_.bind(function() {
                this.$input = $(this.element).find('input').bootstrapSwitch(this.get())
                    .on('switchChange.bootstrapSwitch', function(e, state) {
                        self.set('state', state, {silent: true, change: function() {
                            self.trigger('changed', e, state); 
                        }});
                    });
            // }, this));
        },

        /**
         * @brief 代理方法到bootstrapSwitch
         *
         * @return 
         */
        method: function() {
            this.$input.bootstrapSwitch.apply(this.$input, arguments);
        }
    });
});
