const i18n = {
    // datepicker
    'yearMonthFormat': 'MM YYYY',
    '请选择日期和时间': 'Please select date and time',
    '请选择日期': 'Please select date',
    '1月': 'Jan',
    '2月': 'Feb',
    '3月': 'Mar',
    '4月': 'Apr',
    '5月': 'May',
    '6月': 'Jun',
    '7月': 'Jul',
    '8月': 'Aug',
    '9月': 'Sep',
    '10月': 'Oct',
    '11月': 'Nov',
    '12月': 'Dec',
    '日': 'Sun',
    '一': 'Mon',
    '二': 'Tue',
    '三': 'Wed',
    '四': 'Thu',
    '五': 'Fri',
    '六': 'Sat',
    '{n}年': '{n}',

    // dialog
    '提示': 'Tip',
    '确认': 'OK',
    '取消': 'Cancel',
    '关闭': 'Close',

    // editable
    '编辑': 'Edit',

    // validator
    '必须填写': 'This field is required.',
    '请输入数字': 'Please enter only digits.',
    '请输入正确的邮箱地址': 'Please enter a valid email address.',
    '请输入正确的网址': 'Please enter a valid URL.',
    '请输入正确的日期': 'Please enter a valid date.',
    '请输入正确的日期 (YYYY-MM-DD)': 'Please enter a valid date (ISO).',
    '请输入正确的数': 'Please enter a valid number.',
    '请输入不大于 {n} 的数': 'Please enter a value less than or equal to {n}.',
    '请输入不小于 {n} 的数': 'Please enter a value greater than or equal to {n}.',
    '请输入 {n[0]} 到 {n[1]} 之间的数': 'Please enter a value between {n[0]} and {n[1]}.',
    '请输入步长为 {n} 的数': 'Please enter a number which should be a multipe of {n}',
    '两次输入不一致': 'Please enter the same value again.',
    '两': '2',
    '最多选择 {n} 项': 'Please select no more than {n} item{s:n}.',
    '最多输入 {n} 个字符': 'Please enter no more than {n} character{s:n}.',
    '最少选择 {n} 项': 'Please select at least {n} item{s:n}.',
    '最少输入 {n} 个字符': 'Please enter at least {n} character{s:n}.',
    '请选择 {n} 到 {m} 项': 'Please select {n}~{m} item{s:m}.', 
    '请输入 {n} 到 {m} 个字符': 'Please enter {n}~{m} character{s:m}.',

    // pagination
    '{n} 条 / 页': '{n} / page',
    '跳至': 'Goto',
    '页': '',
    '共 {n} 条': 'Total {n}',

    // table
    '/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~': '/(ㄒoㄒ)/~~ No data to display.',

    // transfer
    '请输入': 'Please enter',
    '请选择': 'Please select',
    '已选择': 'Selected',

    // select
    '请输入或选择': 'Please enter or select',
};

export default i18n; 

if (typeof global.Kpc !== 'undefined') {
    Kpc.utils.localize(i18n);
}
