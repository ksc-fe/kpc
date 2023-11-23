import router, {RouteResult} from './router';
import UniversalRouter from 'universal-router';
import {render, createVNode as h} from 'intact';
import {history} from './history';
import { ConfigProvider } from 'kpc';
// import {localize} from 'kpc';
// import i18n from 'kpc/i18n/en-US';

// localize(i18n);

const container = document.getElementById('page');

let unlisten: () => void;
function init(router: UniversalRouter<RouteResult>) {
    if (unlisten) unlisten();

    unlisten = history.listen(async ({location}) => {
        const {Page, data} = (await router.resolve(location.pathname))!;
        render(h(ConfigProvider, { value: { classNamePrefix: 'kd' } }, h(Page, data)), container!);
        // render(h(Page, data), container!);
    });

    history.replace(location);
}

init(router);

if (module.hot) {
    module.hot.accept('./router', () => {
        const router = require('./router');
        init(router.default);
    });
}
