import './main';
import router from './router';
import App from 'kpc/components/app';

export default function(path) {
    return router.resolve({pathname: path}).then(({Page, data}) => {
        const $app = new App();
        return $app.render(Page, data).then(() => {
            return {
                content: $app.toString(),
            };
        }).catch(e => {
            console.log(e.stack);
        });
    });
}

