define(['node_modules/kpc/src/views/components/table'], function(template) {
    return Intact.extend({
        defaults: {
            scheme: {},
            data: [],
            isShowCheckbox: true,
            checkType: 'checkbox', // radio / checkbox
            isRowCheck: false, // 整行点击选中
            checkedIndex: [],
            resizable: false
        },

        template: template,

        _init: function() {
            this._updateCheckedIndex(true);
            this.on('change:data', this._updateCheckedIndex);
        },

        _create: function(){

            var $table = $(this.element).find('table');
            var eventId = '.resize-table-col';
            var minWidth = 30;
            if(this.get('resizable')) {
                setTimeout(function() {
                    initTable();
                    function initTable() {
                        var arr={};
                        var initWidth = $table.width();
                        $.each($table.find('th'), function(index, obj) {
                            if($(obj).attr('name') !== undefined) {
                                arr[$(obj).attr('name')] = $(obj).width();
                            }
                        });
                        $table.find('.th-resizable').on('mousedown', function(e){
                            $th = $(e.target).parent();
                            var originWidth = $th.width();  //每个th初始化宽度
                            var tableWidth = $table.width(); //table初始化 宽度
                            var startX = e.clientX;
                            minWidth = arr[$th.attr('name')];

                            $table.find('thead').css({
                                '-wekbit-user-select': 'none',
                                '-moz-user-select': 'none',
                                '-ms-user-select': 'none'
                            });

                            $(document).on('mousemove' + eventId, function(e){
                                var diff = e.clientX - startX;
                                var w = originWidth + diff;

                                if(w >= minWidth){
                                    $th.width(w);
                                    $table.width(tableWidth+diff);
                                }
                            }).on('mouseup' + eventId, function(e){
                                var diff = e.clientX - startX;
                                var w = originWidth + diff;
                                if(w < minWidth){
                                    $th.width(minWidth);
                                    $table.width(initWidth);
                                }
                                $table.find('thead').css({
                                    '-wekbit-user-select': '',
                                    '-moz-user-select': '',
                                    '-ms-user-select': ''
                                });
                                $(document)
                                    .off('mousemove' + eventId)
                                    .off('mouseup' + eventId);
                            })
                        });
                    }
                    $(window).resize(function() {
                        $table.find('th').removeAttr('style');
                        $table.width("100%");
                        initTable();
                    })
                })
            }
        },

        _updateCheckedIndex: function(silent) {
            this.amount = this.get('data') && this.get('data').length || 0;
            this.set('checkedIndex', new Array(this.amount), {silent: silent === true});
        },

        _clickCheckAll: function(e) {
            this[e.target.checked ? 'checkAll' : 'uncheckAll']();
        },

        _clickCheckSingle: function(index, e) {
            var checkedIndex = this.get('checkedIndex');
            if (this.get('checkType') === 'radio') {
                _.find(checkedIndex, function(item, i) {
                    if (item) {
                        i !== index && (checkedIndex[i] = false);
                        return true;
                    }
                });
            }
            this._checkUncheckIndex(index, !checkedIndex[index]);
        },

        isCheckedAll: function() {
            return this.amount && this.getCheckedAmount() === this.amount;
        },

        isUncheckedAll: function() {
            return !this.getCheckedAmount();
        },

        getCheckedAmount: function() {
            return _.reduce(this.get('checkedIndex'), function(memo, isCheck) {
                if (isCheck) memo++;
                return memo;
            }, 0);
        },

        getCheckedIndexes: function() {
            return _.reduce(this.get('checkedIndex'), function(memo, isCheck, index) {
                if (isCheck) memo.push(index);
                return memo;
            }, []);
        },

        getCheckedData: function() {
            var data = this.get('data');
            return _.reduce(this.getCheckedIndexes(), function(memo, index) {
                memo.push(data[index]);
                return memo;
            }, []);
        },

        checkAll: function() {
            this.checkIndex(_.range(this.amount));
        },

        uncheckAll: function() {
            this.uncheckIndex(_.range(this.amount));
        },

        checkIndex: function(indexes) {
            this._checkUncheckIndex(indexes, true);
        },

        uncheckIndex: function(indexes) {
            this._checkUncheckIndex(indexes, false);
        },

        _checkUncheckIndex: function(indexes, isCheck) {
            if (_.isNumber(indexes)) {
                indexes = [indexes];
            }
            var checkedIndex = _.clone(this.get('checkedIndex'));
            _.each(indexes, function(index) {
                checkedIndex[index] = isCheck;
            });
            this.set('checkedIndex', checkedIndex);
        }
    });
});
