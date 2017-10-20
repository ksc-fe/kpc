import Router from 'universal-router';
import './main';

export default new Router([
    {
        path: '/', 
        action: async () => {
            const Page = await import('pages/index');
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
    },
    {
        path: '/components/table',
        action: async () => {
            return {Page: await import('pages/table')};
        }
    },
    {
        path: '/components/checkbox',
        action: async () => {
            return {Page: await import('pages/checkbox')};
        }
    },
    {
        path: '/components/progress',
        action: async () => {
            return {Page: await import('pages/progress')};
        }
    },
    {
        path: '/components/radio',
        action: async () => {
            return {Page: await import('pages/radio')};
        }
    },
    {
        path: '/components/slider',
        action: async () => {
            return {Page: await import('pages/slider')}
        }
    },
    {
        path: '/components/spinner',
        action: async () => {
            return {Page: await import('pages/spinner')}
        }
    }

]);
