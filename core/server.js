import Advanced from 'advanced';
import Vdt from 'vdt';
import path from 'path';
import router from './router';

const app = Advanced((app) => {
    app.engine('vdt', Vdt.__express);
    app.set('views', path.resolve(__dirname, 'views'));
    app.set('view engine', 'vdt');
    Vdt.configure('delimiters', ['{{', '}}']);

    app.use((req, res, next) => {
        router.resolve({pathname: req.path}).then(page => {
            const html = page.toString();
            res.render('index', {content: html});
        }).catch(next);
    })
});

app.listen(3000);
