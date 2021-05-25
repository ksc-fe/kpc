import Router, {Route} from 'universal-router';
import {Component, ComponentConstructor} from 'intact';

export type RouteResult = {Page: ComponentConstructor};
export type RouteItem = Route<RouteResult>

const req = require.context('./components', true, /index\.ts$/);
const routes = req.keys().map<Route | undefined>(key => {
    if (!key.startsWith('.')) return;
    return {
        path: `/components/${key.slice(2, -9)}`,
        action: () => ({Page: req(key).default}),
    };
}).filter((item): item is Route => !!item);

export default new Router([
    {
        path: '/',
        action: () => ({Page: req('./button/index.ts').default}),
    },
    ...routes
]);
