/**
 * Created by xucz on 2016/2/22.
 */
define(['node_modules/kpc/src/views/components/fullDatePicker'],function(template){
    return Intact.extend({
        default: {
            startDate: "",
            endDate: ""
        },
        template: template,
        _create: function() {
            $.datepicker.regional['zh-TW'] = {
                closeText: '关闭',
                prevText: '&#x3c;上月',
                nextText: '下月&#x3e;',
                currentText: '今天',
                monthNames: ['一月','二月','三月','四月','五月','六月',
                    '七月','八月','九月','十月','十一月','十二月'],
                monthNamesShort: ['一','二','三','四','五','六',
                    '七','八','九','十','十一','十二'],
                dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
                dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
                dayNamesMin: ['日','一','二','三','四','五','六'],
                weekHeader: '周',
                dateFormat: 'yy/mm/dd',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: true,
                yearSuffix: '年'};
            $.datepicker.setDefaults($.datepicker.regional['zh-TW']);
            this._initDatePicker();
        },
        _initDatePicker: function() {
            var self = this;
            $(self.element).find('.date-from').datepicker({
                showOn: "button",
                buttonImage: "/node_modules/kpc/src/common/images/calendar.png",
                buttonImageOnly: true,
                buttonText: "Select date",
                onClose: function( selectedDate ) {
                    $(self.element).find('.date-to').datepicker( "option", "minDate", selectedDate );
                    self.set("from",$(self.element).find('.date-from').val());
                }
            });
            $(self.element).find('.date-to').datepicker({
                showOn: "button",
                buttonImage: "/node_modules/kpc/src/common/images/calendar.png",
                buttonImageOnly: true,
                buttonText: "Select date",
                onClose: function( selectedDate ) {
                    $(self.element).find('.date-from').datepicker( "option", "maxDate", selectedDate );
                    self.set("to",$(self.element).find('.date-to').val());
                }
            });
        },
        showDate:function() {
            this._initDate();
            $(this.element).find(".date-content").toggle();
            this._initDatePicker();
        },
        _initDate: function() {
            if(!this.get('resultValue')){
                var date = new Date();
                var to = date.valueOf();

                var from = to - 1000 * 60 * 60 * 24 * 30;
                var date2 = new Date(from);

                var Y = date2.getFullYear(),
                    _M = date2.getMonth() + 1,
                    _D = date2.getDate(),
                    _h = date2.getHours(),
                    _m = date2.getMinutes(),

                    _M = _M < 10 ? ('0' + _M) : _M;
                    _D = _D < 10 ? ('0' + _D) : _D;
                    _h = _h < 10 ? ('0' + _h) : _h;
                    _m = _m < 10 ? ('0' + _m) : _m;

                var Y2 = date.getFullYear(),
                    _M2 = date.getMonth() + 1,
                    _D2 = date.getDate(),
                    _h2 = date.getHours(),
                    _m2 = date.getMinutes(),

                    _M2 = _M2 < 10 ? ('0' + _M2) : _M2;
                    _D2 = _D2 < 10 ? ('0' + _D2) : _D2;
                    _h2 = _h2 < 10 ? ('0' + _h2) : _h2;
                    _m2 = _m2 < 10 ? ('0' + _m2) : _m2;

                this.set({
                    "from": Y+"/"+_M+"/"+_D,
                    "to": Y2+"/"+_M2+"/"+_D2,
                    "from-hour": _h,
                    "to-hour": _h2,
                    "from-minute": _m,
                    "to-minute": _m2
                })
            }else{

                this.set({
                    "from": this.get('_from'),
                    "to": this.get('_to'),
                    "from-hour": this.get('fromHour'),
                    "to-hour": this.get('toHour'),
                    "from-minute": this.get('fromMinute'),
                    "to-minute": this.get('toMinute')
                })
            }

        },
        valdate:function(min,max,target){
            var v = $(this.element).find('input[name='+target+']').val();
            if(v < min) {
                this.set(target,min);
            }else if(v > max) {
                this.set(target,max);
            }
        },
        confirm: function() {
            var element = $(this.element),
                from = element.find('.date-from').val(),
                fromHour = element.find('input[name=from-hour]').val(),
                fromMinute = element.find('input[name=from-minute]').val(),
                to = element.find('.date-to').val(),
                toHour = element.find('input[name=to-hour]').val(),
                toMinute = element.find('input[name=to-minute]').val();

            if(from == "" || fromHour == "" || fromMinute == "" || to == "" || toHour == "" || toMinute == "" ){
                utils.showErrorTip('日期输入错误！');
                return;
            }

            fromHour = this.leftZero(fromHour);
            fromMinute = this.leftZero(fromMinute);
            toHour = this.leftZero(toHour);
            toMinute = this.leftZero(toMinute);

            var stringTime1 = from+" "+fromHour+":"+fromMinute+":00";
            var timestamp1 = Date.parse(new Date(stringTime1));

            var stringTime2 = to+" "+toHour+":"+toMinute+":00";
            var timestamp2 = Date.parse(new Date(stringTime2));

            if(timestamp1 >= timestamp2 ){
                utils.showErrorTip('日期输入错误！');
                return;
            }

            if(timestamp2 - timestamp1 > 1000 * 60 * 60 * 24 * 30){//最多30
                utils.showErrorTip('最多查询30天记录！');
                return;
            }

            var time = [
                from," ",fromHour,":",fromMinute,"至",to," ",toHour,":",toMinute
            ].join("");

            //element.find('input[name=timeResult]').val(time);

            this.set({
                "resultValue": time,
                "_from": from,
                "fromHour": fromHour,
                "fromMinute": fromMinute,
                "_to": to,
                "toHour": toHour,
                "toMinute": toMinute,
            });

            $(this.element).find(".date-content").hide();
            //element.find('.date-content input').val("");

            if(this.get('confirm') && typeof this.get('confirm') == "function"){
                this.get('confirm')(timestamp1, timestamp2);
            }

            $(this.element).find('.date-from').datepicker( "destroy" );
            $(this.element).find('.date-to').datepicker( "destroy" );
        },
        leftZero: function(num){
            var num = +num;
            if(num < 10){
                num = "0"+num;
            }
            return num;
        },
        initDate: function() {
            $(this.element).find('input:not([name=timeResult])').val('');
        },
        clearDate: function(){
            //$(this.element).find('input[name=timeResult]').val('');
            this.set('resultValue','')
        },
        _destroy: function(){
            $('#ui-datepicker-div').remove();
        }
    });
});