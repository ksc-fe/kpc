require(['node_modules/kpc/src/common/js/widgets/popmenu'], function() {
    $('.user-layer').popmenu({
        target: $('.user-wrapper'),
        event: 'hover',
        position: {
            my: "right top",
            at: "right bottom",
            collision: "none"
        }
    });
    
    // 针对视频云这类能展开的菜单，特殊处理
    $(document).on('click', '#sidebar .expand', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active');
        var $icon = $this.find('.icon'),
            className = $icon.attr('class'),
            classNames = className.match(/c\-icon\-(\w+)/);
        $this.find('.icon').toggleClass('c-icon-' + classNames[1] + ' c-icon-' + classNames[1] + '-hover');
        $this.find('.arrow').toggleClass('c-icon-nav-arrow-right c-icon-nav-arrow-down-hover');
    });
});
