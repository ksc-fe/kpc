var Advanced = require(__ROOT + '/node_modules/advanced/lib/index');

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
    },

    
    /**
     * @brief 获取用户数据写入res.locals，不用区分请求类型
     *
     * @return 
     */
    getUserInfo: function() {
        this.res.locals.req = this.req;

        this.request({
            info: '/user/user_info'
        }).then(function(data) {
            if (data.info && data.info.status == 0) {
                this.res.locals.user = data.info.data;
            }
            this.next();
        }.bind(this));
    }
});
