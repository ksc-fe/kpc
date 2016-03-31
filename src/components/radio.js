define(['node_modules/kpc/src/views/components/radio'], function(template) {
    return Intact.extend({
        defaults: {
            checked: false
        },

        template: template,

        _change: function(e) {
            this.set('checked', e.target.checked);
            this.trigger('changed', e);
        },

        _click: function(e) {
            this.trigger('click', e);
        }
    });
});
