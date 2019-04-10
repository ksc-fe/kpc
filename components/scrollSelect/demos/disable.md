---
title:
    zh-CN: 禁用状态
    en-US: Disabled state
order: 2
---

## zh-CN

给`ScrollSelect`添加`disabled`属性，可以禁用整个组件；给组件添加`disable`函数用来禁用单独的数据项。
本例中，我们可以传入`disable`函数来禁用闰年选项

## en-US

Add `disabled` to `ScrollSelect` to disable the entire component; add a `disable` function to the component to disable individual data items.
In this case, we can pass the `disable` function to disable the leap year option.

```vdt
import ScrollSelect from 'kpc/components/scrollSelect';

<ScrollSelect
    data={{ self.generateData }}
    v-model="value"
    disable={{ self.disable }}
/>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            value: 2018
        };
    }

    generateData(value) {
        const start = value - 5;
        return Array.apply(null, {length: 10})
            .map((v, i) => {
                const year = start + i;
                return {
                    label: `${year} year`,
                    value: year
                };
            });
    }

    disable(value) {
        // 排除闰年
        return value % 4 === 0 && (value % 100 !== 0 || value % 400 === 0);
    }
}
```
