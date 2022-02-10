---
title: 快捷方式
order: 0.1
---

通过`shortcuts`属性可以指定快捷方式，数组的成员为对象，形如：`{label, value}`:

1. `label` `String | vNode | Function` 指定要展示的文案，可以是返回文案的函数
2. `value` `Function` 指定选中后的值（日期对象），如果是范围选择，返回数组

组件内置了一些快捷方式，可以直接使用，如本例所示

```vdt
import {Datepicker, shortcuts} from 'kpc';

<div>
    <Datepicker v-model="date" shortcuts={[
        shortcuts.yesterday,
        shortcuts.today,
        shortcuts.tomorrow,
        shortcuts.afterOneWeek,
        shortcuts.afterOneMonth,
        shortcuts.afterThreeMonths,
        shortcuts.beforeOneWeek,
        shortcuts.beforeOneMonth,
        shortcuts.beforeThreeMonths
    ]}/>
    <Datepicker range type="datetime" 
        shortcuts={[
            shortcuts.lastWeek,
            shortcuts.lastMonth,
            shortcuts.lastThreeMonths,
            shortcuts.nextWeek,
            shortcuts.nextMonth,
            shortcuts.nextThreeMonths
        ]}
    />
</div>
```

```styl
.k-datepicker
    margin-right 20px
```

```ts
interface Props {
    date?: string | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            data: null
        } as Props;
    }
}
```

```vue-data
data() {
    return {
        date: null,
        shortcuts,
    };
},
```
