define(['node_modules/kpc/src/views/components/select'], function(template) {
    return Intact.extend({
        defaults: {
            data: [],
            value: null,
            disabled: false,
            className: '',
            name: undefined,
            width: 200,
            appendTo: undefined,
            position: undefined
        },

        template: template,

        _create: function() {
            var self = this;
            var appendTo = self.get('appendTo');
            var $select = $(this.element).find('select')
                .selectmenu({
                    width: this.get('width'),
                    appendTo: appendTo === 'self' ? this.element : appendTo,
                    position: self.get('position')
                })
                .on('selectmenuchange', function(e, ui) {
                    self.set('value', ui.item.value, {silent: true});
                    self.trigger('change', e, ui);
                    self.trigger('changed', e, ui);
                    // 这个事件用于jquery.validate验证合法性
                    $select.trigger('focusout'); 
                });
        },

        _update: function() {
            $(this.element).find('.c-select').selectmenu('refresh');
        },

        _destroy: function() {
            $(this.element).find('.c-select').selectmenu('destroy');
        }
    });
});
