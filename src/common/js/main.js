Vdt.setDelimiters(['{{', '}}']);

require.config({
    baseUrl: '/',

    shim: {
        director: {
            exports: 'Router'
        }
    }
});

define('jquery', [], function() {
    return jQuery;
});
