---
title: 快捷方式
order: 0.1
---

通过`shortcuts`属性可以指定快捷方式，数组的成员为对象，形如：`{label, value}`:

1. `label` `String | vNode | Function` 指定要展示的文案，可以是返回文案的函数
2. `value` `Function` 指定选中后的值（日期对象），如果是范围选择，返回数组

组件内置了一些快捷方式，可以直接使用，如本例所示

```vdt
import Datepicker from 'kpc/components/datepicker';

<div>
    <Datepicker v-model="date" shortcuts={{ [
        Datepicker.yesterday,
        Datepicker.today,
        Datepicker.tomorrow,
        Datepicker.afterOneWeek,
        Datepicker.afterOneMonth,
        Datepicker.afterThreeMonths,
        Datepicker.beforeOneWeek,
        Datepicker.beforeOneMonth,
        Datepicker.beforeThreeMonths,
    ] }}/>
    <Datepicker range type="datetime" 
        shortcuts={{ [
            Datepicker.lastWeek,
            Datepicker.lastMonth,
            Datepicker.lastThreeMonths,
            Datepicker.nextWeek,
            Datepicker.nextMonth,
            Datepicker.nextThreeMonths,
        ] }}
    />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```

```vue-data
data() {
    return {
        date: null,
        Datepicker,
    };
},
```
