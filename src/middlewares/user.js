var Advanced = require(__ROOT + '/node_modules/advanced/lib/index');

module.exports = Advanced.Controller.extend({
    // 拿用户信息
    userInfo: function(force) {
        // 某些地方需要这个变量，如：region
        this.res.locals.req = this.req;

        if (!force && this.req.xhr) return this.next();

        var token = this.req.cookies.kscdigest;
        this.request({
            info: {
                uri: (Advanced.Utils.c('isMock') ? '' : 'http://api.passport.ksyun.com') + '/login_tokens/' + token,
                headers: {
                    'content-type': 'application/json',
                    'X-Entry': 'com.ksyun.console',
                    'X-Entry-Secret': '4a03491c8252370318cafe4cb4e77a67',
                    'X-Version': 1,
                    'X-Timestamp': new Date().getTime(),
                    'X-Client-Ip': this.req.ip,
                    'Authorization': 'login_token ' + token
                }
            }
        }).then(function(data) {
            if (data.info && data.info.user) {
                this.res.locals.user = data.info.user;
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
        this.userInfo(true);
    }
});
