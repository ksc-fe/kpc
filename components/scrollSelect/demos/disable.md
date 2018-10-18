---
title: 禁用状态
order: 2
---

给`ScrollSelect`添加`disabled`属性，可以禁用整个组件；给组件添加`disable`函数用来禁用单独的数据项。
本例中，我们可以传入`disable`函数来禁用闰年选项

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
                    label: `${year}年`,
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
