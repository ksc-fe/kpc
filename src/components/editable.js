/**
 * @file editable.js
 * @brief editable组件
 * @author Javey, jiawei23716@sina.com
 * @version 
 * @date 2016-03-11
 * @methods:
 *    reset: 还原到初始值
 * @events:
 *    changed: 内容被修改时触发
 * @properties:
 *    validate: 文本框验证规则，正则或函数
 *    onError：验证失败的回调，默认弹出“输入不合法”的错误提示
 *    template: 如果要编辑的内容并非纯文本，可以传入该模板字符串 如：template="<a>{{ self.get('text') }}</a>"
 *    text: 同上，需要指定编辑的文本
 */
define(['node_modules/kpc/src/views/components/editable'], function(template) {
    return Intact.extend({
        defaults: {
            isEditing: false,
            text: undefined,
            validate: undefined,
            template: undefined,
            className: '',
            onError: function() { utils.showErrorTip('输入不合法') } 
        },

        template: template,

        _init: function() {
            if (this.get('text') === undefined) {
                this._useChildren = true;
                this._setTextByChildren(true);
            }
            if (this.get('template') != undefined) {
                this.subTemplate = Vdt.compile(this.get('template'));
            } else {
                this.subTemplate = Vdt.compile('return self.get("text")', { autoReturn: false });
            }

            this.oldText = this.get('text');
        },

        _setTextByChildren: function(previous) {
            // 将子元素作为text
            if (previous) {
                this.set('text', _.filter(this.get('children'), function(child) {
                    if (_.isString(child) && $.trim(child) || _.isNumber(child)) {
                        return true;
                    }
                }).join(''), {silent: true});
            }
        },

        _onBlur: function(e) {
            if (this.isEsc || this.isEnter) return;
            this.setText(e.target.value);
        },

        _onKeydown: function(e) {
            switch (e.keyCode) {
                case 27: // esc
                    this.isEsc = true;
                    this.set('isEditing', false);
                    break;
                case 13: // enter
                    this.isEnter = true;
                    this.setText(e.target.value);
                    break;
            }
        },

        _editing: function() {
            this.isEsc = false;
            this.isEnter = false;
            this.set('isEditing', true);
            $(this.element).find('.c-input').focus();
        },

        setText: function(text) {
            var validate = this.get('validate'),
                valid = true;
            // 验证输入合法性
            if (validate) {
                if (_.isFunction(validate)) {
                    valid = validate(text); 
                } else if (_.isRegExp(validate)) {
                    valid = validate.test(text);
                } else if (_.isString(validate)) {
                    valid = (new RegExp(validate)).test(text);
                }
            }
            // 如果验证不通过，则派发error事件，可以用于弹出一些错误提示
            if (!valid) {
                this.set('isEditing', false);
                this.get('onError') && this.get('onError')(text);
                return this.trigger('error', text);
            }
            this.oldText = this.get('text');
            if (this.oldText !== text) {
                this.trigger('changed', this, text, this.oldText);
            }
            // 标识是否是自己触发的更新，以区分与父级变更触发的更新
            this.set({isEditing: false, text: text});
        },

        _beforeUpdate: function(previous) {
            if (this._useChildren) {
                this._setTextByChildren(previous);
            }
        },

        /**
         * @brief 重置为初始值
         *
         * @return 
         */
        reset: function() {
            this.set('text', this.oldText);
        }
    });
});
