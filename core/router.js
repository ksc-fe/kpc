import Router from 'universal-router';
import './main';

export default new Router([
    {path: '/', action: async () => {
        const Page = await import('pages/component');
        return {Page};
    }},
    {path: '/components/button', action: async () => {
        const Page = await import('pages/component');
        return {Page};
    }},
]);
