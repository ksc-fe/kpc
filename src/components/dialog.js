define(['node_modules/kpc/src/views/components/dialog'], function(template) {
    return Intact.extend({
        defaults: {

        },

        template: template,

        _create: function() {
            var self = this;
            $(this.element).find('dialog').dialog({});
        },

        _update: function() {

        }
    });
});
