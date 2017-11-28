function decimalPlaces(num) {
    var match = ("" + num).match(/(?:\.(\d+))?$/);
    if (!match) {
        return 0;
    }

    // Number of digits right of decimal point.
    return match[1] ? match[1].length : 0;
}

export const methods = {
    required(value) {
        return value != null && value.length > 0;
    },

    digits(value) {
        return /^\d+$/.test(value);
    },

    email(value) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value); 
    },

    url(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    },

    date(value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    },

    dateISO(value) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    },

    number(value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },

    minLength(value, item, param) {
        return value.length >= param;
    },

    maxLength(value, item, param) {
        return value.length <= param;
    },

    rangeLength(value, item, param) {
        const length = value.length;
        return length >= param[0] && length <= param[1];
    },

    min(value, item, param) {
        return value >= param;
    },

    max(value, item, param) {
        return value <= param;
    },

    range(value, item, param) {
        return value >= param[0] && value <= param[1];
    },

    step(value, item, param) {
        const decimals = decimalPlaces(param);
        const toInt = num => Math.round(num * Math.pow(10, decimals));

        return decimalPlaces(value) <= decimals && toInt(value) % toInt(param) === 0;
    },

    equalTo(value, item, param) {
        const equalValue = item.form.get('_context').data.get(param);
        const equalItem = item.form.getItem(param);
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

        return value === equalValue;
    },
};

function count(num) {
    return num === 2 ? '两' : num;
}

export const messages = {
    required: '必须填写',
    digits: '请输入整数',
    email: '请输入正确的邮箱地址',
    url: '请输入正确的网址',
    date: '请输入正确的日期',
    dateISO: '请输入正确的日期 (YYYY-MM-DD)',
    number: '请输入正确的数字',
    maxLength(value, item, param) {
        if (Array.isArray(value)) {
            return `最多选择${count(param)}项`;
        } else {
            return `最多输入${count(param)}个字符`;
        }
    },
    minLength(value, item, param) {
        if (Array.isArray(value)) {
            return `最少选择${count(param)}项`;
        } else {
            return `最少输入${count(param)}个字符`;
        }
    },
    rangeLength(value, item, param) {
        if (Array.isArray(value)) {
            return `请选择${count(param[0])}到${count(param[1])}项`;
        } else {
            return `请输入${count(param[0])}到${count(param[1])}个字符`;
        }
    },
    max(value, item, param) {
        return `请输入不大于${param}的数`;
    },
    min(value, item, param) {
        return `请输入不小于${param}的数`;
    },
    range(value, item, param) {
        return `请输入${param[0]}到${param[1]}之间的数`;
    },
    step(value, item, param) {
        return `请输入步长为${param}的数`;
    },
    equalTo: '两次输入不一致',
};

export const addMethod = function(name, method, message) {
    methods[name] = method;
    messages[name] = message !== undefined ? message : messages[name];
};
