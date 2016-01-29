define(['node_modules/kpc/src/views/components/select'], function(template) {
    return Intact.extend({
        defaults: {
            data: [],
            value: null,
            disabled: false,
            className: '',
            width: 200
        },

        template: template,

        _create: function() {
            var self = this;
            $(this.element).find('.c-select')
                .selectmenu({width: this.get('width')})
                .on('selectmenuchange', function(e, ui) {
                    self.trigger('change', e, ui);
                });
        },

        _update: function() {
            $(this.element).find('.c-select').selectmenu('refresh');
        }
    });
});
