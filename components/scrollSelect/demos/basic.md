---
title: 基本用法
order: 0
---

通过`data`属性给组件指定可选项，通过`v-model`双向绑定`value`值。`data`为数组，每一项结构为：
1. `label`要展示的文案
2. `value` 该项的取值

`ScrollSelect`可以无限循坏滚动，所以数据项的长度不应过短，否则会出现重复的项；支持拖拽、点击
、滚动进行选择

```vdt
import ScrollSelect from 'kpc/components/scrollSelect';

<ScrollSelect
    data={{ self.get('data') }}
    v-model="value"
/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: Array.apply(null, {length: 12})
                .map((v, i) => ({label: i + 1 + '月', value: i}))
        };
    }
}
```
