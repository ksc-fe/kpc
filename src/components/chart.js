define(['node_modules/kpc/src/views/components/chart',
    'node_modules/kpc/src/common/js/lib/highcharts'], function(template) {
    var bytesSymbols = ['k', 'M', 'G', 'T', 'P', 'E'];
    var bytesSpeedSymbols = ['k/s', 'M/s', 'G/s', 'T/s', 'P/s', 'E/s'];
    function yaxisFormat(numericSymbolDetector, numericSymbols, decide) {
        if(decide == undefined) {
            decide = -1;
        }
        var i = numericSymbols.length;
        var multi;
        var ret;
        if (i && numericSymbolDetector >= 1000) {
            while (i-- && ret === undefined) {
                multi = Math.pow(1000, i + 1);
                if (numericSymbolDetector >= multi && numericSymbols[i] !== null) {
                    ret = Highcharts.numberFormat(numericSymbolDetector/ multi, decide)  + numericSymbols[i];
                }
            }
            return ret;
        }
        return numericSymbolDetector;
    }
    function dateTimeFormat(dateTime) {
        var date = new Date(dateTime);
        var Y = date.getFullYear(),
            _M = date.getMonth() + 1,
            _D = date.getDate(),
            _h = date.getHours(),
            _m = date.getMinutes(),
            _s = date.getSeconds(),
            _M = _M < 10 ? ('0' + _M) : _M;
            _D = _D < 10 ? ('0' + _D) : _D;
            _h = _h < 10 ? ('0' + _h) : _h;
            _m = _m < 10 ? ('0' + _m) : _m;
            _s = _s < 10 ? ('0' + _s) : _s;
        return _M+"月"+_D+"日"+" "+_h+":"+_m+":"+_s;
    }
    return Intact.extend({
        defaults: {
            data: null, //列表数据
            resetZoom: false, //是否可以图表缩放
            type: 'line', //图类型 默认line
            monitorAjax:null, //获取图表信息异步请求
            allowDecimals:true, //中坐标是否可以显示小数
            pointNumber: 100 //默认查询图表点的数量
        },
        template: template,
        _init: function() {
            var fetch = _.debounce(_.bind(this.fetch, this), 100),
                draw = _.debounce(_.bind(this.draw, this), 100);
            this.on('change:data', draw);
            this.on('change:_title', draw);
            this.on('change:graphid', fetch);
            this.on('change:start', fetch);
            this.on('change:end', fetch);
        },
        _create: function() {
            //是否显示放大按钮
            if(!this.get('fullScreen')){
                $(this.element).find('.chart-icon').remove();
            }
            this.fetch();
        },
        fetch: function() {
            var self = this;
            //终端之前ajax请求
            self.abortAjax();
            $(self.element).find('.spinner').show();

            //绘制空表
            var loadDate = { xaxais: [], yaxais: {} };
            loadDate['yaxais'][self.get('chartTitle')] = null;
            self.set({
                '_title': self.get('chartTitle'),
                'data': loadDate
            });
            //绘制空表
            var monitorAjax = self.get('getDataApi').call(null, {
                "start":self.get('start'),
                "end":self.get('end'),
                "pointNumber":self.get('pointNumber'),
                "instance":self.get('instance'),
                "lines":self.get('lines')
            })
            self.set('monitorAjax',monitorAjax);

            function renderEmpty(){
                var key = self.get("chartTitle");
                var obj = {};
                obj[key] = [0];
                loadDate["xaxais"] = 0;
                loadDate["yaxais"] = obj;
                self.set({
                    '_title': self.get('chartTitle')+"（没有查询到监控数据）",
                    'data': loadDate,
                    'interval': loadDate.interval
                });
            }
            monitorAjax.done(function(data) {
                $(self.element).find('.spinner').hide();
                if (!data.data) {
                    renderEmpty();
                } else {
                    loadDate = data.data;
                    self.set({
                        '_title': self.get('chartTitle'),
                        'data': loadDate,
                        'interval': loadDate.interval
                    });
                }
                //需要注释
                //self.draw();
            }).fail(function(e){
                $(self.element).find('.spinner').hide();
                //失败则绘制空表 不回弹出提示
                //if(e.status && e.status === 1) {
                    renderEmpty();
                //} else if(e.statusText != "abort") {
                //    utils.showErrorTip("获取监控数据失败！");
                //}

            });
        },
        //终端请求
        abortAjax: function() {
            if(this.get('monitorAjax')){
                this.get('monitorAjax').abort();
                this.set('monitorAjax',null, {silent: true});
            }
        },
        draw: function() {
            var data = this.get('data');
            var _x = data.xaxais,
                _y = data.yaxais;

            var settings = {};
            settings.title = this.get('_title');
            settings.unit = this.get('unit')?'(' + this.get('unit') + ')':"";
            settings.allowDecimals = this.get("allowDecimals");
            settings.pointInterval = this.get('interval');

            var series = this.generateSeries(_x[0], _y, settings);
            this.drawHighcharts(settings, series);
        },
        generateSeries: function(start, yaxais, settings) {
            var series = [];
            for(var y in yaxais){
                var line = {};
                line.type = settings.type;
                // todo: 根据不同的图表，不同的参数，显示不同的名称
                //line.name = this.get('name');
                line.type = this.get('type');

                if(this.get('filterLineName') && typeof this.get('filterLineName') == 'function'){
                    line.name = this.get('filterLineName')(y);
                }else{
                    line.name = y;
                }
                line.data = yaxais[y]; // data 选项 : y 轴数据
                line.pointStart = start * 1000; // pointStart 选项 : x 轴起点
                line.pointInterval = settings.pointInterval; // pointInterval 选项 : x 轴间隔显示单位  // 24* 3600*1000 one day

                series.push(line);
            }

            return series;
        },
        drawHighcharts: function (settings, series) {
            var self = this;
            var options = {
                lang: {
                    resetZoom: '重置',
                    resetZoomTitle:"重置缩放比例"
                },// 用于缩短高数轴标签。如果用null更换任何位置，将需要写入完整的数字。默认是： k,M,G,T,P,E.  Demo : http://code.hcharts.cn/highcharts/hhhh8s
                global: {
                    useUTC: false
                },
                credits: {
                    enabled: false
                },
                colors : ['#74bcef', '#ff7f00', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                title: {
                    text: settings.title,
                    align: 'left',
                    x: 0,
                    y: 5,
                    style: {
                        fontSize: '14px'
                    }
                },
                tooltip: {
                    shared: true,
                    //headerFormat: '<small>{point.key: %m月%d日 %H:%M:%S}</small> <br/>',
                    formatter: function() {
                        var s = '<b>' + dateTimeFormat(this.x) + '</b>';
                        $.each(this.points, function () {
                            s += '<br/><span style="color:'+this.series.color+'">\u25CF</span>' + this.series.name + ': ';

                            if(self.get('unit') == "bytes"){
                                s = s + yaxisFormat(this.y, bytesSymbols, 2)
                            } else if(self.get('unit') == "bytes/s") {
                                //s = s + yaxisFormat(this.y, bytesSpeedSymbols, 2)
                                s = s + yaxisFormat(this.y, bytesSymbols, 2)
                            }else {
                                s = s + this.y;
                            }

                        });
                        return s;
                    },
                    //valueDecimals: 2,
                    valueSuffix: settings.
                     // unit 选项 : 悬浮框, y 轴数值单位
                },
                plotOptions: {
                    area: {
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        },
                        shadow: false,
                        threshold: 0
                    },
                    line: {
                        lineWidth: 2,
                        marker: {
                            enabled: false
                        },
                        shadow: false,
                        threshold: 0
                    }
                },
                xAxis: {
                    type: 'datetime',
                    //tickInterval: settings.tickInterval , // tickInterval 选项 :  '{value: %m月%d日 %H:%M}'
                    //labels: {
                        //format: settings.format, // format 选项 :  '{value: %m月%d日 %H:%M}',
                        //formatter: function() {
                        //    console.log(this)
                        //    //return utils.formatTimestamp(this.value);
                        //    return new Date(this.value).format("yyyy年MM月dd日 hh:mm:ss");
                        //}
                    //},
                    dateTimeLabelFormats:{
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '<span style="color:cornflowerblue">%m.%d</span>',
                        week: '%e. %b',
                        month: '%b \'%y',
                        year: '%Y'
                    }
                },
                yAxis: {
                    //type: 'logarithmic',
                    //min: 0,
                    labels: {
                        formatter: function() {
                            if(self.get('unit') == "bytes"){
                                return yaxisFormat(this.value, bytesSymbols);
                            } if(self.get('unit') == "bytes/s") {
                                //return yaxisFormat(this.value, bytesSpeedSymbols);
                                return yaxisFormat(this.value, bytesSymbols);
                            }else {
                                return this.value;
                            }
                        }
                    },
                    title: {
                        align: 'high',
                        offset: 0,
                        text: settings.unit, // text 选项 : y 轴数值单位
                        rotation: 0,
                        x: -10,
                        y: -10
                    },
                    floor: null,		// 允许最低的自动计算的坐标轴刻度极端值.  Demo : http://code.hcharts.cn/highcharts/hhhhn6
                    ceiling: settings.yMax || null,	// 允许最高的自动计算的坐标轴刻度极端值
                    allowDecimals:settings.allowDecimals
                }
            };

            Highcharts.setOptions(options);
            var chartOption = {
                chart: {
                    backgroundColor: '#f4f7fa',
                    renderTo: $(this.element).find('.chart-canvas')[0]
                    //,events: {
                    //    selection: function(e) {
                    //        // 事件处理代码，可以通过 console.log(e) 查看更多详细信息
                    //        console.log(e)
                    //    }
                    //}
                },
                series: series
            }

            if(this.get('resetZoom')){
                chartOption.chart.zoomType = 'x';
            }
            new Highcharts.Chart(chartOption);
        },
        showFullScreen: function() {
            $(this.element).find('.chart-icon').show();
        },
        hideFullScreen: function() {
            $(this.element).find('.chart-icon').hide();
        },
        showDetail: function() {
            this.get('getDetail')({
                chartTitle: this.get('chartTitle'),
                unit: this.get('unit'),
                type: this.get('type'),
                graphid: this.get('graphid'),
                lines: this.get('lines'),
                instance: this.get('instance'),
                start: this.get('start'),
                end: this.get('end')
            });
        }
    })
});


