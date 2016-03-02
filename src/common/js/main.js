Vdt.setDelimiters(['{{', '}}']);

require.config({
    baseUrl: '/',

    shim: {
        director: {
            exports: 'Router'
        }
    },

    map: {
        '*': {
            app: 'node_modules/kpc/src/common/js/app'
        }
    }
});

define('jquery', [], function() {
    return jQuery;
});
