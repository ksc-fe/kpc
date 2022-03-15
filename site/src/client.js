import 'core-js/es/promise';
import './main';
import router from './router';
import {createBrowserHistory} from 'history';
import App from 'kpc/components/app';
import Link from 'kpc/components/link';
import serverStyleCleanup from 'node-style-loader/clientCleanup';
import {configure} from 'kpc/components/utils';

configure({
    onDialogOpen(scrollbarWidth) {
        document.body.style.backgroundColor = '#f1f1f5';
        const header = document.querySelector('.header-wrapper');
        if (header) {
            header.style.paddingRight = `${scrollbarWidth}px`;
        }
        const tableOfContents = document.querySelector('.table-of-contents');
        if (tableOfContents) {
            tableOfContents.style.right = `${scrollbarWidth}px`;
        }
    },

    onDialogClose() {
        const header = document.querySelector('.header-wrapper');
        if (header) {
            header.removeAttribute('style');
        }
        const tableOfContents = document.querySelector('.table-of-contents');
        if (tableOfContents) {
            tableOfContents.removeAttribute('style');
        }
    },
});

const history = createBrowserHistory();
const $app = new App({container: document.getElementById('page'), ssr: true});

$app.history = history;
Link.history = history;
window.$app = $app;

let unlisten;
function init(router) {
    if (unlisten) unlisten();

    Link.baseUrl = router.baseUrl;

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
