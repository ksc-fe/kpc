---
title: 可清除的
order: 2
---

添加`clearable`属性可以使组件在再次点击后清空值

```vdt
import {Rate} from 'kpc/components/rate';

<Rate v-model="value" clearable />
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            value: 2
        };
    }
}
```
