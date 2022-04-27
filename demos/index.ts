import router, {RouteResult} from './router';
import {createBrowserHistory} from 'history';
import {render, createVNode as h} from 'intact';
import UniversalRouter from 'universal-router';

const history = createBrowserHistory();
const container = document.getElementById('app');

let unlisten: () => void;
function init(router: UniversalRouter<RouteResult>) {
    if (unlisten) unlisten();

    unlisten = history.listen(async ({location}) => {
        console.log(location);
        const {Page} = (await router.resolve(location.pathname))!;
        render(h(Page), container!);
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
