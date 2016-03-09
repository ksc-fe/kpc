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

// 定义一些模块， 因为这些模块已经通过script标签加载
_.each(['jquery $', 'underscore _', 'vdt Vdt', 'intact Intact'], function(item) {
    var arr = item.split(' ');
    define(arr[0], [], function() {
        return window[arr[1]];
    });
});
