export const methods = {
    required(value) {
        return value != null && value.length > 0;
    },

    digits(value, item) {
        return this.optional(item) || /^\d+$/.test(value);
    },

    email(value, item) {
        return this.optional(item) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value); 
    },

    equalTo(value, item, params) {
        const equalValue = item.form.get('_context').data.get(params);
        const equalItem = item.form.getItem(params);
        if (!equalItem._hasBindEqualToCallback) {
            item._equalToCallback = () => {
                console.log('check')
                item.validateIfDirty();
            };
            equalItem.on('$changed:value', item._equalToCallback);
            equalItem._hasBindEqualToCallback = true;

            // remove listener when destroy or change rules
            ['$destroyed'/*, '$change:rules'*/].forEach(name => {
                item.on(name, () => {
                    equalItem.off('$changed:value', item._equalToCallback);
                    equalItem._hasBindEqualToCallback = false;
                });
            });
        }

        return this.optional(item) || value === equalValue;
    },

    maxCount(value, item, params) {
        return this.optional(item) || value.length <= params;
    },
};

export const messages = {
    required: '必须填写',
    digits: '请输入数字',
    email: '请输入正确的邮箱地址',
    equalTo: '两次输入不一致',
    maxCount: function(value, item, params) {
        return `最多选择${params === 2 ? '两' : params}项`;
    },
};

export const addMethod = function(name, method, message) {
    methods[name] = method;
    messages[name] = message !== undefined ? message : messages[name];
};
