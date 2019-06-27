---
title: 自定义图标
order: 3
---

通过`icon`扩展点，可以自定义图标

```vdt
import Rate from 'kpc/components/rate';
import Icon from 'kpc/components/icon';

<Rate v-model="value">
    <b:icon><Icon class="ion-heart" /></b:icon>
</Rate>
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
