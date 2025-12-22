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

function getVersion() {
    const pathname = location.pathname;
    const versionRE = /^(\/v(?:\d.?)+(-beta\.\d+)?)\/.*/;
    const matches = pathname.match(versionRE);
    if (matches) {
        return matches[1];
    }
    return '';
}

export const version = getVersion();

export default new Router<RouteResult>({
    path: '',
    async action({next}) {
        const child = await next(); 
        window.scrollTo(0, 0);
        return child;
    },
    children: [
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
            path: /demo\/(.*)/,
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
            path: '/resources',
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
            path: '/solutions',
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
            path: '/font',
            action: async (context) => {
                return {
                    Page: (await import(`../pages/font/index`)).default,
                    data: {
                        path: context.params[0] as string,
                    }
                }
            }
        },
        {
            path: '/colorProcess',
            action: async (context) => {
                return {
                    Page: (await import(`../pages/colorProcess/index`)).default,
                    data: {
                        path: context.params[0] as string,
                    }
                }
            }
        },
        {
            path: /(.*)/,
            name: 'otherwise',
            action: async (context) => {
                return {
                    Page: (await import('../pages/document')).default,
                    data: {
                        path: context.params[0] as string
                    }
                };
            }
        },
    ]
}, {
    baseUrl: version, 
});
