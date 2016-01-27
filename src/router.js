var Router = require('advanced').Router,
    router = Router();

var Advanced = require('advanced');

// 所有页面请求都去拿用户信息
// 排除静态资源
router.get(/^(?!(\/static\/|\/res\/|\/node_modules\/)).*$/, runCtrl('./middlewares/user', 'userInfo'));
// 所有/console页面都需要登录访问
router.get('/console/*', runCtrl('./middlewares/user', 'needLogin'));

function runCtrl(path, method) {
    var Ctrl = require(path);
    return function(req, res, next) {
        console.log(Advanced.Utils.c()) 
        var ctrl = new Ctrl(req, res, next);
        ctrl[method](); 
    };
}

module.exports = router;
