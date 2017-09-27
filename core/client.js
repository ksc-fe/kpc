import router from './router';
import createHistory from 'history/createBrowserHistory';
import App from 'components/app';
import Link from 'components/link';

const history = createHistory();
const $app = new App({container: document.getElementById('app')});

$app.history = history;
Link.history = history;

history.listen(async ({pathname}, action) => {
    const {Page, data} = await router.resolve({pathname});
    $app.load(Page, data);
});
history.push(location);
