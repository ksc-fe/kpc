import Router from 'universal-router';

// const routes = require.context('./', false, /\.router.js$/).keys().map(key => {
    // return {
        // path: ``
    // }
// })

export default new Router([
    {
        path: '/',
        action: async () => {
            return {Page: await import('../pages/index')}
        }
    },
    {
        path: '(.*)',
        action: async (context) => {
            console.log(context);
            return {
                Page: await import('../pages/document'),
                data: {
                    path: context.params[0]
                }
            };
        }
    },
]);
