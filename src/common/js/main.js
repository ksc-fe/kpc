Vdt.setDelimiters(['{{', '}}']);

require.config({
    baseUrl: '/',

    shim: {
        director: {
            exports: 'Router'
        }
    }
});
