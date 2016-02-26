define(['node_modules/kpc/src/views/components/table'], function(template) {
    return Intact.extend({
        defaults: {
            scheme: {},
            data: [],
            isShowCheckbox: true,
            checkedIndex: []
        },

        template: template,

        _init: function() {
            this._updateCheckedIndex();
            this.on('change:data', this._updateCheckedIndex);
        },

        _updateCheckedIndex: function() {
            this.amount = this.get('data').length;
            this.set('checkedIndex', new Array(this.amount), {silent: true});
        },

        _clickCheckAll: function(e) {
            this[e.target.checked ? 'checkAll' : 'uncheckAll']();
        },

        _clickCheckSingle: function(index, e) {
            this._checkUncheckIndex(index, $(e.target).prop('checked'));
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
            var data = this.get('body');
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
