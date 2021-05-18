---
title: 范围选择
order: 3
---

指定`isRange`使组件支持范围选择，此时`v-model`绑定的数据为数组，并且不会展示`input`输入框。

```vdt
import Slider from 'kpc/components/slider';

<Slider isRange v-model="values" />
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            values: [50, 76],
        }
    }
}
```
