import router from './router';
import {createBrowserHistory} from 'history';
import App from 'components/app';
import Link from 'components/link';
import serverStyleCleanup from 'node-style-loader/clientCleanup';

const history = createBrowserHistory();
const $app = new App({container: document.getElementById('app'), ssr: true});

$app.history = history;
Link.history = history;

let unlisten;
function init(router) {
    if (unlisten) unlisten();

    unlisten = history.listen(async ({pathname}, action) => {
        const {Page, data} = await router.resolve({pathname});
        $app.load(Page.default, data, serverStyleCleanup);
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
