import Router, {Route} from 'universal-router';
import {Component, ComponentConstructor} from 'intact';

export type RouteResult = {Page: ComponentConstructor};
export type RouteItem = Route<RouteResult>

const req = require.context('./', true, /index\.ts$/);
const routes = req.keys().map<Route | undefined>(key => {
    if (!key.startsWith('.')) return;
    const path = key.slice(1, -9);
    return {
        path: key.slice(1, -9),
        action: () => ({Page: req(key).default}),
    };
}).filter((item): item is Route => !!item);

export default new Router([
    {
        path: '/',
        action: () => ({Page: req('./components/button/index.ts').default}),
    },
    ...routes
]);
