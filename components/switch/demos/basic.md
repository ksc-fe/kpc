---
title: 基础用法
order: 0
---

`Switch`默认为线性类型开关通过`plane`属性切换为启面性类型，通过`v-model`进行数据双向绑定。

```vdt
import {Switch} from 'kpc';

<div>
    <Switch v-model="value" />
    <Switch v-model="value" plane />
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
