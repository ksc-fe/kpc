/**
 * @file spinner.js
 * @brief spinner组件
 * @author XU Yinfei, devinxutal@gmail.com
 * @version 
 * @date 2016-03-13
 * @methods:
 *    reset: 还原到初始值
 *    val: 获取当前值
 * @events:
 *    changed: 内容被修改时触发
 * @properties:
 *    min: 允许的最小值
 *    max: 允许的最大值
 *    value: 当前取值
 *    disabled: 禁用此控件
 */
define(['node_modules/kpc/src/views/components/spinner'], function(template) {
    return Intact.extend({
        defaults: {
            min: 0,
            max: 9999,
            value: 1,
            className: '',
            disabled: false
        },

        template: template,

        _init: function () {
            this.oldValue = this.get('value');
        },

        _increase: function (e) {
            if (this.get('disabled')) {
                return;
            }
            this._changeValue(this.get('value') + 1);
        },

        _decrease: function (e) {
            if (this.get('disabled')) {
                return;
            }
            this._changeValue(this.get('value') - 1);
        },

        _change: function (e) {
            var v = e.target.value.trim();
            var reg = /^\d+$/;
            if (this.get('disabled') || !reg.test(v)) {
                e.target.value = this.get('value');
            } else {
                this._changeValue(parseInt(v));
            }
        },

        _changeValue(newval) {
            var val = this.get('value'),
                v = Math.min(this.get('max'), Math.max(this.get('min'), newval));
            if (v === val) {
                //强制刷新文本框数据
                this.update();
            } else {
                this.trigger('changed', this, v);
                this.set('value', v);
            }
        },

        /**
         * @brief 重置为初始值
         *
         * @return
         */
        reset: function () {
            this.set('value', this.oldValue);
        },

        val: function() {
            return this.get('value');
        }
    });
});

