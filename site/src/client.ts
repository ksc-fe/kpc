import router, {RouteResult} from './router';
import {createBrowserHistory} from 'history';
import UniversalRouter from 'universal-router';
import {render, createVNode as h} from 'intact';

const history = createBrowserHistory();
const container = document.getElementById('page');

let unlisten: () => void;
function init(router: UniversalRouter<RouteResult>) {
    if (unlisten) unlisten();

    unlisten = history.listen(async ({location}) => {
        console.log(location);
        const {Page, data} = (await router.resolve(location.pathname))!;
        render(h(Page, data), container!);
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
