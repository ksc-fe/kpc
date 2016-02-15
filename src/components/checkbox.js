define(['node_modules/kpc/src/views/components/checkbox'], function(template) {
    return Intact.extend({
        defaults: {
            checked: false
        },

        template: template,

        _change: function(e) {
            this.set('checked', e.target.checked);
            this.trigger('changed', e);
        }
    });
});
