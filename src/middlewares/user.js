var Advanced = require('advanced');

module.exports = Advanced.Controller.extend({
    // 拿用户信息
    userInfo: function() {
        // 某些地方需要这个变量，如：region
        this.res.locals.req = this.req;

        if (this.req.xhr) return this.next();

        this.request({
            info: '/user/user_info',
            account: '/user/user_balance'
        }).then(function(data) {
            if (data.info && data.info.status == 0) {
                this.res.locals.user = data.info.data;
            }
            if (data.account && data.account.status == 0) {
                this.res.locals.account = data.account.data;
            }
            this.next();
        }.bind(this));
    },

    // 登录权限
    needLogin: function() {
        if (this.req.xhr) return this.next();

        if (!this.res.locals.user) {
            this.res.redirect('http://www.ksyun.com/user/login?callback=' +
                encodeURIComponent(this.req.protocol + '://' + (this.req.get('x-forwarded-host') || this.req.get('host')) + this.req.originalUrl));
        } else {
            return this.next();
        }
    }
});
