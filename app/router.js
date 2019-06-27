import Router from 'universal-router';

const context = require.context('../demos/', true, /index\.js$/);
const routes = context.keys().map(key => {
    return {
        path: `/components/${key.slice(2, -9)}`,
        action: () => ({Page: context(key)}) ,
    };
});

export default new Router([
    {
        path: '/', 
        action: async () => {
            const Page = await import('demos/index');
            return {Page};
        }
    },
    {
        path: '/components/button',
        action: async () => {
            const Page = await import('demos/button');
            return {Page};
        }
    },
    {
        path: '/components/dialog',
        action: async () => {
            return {Page: await import('demos/dialog')};
        }
    },
    {
        path: '/components/table',
        action: async () => {
            return {Page: await import('demos/table')};
        }
    },
    {
        path: '/components/checkbox',
        action: async () => {
            return {Page: await import('demos/checkbox')};
        }
    },
    {
        path: '/components/progress',
        action: async () => {
            return {Page: await import('demos/progress')};
        }
    },
    {
        path: '/components/radio',
        action: async () => {
            return {Page: await import('demos/radio')};
        }
    },
    {
        path: '/components/select',
        action: async () => {
            return {Page: await import('demos/select')}
        }
    },        
    {
        path: '/components/slider',
        action: async () => {
            return {Page: await import('demos/slider')}
        }
    },
    {
        path: '/components/spinner',
        action: async () => {
            return {Page: await import('demos/spinner')}
        }
    },
    {

        path: '/components/tooltip',
        action: async () => {
            return {Page: await import('demos/tooltip')}
        }
    },
    {
        path: '/components/form',
        action: async () => {
            return {Page: await import('demos/form')};
        }
    },
    {
        path: '/components/grid',
        action: async () => {
            return {Page: await import('demos/grid')};
        }
    },
    {
        path: '/components/switch',
        action: async () => {
            return {Page: await import('demos/switch')};
        }
    },
    {
        path: '/components/editable',
        action: async () => {
            return {Page: await import('demos/editable')};
        }
    },
    {
        path: '/components/tabs',
        action: async () => {
            return {Page: await import('demos/tabs')};
        }
    },
    ...routes
]);
