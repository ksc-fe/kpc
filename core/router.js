import Router from 'universal-router';
import './main';

export default new Router([
    {path: '/', action: async () => {
        const Page = await import('pages/component');
        return new Page();
    }},
    {path: '/:test', action: async (context, {test}) => {
        const Page = await import('pages/index');
        return new Page({test: test});
    }},
]);
