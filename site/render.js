import './main';
import router from './router';
import App from 'components/app';
import {collectInitial} from 'node-style-loader/collect';

export default function(path) {
    return router.resolve({pathname: path}).then(({Page, data}) => {
        const $app = new App();
        return $app.render(Page, data).then(() => {
            return {
                content: $app.toString(),
                style: collectInitial(),
            };
        }).catch(e => {
            console.log(e.stack);
        });
    });
}

