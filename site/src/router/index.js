import Router from 'universal-router';

// const routes = require.context('./', false, /\.router.js$/).keys().map(key => {
    // return {
        // path: ``
    // }
// })

export default new Router([
    {
        path: /^\/(kpc\/)?$/,
        action: async () => {
            return {Page: await import('../pages/index')}
        }
    },
    {
        path: /^(?:\/kpc)?(\/docs\/design\/.*)$/,
        action: async (context) => {
            return {
                Page: await import('../pages/design'),
                data: {
                    path: context.params[0]
                }
            };
        }
    },
    {
        path: /^(?:\/kpc)?(\/docs\/blogs\/.*)$/,
        action: async (context) => {
            return {
                Page: await import('../pages/blog'),
                data: {
                    path: context.params[0]
                }
            };
        }
    },
    {
        path: /(.*)/,
        action: async (context) => {
            return {
                Page: await import('../pages/document'),
                data: {
                    path: context.params[0]
                }
            };
        }
    },
]);
