import Advanced from 'advanced';
import Vdt from 'vdt';
import path from 'path';
import router from './router';
import App from 'components/app';
import {collectInitial} from 'node-style-loader/collect';

function createRouterMiddleware(router, App) {
    return function(req, res, next) {
        router.resolve({pathname: req.path}).then(({Page, data}) => {
            const $app = new App();
            return $app.render(Page, data).then((content) => {
                res.render('index', {
                    content,
                    style: collectInitial()
                });
            }).catch(e => {
                console.log(e.stack);
                res.render('index');
            });
        }).catch(e => {
            if (e.status === 404) {
                next();
            } else {
                next(e);
            }
        });
    }
}

let routerMiddleware = createRouterMiddleware(router, App);

const app = Advanced((app) => {
    app.engine('vdt', Vdt.__express);
    app.set('views', path.resolve(process.cwd(), 'views'));
    app.set('view engine', 'vdt');
    Vdt.configure('delimiters', ['{{', '}}']);

    app.use(function(req, res, next) {
        routerMiddleware(req, res, next);
    });

    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config.client');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/',
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));

    app.use(Advanced.Express.static(path.resolve(__dirname, '../')));
});

const port = 3000;
app.listen(port, () => {
    Advanced.Logger.log(`App is listening on the port ${port}`);
});

if (module.hot) {
    module.hot.accept(['./router'], () => {
        const router = require('./router');
        // const App = require('components/app').default;
        routerMiddleware = createRouterMiddleware(router, App);
    });
}

export default app;
