import Advanced from 'advanced';
import Vdt from 'vdt';
import path from 'path';
import router from './router';
import App from 'components/app';
import {collectInitial} from 'node-style-loader/collect';
import DynamicMiddleware from 'dynamic-middleware';

function createRouterMiddleware(router, App) {
    return function(req, res, next) {
        router.resolve({pathname: req.path}).then(({Page, data})=> {
            const $app = new App();
            return $app.render(Page, data).then(() => {
                res.render('index', {
                    content: $app.toString(),
                    style: collectInitial()
                });
            }).catch(e => {
                res.render('index', {content: '<div></div>'});
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

let routerMiddleware = DynamicMiddleware.create(createRouterMiddleware(router, App));

const app = Advanced((app) => {
    app.engine('vdt', Vdt.__express);
    app.set('views', path.resolve(process.cwd(), 'views'));
    app.set('view engine', 'vdt');
    Vdt.configure('delimiters', ['{{', '}}']);

    app.use(routerMiddleware.handler());

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

    // app.use('/static', Advanced.Express.static(path.resolve(__dirname, 'static')));
});

app.listen(3000);

if (module.hot) {
    module.hot.accept(['./router', 'components/app'], () => {
        const router = require('./router');
        const App = require('components/app');
        routerMiddleware.replace(createRouterMiddleware(router, App));
    });
}

export default app;
