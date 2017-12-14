import Router from 'universal-router';
import './main';

const context = require.context('../pages/', true, /index\.js$/);
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
            const Page = await import('pages/index');
            return {Page};
        }
    },
    ...routes
]);
