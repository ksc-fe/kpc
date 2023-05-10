---
title: 基础用法
order: 0
---

通过`v-model`进行数据双向绑定。

```vdt
import {Switch} from 'kpc';

<div>
    <Switch v-model="value" />
</div>
```

```styl
.k-switch
    margin-right 20px
```

```ts
export default class extends Component {
    static template = template;
    static defaults() {
        return {
            value: false,
        };
    }
}
```
