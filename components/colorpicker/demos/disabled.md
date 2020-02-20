---
title: 禁用状态
order: 3
---


```vdt
import Colorpicker from 'kpc/components/colorpicker';

<Colorpicker v-model="color" disabled />
```

```js
export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            color: '#d99123'
        }
    }
}
```
