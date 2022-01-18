---
title: 开关值
order: 5
---

`Switch`默认选中的值为`true`，非选中的值为`false`，通过`trueValue`和`falseValue`属性，
我们可以指定选中和非选中的值。

```vdt
import {Switch} from 'kpc';

<div>
    <div style="margin-bottom: 20px">
        <Switch v-model="value1" />
        {JSON.stringify(this.get('value1'))}
    </div>
    <div>
        <Switch v-model="value2"
            trueValue={1}
            falseValue="1"
        />
        {JSON.stringify(this.get('value2'))}
    </div>
</div>
```

```ts
interface Props {
    value1?: boolean 
    value2?: number | string
}

export default class extends Component<Props> {
    static template = template;
    static defaults() {
        return {
            value1: false,
            value2: '1'
        } as Props;
    }
}
```
