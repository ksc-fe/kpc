import Router from 'universal-router';
import {ComponentConstructor} from 'intact';

export type RouteResult = Promise<RouteAction>
type RouteAction = {
    Page: ComponentConstructor
    data?: Data
}
type Data = {
    path?: string
}

export default new Router<RouteResult>([
    {
        path: /^\/?$/,
        action: async () => {
            return {Page: (await import('../pages/index')).default}
        }
    },
    {
        path: /^(\/docs\/design\/.*)$/,
        action: async (context) => {
            return {
                Page: (await import('../pages/design')).default,
                data: {
                    path: context.params[0] as string
                }
            };
        }
    },
    // {
        // path: /^(?:\/kpc)?(\/docs\/blogs\/.*)$/,
        // action: async (context) => {
            // return {
                // Page: (await import('../pages/blog')).default,
                // data: {
                    // path: context.params[0]
                // }
            // };
        // }
    // },
    // {
        // path: '/docs/resources',
        // action: async context => {
            // return {
                // Page: (await import('../pages/resource')).default,
            // }
        // }
    // },
    // // {
        // // path: "/demo.html",
        // // action: async context => {
            // // return {
                // // Page: (await import('../pages/demo')).default,
            // // }
        // // }
    // // },

    {
        path: /^(?:\/kpc)?(\/docs\/design_new\/.*)$/,
        action: async (context) => {
            return {
                Page: (await import('../pages/design_new')).default,
                data: {
                    path: context.params[0] as string
                }
            };
        }
    },

    {
        path: '/demo\/(.*)/',
        action: async (context) => {
            return {
                Page: (await import('../pages/demo')).default,
                data: {
                    path: context.params[0] as string,
                }
            }
        }
    },
    {
        path: '/iframe/:frameName',
        action: async (context) => {
            return {
                Page: (await import(`../pages/iframe/${context.params.frameName}/index`)).default,
                data: {
                    path: context.params[0] as string,
                }
            }
        }
    },
    {
        path: '/resource',
        action: async (context) => {
            return {
                Page: (await import(`../pages/resource/index`)).default,
                data: {
                    path: context.params[0] as string,
                }
            }
        }
    },
    {
        path: '/solution',
        action: async (context) => {
            return {
                Page: (await import(`../pages/solution/index`)).default,
                data: {
                    path: context.params[0] as string,
                }
            }
        }
    },
    {
        path: '/design',
        action: async (context) => {
            return {
                Page: (await import(`../pages/designdoc/index`)).default,
                data: {
                    path: context.params[0] as string,
                }
            }
        }
    },
    {
        path: '/demo\/(.*)/',
        action: async (context) => {
            return {
                Page: (await import('../pages/demo')).default,
                data: {
                    path: context.params[0] as string,
                }
            }
        }
    },
    {
        path: /(.*)/,
        action: async (context) => {
            return {
                Page: (await import('../pages/document')).default,
                data: {
                    path: context.params[0] as string
                }
            };
        }
    },
]);
