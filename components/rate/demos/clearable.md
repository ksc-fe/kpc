---
title:
    zh-CN: 可清除的
    en-US: Clearable
order: 2
---

## zh-CN

添加`clearable`属性可以使组件在再次点击后清空值

## en-US

Adding the `clearable` attribute causes the component to clear the value after clicking again

```vdt
import Rate from 'kpc/components/rate';

<Rate v-model="value" clearable />
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {value: 2};
    }
}
```
