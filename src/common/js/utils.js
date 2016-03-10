var kpc = {};
kpc.utils = {
    /**
     * 请求api
     * @param url 请求地址
     * @param type 请求类型
     * @param dataGet get数据
     * @param dataPost post数据
     * @returns {Promise}
     */
    api: function (url, type, dataGet, dataPost, options) {
        var def = $.Deferred();

        if (type.toLowerCase() === 'post' && !dataPost) {
            dataPost = dataGet;
            dataGet = null;
        }

        if (dataGet) {
            url = url + (~url.indexOf('?') ? '&' : '?') + $.param(dataGet);
        }

        var ajax = $.ajax(_.extend({
            url: url,
            type: type || 'get',
            dataType: 'json',
            data: dataPost,
            cache: false
        }, options)).done(function(res) {
            if (res && res.status == utils.ERR_CODE.SUCCESS || res.status == 200) {
                // 操作成功时,才会执行done回调
                // setTimeout(function() {
                   // def.resolve(res)
                // }, 3000)
                def.resolve(res)
            } else {
                def.reject(res);
            }
        }).fail(function(e) {
            // 针对Firefox切换页面ajax被取消的情况默默失败
            if (/Firefox/.test(navigator.userAgent) && e && e.statusText === 'error') {
                console && console.log('Ajax aborted!');
                return;
            }
            def.reject(e);
        });

        var ret = def.promise();
        ret.abort = ajax.abort;
        return ret;
    },

    /**
     * $.param反函数,将queryString转为object
     * @param str
     * @returns {object}
     */
    unParam: function(str) {
        var ret = {};
        if (str) {
            str = str.split('&');
            _.each(str, function(item) {
                item = item.split('=');
                ret[item[0]] = decodeURIComponent(item[1]);
            });
        }
        return ret;
    },

    /**
     * 用给定的字符填充字符串，保证字符串长度不小于length
     * @param str
     * @param length
     * @param pad
     * @returns {*}
     */
    strPad: function(str, length, pad) {
        str = str.toString();
        pad = pad === undefined ? '0' : pad;
        var l = str.length;
        if (l < length) {
            str = new Array(length - l + 1).join(pad) + str;
        }
        return str;
    },

    /**
     * 纠正ip段格式，去掉多余的0
     * @param ipStr
     * @returns {*}
     */
    correctIpSection: function(ipStr) {
        if (_.isString(ipStr)) {
            ipStr = ipStr.replace(/([\.\/,\s]+|^)0+(?=\d)/g, '$1');
        }
        return ipStr;
    },

    /**
     * 类似$.param的函数,只是当value为空时,舍弃掉
     * @param obj
     * @returns {string}
     */
    param: function(obj) {
        var ret = [];
        _.each(obj, function(value, key) {
            if (value !== '' && value != undefined) {
                ret.push(key + '=' + value);
            }
        });
        
        return ret.join('&');
    },

    /**
     * 格式化内存大小显示
     * 小于1024则显示M
     * 大于1024能整除则显示xG，不能整除则显示x.xG
     * @param value
     * @returns {string}
     */
    formatRAM: function(value) {
        if (value < 1024) {
            return value + 'M';
        } else {
            var value0 = Math.floor(value / 1024),
                value1 = (value / 1024).toFixed(1);
            return (value0 == value1 ? value0 : value1) + 'G';
        }
    },

    /**
     * 时间戳转换成日期
     *
     * @param timestamp
     * @returns {string}
     */
    formatTimestamp: function(timestamp) {
        var date = new Date(timestamp);

        var Y = date.getFullYear() + '-',
            _M = date.getMonth() + 1,
            _D = date.getDate(),
            _h = date.getHours(),
            _m = date.getMinutes(),
            _s = date.getSeconds();

        _M = (_M < 10 ? ('0' + _M) : _M) + '-';
        _D = (_D < 10 ? ('0' + _D) : _D)  + ' ';
        _h = (_h < 10 ? ('0' + _h) : _h) + ':';
        _m = (_m < 10 ? ('0' + _m) : _m) + ':';
        _s = _s < 10 ? ('0' + _s) : _s;

        return  Y + _M + _D + _h + _m + _s;
    },

    //两位小数显示,向上取整
    ceilFixed2: function(num) {
        return ('' + (num - 0)).replace(
            /^(-?\d+)(?:\.(\d)?(\d)?(\d*))?/,
            function(ori,n0, n1,n2,n3){
                return n0+'.'+(n1||0)+(n3? n2-0+1: (n2||0));
            }
        );
    },


    /**
     * 显示提示信息
     * 
     * @param type 提示类型（success, error, warn）
     * @param text 提示语
     * @param callback 回调方法\
     * @param timeout 自动消失间隔
     */
    showTip: function(type, text, callback, timeout){
        require(['node_modules/kpc/src/common/js/widgets/tip'], function(Tip) {
            Tip({ 
                type: type,
                text: text,
                timeout: timeout || 3000
            });
            if(callback && typeof callback === "function"){
                callback();
            }
        });
    },

    /**
     * 操作成功tip
     * @param message
     */
    showSuccessTip: function(message, callback) {
        this.showTip('success', message || '操作成功', callback);
    },

    /**
     * 操作失败tip
     * @param message
     */
    showErrorTip: function(message, callback) {
        this.showTip('error', message || '操作失败', callback, 2500);
    },

    /**
     * 表单数据转换成json对象
     * 
     * @param $form form表单的jquery对象
     * return json对象
     */
    formSerialize: function($form) {
        var formData = $form.serializeArray(),
            obj = {};
        _.each(formData, function(value) {
            obj[value.name] = value.value
        });

        return obj;
    },

    /**
     * 实现继承
     * @param parent {Function} 要继承的父类
     * @param prototype {Object} 子类方法
     * @returns {Function} 子类
     */
    inherit: function(parent, prototype) {
        var child = function() {
            parent.apply(this, arguments);
        };

        var fn = function() { this.constructor = child; };
        fn.prototype = parent.prototype;
        child.prototype = new fn();

        _.extend(child, parent);

        child.__super__ = parent.prototype;

        _.each(prototype, function(proto, name) {
            if (!_.isFunction(proto)) {
                return child.prototype[name] = proto;
            }
            child.prototype[name] = (function() {
                var _super = function() {
                        return parent.prototype[name].apply(this, arguments);
                    },
                    _superApply = function(args) {
                        return parent.prototype[name].apply(this, args);
                    };
                return function() {
                    this._super = _super;
                    this._superApply = _superApply;

                    return proto.apply(this, arguments);
                }
            })()
        });

        return child;
    },

    /**
     * @brief 生成一个map函数，通过key获取对应的值，如果没有则返回原key 
     *
     * @param map {Object} map
     *
     * @return 
     */
    keyMap: function(map) {
        return function(key) {
            if (!arguments.length) { 
                return map; 
            } else {
                return map[key] || key;
            }
        };
    },

    /**
     * @brief 用vdt模板中，自动绑定model->view
     *
     * @param component
     * @param name
     *
     * @return 
     */
    valueLink: function(component, name) {
        return function(e) {
            component.set(name, e.target.value);
        };
    },

    /**
     * @brief 高亮某个导航，vdt模板可以前后端通用
     * 
     * @param index 要高亮的索引
     *
     * @param 
     */
    highlightNav: (function() {
        var vdt;
        return function(index) {
            if (!vdt) {
                require(['node_modules/kpc/src/views/sidebar'], function(template) {
                    vdt = Vdt(template); 
                    $('#sidebar').replaceWith(vdt.render({navIndex: index}));
                });
            } else {
                vdt.update({navIndex: index});
            }
        };
    })(),

    /**
     * 错误码
     */
    ERR_CODE: {
        SUCCESS: 0
    },

    /**
     * 静态常量
     */
    CONST: {
        WEB_ROOT: '',
        PAY_URL: 'http://i.ksyun.com'
    }
};

if (window.console === undefined) {
    window.console = {};
    window.console.log = function() {}
}
