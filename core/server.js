import Advanced from 'advanced';
import Vdt from 'vdt';
import path from 'path';
import router from './router';
import App from 'components/app';
import {collectInitial} from 'node-style-loader/collect';

const app = Advanced((app) => {
    app.engine('vdt', Vdt.__express);
    app.set('views', path.resolve(__dirname, 'views'));
    app.set('view engine', 'vdt');
    Vdt.configure('delimiters', ['{{', '}}']);

    app.use((req, res, next) => {
        router.resolve({pathname: req.path}).then(({Page, data})=> {
            const $app = new App();
            $app.render(Page, data).then(() => {
                res.render('index', {
                    content: $app.toString(),
                    style: collectInitial()
                });
            });
        }).catch(e => {
            if (e.status === 404) {
                next();
            } else {
                next(e);
            }
        });
    });

    app.use('/static', Advanced.Express.static(path.resolve(__dirname, 'static')));
});

app.listen(3000);
