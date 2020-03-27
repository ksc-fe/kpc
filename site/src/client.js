import 'core-js/es6/promise';
import './main';
import router from './router';
import {createBrowserHistory} from 'history';
import App from 'kpc/components/app';
import Link from 'kpc/components/link';
import serverStyleCleanup from 'node-style-loader/clientCleanup';

const history = createBrowserHistory();
const $app = new App({container: document.getElementById('page'), ssr: true});

$app.history = history;
Link.history = history;
window.$app = $app;

let unlisten;
function init(router) {
    if (unlisten) unlisten();

    unlisten = history.listen(async ({pathname}, action) => {
        $app.showLoading();
        const {Page, data} = await router.resolve({pathname});
        await $app.load(Page, data, serverStyleCleanup);
    });
    history.replace(location);
}
init(router);

if (module.hot) {
    module.hot.accept('./router', () => {
        const router = require('./router').default;
        init(router);
    });
}
