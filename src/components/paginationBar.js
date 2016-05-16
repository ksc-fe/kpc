define(['node_modules/kpc/src/views/components/paginationBar'], function(template) {
    return VdWidget.extend({
        defaults: {
            url: 'javascript:;',
            current: 1,
            total: 0,
            defaultSize:10,
            showCount: 7,
            pageSizes: [
                {text: '10行', value: '10'},
                {text: '20行', value: '20'},
                {text: '50行', value: '50'},
                {text: '100行', value: '100'},
            ]
        },
        _init: function(){
            this._super();
            this.set({
                size: this.get("defaultSize")
            }, {silent: true})
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
        },

        setCurrent: function(e) {
            e.preventDefault();
            var totalPages = Math.ceil(this.get('total') / this.get('size'));
            var t = /^[0-9]+$/;
            var cpage = $(this.element).find(".page-input").val();
            if(t.test(cpage)) {
                if(cpage < 1) {
                    this.set({
                        current: 1
                    });
                } else if(cpage > totalPages) {
                    this.set({
                        current: totalPages
                    });
                } else {
                    this.set({
                        current: cpage
                    });
                }
            } else {
                this.update()
            }
        },

        changePageSize: function() {
            this.set({
                size: $(this.element).find("[name=pageSize]").val(),
                current: 1
            })
        }
    });
});
