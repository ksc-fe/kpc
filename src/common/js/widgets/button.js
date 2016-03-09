// 扩展button
$.widget('ui.button', $.ui.button, {
    disable: function(isShowLoading) {
        this._super();
        isShowLoading && this.element.addClass('c-icon-loading');
    },

    enable: function() {
        this._super();
        this.element.removeClass('c-icon-loading');
    }
});
