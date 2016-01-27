var Router = require('advanced').Router,
    router = Router(),
    UserController = require('');

router.get(/^(?!(\/static\/|\/res\/)).*$/, 'middlewares/user@userInfo');

module.exports = router;
