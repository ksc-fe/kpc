---
title: 基本用法
order: 0
---

`Checkbox`的基本用法，及禁用状态。通过`v-model`进行数据双向绑定。由于`trueValue`的默认值为`true`，所以可以直接传入`value=true`
来指定选中状态。

> 选中状态的判定条件是`value === trueValue || value.includes(trueValue)`，对于值为对象的情况要注意是否是同一引用。

```vdt
import {Checkbox} from 'kpc';

<div>
    <Checkbox v-model="value">checkbox</Checkbox>
    <Checkbox disabled>disabled checkbox</Checkbox>
    <Checkbox value={true} disabled>disabled checked checkbox</Checkbox>
</div>
```

```ts
interface Props {
    value?: boolean
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            value: false
        }
    }
}
```
