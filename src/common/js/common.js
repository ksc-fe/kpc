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
});
