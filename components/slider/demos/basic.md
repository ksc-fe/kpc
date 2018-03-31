---
title: 基础用法
order: 0
---

用`min`和`max`指定取值范围，`v-model`进行双向数据绑定

```vdt
import Slider from 'kpc/components/slider';

<div>
    <Slider v-model="value1" />
    <Slider v-model="value2" min={{ 50 }} max={{ 500 }} />
</div>
```

```styl
.k-slider
    margin-bottom 20px
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            'value1': 60,
            'value2': 277,
        }
    }
}
```
