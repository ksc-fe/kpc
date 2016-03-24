// 一些validate验证规则，从现有工程直接迁移过来
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        define( ["jquery"], factory );
    } else {
        factory( jQuery );
    }
}(function(jQuery) {

    jQuery.extend(jQuery.validator.messages, {
        required: "必须填写",
        remote: "验证不通过",
        email: "请输入有效的电子邮件",
        url: "请输入有效的网址",
        date: "请输入有效的日期",
        dateISO: "请输入有效的日期 (YYYY-MM-DD)",
        number: "请输入正确的数字",
        digits: "只可输入整数",
        creditcard: "请输入有效的信用卡号码",
        equalTo: "两次输入密码不一致",
        extension: "请输入有效的后缀",
        maxlength: jQuery.validator.format("最多{0}个字符"),
        minlength: jQuery.validator.format("最少{0}个字符"),
        rangelength: jQuery.validator.format("请输入长度为 {0} 至 {1} 之间的字符"),
        range: jQuery.validator.format("请输入 {0} 至 {1} 之间的数值"),
        max: jQuery.validator.format("请输入不大于 {0} 的数值"),
        min: jQuery.validator.format("请输入不小于 {0} 的数值")
    });

    /**
     * 支持promise的remote验证，不限定服务器只能返回true/fasle
     */
    jQuery.validator.addMethod('promise', function(value, element, callback) {
        if (this.optional(element)) {
            return "dependency-mismatch";
        }

        if (!this.settings.messages[element.name]) {
            this.settings.messages[element.name] = {};
        }

        var data = {}, validator = this;
        data[element.name] = value;

        function showError(response) {
            var errors = {};
            message = response || validator.defaultMessage(element, 'remote');
            errors[element.name] = message;
            validator.invalid[element.name] = true;
            validator.showErrors(errors);
        }

        this.startRequest(element);
        callback(data).then(function(response) {
            var valid = response === true || response === "true",
                errors, message, submitted;

            if (valid) {
                submitted = validator.formSubmitted;
                validator.resetInternals();
                validator.toHide = validator.errorsFor(element);
                validator.formSubmitted = submitted;
                validator.successList.push(element);
                validator.invalid[element.name] = false;
                validator.showErrors();
            } else {
                showError(response);
            }
            validator.stopRequest(element, valid);
        }, function(data) {
            showError(data && data.message || data);
            validator.stopRequest(element, false);
        });
        
        return 'pending';
    });

    /*
     * 邮箱验证，原函数@符号后未验证域名
     */
    jQuery.validator.addMethod("email", function(value, element, param) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(value);
    }, $.validator.format("请输入有效的电子邮件"));
    /*
     * 验证输入长度（中文两个字节）
     */
    jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
        var length = value.length;
        for (var i = 0; i < value.length; i++) {
            if (value.charCodeAt(i) > 127) {
                length++;
            }
        }
        return this.optional(element) || ( length >= param[0] && length <= param[1] );
    }, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));


    // 邮政编码验证
    jQuery.validator.addMethod("isZipCode", function(value, element) {
        var tel = /^[0-9]{6}$/;
        return this.optional(element) || (tel.test(value));
    }, "请正确填写您的邮政编码");

    //邮政编码验证
    jQuery.validator.addMethod("isDomain", function(value, element) {
        var tel = /^((\.?([A-Za-z0-9\-_])+([A-Za-z0-9\-_\.])*\.[A-Za-z]{2,})+)$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的域名");

    //IP段格式验证
    jQuery.validator.addMethod("isOriginIp", function(value, element) {
        var tel = /^(((2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)\.){3}(2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)((,|\||;)((2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)\.){3}(2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?))*)$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的IP");

    //密码格式验证
    jQuery.validator.addMethod("ispwd", function(value, element) {
        //var tel = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([a-zA-Z0-9]|[!-/\^\?@_~`]){8,}$/;
        var tel = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(.){8,30}$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的密码格式");

    //管理员账户关键字验证
    jQuery.validator.addMethod("isKeyword", function(value, element) {
        var tel = /^(?!(\s*root\s*|\s*ROOT\s*|\s*rdsrepladmin\s*|\s*RDSREPLADMIN\s*|\s*rdsadmin\s*|\s*RDSADMIN\s*)$).*$/;
        return this.optional(element) || (tel.test(value));
    }, "输入内容为系统保留字，不允许使用");

    //手机格式验证
    jQuery.validator.addMethod("isPhone", function(value, element) {
        var tel = /^1[3|4|5|7|8]\d{9}$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的手机号码");

    //备份保留天数验证
    jQuery.validator.addMethod("isTime", function(value, element) {
        var tel = /^([7-9]|1[0-5])$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的备份保留天数");

    // IP段
    jQuery.validator.addMethod("isIpSection", function(value, element) {
        //不过滤以0开始的ip地址段
        var tel = /^(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])\/(\d{1}|[0-2]{1}\d{1}|3[0-2])$/;
        //过滤以0开始的ip地址段
        //var tel =/^(([01]?\d?[1-9]|2[0-4]\d|25[0-5])\.)(([01]?\d?\d|2[0-4]\d|25[0-5])\.){2}([01]?\d?\d|2[0-4]\d|25[0-5])\/(\d{1}|[0-2]{1}\d{1}|3[0-2])$/;
        return this.optional(element) || (tel.test(value));
    }, "IP段格式错误");

    // 用户名
    jQuery.validator.addMethod("isUserName", function(value, element) {
        var tel = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
        return this.optional(element) || (tel.test(value));
    }, "请填写正确的联系人名");

    // 实例名称
    jQuery.validator.addMethod("isName", function(value, element) {
        var tel = /^[0-9a-zA-Z\u4e00-\u9fa5-_@#\.]{2,64}$/;
        return this.optional(element) || (tel.test(value));
    }, "2-64个字符，支持中文，字母，数字，以及-_@#.");

    // 实例名称-非中文
    jQuery.validator.addMethod("isNameNotCN", function(value, element) {
        var tel = /^[0-9a-zA-Z-_@#\.]{2,64}$/;
        return this.optional(element) || (tel.test(value));
    }, "2-64个字符，支持字母，数字，以及-_@#.");

    // 实例名称
    jQuery.validator.addMethod("isNameSafe", function(value, element) {
        var tel = /^[0-9a-zA-Z\u4e00-\u9fa5-_@#\.]{2,64}$/;
        return this.optional(element) || (tel.test(value));
    }, "2-128个字符，支持中文，字母，数字，以及-_@#.");

    // 中文检测
    jQuery.validator.addMethod("isCN", function(value, element) {
        var tel = /.*[\u4e00-\u9fa5]+.*$/;
        if (tel.test(value)) {
            return false;
        } else {
            return true;
        }
    }, "不能输入中文");

    // 参数模板枚举格式校验（底层更新就需要扩展）
    jQuery.validator.addMethod("isConfig", function(value, element) {
        //var tel = /^(!?(\s*utf8\s*|\s*latin1\s*|\s*gbk\s*)$).*$/i;
        var tel = /^(!?(utf8\s*|latin1\s*|gbk\s*|utf8mb4\s*|)$).*$/i;
        return this.optional(element) || (tel.test(value));
    }, "输入内容为系统保留字，不允许使用");

    // 数字 当前值必须大于目标值
    jQuery.validator.addMethod("limitad", function(value, element, param) {
        var target = $(param);
        return +value >= +target.val();

    }, "当前值必须大于目标值");

    // ip 当前值必须大于目标值
    jQuery.validator.addMethod("iplimitad", function(value, element, param) {
        var target = $(param);
        var targetVal = parseInt(to2(target.val()), 2);
        value = parseInt(to2(value), 2);
        return this.optional(element) || (+value >= targetVal);
    }, "当前值必须大于目标值");
    // mac 地址
    jQuery.validator.addMethod("isMac", function(value, element) {
        var temp = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
        if (!temp.test(value)) {
            return false;
        } else {
            return true;
        }
    }, "mac地址不正确");

    // ip range
    jQuery.validator.addMethod("iprange", function(value, element, param) {
        var rangeObj = $(param);
        var minVal = $(rangeObj).data("min");
        var maxVal = $(rangeObj).data("max");

        if (minVal == undefined)return true;
        value = parseInt(to2(value), 2);

        // console.log("dhcp:",value,minVal,maxVal);
        return this.optional(element) || ( value >= minVal && value <= maxVal );
    }, "必须在网段内的DHCP范围");

    // gatewayip range
    jQuery.validator.addMethod("gatewayrange", function(value, element, param) {
        var rangeObj = $(param);
        var gatewayminVal = $(rangeObj).data("min");
        var gatewaymaxVal = $(rangeObj).data("max");
        if (gatewayminVal == undefined)return true;
        value = parseInt(to2(value), 2);
        // console.log("dhcp:",value,gatewayminVal,gatewaymaxVal);
        return this.optional(element) || ( value >= gatewayminVal && value <= gatewaymaxVal );
    }, "必须在1-253范围");

    //判断ip格式的网段是否合法（在掩码范围外的值必须全为0）
    jQuery.validator.addMethod("segmentvalidate", function(value, element, param) {
        var ipObj = value;
        var ipmask = $('#ipmask').val();
        if (ipmask == undefined) return false;
        var test = parseInt(to2(ipObj).substring(parseInt(ipmask), 32), 2);
        if (test != 0 && ipmask != 32) {
            return false;
        } else {
            return true;
        }

    }, "请输入正确的网段");

    //---------------------------vpc vpn  start---------------------------------------//
    //判断ip格式的网段是否合法（在掩码范围外的值必须全为0）(vpn自动生成多个网段定制)
    jQuery.validator.addMethod("segmentvalidateVpn", function(value, element, param) {
        var ipObj = value;
        var ipmask = $(element).parents('p').find('.ipMask').val();
        // console.log(ipmask)
        if (ipmask == undefined) return false;
        var test = parseInt(to2(ipObj).substring(parseInt(ipmask), 32), 2);
        if (test != 0 && ipmask != 32) {
            return false;
        } else {
            return true;
        }
    }, "请输入正确的网段");

    //IP段格式验证
    jQuery.validator.addMethod("isOriginIpVpn", function(value, element) {
        var tel = /^(((2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)\.){3}(2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)((,|\||;)((2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?)\.){3}(2[0-4]\d|25[0-5]|1\d\d|0|[1-9]\d?))*)$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的网段");

    //掩码为数字校验
    jQuery.validator.addMethod("numberVpn", function(value, element) {
        var tel = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的网段");

    // 掩码范围
    jQuery.validator.addMethod("rangeVpn", function(value, element, param) {
        return this.optional(element) || ( value >= 0 && value <= 32 );
    }, "请输入正确的网段");

    //不为空验证
    jQuery.validator.addMethod("requiredVpn", function(value, element, param) {
        return $.trim(value).length > 0;
    }, "请输入正确的网段");
    //---------------------------vpc vpn  end---------------------------------------//


    //ip值转2进制
    function to2(ip) {
        return ip.split('.').map(function(item) {
            var a = (+item).toString(2);
            if (a.length < 8) {
                var arr = new Array(8 - a.length + 1);
                a = arr.join('0') + a;
            }
            return a
        }).join('')
    }

    //一次最多可添加的白名单数量
    jQuery.validator.addMethod("ipsLengthTest", function(value, element) {
        var ipsLength = _.uniq(value.split(",")).length;
        if (value && ipsLength <= 20) {
            return true;
        } else {
            return false;
        }
    }, "单次添加IP地址最多20个");

    //联合验证
    jQuery.validator.addMethod("beforechcheck", function(value, element, param) {
        var obj = $(param);
        return this.element(obj);
    }, "前置验证失败");

    // 自定义验证
    $.validator.addMethod("isRedisName", function(value, element) {
        return this.optional(element) || (/^[0-9a-zA-Z!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\\\]\^_`\{\|\}~]+$/.test(value));
    }, "仅支持大小写字母、数字和特殊字符");

}));
