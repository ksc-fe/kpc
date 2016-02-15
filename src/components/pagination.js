define(['node_modules/kpc/src/views/components/pagination'], function(template) {
    return VdWidget.extend({
        defaults: {
            url: 'javascript:;',
            current: 1,
            total: 0,
            size: 20,
            showCount: 7
        },

        template: template,

        setIndex: function(index) {
            var total;
            if (index < 1) {
                index = 1;
            } else if (index > (total = Math.ceil(this.get('total') / this.get('size')))) {
                index = total;
            }

            this.set('current', index);
        }
    });
});
