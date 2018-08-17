import './main';
import router from './router';
import createHistory from 'history/createBrowserHistory';
import App from 'kpc/components/app';
import Link from 'kpc/components/link';
import serverStyleCleanup from 'node-style-loader/clientCleanup';

const history = createHistory();
const $app = new App({container: document.getElementById('page'), ssr: true});

$app.history = history;
Link.history = history;

let unlisten;
function init(router) {
    if (unlisten) unlisten();

    unlisten = history.listen(async ({pathname}, action) => {
        const {Page, data} = await router.resolve({pathname});
        $app.load(Page, data, serverStyleCleanup);
    });
    history.replace(location);
}
init(router);

if (module.hot) {
    module.hot.accept('./router', () => {
        const router = require('./router');
        init(router);
    });
}
