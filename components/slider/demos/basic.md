---
title: 基础用法
order: 0
---

用`min`和`max`指定取值范围，`v-model`进行双向数据绑定。动态改变组件的取值范围，组件会修正`value`
值不让它超出该范围

```vdt
import Slider from 'kpc/components/slider';
import Button from 'kpc/components/button';

<div>
    <Slider v-model="value1" min={{ self.get('min') }} max={{ self.get('max') }} spinnerSuffix="MB"/>
    <Slider v-model="value2" min={{ 50 }} max={{ 500 }} ref="__test" />
    <Button ev-click={{ self._changeRange }}>Change Range Randomly</Button>
</div>
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            'value1': 60,
            'value2': 277,
            'min': 0,
            'max': 100,
        }
    }

    _changeRange() {
        const max = Math.floor(Math.random() * 100);
        const min = Math.floor(Math.random() * max);
        this.set({max, min});
    }
}
```

```vue-methods
_changeRange() {
    this.max = Math.floor(Math.random() * 100);
    this.min = Math.floor(Math.random() * this.max);
}
```
