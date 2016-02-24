Vdt.setDelimiters(['{{', '}}']);

require.config({
    baseUrl: '/',

    paths: {
        jquery: 'node_modules/kpc/src/common/js/lib/jquery'
    },
    shim: {
        director: {
            exports: 'Router'
        },
        jquery: {
            exports: 'jQuery'
        }
    }
});

define('jquery', [], function() {
    return jQuery;
});
