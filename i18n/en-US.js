const i18n = {
    // datepicker
    'yearMonthFormat': 'MM YYYY',
    '请选择日期和时间': 'Please select date and time',
    '请选择日期': 'Please select date',
    '开始时间 ~ 结束时间': 'Begin time ~ End time',
    '开始日期 ~ 结束日期': 'Begin date ~ End date',
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
    '今天': 'Today',
    '昨天': 'Yesterday',
    '明天': 'Tomorrow',
    '一周后': 'After one week',
    '一月后': 'After one month',
    '三月后': 'After three months',
    '一周前': 'Before one week',
    '一月前': 'Before one month',
    '三月前': 'Before three months',
    '上一周': 'Last week',
    '下一周': 'Next week',
    '上一个月': 'Last month',
    '下一个月': 'Next month',
    '前三个月': 'Last three months',
    '后三个月': 'Next three months',

    // timepicker
    '请选择时间': 'Please select time',
    '开始时间': 'Begin Time',
    '结束时间': 'End Time',

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
    '全选': 'Select all',
    '清空': 'Clear all',

    // select
    '请输入或选择': 'Please enter or select',

    // upload
    '点击上传': 'Click to Upload',
    '将文件拖到此处，或点击上传': 'Drag file to this area or click to upload',
    '查看图片': 'View Image',
    '超出文件数量最大限制：{limit}': 'Exceed the maximum limit of the number of files: {limit}',
    '"{name}" 超出文件最大限制：{maxSize}kb': '"{name}" exceeds the maximum size of file: {maxSize}kb',
};

export default i18n; 

if (typeof global.Kpc !== 'undefined') {
    Kpc.utils.localize(i18n);
}
