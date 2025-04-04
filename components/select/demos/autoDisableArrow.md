---
title: 自动禁用下拉箭头
order: 11
---

给`Select`添加`autoDisableArrow`属性，可以在如下情况下给下拉箭头一个`disabled`状态，来提示用户当前没有更多选择

1. 当没有`Option`时
2. 当只有一个`Option`并且用户已经选择了该`Option`时

```vdt
import {Select, Option} from 'kpc';

<div>
    <Select autoDisableArrow>
    </Select>
    <Select v-model="day" autoDisableArrow clearable>
        <Option value="Monday">星期一</Option>
    </Select>
</div>
```

```styl
.k-select
    margin-right 16px
```

```ts
interface Props {
    day?: string | null
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            day: null,
        } as Props;
    }
}
```
