import Router from 'universal-router';
import './main';

export default new Router([
    {
        path: '/', 
        action: async () => {
            const Page = await import('pages/component');
            return {Page};
        }
    },
    {
        path: '/components/button',
        action: async () => {
            const Page = await import('pages/button');
            return {Page};
        }
    },
    {
        path: '/components/dialog',
        action: async () => {
            return {Page: await import('pages/dialog')};
        }
    }
]);
